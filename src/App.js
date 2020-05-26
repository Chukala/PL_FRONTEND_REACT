import React,{Component} from 'react';
import "./App.css";
import Main from './components/Main/Main';
import Header from './components/HeaderComponents/Header';
import { Content } from 'react-mdl';
import Footer from './components/Footer/Footer';

class App extends Component {
       render() {
         return (
           <div className="content-wrapper">
              <Header/>
                <Content>
                  <div className="page-content"/>
                  <Main/>
                </Content>
              <Footer/>
         </div>
         
      );
  
      }
  }
export default App;
