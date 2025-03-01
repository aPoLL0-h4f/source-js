// Yêu cầu T ko đc truyền vào là mảng
function deepEqualCompare<T>(
  a: T extends any[] ? "Dont pass an array here" : T,
  b: T extends any[] ? "Dont pass an array here" : T
): boolean {
  return a === b;
}

deepEqualCompare(2, 2);
