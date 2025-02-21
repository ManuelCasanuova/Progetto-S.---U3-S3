import { useEffect, useState } from "react";
import { Col, Image, Row } from "react-bootstrap";

const CardGenerator = ({ artistName }) => {
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    const fetchMusic = async () => {
      try {
        let response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${artistName}`);
        if (response.ok) {
          let { data } = await response.json();
          setTracks(data.slice(0, 4));
          console.log(data);
        } else {
          throw new Error("Errore nel recupero delle canzoni");
        }
      } catch (err) {
        console.log("Errore:", err);
      }
    };

    fetchMusic();
  }, [artistName]);

  return (
    <Row xs={1} sm={2} lg={3} xl={4} className="imgLinks py-3">
      {tracks.map((track) => (
        <Col className="text-center" key={track.album.id}>
          <Image fluid src={track.album.cover} alt={track.album.title} />
          <p className="mb-0">Track:{track.title}</p>
          <p className="mb-0">Artist:{track.artist.name}</p>
        </Col>
      ))}
    </Row>
  );
};
export default CardGenerator;
