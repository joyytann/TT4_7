import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
import {Table, Card} from 'semantic-ui-react';
import Layout from './components/Layout';

class Homepage extends Component {
  render() {
    return (
      <Layout>
        <div>
          <h3>Hello, Name</h3>
        </div>

        <Card>
          <div class="header">Current bank amount:</div>
          
        </Card>
        <div>
          <Table class="ui celled table">
            <thead>
              <tr><th>Name</th>
              <th>Age</th>
              <th>Job</th>
            </tr></thead>
            <tbody>
              <tr>
                <td data-label="Name">James</td>
                <td data-label="Age">24</td>
                <td data-label="Job">Engineer</td>
              </tr>
              <tr>
                <td data-label="Name">Jill</td>
                <td data-label="Age">26</td>
                <td data-label="Job">Engineer</td>
              </tr>
              <tr>
                <td data-label="Name">Elyse</td>
                <td data-label="Age">24</td>
                <td data-label="Job">Designer</td>
              </tr>
            </tbody>
          </Table>
        </div>

      </Layout>
      

  );
  }
  
}

export default Homepage;
