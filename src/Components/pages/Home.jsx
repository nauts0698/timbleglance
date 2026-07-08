import React from "react";
import Navbar from "../Navbar";
import Hero from "../Homepage/Hero";
import Solutions from "../Homepage/Solutions";
import Suraksha from "../Homepage/Suraksha";
import Industries from "../Homepage/Industries";
import Clients from "../Homepage/Clients";
import APIs from "../Homepage/Api";
import KycKyb from "../Homepage/KycKyb"
const Home = () => {
  return (
    <div className="bg-white">
      {/* <Navbar /> */}
      <Hero/>
      <Solutions/>
      <Suraksha/>
      <Industries/>
      <KycKyb/>
      <Clients/>
      <APIs/>
    </div>
  );
};

export default Home;