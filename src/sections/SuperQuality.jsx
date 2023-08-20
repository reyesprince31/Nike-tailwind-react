import { shoe8 } from "../assets/images";
import { Button } from "../components";

function SuperQuality() {
  return (
    <section
      id="about-us"
      className="max-container flex justify-between items-center max-lg:flex-col gap-10 w-full">
      <div className="flex flex-1 flex-col">
        <h2 className=" font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          We Provide You
          <span className="text-coral-red"> Super</span>
          <span className="text-coral-red"> Quality</span> Shoes
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation and touch of elegance.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Our deidication to detail and excellence ensures your satisfcation
        </p>
        <div className="mt-11">
          <Button label="View details" />
        </div>
      </div>

      <div className="flex flex-1 justify-center items-center">
        <img
          src={shoe8}
          alt="shoe8"
          height={570}
          width={522}
          className="object-contain"
        />
      </div>
    </section>
  );
}

export default SuperQuality;
