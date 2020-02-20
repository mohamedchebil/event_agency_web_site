import React from 'react'
import './maps.css'
import { compose,withProps} from 'recompose'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const MyMapComponent = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=&callback=initMap",

    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) =><div>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: 36.854738, lng: 10.189205}}
  >
    {props.isMarkerShown && <Marker position={{ lat: 36.854738, lng: 10.189205 }} onClick={props.onMarkerClick}/>}
  </GoogleMap>
 
  </div>
)


class Maps extends React.Component {
  state = {
    isMarkerShown: false,
  }

  componentDidMount() {
    this.delayedShowMarker()
  }

  delayedShowMarker = () => {
    setTimeout(() => {
      this.setState({ isMarkerShown: true })
    }, 3000)
  }

  handleMarkerClick = () => {
    this.setState({ isMarkerShown: false })
    this.delayedShowMarker()
  }

  render() {
    return (<div className='map-container'>
      <MyMapComponent
        isMarkerShown={this.state.isMarkerShown}
        onMarkerClick={this.handleMarkerClick}
      />      
      </div>
    )
  }
}

export default Maps