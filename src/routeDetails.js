import React from 'react';
import axios from 'axios';
import Popup from "reactjs-popup";

export class routeDetail extends React.Component{
    constructor() {
        super()
        this.state = {        
            cases: []
        }
    }

    componentDidMount () {
        let queryString = `https://jade-enchanting-peacock.cyclic.app/restaurant/${this.props.match.params.id}`
        console.log(queryString)
        axios.get(queryString)
            .then(res =>{
                console.log(res.data)
                this.setState({cases: res.data});
            })
            .catch(res => {

                console.log('API not responding.');

            })

    }

    render() {
        if (this.state.cases){
        return ( 
            <Popup defaultOpen modal>
                   <div>
                    <b>You Inserted Case Number:</b> 
                    <br></br>
                    {this.state.cases._id} 
                    <br></br>
                    <b>Name:</b> 
                    <br></br>
                    {this.state.cases.title} 
                    <br></br>
                    <b>Description:</b> 
                    <br></br>
                    {this.state.cases.text} 
                    <br></br>
                    <b>Adress :</b> 
                    <br></br>
                    {this.state.cases.adress} 
                    <br></br>
                    <b>Zipcode:</b> 
                    <br></br>
                    {this.state.cases.zipcode} <br></br>
                    <br></br>
                    <b>Cost:</b> 
                    <br></br>
                    {this.state.cases.cost} <br></br>
                    <br></br>
                </div>
            </Popup>
          )

        } else {
            return(
                <Popup defaultOpen modal>
                <div class="routerDetails">
                    <div> That ID gave no results. Sorry!</div>
                </div>
                </Popup>
            )
        }
    } 
  }