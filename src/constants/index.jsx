import blank_profile_picture from "../assets/testimonials/blank_profile_picture.png"


export const navItems = [
    { label: "Vouches", id: "testimonials"},
    { label: "Features", id: "features"},
    { label: "Roadmap", id: "roadmap"},
    { label: "Pricing", id: "pricing"},
    { label: "Impressum", id: "footer"},
    
  ];

export const ButtonItem = [
  {
    label: "our prices", id: "pricing"
  }
]

export const testimonials = [
    {
        user: "Jay Ajayi",
        image: blank_profile_picture,
        text: "OMG THANKS! Its time, that I can start my business now."
    },
    {
        user: "Minh Kumar",
        image: blank_profile_picture,
        text: "Without WebMarket, I wouldn't be there, where I am.. Thanks!"
    },
    {
        user: "Michael Martinez",
        image: blank_profile_picture,
        text: 
        "It's truly recommendable, that it's the perfect WebMarket!"
    },
    {
        user: "Juliane Hassan",
        image: blank_profile_picture,
        text: "In under 3 weeks I got a full functional perfect website, thanks!"
    },
    {
        user: "David Smith",
        image: blank_profile_picture,
        text: "I thought TikTok is a stupid App, but now I've discovered a lifetime chance."
    },
    {
        user: "Jennifer Jacqes",
        image: blank_profile_picture,
        text: "My Girlfriend(19) didn't trust me, this is real. But now I can say, it is!"
    }
]

import { FileCode2, ShieldAlert, Smartphone, PackageCheck, Brush, Headset } from 'lucide-react';

export const features = [
    {
        icon: <ShieldAlert />,
        text: "Warning",
        description: "You can reach our Support anytime you want after or before you buy/ bought any of our Products.I also recommend contacting us before you'll buy anything for consultation sessions.."
    },
    {
        icon: <FileCode2 />,
        text: "Full access",
        description: 
        "You will receive complete access to all used files, designs, texts and more in a Google-Drive document. If you have purchased the respective buying option, we will store your data."
    },
    {
        icon: <PackageCheck />,
        text: "Delivery",
        description: "You will get your Product as soon as possible. We will send you a Word Document with more Infos after getting the Product. The Product self is in a Google-drive Document. Much will be 2 Months.."
    },
    {
        icon: <Smartphone />,
        text: "Responsive Design",
        description: "At WiseWeb, we prefer a fully responsive design for all devices, be it PC, smartphone, or other devices."
    },
    {
        icon: <Brush />,
        text: "Optimize your Website",
        description: "We are optimizing your Product for 48 hours after you get the product. If you bought our 2 Weeks Buy Option, we'll optimize your Website for 2 weeks."
    },
    {
        icon: <Headset />,
        text: "24/7 Support",
        description: "The most important thing is, that we understand whatever you want from us, before buy anything contact our 24/7 Support!"
    },
]

import placeholder from "../assets/placeholder.png"
import step1 from '../assets/roadmap/step1.png'
import step2 from '../assets/roadmap/step2.png'
import step3 from '../assets/roadmap/step3.png'


export const roadmap = [
  {
    id: "0",
    title: "Step 1",
    text: "On first step go to our website, read our Feature-section and the frequently asked questions. You can look at our vouches what other people say to our website marketing. Look at our pricing and search a product for your budget. If you got any questions left go and contact us at the bottom of the website.",
    status: "done",
    imageUrl: step1,
    colorful: true,

  },
  {
    id: "1",
    title: "Step 2",
    text: "At second step you need to make a new account. Type our email and your userdefined password to log in.",
    status: "progress",
    imageUrl: step2,
  },
  {
    id: "2",
    title: "Step 3",
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
    status: "progress",
    imageUrl: step3,
  },
]

export const pricingOptions = [
    {
      title: "Starter",
      description: "ideal package to get really quick started into business",
      href: "",
      price: "$89.99",
      features: [
        "2 weeks delivery",
        "24/7 support",
        "own website template",
        "48 hours optimization",
        "1 week file access",
      ],
    },
    {
        title: "Advanced",
        description: "for medium-sized businesses offering custom design and more",
        href: "",
        price: "$189.99",
        features: [
          "2 weeks delivery",
          "quick 24/7 support",
          "home-page design",
          "48 hours optimization",
          "1 week file access",
        ],
      },
      {
        title: "Pro",
        description: "this package is ideal for successful businesses looking to grow including",
        href: "",
        price: "$324.99",
        features: [
          "1 month delivery",
          "quick 24/7 support",
          "full website design",
          "96 hours optimization",
          "1 month file access",
        ],
      },
      {
        title: "Premium",
        description: "perfect solution for a premium online presence with custom developments",
        href: "",
        price: "$554.99",
        features: [
          "3 months delivery",
          "quicker 24/7 support",
          "custom development, custom designs",
          "96 hours optimization",
          "1 year file access",
        ],
      },
      {
        title: "Business",
        description: "this package is designed for someone who want success as a boss",
        href: "/business",
        price: "$719.99",
        features: [
          "3 months delivery",
          "quickest 24/7 support",
          "email full access, documents and more",
          "120 hours optimization",
          "3 years file access",
        ],
      },
      
]