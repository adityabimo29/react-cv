import React, { Fragment } from 'react';
import { Row,Container,Col } from 'reactstrap';
import Counter from './Counter';

function About (){
    return(
        <Fragment>
        <Counter />
        <Container className='text-center tc pt-3'>
            <Row>
                <Col md='12'>
                    <p className='f6 lh-copy  mt2 mid-gray tc'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                </Col>
            </Row>
        </Container>
        </Fragment>
    )
}

export default About;