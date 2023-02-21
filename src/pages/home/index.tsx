import React, {Fragment} from 'react';
import Header from '@/components/header';
import { Link , Outlet} from 'react-router-dom'

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
      <Fragment>
          <Header title='首页'></Header>
          <div>
          <p>hello {this.state.name}</p>
          <input type="text" placeholder="input new name"
            onChange={(e) => this.setState({ name: e.target.value })}>
          </input>
        </div>
        <div>
          <p>
          <Link to='/user'>to user</Link>
            </p>
            <p>
            <Link to='/about'>to about</Link>
          </p>
          <Outlet />
        </div>
      </Fragment>
      
    );
  }
}