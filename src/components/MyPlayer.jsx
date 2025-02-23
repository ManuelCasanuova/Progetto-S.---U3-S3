import { Col, Container, Image, Row } from "react-bootstrap";
import { Heart } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";

const MyPlayer = () => {
  const selectedTrack = useSelector((state) => state.selectedTrack.selectedTrack);
  const dispatch = useDispatch();

  console.log("SONO SELECTE TRACK", selectedTrack);
  return (
    <Container fluid className="fixed-bottom bg-container pt-1">
      <Row className="h-100">
        <Col lg={10} className="offset-lg-2">
          <Row className="h-100">
            <Col lg={3} className="ms-4">
              {selectedTrack && (
                <div className="d-flex align-items-center">
                  <Image src={selectedTrack.album.cover} height={80} width={90} />
                  <div className="ms-2">
                    <span className="text-white">{selectedTrack.title}</span>
                    <p className="text-white mb-0">{selectedTrack.artist.name}</p>
                  </div>
                </div>
              )}
            </Col>

            <Col xs={6} md={4} className="playerControls ">
              <div className="d-flex">
                <a href="#">
                  <img src="../src/assets/playerbuttons/shuffle.png" alt="shuffle" />
                </a>
                <a href="#">
                  <img src="../src/assets/playerbuttons/prev.png" alt="prev" />
                </a>
                <a href="#">
                  <img src="../src/assets/playerbuttons/play.png" alt="play" />
                </a>
                <a href="#">
                  <img src="../src/assets/playerbuttons/next.png" alt="next" />
                </a>
                <a href="#">
                  <img src="../src/assets/playerbuttons/repeat.png" alt="repeat" />
                </a>
              </div>
              <div className="progress mt-3" style={{ color: "white", backgroundColor: "#414141", height: "3px" }}>
                <div role="progressbar"></div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
export default MyPlayer;
