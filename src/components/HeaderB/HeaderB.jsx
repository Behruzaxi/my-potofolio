import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { Form } from 'react-router-dom'
import "./head.css"
const one = require("../imagebex/one.png")
const two = require("../imagebex/two.png")
const three = require("../imagebex/three.png")

export default function HeaderB() {
    return (
        <>
            <Container>
                <Row>
                    <h5 className='work'>Featured works</h5>
                    <Col xs={10}>
                        <img src={one} className='one' />
                        <h3 className='des'>Weather project</h3>
                        <br></br>
                        <a href='https://joyful-maamoul-1cf1b4.netlify.app/'>
                            <button className='but'>Look</button>
                        </a>
                        <a href='https://github.com/Behruzaxi/weather-04'>
                            <button className='bhu'>GitHub</button>
                        </a>

                        <p className='veli'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit<br></br> officia consequat duis enim velit  mollit. Exercitation veniam<br></br> consequat sunt nostrud amet.</p>

                        <hr className='hr'></hr>
                    </Col>
                </Row>

                <Row>
                    <Col xs={10}>
                        <img src={two} className='one' />
                        <h3 className='des'>Create Project</h3>
                        <br></br>

                        <a href='https://stellar-crumble-a0176e.netlify.app/'>

                            <button className='twwobut'>Look</button>
                        </a>
                        <a href='https://github.com/Behruzaxi/bekhruz-crud'>
                            <button className='githbbt'>GitHub</button>
                        </a>

                        <p className='veli'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit<br></br> officia consequat duis enim velit  mollit. Exercitation veniam<br></br> consequat sunt nostrud amet.</p>

                        <hr className='hr'></hr>
                    </Col>
                </Row>

                <Row>
                    <Col xs={10}>
                        <img src={three} className='one' />
                        <h3 className='des'>Dynamic Buttons Project</h3>
                        <br></br>
                        <a href='https://courageous-bombolone-a5a7c4.netlify.app/'>
                            <button className='lokbt'>Look</button>
                        </a>
                        <a href='https://github.com/Behruzaxi/user-crud'>
                            <button className='lobtg'>GitHub</button>
                        </a>


                        <p className='veli'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit<br></br> officia consequat duis enim velit  mollit. Exercitation veniam<br></br> consequat sunt nostrud amet.</p>

                        <hr className='hr'></hr>
                    </Col>
                </Row>

                

            </Container>

        </>
    )
}
