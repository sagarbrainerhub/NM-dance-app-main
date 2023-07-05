import images from '../assets/Images';

const data = [
  {
    title: 'VUOI BALLARE',
    body: 'CON MATI?',
    imgUrl: images.firstSlide,
    userImg: images.user,
    isLock: false,
  },
  {
    title: 'VUOI BALLARE',
    body: 'CON PIADINA?',
    imgUrl: images.secondSlide,
    isLock: true,
    userImg: images.cat,
  },
  {
    title: 'VUOI BALLARE',
    body: 'CON MATI?',
    imgUrl: images.firstSlide,
    isLock: true,
    userImg: images.user,
  },
];

export default data;
