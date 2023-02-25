import React from "react";
import ReactDom from "react-dom/client";

const Title = () => (
  <a href="/">
    <img
      className="logo"
      alt="logo"
      src="https://i.pinimg.com/736x/49/4c/28/494c28fd3aa149b13e013583f8fd9881.jpg"
    ></img>
  </a>
);

const Header = () => {
  return (
    <div
      style={{ backgroundColor: "red", fontSize: "20px" }}
      className="header"
    >
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const restaurantList = [
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "36018",
      name: "Zaitoon",
      uuid: "c14410f6-257b-445a-8c16-daa952cad60e",
      city: "8",
      area: "Thousand Lights",
      totalRatingsString: "1000+ ratings",
      cloudinaryImageId: "ac1staxtetolkvynv2ot",
      cuisines: [
        "Biryani",
        "Juices",
        "North Indian",
        "Chinese",
        "Arabian",
        "Mughlai",
        "Kebabs",
      ],
      tags: [],
      costForTwo: 50000,
      costForTwoString: "₹500 FOR TWO",
      deliveryTime: 33,
      minDeliveryTime: 33,
      maxDeliveryTime: 33,
      slaString: "33 MINS",
      lastMileTravel: 4.300000190734863,
      slugs: {
        restaurant: "zaitoon-nungambakkam-nungambakkam",
        city: "chennai",
      },
      cityState: "8",
      address:
        "13/33, Shafee Mohammed Road, Opposite to Apollo Children's Hospital, Thousand Lights, Nungabakkam, Chennai, Tamil Nadu 600034, India",
      locality: "Nungambakkam",
      parentId: 4555,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "60% off",
        shortDescriptionList: [
          {
            meta: "60% off | Use WELCOMEBACK",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "60% off up to ₹100 | Use code WELCOMEBACK",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "60% OFF",
        shortDescriptionList: [
          {
            meta: "Use WELCOMEBACK",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "60% off up to ₹100 | Use code WELCOMEBACK",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      ribbon: [
        {
          type: "PROMOTED",
        },
      ],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 3600,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 3600,
        message: "",
        title: "Delivery Charge",
        amount: "3600",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "cid=5996139~p=1~eid=00000186-8965-79aa-36d9-90d1008b0177",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "4.3 kms",
      hasSurge: false,
      sla: {
        restaurantId: "36018",
        deliveryTime: 33,
        minDeliveryTime: 33,
        maxDeliveryTime: 33,
        lastMileTravel: 4.300000190734863,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: true,
      avgRating: "4.3",
      totalRatings: 1000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "30791",
      name: "Tasty Kitchen",
      uuid: "259f8d36-4da0-47a8-9787-e4ee11f2aafb",
      city: "8",
      area: "Perambur",
      totalRatingsString: "1000+ ratings",
      cloudinaryImageId: "cyxyhx6wzgi9ogyapxym",
      cuisines: ["Biryani", "South Indian", "Chinese", "North Indian"],
      tags: [],
      costForTwo: 30000,
      costForTwoString: "₹300 FOR TWO",
      deliveryTime: 35,
      minDeliveryTime: 35,
      maxDeliveryTime: 35,
      slaString: "35 MINS",
      lastMileTravel: 7.400000095367432,
      slugs: {
        restaurant: "tasty-kitchen-kolathur-perambur",
        city: "chennai",
      },
      cityState: "8",
      address: "135A SRP colony main road perambur chennai- 82",
      locality: "Kolathur",
      parentId: 8920,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "FLAT100 off",
        shortDescriptionList: [
          {
            meta: "FLAT100 off | Use FLATDEAL",
            discountType: "Flat",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "FLAT100 off | Use FLATDEAL",
            discountType: "Flat",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "₹100 OFF",
        shortDescriptionList: [
          {
            meta: "Use FLATDEAL",
            discountType: "Flat",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "FLAT100 off | Use FLATDEAL",
            discountType: "Flat",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 7000,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 7000,
        message: "",
        title: "Delivery Charge",
        amount: "7000",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "7.4 kms",
      hasSurge: false,
      sla: {
        restaurantId: "30791",
        deliveryTime: 35,
        minDeliveryTime: 35,
        maxDeliveryTime: 35,
        lastMileTravel: 7.400000095367432,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.2",
      totalRatings: 1000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "16141",
      name: "Moonlight Takeaway & Delivery",
      uuid: "b3aec8e9-cdf4-4c66-bc14-b0d2639b7cfa",
      city: "8",
      area: "T. Nagar",
      totalRatingsString: "1000+ ratings",
      cloudinaryImageId: "o5vlkrbbjez8gbei4utj",
      cuisines: ["Indian", "Chinese", "Tandoor"],
      tags: [],
      costForTwo: 25000,
      costForTwoString: "₹250 FOR TWO",
      deliveryTime: 38,
      minDeliveryTime: 38,
      maxDeliveryTime: 38,
      slaString: "38 MINS",
      lastMileTravel: 7.300000190734863,
      slugs: {
        restaurant: "moonlight-takeaway-delivery-t-nagar-t-nagar",
        city: "chennai",
      },
      cityState: "8",
      address: "1/7, Gopalakrishna Street, Pondy Bazaar, T. Nagar, Chennai",
      locality: "Gopalakrishna Street",
      parentId: 11817,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 7000,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 7000,
        message: "",
        title: "Delivery Charge",
        amount: "7000",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 1,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "7.3 kms",
      hasSurge: false,
      sla: {
        restaurantId: "16141",
        deliveryTime: 38,
        minDeliveryTime: 38,
        maxDeliveryTime: 38,
        lastMileTravel: 7.300000190734863,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "IT_IS_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.0",
      totalRatings: 1000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "54084",
      name: "SS Hyderabad Briyani",
      uuid: "0c1b1cae-b5f7-4e9e-b05b-794c51fc7219",
      city: "8",
      area: "Perambur",
      totalRatingsString: "1000+ ratings",
      cloudinaryImageId: "zdf1hdfmszyekajg7ifo",
      cuisines: ["Biryani", "North Indian", "Chinese"],
      tags: [],
      costForTwo: 30000,
      costForTwoString: "₹300 FOR TWO",
      deliveryTime: 26,
      minDeliveryTime: 26,
      maxDeliveryTime: 26,
      slaString: "26 MINS",
      lastMileTravel: 4.599999904632568,
      slugs: {
        restaurant: "ss-hyderabad-biryani-perambur-perambur",
        city: "chennai",
      },
      cityState: "8",
      address:
        "No.94/, 73, A A Rd, Chinnaiyan Colony, Perambur, Chennai, Tamil Nadu 600011 opposite to perambur railway station",
      locality: "Perumbur Railway",
      parentId: 4824,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "Flat ₹125 off",
        shortDescriptionList: [
          {
            meta: "Flat ₹125 off on orders above ₹199",
            discountType: "Flat",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "Flat ₹125 off on orders above ₹199 | Use code FLAT125",
            discountType: "Flat",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "₹125 OFF",
        shortDescriptionList: [
          {
            meta: "Use SWIGGYWEEKENDS",
            discountType: "Flat",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "Flat ₹125 off on orders above ₹199 | Use code FLAT125",
            discountType: "Flat",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      ribbon: [
        {
          type: "PROMOTED",
        },
      ],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 3600,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 3600,
        message: "",
        title: "Delivery Charge",
        amount: "3600",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "cid=5846089~p=16~eid=00000186-8965-79aa-36d9-90d6008b100d",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "4.5 kms",
      hasSurge: false,
      sla: {
        restaurantId: "54084",
        deliveryTime: 26,
        minDeliveryTime: 26,
        maxDeliveryTime: 26,
        lastMileTravel: 4.599999904632568,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: true,
      avgRating: "4.5",
      totalRatings: 1000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "129725",
      name: "Hotel Farook",
      uuid: "199521d8-cf5d-41b0-9663-557ecbbef4fb",
      city: "8",
      area: "Purasaiwakkam",
      totalRatingsString: "1000+ ratings",
      cloudinaryImageId: "gbuvu9fca82lu0r7mdxl",
      cuisines: ["South Indian", "Arabian"],
      tags: [],
      costForTwo: 45000,
      costForTwoString: "₹450 FOR TWO",
      deliveryTime: 27,
      minDeliveryTime: 27,
      maxDeliveryTime: 27,
      slaString: "27 MINS",
      lastMileTravel: 3,
      slugs: {
        restaurant: "hotel-farook-purasavakkam-purasawalkam",
        city: "chennai",
      },
      cityState: "8",
      address: "152, Strahans Road, Ethiraj Gardens, Purasavakkam, Chennai",
      locality: "Purasavakkam",
      parentId: 17424,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "60% off",
        shortDescriptionList: [
          {
            meta: "60% off | Use WELCOMEBACK",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "60% off up to ₹100 | Use code WELCOMEBACK",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "60% OFF",
        shortDescriptionList: [
          {
            meta: "Use WELCOMEBACK",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "60% off up to ₹100 | Use code WELCOMEBACK",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 3600,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 3600,
        message: "",
        title: "Delivery Charge",
        amount: "3600",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "3 kms",
      hasSurge: false,
      sla: {
        restaurantId: "129725",
        deliveryTime: 27,
        minDeliveryTime: 27,
        maxDeliveryTime: 27,
        lastMileTravel: 3,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.3",
      totalRatings: 1000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "11479",
      name: "Burger King",
      uuid: "9db0490b-c551-496a-a354-bce98bf246e9",
      city: "8",
      area: "Thousand Lights",
      totalRatingsString: "1000+ ratings",
      cloudinaryImageId: "zggqzcw1muhht6tkwuba",
      cuisines: ["Burgers", "American"],
      tags: [],
      costForTwo: 35000,
      costForTwoString: "₹350 FOR TWO",
      deliveryTime: 47,
      minDeliveryTime: 47,
      maxDeliveryTime: 47,
      slaString: "47 MINS",
      lastMileTravel: 4.099999904632568,
      slugs: {
        restaurant: "burger-king-express-avenue-royapettah",
        city: "chennai",
      },
      cityState: "8",
      address:
        "Express Avenue, Gate 2 (or) 6, 3rd floor - food court, Club House Road, Royapettah, Chennai",
      locality: "Express Avenue",
      parentId: 166,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "60% off",
        shortDescriptionList: [
          {
            meta: "60% off | Use STEALDEAL",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "60% off up to ₹120 | Use code STEALDEAL",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "60% OFF",
        shortDescriptionList: [
          {
            meta: "Use STEALDEAL",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "60% off up to ₹120 | Use code STEALDEAL",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 3600,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 3600,
        message: "",
        title: "Delivery Charge",
        amount: "3600",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 1,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "4 kms",
      hasSurge: false,
      sla: {
        restaurantId: "11479",
        deliveryTime: 47,
        minDeliveryTime: 47,
        maxDeliveryTime: 47,
        lastMileTravel: 4.099999904632568,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "IT_IS_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.1",
      totalRatings: 1000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "73665",
      name: "Bismillah Biryani & Fast food",
      uuid: "110dece5-6621-446b-a17e-b03b70681442",
      city: "8",
      area: "Kolathur",
      totalRatingsString: "100+ ratings",
      cloudinaryImageId: "biztrxunzi2lklnrzgjf",
      cuisines: ["Tandoor", "Chinese", "Biryani", "Indian"],
      tags: [],
      costForTwo: 30000,
      costForTwoString: "₹300 FOR TWO",
      deliveryTime: 37,
      minDeliveryTime: 37,
      maxDeliveryTime: 37,
      slaString: "37 MINS",
      lastMileTravel: 8.300000190734863,
      slugs: {
        restaurant: "bismillah-briyani-fast-foods-kolathur-perambur",
        city: "chennai",
      },
      cityState: "8",
      address: "N0 4, balaji nagar main road, kolathur, chennai - 99",
      locality: "Perambur",
      parentId: 13976,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 7900,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 7900,
        message: "",
        title: "Delivery Charge",
        amount: "7900",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "8.3 kms",
      hasSurge: false,
      sla: {
        restaurantId: "73665",
        deliveryTime: 37,
        minDeliveryTime: 37,
        maxDeliveryTime: 37,
        lastMileTravel: 8.300000190734863,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "3.9",
      totalRatings: 100,
      new: false,
    },
    subtype: "basic",
  },
];

const RestaurantCard = ({ name, cuisines, cloudinaryImageId, avgRating }) => {
  //const { name, cuisines, cloudinaryImageId, avgRating } = restaurant.data;
  return (
    <div className="card">
      <img
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
          cloudinaryImageId
        }
      ></img>
      <h2>{name}</h2>
      <h3>{cuisines.join(" , ")}</h3>
      <h4>{avgRating + " Ratings"}</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="restaurant-list">
      {
        /*  <RestaurantCard restaurant={restaurantList[0]} /> 
      <RestaurantCard {...restaurantList[1].data} />*/

        restaurantList.map((restaurant) => {
          return (
            <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
          );
        })
      }
    </div>
  );
};

const Footer = () => {
  return <h1>Footer</h1>;
};

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
