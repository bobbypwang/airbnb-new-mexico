import React, { Component } from 'react'

export default class Listing extends Component {

    componentDidMount() {
        // Doesn't end with -Airbnb for listing pages
        document.title = "Sweet Little Room near St Martin Canal - Boutique hotels for Rent in Paris"; 
      }

    render() {
        return (
            <div>
                This is the Individual Listing Component
            </div>
        )
    }
}
