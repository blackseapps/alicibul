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
