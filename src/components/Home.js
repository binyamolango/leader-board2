import Container from "react-bootstrap/Container";
import Score from "./RecentScore";
import AddScore from "./AddScore";

const Home = () => {
  return (
    <div className="home-page">
      <Container>
        <h1>Leader Board</h1>
        <div className="home-row">
          <Score />
          <AddScore />
        </div>
      </Container>
    </div>
  );
}
 
export default Home;