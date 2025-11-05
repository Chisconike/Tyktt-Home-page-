interface MissionProps {
  image: string;
  heading: string;
  body: string;
}

function Mission({ image, heading, body }: MissionProps) {
  return (
    <>
      <div>
        <i className={`fas fa-${image} fa-3x make_color mb-3`}></i>
        <h4 className="fw-bold my-3">{heading}</h4>
        <p className="text-muted">{body}</p>
      </div>
    </>
  );
}

export default Mission;
