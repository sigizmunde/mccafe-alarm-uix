import styled from 'styled-components';

export const Digits = styled.span`
  font-family: var(--font-family-monda);
  font-style: normal;
  font-weight: 400;
  font-size: 72px;
  line-height: 1;
`;

export const SwipeZone = styled.span`
  display: inline-block;
  position: relative;
  margin-top: 15px;
  margin-bottom: 15px;
  cursor: ns-resize;
  ::before {
    content: '▲';
    font-size: 12px;
    position: absolute;
    top: -5px;
    left: 50%;
    transform: translateX(-50%);
  }
  ::after {
    content: '▼';
    font-size: 12px;
    position: absolute;
    bottom: -8px;
    left: 50%;
    transform: translateX(-50%);
  }
`;
