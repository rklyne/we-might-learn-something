/**
 * Step 1
 * Create a simple String calculator with a method signature:
 *     int functionname(string numbers)
 * The method can take up to two numbers, separated by commas, and will return their sum.
 * For example "" or "1" or "1,2" as inputs.
 * For an empty string it will return 0.
 */

describe("a calculator", () => {
  it("should return zero for the empty string", () => {
    expect(add("")).toBe(0);
  });
  describe("single numbers", () => {
    it("should return 1 given 1", () => {
      expect(add("1")).toBe(1);
    });
    it("should return 2 given 2", () => {
      expect(add("2")).toBe(2);
    });
    it("should return 10 given 10", () => {
      expect(add("10")).toBe(10);
    });
  });
  describe("two numbers", () => {
    it("should return 2 given 1,1", () => {
      expect(add("1,1")).toBe(2);
    });
    it("should return 3 given 1,2", () => {
      expect(add("1,2")).toBe(3);
    });
    it("should return 4 given 2,2", () => {
      expect(add("2,2")).toBe(4);
    });
  });
  describe("5 numbers", () => {
    it("should return 15 for '1,2,3,4,5'", () => {
      expect(add('1,2,3,4,5')).toBe(15);
    })
  })
});

function add(text: string): number {
  if (!text) {
    return 0;
  }
  return text
    .split(",")
    .reduce((a: number, b: string) => a + parseInt(b), 0);
}
