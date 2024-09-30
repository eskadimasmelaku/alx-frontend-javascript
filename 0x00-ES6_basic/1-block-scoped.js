export default function taskBlock(trueOrFalse) {
  const task = false;  // Use const to ensure these are not reassigned
  const task2 = true;

  if (trueOrFalse) {
    let task = true;   // Use let to ensure block-scoping
    let task2 = false; // Use let to ensure block-scoping
  }

  return [task, task2];
}
