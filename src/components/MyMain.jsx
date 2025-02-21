import CardGenerator from "./CardGenerator";
import GridGenerator from "./GridGenerator";

const MyMain = () => {
  return (
    <main className="col-12 col-md-9 offset-md-3 mainPage">
      <div className="row">
        <div className="col-9 col-lg-11 mainLinks d-none d-md-flex">
          <a href="#">TRENDING</a>
          <a href="#">PODCAST</a>
          <a href="#">MOODS AND GENRES</a>
          <a href="#">NEW RELEASES</a>
          <a href="#">DISCOVER</a>
        </div>
      </div>
      <GridGenerator artistName="Queen" />
      <GridGenerator artistName="Oasis" />
      <GridGenerator artistName="Tycho" />
    </main>
  );
};

export default MyMain;
