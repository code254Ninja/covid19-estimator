
   
const covid19ImpactEstimator = () => {
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
       };

       switch(data.periodType) {
           case "months":
               return Math.trunc((data.timeToElapse/3) * 30);
               break;
           case "weeks":
               return Math.trunc((data.timeToElapse / 3) * 7);
               break;
           default: 
           case "days":
               return Math.trunc(data.timeToElapse/3);

         }

       const impact = {
           currentlyInfected: data.reportedCases * 10,
           infectionsByRequestedTime: this.currentlyInfected * (2 ** Math.trunc(data.timeToElapse/3)),

       }

       const severeImpact = {
           currentlyInfected: data.reportedCases * 50,
           infectionsByRequestedTime: this.currentlyInfected * (2 ** Math.trunc (data.timeToElapse/3)),

       }

       return {
           "data": {
            "region": {
                "name": "Africa",
                "avgAge": 19.7,
                "avgDailyIncomeInUSD": 5,
                "avgDailyIncomePopulation": 0.71
                },
                "periodType": "days",
                "timeToElapse": 58,
                "reportedCases": 674,
                "population": 66622705,
                "totalHospitalBeds": 1380614
               },
               "estimate": {
                   "impact": {
                       "currentlyInfected": impact.currentlyInfected,
                       "infectionsByRequestedTime": impact.infectionsByRequestedTime,
                       

                   },
                   "severeImpact":{
                       "currentlyInfected": severeImpact.currentlyInfected,
                       "infectionsByRequestedTime": severeimpact.infectionsByRequestedTime,

                   }
               }
           }

       
        }

       


    

export default covid19ImpactEstimator;
