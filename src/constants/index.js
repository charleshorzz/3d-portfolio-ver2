import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    proshop,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    kua,
    solsync,
    alex,
    chow
} from "../assets";

export const navLinks = [
    {
        id: "#about",
        title: "About",
    },
    {
        id: "#work",
        title: "Experience",
    },
    {
        id: "#contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Web Developer",
        icon: web,
    },
    {
        title: "Web3 Dev",
        icon: mobile,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "Figma Designer",
        icon: creator,
    },
];

const technologies = [
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
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
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
    {
        name: "figma",
        icon: figma,
    },
    {
        name: "docker",
        icon: docker,
    },
];

const experiences = [
    {
        title: "100 Days of Code: The Complete Python Pro Bootcamp",
        company_name: "Angela Yu",
        icon: starbucks,
        iconBg: "#383E56",
        date: "May 2022 - October 2022",
        points: [
            "Mastering Python Programming with various unique projects.",
            "Able to use Python for data science and machine learning.",
            "Learnt Selenium, Beautiful Soup, Pandas, Flask for Web Scraping.",
            "Can be fluently programming in Python.",
        ],
    },
    {
        title: "Diploma in IT (Software Engineering)",
        company_name: "Asia Pacific University",
        icon: tesla,
        iconBg: "#E6DEDD",
        date: "August 2022  - August 2024",
        points: [
            "Develop solutions requiring the application of technology in a business context.",
            "Prepare for careers in ICT environment on software development.",
            "Prepare to provide technical support within an organisation.",
            "Design and Implement algorithms using second programming language.",
        ],
    },
    {
        title: "NUS Fintech Month Hackathon 2023",
        company_name: "NUS Singapore",
        icon: shopify,
        iconBg: "#383E56",
        date: "December 2022 - Jan 2023",
        points: [
            "First time joining a hackathon with seniors in university",
            "Collaborating with teammates to brainstorm for the problem statement",
            "Propose a web3 protocol funding for early-stage tech startups built on Ethereum",
            "Built with react, node.js, aws, solidity, express.js, mongodb, next.js",
        ],
    },
    {
        title: "MERN E-Commerce Store Course",
        company_name: "Brad Traversy",
        icon: proshop,
        iconBg: "#E6DEDD",
        date: "September 2023 - October 2023",
        points: [
            "Mastering frontend development with React",
            "Master backend development with Node",
            "Integrating with MongoDB database",
            "Implementing Express.js as the framework in backend to ease the communication with backend",
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "I thought the website developed by a student will be terrible , but Charles proved me wrong.",
        name: "Jenny Kua",
        designation: "Student",
        company: "Sunway College",
        image: kua,
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' like Charles does.",
        name: "Pakho Chow",
        designation: "Student",
        company: "Asia Pacific University",
        image: chow,
    },
    {
        testimonial:
            "Charles could really explained how programming works for me, which helps in my assginment",
        name: "Alexandra Lim",
        designation: "Student",
        company: "Universiti Teknologi Malaysia",
        image: alex,
    },
];

const projects = [
    {
        name: "MERN E-Commerce Store",
        description:
            "E-Commerce Store built on MERN stack, where data is stored in MongoDB database and the actions take place on the website will make changes on server",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "node.js",
                color: "green-text-gradient",
            },
            {
                name: "express.js",
                color: "pink-text-gradient",
            },
        ],
        image: proshop,
        source_code_link: "https://github.com/charleshorzz/proshop-hor",
        website_link: "https://proshop-hor.onrender.com/"
    },
    {
        name: "Python Automation Bot",
        description:
            "A Python automation bot which will lodge a complaint to the network company in twitter when the network speed tested doesn't match with the network speed promised",
        tags: [
            {
                name: "Python",
                color: "blue-text-gradient",
            },
            {
                name: "Selenium",
                color: "green-text-gradient",
            },
            {
                name: "Beautiful Soup",
                color: "pink-text-gradient",
            },
        ],
        image: jobit,
        source_code_link: "https://github.com/charleshorzz/automation-bot.git",
        website_link: ""
    },
    {
        name: "Solana payment service",
        description:
            "Built Solsync with team Beningging during the APUBCC Sparkathon, which provides mapping service between wallet address and their name during transaction",
        tags: [
            {
                name: "solana-web3@js",
                color: "blue-text-gradient",
            },
            {
                name: "react",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: solsync,
        source_code_link: "https://github.com/charleshorzz/solsync",
        website_link: "https://solsync.vercel.app/"
    },
];

export { services, technologies, experiences, testimonials, projects };