import { useState } from "react";
import "./styles.css";

export default function useBoard() {
  const [curr, setCurr] = useState("X");
  const [isWinner, setIsWinner] = useState(null);
  const [board, setBoard] = useState(Array(9).fill(""));

  const handleClick = (index) => {
    let localBoard = [...board];
    localBoard[index] = curr;
    setBoard(localBoard);
    curr === "X" ? setCurr("0") : setCurr("X");

    let xCount = localBoard.reduce((acc, currValue, currIndex) => {
      if (currValue === "X") {
        acc.push(currIndex);
      }
      return acc;
    }, []);
    let oCount = localBoard.reduce((acc, currValue, currIndex) => {
      if (currValue === "0") {
        acc.push(currIndex);
      }
      return acc;
    }, []);
    if (xCount.length >= 3 || oCount.length >= 3) {
      checkWinner(xCount, oCount);
    }
  };

  const winnerClass = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [0, 4, 8]
  ];

  const checkWinner = (xCount, oCount) => {
    for (let [a, b, c] of winnerClass) {
      if (xCount.includes(a) && xCount.includes(b) && xCount.includes(c)) {
        setIsWinner("X");
        // window.alert("X is Winner");
        setBoard(Array(9).fill(""));
        // setIsWinner(null);
      } else if (
        oCount.includes(a) &&
        oCount.includes(b) &&
        oCount.includes(c)
      ) {
        // window.alert("0 is Winner");
        setIsWinner("0");
        setBoard(Array(9).fill(""));
        // setIsWinner(null);
      } else if (xCount.length + oCount.length >= 9) {
        setIsWinner("Tiee");
        // window.alert("Tiee");
        setBoard(Array(9).fill(""));
        // setIsWinner(null);
      }
    }
  };

  return {
    isWinner,
    handleClick,
    board
  };
}
