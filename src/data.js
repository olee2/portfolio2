import ecom from "./assets/ecom.png";
import holidaze from "./assets/holidaze.png";
import auction from "./assets/auction.png";

export const data = [
  {
    name: "The Auction House",
    type: "Auction Site",
    description: `My second year semester project at Noroff. An auction site where a user can register, login, make bids and put objects up for auction. The API for the project was provided by Noroff.`,
    site_url: "https://the-auction-house.netlify.app/",
    tech: ["html", "css", "js", "bootstrap"],
    git_url: "https://github.com/olee2/auction-house",
    img: auction,
  },
  {
    name: "Ecom",
    type: "E-commerce Site",
    description:
      "This was the course assignment for the JS Frameworks course at Noroff. A simple e-commerce site built in react. API with products provided by Noroff.",
    site_url: "https://ecom-a1b.pages.dev/",
    git_url: "https://github.com/olee2/ecom",
    img: ecom,
  },
  {
    name: "Holidaze",
    type: "Accommodations Site",
    description:
      "My second year exam project at Noroff. A accommodation site where a user or venue manager can register, login, and book or publish venues. API provided by Noroff.",
    site_url: "https://noroff-csm.netlify.app/index.html",
    git_url: "https://github.com/olee2/Noroff-CSM",
    img: holidaze,
  },
];
