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
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"></link>
        </div>

        <div class="container-fluid">
          <h1>Apply For New Loan</h1>

          <div class="container-md mt-3 border">
            
          <form class="ui form">
            <label>Pending Loan Amount: </label>
            
            <div class="field">
              <label>How much do you wish to loan?</label>
              <input type="number" name="loan_amount" placeholder="Loan Amount"/>
            </div>
            <div class="field">
              <div class="ui checkbox">
                <input type="checkbox" tabindex="0" class="hidden"/>
                <label>I agree to the Terms and Conditions</label>
              </div>
            </div>
            <button class="ui button" type="submit">Submit</button>
          </form>
          

            
          </div>
        </div>
      </Layout>
      

  );
  }
  
}

export default Homepage;
