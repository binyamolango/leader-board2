import Button from "react-bootstrap/Button";
import Table from 'react-bootstrap/Table';
import RecentScoreList from "./RecentScoreList";
import useFetch from "./useFetch";
import IsPending from "./IsPending";

const RecentScore = () => {
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
      <IsPending isPending={isPending} error={error} setError={setError} />
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
 
export default RecentScore;