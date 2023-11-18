# classname-ui

Based on tailwindcss, tailwind-merge and classNames; call UI factory, for define components with its variants, to return a set of object-like strings to be used in your app.

## Example

```js
import { Transition } from "@headlessui/react";
import { useState } from "react";
import ui from "classname-ui";

const className = ui({
  /**
   * Specify components with Capitalized property name with its class names
   * directly as its value.
   */
  Link: "no-underline",
  Button: {
    /**
     * Sub properties are the component variants. If they starts with
     * underscore "_", are default properties which doesn't need to be
     * specified on className params, but still are available to be so
     * without the underscore.
     */
    _root: "flex items-center",
    variant: {
      _filled: "bg-gray-300",
      outlined: "border border-gray-300",
    },
    size: {
      sm: "h-2 py-1",
      _md: "h-3 py-2",
      lg: "h-4 py-3",
    },
  },
  Fade: {
    root: "transition-opacity",
    show: "opacity-100",
    hide: "opacity-0",
  },
});

function App() {
  const [bigger, setBigger] = useState(false);

  return (
    <div className="flex h-96 w-full">
      <a
        href="https://www.com.br"
        onClick={() => setBigger(true)}
        className={className(
          // Specify your components, without specifing DEFAULT properties, and variants directly...
          // This renders Button.root and Button.sizeMd, overriding Button.variant.DEFAULT by Button.variantOutlined
          "Link",
          "Button.variantOutlined",
          {
            // ...or conditionally
            // This will override what is settled as default for size
            "Button.sizeLg": bigger,
            // Can also be used "!" not-notation to remove class names conditionally
            "Button.size!Md": !bigger,
          },
          // and add even more if necessary.
          "m-auto transition-[height,padding-left,padding-right]",
        )}
      >
        Make me bigger 😎
      </a>
      <Transition
        as="p"
        show={bigger}
        enter={className("Fade.root")}
        enterFrom={className("Fade.hide")}
        enterTo={className("Fade.show")}
        leave={className("Fade.root")}
        leaveFrom={className("Fade.show")}
        leaveTo={className("Fade.hide")}
      >
        That link is to big 😅
      </Transition>
    </div>
  );
}
```
