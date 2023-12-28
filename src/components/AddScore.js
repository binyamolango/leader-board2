import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

const AddScore = () => {
  const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Br6UkpCmhdjB8SRuRDKD/scores/';

  const [user, setUser] = useState('');
  const [score, setScore] = useState('');
  const [isPending, setIsPending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const scoreAdded = { user, score };

    setIsPending(true);

    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(scoreAdded)
    }).then(() => {
      setUser('');
      setScore('');
      setIsPending(false);
    });
  }

  return (
    <div className="add-score">
      <h2>Add your score</h2>
      <Form className='form' onSubmit={(e) => handleSubmit(e)}>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Control
            type="text"
            placeholder="Your name"
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
          {!isPending && <Button variant="secondary" type="submit">Submit</Button>}
          {isPending && <Button variant="secondary" type="submit" disabled>Submitting score...</Button>}
        </div>
      </Form>
    </div>
  );
}
 
export default AddScore;