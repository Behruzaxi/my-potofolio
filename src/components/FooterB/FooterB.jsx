import React, { useEffect, useState } from 'react'
import "./foot.css"
import { Accordion, Button, Col, Container, DropdownButton, Form, ListGroup, Row } from 'react-bootstrap'
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TelegramIcon from '@mui/icons-material/Telegram';
import axios from 'axios';



export default function FooterB() {

    const [getdata, setGetdata] = useState()
    const [post, setPost] = useState()
    const [coment, setComent] = useState()

    const getAllData = () => {
        axios.get("https://newrepository-production.up.railway.app/data")
            .then((res) => {
                setGetdata(res?.data)
            })
    }

    const postUsers = () => {
        axios.post("https://newrepository-production.up.railway.app/data", { name: post, coment: coment })
            .then((data) => {
                alert(data.statusText)
                setPost("")
                setComent("")
            })
    }


    const delete_func = (id) => {
        axios.delete(`https://newrepository-production.up.railway.app/data/${id}`)
        // .then((res) => alert("deleted"))
        setGetdata(getdata.filter((el) => el.id !== id))
    }

    useEffect(() => {
        getAllData()
    }, [])


    return (
        <>

            <Container>

                <Row className='justify-content-center mt-3'>
                    <Col xs={6} >
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="write you name" value={post} onChange={(e) => setPost(e.target.value)} required />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Coment</Form.Label>
                                <Form.Control type="text" placeholder="write your coment" value={coment} onChange={(e) => setComent(e.target.value)} required />
                            </Form.Group>
                            <Button variant="primary" style={{ width: "100%" }} onClick={postUsers}>
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>

                <Row className='justify-content-center'>
                    <Col xs={6} className="mt-3">
                        <ListGroup>
                            {getdata?.map((user) => {
                                return (
                                    <>

                                        <DropdownButton id="dropdown-basic-button" title="All" >
                                            <DropdownButton id="dropdown-basic-button" title="Look">
                                                <Accordion className='acrdio'>
                                                    <Accordion.Item eventKey="1">
                                                        <Accordion.Header>All Names  and coments</Accordion.Header>
                                                        <Accordion.Body>
                                                            <ListGroup.Item><b>Name:</b>{user.name}</ListGroup.Item>
                                                            <br></br>
                                                            <ListGroup.Item><b>Coment:</b>{user.coment}</ListGroup.Item>
                                                            <button onClick={() => delete_func(user.id)} className='acrbutton'>delete</button>
                                                        </Accordion.Body>
                                                    </Accordion.Item>
                                                </Accordion>
                                            </DropdownButton>
                                        </DropdownButton>
                                    </>
                                )
                            })}
                        </ListGroup>

                    </Col>
                </Row>


                <Row className='justify-content-center mt-5'>
                    <Col>
                        <div className='icls'>
                            <a href='https://github.com/Behruzaxi'>
                                <GitHubIcon className='ico' style={{ fontSize: '60px', paddingLeft: "10px" }} />
                            </a>
                            <a href='https://www.instagram.com/s.p.a.c.e.o.n.e/'>
                                <InstagramIcon className='ico' style={{ fontSize: '60px', paddingLeft: "10px" }} />
                            </a>
                            <a href='https://www.youtube.com/channel/UCaVht7onlYQ3Jj3sqwvnhPg'>
                                <YouTubeIcon className='ico' style={{ fontSize: '60px', paddingLeft: "10px" }} />
                            </a>
                            <a href='https://t.me/spaceone_csgo'>
                                <TelegramIcon className='ico' style={{ fontSize: '60px', paddingLeft: "10px" }} />
                            </a>
                        </div>


                        <h6 className='olti'>Copyright ©2020 All rights reserved </h6>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
