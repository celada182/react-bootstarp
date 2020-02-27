import React, {Component} from "react";

class PointsPage extends Component {

  state = {
    goals: 0,
    assists: 0,
    marks: 0, //picas
    redCard: false
  };

  render() {
    return (
        <form>
          <div className="form-group">
            <label htmlFor="goals">Goles</label>
            <input type="number" className="form-control" id="goals"/>
          </div>
          <div className="form-group">
            <label htmlFor="assists">Asistencias</label>
            <input type="number" className="form-control" id="assists"/>
          </div>
          <div className="form-group">
            <label htmlFor="assists">Picas</label>
            <select className="form-control" id="assists">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
            </select>
          </div>
          <div className="form-group form-check">
            <input type="checkbox" className="form-check-input"
                   id="redCard"/>
            <label className="form-check-label" htmlFor="redCard">Tarjeta
              Roja</label>
          </div>
          <button type="button" onClick={() => console.log(this.state)} className="btn btn-primary">Guardar</button>
          <button type="button" onClick={() => this.props.history.push({pathname: "/"})}
                  className="btn btn-danger">Cancelar
          </button>
        </form>
    );
  }
}

export default PointsPage;