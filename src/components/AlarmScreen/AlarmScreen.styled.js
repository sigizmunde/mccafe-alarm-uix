import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 480px;
  height: 100%;
  color: var(--text-color);
  background: rgb(195, 34, 34);
  background: linear-gradient(
    28deg,
    rgba(195, 34, 34, 1) 0%,
    rgba(255, 87, 115, 1) 55%,
    rgba(247, 214, 92, 1) 100%
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
  font-size: 18px;
  line-height: 1.2;
`;

export const Digits = styled.span`
  font-family: var(--font-family-monda);
  font-style: normal;
  font-weight: 400;
  font-size: 72px;
  line-height: 1;
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
  backgroundColor: 'transparent',
  color: 'var(--text-color)',
  fontFamily: 'var(--font-family-monda)',
  fontSize: '42px',
  border: 'none',
};

export const nextButtonStyle = {
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
