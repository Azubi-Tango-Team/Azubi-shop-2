import React,{useState} from 'react'
import data from '../data'
import Card from './Card'

function CardList( {products}) {
    const CardList =products.map((item,index)=>(
        <card item={item} key={item.id}/>
    ))
  return (
    <div className='card-container'>
        {CardList}
    </div>
  )
}

export default CardList