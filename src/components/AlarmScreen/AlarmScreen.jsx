import RoundClock from 'components/RoundClock/RoundClock';
import { useEffect, useState } from 'react';
import { fetchDrinks } from 'services/api-mockup';

import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  max-width: 480px;
  height: 100%;
  color: var(--text-color);
  /* background: rgb(195, 34, 34); */
  background: linear-gradient(
    28deg,
    rgba(195, 34, 34, 1) 0%,
    rgba(255, 87, 115, 1) 55%,
    rgba(247, 214, 92, 1) 100%
  );
`;

const MenuHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 24px;
  height: 127px;
  background: transparent;
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Caption = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
`;

const Digits = styled.span`
  font-family: var(--font-family-monda);
  font-style: normal;
  font-weight: 400;
  font-size: 72px;
  line-height: 1;
`;

const CircleDiv = styled.div`
  margin: 42px auto;
  width: 360px;
  height: 360px;
  border-radius: 50%;
  background-color: #190e08;
`;

const CoffeeImg = styled.img`
  display: block;
  width: 92%;
`;

const AlarmScreen = () => {
  const [alarmTime, setAlarmTime] = useState(new Date());
  const [items, setItems] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    fetchDrinks().then(response => setItems(response));
  }, []);

  return (
    <Container>
      <MenuHeader></MenuHeader>
      <Main>
        <RoundClock value={alarmTime} />
        {items.length === 0 && <CircleDiv />}
        {items.length > 0 && (
          <CoffeeImg src={items[index].img_src} alt={items[index].name} />
        )}

        <Caption>Coffee time:</Caption>
        <Digits>
          {alarmTime.getHours().toString().padStart(2, '0') +
            ':' +
            alarmTime.getMinutes().toString().padStart(2, '0')}
        </Digits>
      </Main>
    </Container>
  );
};

export default AlarmScreen;
