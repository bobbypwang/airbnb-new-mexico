import React, { Component } from 'react'

export default class Home extends Component {

    componentDidMount() {
        // Default Home page title is "Vacation Rentals, Homes, Experiences & Places - Airbnb"
        document.title = "New Mexico, Mexico - Airbnb";
      }

    render() {
        return (
            <div>
                This is the Home Component
            </div>
        )
    }
}
