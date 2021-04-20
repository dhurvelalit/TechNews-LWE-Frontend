import { React, useState } from "react";
import TechNewsAppBar from "../../components/appBar/appBar";
import NewsArticle from "./newsArticle";
// import NewsItems from "./newsItems";

const HomePage = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  return (
    <div>
      <TechNewsAppBar drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />
      {/* <NewsItems /> */}
      <NewsArticle />
    </div>
  );
};

export default HomePage;
