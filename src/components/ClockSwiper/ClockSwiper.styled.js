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
  cursor: ns-resize;
  ::before {
    content: '▲';
    font-size: 12px;
    position: absolute;
    top: 50%;
    ${p => (p.right ? 'right: -15px' : 'left: -15px')};
    transform: translateY(calc(-50% - 4px));
    color: var(--faded-text-color);
  }
  ::after {
    content: '▼';
    font-size: 12px;
    position: absolute;
    top: 50%;
    ${p => (p.right ? 'right: -15px' : 'left: -15px')};
    transform: translateY(calc(-50% + 12px));
    color: var(--faded-text-color);
  }
`;
