import React from 'react'
import "./MyButton.css"

export default function MyButton(props) {
  return (
    <>
  <button  className={`basic-button ${props.className || "blue"}`} onClick={props.onClick}  type={props.type} > {props.name || "button"} </button>

    </>
  )
}
