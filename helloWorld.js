

const e = React.createElement;

class helloWorld extends React.Component {
  constructor(props) {
    super(props);
    this.state = { helloWorld: false };
  }

  render() {
    if (this.state.helloWorld) {
      window.location.href = "helloWorld.html";
    }

    return e(
      'button',
      { onClick: () => this.setState({ helloWorld: true }) },
      'Clique!'
    );
  }
}

const domContainer = document.querySelector('#helloWorld_container');
ReactDOM.render(e(helloWorld), domContainer);