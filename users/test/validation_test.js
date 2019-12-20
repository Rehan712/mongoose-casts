const assert = require("assert");
const User = require("../src/user");

describe("Validating records", () => {
  it("validates the user name", () => {
    const user = new User({ name: undefined });
    const validateResult = user.validateSync();
    const { message } = validateResult.errors.name;

    assert(message === "Name is required!");
  });

  it("requires a user name longer than 2 char", () => {
    const user = new User({ name: "a" });
    const validateResult = user.validateSync();
    const { message } = validateResult.errors.name;

    assert(typeof message === "string");
  });
});
