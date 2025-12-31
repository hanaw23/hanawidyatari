import { myStoreIconTech, todoIconTech, traditionalGame, bukulapakIconTech, vrGis, phoneBookContacts, personalWebsite, BroomIdTech, RecipeApp } from "@hanawidyatari/utils/iconList";
import AndoridIcon from "@hanawidyatari/icons/projectIcons/AndroidIcon";
import IosIcon from "@hanawidyatari/icons/projectIcons/IosIcon";

export const projects = [
  {
    id: "broomid",
    name: "Broom.id Mobile App",
    links: [
      {
        iconHtml: <AndoridIcon height={55} width={55} className="cursor-pointer" />,
        link: "https://play.google.com/store/apps/details?id=com.broomdealerapp&hl=id&pli=1",
      },
      {
        iconHtml: <IosIcon height={55} width={55} className="cursor-pointer" />,
        link: "https://apps.apple.com/id/app/broom-id/id1642251400",
      },
    ],
    pic: "/assets/images/broomid-apps.png",
    intro: "Cross-platform fintech engine for automotive retail. Built with React Native to automate inventory management and liquidity workflows.",
    desc: "Broom.id is more than just an inventory manager, it’s a financial engine for car showrooms. I worked on building a seamless ecosystem where dealers can transform their physical cars into liquid capital and access a nationwide B2B marketplace. By leveraging a single codebase in React Native, we delivered a high-performance experience to both iOS and Android users, ensuring that trusted business growth is always just a tap away.",
    icons: BroomIdTech,
    heroPics: [
      {
        isPotrait: false,
        url: "/assets/images/broomid-apps.png",
      },
      {
        isPotrait: true,
        url: "/assets/images/broom1.webp",
      },
      {
        isPotrait: true,
        url: "/assets/images/broom2.webp",
      },
      {
        isPotrait: true,
        url: "/assets/images/broom3.webp",
      },

      {
        isPotrait: true,
        url: "/assets/images/broom4.webp",
      },
      {
        isPotrait: true,
        url: "/assets/images/broom5.jpg",
      },
    ],
  },
  {
    id: "RecipeApp",
    name: "Recipe App",
    link: {
      url: "https://recipe-app-kappa-seven.vercel.app/",
    },
    pic: "/assets/images/Recipe-app.png",
    intro: "A fast, mobile-first recipe platform built with Next.js and Redux using PWA technology for instant installation without an app store.",
    desc: "Developed as a modern solution for culinary enthusiasts, this application bridges the gap between traditional web browsing and native mobile experiences. By utilizing Progressive Web App (PWA) capabilities, the platform provides a store-less installation process, allowing users to add the app to their home screens on iOS, Android, or Desktop with a single tap. This approach ensures maximum accessibility while eliminating the overhead of app store updates and distribution hurdles.",
    icons: RecipeApp,
    heroPics: [
      {
        isPotrait: false,
        url: "/assets/images/Recipe-app.png",
      },
      {
        isPotrait: true,
        url: "/assets/images/recipe-app-android.jpg",
      },
      {
        isPotrait: true,
        url: "/assets/images/recipe5.jpeg",
      },
      {
        isPotrait: true,
        url: "/assets/images/recipe1.jpeg",
      },

      {
        isPotrait: true,
        url: "/assets/images/recipe2.jpeg",
      },
      {
        isPotrait: true,
        url: "/assets/images/recipe3.jpeg",
      },
      {
        isPotrait: true,
        url: "/assets/images/recipe4.jpeg",
      },
    ],
  },
  {
    id: "PersonalWeb",
    name: "Personal Website",
    link: {
      url: "https://hana-widyatari.netlify.app/",
    },
    pic: "/assets/images/portfolio.png",
    intro: "My professional journey in one place: A high-performance Next.js portfolio bridging bootcamp milestones with real-world project expertise.",
    desc: "The site is structured to guide visitors through the different chapters of my career. It begins with my roots in a high-intensity bootcamp, where I first mastered the core principles of modern web development. It then transitions into my internships, highlighting the period where I began translating classroom theory into functional code, and finally transitions to my professional work experience, showcasing the impact I’ve made in production environments.",
    icons: personalWebsite,
    heroPics: [
      {
        isPotrait: false,
        url: "/assets/images/portfolio.png",
      },
      {
        isPotrait: false,
        url: "/assets/images/portfolio1.png",
      },
      {
        isPotrait: false,
        url: "/assets/images/portfolio2.png",
      },
    ],
  },
  {
    id: "AdminPanelMyStore",
    name: "CMS MyStore e-commerce",
    link: {
      url: "https://mystore-adminpanel-nextjs.vercel.app/",
    },
    pic: "/assets/images/content-table.jpg",
    intro: "An all-in-one Admin Panel for MyStore, streamlining e-commerce operations through integrated product, user, and content management.",
    desc: "As the culminating project for our bootcamp academy, my team and I engineered a sophisticated Content Management System (CMS) for the MyStore clothing platform using Next.js and TypeScript, leveraging Redux for state management, Axios for REST API integration, and Tailwind CSS to provide administrators with a seamless, type-safe interface for managing products, users, and dynamic web content.",
    icons: myStoreIconTech,
    heroPics: [
      {
        isPotrait: false,
        url: "/assets/images/content-table.jpg",
      },
      {
        isPotrait: false,
        url: "/assets/images/admin-login.jpg",
      },
      {
        isPotrait: false,
        url: "/assets/images/product-editForm.jpg",
      },
      {
        isPotrait: false,
        url: "/assets/images/user-table.jpg",
      },
    ],
  },
  {
    id: "ToDoList",
    name: "To Do List Activity",
    link: {
      url: "https://github.com/hanaw23/To-Do-List",
    },
    pic: "/assets/images/morning-home.jpg",
    intro: "A dynamic Task Manager featuring a time-aware UI that automatically transitions between Morning, Afternoon, and Night themes based on the user's local time.",
    desc: "Developed as a personal project using vanilla HTML and CSS, this dynamic task management application allows users to organize their daily activities by adding, deleting, and marking tasks while featuring a custom-coded background that automatically transitions between morning, afternoon, and night themes based on the time of day the site is accessed.",
    icons: todoIconTech,
    heroPics: ["/assets/images/morning-home.jpg", "/assets/images/noon-home.jpg", "/assets/images/night-home.jpg"],
    heroPics: [
      {
        isPotrait: false,
        url: "/assets/images/morning-home.jpg",
      },
      {
        isPotrait: false,
        url: "/assets/images/noon-home.jpg",
      },
      {
        isPotrait: false,
        url: "/assets/images/night-home.jpg",
      },
    ],
  },
  {
    id: "TraditionalGame",
    name: "Traditional Game Suit Jawa",
    link: {
      url: "https://github.com/hanaw23/Traditional-Game",
    },
    pic: "/assets/images/binar-game1.jpg",
    intro: "A full-stack arcade experience built with Vanilla JS and Express.js, featuring real-time health mechanics and a persistent global leaderboard.",
    desc: "Developed as a comprehensive full-stack project for my bootcamp academy, this interactive game utilizes a vanilla HTML and CSS frontend to deliver a responsive user experience, while leveraging an Express.js backend to persist player data in a database and manage a logic-driven scoring system where users gain 10 points for wins and lose 5 for defeats, all while tracking a heart bar health mechanic that triggers a game-over state after three losses.",
    icons: traditionalGame,
    heroPics: [
      {
        isPotrait: false,
        url: "/assets/images/binar-game1.jpg",
      },
      {
        isPotrait: false,
        url: "/assets/images/binar-game6.jpg",
      },
      {
        isPotrait: false,
        url: "/assets/images/binar-game7.jpg",
      },
    ],
  },
  {
    id: "VR",
    name: "VR-GIS Sari Temple",
    pic: "/assets/images/1.jpg",
    intro: "Photogrammetry-based VR: High-fidelity 3D environments built from raw laser scans, accessible on any mobile VR-enabled device.",
    desc: "For my undergraduate thesis project, I engineered an immersive virtual reality experience by performing high-precision 3D reconstruction from raw photogrammetry and terrestrial laser scanner point cloud data, ultimately deploying the processed models into a VR environment compatible with mobile-based equipment like VR Box and Google Cardboard to allow users to interact with digitally preserved spaces in a highly accessible format.",
    icons: vrGis,
    heroPics: [
      {
        isPotrait: false,
        url: "/assets/images/1.jpg",
      },
      {
        isPotrait: false,
        url: "/assets/images/2.jpg",
      },
      {
        isPotrait: false,
        url: "/assets/images/3.jpg",
      },
    ],
  },
];
