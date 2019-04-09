import React, {Component} from 'react';
import { Card} from 'antd';
import { Row, Col } from 'react-flexbox-grid';
import './index.css';
import NumberFormat from 'react-number-format';

const { Meta } = Card;

class ProductList extends Component {
    render (){
        return  <div className="gutter-example">
                    <Row >
                        {this.props.products.map((product, index) => 
                            <Col xs={12} sm={12} md={6} lg={3}>
                                <div style={{marginBottom:15}}>
                                    <Card
                                        hoverable
                                        cover={<img style={{ height: 240 }} alt="example" src={product.image} />}
                                    >
                                        <Meta
                                        title={product.name}
                                        description={<NumberFormat value={product.price} displayType={'text'} thousandSeparator={true} prefix={'IDR '} renderText={value => value} />}
                                        />
                                    </Card>
                                </div>
                            </Col>
                        )}
                    </Row>
                </div>
    }
}

export default ProductList;