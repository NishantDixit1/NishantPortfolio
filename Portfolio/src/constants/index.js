import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  python,
  html,
  css,
  reactjs,
  c,
  machinelearning,
  nodejs,
  mongodb,
  git,
  java,
  mysql,
  internshala,
  prodigy,
  octanet,
  webchat,
  brain,
  amazon,
  screenings,
  threejs,
  akshit,
  gaurav,
  bhaiya,
  kanha,
  hin,
} from "../assets";

export const navLinks = [
  {
    id : "education",
    title : "Education",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
  
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Software Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Data Analyst",
    icon: creator,
  },
];

const technologies = [
  {
    name: "java",
    icon: java,
  },
  {
    name: "C",
    icon: c,
  },
  {
    name: "python",
    icon: python,
  },
  {
    name: "Machine Learning",
    icon: machinelearning,
  },
  {
    name: "My sql",
    icon: mysql,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  
  {
    name: "React JS",
    icon: reactjs,
  },
  
  
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  
  
];
const educations = [
  {
    title: "Final Year Student",
    company_name: "Hindustan College of Science And Technology",
    icon: hin,
    iconBg: "#383E56",
    date: "Sep 2021 - Expected 2025",
    points: [
      "Designed and developed 5+ responsive web applications, enhancing user experience for over 1,000 users Contributed to the design and development of 5+ responsive web applications using HTML, CSS, and JavaScript, enhancing user experience for over 1,000 users.",
      "Collaborated with a team of 5 developers, conducting 3 code reviews weekly to ensure high code quality.",
      "Enhanced technical expertise through 10+ coding challenges with modern web technologies.",
      "Participating in code reviews and providing constructive feedback to other developers.",

    ],
  },
  {
    title: "Student",
    company_name: "Kanha Makhan Public School",
    icon: kanha,
    iconBg: "#383E56",
    date: "March 2019 - April 2021",
    points: [
      "Completed an intensive Java training program through Internshala, focusing on core Java concepts, object-oriented programming (OOP), and key libraries, which helped solidify my understanding of Java fundamentals.",
      "Gained practical experience by working on multiple Java-based projects, applying concepts like data structures, algorithms, and exception handling to solve real-world problems and improve coding efficiency.",
      "Developed a strong problem-solving mindset by tackling coding challenges, enhancing my ability to write optimized, scalable code, and preparing for technical interviews and real-world development tasks.",
     
    ],
  },
];
const experiences = [
  {
    title: "Web Developer",
    company_name: "Octanet",
    icon: octanet,
    iconBg: "#383E56",
    date: "Aug 2024 - Sep 2024",
    points: [
      "Designed and developed 5+ responsive web applications, enhancing user experience for over 1,000 users Contributed to the design and development of 5+ responsive web applications using HTML, CSS, and JavaScript, enhancing user experience for over 1,000 users.",
      "Collaborated with a team of 5 developers, conducting 3 code reviews weekly to ensure high code quality.",
      "Enhanced technical expertise through 10+ coding challenges with modern web technologies.",
      "Participating in code reviews and providing constructive feedback to other developers.",

    ],
  },
  {
    title: "Java Training",
    company_name: "Internshala",
    icon: internshala,
    iconBg: "#383E56",
    date: "March 2021 - April 2021",
    points: [
      "Completed an intensive Java training program through Internshala, focusing on core Java concepts, object-oriented programming (OOP), and key libraries, which helped solidify my understanding of Java fundamentals.",
      "Gained practical experience by working on multiple Java-based projects, applying concepts like data structures, algorithms, and exception handling to solve real-world problems and improve coding efficiency.",
      "Developed a strong problem-solving mindset by tackling coding challenges, enhancing my ability to write optimized, scalable code, and preparing for technical interviews and real-world development tasks.",
     
    ],
  },
  {
    title: "Machine Learning Intern",
    company_name: "Prodigy Infotech",
    icon: prodigy,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Feb 2023",
    points: [
      "Contributed to the development and optimization of machine learning models, focusing on data preprocessing,feature engineering, and model training.",
      "Improved model accuracy and performance by applying advanced algorithms and fine-tuning techniques.",
      "Utilized tools and libraries such as Python, TensorFlow, and scikit-learn to build and deploy machine learning solutions.",
    ],
  },
  
  
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Nishant proved me wrong.",
    name: "Gaurav Raj",
    designation: "Student",
    company: "HCST Mathura",
    image: gaurav,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Nishant does.",
    name: "Divyansh Dixit",
    designation: "SDE 2",
    company: "SuperCoder",
    image: bhaiya,
  },
  {
    testimonial:
      "After Nishant optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Akshit Singh",
    designation: "SDE 1",
    company: "Microsoft",
    image: akshit,
  },
];

const projects = [
  {
    name: "NeuroRiskX",
    description:
      "NeuroRiskX is a machine learning-powered application designed to predict the risk of stroke early and accurately. It focuses on both precision and transparency, making it practical for real-world healthcare use.",
    tags: [
      {
        name: "Explainable AI",
        color: "blue-text-gradient",
      },
      {
        name: "Machine learning",
        color: "green-text-gradient",
      },
      {
        name: "Genetic Algorithm",
        color: "pink-text-gradient",
      },
    ],
    image: brain,
    source_code_link: "https://github.com/NishantDixit1/Brain-Stroke-Prediction-System",
  },
  {
    name: "Web Chat Messenger",
    description:
      "Explore a user-friendly Web Chat App on GitHub! Built with HTML, CSS, JavaScript, and Bootstrap, this project offers real-time messaging, an intuitive UI, and seamless integration, ideal for learning chat functionalities in web development.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: webchat,
    source_code_link: "https://github.com/NishantDixit1/Web-Chat-Messenger-",
  },
  {
    name: "AI-Powered Resume Screening Tool",
    description:
      "The Resume Parsing and Shortlisting Web Application automates resume screening using Python, Flask, and NLP (spaCy, NLTK). It extracts key details from resumes (PDF/DOCX) and ranks candidates based on job description relevance with 95% accuracy, reducing manual screening time by 60%.",
    tags: [
      {
        name: "NLP",
        color: "blue-text-gradient",
      },
      {
        name: "Machine Learning",
        color: "green-text-gradient",
      },
      {
        name: "Flask",
        color: "pink-text-gradient",
      },
    ],
    image: screenings,
    source_code_link: "https://github.com/NishantDixit1/Resume-Parser",
  },
  {
    name: "Amazon Clone - Full-Stack E-Commerce App",
    description:
      "An Amazon clone is a full-stack e-commerce app built with React.js for the frontend, Node.js and Express.js for the backend, and MongoDB for the database, offering features like product listing, cart management, user authentication, order processing, and secure payment integration.",
    tags: [
      {

        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
      {
        name: "Express.js",
        color: "pink-text-gradient",
      },
      {
        name: "MongoDB",
        color: "orange-text-gradient",
      },
    ],
    image: amazon,
    source_code_link: "https://github.com/NishantDixit1/Amazon-Clone",
  },
];

export { services, technologies, educations, experiences,  testimonials, projects };
