import { useState } from 'react';
import './App.scss';
import { Board } from './components/board';
import { Resetbtn } from './components/resetButton';
import { Scoreboard } from './components/scoreboard';


function App() {

  //Set Game Over state to false
  const [gameOver, setGameOver] = useState(false);
  
  //reset board to null
  const resetBoard = () => {
    setGameOver(false);
    setBoard(Array(9).fill(null));
  }

  //index positions for a winning combination
  const WIN_CONDITIONS = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ]

  //Checks if the board position is winning and sets GameOver to true if someone won

  const checkWinner = (board) => {
    for(let i=0; i<WIN_CONDITIONS.length; i++) {
      const [x,y,z] = WIN_CONDITIONS[i];

      if (board[x] && board[x] === board[y] && board[y] === board[z]){
        setGameOver(true);
        return board[x];
      }
    }
  }



  //Score Keeping Section
  const [scores, setScores] = useState({xScore:0, oScore:0})

  //Initialises Board
  const [board, setBoard] = useState(Array(9).fill(null));

  //Sets X as the first player
  const [xPlaying, setXPlaying] = useState(true);



  //where the magic happens because you have to click to make a move
  const handleBoxClick = (boxIdx) => {
    const updatedBoard = board.map((value, idx) => {
      if (idx === boxIdx) {
        //If player is X then place an X otherwise place O
        return xPlaying === true ? 'X' : 'O';
      }
      else {
        return value;
      }
    })



    //checks if there has been a winner after each move and assigns that winner to the winner variable
    const winner = checkWinner(updatedBoard);




    //appends scores to add points to the winner
    if(winner) {
      if(winner === "O"){
        let {oScore} = scores;
        oScore += 1
        setScores({...scores, oScore})
      }
      else {
        let {xScore} = scores;
        xScore += 1
        setScores({...scores, xScore})
      }
    }



    //Updates Board with X or O depending on current player
    setBoard(updatedBoard);

    //Swaps player after each onClick
    setXPlaying(!xPlaying);

  }

  
  //Passing scores and xPlaying into scoreboard via props
  //if gameOver is true, resetBoard onClick
  return (
    <div className="App">
      <span className='title'>Tic-Tac-Toe</span>
      <Scoreboard scores={scores} xPlaying={xPlaying} />
      <Board board={board} onClick={gameOver ? resetBoard : handleBoxClick}/>
      <Resetbtn resetBoard={resetBoard} />
    </div>
  );
}

export default App;
