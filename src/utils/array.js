export function chunkArray(array, chunkSize) {
  const chunks = [];

  for (let index = 0; index < array.length; index += chunkSize) {
    chunks.push(array.slice(index, index + chunkSize));
  }

  return chunks;
}