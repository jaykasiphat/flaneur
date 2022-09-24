import pinIcon from '../assets/pin.svg';

export default function Card(props) {
  return (
    <section className="card">
      <img src={props.imageUrl} className="card--img" alt={props.title}/>
      <div className="card--details">
        <p>
          <img src={pinIcon} alt="location icon" className="card--icon--pin" />
          <span className="card--location">{props.location}</span>
          <span>
            <a href={props.googleMapsUrl} className="card--link">View on Google Maps</a>
          </span>
        </p>
        <h2 className="card--title">{props.title}</h2>
        <p className="card--dates">{props.startDate} - {props.endDate}</p>
        <p>{props.description}</p>
      </div>
    </section>
  );
}
