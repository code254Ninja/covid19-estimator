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

// Currently infected
const currentlyInfected1 = data.reportedCases * 10;
const currentlyInfected2 = data.reportedCases * 50;

// Function to output the date entry mode
function periodTypeMode() {
  let dateMode = 'days';
  if (data.periodType === 'months') {
    dateMode = Math.trunc((data.timeToElapse * 30) / 3);
  } else if (data.periodType === 'weeks') {
    dateMode = Math.trunc((data.timeToElapse * 7) / 3);
  }
  return dateMode;
}

// Calculation for infected by the requested time
const calc1 = Math.trunc(currentlyInfected1 * (2 ** periodTypeMode()));
const calc2 = Math.trunc(currentlyInfected2 * (2 ** periodTypeMode()));

// Impact data calculations
const impact = {
  currentlyInfected: currentlyInfected1,
  infectedByRequestedTime: calc1

};

// SevereImpact Data Output
const severeImpact = {
  currentlyInfected: currentlyInfected2,
  infectedByRequestedTime: calc2

};
// All the data will be output in this function
const covid19ImpactEstimator = () => {
  const allData = {
    data,
    estimate: {
      impact,
      severeImpact
    }
  };

  return allData;
};
export default covid19ImpactEstimator;
