const RecentScoreList = (props) => {
  const { scores } = props;
  return (
    scores.map(score => (
      <tr key={score.id}>
        <td>{score.id}</td>
        <td>{score.name}</td>
        <td>{score.score}</td>
      </tr>
    ))
  );
}
 
export default RecentScoreList;