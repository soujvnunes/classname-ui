import ui from "./ui";

it("returns class names from component with string value", () => {
  const className = ui({
    Component: "class-name",
  });

  expect(className("Component")).toBe("class-name");
});

it("returns class names from components with object value", () => {
  const className = ui({
    Component: {
      _root: "class-name",
    },
  });

  expect(className("Component")).toBe("class-name class");
});
