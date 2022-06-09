const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here

// const totalBatteries = batteryBatches.reduce(function (sum, batteryBatch) {
//   return sum + batteryBatch;
// });

const initValue = 0;
const totalBatteries = batteryBatches.reduce(
  (sum, batteryBatch) => sum + batteryBatch,
  initValue
);
// console.log(totalBatteries);
