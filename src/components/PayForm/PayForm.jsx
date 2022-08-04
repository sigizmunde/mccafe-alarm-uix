import { Btn, Svg } from 'components/StyledBlocks/StyledBlocks';
import styled from 'styled-components';
import Icons from 'images/symbol-defs.svg';

const Backdrop = styled.div`
  position: fixed;
  z-index: 99;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #00000080;
`;

const Modal = styled.div`
  position: absolute;
  z-index: 1;
  height: 360px;
  width: 90%;
  max-width: 420px;
  margin: auto;
  padding: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 25px;
  font-size: 24px;
  font-weight: 300;
  font-style: normal;
  background-color: #4e2417;
  background: linear-gradient(28deg, #3a1a0f 0%, #4e2417 50%, #d15525 150%);
  border-radius: 25px;
`;

const Frame = styled.div`
  border: 1px solid var(--faded-text-color);
  border-radius: 10px;
`;

const OptionalCaption = styled.p`
  font-weight: 400;
  color: var(--faded-text-color);
  font-size: 18px;
`;

const PayForm = ({ handleClick }) => {
  return (
    <Backdrop>
      <Modal onClick={handleClick}>
        <OptionalCaption>Please, choose payment method</OptionalCaption>
        <Frame>
          <Btn>
            <Svg
            // style={{ width: '72px', height: '72px', fill: 'var(--text-color)' }}
            >
              <use href={Icons + '#icon-credit-card'} />
            </Svg>{' '}
            3554 **** **** 2894
          </Btn>
        </Frame>
        <OptionalCaption>Other options...</OptionalCaption>
      </Modal>
    </Backdrop>
  );
};

export default PayForm;
