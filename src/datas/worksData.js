import creativeAgency from "../images/creativeAgency.png";
import travelGuru from "../images/travelGuru.png";
import volunteerNetwork from "../images/volunteerNetwork.png";
import apartmentHunt from "../images/apartmentHunt.PNG";

const worksData = [
  {
    title: "Creative Agency",
    shortDetail:
      "A MERN stack web application built with ReactJS, MongoDB, NodeJS.",
    longDetail:
      "A MERN stack web application built with ReactJS, MongoDB, NodeJS. Users can login via google account. Users can order services and also see service status. Users can review and give feedbacks about their experience on our services. There's also a admin panel where the admins can add new services and change service status. Admins can add another admin.",
    img: creativeAgency,
    live: "https://creative-agency-basic.web.app/",
    github_client: "https://github.com/nihaltowfiq/Creative-Agency",
    github_server: "https://github.com/nihaltowfiq/Creative-Agency-Server",
    technology: ["React", "ExpressJS", "MongoDB", "Firebase", "Bootstrap"],
  },
  {
    title: "Apartment Hunt",
    team: true,
    shortDetail:
      "A MERN stack web application built with ReactJS, MongoDB, NodeJS.",
    longDetail:
      "A MERN stack web application, team project - built with ReactJS, MongoDB, NodeJS. Users can login via google Account. Users can choose a apartment and check-in. User can also cancel a the booking. There's also a admin panel where the admin can manage the bookings and add new apartment services.",
    img: apartmentHunt,
    live: "https://apartment-hunt-basic.web.app/",
    github_client: "https://github.com/nihaltowfiq/Apartment-Hunt-Client",
    github_server: "https://github.com/nihaltowfiq/Apartment-Hunt-Server",
    technology: ["React", "ExpressJS", "MongoDB", "Firebase", "Bootstrap"],
  },
  {
    title: "Volunteer Network",
    shortDetail:
      "A MERN stack web application built with ReactJS, MongoDB, NodeJS.",
    longDetail:
      "A MERN stack web application built with ReactJS, MongoDB, NodeJS. Users can login via google Account. Users can select a event and join the event as a volunteer. User can also cancel a event. There's also a admin panel where the admin can manage and add new events.",
    img: volunteerNetwork,
    live: "https://volunteer-network-basic.web.app/",
    github_client: "https://github.com/nihaltowfiq/Volunteer-Network",
    github_server: "https://github.com/nihaltowfiq/Volunteer-Network-Server",
    technology: ["React", "ExpressJS", "MongoDB", "Firebase", "Bootstrap"],
  },
  {
    title: "Travel Guru",
    shortDetail: "A front-end website built with ReactJS and React-Bootstrap.",
    longDetail:
      "A front-end website built with ReactJS and React-Bootstrap. A simple front-end based website where travelers can select place and date then they can book the hotel. Users can login via google, facebook or can create a native account.",
    img: travelGuru,
    live: "https://travel-guru-practice.web.app/",
    github_client: "https://github.com/nihaltowfiq/Travel-Guru",
    technology: ["React", "Firebase", "Bootstrap"],
  },
];

export default worksData;
