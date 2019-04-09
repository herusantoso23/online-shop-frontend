import React, {Component} from 'react';
import ProductList from '../../components/ProductList';
import HomeService from './HomeService';

const {getProductHotList} = new HomeService();

class Home extends Component {

    constructor(props){
        super(props);
        this.state = {
          productHotList : []
        }
    }

    componentDidMount(){
        this.getProductHotList();
    }

    getProductHotList(){
        const params = {
            limit : 8
        }

        getProductHotList(params).then(response =>{
            let number = 0;
            const data = response.data.result.map((obj)=>({...obj,'key':obj.id,'no':++number}));
            const elements = response.data.elements;
            this.setState({productHotList:data});
        });
    }

    render (){
        return  <div>
                    <h2>HOT LIST </h2>
                    <ProductList products={this.state.productHotList}/>
                </div>
    }
}

export default Home;