import React from 'react';

import Character from './Character';

function Stats({ characterStats }) {

    return (
        <table>
            <thead>
                <tr>
                    <th>Attribute</th>
                    <th>Rating</th>
                    <th>Die Size</th>
                </tr>
            </thead>
            <tbody>
                {Object.keys(characterStats.attributes).map((attribute) => (
                    <React.Fragment key={attribute}>
                        {console.log(attribute)}
                        <tr>
                            <td>{attribute}</td>
                            <td>{characterStats.attributes[attribute].value.label}</td>
                            <td>{characterStats.attributes[attribute].value.dieSize}</td>
                        </tr>
                    </React.Fragment>
                ))}
            </tbody>
        </table>
    );
};

Stats.propTypes = {
    characterStats: Character.isRequired
  }

export default Stats;