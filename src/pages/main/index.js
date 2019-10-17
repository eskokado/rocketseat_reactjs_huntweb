import React, { Component } from 'react';
import api from '../../services/api';

class Main extends Component {

    componentDidMount() {
        this.loadProducts();
    }

    loadProducts = async () => {
        const response = await api.get('/products');

        console.log(response.data.docs);
    };

    render() {
        return <h1>Hello Rocketseat</h1>;
    }
}

export default Main;