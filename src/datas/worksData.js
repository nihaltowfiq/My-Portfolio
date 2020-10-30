import creativeAgency from '../images/creativeAgency.png';
import travelGuru from '../images/travelGuru.png';
import volunteerNetwork from '../images/volunteerNetwork.png';

const worksData = [
    {
        title: "Creative Agency",
        shortDetail: "A MERN stack web application bulit with ReactJS, MongoDB, NodeJS.",
        longDetail: "A MERN stack web application bulit with ReactJS, MongoDB, NodeJS. Users can login via google account. Users can order services and also see service status. Users can review and give feedbacks about their experience on our services. There's also a admin panel where the admins can add new services and change service status. Admins can add another admin.",
        img: creativeAgency,
        live: "https://creative-agency-basic.web.app/",
        github: "https://github.com/nihaltowfiq/Creative-Agency",
        technology: ['React', 'ExpressJS', 'MongoDB', 'Firebase', 'Bootstrap']
    },
    {
        title: "Volunteer Network",
        shortDetail: "A MERN stack web application bulit with ReactJS, MongoDB, NodeJS.",
        longDetail: "A MERN stack web application bulit with ReactJS, MongoDB, NodeJS. Users can login via google Account. Users can select a event and join the event as a volunteer. User can also cancel a event. There's also a admin panel where the admin can manage and add new events.",
        img: volunteerNetwork,
        live: "https://volunteer-network-basic.web.app/",
        github: "https://github.com/nihaltowfiq/Volunteer-Network",
        technology: ['React', 'ExpressJS', 'MongoDB', 'Firebase', 'Bootstrap']
    },
    {
        title: "Travel Guru",
        shortDetail: "A front-end web page built with ReactJS and React-Bootstrap.",
        longDetail: "A front-end web page built with ReactJS and React-Bootstrap. A simple front-end based website where travelers can select place and date then they can book the hotel. Users can login via google, facebook or can create a native account.",
        img: travelGuru,
        live: "https://travel-guru-practice.web.app/",
        github: "https://github.com/nihaltowfiq/Travel-Guru",
        technology: ['React', 'Firebase', 'Bootstrap']
    }
]

export default worksData;