import React, { Component } from 'react';
import Header from './components/Header';
import CartForm from './components/CartForm';
import CustomizeForm from './components/CustomizeForm';
import TotalForm from './components/TotalForm';
import slugify from 'slugify';
import './App.css';

class App extends React.Component {
    constructor (){
      super()
      
      this.state ={
        Processor: {
          name: '17th Generation Intel Core HB (7 Core with donut spare)',
          cost: 700
        },
        'Operating System': {
          name: 'Ubuntu Linux 16.04',
          cost: 200
        },
        'Video Card': {
          name: 'Toyota Corolla 1.5v',
          cost: 1150.98
        },
        Display: {
          name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
          cost: 1500
        }
      }
    }

    render() {
        return(
            <div className="app">
            <Header />
            <main>
                <CustomizeForm />
                {/* <CartForm />
                 <TotalForm /> */}
            </main>
        </div>
        )
    }
}

export default App;