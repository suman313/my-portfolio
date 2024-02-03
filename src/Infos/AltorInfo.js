import AddRiderImg from "../assets/altor/addArider.svg";
import EventsImg from "../assets/altor/events.svg";
import AltorHomeImg from "../assets/altor/home.svg";
import RiderProfImg from "../assets/altor/riderProfile.svg";
import StartEntImg from "../assets/altor/rideStartEnd.svg";

export const altorInfo = [
  {
    img: AltorHomeImg,
    heading: "Home",
    link: "https://youtu.be/ly0QqF4qs_4",
    description:
      "Altor, a trailblazing smart mobility company, pioneers safety on Indian roads. Unveiling the nation's inaugural line of intelligent headgears, Altor seamlessly integrates behavior modification, accident detection, and hands-free convenience. Recently showcased on the renowned Shark Tank India, broadcasted on the Sony Entertainment Television Network, Altor is transforming road safety with innovation and style.",
  },
  {
    img: AddRiderImg,
    heading: "Add Rider",
    link: "https://youtu.be/ly0QqF4qs_4",
    description:
      "After login the admin is able to onboard new riders from his data collection. After the addition riders will be listed in a table format with their specific properties. Clicking on a specific rider will redirect to the profile page of that specific rider.",
  },
  {
    img: RiderProfImg,
    heading: "Rider Profile",
    link: "https://youtu.be/ly0QqF4qs_4",
    description:
      "This section reflects the all the details of a particular rider added by the admin. This section shows a graph which reflects intensity of different events of all the events that the rider went through.",
  },
  {
    img: EventsImg,
    heading: "Events",
    link: "https://youtu.be/ly0QqF4qs_4",
    description:
      "Riders are instructed to perform specific events at a time. There are several evets listed on the profile of a rider. Events are initialized before the rider starts his ride on specific instructions.",
  },
  {
    img: StartEntImg,
    heading: "Time tracker",
    link: "https://youtu.be/ly0QqF4qs_4",
    description:
      "Every event is performed for a certain period. When the rider starts a particular event the timer starts counting the duration. This counter is implemented using the powerful features of react js library: useRef and useState hooks of functional components.",
  },
];

export const videoLinks = [
  {
    overview: "https://youtu.be/ly0QqF4qs_4",
  },
];
