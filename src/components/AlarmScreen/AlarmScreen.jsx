import RoundClock from 'components/RoundClock/RoundClock';
import React from 'react';
import {
  Container,
  MenuHeader,
  Main,
  Caption,
  Digits,
  ClockBlock,
  ClockContainer,
  CircleDiv,
  CoffeeImg,
  prevButtonStyle,
  nextButtonStyle,
  sliderStyle,
  slideStyle,
} from './AlarmScreen.styled';
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  WithStore,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { useSwipeable } from 'react-swipeable';
import { useEffect, useState } from 'react';
import { fetchDrinks } from 'services/api-mockup';

class ComponentToGetCarouselProps extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  componentDidUpdate() {
    console.log(this.props);
    const x = this.props.currentSlide;
    if (this.props.updateIndex && x > -1) this.props.updateIndex(x);
    if (x > -1) localStorage.setItem('coffeeIndex', x);
  }

  render() {
    return null;
  }
}

const MyWithStore = WithStore(ComponentToGetCarouselProps, state => ({
  currentSlide: state.currentSlide,
}));

const timeStringToDate = (hours, minutes) => {
  const today = new Date();
  const modifiedDate = new Date(today.setHours(hours, minutes));
  return modifiedDate;
};

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

//------------------------------ functional component -----------------------------

const AlarmScreen = () => {
  const [alarmTimeHours, setAlarmTimeHours] = useState(new Date().getHours());
  const [alarmTimeMinutes, setAlarmTimeMinutes] = useState(
    new Date().getMinutes()
  );
  const [items, setItems] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(
    localStorage.getItem('coffeeIndex') || 0
  );

  useEffect(() => {
    fetchDrinks().then(response => setItems(response));
  }, []);

  const writeCurrentRef = x => {
    setCurrentIndex(x);
    console.log(x);
  };

  const swipeHandlersHours = useSwipeable({
    onSwiping: eventData => {
      const { deltaY } = eventData;
      let newHours = (swipeBuffer - Math.floor(deltaY / swipeStep)) % 24;
      while (newHours < 0) {
        newHours += 24;
      }
      setAlarmTimeHours(newHours);
    },
    onSwipeStart: eventData => {
      swipeBuffer = alarmTimeHours;
    },
    onTap: () => {
      setAlarmTimeHours(hours => (hours + 1) % 24);
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
      setAlarmTimeMinutes(newMinutes);
    },
    onSwipeStart: eventData => {
      swipeBuffer = alarmTimeMinutes;
    },
    ...swipeConfig,
  });

  return (
    <Container>
      <MenuHeader></MenuHeader>
      <Main>
        {items.length > 0 && (
          <>
            <Caption>Your drink is</Caption>
            <Caption>{items[currentIndex]?.name}</Caption>
          </>
        )}
        <ClockBlock>
          <ClockContainer>
            <RoundClock
              value={timeStringToDate(alarmTimeHours, alarmTimeMinutes)}
            />
          </ClockContainer>
          {items.length === 0 && <CircleDiv />}

          {items.length > 0 && (
            <CarouselProvider
              naturalSlideWidth={100}
              naturalSlideHeight={100}
              totalSlides={items.length}
              // currentSlide={localStorage.getItem('coffeeIndex') || 0}
              infinite={true}
              isIntrinsicHeight={true}
            >
              <ButtonBack style={prevButtonStyle}>{'<'}</ButtonBack>
              <Slider style={sliderStyle}>
                {items.map(({ id, img_src, name }, index) => {
                  return (
                    <Slide index={index} key={id} style={slideStyle}>
                      <CoffeeImg src={img_src} alt={name} />
                    </Slide>
                  );
                })}
              </Slider>
              <ButtonNext style={nextButtonStyle}>{'>'}</ButtonNext>
              <MyWithStore updateIndex={writeCurrentRef} />
            </CarouselProvider>
          )}
        </ClockBlock>
        <Caption>Coffee time:</Caption>
        <Digits>
          <span {...swipeHandlersHours}>
            {alarmTimeHours.toString().padStart(2, '0')}
          </span>
          :
          <span {...swipeHandlersMinutes}>
            {alarmTimeMinutes.toString().padStart(2, '0')}
          </span>
        </Digits>
      </Main>
    </Container>
  );
};

export default AlarmScreen;
