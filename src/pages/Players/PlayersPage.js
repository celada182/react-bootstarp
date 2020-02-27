import React, {Component} from 'react';
import Player from "../../components/Player/Player";

class PlayersPage extends Component {

  state = {
    players: [
      {
        name: 'Javier',
        points: 10
      },
      {
        name: 'Kivis',
        points: 20
      }
    ]
  };

  render() {
    return (
        <div className="row">
          <div className="col">
            <div className=" card">
              <div className="card-header">Jugadores</div>
              <ul className="list-group list-group-flush">
                {this.state.players.map((player, index) =>
                    <li key={index} className="list-group-item"
                        onClick={() => this.props.history.push({pathname: "/puntos"})}>
                      <Player name={player.name} points={player.points}/>
                    </li>)}
              </ul>
            </div>
          </div>
        </div>
    );
  }
}

export default PlayersPage;