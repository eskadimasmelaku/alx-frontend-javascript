export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    // Using different variable names for the block-scoped variables
    const taskInBlock = true;
    const task2InBlock = false;
    // These variables are not used outside of this block
  }

  return [task, task2];
}
