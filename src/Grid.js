import React, { useState } from 'react'
import Square from './Square'
import './Styles.css';

const Grid = (props) => {

    const checkNeighbours = (grid, row, col) => {
        let count = 1
        if(grid.length === 0) return
        if(grid.length === 1) return count = 1

        let rowCheck = grid[row][0].props
        let colCheck = grid[0][col].props

        if(row === rowCheck.row && (Math.abs(col - rowCheck.col) === 1) && rowCheck.value === 1) {
            count++
        }
        if(col === colCheck.col && (Math.abs(row - colCheck.row) === 1) && colCheck.value === 1) {
            count++
        }
        
        if(col === colCheck.col && row === rowCheck.row && colCheck.value === 1) {
            count++
        }

        return count;
    }

    const grid = []
    for (let row = 0; row < props.size; row ++) {
        grid.push([])
        for (let col = 0; col < props.size; col ++) {
            grid[row].push(
                <Square 
                    row={row}
                    col={col}
                    value={Math.floor(Math.random() * 2)}
                    mainColor={props.mainColor}
                    backgroundColor={props.backgroundColor}
                    connected={() => checkNeighbours(grid, row, col)}
                />)
        }
    };

    let board = grid.map((item, index) => (
        <div key={index} className="parent">
            {item.map((item2, index) => <div key={index}>{item2}</div>)}
        </div>));

    return (
        <div className="board">
            {board}
        </div>
    )
};

export default Grid;