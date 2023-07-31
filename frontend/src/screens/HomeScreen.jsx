import React from "react";
import Hero from "../components/Hero";
import UserHero from "../components/UserHero/UserHero";
import { useSelector } from "react-redux";

const HomeScreen = () => {
  const { userInfo } = useSelector((state) => state.auth);
  return <>{userInfo ? <UserHero userData={userInfo} /> : <Hero />}</>;
};

export default HomeScreen;
