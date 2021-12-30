import React, {Component} from "react";
import api from "../../services/api";
import './Styles.css'
import {Link} from 'react-router-dom';

export default class Main extends Component{
    state = {
        produtos: [],
        produtosinfo: {},
        page: 1
    };

    componentDidMount(){
        this.loadProducts();
    }

    loadProducts = async(page = 1) =>{
        const response = await api.get(`/get_produtos?page=${page}`);
        const {docs, ...produtosinfo} = response.data
        this.setState({produtos: response.data.docs});
        //console.log(docs[0].imgs[0].imagem);
    }

    render(){
        const { produtos } = this.state;
        return(
            
            <div className='div-produtos'>
                <div className='div-load'>
                    KBP - Katte brindes personalizados
                </div>
                <div className='lista-produtos'>
                    {produtos.map(produto => (
                        <article key={produto._id}>
                            <img src={`data:image/jpeg;base64,${produto.imgs[0].imagem}`} alt="Produto"/>
                            <br/>
                            <div>
                                <strong>{produto.nome}</strong>
                                <p>{produto.desc}</p>
                                <p>{produto.valor}</p>
                            </div>
                            <Link to={`/produtos/${produto._id}`}>Detalhes</Link>
                        </article>
                    ))}
                </div>
            </div>
            
        )

    }
}