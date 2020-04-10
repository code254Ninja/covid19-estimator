const data = {
    region: {
    name: "Africa",
    avgAge: 19.7,
    avgDailyIncomeInUSD: 5,
    avgDailyIncomePopulation: 0.71
    },
    periodType: "days",
    timeToElapse: 58,
    reportedCases: 674,
    population: 66622705,
    totalHospitalBeds: 1380614
   }
   
const covid19ImpactEstimator = (data) => {
    var currentlyInfected;
    const impact = () => {
        const currentlyInfected = data.reportedCases * 10;

    }

    const severeImpact = () => {
        const currentlyInfected = data.reportedCases * 50;
    }
}
    

export default covid19ImpactEstimator;
