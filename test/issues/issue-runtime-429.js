var tap = require('../tap');

tap.count(65);

// Sorry, but tap.eq uses == to compare the results,
// which will (or should) result in coercion between numbers and strings.
function eq(fn, b, why) {
  try {
    var a = fn();
    tap.ok(typeof a === typeof b && a === b, why);
  } catch (err) {
    tap.ok(false, why + ': ' + err);
  }
}

eq(function(){ return 5+2 }, 7,   'number + number = number')
eq(function(){ return 5-2 }, 3,   'number - number = number')
eq(function(){ return 5*2 }, 10,  'number * number = number')
eq(function(){ return 5/2 }, 2.5, 'number / number = number')
eq(function(){ return 5%2 }, 1,   'number % number = number')

eq(function(){ return 5+'2' }, '52', 'number + string = string')
eq(function(){ return 5-'2' }, 3,    'number - string = number')
eq(function(){ return 5*'2' }, 10,   'number * string = number')
eq(function(){ return 5/'2' }, 2.5,  'number / string = number')
eq(function(){ return 5%'2' }, 1,    'number % string = number')

eq(function(){ return '5'+2 }, '52', 'string + number = string')
eq(function(){ return '5'-2 }, 3,    'string - number = number')
eq(function(){ return '5'*2 }, 10,   'string * number = number')
eq(function(){ return '5'/2 }, 2.5,  'string / number = number')
eq(function(){ return '5'%2 }, 1,    'string % number = number')

eq(function(){ return +'5' }, 5,  '+ string = number')
eq(function(){ return -'5' }, -5, '- string = number')

eq(function(){ return 1==2 }, false, 'number == number when not equal')
eq(function(){ return 2==2 }, true,  'number == number when equal')
eq(function(){ return 1!=2 }, true,  'number != number when not equal')
eq(function(){ return 2!=2 }, false, 'number != number when equal')
eq(function(){ return 1<2 }, true,  'number < number when number less')
eq(function(){ return 2<2 }, false, 'number < number when number equal')
eq(function(){ return 3<2 }, false, 'number < number when number greater')
eq(function(){ return 1<=2 }, true,  'number <= number when number less')
eq(function(){ return 2<=2 }, true,  'number <= number when number equal')
eq(function(){ return 3<=2 }, false, 'number <= number when number greater')
eq(function(){ return 1>2 }, false, 'number > number when number less')
eq(function(){ return 2>2 }, false, 'number > number when number equal')
eq(function(){ return 3>2 }, true,  'number > number when number greater')
eq(function(){ return 1>=2 }, false, 'number >= number when number less')
eq(function(){ return 2>=2 }, true,  'number >= number when number equal')
eq(function(){ return 3>=2 }, true,  'number >= number when number greater')

eq(function(){ return 1=='2' }, false, 'number == string when not equal')
eq(function(){ return 2=='2' }, true,  'number == string when equal')
eq(function(){ return 1!='2' }, true,  'number != string when not equal')
eq(function(){ return 2!='2' }, false, 'number != string when equal')
eq(function(){ return 1<'2' }, true,  'number < string when number less')
eq(function(){ return 2<'2' }, false, 'number < string when number equal')
eq(function(){ return 3<'2' }, false, 'number < string when number greater')
eq(function(){ return 1<='2' }, true,  'number <= string when number less')
eq(function(){ return 2<='2' }, true,  'number <= string when number equal')
eq(function(){ return 3<='2' }, false, 'number <= string when number greater')
eq(function(){ return 1>'2' }, false, 'number > string when number less')
eq(function(){ return 2>'2' }, false, 'number > string when number equal')
eq(function(){ return 3>'2' }, true,  'number > string when number greater')
eq(function(){ return 1>='2' }, false, 'number >= string when number less')
eq(function(){ return 2>='2' }, true,  'number >= string when number equal')
eq(function(){ return 3>='2' }, true,  'number >= string when number greater')

eq(function(){ return '1'==2 }, false, 'number == string when not equal')
eq(function(){ return '2'==2 }, true,  'number == string when equal')
eq(function(){ return '1'!=2 }, true,  'number != string when not equal')
eq(function(){ return '2'!=2 }, false, 'number != string when equal')
eq(function(){ return '1'<2 }, true,  'number < string when number less')
eq(function(){ return '2'<2 }, false, 'number < string when number equal')
eq(function(){ return '3'<2 }, false, 'number < string when number greater')
eq(function(){ return '1'<=2 }, true,  'number <= string when number less')
eq(function(){ return '2'<=2 }, true,  'number <= string when number equal')
eq(function(){ return '3'<=2 }, false, 'number <= string when number greater')
eq(function(){ return '1'>2 }, false, 'number > string when number less')
eq(function(){ return '2'>2 }, false, 'number > string when number equal')
eq(function(){ return '3'>2 }, true,  'number > string when number greater')
eq(function(){ return '1'>=2 }, false, 'number >= string when number less')
eq(function(){ return '2'>=2 }, true,  'number >= string when number equal')
eq(function(){ return '3'>=2 }, true,  'number >= string when number greater')
