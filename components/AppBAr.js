
import {Component} from 'react';
import { MenuBar } from './MenuBar';
function AppBar() {
  return (
      <nav className="NavBaritems">
        <h1>
          LOGO <i className="fab fa-react"></i>
        </h1>
        <ul>
          {MenuBar.map((item,index)=>{
            return(
               <li key={index}>
            <a href={item.url} className={item.cName} >
            <i className={item.icon}></i>  {item.title}
              </a>
            </li>
            )
          })}
         
          </ul>
        </nav>
  );
}

export default AppBar;