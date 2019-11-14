module.exports = {
  isPrime: function(n) {
    if (n <= 1) {
      return false;
    }

    let div = 2;

    while (div <= Math.sqrt(n)) {
      if (n % div === 0) {
        return false;
      }

      div++;
    }

    return true;
  },

  printValues: function(ans) {
    if (Array.isArray(ans)) {
      ans.map(e => console.log(e));
    } else {
      console.log(ans);
    }
  }
};
