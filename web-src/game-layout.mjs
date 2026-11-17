// Each column is ordered from the glass up. Removing a support settles its
// neighbours while leaving their inventory records and expiry dates intact.
export const columns = 5;
export function buildStacks(rows, saved) {
  const stacks = rows.map(() => Array.from({ length: columns }, () => []));
  const known = new Set(rows.flat());
  const placed = new Set();
  for (const [r, shelf] of stacks.entries()) {
    for (const [c, stack] of shelf.entries()) {
      const ids = saved?.[r]?.[c];
      if (!Array.isArray(ids)) continue;
      for (const id of ids) {
        if (known.has(id) && !placed.has(id)) {
          placed.add(id);
          stack.push(id);
        }
      }
    }
  }
  rows.forEach((ids, r) => ids.forEach((id, i) => {
    if (placed.has(id)) return;
    const shelf = stacks[r];
    const preferred = Math.min(columns - 1, Math.floor((i + .5) * columns / Math.min(ids.length, columns)) % columns);
    const least = Math.min(...shelf.map(stack => stack.length));
    const stack = shelf[preferred].length === least ? shelf[preferred] : shelf.find(stack => stack.length === least);
    stack.push(id);
    placed.add(id);
  }));
  return stacks;
}

export function moveToStack(stacks, id, row, column, fits) {
  const from = stacks.flat().find(stack => stack.includes(id));
  const to = stacks[row]?.[column];
  if (!from || !to) return false;
  if (from === to && from.at(-1) === id) return false;
  const next = [...to.filter(other => other !== id), id];
  if (!fits(next, row)) return false;
  from.splice(from.indexOf(id), 1);
  to.push(id);
  return true;
}
