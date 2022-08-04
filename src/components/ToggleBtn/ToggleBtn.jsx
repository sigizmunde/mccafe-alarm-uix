import { Btn } from 'components/StyledBlocks/StyledBlocks';
import { useState } from 'react';
import styled from 'styled-components';

const SmallBtn = styled(Btn)`
  font-size: 15px;
  line-height: 24px;
  text-align: center;
  border-radius: 50%;
  padding: 5px;
  height: 24px;
  width: 24px;
`;

const ToggleBtn = ({ children }) => {
  const [active, setActive] = useState(false);

  const toggleActive = () => setActive(active => !active);

  return (
    <SmallBtn
      bg={active ? 'var(--text-color)' : 'transparent'}
      hoverbg="var(--faded-text-color)"
      clr={active ? 'var(--inverted-text-color)' : 'var(--text-color)'}
      onClick={toggleActive}
    >
      {children}
    </SmallBtn>
  );
};

export default ToggleBtn;
