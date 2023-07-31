import React from "react";
import Hero from "../components/Hero";
import { useSelector } from "react-redux";

const HomeScreen = () => {
  const { userInfo } = useSelector((state) => state.auth);
  return <>{userInfo ? <h1>Hello {userInfo.name}</h1> : <Hero />}</>;
};

export default HomeScreen;
