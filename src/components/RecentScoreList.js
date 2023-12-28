const RecentScoreList = (props) => {
  const { scores } = props;

  return (
    scores.result.map((score, idx) => (
      <tr key={idx}>
        <td>{score.user}</td>
        <td>{score.score}</td>
      </tr>
    ))
  );
}
 
export default RecentScoreList;