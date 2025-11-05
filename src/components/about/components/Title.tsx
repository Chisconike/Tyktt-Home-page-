interface TitleProps {
  heading: string;
}

function Title({ heading }: TitleProps) {
  return (
    <>
      <div>
        <h3 className="fw-bold">{heading}</h3>
      </div>
    </>
  );
}

export default Title;
