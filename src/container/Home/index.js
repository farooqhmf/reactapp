
import React, { Component } from 'react';
import './styles.css';
import { Button } from 'antd';

class Home extends Component {

  count = 0;
  handleClick(data){
    console.log('hello', this.count);
    console.log(data);
  }
  handleunboundClick(){
    this === 'undefind' ? console.log('this is undefind') : console.log('value', this);
  }
    render(){
        return (
            <div>
                <h1>Home</h1>
                <Button onClick={() => this.handleClick('data')}>Click me</Button>
                <Button onClick={ this.handleunboundClick}>get count</Button>
                <div id="text-align" className="blue-div">
                    <div className="blue-div-child">
                    </div>
                </div>
                <div id="margin-auto" className="yellow-div">
                    <div className="yellow-div-child"></div>
                </div>
                <div id="absolute-position" className="green-div">
                    <div className="green-div-child"></div>
                </div>
            </div>
        )
    }
}

export default Home;
