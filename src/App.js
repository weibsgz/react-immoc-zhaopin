import React, { Component } from 'react';
import { Button } from 'antd-mobile';
import {addGun,addGunAnsyc,removeGun} from './index.redux'
import {connect} from 'react-redux'


//App = connect(mapStateoProps,actionCreators)(App)
//connect 负责从外部获取组件所需要的参数 包括 state  一些方法都塞入props里  上边就是直接this.props调用了 这里先安装 npm install babel-plugin-transform-decorators-legacy --save-dev
//这个东西就是装饰器 方便写@connect
//再在package.json 里修改plugin

//connect 里第一个参数是 你要把state里的什么属性放到props
//第二个参数是把什么方法放到props，自动dispatch

@connect(
    state =>({num:state.counter}),
    {addGun,removeGun,addGunAnsyc}
)
class App extends Component {

  render() {
    //获取redux
    // const store = this.props.store;
    // const num = store.getState()
    // const addGun = this.props.addGun; 
    // const removeGun = this.props.removeGun;
    // const addGunAnsyc = this.props.addGunAnsyc;
    //通过action改变state react-redux自动dispath了
    return (
        <div>
            <Button type="primary" size="small" onClick={this.props.addGun}>申请武器</Button>
            <Button type="primary" size="small" onClick={this.props.removeGun}>上交武器</Button>
            <Button type="primary" size="small" onClick={this.props.addGunAnsyc}>拖两天再给</Button>

            <h1>现在有机枪{this.props.num}把</h1>
        </div>
    )
  }
}

export default App;

