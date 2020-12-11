/**
 * Write a function that returns true or false depending on whether its input
 * integer is a leap year or not.
 * A leap year is defined as one that is divisible by 4, but is not otherwise
 * divisible by 100 unless it is also divisible by 400.
 * For example, 2001 is a typical common year and 1996 is a typical leap year,
 * whereas 1900 is an atypical common year and 2000 is an atypical leap year.
 */

import { is_leapyear } from './leapyear';


describe("leap years", () => {
  describe("year divisible by 400 is a leap year", () => {
    it("should return true for 400", () => {
      expect(is_leapyear(400)).toBe(true);
    })
    it("should return true for 2000", () => {
      expect(is_leapyear(2000)).toBe(true);
    })
  })
  describe("year divisible by 100 is not a leap year", () => {
    it("should return false for 100", () => {
      expect(is_leapyear(100)).toBe(false);
    })
    it("should return false for 1900", () => {
      expect(is_leapyear(1900)).toBe(false);
    })
  })
  describe("year divisible by 4 is a leap year", () => {
    it("should return false for 4", () => {
      expect(is_leapyear(1996)).toBe(true);
    })
    it("should return false for 404", () => {
      expect(is_leapyear(404)).toBe(true);
    })
  })
  describe("year not divisible by 4 is not a leap year", () => {
    it("should return false for 2001", () => {
      expect(is_leapyear(2001)).toBe(false);
    })
    it("should return false for 999", () => {
      expect(is_leapyear(999)).toBe(false);
    })
  })
});
