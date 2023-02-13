import React from 'react';


interface IProps {
    name?: string
}

interface IState {
    name?: string;
}

export default class Home extends React.Component<IProps, IState> {
    
  constructor(props: IProps) {
    super(props);
    this.state = {
      name: props.name
    };
  }
  componentDidMount() {
    console.log('组件挂载后要做的操作')
  }
  componentWillUnmount() {
    console.log('组件卸载要做的操作')
  }
  componentDidUpdate(prevProps: IProps, prevState: IState) {
  }
  render() {
    return (
      <div>
        <p>hello {this.state.name}</p>
        <input type="text" placeholder="input new name"
          onChange={(e) => this.setState({ name: e.target.value })}>
        </input>
      </div>
    );
  }
}