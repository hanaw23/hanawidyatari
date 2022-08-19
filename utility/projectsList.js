import TailwindIcon from "../components/svg/projectIcons/TailwindIcon";
import CssIcon from "../components/svg/projectIcons/CssIcon";
import JavascriptIcon from "../components/svg/projectIcons/JavascriptIcon";
import ReactIcon from "../components/svg/projectIcons/ReactIcon";
import NextIcon from "../components/svg/projectIcons/NextIcon";
import ReduxIcon from "../components/svg/projectIcons/ReduxIcon";
import AxiosIcon from "../components/svg/projectIcons/AxiosIcon";
import VercelIcon from "../components/svg/projectIcons/VercelIcon";
import NodeIcon from "../components/svg/projectIcons/NodeIcon";
import PostgreIcon from "../components/svg/projectIcons/PostgreIcon";
import ExpressIcon from "../components/svg/projectIcons/ExpressIcon";
import SwaggerIcon from "../components/svg/projectIcons/SwaggerIcon";
import PostmanIcon from "../components/svg/projectIcons/PostmanIcon";
import GitlabIcon from "../components/svg/projectIcons/GitLabIcon";
import GitIcon from "../components/svg/projectIcons/Git";

export const projects = [
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
    icons: [
      {
        id: 1,
        iconHtml: (
          <div>
            <JavascriptIcon height={30} width={30} fill="#facc15" className="cursor-pointer" />
          </div>
        ),
      },
      {
        id: 2,
        iconHtml: (
          <div>
            <NodeIcon height={30} width={30} fill="#539e43" className="cursor-pointer" />
          </div>
        ),
      },
      {
        id: 3,
        iconHtml: (
          <div>
            <ReactIcon height={30} width={30} fill="#61dafb" className="cursor-pointer" />
          </div>
        ),
      },
      {
        id: 4,
        iconHtml: (
          <div>
            <NextIcon height={30} width={30} fill="#0e0e0e" className="cursor-pointer" />
          </div>
        ),
      },
      {
        id: 5,
        iconHtml: (
          <div>
            <ReduxIcon height={30} width={30} fill="#6366f1" className="cursor-pointer" />
          </div>
        ),
      },
      {
        id: 6,
        iconHtml: (
          <div>
            <AxiosIcon height={35} width={35} className="cursor-pointer" />
          </div>
        ),
      },
      {
        id: 7,
        iconHtml: (
          <div>
            <TailwindIcon height={30} width={30} fill="#2dd4bf" className="cursor-pointer" />
          </div>
        ),
      },
      {
        id: 8,
        iconHtml: (
          <div>
            <CssIcon height={30} width={30} fill="#2563eb" className="cursor-pointer" />
          </div>
        ),
      },
      {
        id: 9,
        iconHtml: (
          <div>
            <ExpressIcon height={35} width={35} />
          </div>
        ),
      },

      {
        id: 10,
        iconHtml: (
          <div>
            <PostgreIcon height={30} width={30} className="cursor-pointer" />
          </div>
        ),
      },
      {
        id: 11,
        iconHtml: (
          <div>
            <SwaggerIcon height={30} width={30} className="cursor-pointer" />
          </div>
        ),
      },
      {
        id: 12,
        iconHtml: (
          <div>
            <PostmanIcon height={30} width={30} className="cursor-pointer" fill="#f97316" />
          </div>
        ),
      },
      {
        id: 13,
        iconHtml: (
          <div>
            <GitlabIcon height={30} width={30} className="cursor-pointer" />
          </div>
        ),
      },
      {
        id: 14,
        iconHtml: (
          <div>
            <GitIcon height={30} width={30} className="cursor-pointer" />
          </div>
        ),
      },
      {
        id: 15,
        iconHtml: (
          <div>
            <VercelIcon height={30} width={30} fill="#0e0e0e" className="cursor-pointer" />
          </div>
        ),
      },
    ],
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
  },
  {
    id: 4,
    name: "Bukulapak E-commerce",
    link: "",
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
  },
];
