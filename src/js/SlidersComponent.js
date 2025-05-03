//component Slider Category imgs
import blusas from "../assets/blusas.jpg";
import shorts from "../assets/shorts.jpg";
import bolsos from "../assets/bolsos.jpg";
import accesorios from "../assets/accesorios.jpg";
import cosmetiqueras from "../assets/cosmetiquera.jpg";

//component home imgs
import imguno from "../assets/1.png";
import imgdos from "../assets/2.png";
import imgtres from "../assets/3.png";

export const SliderCategoryImgs = [
  {
    title: "Tops & Blusas",
    image: blusas,
  },
  {
    title: "Shorts & Faldas",
    image: shorts,
  },
  {
    title: "Bolsos",
    image: bolsos,
  },
  {
    title: "Accesorios",
    image: accesorios,
  },
  {
    title:"Cosmetiqueras",
    image: cosmetiqueras,
  }
];

export const SliderAnuncioImgs = [
  {
    image: imguno,
  },
  {
    image: imgdos,
  },
  {
    image: imgtres,
  },
];

export default {
  SliderCategoryImgs,
  SliderAnuncioImgs,
};
