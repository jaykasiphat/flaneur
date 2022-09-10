export default function Card(props) {
  return (
    <section className="card">
      <img src={props.imageUrl} />
      <div className="card--details">
        <p>
          <span>{props.location}</span>
          <span>
            <a href={props.googleMapsUrl}>View on Google Maps</a>
          </span>
        </p>
        <h2>{props.title}</h2>
        <p>{props.startDate}-{props.endDate}</p>
        <p>{props.description}</p>
      </div>
    </section>
  );
}
