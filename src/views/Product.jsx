import React from 'react';

class Price extends React.Component {
    state = {
        // product: []
        // sum: 55,
        // stayDays: 7,
    };

    // onInputChange = e => {
    //     let stayDays = e.target.value;
    //     this.setState({ stayDays });
    //     this.updateSum(stayDays);
    // };

    // onInputSubmit = e => {
    //     e.preventDefault();
    // };

    // changeAdd = index => {
    //     const { products } = this.state;
    //     products[index].add = !products[index].add;
    //     this.setState({
    //         products
    //     });
    // };

    // updateSum = stayDays => {
    //     const { products } = this.state;
    //     let allItemsSum = 0;
    //     let addPrice;

    //     {
    //         products.map(product => {
    //             addPrice = product.price * (product.dayPrice ? stayDays : 1);
    //             product.add ? (allItemsSum += addPrice) : 0;
    //         });
    //     }

    //     this.setState({
    //         sum: allItemsSum
    //     });
    // };

    // handleClick = e => {
    //     const { index } = e.currentTarget.dataset;
    //     const { stayDays } = this.state;

    //     this.changeAdd(index);
    //     this.updateSum(stayDays);
    // };

    componentDidMount(){
        this.setState({product: this.props.product})
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log(nextProps)
        if (this.props.product !== nextProps.product){
            return true
        }
        return false
    }
    render() {
        console.log(this.props)
        // const { products, sum, stayDays } = this.state;
        return (
            <div className="card">
                <img src="https://github.com/OlgaKoplik/CodePen/blob/master/bg1.png?raw=true" />
                <h5>Additional services</h5>
                <div className="wrap">
                    
                    <div className="right">
                        <ul>
                            {/* {products.map((product, index) => (
                                <li
                                    data-index={index}
                                    onClick={this.handleClick}
                                    className="product price__add" >

                                    {product.add ? (
                                        <i className="fas fa-check-circle icon icon-delete delete"></i>
                                    ) : (
                                            <i className="fas fa-plus-circle icon icon-add add"></i>
                                        )}
                                    <div className="price__descr">
                                        <div className={"price__item" + (product.dayPrice ? ' day-price' : '')}>{product.name}</div>
                                    </div>

                                    <div className={"price" + (product.dayPrice ? ' day-price' : '')}>€ {product.price}.<sup>00</sup></div>

                                </li>
                            ))} */}
                        </ul>
                        <div className="price__summe">
                            <h3>total:</h3><span className="summe-span">
                                € .<sup>00</sup>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Price