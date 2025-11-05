interface CoreProps {
  img: string;
  heading: string;
  body: string;
}

function Core({ img, heading, body }: CoreProps) {
  return (
    <>
      <div>
        <i className={`fas fa-${img} fa-2x make_color mb-2`}></i>
        <h6 className="fw-bold">{heading}</h6>
        <p className="small text-muted">{body}</p>
      </div>
    </>
  );
}

export default Core;
