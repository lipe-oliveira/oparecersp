import React, {Component} from "react";
import api from "../../services/api";
import './Styles.css'
import {Link} from 'react-router-dom';

export default class Sobre extends Component{
    state = {
        img: {}
    };

    componentDidMount(){
        this.loadProducts();
    }

    loadProducts = async(page = 1) =>{
        const response = await api.get(`/get_logo`);
        const {img} = response.data
        this.setState({img: img});
        console.log("img: " + this.state.img);
    }

    render(){
        const { img } = this.state;
        return(
            <div className='div-sobre'>
                <img src={`data:image/jpeg;base64,${img}`} alt="Produto"/>

            </div>
            
        )

    }
}