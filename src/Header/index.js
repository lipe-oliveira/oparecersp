import React, { Component } from 'react';
import "./Styles.css"
import {BrowserRouter, Link} from 'react-router-dom';



class Header extends Component{
    state = {
            height: '5pc'
    };

    componentDidMount(){
        window.onscroll = () => this._handle_scroll();
    }

    _handle_scroll() {
        console.log('scrolling:', document.documentElement.scrollTop);
        if (document.documentElement.scrollTop > 0) {
            this.setState({ height: '0px' });
        } 
        else {
            this.setState({ height: '5pc' });
        }
    }

    render(){
        return(
        <div className='div-principal'>
            <div className='div-name' style={this.state}>
                <h1>KBP</h1>
                <h4>Katte Brindes Personalizados</h4>
            </div>
            <header id="main-header">        
                <div>
                    <BrowserRouter>
                        <Link className="btn-header-link" to={`/produtos/`} onClick={()=>window.location.href="/produtos"}> Produtos</Link>
                        <Link className="btn-header-link" to={`/produtos/`}> Contato</Link>
                        <Link className="btn-header-link" to={`/sobre/`} onClick={()=>window.location.href="/sobre"}> Sobre</Link>
                    </BrowserRouter>
                    
                </div>
            </header>
        </div>
        
        )
    }
    
};

export default Header;