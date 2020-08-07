import React, { useState, useRef } from 'react';
import { useTransition } from 'react-spring';
import { loremIpsum } from 'lorem-ipsum';

import {
  Container,
  Message,
  Content,
  Life,
  Button,
  Main,
} from './messageHubStyles';
import { X } from 'react-feather';

const defaultConfig = {
  tension: 125,
  friction: 20,
  precision: 0.1,
};

type Message = {
  key: number;
  text: string;
};

type MessageHubProps = {
  /**
   * Stores passed
   */
  config?: any;
  timeout?: number;
};

// TODO: DEBUG
// - Animation freezes if message is cancelled while exiting
// - Cancelled message remains in the messages state and re-enters

let id = 0;
const MessageHub = ({
  config = defaultConfig,
  timeout = 2500,
}: MessageHubProps) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const cancelMap = useRef(new WeakMap()).current;
  const refMap = useRef(new WeakMap()).current;

  const transition = useTransition(messages, {
    key: (message) => message.key,
    from: { opacity: 0, height: 0, life: '100%' },
    enter: (message) => async (next, cancel) => {
      console.log('enter: ', message.key);
      cancelMap.set(message, () => {
        console.log('cancel: ', message.key);
        cancel();
        setMessages((messages: Message[]) =>
          messages.filter((m) => m.key !== message.key)
        );
      });
      await next({
        opacity: 1,
        height: refMap.get(message).offsetHeight,
        config,
      });
      await next({
        life: '0%',
        config: { duration: timeout },
      });
      cancelMap.get(message)();
    },
    leave: (message) => async (next) => {
      console.log('leave: ', message.key);
      await next({ opacity: 0, config });
      await next({ height: 0, config });
    },
  });

  const handleMainClick = () => {
    setMessages([...messages, { key: id++, text: loremIpsum() }]);
  };

  return (
    <Main className="main" onClick={handleMainClick}>
      <p>Click here to create notification</p>
      <Container>
        {transition(({ life, ...style }, message, state) => {
          // Transition still passing cancelled message into cb
          console.log('rendering');
          console.log(messages, message);
          if (
            // prevent cancelled message from entering again
            !messages.find((m) => m.key === message.key) &&
            state.phase === 'mount' // allow 'leave' animation on canceled message
          ) {
            console.log(`message ${message.key} is not found in state`);
            return;
          }
          return (
            <Message style={style}>
              <Content ref={(elm) => elm && refMap.set(message, elm)}>
                <Life style={{ right: life }} />
                <p>{message.text}</p>
                <Button
                  onClick={(e) => {
                    e.stopPropagation();
                    if (cancelMap.has(message)) {
                      cancelMap.get(message)();
                    }
                  }}
                >
                  <X size={18} />
                </Button>
              </Content>
            </Message>
          );
        })}
      </Container>
    </Main>
  );
};

export default MessageHub;
