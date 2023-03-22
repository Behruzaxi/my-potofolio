import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "./head.css"
const bir = require("../imagebex/bir.png")
const ikki = require("../imagebex/ikki.png")
const uch = require("../imagebex/uch.png")

export default function HeaderB() {
    return (
        <>
            <Container>
                <Row>
                    <h5 className='work'>Featured works</h5>
                    <Col xs={12} lg={12} className='d-block d-sm-none'>
                        <img className='one' src={bir} alt="" />
                        <h3 id='weather-responsive'>Weather project</h3>
                        <div id='date-info'>
                            <a href="https://joyful-maamoul-1cf1b4.netlify.app/">
                                <button id='date'>Look</button>
                            </a>
                            <a href="https://github.com/Behruzaxi/weather-04" id='github-link'>GitHub</a>
                        </div>
                        <p id='info-responsive'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia <br /> consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>

                    </Col>
                    <Col xs={12} lg={12} className='d-block d-sm-none'>
                        <img className='one' src={bir} alt="" />
                        {/* <h3 id='weather-responsive'></h3> */}
                        <div id='date-info'>
                            <a href="https://stellar-crumble-a0176e.netlify.app/'>">
                                <button id='date'>Look</button>
                            </a>
                            <a href="https://github.com/Behruzaxi/bekhruz-crud" id='github-link'>GitHub</a>
                        </div>
                        <p id='info-responsive'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia <br /> consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>

                    </Col>
                    <Col xs={12} lg={12} className='d-block d-sm-none'>
                        <img className='one' src={bir} alt="" />
                        <h3 id='weather-responsive'>Dynmic buttons</h3>
                        <div id='date-info'>
                            <a href="https://courageous-bombolone-a5a7c4.netlify.app/">
                                <button id='date'>Look</button>
                            </a>
                            <a href="https://github.com/Behruzaxi/user-crud" id='github-link'>GitHub</a>
                        </div>
                        <p id='info-responsive'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia <br /> consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>

                    </Col>





                    <Col xs={5} lg={10} className='d-none d-sm-block'>
                        <img className='one' src={bir} alt="" />
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
                    <Col xs={5} lg={10} className='d-none d-sm-block'>
                        <img className='one' src={ikki} alt="" />
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
                    <Col xs={5} lg={10} className='d-none d-sm-block'>
                        <img className='one' src={uch} alt="" />
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
