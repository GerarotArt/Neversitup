export const Permutations = (input: string): string | string[] => {
  if (input.length < 2) return input;

  const data: string[] = [];

  for (let i = 0; i < input.length; i++) {
    let text = input[i];
    let remain = input.slice(0, i).concat(input.slice(i + 1));

    for (const permutation of Permutations(remain)) {
      const checkText = text + permutation;
      if (!data.find((val) => val === checkText)) {
        data.push(checkText);
      }
    }
  }
  return data;
};
