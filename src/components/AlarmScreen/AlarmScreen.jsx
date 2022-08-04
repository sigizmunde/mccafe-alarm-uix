import RoundClock from 'components/RoundClock/RoundClock';
import React from 'react';
import { Svg, Svg180 } from 'components/StyledBlocks/StyledBlocks';
import Calendar from 'components/Calendar/Calendar';
import {
  Container,
  MenuHeader,
  Main,
  Caption,
  ClockBlock,
  ClockContainer,
  CircleDiv,
  CoffeeImg,
  prevButtonStyle,
  nextButtonStyle,
  sliderStyle,
  slideStyle,
  BackBtn,
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
import { useEffect, useState } from 'react';
import { fetchDrinks } from 'services/api-mockup';
import ClockSwiper from 'components/ClockSwiper/ClockSwiper';
import ModalWindow from 'components/ModalWindow/ModalWindow';
import Icons from 'images/symbol-defs.svg';

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

//------------------------------ functional component -----------------------------

const AlarmScreen = ({ openFullscreen, closeFullscreen }) => {
  const [fullscreen, setFullscreen] = useState(false);
  const [alarmTimeHours, setAlarmTimeHours] = useState(new Date().getHours());
  const [alarmTimeMinutes, setAlarmTimeMinutes] = useState(
    new Date().getMinutes()
  );
  const [items, setItems] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(
    localStorage.getItem('coffeeIndex') || 0
  );

  const goFullscreen = () => {
    openFullscreen();
    setFullscreen(true);
  };

  const goWindowed = () => {
    closeFullscreen();
    setFullscreen(false);
  };

  useEffect(() => {
    fetchDrinks().then(response => setItems(response));
  }, []);

  const writeCurrentRef = x => {
    setCurrentIndex(x);
    console.log(x);
  };

  return (
    <Container>
      {!fullscreen && <ModalWindow handleClick={goFullscreen} />}
      <MenuHeader>
        <BackBtn onClick={goWindowed}>
          <Svg>
            <use href={Icons + '#icon-dots-three-horizontal'} />
          </Svg>
        </BackBtn>
      </MenuHeader>
      <Main>
        {items.length > 0 && (
          <>
            <Caption>Wake me up with</Caption>
            <Caption>
              <b>{items[currentIndex]?.name}</b>
            </Caption>
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
              <ButtonBack style={prevButtonStyle}>
                <Svg180>
                  <use href={Icons + '#icon-controller-play'} />
                </Svg180>
              </ButtonBack>
              <Slider style={sliderStyle}>
                {items.map(({ id, img_src, name }, index) => {
                  return (
                    <Slide index={index} key={id} style={slideStyle}>
                      <CoffeeImg src={img_src} alt={name} />
                    </Slide>
                  );
                })}
              </Slider>
              <ButtonNext style={nextButtonStyle}>
                <Svg>
                  <use href={Icons + '#icon-controller-play'} />
                </Svg>
              </ButtonNext>
              <MyWithStore updateIndex={writeCurrentRef} />
            </CarouselProvider>
          )}
        </ClockBlock>
        <ClockSwiper
          Hours={alarmTimeHours}
          Minutes={alarmTimeMinutes}
          setHours={setAlarmTimeHours}
          setMinutes={setAlarmTimeMinutes}
        />
        <Calendar />
      </Main>
    </Container>
  );
};

export default AlarmScreen;
