import React from 'react';
import Loader from 'react-loader-spinner';
import jumia from '../assets/jumia.jpg';
import konga from '../assets/konga.png'
import yudala from '../assets/yudala.png'
import ebay from '../assets/ebay.jpg'
import '../App.css';
import './Table.css';
import axios from 'axios';
import Price from './Product';

class Home extends React.Component {
  state = {
    display: 'vendor',
    vendor: '',
    spin: false,
    result: false,
    displayProduct: false,
    products: [],
  }

  changeDisplay = (vendor) => {
    this.setState({ display: vendor, vendor })
  }

  handleProducts = () => {
    axios.get(`${process.env.REACT_APP_PROD_API_URL}/api/product/`)
    .then(res => this.setState({products: res.data, displayProduct: true}))
  }

  handleTrack = () => event => {
    this.setState({code: event.target.value})
  }

  handleSubmit = () => {
    this.setState({ spin: true })
    const {code} = this.state
    axios.get(`${process.env.REACT_APP_PROD_API_URL}/api/tracker/${code}/`)
    .then(res => this.setState({product: res.data, spin: false}))
    .catch(err=>this.setState(err))
    //send to the backend on success set spin to false and result to true
  }
  timestamp(timestamp) {
    return new Date(timestamp).toDateString()
  }
  render() {
    const { display, vendor, result, spin, products, displayProduct, product } = this.state
    console.log(this.state)
    return (
      <div className="App">
        <header className="App-header">
          {display === "vendor" ?
            <div>
              Select A Vendor
          <div>

                <img src={jumia} alt="Jumia" onClick={() => this.changeDisplay('Jumia')} />
                <img src={konga} alt="Konga" onClick={() => this.changeDisplay('Konga')} />
                <img src={yudala} alt="Yudala" onClick={() => this.changeDisplay('Yudala')} />
                <img src={ebay} alt="EBay" onClick={() => this.changeDisplay('EBay')} />
              </div>
              
              {displayProduct === true ? 
              <div>
              <span>All your parcels</span>
              <table className="rwd-table">
                  <tr>
                    <th>Product Name</th>
                    <th>Shipping Address</th>
                    <th>Vendor</th>
                    <th>Last Updated</th>
                    <th>Status</th>
                  </tr>
                {products.map(product => {
                  return(

                  <tr>
                    <td>{product.name}</td>
                    <td>{product.address}</td>
                    <td>{product.vendor}</td>
                    <td>{this.timestamp(product.timestamp)}</td>
                    <td>{product.status}</td>
                  </tr>
            
                  )
                  })}
                   
                   </table>
                
              </div> : <button onClick={this.handleProducts}> View All Parcels</button>}
            </div> 
            :
            <div className="form">
              <img src={vendor === 'Jumia' ? jumia : vendor === 'Konga' ? konga : vendor === "Yudala" ? yudala : vendor === "EBay" ? ebay : null} alt="Vendor" />
              <div>
                <input type="text" placeholder="Enter Tracking Code" required onChange={this.handleTrack()} />
                <button onClick={this.handleSubmit}>Track</button>
              </div>
              {spin === true ? <Loader className="input"
                type="Circles"
                color="#004578"
                height={100}
                width={100}
                timeout={5000} //3 secs

              /> : 
              <div className="card">
              <img src="https://github.com/OlgaKoplik/CodePen/blob/master/bg1.png?raw=true" />
              <h5>Additional services</h5>
              <div className="wrap">
                  
                  <div className="right">
                      <ul>
                          {product === undefined ? null : product.map((item, index) => (
                            <div>
                              <li
                                  className="product price__add" >
                                  <span className="producttitle">Product Name</span>{item.name}
                              </li>
                               <li
                               className="product price__add" >
                               <span className="producttitle">Shipping Address</span>{item.address}
                           </li>
                            <li
                            className="product price__add" >
                            <span className="producttitle">Order Status</span>{item.status}
                        </li>
                        <li
                            className="product price__add" >
                            <span className="producttitle">Last Updated</span>{this.timestamp(item.timestamp)}
                        </li>
                      
                        </div>
                          ))}
                      </ul>

                  </div>
              </div>
          </div>}
              {result === true ? <div className="input">Result</div> : null}
            </div>
          }

        </header>
      </div>
    )
  }
}

export default Home