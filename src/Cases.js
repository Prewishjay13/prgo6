import React from 'react';
import axios from 'axios';
import Postform from './Postform';
import Details from './Details';
import Popup from "reactjs-popup";

export class Cases extends React.Component {
    constructor() {
        super()
        this.state = {        
            restaurant: [],
            currentPage: 1,
            restaurantPerPage: 5,
        }
        this.handleClick = this.handleClick.bind(this);
    }

    
    handleClick(event) {

        this.setState({
          currentPage: Number(event.target.id)
        });
        this.forceUpdate();

    }

    _showForm = (bool) => {

        this.setState({
          showForm: bool
        });

    }

    _showDetails = (bool) => {
        this.setState({
          _showDetails: bool
        });
    }
    
    _showEdit= (bool) => {
        this.setState({
          _showEdit: bool
        });
    }

    deleteCase(id){
        if (window.confirm('Are you sure you want to delete this restaurant?')) {
            axios.delete(`https://jade-enchanting-peacock.cyclic.app/restaurant/${id}`)
            console.log('Restaurant removed.')
            window.location = window.location.href
        } else {
            console.log('Restaurant not removed.')
        }
       
    }
    
    componentDidMount () {
        axios.get(`https://jade-enchanting-peacock.cyclic.app/restaurant`)
            .then(res =>{
                const response = res.data;
                this.setState({restaurant: response.items});

            })
            .catch(res => {

                console.log('API not responding.');

            })

    }

    render() {
        const { restaurant, currentPage, restaurantPerPage } = this.state;

        const indexOfLastRestaurant = currentPage * restaurantPerPage;
        const indexOfFirstCase = indexOfLastRestaurant - restaurantPerPage;
        const currentRestaurant = this.state.restaurant.slice(indexOfFirstCase, indexOfLastRestaurant);

        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(restaurant.length / restaurantPerPage); i++) {

          pageNumbers.push(i);

        };

        const renderPageNumbers = pageNumbers.map(number => {
            return (

              <li key={number} id={number} onClick={this.handleClick}>
                {number}
              </li>

            );
        });

        const displayCases = (
            <div className="restaurant">

                <div className="thumbnails">
                    {currentRestaurant.map( i => {


                        return(
                            <div className="card">
                                <h4>{i.title}</h4>
                                <p className="flavourText">{i.adress}</p>
                                <br></br>
                                <div className="crudButtons">
                                    <Popup trigger={<button> Edit </button>} modal>
                                        <Postform id = {i._id} caseName = {i.title}/>
                                    </Popup>
                                    <button onClick={() => {this.deleteCase(i._id)}}>Delete this case</button>
                                    <Details 
                                        id = {i._id}
                                        title={i.title} 
                                        text={i.text} 
                                        adress={i.adress} 
                                        zipcode={i.zipcode} 
                                        cost={i.cost} 
                                    />
                                </div>
                            </div>                
                         )
                     })}
                </div>
                <div className="formButton">
                    <button onClick={this._showForm.bind(null, true)}>Add a new Restaurant</button>
                    { this.state.showForm && (
                    <div className="addCase">
                        <Postform />
                        <button onClick={this._showForm.bind(null, false)}>Close</button>
                    </div>) }
                </div>

                <ul className="pagination">
                    <li> <a href="#">{renderPageNumbers}</a></li>
                </ul>

            </div>
        );

        const displayCasesEmpty = (
            <div className="noCasesMessage">

                <h1>Whoops, no dice!</h1>
                <p>The restaurant-API failed to load the restaurants. Maybe you forgot to turn the API on?</p>

            </div>
        );
        
        return( this.state.restaurant.length ? displayCases : displayCasesEmpty ); 

    }
}