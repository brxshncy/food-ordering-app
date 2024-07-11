import hero from "../assets/hero.png";

const Hero = () => {
  return (
    <div>
      <img
        alt="Hero Section"
        src={hero}
        className="w-full max-h-[500px] object-cover"
      />
    </div>
  );
};

export default Hero;
