export default function shuffleArray(array) {
  const O_FIVE = 0.5;
  const newArray = array.sort(() => Math.random() - O_FIVE);
  return newArray;
}
