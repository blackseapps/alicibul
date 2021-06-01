import uuid from "react-native-uuid";
import * as Images from "../assets/images";
import * as Icons from "../assets/icons";

export const dataHomeFlow = [
  {
    groupTitle: "Krediye Uygun",
    groupCategoryTitle: "Araçlar",
    groupImage: Images.imagesHomeImageOne,
    id: uuid.v4(),
  },
  {
    id: uuid.v4(),
    title: "Audi A4",
    description: "Bu bir aractir.",
    image: Images.imagesHomeImageOne,
    km: "75.000",
    price: "271.000 ₺",
    gearTypes: "Otomatik",
    fuelTypes: "Dizel",
    location: "Maltepe",
  },

  {
    id: uuid.v4(),
    title: "Audi A4",
    description: "Bu bir aractir.",
    image: Images.imagesHomeImageOne,
    km: "75.000",
    price: "271.000 ₺",
    gearTypes: "Otomatik",
    fuelTypes: "Dizel",
    location: "Maltepe",
  },
  {
    groupTitle: "150.000 TL Alti",
    groupCategoryTitle: "Araçlar",
    groupImage: Images.imagesHomeImageOne,
    id: uuid.v4(),
  },
  {
    id: uuid.v4(),
    title: "Audi A5",
    description: "Bu bir aractir.",
    image: Images.imagesHomeImageOne,
    km: "75.000",
    price: "271.000 ₺",
    gearTypes: "Otomatik",
    fuelTypes: "Dizel",
    location: "Ankara",
  },
  {
    id: uuid.v4(),
    title: "Audi A6",
    description: "Bu bir aractir.",
    image: Images.imagesHomeImageOne,
    km: "75.000",
    price: "271.000 ₺",
    gearTypes: "Otomatik",
    fuelTypes: "Dizel",
    location: "Maltepe",
  },
];


export const dataSalesProperties = [
  {
    id: uuid.v4(),
    title: "Araç Tipi",
    data: [
      {
        id: uuid.v4(),
        label: "Otomobil",
        value: "Otomobil",
      },
    ],
  },
  {
    id: uuid.v4(),
    title: "Yil",
    data: [
      {
        id: uuid.v4(),
        label: "2019",
        value: "2019",
      },
    ],
  },
  {
    id: uuid.v4(),
    title: "Marka",
    data: [
      {
        id: uuid.v4(),
        label: "Jeep",
        value: "Jeep",
      },
    ],
  },
  {
    id: uuid.v4(),
    title: "Model",
    data: [
      {
        id: uuid.v4(),
        label: "Renegade",
        value: "Renegade",
      },
    ],
  },
  {
    id: uuid.v4(),
    title: "Yakit",
    data: [
      {
        id: uuid.v4(),
        label: "Dizel",
        value: "Dizel",
      },
    ],
  },
  {
    id: uuid.v4(),
    title: "Kasa Tipi",
    data: [
      {
        id: uuid.v4(),
        label: "SUV",
        value: "SUV",
      },
    ],
  },
  {
    id: uuid.v4(),
    title: "Motor",
    data: [
      {
        id: uuid.v4(),
        label: "1.6 Multijet",
        value: "1.6 Multijet",
      },
    ],
  },
  {
    id: uuid.v4(),
    title: "Paket",
    data: [
      {
        id: uuid.v4(),
        label: "Limited",
        value: "Limited",
      },
    ],
  },
];

export const dataCategory = [
  {
    id: 0,
    title: "Tümü",
    image: Icons.iconCatCarZero,
  },
  {
    id: 1,
    title: "Arac 1",
    image: Icons.iconCatCarOne,
  },
  {
    id: 2,
    title: "Arac 2",
    image: Icons.iconCatCarTwo,
  },
  {
    id: 3,
    title: "Arac 3",
    image: Icons.iconCatCarThree,
  },
  {
    id: 4,
    title: "Arac 4",
    image: Icons.iconCatCarFour,
  },
  {
    id: 5,
    title: "Arac 5",
    image: Icons.iconCatCarFive,
  },
  {
    id: 6,
    title: "Arac 6",
    image: Icons.iconCatCarSix,
  },

];
