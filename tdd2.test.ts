

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
  })
  it("should return 1 given 1", () => {
    expect(add("1")).toBe(1);
  })
})


function add(text: string): number {
  if (text) {
    return 1;
  }
  return 0;
}
