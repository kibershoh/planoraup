// Kategoriyalar
import img1 from "../assets/categories/micraphone.webp";
import img2 from "../assets/categories/places.webp";
import img3 from "../assets/categories/fotovideo.webp";
import img4 from "../assets/categories/cars.webp";
import img5 from "../assets/categories/organizations.webp";
import img6 from "../assets/categories/invitation.webp";

// Sanatkorlar
import img_1 from "../assets/categories/sanatkorlar/img1.webp";
import img_2 from "../assets/categories/sanatkorlar/img2.webp";
import img_3 from "../assets/categories/sanatkorlar/img3.webp";
import img_4 from "../assets/categories/sanatkorlar/img4.webp";
import img_5 from "../assets/categories/sanatkorlar/img5.webp";

// Boshlovchilar

import bonu from "../assets/categories/sanatkorlar/boshlovchilar/bonu.webp";
import timur from "../assets/categories/sanatkorlar/boshlovchilar/timur.webp";

// Qiziqchilar
import mirza from "../assets/categories/sanatkorlar/shouArtistlar/mirza.jpg";
import xojiboy from "../assets/categories/sanatkorlar/shouArtistlar/xojiboy.jpg";

// Raqschilar
import raqschi1 from "../assets/categories/sanatkorlar/raqsJamolari/img1.webp";

// Tadbir Joylari
import tadbir1 from "../assets/categories/tadbirJoylari/img1.webp";
import tadbir2 from "../assets/categories/tadbirJoylari/img2.webp";
import tadbir3 from "../assets/categories/tadbirJoylari/img3.webp";
import tadbir4 from "../assets/categories/tadbirJoylari/img4.webp";

// Toyxonalar
import toyxona1 from "../assets/categories/tadbirJoylari/toyxonalar/toyxona1.webp";
import toyxona2 from "../assets/categories/tadbirJoylari/toyxonalar/toyxona2.webp";

// Foto & video
import icon1 from "../assets/categories/FotoVideo/img1.webp";
import icon2 from "../assets/categories/FotoVideo/img2.webp";
import icon3 from "../assets/categories/FotoVideo/img3.webp";

// Fotostudia
import studia1 from "../assets/categories/FotoVideo/fotostudia/studia1.webp";
import studia2 from "../assets/categories/FotoVideo/fotostudia/studia2.webp";
import studia3 from "../assets/categories/FotoVideo/fotostudia/studia3.webp";

// Fotograflar
import fgraf1 from "../assets/categories/FotoVideo/fotograflar/fgraf1.webp";
import fgraf2 from "../assets/categories/FotoVideo/fotograflar/fgraf2.webp";
import fgraf3 from "../assets/categories/FotoVideo/fotograflar/fgraf3.webp";

 

// Ijara
import ijara1 from '../assets/categories/Ijara/img1.webp'
import ijara2 from '../assets/categories/Ijara/img2.webp'
import ijara3 from '../assets/categories/Ijara/img3.webp'
import dress1 from '../assets/categories/Ijara/img4.webp'
import car1 from '../assets/categories/Ijara/img5.webp'


export const data = [
  { id: 1, name: "San'atkorlar", image: img1, path: "/sanatkorlar" },
  { id: 2, name: "Tadbir joylari", image: img2, path: "/tadbir-joylari" },
  { id: 3, name: "Foto & Video", image: img3, path: "/foto-video" },
  { id: 4, name: "Ijara", image: img4, path: "/ijara" },
  { id: 5, name: "Tashkilotchilar", image: img5, path: "/tashkilotchilar" },
  { id: 6, name: "Raqamli taklifnoma", image: img6, path: "/taklifnoma" },
];

export const allData = [
  {
    id: 1,
    name: "San'atkorlar",
    path: "sanatkorlar",
    subcategories: [
      {
        id: 1,
        name: "Boshlovchilar",
        path: "boshlovchilar",
        icon: img_1,
        artists: [
          {
            id: 1,
            name: "Bonu Turayeva",
            slug: "bonu-turayeva",
            image: bonu,
            info: "Boshlovchi, rus, o'zbek, ingliz tilida.",
            places: "O'zbekiston bo'ylab",
            price: "1 200 000 so'mdan boshlab",
            phoneNumber: "+998 98 999 77 88",
            adress: "Toshkent,Yunusobod tumani",
          },
          {
            id: 2,
            name: "Timur Zafarovich",
            slug: "timur-zafarovich",
            image: timur,
            info: "Boshlovchi, qozoq, o'zbek, ingliz tilida.",
            places: "O'zbekiston va Qirgiziston bo'ylab",
            price: "2 000 000 so'mdan boshlab",
            phoneNumber: "+998 98 000 77 88",
            adress: "Toshkent,Yunusobod tumani",
          },
        ],
      },
      {
        id: 2,
        name: "Qo'shiqchilar va guruhlar",
        path: "qoshiqchilar-va-guruhlar",
        icon: img_2,

        artists: [],
      },
      {
        id: 3,
        name: "Shou artistlar va qiziqchilar",
        path: "shou-artistlar-va-qiziqchilar",
        icon: img_3,

        artists: [
          {
            id: 1,
            name: "Mirzabek Xolmedov",
            slug: "mirzabek-xolmetov",
            image: mirza,
            info: "qiziqchi soz ustasi ozbek tilida.",
            places: "O'zbekiston bo'ylab",
            price: "1 700 000 so'mdan boshlab",
            phoneNumber: "+998 88 996 77 88",
            adress: "Toshkent,Mirobod tumani",
          },
          {
            id: 2,
            name: "Xojiboy Tojiboyev",
            slug: "xojiboy-tojiboyev",
            image: xojiboy,
            info: "Qiziqchi, qozoq, o'zbek, ingliz tilida.",
            places: "O'zbekiston va Qirgiziston bo'ylab",
            price: "2 000 000 so'mdan boshlab",
            phoneNumber: "+998 98 000 77 88",
            adress: "Toshkent,Yangiobod tumani",
          },
        ],
      },
      {
        id: 4,
        name: "Raqs jamoalari",
        path: "raqs-jamoalari",
        icon: img_4,

        artists: [
          {
            id: 1,
            name: "Mirzabek Xolmedov",
            slug: "mirzabek-xolmetov",
            image: raqschi1,
            info: "qiziqchi soz ustasi ozbek tilida.",
            places: "O'zbekiston bo'ylab",
            price: "1 700 000 so'mdan boshlab",
            phoneNumber: "+998 88 996 77 88",
            adress: "Toshkent,Mirobod tumani",
          },
          {
            id: 2,
            name: "Xojiboy Tojiboyev",
            slug: "xojiboy-tojiboyev",
            image: xojiboy,
            info: "Qiziqchi, qozoq, o'zbek, ingliz tilida.",
            places: "O'zbekiston va Qirgiziston bo'ylab",
            price: "2 000 000 so'mdan boshlab",
            phoneNumber: "+998 98 000 77 88",
            adress: "Toshkent,Yangiobod tumani",
          },
        ],
      },
      {
        id: 5,
        name: "Animatorlar",
        path: "animatorlar",
        icon: img_5,

        artists: [
          {
            id: 1,
            name: "Bahrom Animator",
            slug: "bahrom-animator",
            image: img1,
            info: "Bolalar animator",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    name: "Tadbir Joylari",
    path: "tadbir-joylari",
    subcategories: [
      {
        id: 1,
        name: "To'yxonalar",
        path: "toyxonalar",
        icon: tadbir1,

        artists: [
          {
            id: 1,
            name: "Visol",
            slug: "visol",
            image: toyxona1,
            info: "Zor judayam.",
            places: "Fargona viloyati",
            price: "Kunlik - 600 000 so'mdan ",
            phoneNumber: "+998 98 999 77 88",
            adress: "Fargona,Vodil tumani",
          },
          {
            id: 2,
            name: "Wine Garden",
            slug: "wine-garden",
            image: toyxona2,
            info: "Oziga 2000 kishini sigdira oladi",
            places: "Ozbekiston boylab",
            price: "Kunlik - 600 000 so'mdan ",
            phoneNumber: "+998 98 999 77 88",
            adress: "Fargona,Vodil tumani",
          },
        ],
      },
      {
        id: 2,
        name: "Zallar",
        path: "zallar",
        icon: tadbir2,

        artists: [],
      },
      {
        id: 3,
        name: "Restoranlar",
        path: "restoranlar",
        icon: tadbir3,

        artists: [
          {
            id: 1,
            name: "Mirzabek Xolmedov",
            slug: "mirzabek-xolmetov",
            image: mirza,
            info: "qiziqchi soz ustasi ozbek tilida.",
            places: "O'zbekiston bo'ylab",
            price: "1 700 000 so'mdan boshlab",
            phoneNumber: "+998 88 996 77 88",
            adress: "Toshkent,Mirobod tumani",
          },
          {
            id: 2,
            name: "Xojiboy Tojiboyev",
            slug: "xojiboy-tojiboyev",
            image: xojiboy,
            info: "Qiziqchi, qozoq, o'zbek, ingliz tilida.",
            places: "O'zbekiston va Qirgiziston bo'ylab",
            price: "2 000 000 so'mdan boshlab",
            phoneNumber: "+998 98 000 77 88",
            adress: "Toshkent,Yangiobod tumani",
          },
        ],
      },
      {
        id: 4,
        name: "Mehmonxonalr",
        path: "mehmonxonalar",
        icon: tadbir4,

        artists: [
          {
            id: 1,
            name: "Mirzabek Xolmedov",
            slug: "mirzabek-xolmetov",
            image: raqschi1,
            info: "qiziqchi soz ustasi ozbek tilida.",
            places: "O'zbekiston bo'ylab",
            price: "1 700 000 so'mdan boshlab",
            phoneNumber: "+998 88 996 77 88",
            adress: "Toshkent,Mirobod tumani",
          },
          {
            id: 2,
            name: "Xojiboy Tojiboyev",
            slug: "xojiboy-tojiboyev",
            image: xojiboy,
            info: "Qiziqchi, qozoq, o'zbek, ingliz tilida.",
            places: "O'zbekiston va Qirgiziston bo'ylab",
            price: "2 000 000 so'mdan boshlab",
            phoneNumber: "+998 98 000 77 88",
            adress: "Toshkent,Yangiobod tumani",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    name: "foto-video",
    path: "foto-video",
    subcategories: [
      {
        id: 1,
        name: "Fotostudiyalar",
        path: "fotostudiyalar",
        icon: icon1,

        artists: [
          {
            id: 1,
            name: "Studia 1",
            slug: "studia-one",
            image: studia1,
            info: "Zor judayam.",
            places: "Fargona viloyati",
            price: "Kunlik - 600 000 so'mdan ",
            phoneNumber: "+998 98 999 77 88",
            adress: "Fargona,Vodil tumani",
          },
          {
            id: 2,
            name: "Studia 2",
            slug: "studia-two",
            image: studia2,
            info: "Oziga 2000 kishini sigdira oladi",
            places: "Ozbekiston boylab",
            price: "Kunlik - 600 000 so'mdan ",
            phoneNumber: "+998 98 999 77 88",
            adress: "Fargona,Vodil tumani",
          },
          {
            id: 3,
            name: "Studia 2",
            slug: "studia-two",
            image: studia3,
            info: "Oziga 2000 kishini sigdira oladi",
            places: "Ozbekiston boylab",
            price: "Kunlik - 600 000 so'mdan ",
            phoneNumber: "+998 98 999 77 88",
            adress: "Fargona,Vodil tumani",
          },
          {
            id: 4,
            name: "Studia 2",
            slug: "studia-two",
            image: studia3,
            info: "Oziga 2000 kishini sigdira oladi",
            places: "Ozbekiston boylab",
            price: "Kunlik - 600 000 so'mdan ",
            phoneNumber: "+998 98 999 77 88",
            adress: "Fargona,Vodil tumani",
          },
           
        ],
      },
      {
        id: 2,
        name: "Fotograflar",
        path: "fotograflar",
        icon: icon2,

        artists: [
           {
            id: 1,
            name: "Studia 2",
            slug: "studia-two",
            image: fgraf1,
            info: "Oziga 2000 kishini sigdira oladi",
            places: "Ozbekiston boylab",
            price: "Kunlik - 600 000 so'mdan ",
            phoneNumber: "+998 98 999 77 88",
            adress: "Fargona,Vodil tumani",
          },
           {
            id: 2,
            name: "Studia 2",
            slug: "studia-two",
            image: fgraf2,
            info: "Oziga 2000 kishini sigdira oladi",
            places: "Ozbekiston boylab",
            price: "Kunlik - 600 000 so'mdan ",
            phoneNumber: "+998 98 999 77 88",
            adress: "Fargona,Vodil tumani",
          },
           {
            id: 3,
            name: "Studia 2",
            slug: "studia-two",
            image: fgraf3,
            info: "Oziga 2000 kishini sigdira oladi",
            places: "Ozbekiston boylab",
            price: "Kunlik - 600 000 so'mdan ",
            phoneNumber: "+998 98 999 77 88",
            adress: "Fargona,Vodil tumani",
          },
        ],
      },
      {
        id: 3,
        name: "Videograflar",
        path: "videograflar",
        icon: icon3,

        artists: [
          {
            id: 1,
            name: "Mirzabek Xolmedov",
            slug: "mirzabek-xolmetov",
            image: mirza,
            info: "qiziqchi soz ustasi ozbek tilida.",
            places: "O'zbekiston bo'ylab",
            price: "1 700 000 so'mdan boshlab",
            phoneNumber: "+998 88 996 77 88",
            adress: "Toshkent,Mirobod tumani",
          },
          {
            id: 2,
            name: "Xojiboy Tojiboyev",
            slug: "xojiboy-tojiboyev",
            image: xojiboy,
            info: "Qiziqchi, qozoq, o'zbek, ingliz tilida.",
            places: "O'zbekiston va Qirgiziston bo'ylab",
            price: "2 000 000 so'mdan boshlab",
            phoneNumber: "+998 98 000 77 88",
            adress: "Toshkent,Yangiobod tumani",
          },
        ],
      },
     
    ],
  },
  {
  id: 2,
  name: "Ijara",
  path: "ijara",
  subcategories: [
    {
      id: 1,
      name: "Transport",
      path: "transport",
      icon: ijara1,
      artists: [
        {
          id: 1,
          name: "Mercedes Benz S-class",
          slug: "mercedes-benz-s-class",
          image: car1,
          info: "Premium klass to'y avtomobili.",
          places: "Toshkent va viloyatlar bo'ylab",
          price: "1 500 000 so'mdan boshlab",
          phoneNumber: "+998 99 123 45 67",
          adress: "Toshkent, Chilonzor tumani",
        },
      ],
    },
    {
      id: 2,
      name: "Kelin-kuyov liboslari",
      path: "kelin-kuyov-liboslari",
      icon: ijara2,
      artists: [
        {
          id: 1,
          name: "Kelin libosi (oq)",
          slug: "kelin-libosi-oq",
          image: dress1,
          info: "Oq kelin libosi, to'y uchun.",
          places: "Toshkent va viloyatlar bo'ylab",
          price: "1 000 000 so'mdan boshlab",
          phoneNumber: "+998 97 456 78 90",
          adress: "Toshkent, Mirzo Ulug‘bek tumani",
        },
      ],
    },
    {
      id: 3,
      name: "Dekoratsiya",
      path: "dekoratsiya",
      icon: ijara3,
      artists: [
        {
          id: 1,
          name: "To'y dekoratsiyasi (gold style)",
          slug: "toy-dekoratsiyasi-gold",
          image: ijara3,
          info: "Oltin rangli zamonaviy dekoratsiya.",
          places: "Toshkent va viloyatlar bo'ylab",
          price: "3 500 000 so'mdan boshlab",
          phoneNumber: "+998 91 234 56 78",
          adress: "Toshkent, Shayxontohur tumani",
        },
      ],
    },
    {
      id: 4,
      name: "Ovoz yozish uskunalari",
      path: "ovoz-yozish-uskunalari",
      icon: ijara2,
      artists: [
        {
          id: 1,
          name: "Mikrofon (Shure SM7B)",
          slug: "mikrofon-shure-sm7b",
          image: fgraf1,
          info: "Professional studiya mikrofon.",
          places: "Toshkent va viloyatlar bo'ylab",
          price: "500 000 so'mdan boshlab",
          phoneNumber: "+998 93 987 65 43",
          adress: "Toshkent, Yakkasaroy tumani",
        },
      ],
    },
    {
      id: 5,
      name: "Stol va stullar",
      path: "stol-va-stullar",
      icon: ijara1,
      artists: [
        {
          id: 1,
          name: "Katta ziyofat stoli va 10 ta stul",
          slug: "ziyoftat-stoli-10-stul",
          image: ijara3,
          info: "Katta ziyofat uchun mebel to'plami.",
          places: "Toshkent va viloyatlar bo'ylab",
          price: "800 000 so'mdan boshlab",
          phoneNumber: "+998 95 321 54 76",
          adress: "Toshkent, Sergeli tumani",
        },
      ],
    },
  ],
}

];
