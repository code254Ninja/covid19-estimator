// This is the input data
const data = {
  region: {
    name: 'Africa',
    avgAge: 19.7,
    avgDailyIncomeInUSD: 5,
    avgDailyIncomePopulation: 0.71
  },
  periodType: 'days',
  timeToElapse: 58,
  reportedCases: 674,
  population: 66622705,
  totalHospitalBeds: 1380614
};

// All the data will be output in this function
const covid19ImpactEstimator = () => {
  const allData = {
    data
  };
  return allData;
};
export default covid19ImpactEstimator;
