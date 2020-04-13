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

// Function to output the date entry mode
function periodTypeMode() {
  let dateMode;
  if (data.periodType === 'months') {
    dateMode = Math.trunc((data.timeToElapse * 30) / 3);
  } else if (data.periodType === 'weeks') {
    dateMode = Math.trunc((data.timeToElapse * 7) / 3);
  } else if (data.periodType === 'days') {
    dateMode = Math.trunc(data.timeToElapse / 3);
  }
  return dateMode;
}

// Calculation for infected by the requested time
const calc = Math.trunc(2 ** periodTypeMode());

// Impact data calculations
const impact = {
  currentlyInfected: data.reportedCases * 10,
  infectedByRequestedTime: this.currentlyInfected * calc

};

// SevereImpact Data Output
const severeImpact = {
  currentlyInfected: data.reportedCases * 50,
  infectedByRequestedTime: this.currentlyInfected * calc

};
// All the data will be output in this function
const covid19ImpactEstimator = () => {
  const allData = {
    data,
    impact,
    severeImpact
  };
  return allData;
};
export default covid19ImpactEstimator;
