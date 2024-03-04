import firstDog from "./img-react/dog-1.jpeg";
import secondDog from "./img-react/dog-2.jpeg";
import thirdDog from "./img-react/dog-3.jpeg";
const blogsData = [
  {
    id: 1,
    Image: firstDog,
    dates: "24 jan 2024",
    bHeading: (
      <div>
        Finding your perfect <br /> dog breed
      </div>
    ),
  },
  {
    id: 2,
    Image: secondDog,
    dates: "23 jan 2024",
    bHeading: (
      <div>
        5 signs that it's time to <br /> change your dog's diet
      </div>
    ),
  },
  {
    id: 3,
    Image: thirdDog,
    dates: "21 jan 2024",
    bHeading: (
      <div>
        Taking care of your <br /> dog's joints
      </div>
    ),
  },
];

export default blogsData;
