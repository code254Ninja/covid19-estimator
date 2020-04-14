/* eslint-disable max-len */
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
const impact = {};
const severeImpact = {};

const { reportedCases } = data;
// Currently infected
impact.currentlyInfected = reportedCases * 10;
severeImpact.currentlyInfected = reportedCases * 50;

// Function to output the date entry mode
const dateModeType = (periodType, timeToElapse) => {
  let dateMode;
  switch (periodType.toLowerCase()) {
    case 'days':
      dateMode = timeToElapse;
      break;
    case 'weeks':
      dateMode = timeToElapse * 7;
      break;
    case 'month':
      dateMode = timeToElapse * 30;
      break;
    default:
      dateMode = timeToElapse;
  }
  return dateMode;
};


impact.infectedByRequestedTime = Math.trunc(reportedCases * 10 * (2 ** (dateModeType(data)) / 3));
severeImpact.infectedByRequestedTime = Math.trunc(reportedCases * 50 * (2 ** (dateModeType(data)) / 3));


// Calculation for infected by the requested ti


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
