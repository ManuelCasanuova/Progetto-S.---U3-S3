import { useSelector, useDispatch } from "react-redux";
import { Col, Row, Image } from "react-bootstrap";
import { addToFavoritesAction, selectTrackAction } from "../redux/actions";
import { Heart } from "react-bootstrap-icons";

const FetchComponent = () => {
  const dispatch = useDispatch();

  const artistSongs = useSelector((state) => state.artistSongs.artistSongs);
  const artist = useSelector((state) => state.search.search);
  console.log("Artista:", artist);
  console.log("Dati artistSongs nel componente:", artistSongs);

  return (
    artistSongs &&
    artistSongs.length > 0 && (
      <Row>
        <Col xs={10}>
          <h2 className="text-white">{artist}</h2>
          <Row xs={1} sm={2} lg={3} xl={4} className="imgLinks py-3">
            {artistSongs.slice(0, 4).map((song) => (
              <Col className="text-center" key={song.id}>
                <Image
                  fluid
                  src={song.album.cover}
                  alt={song.album.title}
                  onClick={() => dispatch(selectTrackAction(song))}
                />
                <p className="mb-0">Track: {song.title}</p>
                <span>
                  <Heart color="red" size={20} onClick={() => dispatch(addToFavoritesAction(song))} />
                </span>
                <p className="mt-0 pt-1">Artist: {song.artist.name}</p>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    )
  );
};

export default FetchComponent;
