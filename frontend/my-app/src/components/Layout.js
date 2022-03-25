import React from 'react';
import {Container} from 'semantic-ui-react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Homepage from '../Homepage';

// Essentially the nav bar
// Just add <Layout> into your js file and encapsulate your code within.
// TODO: Link up to the various pages
export default props => {
    return (
        <Container>
           
               <link
                    async
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/npm/semantic-ui@2/dist/semantic.min.css"
                /> 

                <link href="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"/>
               
                    <div class="ui secondary pointing menu">
                        
                        <a class="item" href='/'>
                            Home
                        </a>
                        <a class="item" href='/Loans'>
                            Loan
                        </a>
                        <a class="item" href='Payment'>
                            Payment
                        </a>
                        <div class="right menu">
                            <a class="ui item">
                            Logout
                            </a>
                        </div>
                    </div>
                
                
            
            
           
            {props.children}
        </Container>
    )
};