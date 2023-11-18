import isObject from "./isObject";

export default function ui<Component extends string, ClassNames extends string>(
  factory: Record<Component, ClassNames>,
) {
  return function className(
    ...pickers: (Component | Record<Component, boolean>)[]
  ) {
    let classNames: ClassNames[] = [];

    for (const picker of pickers) {
      if (typeof picker === "string") classNames.push(factory[picker]);

      if (isObject(picker)) {
        for (const key in picker) {
          if (picker[key]) classNames.push(factory[key]);
        }
      }
    }

    // TODO: Join<ClassNames>
    return classNames.join(" ");
  };
}
