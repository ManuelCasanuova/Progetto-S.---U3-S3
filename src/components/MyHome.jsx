import { Container, Row } from "react-bootstrap";
import MyAside from "./MyAside";
import MyMain from "./MyMain";

const MyHome = () => {
  return (
    <Container fluid>
      <Row>
        <MyAside />
        <MyMain />
      </Row>
    </Container>
  );
};

export default MyHome;
