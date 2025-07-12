import logo from '../images/logo1.jpg';
import logo2 from '../images/edishlogo.png';

const content = {
  title: "Full Stack Developer",
  subtitle: "About Me",
  description:
    "I am a Management Information Systems student. I have experience developing various projects using ASP.NET Core and I am at an intermediate level in web programming. On the frontend, I use .NET MVC Razor Pages and am currently working with React. I also have basic knowledge of Android development and am working to further improve myself in this area. I aim to transform my skills in technology and software into innovative projects that optimize business processes.",
  myskill: "My Skills",
  skills: [
    "React", ".Net Core", "Ef Core", "Android Development", "C#", "Kotlin", "Sql", "NoSql", "Restful Api",
    "MVC", "N Tier Architecture", "Dapper", "JavaScript", "AutoMapper", "Entity Framework", "Bootstrap",
    "Html", "Css", "Github", "Visual Studio", "Visual Studio Code", "Android Studio", "Swagger",
    "Firebase", "MsSql", "SQLite", "MongoDB"
  ]
};

const contact = {
  title: "Contacts",
  phone: {
    label: "+90 542 668 41 81",
    icon: "Phone"
  },
  email: {
    address: "halit_iri_@hotmail.com",
    icon: "Email"
  },
  github: {
    username: "HKeremiri",
    url: "https://github.com/HKeremiri",
    icon: "GitHub"
  },
  linkedin: {
    label: "linkedin.com/halit-kerem-iri",
    url: "https://www.linkedin.com/in/halit-kerem-iri-0a6a25252/",
    icon: "LinkedIn"
  }
};

const jobs = [
  {
    id: 1,
    jobTitle: "Software Developer (Intern)",
    companyName: "Galaksity Smart City Technologies Inc.",
    startDate: "July 2024",
    endDate: "September 2024",
    description:
      "During this internship, I actively participated in backend development processes using .NET Core technologies at Galaksity Smart City Technologies. I gained experience in database operations and producing flexible solutions based on user requirements."
  },
  {
    id: 2,
    jobTitle: "Technical Service Staff",
    companyName: "Can Computers",
    startDate: "June 2019",
    endDate: "August 2019",
    description:
      "I gained experience in identifying and resolving computer and software errors, and ensuring the proper functioning of systems. I provided quick solutions to users' hardware and software issues. Additionally, I performed maintenance on devices to improve their performance and ensured customer satisfaction through effective communication."
  }
];

const projects = [
  {
    id: 1,
    title: "Pollster (Survey Website)",
    description:
      "This web application, which I developed using .NET Core MVC, allows registered users to create and manage surveys, and enables other users to respond to these surveys. The application simplifies the survey creation process with a user-friendly interface and allows surveys to be tracked in real-time.",
    image: logo,
    link: "https://github.com/HKeremiri/AnketSitesi"
  },
  {
    id: 2,
    title: "Edish (Edirne Complaint Line)",
    description:
      "In this project, I developed a platform where citizens in Edirne can share their complaints and suggestions. Users can categorize their complaints and comment on others' posts. Additionally, officials from the Edirne Municipality can monitor the complaints through this platform and speed up the resolution process.",
    image: logo2,
    link: "https://github.com/HKeremiri/Edish-Edirne-Sikayet-Hatti-"
  }
];

const school = [
  {
    id: 1,
    title: "Trakya University",
    subtitle: "Management Information Systems",
    startDate: "October 2022",
    endDate: "June 2025 ",
    description:
      "I transferred from an associate degree in Computer Programming via vertical transfer (DGS) to complete my undergraduate education. In this department, I received education in managing IT projects, analyzing business processes, and developing information systems. I also gained knowledge in areas such as database management, software development, data analysis, and accounting."
  },
  {
    id: 2,
    title: "Beykent University",
    subtitle: "Computer Programming",
    startDate: "September 2016",
    endDate: "July 2019",
    description:
      "I studied in the Computer Programming department. I received education in basic programming languages, algorithms and data structures, web programming, and mobile app development. I also gained knowledge in software testing and database management."
  },
  {
    id: 3,
    title: "Çatalca Arif Nihat Asya Vocational and Technical Anatolian High School",
    subtitle: "Information Technologies",
    startDate: "September 2012",
    endDate: "June 2016",
    description:
      "During my education in Information Technologies, I studied topics such as basic computer knowledge, web design, and programming languages. I also gained practical skills in computer hardware and software."
  }
];

const pages = [
  { name: 'Education', id: 'schoollife' },
  { name: 'Work Experience', id: 'joblife' },
  { name: 'My Projects', id: 'myprojects' },
  { name: 'Contact', id: 'contact' }
];

export { content, jobs, projects, school, pages, contact };
