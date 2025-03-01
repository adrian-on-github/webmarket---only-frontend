import Section from "./Section";
import Heading from "./Heading";
import placeholder from "../assets/placeholder.png";
import grid from "../assets/grid.png";
import check2 from "../assets/check-02.svg"
import loading1 from "../assets/loading-01.svg"
import Button from "./Button";
import { roadmap } from "../constants";
import Tagline from "./Tagline"

const Roadmap = () => {
  return (
    <Section showStroke={true} crosses id="roadmap">
      <div className="flex text-center justify-center items-center">
        <Heading tag="What we're working on" className="mt-5 text-center" />
      </div>
      <div className="flex justify-center items-center text-center">
        <h3 className="h3 text-center">How you can buy a website from WebMarket</h3>
      </div>
      <div className="relative p-8 bg-n-8 rounded-[2.4375rem] overflow-hidden xl:p-10">
        <div className="relative grid gap-6 md:grid-cols-2 md:gap-8 md:pb-[7rem]">
          {roadmap.map((item) => {
            const status = item.status === "done" ? "Done" : "In progress";

            return (
              <div
                className={`md:flex even:md:translate-y-[7rem] p-0.25 rounded-[2.5rem] ${
                  item.colorful ? "bg-conic-gradient" : "bg-n-6"
                }`}
                key={item.id}
              >
                <div className="relative p-8 bg-n-8 rounded-[2.4375rem] overflow-hidden xl:p-15">
                  <div className="absolute top-0 left-0 max-w-full">
                    <img
                      className="w-full"
                      src={grid}
                      width={550}
                      height={550}
                      alt="Grid"
                    />
                  </div>
                  <div className="relative z-1">
                    <div className="flex items-center justify-between max-w-[27rem] mb-8 md:mb-20 gap-1d0">
                
                      <div className="flex items-center px-4 py-1 bg-n-1 rounded text-n-8">
                        <img
                          className="mr-2.5"
                          src={item.status === "done" ? check2 : loading1}
                          width={16}
                          height={16}
                          alt={status}
                        />
                        <div className="tagline">{status}</div>
                      </div>
                    </div>

                    <div className="mb-10 -my-10 -mx-15 flex items-center justify-center mt-10">
                      <img
                        className="w-6/12 items-center justify-center"
                        src={item.imageUrl}
                        width={628}
                        height={426}
                        alt={item.title}
                      />
                    </div>
                    <h4 className="h4 mb-4">{item.title}</h4>
                    <p className="body-2 text-n-4">{item.text}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
};

export default Roadmap;
