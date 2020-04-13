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
  const { reportedCases } = data;
  // Currently infected
  const currentlyInfected1 = reportedCases * 10;
  const currentlyInfected2 = reportedCases * 50;

  // Function to output the date entry mode
  function periodTypeMode(params) {
    const { periodType, timeToElapse } = params;
    let dateMode;
    if (periodType.toLowerCase() === 'months') {
      dateMode = (timeToElapse * 30);
    } else if (periodType.toLowerCase() === 'weeks') {
      dateMode = (timeToElapse * 7);
    } else if (periodType.toLowerCase() === 'days') {
      dateMode = (timeToElapse);
    }
    return dateMode;
  }

  // Calculation for infected by the requested time
  const calc1 = currentlyInfected1 * Math.trunc(((2 ** periodTypeMode(data)) / 3));
  const calc2 = currentlyInfected2 * Math.trunc(((2 ** periodTypeMode(data)) / 3));

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
