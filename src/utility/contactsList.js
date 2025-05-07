import LinkedinIcon from "@hanawidyatari/icons/LinkedinIcon";
import GithubIcon from "@hanawidyatari/icons/projectIcons/GithubIcon";

export const contacts = [
  {
    id: 1,
    socials: [
      {
        icon: <LinkedinIcon height={35} width={35} className="dark:fill-gray-50 fill-slate-900 cursor-pointer" />,
        url: "https://www.linkedin.com/in/hana-widyatari/",
      },
      {
        icon: <GithubIcon height={35} width={35} noHover={true} />,
        url: "https://github.com/hanaw23",
      },
    ],
  },
];
