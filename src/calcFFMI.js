function calcFFMI(weight, height, BFPercentage, setFFMI, setNormalizedFFMI) {
  let h = height / 100;
  const FatFreeMass = weight * (1 - BFPercentage / 100);
  const FFMI = Math.round((FatFreeMass / (h * h)) * 10) / 10;
  setFFMI(FFMI);
  setNormalizedFFMI(Math.round((FFMI + 6.1 * (1.8 - h)) * 10) / 10);
}
export default calcFFMI;
