import React from 'react';

const squareStyle = {
    border: "2px solid blue",
    marginTop: "-1px",
    marginRight: "-1px",
    float: "left",
    width: "200px",
    height: "200px",
    textAlign: "center",
    padding: '0px',
    cursor:'pointer',
    fontSize:'60px',
    background:"#dfeded"
}
const Square = (props) => {
    return (
        <button style={squareStyle} onClick={()=>props.handleMove(props.el,props.index)}>
            {props.el}
        </button>
    );
};

export default Square;