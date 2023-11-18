import isObject from "./isObject";

it("returns true if params is an object with properties", () => {
  expect(
    isObject({
      key: "value",
    }),
  ).toBe(true);
});

it("returns false if params is an object without properties", () => {
  expect(isObject({})).toBe(false);
});

it("returns false if params is not an object", () => {
  expect(isObject([])).toBe(false);
  expect(isObject()).toBe(false);
});
