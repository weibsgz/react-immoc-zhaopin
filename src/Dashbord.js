import React, { Component } from 'react';
//路由
import {Route,Link,Switch,Redirect} from 'react-router-dom'
import App from './App';
import {connect} from 'react-redux'
import {logout} from './Auth.redux'
//进入这个页面 要做用户是否登录的判断，如果没登录跳转到auth.js页面

@connect(
     state=>state.auth,
    {logout} 
)

// function Erying(){
//     return <h2>二营</h2>
// }

// function Qibinglian(){
//     return <h2>骑兵连</h2>
// }
class Dashbord extends Component{

    render(){
        console.log(this.props)

        const redirectToLogin = <Redirect to='/Auth'></Redirect>
        const match = this.props.match;
        const app = (
          <div>
          {this.props.isAuth?<button onClick={this.props.logout}>注销</button> : null}
              <ul>
                  <li>
                      <Link to={`${match.url}/`}>一营</Link>
                  </li>
                  <li>
                      <Link to={`${match.url}/erying`}>二营</Link>
                  </li>
                  <li>
                      <Link to={`${match.url}/qibinglian`}>骑兵连</Link>
                  </li>
              </ul>  
              <Switch>
                  <Route path='/Dashbord/' exact component={App}></Route>
                  {/*<Route path='/Dashbord/erying' component={Erying}></Route>
                  <Route path='/Dashbord/qibinglian' component={Qibinglian}></Route>*/}
              </Switch>
          </div>
        )


        return this.props.isAuth ? app : redirectToLogin
    }
}
export default Dashbord

