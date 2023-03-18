import React from 'react'
import { Col, Container, Row, Card } from 'react-bootstrap'
import "./sec.css"

export default function SectionB() {
    return (
        <>
           
            <section className="bike">
        <Container id='sec'>
          <Row id="post" className="justify-content-around">
            <Col className='d-block d-sm-block col-lg-4 col-12'>
              <h3 className='posts'>Recent posts</h3>
              <div className="card">
                <h3 className='make'>Making a frontend system from scratch</h3>
                <div className="yil">
                  <h6 className='sana'>12 Feb 2020</h6>
                  <div className='r-border'></div>
                  <h6 className='design'>professional development</h6>
                </div>
                <p className='poragrow'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
              </div>
            </Col>
            <Col className='d-block d-sm-block col-lg-4 col-12'>
              <h3 className='circle'>View all</h3>
              <div className="card">
                <h3 className='make'>Making a backend system from scratch</h3>
                <div className="yil">
                  <h4 className='sana'>12 Feb 2020</h4>
                  <h1> </h1>
                  <h4 className='design'>professional devops</h4>
                </div>
                <p className='poragrow'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

    
