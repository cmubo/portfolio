import imageOne from "../../assets/images/fuel-calc/fuel-calc-1.png";
import imageTwo from "../../assets/images/fuel-calc/fuel-calc-2.png";
import imageThree from "../../assets/images/fuel-calc/fuel-calc-3.png";
import imageFour from "../../assets/images/fuel-calc/fuel-calc-4.png";
import imageFive from "../../assets/images/fuel-calc/fuel-calc-5.png";
import imageSix from "../../assets/images/fuel-calc/fuel-calc-6.png";

const galleryImages: {
  image: ImageMetadata;
  alt: string;
}[] = [
  {
    image: imageOne,
    alt: "Initial screen showing MPG form field .",
  },
  {
    image: imageTwo,
    alt: "Screen showing the saved fuel prices.",
  },
  {
    image: imageThree,
    alt: "Screen showing the results of the calculation.",
  },
  {
    image: imageFour,
    alt: "Shows the date picker to save the calculation.",
  },
  {
    image: imageFive,
    alt: "Screen showing the saved journeys.",
  },
  {
    image: imageSix,
    alt: "Screen showing saved fuel prices.",
  },
];

export default galleryImages;

export { imageOne, imageTwo, imageThree, imageFour, imageFive };
