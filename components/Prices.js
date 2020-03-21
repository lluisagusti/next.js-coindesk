class Prices extends React.Component {
  state = {
    currency: "EUR"
  };

  render() {
    let list = "";

    if (this.state.currency === "EUR") {
      list = (
        <li className="list-group-item">
          {this.props.bpi.EUR.description}:
          <span className="badge badge-primary">{this.props.bpi.EUR.code}</span>
          <strong>{this.props.bpi.EUR.rate}</strong>
        </li>
      );
    } else if (this.state.currency === "USD") {
      list = (
        <li className="list-group-item">
          {this.props.bpi.USD.description}:
          <span className="badge badge-primary">{this.props.bpi.USD.code}</span>
          <strong>{this.props.bpi.EUR.rate}</strong>
        </li>
      );
    } else if (this.state.currency === "GBP") {
      list = (
        <li className="list-group-item">
          {this.props.bpi.GBP.description}:
          <span className="badge badge-primary">{this.props.bpi.GBP.code}</span>
          <strong>{this.props.bpi.EUR.rate}</strong>
        </li>
      );
    }

    return (
      <div>
        <ul className="list-group">{list}</ul>
        <br />
        <select
          onChange={e => this.setState({ currency: e.target.value })}
          className="form-control"
        >
          <option value="EUR">EUR</option>
          <option value="GBP">GBP</option>
          <option value="USD">USD</option>
        </select>
      </div>
    );
  }
}

export default Prices;
