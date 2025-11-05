import img from "../../assets/abouthero.png";
import Title from "./components/Title";
import Mission from "./components/Mission";
import Core from "./components/Core";
import Number from "./components/Number";

function About() {
  return (
    <>
      <div className="about_img"></div>
      <div className="container my-5">
        <div className="row align-items-center pt-5">
          <div className="col-12 col-md-6 mt-3">
            <img src={img} alt={img} width="100%" className="rounded" />
          </div>
          <div className="col-12 col-md-6 mt-3">
            <div>
              <Title heading="Who We Are" />
              <p className="text-muted">
                Tyktt is a next-generation B2B travel platform powered by{" "}
                <b> TRAVEL YAKATA</b>. Dedicated to helping travel agencies
                succeed, with our seamless flight booking, hotel reservation,
                travel insurance and booking management solutions. We give
                travel agencies the technology and support needed to thrive in a
                competitive travel market.{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="row my-5 pb-3 align-items-center">
          <div className="col-12 col-md-6 mt-3">
            <div className="shadow p-4 rounded text-center">
              <Mission
                image="bullseye"
                heading="Our Mission"
                body="To simplify travel bookings for agencies by providing a fast, secure, and affordable platform that enhances efficiency and profitability. "
              />
            </div>
          </div>
          <div className="col-12 col-md-6 mt-3">
            <div className="shadow p-4 rounded text-center">
              <Mission
                image="eye"
                heading="Our Vision"
                body="To become Africa’s leading B2B travel technology provider, trusted by agencies for innovation, transparency, and excellence."
              />
            </div>
          </div>
        </div>

        <div className="text-center py-5 px-3 make_bg rounded">
          <Title heading="Our Core Values" />
          <div className="row mt-5">
            <div className="col-12 col-md-6 col-lg-3">
              <Core
                img="handshake"
                heading="Trust"
                body="We build long-term partnerships with agencies through honesty and reliability."
              />
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <Core
                img="lightbulb"
                heading="Innovation"
                body="We embrace new technologies to keep agencies ahead of the competition."
              />
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <Core
                img="users"
                heading="Service"
                body="We prioritize customer experience with responsive and personalized support."
              />
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <Core
                img="globe"
                heading="Excellence"
                body="We deliver consistently high-quality solutions that meet global standards."
              />
            </div>
          </div>
        </div>

        <div className="text-center my-5 py-3">
          <Title heading="Our Story" />
          <p className="text-muted mt-2">
            Tyktt was founded by <b>Travel Yakata</b> with a single goal: to
            make travel management easier for agencies across Africa and beyond.
            From humble beginnings, we’ve grown into a trusted platform that
            combines global reach with local understanding.{" "}
          </p>

          <div className="row">
            <div className="col-12 col-md-4 mt-3">
              <Number heading="5+" body="Years of industry expertise" />
            </div>
            <div className="col-12 col-md-4 mt-3">
              <Number heading="1,000+" body="Agencies served" />
            </div>
            <div className="col-12 col-md-4 mt-3">
              <Number heading="10,000+" body="Tickets issued" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
