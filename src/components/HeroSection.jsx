import Button from "./Button"
import curve from "../assets/hero/curve.png"
import Section from "./Section"
import { Link } from 'react-scroll';
import { ButtonItem } from '../constants'


const HeroSection = () => {
  return (
    <Section className="pt-[10rem] -mt-[5rem]" showStroke={true} crosses crossesOffset>
      <div className="relative z-0">
        <div className="flex">
          <h1 className="text-center mb-4 h1 ml-4 mr-4">Your Gateway to achieving online success and a passive income with <span className="inline-block relative">WebMarket <img src={curve} class="absolute top-full left-0 w-full xl:-mt-1.5" width="624" height="28" alt="Curve"></img></span> </h1>
        </div>
        <div className="flex text-center">
        <p className="text-n-2 body-1 max-w-4xl mx-auto mb-2 lg:mb-8 mt-[1rem]">At WebMarket, you can purchase or enhance your own websites in no time. The fastest way to get your own professional website and start your first business!</p>
        </div>
        <div className="flex justify-center items-center text-center">
          {ButtonItem.map((item, index) => (
              <Link  
              to={item.id} 
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}>
      <Button className="mt-5 uppercase" id="" white>{item.label}</Button> 
      </Link>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default HeroSection;

