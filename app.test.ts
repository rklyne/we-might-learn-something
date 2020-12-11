import { fizzbuzz } from './index';

describe("fizzbuzz", () => {
  describe("should return Fizz for multiples of 3", () => {
    it("should return 'Fizz' for 3", () => {
      expect(fizzbuzz(3)).toBe('Fizz');
    })
    it("should return 'Fizz' for 6", () => {
      expect(fizzbuzz(6)).toBe('Fizz');
    })
    it("should return 'Fizz' for 9", () => {
      expect(fizzbuzz(9)).toBe('Fizz');
    })
  });
  describe("should return Buzz for multiples of 5", () => {
    it("should return 'Buzz' for 5", () => {
      expect(fizzbuzz(5)).toBe('Buzz');
    })
    it("should return 'Buzz' for 10", () => {
      expect(fizzbuzz(10)).toBe('Buzz');
    })
    it("should return 'Buzz' for 20", () => {
      expect(fizzbuzz(20)).toBe('Buzz');
    })
  });
  describe("should return numeric strings for numbers without a factor of 3 or 5", () => {
    it("should return '2' for 2", () => {
      expect(fizzbuzz(2)).toBe('2');
    })
    it("should return '4' for 4", () => {
      expect(fizzbuzz(4)).toBe('4');
    })
  });
  describe("should return 'FizzBuzz' if number is 15", () => {
    it("should return 'FizzBuzz' for 15", () => {
      expect(fizzbuzz(15)).toBe('FizzBuzz');
    })
    it("should return 'FizzBuzz' for 30", () => {
      expect(fizzbuzz(30)).toBe('FizzBuzz');
    })
    it("should return 'FizzBuzz' for 45", () => {
      expect(fizzbuzz(45)).toBe('FizzBuzz');
    })
  });

})
