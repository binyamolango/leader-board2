import Button from "react-bootstrap/Button";
import Table from 'react-bootstrap/Table';
import RecentScoreList from "./RecentScoreList";

const Score = () => {
  const scores = [
    {
      id: 1,
      name: "Bini",
      score: 50
    },
    {
      id: 2,
      name: "Micki",
      score: 50
    },
    {
      id: 3,
      name: "Beki",
      score: 80
    },
    {
      id: 4,
      name: "Buti",
      score: 90
    }
  ];

  return (
    <div className="recent-score">
      <div className="refresh">
        <h2>Recent scores</h2>
        <Button variant="secondary">Refresh</Button>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          <RecentScoreList scores={scores} />
        </tbody>
      </Table>
    </div>
  );
}
 
export default Score;