// function sortCarByYearAscendingly(cars) {
//   // Clone array untuk menghindari side-effect -> intinya tanpa spread mk array asli akan terpengaruh, kita gak pengen itu terjadi
//   const result = [...cars];
//   const resLen = result.length;
//
//   // Bubble Sort
//   for(let i = 0; i < resLen; i++) {
//     for(let j = 0; j < resLen - i - 1; j++) {
//       if(result[j].year > result[j + 1].year) {
//         let tmp = result[j];
//         result[j] = result[j + 1];
//         result[j + 1] = tmp;
//       }
//     }
//   }
//   console.table(result);
//   return result;
// }

// quick sort
const sortCarByYearAscendingly = (cars) => {
  if (cars.length <= 1) {
    return cars;
  }

  let pivot = cars[0]['year'];
  let leftArr = [];
  let rightArr = [];

  for (let i = 1; i < cars.length; i++) {
    if (cars[i]['year'] < pivot) {
      leftArr.push(cars[i]);
    } else {
      rightArr.push(cars[i]);
    }
  }
  // return spread recursively
  return [...sortCarByYearAscendingly(leftArr), cars[0], ...sortCarByYearAscendingly(rightArr)];
};
