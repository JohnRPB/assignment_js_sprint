// FILL IN THE FUNCTIONS BELOW

var sprintFunctions = {
  largestEl: function(arr){  
    return arr.reduce(function(max, current) {
       return current > max ? current : max;
    }, 0)
  },
  
  reversed: function(str){  
    let return_str = "";
    let i = str.length - 1;
    while (i > -1) {
      return_str += str[i];
      i --;
    }
    return return_str;
  },

  loudSnakeCase: function(sentence) {  
    sentence_arr = sentence.split(' ');
    sentence_arr = sentence_arr.filter(function(word) {return word !== "";}).map(function(word) {
      return word[0].toUpperCase() + word.slice(1,word.length);
    })
    sentence_arr = sentence_arr.join('_').split('').map(function(char) {
      let reg = /^[a-z]+$/
      if (reg.test( char.toLowerCase() ) || char === "_") {
        return char;
      } else {
        return "";
      }
    }).join('')
    return sentence_arr;
  },

  compareArrays: function(arr1, arr2){ 
    let i = 0;
    while (i < arr1.length) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
      i++;
    }
    return true;
  },

  fizzBuzz: function(num){  
    let return_array = [];
    for (let i = 1; i <= num; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        return_array.push("FIZZBUZZ");
      } else if (i % 3 === 0) {
        return_array.push("FIZZ");    
      } else if (i % 5 === 0) {
        return_array.push("BUZZ");
      } else {
        return_array.push(i);
      }
    }
    return return_array;
  },

  myMap: function(arr, fun){  
    return arr.map(fun);
  },

  primes: function(n){  
    function isPrime(n) {
      if (n < 2) { return false; }
      if (n === 2) { return true; }
      let i = 2;
      while (i < n) {
        if (n % i === 0) {
          return false;       
        }     
        i++;
      }   
      return true;
    }
    return_arr = [];   
    for (let i = 0; i < n; i++) {
      if (isPrime(i)) {
        return_arr.push(i);
      } 
    }
    return return_arr;
  },
}

class Roulette {
  constructor(bankroll) {
    this._bankroll = bankroll;
  }

  spin(betQuantity, bet) {
    if (this._bankroll === 0) {
      console.log("Your bankroll is empty, you must refill it to continue playing")
      return;
    }
    let spinnum = this.randomNum();
    if (spinnum === `${bet}`) {
      this._bankroll += betQuantity*35;
      this.winMessage(`${bet}`, betQuantity*35, spinnum);
    } else if (`${bet}` === "0" && parseInt(spinnum) === 37) { // need one for single 0
      this._bankroll += betQuantity*35;
      this.winMessage(`${bet}`, betQuantity*35, spinnum);
    } else if (`${bet}` === 'Even' && parseInt(spinnum) % 2 === 0) {
      this._bankroll += betQuantity;
      this.winMessage("Even", betQuantity, spinnum);
    } else if (`${bet}` === 'Odd' && parseInt(spinnum) % 2 !== 0) {
      this._bankroll += betQuantity;
      this.winMessage("Odd", betQuantity, spinnum);
    } else if (`${bet}` === '1 to 18' && (parseInt(spinnum) >= 1 && parseInt(spinnum) <= 18) ) {
      this._bankroll += betQuantity;
      this.winMessage(`${bet}`, betQuantity*2, spinnum);
    } else if (`${bet}` === '19 to 36' && (parseInt(spinnum) >= 19 && parseInt(spinnum) <= 36) ) {
      this._bankroll += betQuantity;
      this.winMessage(`${bet}`, betQuantity*2, spinnum);
    } else if (`${bet}` === '1st 12' && (parseInt(spinnum) >= 1 && parseInt(spinnum) <= 12) ) {
      this._bankroll += betQuantity;
      this.winMessage(`${bet}`, betQuantity*2, spinnum);
    } else if (`${bet}` === '2nd 12' && (parseInt(spinnum) >= 13 && parseInt(spinnum) <= 24) ) {
      this._bankroll += betQuantity;
      this.winMessage(`${bet}`, betQuantity*2, spinnum);
    } else if (`${bet}` === '3rd 12' && (parseInt(spinnum) >= 26 && parseInt(spinnum) <= 36) ) {
      this._bankroll += betQuantity;
      this.winMessage(`${bet}`, betQuantity*2, spinnum);
    } else {
      this._bankroll -= betQuantity;
      console.log(`You lose, the spin was ${spinnum}`)
      console.log(`You not have $${this._bankroll}`)
    }
  }
  winMessage(typeOfBet, amountWon, spinnerVal) {
    var spinval;
    if (typeOfBet === "Even") {
      spinval = "even";
    } else if (typeOfBet === "Odd") {
      spinval = "odd";
    } else if (typeOfBet === "0") {
      spinval = "0";
    } else {
      spinval = spinnerVal;
    }
    console.log(`You win $${amountWon}, the spin was ${spinval}!!!`)
    console.log(`You now have $${this._bankroll}`)
  }

  randomNum() {
    return [Math.round(Math.random() * 3), Math.round(Math.random() * 7)].join('')
  }

  get bankroll() {
    return this._bankroll;
  }

  buyIn(addAmount) {
    this._bankroll += addAmount;
    console.log(`You bought in $${addAmount}`);
  }

}
