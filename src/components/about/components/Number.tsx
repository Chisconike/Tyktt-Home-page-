interface NumberProps {
  heading: string;
  body: string;
}

function Number({ heading, body }: NumberProps) {
  return (
    <>
      <div>
        <h1 className="fw-bold make_color">{heading}</h1>
        <p className="text-muted">{body}</p>
      </div>
    </>
  );
}

export default Number;
