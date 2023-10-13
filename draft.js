const AsyncFunc1 = async () => {
  return 4;
};
const AsyncFunc2 = async () => {
  return 5;
};

const main = async () => {
  const result = await AsyncFunc1();
  console.log(result);
};

main();
