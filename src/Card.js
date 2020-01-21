import React from 'react';
import {Col} from 'reactstrap';

function Card (props){
    const {id,nama,gambar,desc} = props;
    return(
        <Col md='3'>
            <article key={id} className=' grow fl br2 ba dark-gray b--black-10 mv4 ma2 '>
                <img alt='miaw' src={gambar} className='db w-100 br2 br--top' />
                <div className='pa2 ph3-ns pb3-ns'>
                <div className='dtc'>
                    <h1 className='tc f5 f4-ns mv0'>{nama}</h1>
                    <p className='f6 lh-copy measure mt2 mid-gray'>
                    {desc}
                    </p>
        
                </div>
                </div>
            </article>
        </Col>
    )
}

export default Card;