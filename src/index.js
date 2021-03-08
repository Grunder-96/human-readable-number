module.exports = function toReadable (number) {
      let firstTwenty = {
          0: "",
          1: "one",
          2: "two",
          3: "three",
          4: "four",
          5: "five",
          6: "six",
          7: "seven",
          8: "eight",
          9: "nine",
          10: "ten",
          11: "eleven",
          12: "twelve",
          13: "thirteen",
          14: "fourteen",
          15: "fifteen",
          16: "sixteen",
          17: "seventeen",
          18: "eighteen",
          19: "nineteen"
      }

      let twentytoHundred = {
          2: "twenty",
          3: "thirty",
          4: "forty",
          5: "fifty",
          6: "sixty",
          7: "seventy",
          8: "eighty",
          9: "ninety"
      }

      let hundreds = {
          1: "hundred"
      } 

      if (number == 0) {
          return "zero"
      }

      if (number > 0 && number < 20) {
          return firstTwenty[number];
      } else if (number >= 20 && number < 100) {
          if (number % 10 == 0) {
              return twentytoHundred[number / 10];
          }
          return `${twentytoHundred[Math.floor(number / 10)]} ${firstTwenty[number % 10]}`
        } else if (number >= 100 && number < 1000) {
            if (number % 100 == 0) {
                return `${firstTwenty[number / 100]} ${hundreds[1]}`
            }
            if (number - 100 * Math.floor(number / 100) <= 19) {
            return `${firstTwenty[Math.floor(number / 100)]} ${hundreds[1]} ${firstTwenty[number % 100]}`
            } else if (number - 100 * Math.floor(number / 100) > 19) {
                if ((number % 100) % 10 == 0) {
                    return `${firstTwenty[Math.floor(number / 100)]} ${hundreds[1]} ${twentytoHundred[Math.floor((number % 100) / 10)]}`
                }
                return `${firstTwenty[Math.floor(number / 100)]} ${hundreds[1]} ${twentytoHundred[Math.floor((number % 100) / 10)]} ${firstTwenty[number % 10]}`
            }
        }
}