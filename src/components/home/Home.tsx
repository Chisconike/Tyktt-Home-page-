import Landing from "./components/Landing";
import Card from "./components/Card";
import Title from "./components/Title";
import JourneyCard from "./components/JourneyCard";
import { cardData } from "../../data/cardData";
import { journeyData } from "../../data/journeyData";

function Home() {
  return (
    <>
      <Landing />
      <div className="container my-5" id="followed">
        <Title
          heading="Grow your travel business with Tyktt all-in-one booking platform"
          content="Break free from outdated systems and manage flight bookings, hotel
          reservations and travel insurance with speed and simplicity."
        />

        <div className="row">
          {cardData.map((card, index) => (
            <div className="col-12 col-md-6 col-lg-4 mt-4" key={index}>
              <Card
                image={card.image}
                heading={card.heading}
                text={card.text}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="p-3 p-md-5 make_bg">
        <Title
          heading="Your Journey with TYKTT"
          content="Follow these simple steps to unlock the full potential of our platform"
        />

        <div className="container">
          {journeyData.map((item, index) => (
            <div
              className="row mb-5 mt-3 mt-md-5 align-items-center"
              key={index}
            >
              <JourneyCard
                stepNumber={item.stepNumber}
                heading={item.heading}
                description={item.description}
                listItems={item.listItems}
                images={item.images}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
