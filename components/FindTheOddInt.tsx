export const FindTheOddInt = (number: number[]): string | number => {
  if (!Array.isArray(number)) return 'Please Input Array';
  let count = 0;
  for (let i = 0; i < number.length; i++) {
    if (!Number.isInteger(number[i])) {
      return `this is ${number[i]} not in correct`;
      break;
    }

    for (let j = 0; j < number.length; j++) {
      if (number[i] === number[j]) {
        count++;
      }
    }

    if (!Number.isInteger(count / 2)) {
      return number[i];
      break;
    }
  }

  return 'data is not have odd int';
};
