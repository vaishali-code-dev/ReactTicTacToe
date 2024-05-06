import "./styles.css";
import useBoard from "./useBoard";

export default function App() {
  const { isWinner, board, handleClick } = useBoard();

  return (
    <>
      <div className="App">
        {Array(9)
          .fill("")
          .map((_, index) => (
            <button
              className="cell"
              key={index}
              onClick={() => handleClick(index)}
              disabled={board[index] !== ""}
            >
              <p>{board[index]}</p>
            </button>
          ))}
      </div>
      {isWinner && isWinner !== "Tie" && <p>{isWinner} is Winner</p>}
      {isWinner && isWinner === "Tie" && <p>Match Draw</p>}
    </>
  );
}
