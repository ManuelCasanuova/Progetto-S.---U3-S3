import { useEffect, useState } from "react";
import { Col, Image, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import { Heart, HeartFill } from "react-bootstrap-icons";
import { addToFavoritesAction, selectTrackAction } from "../redux/actions";

const CardGenerator = ({ artistName }) => {
  const [tracks, setTracks] = useState([]);
  const dispatch = useDispatch();

  const favourites = useSelector((state) => state.favourite);

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
    <Row>
      <Col xs={10}>
        <h2 className="text-white">{artistName}</h2>
        <Row xs={1} sm={2} lg={3} xl={4} className="imgLinks py-3">
          {tracks.map((track) => (
            <Col className="text-center" key={track.id}>
              <Image
                fluid
                src={track.album.cover}
                alt={track.album.title}
                onClick={() => dispatch(selectTrackAction(track))}
              />
              <p className="mb-0">Track: {track.title}</p>
              <span>
                <Heart color="red" size={20} onClick={() => dispatch(addToFavoritesAction(track))} />
              </span>
              <p className="mt-0 pt-1">Artist: {track.artist.name}</p>
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  );
};
export default CardGenerator;
