import { Col, Container, Image, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

const MyPlayer = () => {
  const selectedTrack = useSelector((state) => state.selectedTrack.selectedTrack);

  console.log("SONO SELECTE TRACK", selectedTrack);
  return (
    <Container fluid className="fixed-bottom bg-container pt-1">
      <Row className="h-100">
        {selectedTrack && (
          <Col lg={1} className="offset-lg-2">
            <Row>
              <Col>
                <Image className="ms-5" src={selectedTrack.album.cover} height={80} width={100} />
              </Col>
              <Col>
                <p>{selectedTrack.title}</p>
              </Col>
            </Row>
          </Col>
        )}
        <Col lg={8}>
          <Row className="h-100 flex-column justify-content-center align-items-center">
            <Col xs={6} md={4} className="playerControls">
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
              <div className="progress mt-3">
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
