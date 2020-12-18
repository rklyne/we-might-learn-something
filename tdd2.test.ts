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
    it("should return -1 given -1", () => {
      expect(add("-1")).toBe(-1);
    });
    it("should return 1.5 given '1.5'", () => {
      expect(add("1.5")).toBe(1.5);
    });
    it("should return 0 given '0,0'", () => {
      expect(add("0,0")).toBe(0);
    });
    it("should return 0.6 given '0.3,0.3'", () => {
      expect(add("0.3,0.3")).toBe(0.6);
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
  describe("5000 numbers", () => {
    it("should return 5000 for '1,1,1,1,....'", () => {
      expect(add('1,'.repeat(4999)+'1')).toBe(5000);
    })
  })
  describe("newline separated numbers", () => {
    it("should return 6 for '1\n2,3'", () => {
      expect(add('1\n2,3')).toBe(6);
    })
    it("should return 1 for '1,\n'", () => {
      expect(add('1,\n')).toBe(1);
    })
    it("should return 20 for '1\n6\n10\n3'", () => {
        expect(add('1\n6\n10\n3')).toBe(20);
    })
  })
  describe("custom delimiters", () => {
    it("should return 6 for '//;\n1;2\n3'", () => {
      expect(add('//;\n1;2\n3')).toBe(6);
    })
  })
});

function add(text: string): number {
  return text
    .replace(/\n/g, ',')
    .split(",")
    .reduce((a: number, b: string) => a + parseFloat(b || '0'), 0);
}
