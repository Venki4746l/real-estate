const price = (price) => {
  Number.prototype.format = function (n, x) {
    var re = "\\d(?=(\\d{" + (x || 3) + "})+" + (n > 0 ? "\\." : "$") + ")";
    return this.toFixed(Math.max(0, ~~n)).replace(new RegExp(re, "g"), "$&,");
  };
  return price.format();
};
const agents = [
  {
    id: 1,
    name: "Dinesh gopi",
    email: "Dinesh@gmail.com",
    phone: "+91 9989197264",
    address: "guntur",
    state: "Andhra Pradesh",
    town: "guntur",
    photo: "agent2.jpg",

    about:
      "he is real-estate agent in the industry for 7 years ",
    social: {
      facebook: "https://www.facebook.com/kevin.caster.9655/",
      instagram: "https://www.facebook.com/kevin.caster.9655/",
      twitter: "https://www.facebook.com/kevin.caster.9655/",
      linkedin: "https://www.facebook.com/kevin.caster.9655/",
    },
    featured: true,
    listings: [
      {
        id: 1,
        title: "Apartment for rent",
        slug: "apartment-for-rent",
        price: price(35000),
        location: "Guntur",
        description:
          "There are many variations of Apartments available, but the majority have suffered alteration ",
        images: ["image2.jpg", "image3.jpg", "image7.jpg", "image8.jpg"],
        amenities: [
          "Air Conditioning",
          "Security System",
          "Parking Space",
          "Gym Room",
          "Free WIFI",
          "Fire Place",
        ],
        agent: {
          name: "Varshitha",
          image: "agent1.jpg",
        },
        features: {
          bedrooms: 3,
          status: true,
          garage: 1,
          elevator: true,
          kitchen: true,
        },
        address: {
          address: "Rajendhra nagar 3rd lane ",
          state: "Andhra Pradesh",
          city: "Guntur",
          street: "Rajendhra nagar",
          area: "gardens",
        },

        featured: true,
        type: "rental",
        listedIn: "rentals",
        category: "Apartments",
      },
      {
        id: 2,
        title: "House for Sell",
        slug: "house-for-sell",
        price: price(35000),
        location: "Nellore",
        description:
          "There are many variations of apartments available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly",
        images: ["image8.jpg", "image3.jpg", "image7.jpg", "image8.jpg"],
        amenities: [
          "Air Conditioning",
          "Security System",
          "Parking Space",
          "Gym Room",
          "Free WIFI",
          "Fire Place",
        ],
        agent: {
          name: "krishna",
          image: "agent3.jpg",
        },
        features: {
          bedrooms: 3,
          status: true,
          garage: 1,
          elevator: true,
          kitchen: true,
        },
        address: {
          address: "guntur",
          state: "andhra pradesh",
          city: "guntur",
          street: "gardens",
          area: "2nd cross lane",
        },
        featured: true,
        type: "rental",
        listedIn: "rentals",
        category: "Houses",
      },
    ],
  },
  {
    id: 2,
    name: "bhavya",
    email: "bhavya@gmail.com",
    phone: "+919898263674",
    address: "guntur",
    state: "andhra pradesh",
    town: "2nd town",
    about:
      "best flat and nice environment",
    social: {
      facebook: "https://www.facebook.com/kevin.caster.9655/",
      instagram: "https://www.facebook.com/kevin.caster.9655/",
      twitter: "https://www.facebook.com/kevin.caster.9655/",
      linkedin: "https://www.facebook.com/kevin.caster.9655/",
    },
    featured: true,
    photo: "agent4.jpg",
    listings: [
      {
        id: 1,
        title: "Apartment for rent",
        slug: "apartment-for-rent",
        price: price(35000),
        location: "guntur",
        description:
          "There are many variations of apartments available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly",
        images: ["image2.jpg", "image3.jpg", "image7.jpg", "image8.jpg"],
        amenities: [
          "Air Conditioning",
          "Security System",
          "Parking Space",
          "Gym Room",
          "Free WIFI",
          "Fire Place",
        ],
        agent: {
          name: "tejaswini",
          image: "agent1.jpg",
        },
        features: {
          bedrooms: 3,
          status: true,
          garage: 1,
          elevator: true,
          kitchen: true,
        },
        address: {
          address: "guntur",
          state: "andhra pradesh",
          city: "guntur",
          street: "maruthi nagar 2nd lane",
          area: "hanumaiah company",
        },

        featured: true,
        type: "rental",
        listedIn: "rentals",
        category: "Apartments",
      },
      {
        id: 2,
        title: "House for Sell",
        slug: "house-for-sell",
        price: price(35000),
        location: "guntur",
        description:
          "There are many variations of apartments available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly",
        images: ["image8.jpg", "image3.jpg", "image7.jpg", "image8.jpg"],
        amenities: [
          "Air Conditioning",
          "Security System",
          "Parking Space",
          "Gym Room",
          "Free WIFI",
          "Fire Place",
        ],
        agent: {
          name: "jagadeesh",
          image: "agent3.jpg",
        },
        features: {
          bedrooms: 3,
          status: true,
          garage: 1,
          elevator: true,
          kitchen: true,
        },
        address: {
          address: "guntur",
          state: "andhra pradesh",
          city: "guntur",
          street: "Tengecha St",
          area: "lodge center",
        },
        featured: true,
        type: "rental",
        listedIn: "rentals",
        category: "Houses",
      },
    ],
  },
  {
    id: 4,
    name: "Joram Davies",
    email: "joram@gmail.com",
    phone: "+918206789502",
    address: "P.O BOX 2456 Nairobi",
    county: "Nairboi",
    town: "Nairobi",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea",
    social: {
      facebook: "https://www.facebook.com/kevin.caster.9655/",
      instagram: "https://www.facebook.com/kevin.caster.9655/",
      twitter: "https://www.facebook.com/kevin.caster.9655/",
      linkedin: "https://www.facebook.com/kevin.caster.9655/",
    },
    photo: "agent3.jpg",
    featured: true,
    listings: [
      {
        id: 1,
        title: "Apartment for rent",
        slug: "apartment-for-rent",
        price: price(35000),
        location: "Mombasa",
        description:
          "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly",
        images: ["image2.jpg", "image3.jpg", "image7.jpg", "image8.jpg"],
        amenities: [
          "Air Conditioning",
          "Security System",
          "Parking Space",
          "Gym Room",
          "Free WIFI",
          "Fire Place",
        ],
        agent: {
          name: "Elizabeth Keen",
          image: "agent1.jpg",
        },
        features: {
          bedrooms: 3,
          status: true,
          garage: 1,
          elevator: true,
          kitchen: true,
        },
        address: {
          address: "Nairobi Westlands",
          county: "Nairobi",
          city: "Nairobi",
          street: "Tengecha St",
          area: "Nairobi",
        },

        featured: true,
        type: "rental",
        listedIn: "rentals",
        category: "Apartments",
      },
      {
        id: 2,
        title: "House for Sell",
        slug: "house-for-sell",
        price: price(35000),
        location: "Nakuru",
        description:
          "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly",
        images: ["image8.jpg", "image3.jpg", "image7.jpg", "image8.jpg"],
        amenities: [
          "Air Conditioning",
          "Security System",
          "Parking Space",
          "Gym Room",
          "Free WIFI",
          "Fire Place",
        ],
        agent: {
          name: "Kevin Caster",
          image: "agent3.jpg",
        },
        features: {
          bedrooms: 3,
          status: true,
          garage: 1,
          elevator: true,
          kitchen: true,
        },
        address: {
          address: "Nairobi Westlands",
          county: "Nairobi",
          city: "Nairobi",
          street: "Tengecha St",
          area: "Nairobi",
        },
        featured: true,
        type: "rental",
        listedIn: "rentals",
        category: "Apartments",
      },
    ],
  },
];

export default agents;
