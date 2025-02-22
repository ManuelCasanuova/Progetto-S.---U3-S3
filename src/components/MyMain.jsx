import { Row } from "react-bootstrap";

import MyPlayer from "./MyPlayer";
import FetchComponent from "./fetchComponent";
import CardGenerator from "./CardGenerator";

const MyMain = () => {
  return (
    <>
      <main className="col-12 col-md-9 offset-md-3 mainPage ">
        <Row>
          <div className="col-9 col-lg-11 mainLinks d-none d-md-flex">
            <a href="#">TRENDING</a>
            <a href="#">PODCAST</a>
            <a href="#">MOODS AND GENRES</a>
            <a href="#">NEW RELEASES</a>
            <a href="#">DISCOVER</a>
          </div>
        </Row>
        <FetchComponent />
        <CardGenerator artistName="Queen" />
        <CardGenerator artistName="Oasis" />
        <CardGenerator artistName="Tycho" />
      </main>
      <MyPlayer />
    </>
  );
};

export default MyMain;
