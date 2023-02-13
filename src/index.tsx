import React from 'react'
import ReactDom from 'react-dom'
import Home from '@/pages/home';

interface IProps {
  name?: string;
}
  
interface IState {
  count?: number;
}

class App extends React.Component<IProps, IState> {
    render(){
        return (
            <div>
              <Home name='开头'></Home>
            </div>
        )
    }
}

ReactDom.render(<App />, document.getElementById('root'))