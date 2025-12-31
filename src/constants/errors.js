const MONTH_AND_DAY_ERROR_MESSAGE = {
  EMPTY_INPUT: "[ERROR] 빈 문자열은 허용이 안됩니다.",
  MONTH_INPUT: "[ERROR] 월 입력은 1~12 까지만 사용이 되어야 합니다.",
  DAY_INPUT: "[ERROR] 요일 입력은 월~일 까지만 사용이 되어야 합니다.",
};

const WEEK_DAY_ERROR_MESSAGE = {
  EMPTY_INPUT: "[ERROR] 빈 문자열은 허용이 안됩니다.",
  NAME_LENGTH_INPUT: "[ERROR] 이름은 최소 1글자 최대 5글자만 허용이 됩니다.",
  TOTAL_WORKERS_LENGTH_INPUT:
    "[ERROR] 근무자는 총 5명이상 35명 이하여야 합니다.",
};

export { MONTH_AND_DAY_ERROR_MESSAGE, WEEK_DAY_ERROR_MESSAGE };
