import React from "react";
import { useEffect , useState} from 'react';
import "./DesktopStyle.css";
import {Link, Route, Routes, useNavigate} from 'react-router-dom'
import MyComponent from './App';
import $ from 'jquery';
import { clear } from '@testing-library/user-event/dist/clear';
import CartContext from './CartContext.js';
import { useAuth } from "./Context.js";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
const url = 'http://localhost:3000';
window.$ = $;
function myfunction(){
//   document.body.addEventListener('touchmove', function(e){
//   if(!$('div').hasClass('scroll')){
//      e.preventDefault();
//   }
// },{ passive: false })
$('.imf').click(function () {$('body').animate({scrollTop: 0}, 1500)});
}



function Desktop(){
  
  const MySwal = withReactContent(Swal);
  // const url = 'https://todoo.5xcamp.us/';
  const { token, setToken } = useAuth();
  const navigate = useNavigate();
  const [todos, setTodos]= useState([]);
  const [value,setValue] = useState(""); // todo input
  const [tabState,setTabState] = useState("all"); // tab state

  const headers = {
    Authorization: token
  }
  
  useEffect(()=>{
    getTodo();
  },[]);

  function getTodo(){
    console.log('重新取得todo')
    axios.get(url, {headers}).then((res)=>{
      setTodos(res.data.todos);
    }).catch(err=>{
      return MySwal.fire({
        icon: 'error',
        title: '取得失敗',
      })
    })
  }
  const logout = (e) => {
    e.preventDefault();
  
    axios.delete(url, {headers}).then(res=>{
      setToken(null);
      navigate('/login');
    }).catch(err=>{
      setToken(null);
      navigate('/login');
    })
  }
  const loginoutRender = () => {
    // todo 有值
    // if(todos.length){
      let todolist = [];
      console.log(token);
      if (token) {
        // 全部
        return (todolist = <Link to={"/login"} className="a1">登出</Link> )
        // todolist = todos.map((item, i)=>{
        //   return <Link to={"/login"} className="a1">登出</Link> 
        // })
      } else {
          return  (todolist = <Link to={"/login"} className="a1">登入</Link> )
      }

  }
  const nicknameRender = () => {
    // todo 有值
    // if(todos.length){
      let todolist = [];
      console.log(token);
      if (token) {
        // 全部
        return (todolist = <Link to={"/login"} className="a1">登出</Link> )
      } else {
          return  (todolist = <Link to={"/signup"} className="a1">註冊</Link> )
      }
  }
  return (
    
    <div className="desktop">{/*navbar+banner+group234+top */}
      <div className="div">{/*navbar+banner+group234 */}
        
        
        
      </div>
      <div class="top">
        <a href="#" onClick={myfunction()}>
          <img src="https://images.unsplash.com/photo-1601979031925-424e53b6caaa?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHVwcHl8ZW58MHx8MHx8fDA%3D" alt="" class="imf" width="50px"/>
        </a>
      </div>
      
      
    </div>
  );
};

export default Desktop;
