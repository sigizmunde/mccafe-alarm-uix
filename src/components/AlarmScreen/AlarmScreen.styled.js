import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 480px;
  height: 100%;
  color: var(--text-color);
  background: #4e2417;
  background: linear-gradient(
    28deg,
    #3a1a0f 0%,
    #4e2417 50%,
    #d15525 75%,
    #fbb949 100%
  );
`;

export const MenuHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 24px;
  height: 127px;
  background: transparent;
`;

export const BackBtn = styled.div`
  font-family: var(--font-family-monda);
  font-style: normal;
  font-weight: 700;
  font-size: 42px;
  cursor: pointer;
  padding: 15px;
  margin: 0;
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Caption = styled.p`
  margin: 0;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 1.4;
`;

export const ClockBlock = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ClockContainer = styled.div`
  position: absolute;
  z-index: 1;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
`;

export const CircleDiv = styled.div`
  margin: 42px auto;
  width: 360px;
  height: 360px;
  border-radius: 50%;
  background-color: #190e08;
`;

export const CoffeeImg = styled.img`
  display: block;
  margin: 0 auto;
  width: 92%;
`;

export const prevButtonStyle = {
  position: 'absolute',
  zIndex: 1,
  left: '0',
  top: '50%',
  transform: 'translateY(-50%)',
  padding: '10px',
  backgroundColor: 'transparent',
  color: 'var(--faded-text-color)',
  fontFamily: 'var(--font-family-monda)',
  fontSize: '24px',
  border: 'none',
  outline: 'none',
};

export const nextButtonStyle = {
  position: 'absolute',
  zIndex: 1,
  right: '0',
  top: '50%',
  transform: 'translateY(-50%)',
  padding: '10px',
  backgroundColor: 'transparent',
  color: 'var(--faded-text-color)',
  fontFamily: 'var(--font-family-monda)',
  fontSize: '24px',
  border: 'none',
  outline: 'none',
};

export const sliderStyle = {
  width: '360px',
  height: '360px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '0 auto',
};

export const slideStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  margin: '0',
};
