import React, {useState} from 'react';
import Player from "../../components/Player/Player";

const PlayersPage = (props) => {
  const PLAYERS = [
    {
      name: 'Javier',
      points: 10
    },
    {
      name: 'Kivis',
      points: 20
    }
  ];

  const [players, setPlayers] = useState(PLAYERS);
  const [modalName, setModalName] = useState('');
  const [modalPoints, setModalPoints] = useState(0);
  const [updateIndex, setUpdateIndex] = useState(0);

  const addPlayer = () => {
    setPlayers([
      ...players,
      {
        name: 'Nuevo',
        points: 30
      }
    ])
  };

  const removePlayer = () => {
    players.pop();
    setPlayers([...players]);
  };

  const savePlayer = () => {
    const updatePlayers = [...players];
    updatePlayers[updateIndex].name = modalName;
    updatePlayers[updateIndex].points = modalPoints;
    setPlayers(updatePlayers);
  };

  const onClickPlayer = (index) => {
    setModalName(players[index].name);
    setModalPoints(players[index].points);
  };

  return (
      <React.Fragment>
        <div className="row">
          <div className="col">
            <div className=" card">
              <div className="card-header">Jugadores</div>
              <ul className="list-group list-group-flush">
                {players.map((player, index) =>
                    <li key={index} className="list-group-item"
                        onClick={() => onClickPlayer(index)}
                        data-target="#exampleModal"
                        data-toggle="modal">
                      <Player name={player.name} points={player.points}/>
                    </li>)}
              </ul>

            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <button type="button" onClick={addPlayer}
                    className="btn btn-primary btn-block">Añadir
            </button>
          </div>
          <div className="col">
            <button type="button" onClick={removePlayer}
                    className="btn btn-danger btn-block">Eliminar
            </button>
          </div>
        </div>

        <div className="modal fade" id="exampleModal" tabIndex="-1"
             role="dialog"
             aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Modal
                  title</h5>
                <button type="button" className="close" data-dismiss="modal"
                        aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="form-group">
                    <label>Nombre del jugador</label>
                    <input type="text" className="form-control"
                           placeholder="Nombre del jugador"
                           value={modalName}
                           onChange={event => setModalName(
                               event.target.value)}/>
                  </div>
                  <div className="form-group">
                    <label>Puntos del jugador</label>
                    <input type="number" className="form-control"
                           placeholder="Puntos del jugador"
                           value={modalPoints}
                           onChange={event => setModalPoints(
                               event.target.value)}/>
                  </div>
                  <button type="button" className="btn btn-primary" data-dismiss="modal"
                          onClick={savePlayer}>Guardar
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

      </React.Fragment>
  );
};

export default PlayersPage;