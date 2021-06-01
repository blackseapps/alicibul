import uuid from "react-native-uuid";
import * as Images from "../assets/images";

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
        title: "Otomobil",
      },
    ],
  },
  {
    id: uuid.v4(),
    title: "Yil",
    data: [
      {
        id: uuid.v4(),
        title: "2019",
      },
    ],
  },
  {
    id: uuid.v4(),
    title: "Marka",
    data: [
      {
        id: uuid.v4(),
        title: "Jeep",
      },
    ],
  },
  {
    id: uuid.v4(),
    title: "Model",
    data: [
      {
        id: uuid.v4(),
        title: "Renegade",
      },
    ],
  },
  {
    id: uuid.v4(),
    title: "Yakit",
    data: [
      {
        id: uuid.v4(),
        title: "Dizel",
      },
    ],
  },
  {
    id: uuid.v4(),
    title: "Kasa Tipi",
    data: [
      {
        id: uuid.v4(),
        title: "SUV",
      },
    ],
  },
  {
    id: uuid.v4(),
    title: "Motor",
    data: [
      {
        id: uuid.v4(),
        title: "1.6 Multijet",
      },
    ],
  },
  {
    id: uuid.v4(),
    title: "Paket",
    data: [
      {
        id: uuid.v4(),
        title: "Limited",
      },
    ],
  },
];
