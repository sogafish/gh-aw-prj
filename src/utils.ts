export const getPrimeNumbers = (count: number): number[] => {
  if (count <= 0) return [];

  const primes: number[] = [];
  let num = 2;

  while (primes.length < count) {
    let isPrime = true;

    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      primes.push(num);
    }

    num++;
  }

  return primes;
};
