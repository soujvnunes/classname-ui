# classname-ui
Based on tailwindcss, tailwind-merge and classNames; call UI factory, for define components with its variants, to return a set of object-like strings to be used in your app.

## Example
```tsx
import { Transition } from '@headlessui/react';
import { useState } from 'react';
import ui from 'classname-ui';

const className = ui({
  Button: {
    root: 'flex items-center',
    variant: {
      filled: 'bg-gray-300',
      outlined: 'border border-gray-300',
    },
    size: {
      md: 'h-3 py-1',
      lg: 'h4 py-2'
    },
  },
  Link: {
    root: 'no-underline',
  },
  Fade: {
    root: 'transition-opacity',
    show: 'opacity-100',
    hide: 'opacity-0'
  },
});

function App() {
  const [bigger, setBigger] = useState(false);

  return (
    <div className='flex h-96 w-full'>
      <a
        href='https://www.com.br'
        onClick={() => setBigger(true)}
        className={className(
          // Specify your components and variants directly...
          'Link.root',
          'Button.root.variantOutlined.sizeMd',
          {
            // ...or conditionally
            'Button.sizeLg': bigger,
          },
          // and add even more if necessary.
          'm-auto'
        )}>
        Make me bigger 😎
      </a>
      <Transition
        as='p'
        show={bigger}
        enter={className('Fade.root')}
        enterFrom={className('Fade.hide')}
        enterTo={className('Fade.show')}
        leave={className('Fade.root')}
        leaveFrom={className('Fade.show')}
        leaveTo={className('Fade.hide')}
      >
        That link is to big 😅
      </Transition>
    </div>
  );
};
