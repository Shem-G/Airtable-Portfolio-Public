import React, { Component } from 'react'
import axios from 'axios'

export const EntryContext = React.createContext()

class EntryContextProvider extends Component {
    state = {
        entries: []
    }

    componentDidMount() {
        const fetchData = () => {
            axios
                .get('[YOUR_AIRTABLE_URL_AND_KEY_HERE]')
                .then(({ data }) => {
                    this.setState({
                        entries: data.records
                    })
                })
                .catch(console.log)
        }
        fetchData();
    }

    render() {
        return (
            <EntryContext.Provider value={{ ...this.state }}>
                {this.props.children}
            </EntryContext.Provider>
        )
    }
}

export default EntryContextProvider