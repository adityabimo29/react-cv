import React from 'react';
import Card from './Card';

const  Content = ({data}) =>{
    return(<div className='flex justify-center'>{
        data.map( (item,i) => {
            return(<Card key={data[i].id} gambar ={data[i].gambar} nama ={data[i].nama} desc={data[i].desc} />)
        })
    }</div>);
}


export default Content;



