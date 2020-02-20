import React from 'react'
import './eventsCard.css'

const EventsCard = ({item}) => {
    return (
        <div className='item-card'>
            <img className='item-pic' src={item.pict} alt='item'/>
            <div className='item-title'> 
                evenements : {item.title}
            </div>
            <div className='item-date' > 
                date : {item.date}
            </div>
        </div>
    );
}

export default EventsCard