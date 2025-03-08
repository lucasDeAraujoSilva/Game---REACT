import "./GameOver.css";

const GameOver = ({ retry, score }) => {
  return (
    <div>
      <h2>Fim de jogo!</h2>
      <h3 className="tip">
        Sua pontuação foi: <span>{score}</span>
      </h3>
      <button onClick={retry}>Reiniciar o jogo</button>
    </div>
  );
};

export default GameOver;
