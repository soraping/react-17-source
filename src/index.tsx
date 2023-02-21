import React from 'react'
import ReactDom from 'react-dom'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Router from './router'

interface IProps {
  name?: string;
}
  
interface IState {
  count?: number;
}

class App extends React.Component<IProps, IState> {
    render(){
        return (
          <React.StrictMode>
            <BrowserRouter>
              <Router />
            </BrowserRouter>
        </React.StrictMode>
        )
    }
}

ReactDom.render(<App />, document.getElementById('root'))