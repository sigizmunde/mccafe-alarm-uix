import styled from 'styled-components';

export const Svg = styled.svg`
  display: inline-block;
  width: 1em;
  height: 1em;
  stroke-width: 0;
  stroke: currentColor;
  fill: currentColor;
`;

export const Svg180 = styled(Svg)`
  transform: rotate(180deg);
`;

export const Btn = styled.div`
  cursor: pointer;
  padding: 16px;
  border-radius: 16px;
  background-color: ${p => p.bg};
  color: ${p => p.clr};
  :hover,
  :focus {
    background-color: ${p => p.hoverbg};
    color: ${p => p.hoverclr};
  }
  :active {
    background-color: ${p => p.actinebg};
    color: ${p => p.actineclr};
  }
`;
