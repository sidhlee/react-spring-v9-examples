import React, { useRef, useState, useEffect } from 'react';
import { loremIpsum } from 'lorem-ipsum';
import { X } from 'react-feather';
import {
  Main,
  GlobalStyle,
  Container,
  Message,
  Content,
  Life,
  Button,
} from './styles';
import { useTransition } from 'react-spring';

const DEBUG = true;
let id = 0;

type MessageHubProps = {
  children: (add: (msg: string) => void) => void;
  timeout?: number;
  config?: any;
};

type Message = {
  key: number;
  msg: string;
};

const defaultConfig = {
  tension: 125,
  friction: 20,
  precision: 0.1,
};

const MessageHub = ({
  config = defaultConfig,
  timeout = 3000,
  children,
}: MessageHubProps) => {
  const [items, setItems] = useState<Message[]>([]);
  const refMap = useRef(new WeakMap()).current;
  const cancelMap = useRef(new WeakMap()).current;

  const transition = useTransition(items, {
    key: (item) => item.key,
    from: { opacity: 0, height: 0, life: '100%' },
    enter: (item) => async (next, stop) => {
      if (DEBUG) {
        console.log(` Entering:`, item.key);
        console.log(` items: `, items);
      }
      // map cancel function to the given item
      cancelMap.set(item, () => {
        if (DEBUG) console.log(` Cancelled:`, item.key);
        stop(); // stop animation for given item
        setItems((state) => state.filter((i) => i.key !== item.key)); // remove given item
      });
      await next({
        opacity: 1,
        height: refMap.get(item).offsetHeight,
        config,
      });
      await next({ life: '0%', config: { duration: timeout } });
      cancelMap.get(item)(); // run cancel function
    },
    leave: (item) => async (next) => {
      if (DEBUG) console.log(` Leaving:`, item.key);
      await next({ opacity: 0, config });
      await next({ height: 0, config });
    },
  });

  useEffect(
    () =>
      void children((msg: string) => {
        setItems((state) => [...state, { key: id++, msg }]);
      }), // store passed function in the parent component's ref
    // so that parent component can have access to the passed function
    // which has access to all the local variables
    [children]
  );

  return (
    <Container>
      {
        // props, item
        transition(({ life, ...style }, item, state) => {
          if (!items.find((i) => i.key === item.key) && state.phase === 'mount')
            return;
          return (
            <Message style={style}>
              <Content ref={(elm) => elm && refMap.set(item, elm)}>
                <Life style={{ right: life }} />
                <p>{item.msg}</p>
                <Button
                  onClick={(e) => {
                    e.stopPropagation(); // to the Container with pointer-events: none;
                    if (cancelMap.has(item)) {
                      if (DEBUG) console.log(` Cancelled item:`, item);
                      cancelMap.get(item)(); // run cancel fn mapped to the item
                    }
                  }}
                >
                  <X size={18} />
                </Button>
              </Content>
            </Message>
          );
        })
      }
    </Container>
  );
};

const App = () => {
  const addItemRef = useRef<Function | null>(null);

  const handleMainClick = () => {
    if (DEBUG) console.log('[Main] clicked');
    if (typeof addItemRef.current === 'function') {
      addItemRef.current(loremIpsum());
    }
  };

  return (
    <Main className="main" onClick={handleMainClick}>
      <GlobalStyle />
      Click here to create notification
      {/* invoke children fn passing in addItem fn to be stored in ref */}
      <MessageHub children={(addItem) => (addItemRef.current = addItem)} />
    </Main>
  );
};

export default App;
