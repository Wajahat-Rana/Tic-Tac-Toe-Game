import React, { useRef, useState } from 'react'
import './TicTacToe.css'
import circle from '../assets/circle.png'
import cross from '../assets/cross.png'

let data = ["","","","","","","","",""]

const TicTacToe = () => {


    const box1 = useRef(null)
    const box2 = useRef(null)
    const box3 = useRef(null)
    const box4 = useRef(null)
    const box5 = useRef(null)
    const box6 = useRef(null)
    const box7 = useRef(null)
    const box8 = useRef(null)
    const box9 = useRef(null)

    let boxes_array = [box1,box2,box3,box4,box5,box6,box7,box8,box9]

    const title = useRef(null);
    let [count, setCount] = useState(0)
    let [lock, setLock] = useState(false)

    const togglePlayer = (e,boxNum)=>{
        if (lock || data[boxNum] !== "") {
            return 0; // If the game is locked or the box is already filled, do nothing
        }
        if(count%2===0){
            e.target.innerHTML = `<img src = '${circle}'>}`
            data[boxNum] = "o"
            setCount(++count)
        }
        else{
            e.target.innerHTML = `<img src = '${cross}'>}`
            data[boxNum] = "x"
            setCount(++count)
        }
        checkWinner();


    }
    
    const checkWinner = ()=>{
        if(data[0]===data[1]&&data[1]===data[2]&&data[2]!==""){
            console.log("FirstLine")
            winner(data[2])
        }
        else if(data[3]===data[4]&&data[4]===data[5]&&data[5]!==""){
            winner(data[5])
        }
        else if(data[6]===data[7]&&data[7]===data[8]&&data[8]!==""){
            winner(data[8])
        }
        else if(data[0]===data[4]&&data[4]===data[8]&&data[8]!==""){
            winner(data[8])
        }
        else if(data[2]===data[4]&&data[4]===data[6]&&data[6]!==""){
            winner(data[6])
        }
        else if(data[1]===data[4]&&data[4]===data[7]&&data[7]!==""){
            winner(data[7])
        }
        else if(data[0]===data[3]&&data[3]===data[6]&&data[6]!==""){
            winner(data[6])
        }
        else if(data[2]===data[5]&&data[5]===data[8]&&data[8]!==""){
            winner(data[8])
        }
        else if(count === 9){
            winner("Draw")
        }
    }
    
      const winner = (won)=>{
        setLock(true);
        if(won === 'x'){
            title.current.innerHTML = `Congratulations! <img src='${cross}'> Won`
        }
        else if(won=== 'o'){
            title.current.innerHTML = `Congratulations! <img src='${circle}'> Won`
        }
        else{
            title.current.innerHTML = `Its A Draw! Give it Another Shot`
        }
      }
      const reset = ()=>{
        setLock(false);
        boxes_array.map((box)=>{
            box.current.innerHTML = "";
        })
        title.current.innerHTML = "|Tic Tac Toe|"
        setCount(0)
      data.fill("")
      }


    return (
        <>
        <div className="container">
            <h1 ref={title} id='title'>|Tic Tac Toe|</h1>
            <div className="board">
                <div className="row1">
                    <div className="boxes" ref={box1} onClick={(e)=>{togglePlayer(e,0)}}></div>
                    <div className="boxes" ref={box2} onClick={(e)=>{togglePlayer(e,1)}}></div>
                    <div className="boxes" ref={box3} onClick={(e)=>{togglePlayer(e,2)}}></div>
                </div>
                <div className="row2">
                    <div className="boxes" ref={box4} onClick={(e)=>{togglePlayer(e,3)}}></div>
                    <div className="boxes" ref={box5} onClick={(e)=>{togglePlayer(e,4)}}></div>
                    <div className="boxes" ref={box6} onClick={(e)=>{togglePlayer(e,5)}}></div>
                </div>
                <div className="row3">
                    <div className="boxes" ref={box7} onClick={(e)=>{togglePlayer(e,6)}}></div>
                    <div className="boxes" ref={box8} onClick={(e)=>{togglePlayer(e,7)}}></div>
                    <div className="boxes" ref={box9} onClick={(e)=>{togglePlayer(e,8)}}></div>
                </div>
            </div>
            <button id='resetBtn' onClick={reset}>Reset</button>
        </div>
        <div className="footer">
        | Feb 25 2024 | Developed By RWS |
        </div>
        </>
    )
}

export default TicTacToe