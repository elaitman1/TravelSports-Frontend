import React, {Component} from 'react'
import GameDetails from './GameDetails'
import EditTrip from './EditTrip'
import CompleteTripForm from './CompleteTripForm'

class TripDetails extends Component {
  state = {
    trip: null,
    activeEdit: false,
    activeComplete: false
  }

  componentDidMount() {
    fetch(`http://localhost:4000/api/v1/users/${this.props.currentUserId}/trips/${this.props.tripId}`)
    .then(r => r.json())
    .then(data => {
      console.log(data)
      this.setState({
        trip: data
      })
    })
  }

  handleEditClick = () => {
    // this.props.editTrip(this.state.trip.trip.id)
    this.setState({
      activeEdit:true
    })
  }

  handleDeleteClick = () => {
    this.props.deleteTrip(this.props.trip.id)
  }

  handleCompleteClick = () => {
    this.setState({
      activeComplete:true
    })
  }

  handleClearTrip = () => {
    this.props.clearTrip()
  }

  render() {

    const tripDetailBox = () => {
      return <div>
              <button onClick={this.handleClearTrip}>Back to Trip List</button>
              <h2>{this.state.trip.trip.title}</h2>
              <h4>Hotel: {this.state.trip.hotel}</h4>
              <h4>Transportation: {this.state.trip.transportation}</h4>
            </div>
    }

    return (
      <div>
        {this.state.trip ?  tripDetailBox() : <></>}
        {this.state.trip ? <GameDetails gameId={this.state.trip.trip['game_id']} /> : <></>}
        {this.state.activeEdit ? <EditTrip currentUserId={this.props.currentUserId} tripId={this.props.tripId} editTrip={this.props.editTrip}/> : <button onClick={this.handleEditClick}>Edit</button>}
        <button onClick={this.handleDeleteClick}>Delete</button>
        {this.state.activeComplete ? <CompleteTripForm currentUserId={this.props.currentUserId} tripId={this.props.tripId} completeTrip={this.props.completeTrip}/> : <button onClick={this.handleCompleteClick}>Complete Trip</button>}
      </div>
    )
  }
}

export default TripDetails
