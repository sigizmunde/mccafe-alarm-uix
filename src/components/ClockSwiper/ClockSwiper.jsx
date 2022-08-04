import { Digits, SwipeZone } from './ClockSwiper.styled';
import { useSwipeable } from 'react-swipeable';

const swipeConfig = {
  delta: 10, // min distance(px) before a swipe starts. *See Notes*
  preventScrollOnSwipe: true, // prevents scroll during swipe (*See Details*)
  trackTouch: true, // track touch input
  trackMouse: true, // track mouse input
  rotationAngle: 0, // set a rotation angle
  swipeDuration: Infinity, // allowable duration of a swipe (ms). *See Notes*
  touchEventOptions: { passive: true }, // options for touch listeners (*See Details*)
};

let swipeBuffer;
const swipeStep = 25;

const ClockSwiper = ({ Hours, Minutes, setHours, setMinutes }) => {
  const swipeHandlersHours = useSwipeable({
    onSwiping: eventData => {
      const { deltaY } = eventData;
      let newHours = (swipeBuffer - Math.floor(deltaY / swipeStep)) % 24;
      while (newHours < 0) {
        newHours += 24;
      }
      setHours(newHours);
    },
    onSwipeStart: eventData => {
      swipeBuffer = Hours;
    },
    ...swipeConfig,
  });

  const swipeHandlersMinutes = useSwipeable({
    onSwiping: eventData => {
      const { deltaY } = eventData;
      let newMinutes = (swipeBuffer - Math.floor(deltaY / swipeStep)) % 60;
      while (newMinutes < 0) {
        newMinutes += 60;
      }
      setMinutes(newMinutes);
    },
    onSwipeStart: eventData => {
      swipeBuffer = Minutes;
    },
    ...swipeConfig,
  });

  return (
    <Digits>
      <SwipeZone {...swipeHandlersHours}>
        {Hours.toString().padStart(2, '0')}
      </SwipeZone>
      :
      <SwipeZone {...swipeHandlersMinutes} right>
        {Minutes.toString().padStart(2, '0')}
      </SwipeZone>
    </Digits>
  );
};

export default ClockSwiper;
