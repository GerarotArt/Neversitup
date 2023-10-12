export const CountSmileys = (smileys: string[]): number => {
  const regexSmiley = /[;:]?[~-]?[)D]$/;
  let count = 0;
  for (let i = 0; i < smileys.length; i++) {
    if (regexSmiley.test(smileys[i])) {
      count++;
    }
  }
  return count;
};
