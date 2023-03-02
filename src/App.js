
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import MyButton from "./components/MyButton/MyButton";




function App() {
  return (
    <>
<h1>Dynamic buttons</h1>

  <Container>
    <Row className="justify-content-center">
      <Col xs={12}>
      
      <div>
        <h1>Primary</h1>
      <MyButton name={"Mini"} className={"red"} />
      <MyButton name={"Tiny"} className={"orange"} />
      <MyButton name={"Small"} className={"yellow"} />
      <MyButton name={"Medium"} className={"blue"} />
      <MyButton name={"Large"} className={"green"} />
      <MyButton name={"Big"} className={"big"} />
      <MyButton name={"Huge"} className={"huge"} />
      <MyButton name={"Massive"} className={"mass"} />
      </div>



      
  <div>
  <h1> Default</h1>
      
      <MyButton name={"Mini"} className={"red1"} />
     <MyButton name={"Tiny"} className={"orange1"} />
     <MyButton name={"Small"} className={"yellow1"} />
     <MyButton name={"Medium"} className={"blue1"} />
     <MyButton name={"Large"} className={"green1"} />
     <MyButton name={"Big"} className={"big1"} />
     <MyButton name={"Huge"} className={"huge1"} />
     <MyButton name={"Massive"} className={"mass1"} />

  </div>


  <div>
  <h1> Basic</h1>
      
      <MyButton name={"Mini"} className={"red2"} />
     <MyButton name={"Tiny"} className={"orange2"} />
     <MyButton name={"Small"} className={"yellow2"} />
     <MyButton name={"Medium"} className={"blue2"} />
     <MyButton name={"Large"} className={"green2"} />
     <MyButton name={"Big"} className={"big2"} />
     <MyButton name={"Huge"} className={"huge2"} />
     <MyButton name={"Massive"} className={"mass2"} />

  </div>
      </Col>
    </Row>
  </Container>
    </>
  )
}

export default App;
