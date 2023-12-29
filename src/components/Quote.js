import Container from "react-bootstrap/Container";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import useFetch from "./useFetch";
import IsPending from "./IsPending";

const Quote = () => {
  const url = 'https://api.quotable.io/quotes/random';

  const { data: quote, isPending, error, setError, setIsPending, fetchData } = useFetch(url);

  const handleRefresh = () => {
    setIsPending(true);
    fetchData(url);
  }

  return (
    <div className="quote-page">
      <Container>
        <h1>Random Quote</h1>
        <div className="quote-card">
          <Card>
            <Card.Header>Quote</Card.Header>
            <IsPending isPending={isPending} error={error} setError={setError} />
            <Card.Body>
              <blockquote className="blockquote mb-0">
                <p>
                  {' '}
                  {quote && quote[0].content}{' '}
                </p>
                <footer className="blockquote-footer">
                  <cite title="Source Title">{quote && quote[0].author}</cite>
                </footer>
                {!isPending && <Button onClick={handleRefresh} variant="secondary">Refresh</Button>}
                {isPending && <Button onClick={handleRefresh} variant="secondary" disabled>Getting your quote...</Button>}
              </blockquote>
            </Card.Body>
          </Card>
        </div>
      </Container>
    </div>
  );
}
 
export default Quote;