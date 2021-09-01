function showDataInChart({ data, option }, setState) {
  let dates = [];
  let weights = [];
  dates = data.map((el) => {
    let date = new Date(el.date);
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  });
  weights = data.map((el) => {
    return el.estimatedMax;
  });
  setState({
    labels: [...dates],
    datasets: [
      {
        label: option,
        fill: false,
        lineTension: 0.5,
        backgroundColor: "rgba(255,100,0,1)",
        borderColor: "rgba(0,0,255,1)",
        borderWidth: 1,
        data: [...weights],
      },
    ],
  });
}
export default showDataInChart;
