import Container from "react-bootstrap/Container";
import AddScore from "./AddScore";
import RecentScore from "./RecentScore";

const Home = () => {
  return (
    <div className="home-page">
      <Container>
        <h1>Leader Board</h1>
        <div className="home-row">
          <RecentScore />
          <AddScore />
        </div>
      </Container>
    </div>
  );
}
 
export default Home;