import { Card } from '../card/card.component';
import './card-list.styles.css';

export const CardList = ({ rockets }) => {
  return (
    <div className='card-list'>
      {rockets.map(rocket => (
        <Card key={rocket.id} rocket={rocket} />
      ))}
    </div>
  );
};
