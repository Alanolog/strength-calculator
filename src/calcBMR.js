function calcBMR(weight, height, age, sex, setBMR) {
  if (sex === "Men") {
    setBMR(10 * +weight + 6.25 * +height - 5 * age + 5);
  } else {
    setBMR(10 * +weight + 6.25 * +height - 5 * age - 161);
  }
}
export default calcBMR;
