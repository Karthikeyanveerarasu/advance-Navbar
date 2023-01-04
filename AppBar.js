import {Component} from 'react';
import { MenuBar } from './MenuBar';
import './NavBarStyle.css'
class AppBar extends Component {
 state = {clicked: false};
  handleClick =()=>{
    this.setState({clicked:
    !this.state.clicked })
  }
  render(){
  return (
      <nav className="NavBaritems">
        <h1 className="logo">
          LOGO <i className="fab fa-react"></i>
        </h1>
        <div className="menu-icons" onClick={this.handleClick}>
          <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <ul className="nav-menu">
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
      }
export default AppBar;