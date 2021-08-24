function calcOneRepMax(reps, weight, setMax) {
  if (reps < 8) {
    setMax(Math.round(weight * (36 / (37 - reps)) * 10) / 10);
  } else if (reps <= 10 && reps >= 8) {
    setMax(
      Math.round(
        ((weight * (1 + reps / 30) + weight * (36 / (37 - reps))) / 2) * 10
      ) / 10
    );
  } else {
    setMax(Math.round(weight * (1 + reps / 30) * 10) / 10);
  }
}
export default calcOneRepMax;
