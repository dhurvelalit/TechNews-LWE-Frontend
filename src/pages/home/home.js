import { React, useState } from "react";
import TechNewsAppBar from "../../components/appBar/appBar";
import DefaultLayout from "./defaultLayout";

const HomePage = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  return (
    <div>
      <TechNewsAppBar drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />
      <DefaultLayout />
    </div>
  );
};

export default HomePage;
