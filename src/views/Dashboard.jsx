import React from 'react';
import Loader from 'react-loader-spinner';
import jumia from '../assets/jumia.jpg';
import konga from '../assets/konga.png'
import yudala from '../assets/yudala.png'
import ebay from '../assets/ebay.jpg'
import '../App.css';

class Dashboard extends React.Component{
    state = {
        display: 'vendor',
        vendor: '',
        spin: false,
        result: true,
        value: ''
      }
    
      changeDisplay = (vendor) => {
        this.setState({ display: vendor, vendor })
      }
    
      handleSubmit = () => {
        this.setState({ spin: true })
        //send to the backend on success set spin to false and result to true
      }

      handleChange = (event) => {
          this.setState({value: event.target.value})
      }
    render(){
        const { display, vendor, result, spin } = this.state
        return(
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
            </div>
            :
            <div className="form">
              <img src={vendor === 'Jumia' ? jumia : vendor === 'Konga' ? konga : vendor === "Yudala" ? yudala : vendor === "EBay" ? ebay : null} alt="Vendor" />
              <div>
                <input type="text" placeholder="Enter Product Code" required />
                <button onClick={this.handleSubmit}>Scan</button>
              </div>
              {spin === true ? <Loader className="input"
                type="Circles"
                color="#004578"
                height={100}
                width={100}
                timeout={5000} //3 secs

              /> : null}
              {result === true ? <div className="input">
                  <form>
                      <label>Code: 67gyey8y3euuuuuuuuu998384</label>
                      <label>Product Name: whatever</label>
                      <label>Vendor: Jumia</label>
                      <label>Shipping Address: whhwhhdukshjgfur8yrucdofjdkfhncjdhfddkpwkdssjheoruehjlsls</label>
                      <label>Status:
                          <select value={this.state.value} onChange={this.handleChange}>
                              <option value=""> Order Confirmed</option>
                              <option value=""> Order Confirmed</option>
                              <option value=""> Order Confirmed</option>
                              <option value=""> Order Confirmed</option>
                              <option value=""> Order Confirmed</option>
                              <option value=""> Order Confirmed</option>
                          </select>
                      </label>

                  </form>
              </div> : null}
            </div>
          }

        </header>
      </div>
        )
    }
}

export default Dashboard