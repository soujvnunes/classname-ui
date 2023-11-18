export default function ui<
  Component extends string,
  ClassNames extends string,
  //Variant extends string,
>(factory: Record<Component, ClassNames>) {
  return function className(...pickers: Component[]) {
    let classNames: string[] = [];

    for (const picker of pickers) {
      const typeofPicker = typeof picker;

      if (typeofPicker === "string") {
        return factory[picker];
      }
    }

    return classNames.join(" ") as ClassNames;
  };
}
