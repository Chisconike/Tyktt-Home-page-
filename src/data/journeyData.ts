// First
import accType from "../assets/accType.png";
import privateAcc from "../assets/private.png";
import corporate from "../assets/corporate.png";

// Second
import oneway from "../assets/oneway.png";
import roundtrip from "../assets/roundtrip.png";
import multiple from "../assets/multiple.png";

// Third
import flightsearch from "../assets/flightsearch.png";

// Fourth
import eticketing from "../assets/eticketing.png";
import eritrieve from "../assets/eritrieve.png";
import eissue from "../assets/eissue.png";

// Fifth
import managebooking from "../assets/managebooking.png";

// Sixth
import bookinginfo from "../assets/bookinginfo.png";

// Seventh
import wallet from "../assets/wallet.png";
import wallet2 from "../assets/wallet2.png";

// Eighth
import api from "../assets/api.png";

// nineth
import teams from "../assets/teams.png";

// tenth
import settings from "../assets/settings.png";

export const journeyData = [
  {
    stepNumber: 1,
    heading: "Register Your Account",
    description:
      "Start your TYKTT journey by registering your account. Provide your agency details, get verified, and join thousands of agencies already using our platform.",
    listItems: [
      "Quick agency verification process",
      "IATA and non-IATA agencies welcome",
      "Small, Medium and Large travel agencies welcome",
      "Private (Personal) or Corporate agencies welcome",
      "Secure business profile setup",
      "Instant platform access upon approval",
    ],
    images: [
      { src: accType, alt: "Account Type" },
      { src: privateAcc, alt: "Private Account" },
      { src: corporate, alt: "Corporate Account" },
    ],
  },
  {
    stepNumber: 2,
    heading: "Dashboard",
    description:
      "The TYKTT Dashboard is your command center for effortless flight management. From a single, intuitive interface, you can search and compare flights across multiple airlines, whether it’s a one-way journey, a round trip, or a multi-city itinerary.",
    listItems: [
      "Powerful flight search engine",
      "Supports one-way, round-trip, and multi-city bookings",
      "Instant access to global airline fares",
      "Streamlined and user-friendly booking workflow",
      "Import and Issue External Amadeus PNR at ease",
    ],
    images: [
      { src: oneway, alt: "oneway" },
      { src: roundtrip, alt: "roundtrip" },
      { src: multiple, alt: "multiple" },
    ],
  },
  {
    stepNumber: 3,
    heading: "Search & Book Flights",
    description:
      "Easily search, compare, and book flights across multiple airlines. With real-time pricing and seat availability, you can secure the best fares and provide your clients with instant confirmations.",
    listItems: [
      "Access global airline inventory",
      "Compare real-time fares",
      "Upsell with flexible booking options",
      "View refundable & non-refundable fares",
      "Check available seat counts",
      "Book across multiple airlines",
      "Instant booking confirmation",
    ],
    images: [{ src: flightsearch, alt: "flightsearch" }],
  },
  {
    stepNumber: 4,
    heading: "Import & Issue PNR",
    description:
      "Generate your own PNR in your Amadeus office ID, then seamlessly import it into TYKTT by sharing the PNR with one of our office IDs. Once shared, you can retrieve, get payable, and issue the PNR instantly without delay.",
    listItems: [
      "Import PNRs generated in Amadeus GDS",
      "Retrieve PNRs easily via TYKTT platform",
      "Reprice PNRs with updated real-time fares",
      "Issue tickets instantly with no delays",
    ],
    images: [
      { src: eticketing, alt: "eticketing" },
      { src: eritrieve, alt: "eritrieve" },
      { src: eissue, alt: "eissue" },
    ],
  },
  {
    stepNumber: 5,
    heading: "Manage Bookings",
    description:
      "Stay in control of your reservations with our intuitive booking management system. Access booking details, monitor status, and streamline ticketing, changes, and cancellations effortlessly.",
    listItems: [
      "View booking date",
      "Check PNR details",
      "Identify airline information",
      "Track booking status",
      "See total bookings on the platform",
    ],
    images: [{ src: managebooking, alt: "managebooking" }],
  },
  {
    stepNumber: 6,
    heading: "Booking Information",
    description:
      "Access complete booking details and manage itineraries with ease. From updating status and viewing fare rules to instant ticketing and seat selection, everything you need to finalize and customize your client’s booking is right here. ",
    listItems: [
      "Update itinerary status",
      "View detailed fare rules",
      "Share itinerary (print, download, email)",
      "Cancel itinerary with ease",
      "Pay & issue with instant ticketing",
      "Access seat map",
      "Add and manage passport details",
      "View airline ticketing time limit before cancellation",
    ],
    images: [{ src: bookinginfo, alt: "bookinginfo" }],
  },
  {
    stepNumber: 7,
    heading: "Wallet",
    description:
      "Manage your funds seamlessly with the TYKTT Wallet. Each user gets a unique account number for instant funding, quick withdrawals, and complete transparency through detailed transaction history. Your wallet is designed for speed, security, and convenience.",
    listItems: [
      "Create your wallet with a unique account number",
      "Instant funding via bank transfer or bank deposite",
      "Withdraw funds directly to your bank account or momo wallet",
      "View complete transaction history",
      "Download history",
      "Instant crediting when funds are added",
    ],
    images: [
      { src: wallet, alt: "wallet" },
      { src: wallet2, alt: "wallet2" },
    ],
  },
  {
    stepNumber: 8,
    heading: "Flight Booking API",
    description:
      "Extend the power of TYKTT to your own website with our comprehensive API integration. Allowing your customers to search, book, and pay for flights directly from your platform, while you maintain full control and manage itineraries seamlessly from your backend.",
    listItems: [
      "Integrate our API directly into your website",
      "Enable customers to book and make payments online ",
      "Issue tickets directly from your backend ",
      "Send itineraries automatically to your customers ",
    ],
    images: [{ src: api, alt: "api" }],
  },
  {
    stepNumber: 9,
    heading: "Team Management",
    description:
      "Organize your staff efficiently by creating dedicated teams and assigning specific roles. With our role-based access control, you ensure that every action is performed by the right team member, improving productivity and maintaining security across your operations.",
    listItems: [
      "Create and manage multiple teams",
      "Assign roles and responsibilities to team members",
      "Teams include: Admin, Reservation, Ticketing, and Finance",
      "Control access levels for better security",
      "Monitor activities across all teams in real-time",
    ],
    images: [{ src: teams, alt: "teams" }],
  },
  {
    stepNumber: 10,
    heading: "Markup & Change Password",
    description:
      "The markup and change password section gives you full control over your account and business preferences. From managing financial markups to securing accounts with password updates, everything is designed to keep your operations smooth and flexible. ",
    listItems: [
      "Set and manage markup preferences",
      "Change password for enhanced security",
    ],
    images: [{ src: settings, alt: "settings" }],
  },
];
