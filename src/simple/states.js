import React from 'react';
import Button from '../../components/Button';
import Display from '../../components/Display';

class SimpleGoldenAcornApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
    };
  }

  componentDidMount() {
    document.addEventListener('keydown', (event) => {
      // console.log(event.which);
      if (event.which === 38) {
        this.buy()();
      } else if (event.which === 40) {
        this.eat()();
      }
    });
  }

  buy() {
    const { number } = this.state;
    return () => {
      this.setState({ number: number + 1 });
    };
  }

  eat() {
    const { number } = this.state;
    return () => {
      if (number > 0) {
        this.setState({ number: number - 1 });
      }
    };
  }

  render() {
    const { number } = this.state;
    console.log(number);
    return (
      <div>
        <Button className="buy" text="Buy one" onClick={this.buy()} />
        <Display>{ number }</Display>
        <Button className="eat" text="Eat one" onClick={this.eat()} />
      </div>
    );
  }
}

export default SimpleGoldenAcornApp;
