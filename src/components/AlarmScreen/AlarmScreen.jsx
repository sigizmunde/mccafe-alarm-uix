import RoundClock from 'components/RoundClock/RoundClock';
import React from 'react';
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

import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  max-width: 480px;
  height: 100%;
  color: var(--text-color);
  /* background: rgb(195, 34, 34); */
  background: linear-gradient(
    28deg,
    rgba(195, 34, 34, 1) 0%,
    rgba(255, 87, 115, 1) 55%,
    rgba(247, 214, 92, 1) 100%
  );
`;

const MenuHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 24px;
  height: 127px;
  background: transparent;
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Caption = styled.p`
  margin: 0;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.2;
`;

const Digits = styled.span`
  font-family: var(--font-family-monda);
  font-style: normal;
  font-weight: 400;
  font-size: 72px;
  line-height: 1;
`;

const ClockBlock = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ClockContainer = styled.div`
  position: absolute;
  z-index: 1;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
`;

const CircleDiv = styled.div`
  margin: 42px auto;
  width: 360px;
  height: 360px;
  border-radius: 50%;
  background-color: #190e08;
`;

const CoffeeImg = styled.img`
  display: block;
  margin: 0 auto;
  width: 92%;
`;

const prevButtonStyle = {
  position: 'absolute',
  zIndex: 1,
  left: '0',
  top: '50%',
  transform: 'translateY(-50%)',
  backgroundColor: 'transparent',
  color: 'var(--text-color)',
  fontFamily: 'var(--font-family-monda)',
  fontSize: '42px',
  border: 'none',
};

const nextButtonStyle = {
  position: 'absolute',
  zIndex: 1,
  right: '0',
  top: '50%',
  transform: 'translateY(-50%)',
  backgroundColor: 'transparent',
  color: 'var(--text-color)',
  fontFamily: 'var(--font-family-monda)',
  fontSize: '42px',
  border: 'none',
};

const sliderStyle = {
  width: '360px',
  height: '360px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '0 auto',
};

const slideStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  margin: '0',
};

class ComponentToGetCarouselProps extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  componentDidUpdate() {
    console.log(this.props);
    const x = this.props.currentSlide;
    if (this.props.updateIndex && x) this.props.updateIndex(x);
    if (x) localStorage.setItem('coffeeIndex', x);
  }

  render() {
    return null;
  }
}

const MyWithStore = WithStore(ComponentToGetCarouselProps, state => ({
  currentSlide: state.currentSlide,
}));

const AlarmScreen = () => {
  const [alarmTime] = useState(new Date());
  // , setAlarmTime
  const [items, setItems] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(
    localStorage.getItem('coffeeIndex') || 0
  );

  useEffect(() => {
    fetchDrinks().then(response => setItems(response));
  }, []);

  const writeCurrentRef = x => {
    // currentIndex.current = x;
    setCurrentIndex(x);
    console.log(x);
  };

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
            <RoundClock value={alarmTime} />
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
          {alarmTime.getHours().toString().padStart(2, '0') +
            ':' +
            alarmTime.getMinutes().toString().padStart(2, '0')}
        </Digits>
      </Main>
    </Container>
  );
};

export default AlarmScreen;
