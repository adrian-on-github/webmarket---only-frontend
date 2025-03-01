import { CheckCircle2 } from "lucide-react"
import { pricingOptions } from "../constants"
import Section from "./Section"
import Heading from "./Heading"

const Pricing = () => {
  return (
    <Section id="pricing" crosses>
     <div className="flex"> <Heading tag="Get started"/> </div>

      <div className="flex justify-center items-center flex-wrap">
        {pricingOptions.map((option, index) => (
          <div key={index} className="sm:w-6/12 lg:w-1/3 p-2 mt-[1rem">
            <div className="p-10 border border-n-6 rounded-2xl">
              <p className="text-5xl mb-4">
              {option.title === "Premium" ? (
                <h4 className="text-amber-200">Premium</h4>  
              )
            : (
              (option.title)
            )
            }

                {option.title === "Pro" && (                                       
                  <span className="text-lg text-red-500">
                      {" "}(Most Popular)
                  </span> 
                )}
              </p>
              <div className="mb-4">
                <p className="text-md text-n-3">{option.description}</p>
              </div>
              <a href={option.href} className="inline-flex justify-center items-center w-full h-12 p-5 mt-3 mb-7 tracking-wider font-medium text-center text-xl bg-white text-black hover:text-purple-600 border font-source-code-pro border-white rounded-lg transition duration-150">
                Get Started
              </a>
              <p className="mb-8">
                <span className="text-5xl mt-6 mr-2">{option.price}</span>
                <span className="text-n-4 tracking-tight">/Month</span>
              </p>
              <ul>
                {option.features.map((feature, index) => (
                  <li key={index} className="mt-8 flex items-center">
                    <CheckCircle2 className="text-n-4"/>
                    <span className="ml-2">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}   
        </div>
    </Section>
  );
}

export default Pricing;
