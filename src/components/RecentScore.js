import Button from "react-bootstrap/Button";
import Table from 'react-bootstrap/Table';

const Score = () => {
  return (
    <div className="recent-score">
      <div className="refresh">
        <h2>Recent scores</h2>
        <Button variant="secondary">Refresh</Button>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>50</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}
 
export default Score;