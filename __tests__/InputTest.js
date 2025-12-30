import { MissionUtils } from "@woowacourse/mission-utils";
import Validator from "../src/utils/validator";

// 사용자 입력을 흉내 냄
const mockQuestions = (inputs) => {
  // 사용자 입력을 mocking한다
  MissionUtils.Console.readLineAsync = jest.fn();

  // readLineAsync가 호출될 때 어떻게 동작할지 직접 정의
  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    // inputs = ["1", "y"]  라면은 가장 맨 앞의  요소를 꺼낸다. 즉 "1"
    const input = inputs.shift();
    // 입력 받은 것 처럼 동작
    return Promise.resolve(input);
  });
};

// 출력(print)을 감시하는 스파이(spy)를 만드는 함수
const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("Input Test", () => {
  test.each([["3,월"], ["4,화"], ["5,수"], ["6,목"]])("입력 %s", (input) => {
    const validator = new Validator();
    expect(() => validator.validateMonthAndDay(input)).not.toThrow();
  });
});
