// prime number 0 1 1 2 3 5 8 13

function getPrimes(range) {
    let primes = [];
    firstLoop: for (i = 2; i <= range; i++) {
        for (j = 2; j < i; j++) {
            if (i % j == 0) {
                continue firstLoop;
            }
        }
        primes.push(i);
    }
    return primes;
}

const primes = getPrimes(71);
console.log(primes);
