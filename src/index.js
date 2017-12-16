import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import {createStore,applyMiddleware,compose} from 'redux';
//npm install redux-thunk -save  
import thunk from 'redux-thunk' //applyMiddleware中间件，redux-thunk处理异步获取
//import './redux.js'
//import {counter,addGun,removeGun,addGunAnsyc} from './index.redux.js'
//引入了react-redux 可以简写
//import {counter} from './index.redux.js'

import combineReducers from './reducer'

import {Provider} from 'react-redux'
import registerServiceWorker from './registerServiceWorker';
import './config'

//路由
import {BrowserRouter,Route,Redirect,Switch} from 'react-router-dom'
//分为登录页和主页  做权限校验
//import Auth from './Auth.js'
//import Dashbord from './Dashbord'


//招聘项目
import MyApp from './container/myApp/myApp'

import './App.css'
//如果不处理异步 直接const store = createStore(counter)就可以了
//这里用了combineReducer  合并了auth.redux.js index.redux.js里两个reducer

//compose这里这第一参数是异步中间件（不用中间件只能处理同步action，中间件用来处理异步），第二个是chorme插件配置
const store = createStore(combineReducers,compose(
  applyMiddleware(thunk),
  window.devToolsExtension?window.devToolsExtension():f=>f
))
//用render函数包裹一下  为了store订阅的时候 重新执行render函数
// function render(){
//     ReactDOM.render(
//         <App store={store} addGun={addGun} addGunAnsyc={addGunAnsyc} removeGun={removeGun}/>, 
//         document.getElementById('root')
//     );
//     registerServiceWorker();
// }
// render()
// store.subscribe(render)


console.log('store的初始值是：' + JSON.stringify(store.getState(),null,2))
//  ReactDOM.render(

// //使用react-redux 方便了很多 Provider只在入口页面写一次 负责传入store 也不需要subscribe订阅了

//         (<Provider store={store}>
//             <BrowserRouter>
//               <div>
//                   <Switch>
//                       {/*只命中匹配上的第一个route*/}
//                       <Route exact path='/Auth' component={Auth}></Route>
//                       <Route path='/Dashbord' component={Dashbord}></Route>                   
//                       <Redirect to='/Dashbord'></Redirect>
//                   </Switch>
//               </div>
//             </BrowserRouter>
//          </Provider>),        
//         document.getElementById('root')
// )

// function dashbord(){
//   return <h2>dashbord</h2>
// }

//招聘项目
ReactDOM.render(
        


        (<Provider store={store}>
            <MyApp></MyApp>
         </Provider>),        
        document.getElementById('root')
)

 registerServiceWorker();



