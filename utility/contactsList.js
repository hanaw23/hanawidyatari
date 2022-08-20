import LinkedinIcon from "../components/svg/LinkedinIcon";

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
        icon: <LinkedinIcon height={30} width={30} className="dark:fill-gray-50 fill-slate-900 cursor-pointer" />,
        url: "https://www.linkedin.com/in/hana-widyatari/",
      },
    ],
  },
];
