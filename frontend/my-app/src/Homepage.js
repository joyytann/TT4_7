import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
import {Table, Card} from 'semantic-ui-react';
import Layout from './components/Layout';
import { Container } from 'semantic-ui-react';


class Homepage extends Component {
    
    static async getInitialProps(props) {
        
    }

    

    renderLoans() {
        const items = this.props.customers.map(

        )
    }
  render() {
      //const axios = require('axios')
      // axios.get('/user/1')

      //const customer_bal = require()
      // fetch 
      // local storage
      const {Header, Row, HeaderCell, Body} = Table;
      
    return (
      <Layout>
        <div style={{height:"50px"}}>
            <div style={{ width:"48%", float: "left", display:"inline-block"}}>
                 <h3>Hello, Name</h3>
            </div>
         
          
            <div  style={{float: "right", display:"inline-block"}}>
                <Card > 
                    <div class="header">Current bank amount:</div>
                    User ID needs to be passed
                    
                </Card>
            </div>
        
        
        </div>

        <div style={{ width:"48%", float: "left", display:"inline-block"}}>
            <h3>Current Loans</h3>
        <Table class="ui celled table">
            <Header>
                <Row>
                    <HeaderCell>Loan</HeaderCell>
                    <HeaderCell>Loan Amount</HeaderCell>
            
                </Row>

            </Header>
            <Body>

            </Body>
            
        </Table>
        </div>
        <div style={{float:"right", width:"48%", display:"inline-block"}}>
            <h3>Loan History</h3>
        <Table class="ui celled table">
            <Header>
                <Row>
                    <HeaderCell>Loan</HeaderCell>
                    <HeaderCell>Loan Amount</HeaderCell>
            
                </Row>

            </Header>
            <Body>

            </Body>
            
        </Table>
        </div>
        
        

      </Layout>
      

  );
  }
  
}

export default Homepage;
