interface TitleProps {
  heading: string;
  content: string;
}

function Title({ heading, content }: TitleProps) {
  return (
    <>
      <h2 className="text-center text-black">{heading}</h2>
      <p className="text-center">{content}</p>
    </>
  );
}

export default Title;
