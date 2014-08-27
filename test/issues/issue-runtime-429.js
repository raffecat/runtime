var tap = require('../tap');

tap.count(65);

// Sorry, but tap.eq uses == to compare the results,
// which will (or should) result in coercion between numbers and strings.
function eq(a, b, why) {
  tap.ok(typeof a === typeof b && a === b, why);
}

eq(5+2, 7,   'number + number = number')
eq(5-2, 3,   'number - number = number')
eq(5*2, 10,  'number * number = number')
eq(5/2, 2.5, 'number / number = number')
eq(5%2, 1,   'number % number = number')

eq(5+'2', '52', 'number + string = string')
eq(5-'2', 3,    'number - string = number')
eq(5*'2', 10,   'number * string = number')
eq(5/'2', 2.5,  'number / string = number')
eq(5%'2', 1,    'number % string = number')

eq('5'+2, '52', 'string + number = string')
eq('5'-2, 3,    'string - number = number')
eq('5'*2, 10,   'string * number = number')
eq('5'/2, 2.5,  'string / number = number')
eq('5'%2, 1,    'string % number = number')

eq(+'5', 5,  '+ string = number')
eq(-'5', -5, '- string = number')

eq(1==2, false, 'number == number when not equal')
eq(2==2, true,  'number == number when equal')
eq(1!=2, true,  'number != number when not equal')
eq(2!=2, false, 'number != number when equal')
eq(1<2, true,  'number < number when number less')
eq(2<2, false, 'number < number when number equal')
eq(3<2, false, 'number < number when number greater')
eq(1<=2, true,  'number <= number when number less')
eq(2<=2, true,  'number <= number when number equal')
eq(3<=2, false, 'number <= number when number greater')
eq(1>2, false, 'number > number when number less')
eq(2>2, false, 'number > number when number equal')
eq(3>2, true,  'number > number when number greater')
eq(1>=2, false, 'number >= number when number less')
eq(2>=2, true,  'number >= number when number equal')
eq(3>=2, true,  'number >= number when number greater')

eq(1=='2', false, 'number == string when not equal')
eq(2=='2', true,  'number == string when equal')
eq(1!='2', true,  'number != string when not equal')
eq(2!='2', false, 'number != string when equal')
eq(1<'2', true,  'number < string when number less')
eq(2<'2', false, 'number < string when number equal')
eq(3<'2', false, 'number < string when number greater')
eq(1<='2', true,  'number <= string when number less')
eq(2<='2', true,  'number <= string when number equal')
eq(3<='2', false, 'number <= string when number greater')
eq(1>'2', false, 'number > string when number less')
eq(2>'2', false, 'number > string when number equal')
eq(3>'2', true,  'number > string when number greater')
eq(1>='2', false, 'number >= string when number less')
eq(2>='2', true,  'number >= string when number equal')
eq(3>='2', true,  'number >= string when number greater')

eq('1'==2, false, 'number == string when not equal')
eq('2'==2, true,  'number == string when equal')
eq('1'!=2, true,  'number != string when not equal')
eq('2'!=2, false, 'number != string when equal')
eq('1'<2, true,  'number < string when number less')
eq('2'<2, false, 'number < string when number equal')
eq('3'<2, false, 'number < string when number greater')
eq('1'<=2, true,  'number <= string when number less')
eq('2'<=2, true,  'number <= string when number equal')
eq('3'<=2, false, 'number <= string when number greater')
eq('1'>2, false, 'number > string when number less')
eq('2'>2, false, 'number > string when number equal')
eq('3'>2, true,  'number > string when number greater')
eq('1'>=2, false, 'number >= string when number less')
eq('2'>=2, true,  'number >= string when number equal')
eq('3'>=2, true,  'number >= string when number greater')
