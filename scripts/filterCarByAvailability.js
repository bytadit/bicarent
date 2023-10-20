// Bubble Sort
function filterCarByAvailability(cars) {
  const result = [];
  for(let i = 0; i < cars.length; i++) {
    if(cars[i]['available']) {
      result.push(cars[i]);
    }
  }
  console.table(result);
  return result;
}
