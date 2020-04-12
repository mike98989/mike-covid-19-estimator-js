/* eslint-disable max-len */
const covid19ImpactEstimator = (data) => {
  const input = data;
  // CHALLENGE 1
  const impactData = {
    currentlyInfected: '', infectionsByRequestedTime: '', severeCasesByRequestedTime: '', hospitalBedsByRequestedTime: '', casesForICUByRequestedTime: '', casesForVentilatorsByRequestedTime: '', dollarsInFlight: ''
  };
  const severeImpactData = {
    currentlyInfected: '', infectionsByRequestedTime: '', severeCasesByRequestedTime: '', hospitalBedsByRequestedTime: '', casesForICUByRequestedTime: '', casesForVentilatorsByRequestedTime: '', dollarsInFlight: ''
  };

  // const severeImpactData = {};

  // Impact Data
  impactData.currentlyInfected = input.reportedCases * 10;
  impactData.infectionsByRequestedTime = impactData.currentlyInfected * 1024;

  // Severe Impact Data
  severeImpactData.currentlyInfected = input.reportedCases * 50;
  severeImpactData.infectionsByRequestedTime = severeImpactData.currentlyInfected * 2 ** 10;

  // CHALLENGE 2
  // Impact Data
  impactData.severeCasesByRequestedTime = impactData.infectionsByRequestedTime * (15 / 100);
  impactData.hospitalBedsByRequestedTime = input.hospitalBedsByRequestedTime - impactData.severeCasesByRequestedTime;

  // Severe Impact Data
  severeImpactData.severeCasesByRequestedTime = severeImpactData.infectionsByRequestedTime * (15 / 100);
  severeImpactData.hospitalBedsByRequestedTime = input.hospitalBedsByRequestedTime - severeImpactData.severeCasesByRequestedTime;

  // CHALLENGE 3
  // Impact Data
  impactData.casesForICUByRequestedTime = impactData.infectionsByRequestedTime * (5 / 100);
  impactData.casesForVentilatorsByRequestedTime = impactData.infectionsByRequestedTime * (2 / 100);
  impactData.dollarsInFlight = (impactData.infectionsByRequestedTime * input.region.avgDailyIncomePopulation) * input.region.avgDailyIncomeInUSD * 30;
  // Severe Impact Data
  severeImpactData.casesForICUByRequestedTime = severeImpactData.infectionsByRequestedTime * (5 / 100);
  severeImpactData.casesForVentilatorsByRequestedTime = severeImpactData.infectionsByRequestedTime * (2 / 100);
  severeImpactData.dollarsInFlight = (severeImpactData.infectionsByRequestedTime * input.region.avgDailyIncomePopulation) * input.region.avgDailyIncomeInUSD * 30;

  return {
    data: input,
    impact: impactData,
    serverImpact: severeImpactData
  };
};
export default covid19ImpactEstimator;
