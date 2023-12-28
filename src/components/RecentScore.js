import Button from "react-bootstrap/Button";
import Table from 'react-bootstrap/Table';
import Spinner from 'react-bootstrap/Spinner';
import Alert from 'react-bootstrap/Alert';
import RecentScoreList from "./RecentScoreList";
import useFetch from "./useFetch";

const Score = () => {
  const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Br6UkpCmhdjB8SRuRDKD/scores/';

  const { data: scores, isPending, error, setError, fetchData } = useFetch(url);

  const handleRefresh = () => {
    fetchData(url);
  }

  return (
    <div className="recent-score">
      <div className="refresh">
        <h2>Recent scores</h2>
        <Button onClick={handleRefresh} variant="secondary">Refresh</Button>
      </div>
      {isPending && (
        <div className="spinner__loading">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      )}
      {error && (
        <div className='error__message'>
          <Alert variant="danger" onClose={() => setError(null)} dismissible>
            <Alert.Heading>{error}</Alert.Heading>
            <p>
              The system is not able to reach the required server for fetching the data.
              There could some problem with the API address.
            </p>
          </Alert>
        </div>
      )}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {scores && <RecentScoreList scores={scores} />}
        </tbody>
      </Table>
    </div>
  );
}
 
export default Score;