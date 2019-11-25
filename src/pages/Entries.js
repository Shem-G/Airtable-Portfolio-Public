import React, { Component } from 'react'
import { EntryContext } from '../contexts/EntryContext'
import ListEntry from '../components/EntryList'

class Entries extends Component {

    render() {
        return (
            <EntryContext.Consumer>{(context) => {
                const { entries } = context
                return (
                    <div className="row justify-content-center mb-5">
                        <div className="col-8">
                            <div className="row no-gutters">
                                <div className="col">
                                    <h3 className="text-center"><u>Projects</u></h3>
                            <ListEntry entryData={entries} />
                            </div>
                            </div>
                            </div>
                            </div>
                )

            }}
            </EntryContext.Consumer>
        )
    }
}

export default Entries