import React from "react";
import HomePresenter from "./HomePresenter";

export default () => {
  console.log(window.location.pathname);
  return <HomePresenter />;
};
