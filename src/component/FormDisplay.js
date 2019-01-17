// import React from 'react'
// import PlayerAPI from '../api'
// const Player = (props) => {
//   const player = PlayerAPI.get(props.match.params.name)
//   if (!player) {
//     return <div>Sorry, but the player was not found</div>
//   }
//   return (
//     <div>
//       <h1>{player.name} (#{player.address})</h1>
//       <h2>Position: {player.phone}</h2>
//     </div>
//   )
// }


import React, { Component } from 'react';

class FormDisplay extends Component {
  render() {
    return (
      <div>
        <h1></h1>
      </div>
    );
  }
}

export default FormDisplay;