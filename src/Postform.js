import React from 'react';
import axios from 'axios';

export default class Postform extends React.Component {
  state = {
    title: '',
    text: '',
    adress: '',
    zipcode: '',
  }

  handleTitle = e => {
    this.setState({ title: e.target.value,
    });
  }

  handleText = e => {
    this.setState({ text: e.target.value,
    });
  }

  handleAdress = e => {
    this.setState({ adress: e.target.value,
    });
  }

  handleZipcode = e => {
    this.setState({ zipcode: e.target.value,
    });
  }

  handleCost = e => {
    this.setState({ cost: e.target.cost,
    });
  }

  handleSubmit = event => {
    console.log(this.props.id)
    let config = {
        headers: {
            'Content-Type': 'application/json'
        }
      }

    let data = {
      title: this.state.title,
      text: this.state.text,
      adress: this.state.adress,
      zipcode: this.state.zipcode,
      cost: this.state.cost
    };

    var json = JSON.stringify(data);
    console.log(json)
    
    if(!this.props.id){
      axios.post(`https://jade-enchanting-peacock.cyclic.app/restaurant/`, json, config)
        .then(res => {
          if (res.status === 200){
            console.log('POST Send.')
          } else {
            console.log('POST Not Send.')
          }
      })
    }
    else{
      axios.put(`https://jade-enchanting-peacock.cyclic.app/restaurant/${this.props.id}`, json, config)
        .then(res => {
          if (res.status === 200){

            console.log('POST Send.')
          } else {
            console.log('POST Not Send.')
          }
        })
      }
    }
  
  render() {
    if(!this.props.id){
      return (
        <div>
        <h2> Add a new Restaurant </h2>
        <form onSubmit={this.handleSubmit}>
          <label>Restaurant Name:</label><br></br>
          <input type="text" name="title" value={this.state.value} onChange={this.handleTitle} />
          <br></br>

          <label>Restaurant description:</label> <br></br>
          <textarea  rows="10" cols="70" name="text" value={this.state.value} onChange={this.handleText} />
          <br></br>

          <label>Adress: </label><br></br>
            <input type="text" name="adress"  value={this.state.value} onChange={this.handleAdress} />
          <br></br>

          <label>Zipcode: </label><br></br>
          <input name="zipcode" value={this.state.value} onChange={this.handleZipcode} />
          <br></br>

          <label>Cost: </label><br></br>
          <input type="text" name="cost" value={this.state.value} onChange={this.handleCost} />
          <br></br>

          <button type="submit">Add</button>
        </form>
        <br></br>
      </div>
      )
    } else{ 
      return (
        <div>
          <h2> Update {this.props.caseName}: </h2>
          <form onSubmit={this.handleSubmit}>
            <label>New Restaurant Name To:</label><br></br>
            <input type="text" name="title" value={this.state.value} onChange={this.handleTitle} />
            <br></br>
  
            <label>Improved Restaurant notes/description:</label> <br></br>
            <textarea  rows="10" cols="70" name="text" value={this.state.value} onChange={this.handleText} />
          <br></br>
  
            <label>New Adress: </label><br></br>
              <input type="text" name="adress"  value={this.state.value} onChange={this.handleAdress} />
            <br></br>
  
            <label> New zipcode: </label><br></br>
            <input name="zipcode" value={this.state.value} onChange={this.handleZipcode} />
          <br></br>

            <label>New Cost: </label><br></br>
            <input type="text" name="cost" value={this.state.value} onChange={this.handleCost} />
          <br></br>
  
            <button type="submit">Add</button>
          </form>
        </div>
      )
    }
  }  
}