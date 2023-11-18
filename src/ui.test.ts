import ui from "./ui";

describe("single component as string", () => {
  it("should return its class names when declared as string", () => {
    const className = ui({
      Component: "class-name",
    });

    expect(className("Component")).toBe("class-name");
  });
  it("should return its class names when declared as object with truthy value", () => {
    const className = ui({
      Component: "class-name",
    });

    expect(
      className({
        Component: true,
      }),
    ).toBe("class-name");
  });
  it("shouldn't return its class names when declared as object with falsy value", () => {
    const className = ui({
      Component: "class-name",
    });

    expect(
      className({
        Component: false,
      }),
    ).toBe("");
  });
});
