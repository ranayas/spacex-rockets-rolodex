import './card.styles.css';

export const Card = ({ rocket }) => {
  return (
    <div className='card'>
      <img
        className='card__image'
        src={rocket.flickr_images[0]}
        alt={rocket.name}
      />
      <h2 className='card__title'>{rocket.name}</h2>
      <ul className='card__details'>
        <li className='card__details__item'>
          First flight: {rocket.first_flight}
        </li>
        <li className='card__details__item'>
          Height: {rocket.height.meters} m.
        </li>
        <li className='card__details__item'>
          Diameter: {rocket.diameter.meters} m.
        </li>
      </ul>
    </div>
  );
};
