import { scroller } from "react-scroll";

function Landing() {
  const scrollToSection = () => {
    scroller.scrollTo("followed", { smooth: true, offset: -50, duration: 100 });
  };

  return (
    <>
      <div className="hero_section d-flex justify-content-center align-items-center">
        <div className="row container">
          <div className="col-12 col-md-6">
            <div>
              <h1 className="text-black fw-bold" data-aos-delay="0">
                Powering Travel Agencies with Smarter Booking
              </h1>
              <p className="p-0 m-0 mt-3" data-aos-delay="300">
                TYKTT is the all-in-one platform built for travel agencies.
                Access the best fares, streamline bookings, and manage ticketing
                with ease, so you can focus on growing your business and serving
                your clients better.
              </p>
              <div className="mt-3">
                <button
                  onClick={scrollToSection}
                  className="btn make_background btn-lg rounded-5 align-items-center"
                >
                  <span className="small">Start Your Journy</span>{" "}
                  <i className="fa-solid fa-arrow-down ms-3 small"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Landing;
