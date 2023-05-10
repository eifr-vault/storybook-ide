function getFibonacci(n: number): number {
  if (n < 2) {
    return n;
  }
  return getFibonacci(n - 1) + getFibonacci(n - 2);
}
