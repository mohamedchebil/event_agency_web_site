import React from 'react'
import './eventList.css'
import EventsCard from './eventsCard'
import dataItems from './dataItems'
import Search from './search'

class EventsList extends React.Component{
    constructor(){
        super()
        this.state={ 
            itemsToDisplay:dataItems,
            filter:''
        }
    }
    changeFilter=(e)=>{
        this.setState({
            filter:e
        })
    }
    handelFilter = (array) =>{
        return (
            array.filter(el=>el.title.toUpperCase().includes(this.state.filter.toUpperCase()))
        );
    }
    render(){
        return(
            <section className='event-list-container'>
                <Search filterSearch={this.state.filter} changeFilter={this.changeFilter} />
            <div className='event-list'>
                {this.handelFilter(this.state.itemsToDisplay).map(el => <EventsCard item={el} key={el.id}/>
                )}
            </div>
            </section>
    );}
}

export default EventsList