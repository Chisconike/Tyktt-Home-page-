interface CardProps {
  image: string;
  heading: string;
  text: string;
}

function Card({ image, heading, text }: CardProps) {
  return (
    <>
      <div className="card p-3 justify-content-center align-items-center shadow-sm border-0 h-100">
        <div className="mb-3">
          <img src={image} width={150} loading="lazy" />
        </div>
        <h5 className="fw-bold text-muted">{heading}</h5>
        <p className="text-muted">{text}</p>
      </div>
    </>
  );
}

export default Card;
