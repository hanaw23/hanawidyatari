import { myStoreIconTech, todoIconTech, traditionalGame, bukulapakIconTech, vrGis, phoneBookContacts, personalWebsite, BroomIdTech } from "@hanawidyatari/utils/iconList";
import AndoridIcon from "@hanawidyatari/icons/projectIcons/AndroidIcon";
import IosIcon from "@hanawidyatari/icons/projectIcons/IosIcon";

export const personalProjects = [
  {
    id: "PersonalWeb",
    name: "Personal Website",
    link: "https://hana-widyatari.netlify.app/",
    pic: "assets/images/portfolio.png",
    desc: "Personal website",
    icons: personalWebsite,
  },
  {
    id: "PhoneBookContacts",
    name: "Phone Book Contacts",
    link: "https://phone-book-project-nine.vercel.app/contacts",
    pic: "assets/images/contactbook1.png",
    desc: "The Phone Book Contacts is mobile first web application that provides user to create, edit, and delete contact. Provides feature for saving user's favorite contacts and searching by contact name.",
    icons: phoneBookContacts,
    isPotrait: true,
  },
  {
    id: "AdminPanelMyStore",
    name: "Admin Panel (CMS) MyStore e-commerce",
    link: "https://mystore-adminpanel-nextjs.vercel.app/",
    pic: "assets/images/content-table.jpg",
    desc: "The Admin Panel web (CMS) provides admin to manage not only the contents but also products and users of MyStore e-commerce web landing.",
    icons: myStoreIconTech,
  },
  {
    id: "ToDoList",
    name: "To Do List Activity",
    link: "https://github.com/hanaw23/To-Do-List",
    pic: "assets/images/morning-home.jpg",
    desc: "Provide to manage user's to do list activity, user can add, delete, and mark freely. The background color of this website can change depends on the time whenever the user open it. Provides with 3 themes morning, afternoon, and night.",
    icons: todoIconTech,
  },
  {
    id: "TraditionalGame",
    name: "Traditional Game Suit Jawa",
    link: "https://github.com/hanaw23/Traditional-Game",
    pic: "assets/images/binar-game1.jpg",
    desc: "If the user wins then the score will add 10 points but when computer wins, user will lose 5 points from their current points and there's no addition or subtraction for a draw condition. When the heart bar turn into black three times so the game is over.",
    icons: traditionalGame,
  },
  {
    id: "Bukulapak",
    name: "Bukulapak E-commerce",
    pic: "assets/images/H8_P1.png",
    desc: "Present for users to buy books easily. The home page of the website shows every new books that recently added from admin and also users can see the review from stars rate. Our website provides many kind of book such as comics, novels, medical, etc. If users have decided to buy the books, the cart page appear to count your total amount of the books that user want to buy.",
    icons: bukulapakIconTech,
  },
  {
    id: "VR",
    name: "VR-GIS Sari Temple",
    link: "",
    pic: "assets/images/1.jpg",
    desc: "Created from a 3D model object using photogrammetry and terrestrial laser scanner raw data. The users can enjoy this virtual reality in their mobile phone supported with VR equipment such as VR box, google VR cardboard, etc.",
    icons: vrGis,
  },
];

export const professionalProjects = [
  {
    id: "broomid",
    name: "Broom.id App",
    links: [
      {
        iconHtml: <AndoridIcon height={25} width={25} className="cursor-pointer" />,
        link: "https://play.google.com/store/apps/details?id=com.broomdealerapp&hl=id&pli=1",
      },
      {
        iconHtml: <IosIcon height={25} width={25} className="cursor-pointer" />,
        link: "https://apps.apple.com/id/app/broom-id/id1642251400",
      },
    ],
    pic: "assets/images/broomid-apps.jpg",
    desc: "Broom.id is an app that helps used car dealerships manage inventory, access buyback options for extra capital, and sell to other showrooms—all in one platform. Built with React Native, it's available on iOS and Android.",
    icons: BroomIdTech,
    isPotrait: true,
  },
];
