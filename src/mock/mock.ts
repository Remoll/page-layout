import stockbox001 from "../assets/images/stockbox001.png";
import stockbox002 from "../assets/images/stockbox002.png";

interface InfoData {
  title: string;
  description: string;
}

const infoData: InfoData[] = [
  {
    title: "How can I win?",
    description:
      "Thanks to your membership, you also participate in our contest to win the iPhone15. We sellect a winner among every 600 participants. The next winner will be selected on 06.10.2023, and will be notified directly by e-mail. If the reward is out of stock, the winner will receive a similar product of equal or greater value instead.",
  },
  {
    title: "No hidden fees?",
    description:
      "We ensure that our members are provided with a detailed history of transactions so that they know exactly what they are paying for. Credit card information is only required to facilitate future purchases. There will be no charges on your credit card statement if you do not upgrade to PREMIUM membership and do not make a purchase.",
  },
  {
    title: "Why do we need your billing information?",
    description:
      "By joining this service, you will receive a 5-day trial of our partner's program. If you continue with a subscription beyond the 5-day trial period, you will be charged an amount on your credit card which varies depending on the choice of the tariff. When your contribution is deducted from your credit card or other payment method, you will have access to these services which are reserved exclusively for members of our partner's website.",
  },
];

interface ImageWithDescription extends InfoData {
  imageSrc: string;
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

export { infoData, imagesWithDescriptions };
