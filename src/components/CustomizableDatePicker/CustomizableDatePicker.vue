<script lang="ts" setup>
import {computed, onMounted, ref, watch} from "vue";
import {Day, InputValue, Page, RangeValue} from "../../interfaces/Calendar";
import MainHeader from "../../components/MainHeader";
import MonthTable from "../../components/MonthTable";
import {
  ICustomizableDatePickerEmits,
  ICustomizableDatePickerProps,
} from "./CustomizableDatePicker.interface";

const props = defineProps<ICustomizableDatePickerProps>();
const emit = defineEmits<ICustomizableDatePickerEmits>();
const currentCalendar = computed(() => props.currentCalendar ?? 0);
const calendar = computed(() => props.calendars![currentCalendar.value]);
const value = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit("update:modelValue", value);
  },
});
const monthCount = computed(() => props.monthCount ?? 1);

const year = ref(calendar.value.currentYear);
const month = ref(calendar.value.currentMonth);
watch(calendar, (cal) => {
  year.value = cal.currentYear;
  month.value = cal.currentMonth;
});
const selectedFirstRange = ref<Date | null>(null);
const currentHoveredDay = ref<Day | null>(null);
const dateTables = ref<Page[]>([]);
onMounted(() => {
  for (let monthIndex = 0; monthIndex < monthCount.value; monthIndex++) {
    const tableYear =
        month.value + monthIndex > 11 ? year.value + 1 : year.value;
    const tableMonth =
        month.value + monthIndex < 12
            ? month.value + monthIndex
            : (month.value + monthIndex) % 12;
    dateTables.value.push({year: tableYear, month: tableMonth});
  }
});

const appendMonth = () => {
  const last = dateTables.value[dateTables.value.length - 1];
  const year = last.month === 11 ? last.year + 1 : last.year;
  const month = (last.month + 1) % 12;
  dateTables.value.push({year, month});
};

const prependMonth = () => {
  const first = dateTables.value[0];
  const year = first.month === 0 ? first.year - 1 : first.year;
  const month = first.month === 0 ? 11 : first.month - 1;
  dateTables.value.unshift({year, month});
};

watch(value, () => {
  if (props.range && props.trackStart && !(value.value as RangeValue).end) {
    selectedFirstRange.value = (value.value as RangeValue).start;
  }
});

const next = () => {
  if (month.value + 1 <= 11) {
    month.value++;
  } else {
    month.value = 0;
    year.value++;
  }
  emit("page-change", {
    year: year.value,
    month: month.value,
  });
};
const prev = () => {
  if (month.value - 1 >= 0) {
    month.value--;
  } else {
    month.value = 11;
    year.value--;
  }
  emit("page-change", {
    year: year.value,
    month: month.value,
  });
};
const onDrag = (value: Date) => {
  emit("update:modelValue", {
    start: props.trackStart ? value : null,
    end: null,
  });
  emit("drag");
  selectedFirstRange.value = value;
};
const onInput = (val: InputValue) => {
  selectedFirstRange.value = null;

  emit("update:modelValue", val);
};
const onDayHover = (day: Day) => {
  currentHoveredDay.value = day;
  emit(
      "day-hover",
      calendar.value.getDate(day.year, day.month, day.dayInMonth)
  );
};
const onDayClick = (day: Day) => {
  emit("day-click", day);
  handleOnlyPick(day);
};
const handleOnlyPick = (day: Day) => {
  if (!props.onlyPick || !props.range) return;
  const val = (value.value || {}) as RangeValue;
  const newDate = calendar.value.getDate(day.year, day.month, day.dayInMonth);
  if (props.onlyPick === "start") {
    if (val.end && calendar.value.isAfter(newDate, val.end)) {
      val.end = newDate;
    }
    val.start = newDate;
  } else if (props.onlyPick === "end") {
    if (val.start && calendar.value.isAfter(val.start, newDate)) {
      val.start = newDate;
    }
    val.end = newDate;
  }
  emit("update:modelValue", value.value);
};

defineExpose({
  prev,
  next,
  appendMonth,
  prependMonth,
});
</script>

<template>
  <div class="customizable-date-picker-container">
    <MainHeader @next="next" @prev="prev">
      <template #header-next-button>
        <slot name="header-next-button"/>
      </template>
      <template #header-prev-button>
        <slot name="header-prev-button"/>
      </template>
    </MainHeader>
    <div class="month-list">
      <MonthTable
          v-for="dateTable in dateTables"
          :key="dateTable.year.toString() + dateTable.month.toString()"
          :year="dateTable.year"
          :month="dateTable.month"
          :calendar="calendar"
          :value="value"
          :range="range"
          :selected-first-range="selectedFirstRange"
          :current-hovered-day="currentHoveredDay"
          :min="props.min"
          :max="props.max"
          :only-pick-day="props.range && !!props.onlyPick"
          :unequal-range="props.unequalRange"
          :monthCount="monthCount"
          @day-click="onDayClick"
          @day-hover="onDayHover"
          @drag="onDrag"
          @input="onInput"
      >
        <template #month-title="{ startMonthDate }">
          <slot name="month-title" :startMonthDate="startMonthDate"/>
        </template>
        <template #week-header>
          <slot name="week-header"/>
        </template>
        <template #day-container="{ day, daysInMonth }">
          <slot
              name="day-container"
              :day="day"
              :daysInMonth="daysInMonth"
          />
        </template>
        <template #day="{ day }">
          <slot name="day" :day="day"/>
        </template>
      </MonthTable>
    </div>
  </div>
</template>

<style scoped lang="scss" src="./CustomizableDatePicker.scss"></style>
