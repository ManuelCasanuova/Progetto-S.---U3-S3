import { Col, Row } from "react-bootstrap";
import CardGenerator from "./CardGenerator";

const GridGenerator = ({ artistName }) => {
  return (
    <Row>
      <Col xs={10}>
        <h2>{artistName}</h2>
        <CardGenerator artistName={artistName} />
      </Col>
    </Row>
  );
};

export default GridGenerator;
