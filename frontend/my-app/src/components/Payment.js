import React, {Component} from 'react';
import {Table, Card} from 'semantic-ui-react';
import {Container} from 'semantic-ui-react';
import Layout from './Layout';

class Payment extends Component {
  render() {
    return (
      <Layout>
        <Container>
        <div>
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"></link>
          <script src="../checkSession.js"></script>
        </div>

        <div class="container-fluid">
          <h1>Apply For New Loan</h1>

          <div class="container-md mt-3 border">
            
          <table class="ui celled table">
            <thead>
              <tr><th>Loan ID</th>
              <th>Amount</th>
              <th>Status</th>
            </tr></thead>
            <tbody>
              <tr>
                <td data-label="LoanId">001</td>
                <td data-label="loan_amount">100</td>
                <td data-label="Status">Paid</td>
              </tr>

            </tbody>
          </table>
          

            
          </div>
        </div>
      </Container>
      </Layout>
      
      

  );
  }
  
}

export default Payment;
