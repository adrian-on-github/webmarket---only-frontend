import { testimonials } from "../constants"
import Section from "./Section"
import Heading from "./Heading"

const Testimonials = () => {
  return (
    <Section id="testimonials" crossesOffset crosses>
    <div className="tracking-wide mt-[2rem]">
      <div className="flex">
       <Heading classname="text-center" tag="our vouches"/>
      </div>
  <div className="flex flex-wrap justify-center">
    {testimonials.map((testimonial, index) => (
      <div key={index} className="sm:w-1/2 lg:w-1/3 px-4 py-2 mt-4">
        <div className="bg-neutral rounded-lg p-6 text-md border border-n-6 min-h-40">
        <p>{testimonial.text}</p>
        <div className="flex mt-14 items-start font-base">
          <img className="w-12 h-12 mr-3 rounded-full border:none" src={testimonial.image} alt={testimonial.user}  />
             <h6 className="mt-3 ">{testimonial.user}</h6>
        </div>
        </div>
      </div>
    ))}
  </div>
    </div>
    </Section>

  )
}

export default Testimonials