import { myStoreIconTech, todoIconTech, traditionalGame, bukulapakIconTech, vrGis, phoneBookContacts, personalWebsite, BroomIdTech, RecipeApp } from "@hanawidyatari/utils/iconList";
import AndoridIcon from "@hanawidyatari/icons/projectIcons/AndroidIcon";
import IosIcon from "@hanawidyatari/icons/projectIcons/IosIcon";

export const projects = [
  {
    id: "broomid",
    name: "Broom.id App",
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
    pic: "/assets/images/broomid-apps.jpg",
    desc: "Broom.id is a trusted business partner for car showrooms, helping used car dealers grow their business with confidence. Through Broom’s integrated ecosystem, dealers can manage vehicle inventory, access buy back options for additional capital, and sell cars to other showrooms, all in one easy to use application. Built with React Native, it's available on iOS and Android.",
    icons: BroomIdTech,
    isPotrait: true,
  },
  {
    id: "RecipeApp",
    name: "Recipe App",
    link: {
      url: "https://recipe-app-kappa-seven.vercel.app/",
    },
    pic: "/assets/images/Recipe-app.png",
    desc: "Recipe App is a web-based cooking recipe application that supports Progressive Web App (PWA) technology. This allows users to install the app directly on their computers or mobile devices without needing to go through the Play Store or App Store, making it easier and more convenient to access. The app is developed using React with Next.js for the frontend, and Redux is used for managing API state and data flow.",
    icons: RecipeApp,
  },
  {
    id: "PersonalWeb",
    name: "Personal Website",
    link: {
      url: "https://hana-widyatari.netlify.app/",
    },
    pic: "/assets/images/portfolio.png",
    desc: "A personal website that contains personal information, work experience both in professional settings and during internships, as well as academic experience from a bootcamp. This personal website also includes portfolio links to personal and professional projects. It was developed using React with the Next.js framework.",
    icons: personalWebsite,
  },
  {
    id: "AdminPanelMyStore",
    name: "CMS MyStore e-commerce",
    link: {
      url: "https://mystore-adminpanel-nextjs.vercel.app/",
    },
    pic: "/assets/images/content-table.jpg",
    desc: "The Admin Panel web (CMS) provides admin to manage not only the contents but also products and users of MyStore e-commerce web landing.",
    icons: myStoreIconTech,
  },
  {
    id: "ToDoList",
    name: "To Do List Activity",
    link: {
      url: "https://github.com/hanaw23/To-Do-List",
    },
    pic: "/assets/images/morning-home.jpg",
    desc: "Provide to manage user's to do list activity, user can add, delete, and mark freely. The background color of this website can change depends on the time whenever the user open it. Provides with 3 themes morning, afternoon, and night.",
    icons: todoIconTech,
  },
  {
    id: "TraditionalGame",
    name: "Traditional Game Suit Jawa",
    link: {
      url: "https://github.com/hanaw23/Traditional-Game",
    },
    pic: "/assets/images/binar-game1.jpg",
    desc: "If the user wins then the score will add 10 points but when computer wins, user will lose 5 points from their current points and there's no addition or subtraction for a draw condition. When the heart bar turn into black three times so the game is over.",
    icons: traditionalGame,
  },
  {
    id: "VR",
    name: "VR-GIS Sari Temple",
    pic: "/assets/images/1.jpg",
    desc: "Created from a 3D model object using photogrammetry and terrestrial laser scanner raw data. The users can enjoy this virtual reality in their mobile phone supported with VR equipment such as VR box, google VR cardboard, etc.",
    icons: vrGis,
  },
];
