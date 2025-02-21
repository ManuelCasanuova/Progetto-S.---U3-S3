import { Col, Row } from "react-bootstrap";
import CardGenerator from "./CardGenerator";

const GridGenerator = () => {
  return (
    <Row>
      <Col xs={10}>
        <h2></h2>
        <CardGenerator />
      </Col>
    </Row>
  );
};

export default GridGenerator;
