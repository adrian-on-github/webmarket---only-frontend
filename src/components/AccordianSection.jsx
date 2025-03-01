import Accordian, { AccordianItem } from './Accordian'
import Section from "./Section"
import Heading from "./Heading"

const AccordianSection = () => {
    return (
        <Section crosses>
            <div className='flex'>
             <Heading className="mb-[3rem] mt-[1rem] text-center" tag="Frequently asked Questions"/>
            </div>
           

            <Accordian>
                <AccordianItem value="1" trigger="Who am you speaking with?">
                    WebMarket is a german business from a me, called Adrian. Im speaking english and german and of course I'm the CEO of WebMarket.. 
                </AccordianItem>
                <AccordianItem value="2" trigger="What will happen after delivery?">
                   After delivery, you won't have much to do yourself. You will receive a step-by-step guide on how and where to insert, for example, your legal notice (Impressum) or your privacy policy so that they are visible on the website to everyone. The same applies to the topic of hosting; the reason I cannot do this for you has to do with legal reasons.
                </AccordianItem>
                <AccordianItem value="3" trigger="Why are the worktime gets more?">
                    Its very simple. A better product needs more time to do. If we have 5 times Business Product Websites to made in a few of weeks we can't do it in this time or you would get a Product with bugs or things wich are not working. We want that you get a Product like you want.
                </AccordianItem>
                <AccordianItem value="4" trigger='What is "custom development"?'>
                    Custom development is, that you will get own Databases, Logins, Forms / all what is important for your business. Custom development is not counting to home-page designing..
                </AccordianItem>
                <AccordianItem value="5" trigger="How you can contact WebMarket Service">
                    You can reach our support via our <a className="caption text-n-4 hover:text-white transition duration-150 cursor-pointer" target="_blank" href="">Discord</a> or you can add me on discord (swing.js). Thats the fastest way. Otherwise call us on +4915170073553.
                </AccordianItem>
                <AccordianItem value="6" trigger="What makes this investment worth it?">
                These prices are calculated based on hourly wages and time pressure; however, we require payment before we can hand over the website to you. The estimated revenue so far reflects these 'affordable' prices compared to what it could cost. Example from other <a className="caption text-n-4 hover:text-white transition duration-150 cursor-pointer" target="_blank" href="https://www.fuer-gruender.de/wissen/unternehmen-gruenden/website-erstellen/erstellen-lassen/ ">Studies</a>
                </AccordianItem>
            </Accordian>
        </Section>
    )
}

export default AccordianSection
