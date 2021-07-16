import { Component, PureComponent } from 'react';
import './App.css';


class Box extends Component {
  #radiusSquare = '0%';
  #radiusCircle = '50%';

  constructor(props) {
    super(props);
    this.state = {
      bg: props.bg,
      radius: props.br === 's' ? this.#radiusSquare : this.#radiusCircle,
    }

    // console.log(this.props);
  }

  componentDidUpdate(preProps) {
    if (this.props.br !== preProps.br) {
      this.setState({ radius: this.props.br === 's' ? this.#radiusSquare : this.#radiusCircle, })
    }
  }


  render() {
    return (
      <div className="box" style={{ backgroundColor: this.state.bg, borderRadius: this.state.radius }}>
        <button onClick={() => {
          this.setState({ radius: this.state.radius === '0%' ? '50%' : '0%' });
        }}>{`${this.state.radius === '0%' ? 'make circle' : 'Make box'}`}</button>
      </div >
    )
  }

}
function generateColorCode() {
  const colorCode = '0123456789ABCDEF'
  let colorValues = '#';

  for (let i = 0; i < 6; i++) {
    colorValues += colorCode[Math.floor(Math.random() * colorCode.length)];
  }
  return colorValues;
}


const colors = Array(5).fill(0).map(generateColorCode)
class App extends Component {
  state = { shape: 's' }
  isCircle() {
    return this.state.shape === 'c';
  }

  render() {
    return (
      <div style={{ display: 'flex' }}>
        {colors.map(x => <Box key={x} bg={x} br={this.state.shape}></Box>)}

        <div>
          <button onClick={() => {
            this.setState({ shape: this.isCircle() ? 's' : 'c'})
          }}>make { this.isCircle() ? 'square' : 'circle'}</button>
        </div>
      </div>
    )
  }
}


export default App;

