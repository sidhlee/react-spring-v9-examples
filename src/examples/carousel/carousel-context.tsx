import React, { createContext, useReducer, useContext } from 'react';
import { slides, Slide } from './images';

type State = {
  currentIndex: number;
  prevIndex: number;
  slides: Slide[];
  isPlaying: boolean;
  /**
   * clicked navigation button to come to the current index instead of clicking next or prev button.
   */
  usedNav: boolean;
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
      return {
        ...state,
        currentIndex: (state.currentIndex + 1) % slides.length,
        prevIndex: state.currentIndex,
        usedNav: false,
        isPlaying: action.type === 'progress' ? true : false,
      };
    case 'prev':
      return {
        ...state,
        currentIndex: (state.currentIndex + slides.length - 1) % slides.length,
        prevIndex: state.currentIndex,
        usedNav: false,
        isPlaying: false,
      };
    case 'goTo':
      return {
        ...state,
        currentIndex: action.payload,
        prevIndex: state.currentIndex,
        usedNav: true,
        isPlaying: false,
      };
    case 'play':
      return {
        ...state,
        isPlaying: true,
      };
    case 'pause':
      return {
        ...state,
        isPlaying: false,
      };
    default: {
      throw new Error(`Unhandled action type: ${action!.type}`);
    }
  }
};

const CarouselStateContext = createContext<State | undefined>(undefined);
const CarouselDispatchContext = createContext<Dispatch | undefined>(undefined);

const initialState: State = {
  currentIndex: 2,
  prevIndex: 2,
  slides,
  isPlaying: false,
  usedNav: false,
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
  return context;
};

const useCarouselDispatch = () => {
  const context = useContext(CarouselDispatchContext);
  if (context === undefined) {
    throw new Error(
      'useCarouselDispatch must ne used within a CarouselDispatchProvider'
    );
  }
  return context;
};

const useCarousel = () => {
  return [useCarouselState(), useCarouselDispatch()] as const;
};

export { CarouselStateProvider, useCarousel };
