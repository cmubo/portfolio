import imageOne from "../../assets/images/tenat/screen-1.png";
import imageTwo from "../../assets/images/tenat/screen-2.png";
import imageThree from "../../assets/images/tenat/screen-3.png";
import imageFour from "../../assets/images/tenat/screen-4.png";
import imageFive from "../../assets/images/tenat/screen-5.png";

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
    alt: "Properties dashboard.",
  },
  {
    image: imageFour,
    alt: "Maintenance ticket.",
  },
  {
    image: imageFive,
    alt: "Login flow.",
  },
];

export default galleryImages;

export { imageOne, imageTwo, imageThree, imageFour, imageFive };
