import { Btn } from 'components/StyledBlocks/StyledBlocks';
import ToggleBtn from 'components/ToggleBtn/ToggleBtn';
import styled from 'styled-components';

const Week = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin: 42px auto;
`;

const Calendar = () => {
  return (
    <Week>
      <ToggleBtn>Su</ToggleBtn>
      <ToggleBtn>Mo</ToggleBtn>
      <ToggleBtn>Tu</ToggleBtn>
      <ToggleBtn>We</ToggleBtn>
      <ToggleBtn>Th</ToggleBtn>
      <ToggleBtn>Fr</ToggleBtn>
      <ToggleBtn>Sa</ToggleBtn>
    </Week>
  );
};

export default Calendar;
