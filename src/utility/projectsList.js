import { myStoreIconTech, todoIconTech, traditionalGame, bukulapakIconTech, vrGis, phoneBookContacts, personalWebsite, BroomIdTech, RecipeApp } from "@hanawidyatari/utils/iconList";
import AndoridIcon from "@hanawidyatari/icons/projectIcons/AndroidIcon";
import IosIcon from "@hanawidyatari/icons/projectIcons/IosIcon";

export const projects = [
  {
    id: "broomid",
    name: "Broom.id Mobile App",
    links: [
      {
        iconHtml: <AndoridIcon height={20} width={20} className="cursor-pointer" />,
        link: "https://play.google.com/store/apps/details?id=com.broomdealerapp&hl=id&pli=1",
      },
      {
        iconHtml: <IosIcon height={20} width={20} className="cursor-pointer" />,
        link: "https://apps.apple.com/id/app/broom-id/id1642251400",
      },
    ],
    pic: "/assets/images/broomid-apps.png",
    intro:
      "Broom.id mobile app is a cross-platform React Native application that bridges the gap between automotive retail and fintech, delivering a unified engine for inventory management and automated liquidity workflows on iOS and Android.",
    desc: "Broom.id is more than just an inventory manager, it’s a financial engine for car showrooms. I worked on building a seamless ecosystem where dealers can transform their physical cars into liquid capital and access a nationwide B2B marketplace. By leveraging a single codebase in React Native, we delivered a high-performance experience to both iOS and Android users, ensuring that trusted business growth is always just a tap away.",
    icons: BroomIdTech,
  },
  {
    id: "RecipeApp",
    name: "Recipe App",
    link: {
      url: "https://recipe-app-kappa-seven.vercel.app/",
    },
    pic: "/assets/images/Recipe-app.png",
    intro:
      "The Recipe App is a modern web platform built with Next.js and Redux that works like a native mobile app without needing an app store. By using PWA technology, it allows for instant installation on any device and ensures a smooth, fast experience for browsing and managing recipes.",
    desc: "Developed as a modern solution for culinary enthusiasts, this application bridges the gap between traditional web browsing and native mobile experiences. By utilizing Progressive Web App (PWA) capabilities, the platform provides a store-less installation process, allowing users to add the app to their home screens on iOS, Android, or Desktop with a single tap. This approach ensures maximum accessibility while eliminating the overhead of app store updates and distribution hurdles.",
    icons: RecipeApp,
  },
  {
    id: "PersonalWeb",
    name: "Personal Website",
    link: {
      url: "https://hana-widyatari.netlify.app/",
    },
    pic: "/assets/images/portfolio.png",
    intro: "Built with Next.js, this personal portfolio serves as a digital home for my professional journey, bringing together my bootcamp roots, internship milestones, and full-scale projects in one seamless experience.",
    desc: "The site is structured to guide visitors through the different chapters of my career. It begins with my roots in a high-intensity bootcamp, where I first mastered the core principles of modern web development. It then transitions into my internships, highlighting the period where I began translating classroom theory into functional code, and finally transitions to my professional work experience, showcasing the impact I’ve made in production environments.",
    icons: personalWebsite,
  },
  {
    id: "AdminPanelMyStore",
    name: "CMS MyStore e-commerce",
    link: {
      url: "https://mystore-adminpanel-nextjs.vercel.app/",
    },
    pic: "/assets/images/content-table.jpg",
    intro: "The Admin Panel web (CMS) provides admin to manage not only the contents but also products and users of MyStore e-commerce web landing.",
    desc: "As the culminating project for our bootcamp academy, my team and I engineered a sophisticated Content Management System (CMS) for the MyStore clothing platform using Next.js and TypeScript, leveraging Redux for state management, Axios for REST API integration, and Tailwind CSS to provide administrators with a seamless, type-safe interface for managing products, users, and dynamic web content.",
    icons: myStoreIconTech,
  },
  {
    id: "ToDoList",
    name: "To Do List Activity",
    link: {
      url: "https://github.com/hanaw23/To-Do-List",
    },
    pic: "/assets/images/morning-home.jpg",
    intro:
      "Provide to manage user's to do list activity, user can add, delete, and mark freely. The background color of this website can change depends on the time whenever the user open it. Provides with 3 themes morning, afternoon, and night.",
    desc: "Developed as a personal project using vanilla HTML and CSS, this dynamic task management application allows users to organize their daily activities by adding, deleting, and marking tasks while featuring a custom-coded background that automatically transitions between morning, afternoon, and night themes based on the time of day the site is accessed.",
    icons: todoIconTech,
  },
  {
    id: "TraditionalGame",
    name: "Traditional Game Suit Jawa",
    link: {
      url: "https://github.com/hanaw23/Traditional-Game",
    },
    pic: "/assets/images/binar-game1.jpg",
    intro: "A full-stack game for my bootcamp academy using vanilla HTML/CSS and Express.js, featuring a database-linked scoring system and a heart bar health mechanic that triggers a game-over after three losses.",
    desc: "Developed as a comprehensive full-stack project for my bootcamp academy, this interactive game utilizes a vanilla HTML and CSS frontend to deliver a responsive user experience, while leveraging an Express.js backend to persist player data in a database and manage a logic-driven scoring system where users gain 10 points for wins and lose 5 for defeats, all while tracking a heart bar health mechanic that triggers a game-over state after three losses.",
    icons: traditionalGame,
  },
  {
    id: "VR",
    name: "VR-GIS Sari Temple",
    pic: "/assets/images/1.jpg",
    intro: "Created from a 3D model object using photogrammetry and terrestrial laser scanner raw data. The users can enjoy this virtual reality in their mobile phone supported with VR equipment such as VR box, and google VR cardboard ",
    desc: "For my undergraduate thesis project, I engineered an immersive virtual reality experience by performing high-precision 3D reconstruction from raw photogrammetry and terrestrial laser scanner point cloud data, ultimately deploying the processed models into a VR environment compatible with mobile-based equipment like VR Box and Google Cardboard to allow users to interact with digitally preserved spaces in a highly accessible format.",
    icons: vrGis,
  },
];
