import imageOne from "../../assets/images/workpal/screen-1.png";
import imageTwo from "../../assets/images/workpal/screen-2.png";
import imageThree from "../../assets/images/workpal/screen-3.png";
import imageFour from "../../assets/images/workpal/screen-4.png";
import imageFive from "../../assets/images/workpal/screen-5.png";
import imageSix from "../../assets/images/workpal/screen-6.png";

const galleryImages: {
  image: ImageMetadata;
  alt: string;
}[] = [
  {
    image: imageOne,
    alt: "Login screen.",
  },
  {
    image: imageTwo,
    alt: "Dashboard.",
  },
  {
    image: imageThree,
    alt: "Behaviour screen.",
  },
  {
    image: imageFour,
    alt: "Team screen.",
  },
  {
    image: imageFive,
    alt: "Profile.",
  },
  {
    image: imageSix,
    alt: "Reports table.",
  },
];

export default galleryImages;

export { imageOne, imageTwo, imageThree, imageFour, imageFive };
