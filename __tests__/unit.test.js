// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

test('(323)740-1111 is Phone Number', () => {
  expect(functions.isPhoneNumber('(323)740-1111')).toBe(true);
});

test('(323)743-1134 is Phone Number', () => {
  expect(functions.isPhoneNumber('(323)743-1134')).toBe(true);
});

test('3237401111 is not Phone Number', () => {
  expect(functions.isPhoneNumber('3237401111')).toBe(false);
});

test('7 is not Phone Number', () => {
  expect(functions.isPhoneNumber('7')).toBe(false);
});


test('moruiz@ucsd.edu is email', () => {
  expect(functions.isEmail('moruiz@ucsd.edu')).toBe(true);
});

test('12moisesruiz@gmail.com is email', () => {
  expect(functions.isEmail('12moisesruiz@gmail.com')).toBe(true);
});

test('.com is not an email', () => {
  expect(functions.isEmail('.com')).toBe(false);
});

test('defnotanemail.com is not an email', () => {
  expect(functions.isEmail('defnotanemail.com')).toBe(false);
});


test('he110 is a strong password', () => {
  expect(functions.isStrongPassword('hello2')).toBe(true);
});

test('hello is a strong password', () => {
  expect(functions.isStrongPassword('hello')).toBe(true);
});

test('1234 is a not strong password', () => {
  expect(functions.isStrongPassword('1234')).toBe(false);
});

test('a is a not strong password', () => {
  expect(functions.isStrongPassword('a')).toBe(false);
});


test('12/21/2004 is a date', () => {
  expect(functions.isDate('12/21/2004')).toBe(true);
});

test('9/12/2001 is a date', () => {
  expect(functions.isDate('9/12/2001')).toBe(true);
});

test('923/45/2001 is not a date', () => {
  expect(functions.isDate('923/45/2001')).toBe(false);
});

test('0/450/23457 is not a date', () => {
  expect(functions.isDate('0/450/23457')).toBe(false);
});


test('#000000 is a color', () => {
  expect(functions.isHexColor('#000000')).toBe(true);
});

test('#ffffff is a color', () => {
  expect(functions.isHexColor('#ffffff')).toBe(true);
});

test('#ffffff5 is not a color', () => {
  expect(functions.isHexColor('#ffffff5')).toBe(false);
});

test('#7 is not a color', () => {
  expect(functions.isHexColor('#7')).toBe(false);
});
