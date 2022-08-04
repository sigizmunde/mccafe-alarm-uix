import styled from 'styled-components';

const Backdrop = styled.div`
  position: fixed;
  z-index: 99;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #00000080;
`;

const Modal = styled.div`
  position: absolute;
  z-index: 1;
  top: 50px;
  right: 50px;
  bottom: 50px;
  left: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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

const ModalWindow = ({ handleClick }) => {
  return (
    <Backdrop>
      <Modal onClick={handleClick}>
        <p>start</p>
      </Modal>
    </Backdrop>
  );
};

export default ModalWindow;
