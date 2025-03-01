import { features } from "../constants";
import Section from "./Section"
import Heading from "./Heading"

const FeatureSection = () => {
  return (
    <Section className="pt-[10rem]" id="features" crosses>
      <div className="flex">
        <Heading className="text-center" tag="Features"/></div>
      <div className="flex flex-wrap">
        {features.map((feature, index) => (
          <div key={index} className="w-full sm:1/2 lg:w-1/3">
            <div className="flex">
              <div className="flex mx-6 h-10 w-10 p-2 mt-9 bg-n-7 text-white justify-center items-center rounded-full">
                {feature.icon}
              </div>
              <div> 
                <h5 className="mt-10 mb-6 text-xl">
                  {feature.text}
                </h5>
                <p className="text-md p-2 text-neutral-500">{feature.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default FeatureSection;

