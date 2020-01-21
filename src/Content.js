import React from 'react';
import Card from './Card';
import { Row,Container } from 'reactstrap';

const  Content = ({data}) =>{
    return(
    <Container>
        <Row>
            {
                data.map( (item,i) => {
                    return(<Card key={data[i].id} gambar ={data[i].gambar} nama ={data[i].nama} desc={data[i].desc} />)
                })
            }
        </Row>
    </Container>);
}


export default Content;



