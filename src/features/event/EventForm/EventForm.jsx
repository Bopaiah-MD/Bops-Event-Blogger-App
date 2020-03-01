import React, { Component } from 'react'

import { Form, Segment, Button } from 'semantic-ui-react';

class EventForm extends Component {

  state = {
    title: '',
    date: '',
    city: '',
    venue: '',
    hostedBy: ''
  };

  componentDidMount() {
    console.log('EventForm componentDidMount');
    if(this.props.selectedEvent !== null){
      this.setState({
        ...this.props.selectedEvent         /* this wy of setting state will overide the state: {} above */
      })
    }
  }

  hanldeFormSubmit = (e) => {
    e.preventDefault();
    //if the event is present & has an id then we allow to update. else create new event
    if(this.state.id){
      this.props.updateEvent(this.state);
    }
    else {
      this.props.createEvent(this.state);
    }
    }


  onInputChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value
    })
  }

  render() {
    const { cancelFormOpen } = this.props;
    return (
      <Segment>
        <Form onSubmit={this.hanldeFormSubmit}>
          <Form.Field>
            <label>Event Title</label>
            <input name='title' onChange={this.onInputChange} value={this.state.title} placeholder="Event Title" />
          </Form.Field>
          <Form.Field>
            <label>Event Date</label>
            <input type="date" name='date' onChange={this.onInputChange} value={this.state.date} placeholder="Event Date" />
          </Form.Field>
          <Form.Field>
            <label>City</label>
            <input name='city' onChange={this.onInputChange} value={this.state.city} placeholder="City event is taking place" />
          </Form.Field>
          <Form.Field>
            <label>Venue</label>
            <input name='venue' onChange={this.onInputChange} value={this.state.venue} placeholder="Enter the Venue of the event" />
          </Form.Field>
          <Form.Field>
            <label>Hosted By</label>
            <input name='hostedBy' onChange={this.onInputChange} value={this.state.hostedBy} placeholder="Enter the name of person hosting" />
          </Form.Field>
          <Button positive type="submit">
            Submit
            </Button>
          <Button onClick={cancelFormOpen} type="button">Cancel</Button>
        </Form>
      </Segment>
    );
  }
}

export default EventForm