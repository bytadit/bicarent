// Versi quick sort
const sortCarByYearAscendingly = (cars) => {
  // cek jika panjang object kurang dari sama dengan 1, maka langsung return objek saja (tidak bisa disort)
  if (cars.length <= 1) {
    return cars;
  }
  // pivot memakai property tahun di elemen pertama. memakai elemen pertama untuk memudahkan looping
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
  // return spread recursively (akan direturn function secara recursive, yang akan memastikan bahwa leftArr dan rightArr akan terurut/sorted)
  return [...sortCarByYearAscendingly(leftArr), cars[0], ...sortCarByYearAscendingly(rightArr)];
};
