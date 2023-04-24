import React from 'react';
import Popup from "reactjs-popup";



export default class Details extends React.Component{

    render() {
    
            return (
                <Popup trigger={<button> Details </button>} modal>
                <div>
                    <b>Restaurant:</b> 
                    <br></br>
                    {this.props.id} 
                    <br></br>
                    <b>Restaurant name (title in db):</b> 
                    <br></br>
                    {this.props.title} 
                    <br></br>
                    <b>Description or notes of restaurant:</b> 
                    <br></br>
                    {this.props.text} 
                    <br></br>
                    <b>Adress :</b> 
                    <br></br>
                    {this.props.adress} 
                    <br></br>
                    <b>Zipcode:</b> 
                    <br></br>
                    {this.props.zipcode} <br></br>
                    <br></br>
                    <b>Costs:</b> 
                    <br></br>
                    {this.props.cost} <br></br>
                    <br></br>
                </div>
                </Popup>
            );
        }
    }


