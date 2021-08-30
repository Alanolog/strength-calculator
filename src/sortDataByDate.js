function sortDataByDate(data, option, setData) {
  let type =
    option === "Przysiad ze sztangą"
      ? data.squat
      : option === "Martwy ciąg"
      ? data.deadlift
      : option === "Wyciskanie leżąc"
      ? data.bench
      : null;
  setData(
    type.sort((a, b) => (a.date > b.date ? 1 : b.date > a.date ? -1 : 0))
  );
}
export default sortDataByDate;
