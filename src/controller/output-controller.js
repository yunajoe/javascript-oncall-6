import { Console } from "@woowacourse/mission-utils";

class OutputController {
  constructor(startDay, weekDayWorkers, holidayWorkers) {
    this.startDay = startDay;
    this.weekDayWorkers = weekDayWorkers;
    this.holidayWorkers = holidayWorkers;
  }

  async printResult() {
    const calendarDates = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const calendarDays = ["월", "화", "수", "목", "금", "토", "일"];
    const [month, day] = [
      this.startDay.split(",")[0],
      this.startDay.split(",")[1],
    ];
    const startDayIndex = calendarDays.indexOf(day);
    let currentWeekDayWorkerIndex = 0;
    let currentHoliDayWorkerIndex = 0;

    for (let i = 1; i <= calendarDates[Number(month) - 1]; i++) {
      let isPublicHoliday = false;

      const dayIndex = (startDayIndex + i - 1) % 7;
      // 법정 공휴일 표시
      if (month === "1") {
        if (i === 1) {
          isPublicHoliday = true;
        }
      }
      if (month === "3") {
        if (i === 3) {
          isPublicHoliday = true;
        }
      }
      if (month === "5") {
        if (i === 5) {
          isPublicHoliday = true;
        }
      }
      if (month === "6") {
        if (i === 6) {
          isPublicHoliday = true;
        }
      }
      if (month === "6") {
        if (i === 6) {
          isPublicHoliday = true;
        }
      }
      if (month === "8") {
        if (i === 15) {
          isPublicHoliday = true;
        }
      }
      if (month === "10") {
        if (i === 3 || i === 9) {
          isPublicHoliday = true;
        }
      }
      if (month === "12") {
        if (i === 25) {
          isPublicHoliday = true;
        }
      }
      const weekDayWorkersArr = this.weekDayWorkers.split(",");
      const holidayWorkersArr = this.holidayWorkers.split(",");

      const workDay = calendarDays[dayIndex];

      const workerName =
        workDay === "토" || workDay === "일" || isPublicHoliday
          ? `${
              holidayWorkersArr[
                currentHoliDayWorkerIndex++ % holidayWorkersArr.length
              ]
            }`
          : `${
              weekDayWorkersArr[
                currentWeekDayWorkerIndex++ % weekDayWorkersArr.length
              ]
            }`;

      Console.print(
        `${month}월 ${i}일 ${workDay}${
          isPublicHoliday ? "(휴일)" : ""
        } ${workerName}`
      );
      isPublicHoliday = false;
    }
  }
}

export default OutputController;
