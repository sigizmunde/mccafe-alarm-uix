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
  background-color: rgb(195, 34, 34);
  background: linear-gradient(
    28deg,
    rgba(195, 34, 34, 1) 0%,
    rgba(255, 87, 115, 1) 55%,
    rgba(247, 214, 92, 1) 100%
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
