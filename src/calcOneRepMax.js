function calcOneRepMax(reps, weight, setMax = null) {
  let result;
  if (reps < 8) {
    result = Math.round(weight * (36 / (37 - reps)) * 10) / 10;
  } else if (reps <= 10 && reps >= 8) {
    result =
      Math.round(
        ((weight * (1 + reps / 30) + weight * (36 / (37 - reps))) / 2) * 10
      ) / 10;
  } else {
    result = Math.round(weight * (1 + reps / 30) * 10) / 10;
  }
  if (setMax == null) {
    return result;
  }
  setMax(result);
}
export default calcOneRepMax;
