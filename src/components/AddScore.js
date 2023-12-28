import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const AddScore = () => {
  return (
    <div className="add-score">
      <h2>Add your score</h2>
      <Form className='form'>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Control type="text" placeholder="Your name" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Control type="number" placeholder="Your score" required />
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