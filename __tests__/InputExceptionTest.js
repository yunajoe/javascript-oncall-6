// const runException = async (input) => {
//   // given
//   const logSpy = getLogSpy();

//   const RANDOM_NUMBERS_TO_END = [1, 2, 3, 4, 5, 6];
//   const INPUT_NUMBERS_TO_END = ["1000", "1,2,3,4,5,6", "7"];

//   mockRandoms([RANDOM_NUMBERS_TO_END]);
//   mockQuestions([input, ...INPUT_NUMBERS_TO_END]);

//   // when
//   const app = new App();
//   await app.run();

//   // then
//   expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("[ERROR]"));
// };
