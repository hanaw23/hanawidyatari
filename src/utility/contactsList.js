import LinkedinIcon from "@hanawidyatari/icons/LinkedinIcon";
import GithubIcon from "@hanawidyatari/icons/projectIcons/GithubIcon";

export const contacts = [
  {
    id: 1,
    calls: [
      { id: 1, phones: "+6281321861427" },
      { id: 2, phones: "(022)7500421" },
    ],
    location: "Margahayu Raya Jl. Galaxy Selatan U2 Blok U2 No.123, Kelurahan Sekejati, Kecamatan Buah Batu, Bandung, Indonesia",
    socials: [
      {
        icon: <LinkedinIcon height={25} width={25} className="dark:fill-gray-50 fill-slate-900 cursor-pointer" />,
        url: "https://www.linkedin.com/in/hana-widyatari/",
      },
      {
        icon: <GithubIcon height={25} width={25} noHover={true} />,
        url: "https://github.com/hanaw23",
      },
    ],
  },
];
