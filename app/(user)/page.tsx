import React from "react";
import Banner from "@/components/Banner";
import HomeBanner from "@/components/HomeBanner";
import NewArrival from "@/components/NewArrival";

// import Jewels from "@/assets/Assesories.jpeg";
import Men from "@/public/assets/men.webp";
import Women from "@/public/assets/WOMEN.webp";
import Fabrics from "@/public/assets/fabrics.webp";
import Unisex from "@/public/assets/unisex.webp";
import BestSeller from "@/components/BestSeller";

const Homepage = async () => {
  const banners = [
    // {
    //   _id: 56,
    //   img: Jewels,
    //   text: "Jewels",
    // },
    {
      _id: 89,
      img: Men,
      text: "Men",
    },
    {
      _id: 85,
      img: Women,
      text: "Women",
    },
    {
      _id: 83,
      img: Fabrics,
      text: "Fabrics",
    },
    {
      _id: 77,
      img: Unisex,
      text: "Unisex",
    },
  ];
  return (
    <main className="text-sm min-h-screen">
      <Banner banners={banners} />
      <NewArrival />
      <HomeBanner />
      <BestSeller />
    </main>
  );
};

export default Homepage;
