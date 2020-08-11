import img0 from './20190902_185638.jpg';
import img1 from './IMG_7346.jpg';
import img2 from './IMG_8433.jpg';
import img3 from './IMG_8660.jpg';
import img4 from './IMG_9004.jpg';
import img5 from './IMG_9170.jpg';

export type Slide = {
  id: string;
  title: string;
  desc: string;
  src: string;
};

export const slides: Slide[] = [
  {
    id: 'img0',
    title: 'Brother and Sister',
    desc: 'Ethan and Elaine are watching Pokemon together on a bunker bed.',
    src: img0,
  },
  {
    id: 'img1',
    title: 'My Ball!',
    desc:
      'Dad and Ethan are kicking some balls at Youido Park under the blue sky.',
    src: img1,
  },
  {
    id: 'img2',
    title: 'Sunshine Girl',
    desc: 'Elaine strolling down in her pretty shoes.',
    src: img2,
  },
  {
    id: 'img3',
    title: 'Here Goes The Cannon Ball!',
    desc: 'Ethan is ready to launch his final attack on dad.',
    src: img3,
  },
  {
    id: 'img4',
    title: 'Side by Side',
    desc: 'A sunny afternoon at Han-River Park',

    src: img4,
  },
  {
    id: 'img5',
    title: 'Good Morning Yellow Brick Road',
    desc: 'Ethan is walking to the Kindergarten with mom and dad.',

    src: img5,
  },
];
