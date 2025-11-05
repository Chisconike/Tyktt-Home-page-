import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface JourneyCardProps {
  stepNumber: number;
  heading: string;
  description: string;
  listItems: string[];
  images: { src: string; alt: string }[];
}

function JourneyCard({
  stepNumber,
  heading,
  description,
  listItems,
  images,
}: JourneyCardProps) {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="col-lg-6 mb-4 mb-lg-0">
        {/* === STEP SECTION === */}
        <div className="d-flex align-items-center mb-3">
          <div className="step-counter rounded-circle text-white d-flex align-items-center justify-content-center me-3">
            <span className="fw-bold fs-4">{stepNumber}</span>
          </div>
          <h3 className="fw-bold text-dark mb-0">{heading}</h3>
        </div>

        <p className="text-muted mb-4">{description}</p>

        {/* === LIST SECTION === */}
        <ul className="list-unstyled">
          {listItems.map((item, index) => (
            <li className="mb-2" key={index}>
              <i className="fas fa-check text-success me-2"></i>
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* === CAROUSEL SECTION === */}
      <div className="col-lg-6">
        <div className="browser-mockup">
          <div className="browser-header">
            <span className="dot dot-red"></span>
            <span className="dot dot-yellow"></span>
            <span className="dot dot-green"></span>
          </div>

          <Slider {...settings}>
            {images.map((img, i) => (
              <div key={i}>
                <img
                  src={img.src}
                  alt={img.alt}
                  width="100%"
                  height="100%"
                  loading="lazy"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default JourneyCard;
