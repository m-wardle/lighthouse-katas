let talkingCalendar = function(date) {
  // Your code here

  var array = date.split("/");
  var result;

  switch (array[1]) {
    case '01':
      result = 'January ';
      break;
    case '02':
      result = 'February ';
      break;
    case '03':
      result = 'March ';
      break;
    case '04':
      result = 'April ';
      break;
    case '05':
        result = 'May ';
        break;
    case '06':
      result = 'June ';
      break;
    case '07':
      result = 'July ';
      break;
    case '08':
      result = 'August ';
      break;
    case '09':
      result = 'September ';
      break;
    case '10':
      result = 'October ';
      break;
    case '11':
      result = 'November ';
      break;
    case '12':
      result = 'December ';
      break;
  }  

  switch (array[2]) {
    case '01':
      result += '1st, ';
      break;
    case '02':
      result += '2nd, ';
      break;
    case '03':
      result += '3rd, ';
      break;
    default:
      result += array[2] + 'th, ';
  }

  result += array[0];
 
  return result;
};

// Tests

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));