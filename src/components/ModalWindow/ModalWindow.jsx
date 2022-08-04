import { Btn, Svg } from 'components/StyledBlocks/StyledBlocks';
import styled from 'styled-components';
import McCafeLogo from 'images/McCafeLogo.svg';

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
  height: 100%;
  width: 100%;
  max-width: 480px;
  margin: auto;
  padding: 25px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 25px;
  background-color: #4e2417;
  background: linear-gradient(
    28deg,
    #3a1a0f 0%,
    #4e2417 50%,
    #d15525 75%,
    #fbb949 100%
  );
  border-radius: 25px;
`;

const Frame = styled.div`
  border: 1px solid var(--faded-text-color);
  border-radius: 25px;
  padding: 0;
`;

const ModalWindow = ({ handleClick }) => {
  return (
    <Backdrop>
      <Modal onClick={handleClick}>
        <Frame>
          <Btn
            style={{
              padding: '10px',
            }}
          >
            <Svg
              style={{
                width: '72px',
                height: '72px',
                fill: 'var(--text-color)',
              }}
            >
              <use href={McCafeLogo + '#main'} />
            </Svg>
          </Btn>
        </Frame>
      </Modal>
    </Backdrop>
  );
};

export default ModalWindow;
