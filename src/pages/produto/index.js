import React, {Component} from 'react';
import api from '../../services/api';
import Style from './Styles.css'

export default class Produto extends Component{
    state = {
        produto:{}
    }

    async componentDidMount(){
        const { id } = this.props.match.params;
        console.log("id: " + id);

        const response = await api.get(`/get_produtos/${id}`);

        this.setState({produto: response.data});


    }

    render(){
        const {produto} = this.state;
        return (
            <div className='div-detalhe-produto'>
                <h1>{produto.nome}</h1>
            </div>
        )
    }
};