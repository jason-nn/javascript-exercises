const palindromes = function (a) {
  cleaned = a.replace(/[^a-zA-Z]+/g, '').toLowerCase();
  for (let i = 0; i <= cleaned.length / 2; i++) {
    if (!(cleaned[i] === cleaned[cleaned.length - i - 1])) return false;
  }
  return true;
};

// Do not edit below this line
module.exports = palindromes;
