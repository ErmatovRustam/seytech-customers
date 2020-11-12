import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Customers from './Customers';
import SingleCustomer from './SingleCustomer';
import './App.css';

const customers = [
  {
    id: 1, name: "Seytech", lastName: "Co", avatar: "https://www.seytech.co/images/logo.png",
    email: "support@seytech.co", state: "WA", phone: 1234567703,
    role: "student", github: "seytechschool", courses: ["js, react, algo"],
    payment: 12000
  },
  {
    id: 2, name: "Eliza", lastName: "Co", avatar: "https://avatars1.githubusercontent.com/u/68719361?s=100&v=4",
    email: "support@seytech.co", state: "WA", phone: 1234567703,
    role: "student", github: "seytechschool", courses: ["js, react, algo"],
    payment: 12000
  },
  {
    id: 3, name: "Adilet", lastName: "Co", avatar: "https://avatars0.githubusercontent.com/u/55602501?s=100&v=4",
    email: "support@seytech.co", state: "WA", phone: 1234567703,
    role: "instructor", github: "seytechschool", courses: ["js, react, algo"],
    payment: 12000
  },
  {
    id: 4, name: "Max", lastName: "Co", avatar: "https://avatars0.githubusercontent.com/u/40704457?s=100&v=4",
    email: "support@seytech.co", state: "WA", phone: 1234567703,
    role: "student", github: "seytechschool", courses: ["js, react, algo"],
    payment: 12000
  },
  {
    id: 5, name: "Ulan", lastName: "Co", avatar: "https://avatars1.githubusercontent.com/u/16879917?s=100&v=4",
    email: "support@seytech.co", state: "WA", phone: 1234567703,
    role: "admin", github: "seytechschool", courses: ["js, react, algo"],
    payment: 12000
  },
]

class App extends Component {

  constructor(){
    super();
    this.state = {
      customers,
    }
  }

  delete = (id) => {
    //filter
    const customers = this.state.customers.filter(item=>item.id !== id)
    this.setState({customers})
  }

  addCustomer = (customer) => {
    debugger
    const {customers} = this.state;
    customer.id = customers.length + 1;
    customers.unshift(customer)
    this.setState({customers})
    console.log(this.state.customers)
  }

  render(){
    return (
      <Router>
          <ul className="menu">
            <li> <Link to="/">Home</Link> </li>
            <li> <Link to="/about">About</Link> </li>
            <li> <Link to="/contact">Contact</Link> </li>
            <li> <Link to="/customers">Customers</Link> </li>
          </ul>

          <div className="pages">
            <Switch>
              <Route path="/" exact>
                <div className="page">Home Page</div>
              </Route>
              <Route path="/about">
                <div className="page">About Page</div>
              </Route>
              <Route path="/contact">
                <div className="page">Contact Page</div>
              </Route>
              <Route path="/customers">
                <Customers addCustomer={this.addCustomer} delete={this.delete} customers={this.state.customers} />
              </Route>
              <Route exact path="/customer/:id">
                <SingleCustomer delete={this.delete} customers={this.state.customers} />
              </Route>
              <Route path="/customer/:id/:action">
                <SingleCustomer delete={this.delete} customers={this.state.customers} />
              </Route>
            </Switch>
          </div>
      </Router>
    )
  }
}




export default App;





{/* <div className="container">
          <h1> Seytech Customers</h1>
          <Customers customers={this.state.customers} />
        </div>
 */}




































/*
const data = [
  {countryName: "USA", currency:"dollar", products:[
    {name: "apple", active:true, subProducts:[
      {name: "iPhone", price: 40, sold:4},
      {name: "iPad", price: 530, sold:4},
      {name: "watch", price: 530},
    ]}
  ]},
  {countryName: "Russia", currency:"rubl", products:[
    {name: "apple", active:true, subProducts:[
      {name: "iPhone", price: 40, sold:4},
      {name: "iPad", price: 530, sold:4},
      {name: "watch", price: 530},
    ]}
  ]}
]
*/