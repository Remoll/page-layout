import stockbox001 from "../assets/images/stockbox001.png";
import stockbox002 from "../assets/images/stockbox002.png";

interface ImageWithDescription {
  imageSrc: string;
  title: string;
  description: string;
}

const imagesWithDescriptions: ImageWithDescription[] = [
  {
    imageSrc: stockbox001,
    title: "Curious about the [color=#006340]StockX[/color] Mystery Box?",
    description:
      "Experience the thrill of unboxing cutting-edge gadgets with Stockx Mystery Boxes. Each box is a treasure trove of high-quality electronics, handpicked to elevate your tech game. \nExpect the unexpected! Our boxes are packed with the latest gadgets, from smartphones to gaming consoles, ensuring you get the best tech surprises every time.",
  },
  {
    imageSrc: stockbox002,
    title: "Why is everyone buzzing about these boxes?",
    description:
      "StockX Mystery Boxes are not just about products; they’re about the experience. Imagine the excitement of unveiling top-tier electronics at a fraction of the cost. \nOur boxes include a variety of premium tech items, making it a must-have for every tech enthusiast. Join the buzz and see why everyone is raving about the unbeatable value and surprise factor of Stockx Mystery Boxes!",
  },
];

export default imagesWithDescriptions;
