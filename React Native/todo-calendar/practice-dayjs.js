import dayjs from "dayjs";
import isBetween from "dayjs/plugin/isBetween";
dayjs.extend(isBetween);

export const runPracticeDayjs = () => {
  const hour = new Date().getHours();
  //   console.log(hour);

  const now = dayjs("2025-05-05 16:27:30");
  //   console.log(dayjs(now).set("minute", 5).format("YYYY.MM.DD hh:mm:ss a A"));

  //   console.log(dayjs(now).set("minute", 5).format("YYYY.MM.DD hh:mm:ss"));

  //   console.log(dayjs(now).get("year"));
  //   console.log("1번", dayjs(now).get("date"));
  //   console.log(dayjs(now).get("month")); // 0~11 ( 1월 ~ 12월 )
  //   console.log(dayjs(now).get("day")); // 0 ~ 6  ( 일 ~ 토 )
  //   console.log(dayjs(now).get("second"));

  //   console.log(dayjs(now).subtract(3, "hour").format("YYYY.MM.DD HH:mm:ss"));
  //   console.log(dayjs(now).startOf("month").format("YYYY.MM.DD"));
  //   console.log(dayjs(now).endOf("month").format("YYYY.MM.DD"));

  const aDate = dayjs("2025-10-29 15:00:20");
  const bDate = dayjs("2025-10-29 16:00:20");

  //   console.log(dayjs(aDate).isSame(bDate, "month"));
  //   console.log(dayjs(aDate).isSame(bDate, "hour"));
  //   console.log(dayjs(aDate).isBefore(bDate));
  //   console.log(dayjs(aDate).isBefore(bDate, "date"));
  //   console.log(dayjs(aDate).isAfter(bDate, "date"));
  // console.log(dayjs(aDate).diff(bDate, "minute"));
  // console.log(dayjs(aDate).isBetween(bDate, "minute"));
};
