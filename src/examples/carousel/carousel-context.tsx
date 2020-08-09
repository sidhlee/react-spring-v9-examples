import React, { createContext, useReducer, useContext } from 'react';
import { slides, Slide } from './images';

type State = {
  currentIndex: number;
  slides: Slide[];
  isPlaying: boolean;
};
type Action =
  | { type: 'progress' }
  | { type: 'next' }
  | { type: 'prev' }
  | { type: 'goTo'; payload: number }
  | { type: 'play' }
  | { type: 'pause' };
type Dispatch = (action: Action) => void;

const carouselReducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'progress':
    case 'next':
    case 'prev':
    case 'goTo':
    case 'play':
    case 'pause':
      return state;
    default: {
      throw new Error(`Unhandled action type: ${action!.type}`);
    }
  }
};

const CarouselStateContext = createContext<State | undefined>(undefined);
const CarouselDispatchContext = createContext<Dispatch | undefined>(undefined);

const initialState: State = {
  currentIndex: 2,
  slides,
  isPlaying: false,
};

const CarouselStateProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(carouselReducer, initialState);

  return (
    <CarouselStateContext.Provider value={state}>
      <CarouselDispatchContext.Provider value={dispatch}>
        {children}
      </CarouselDispatchContext.Provider>
    </CarouselStateContext.Provider>
  );
};

const useCarouselState = () => {
  const context = useContext(CarouselStateContext);
  if (context === undefined) {
    throw new Error(
      'useCarouselState must be used within a CarouselStateProvider'
    );
  }
};

const useCarouselDispatch = () => {
  const context = useContext(CarouselDispatchContext);
  if (context === undefined) {
    throw new Error(
      'useCarouselDispatch must ne used within a CarouselDispatchProvider'
    );
  }
};

const useCarousel = () => {
  return [useCarouselState(), useCarouselDispatch()] as const;
};

export { CarouselStateProvider, useCarousel };
