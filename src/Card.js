import React,{Fragment} from 'react';

function Card (props){
    const {id,nama,gambar,desc} = props;
    return(
        <Fragment>
            <article key={id} className=' grow fl br2 ba dark-gray b--black-10 mv4 w-100 mw5 mr-2 ma2 w-50-ns'>
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
        </Fragment>
    )
}

export default Card;