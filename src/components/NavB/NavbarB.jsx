import React from 'react'
import "./navb.css"
import { Col, Container, Row } from 'react-bootstrap'
const airstr = require("../imagebex/air.jpg")

export default function NavbarB() {
    return (
        <>


            <Container>
                <Row>
                    <Col>
                        <div className='nyu'>
                            <ul className='newpos'>
                                <li className='list_ny'>Works</li>
                                <li className='list_ny'>Blog</li>
                                <li className='list_ny'>Contact</li>
                            </ul>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col xs={6}>
                        <h1 className='hbir'>
                            Hi, I am Bekhruz,<br></br>
                            Creative Technologist
                        </h1>

                        <p className='pi'>
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet<br></br> sint. Velit officia consequat duis enim velit mollit. Exercitation veniam<br></br> consequat sunt nostrud amet.
                        </p>
                        
                        <img src={airstr} className='airst'/>

                        <button className='firbtn'>Download Resume</button>

                    </Col>
                </Row>

            </Container>
    
        </>
    )
}
