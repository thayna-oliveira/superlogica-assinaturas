export default class Signature extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      nome: "Daniel Campos",
      empresa: "Superlogica",
      cargo: "Head de Design",
    };
  }

  render() {
    return (
      <div>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Nome"
          onChange={e => this.setState({ nome: e.target.value })}
        />{" "}
        <input
          type="text"
          name="cargo"
          id="cargo"
          placeholder="Cargo/Setor"
          onChange={e => this.setState({ cargo: e.target.value })}
        />
      </div>
    );
  }
}
