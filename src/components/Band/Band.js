import React, { Component } from 'react';

export default class Band extends Component {
    constructor() {
        super();

        this.state = {
            bandName: 'Charlie Brown Jr',
            bandMembers: [
                {
                    id: 1,
                    name: 'Chorão',
                    instrument: 'Volcal',
                },
                {
                    id: 2,
                    name: 'Champignon',
                    instrument: 'Baixo',
                },
                {
                    id: 3,
                    name: 'Marcão',
                    instrument: 'Guitarra',
                },
            ],
        };
    }
    render() {
        const { bandName, bandMembers } = this.state;
        return (
            <div>
                <h4>{bandName}</h4>
                <ul>
                    {bandMembers.map(({ id, name, instrument }) => {
                        return (
                            <li key={id}>
                                {name} - {instrument}
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}
