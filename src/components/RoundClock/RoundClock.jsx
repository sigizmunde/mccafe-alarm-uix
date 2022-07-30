import './RoundClock.css';
import Clock from 'react-clock';

const RoundClock = ({ value }) => {
  return (
    <Clock
      value={value}
      size={310}
      minuteHandWidth={6}
      hourHandWidth={9}
      renderSecondHand={false}
      renderMinuteMarks={false}
      renderHourMarks={false}
    />
  );
};

export default RoundClock;
