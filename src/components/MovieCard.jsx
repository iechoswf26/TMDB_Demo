import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import DefaultPoster from "../assets/Default_No_Image_Available.png"

const MovieCard = ({data}) => {

    const {overview, title, vote_average, poster_path} = data;

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img
                variant="top"
                src={`https://image.tmdb.org/t/p/w500${poster_path}` || DefaultPoster}
                loading={"lazy"}
                alt={title || "The movie title is not listed. "}
            />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    Plot: {overview}
                </Card.Text>
                <Card.Text>Average Vote Count: {vote_average}</Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>

    )
}

export default MovieCard;