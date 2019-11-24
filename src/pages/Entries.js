import React, { Component } from 'react'
import { EntryContext } from '../contexts/EntryContext'
import ListEntry from '../components/EntryList'

class Entries extends Component {

    render() {
        return (
            <EntryContext.Consumer>{(context) => {
                const { entries } = context
                return (
                            <ListEntry entryData={entries} />
                )

            }}
            </EntryContext.Consumer>
        )
    }
}

export default Entries