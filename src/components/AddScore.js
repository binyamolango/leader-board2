import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

const AddScore = () => {
  const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Br6UkpCmhdjB8SRuRDKD/scores/';

  const [user, setUser] = useState('');
  const [score, setScore] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const scoreAdded = { user, score };

    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(scoreAdded)
    }).then(() => {
      setUser('');
      setScore('');
    })
  }

  return (
    <div className="add-score">
      <h2>Add your score</h2>
      <Form className='form' onSubmit={(e) => handleSubmit(e)}>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Control
            type="text"
            placeholder="Your user"
            required
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Control
            type="number"
            placeholder="Your score"
            required
            value={score}
            onChange={(e) => setScore(e.target.value)}
          />
        </Form.Group>
        <div className="submit-btn">
          <Button variant="secondary" type="submit">
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
}
 
export default AddScore;