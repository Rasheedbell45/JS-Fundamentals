function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

const arg = Number(process.argv[2]);
const n = Number.isInteger(arg) ? arg : Math.floor(arg);

console.log(Number.isNaN(arg) ? 1 : factorial(n));
