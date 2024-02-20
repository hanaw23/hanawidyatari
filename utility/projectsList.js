import { myStoreIconTech, todoIconTech, traditionalGame, bukulapakIconTech, vrGis, phoneBookContacts } from "./iconList";

export const projects = [
  {
    id: 0,
    name: "Phone Book Contacts",
    link: "https://phone-book-project-nine.vercel.app/contacts",
    pics: [
      {
        id: 1,
        urlPic: "assets/images/contactbook1.png",
      },
      {
        id: 2,
        urlPic: "assets/images/contactbook2.png",
      },
      {
        id: 3,
        urlPic: "assets/images/contactbook3.png",
      },
    ],
    desc: "The Phone Book Contacts provides contacts number. The mobile first web application that provides user to create contacts, edit, and delete contact. Also, provides favorite contact feature. User can searching contact by name.",
    icons: phoneBookContacts,
  },
  {
    id: 1,
    name: "Admin Panel (CMS) MyStore e-commerce",
    link: "https://mystore-adminpanel-nextjs.vercel.app/",
    pics: [
      {
        id: 1,
        urlPic: "assets/images/admin-login.jpg",
      },
      {
        id: 2,
        urlPic: "assets/images/product-editForm.jpg",
      },
      {
        id: 3,
        urlPic: "assets/images/content-table.jpg",
      },
    ],
    desc: "The Admin Panel web (CMS) provides admin to manage not only the contents but also products and users of MyStore e-commerce web landing.",
    icons: myStoreIconTech,
  },
  {
    id: 2,
    name: "To Do List Activity",
    link: "https://github.com/hanaw23/To-Do-List",
    pics: [
      {
        id: 1,
        urlPic: "assets/images/morning-home.jpg",
      },
      {
        id: 2,
        urlPic: "assets/images/noon-home.jpg",
      },
      {
        id: 3,
        urlPic: "assets/images/night-home.jpg",
      },
    ],
    desc: "Provide to manage user's to do list activity, user can add, delete, and mark freely. The background color of this website can change depends on the time whenever the user open it. Provides with 3 themes morning, afternoon, and night.",
    icons: todoIconTech,
  },
  {
    id: 3,
    name: "Traditional Game Suit Jawa",
    link: "https://github.com/hanaw23/Traditional-Game",
    pics: [
      {
        id: 1,
        urlPic: "assets/images/binar-game1.jpg",
      },
      {
        id: 2,
        urlPic: "assets/images/binar-game6.jpg",
      },
      {
        id: 3,
        urlPic: "assets/images/binar-game7.jpg",
      },
    ],
    desc: "If the user wins then the score will add 10 points but when computer wins, user will lose 5 points from their current points and there's no addition or subtraction for a draw condition. When the heart bar turn into black three times so the game is over.",
    icons: traditionalGame,
  },
  {
    id: 4,
    name: "Bukulapak E-commerce",
    pics: [
      {
        id: 1,
        urlPic: "assets/images/H8_P1.png",
      },
      {
        id: 2,
        urlPic: "assets/images/H8_P3.png",
      },
      {
        id: 3,
        urlPic: "assets/images/H8_P4.png",
      },
    ],
    desc: "Present for users to buy books easily. The home page of the website shows every new books that recently added from admin and also users can see the review from stars rate. Our website provides many kind of book such as comics, novels, medical, etc. If users have decided to buy the books, the cart page appear to count your total amount of the books that user want to buy.",
    icons: bukulapakIconTech,
  },
  {
    id: 5,
    name: "VR-GIS Sari Temple",
    link: "",
    pics: [
      {
        id: 1,
        urlPic: "assets/images/1.jpg",
      },
      {
        id: 2,
        urlPic: "assets/images/2.jpg",
      },
      {
        id: 3,
        urlPic: "assets/images/3.jpg",
      },
    ],
    desc: "Created from a 3D model object using photogrammetry and terrestrial laser scanner raw data. The users can enjoy this virtual reality in their mobile phone supported with VR equipment such as VR box, google VR cardboard, etc.",
    icons: vrGis,
  },
];
