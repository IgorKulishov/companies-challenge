import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CompaniesList from './components/companies-list/companies-list';
import AddCompany from './components/add-company/add-company';
import CompanyDetails from './components/company-details/company-details';

import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
         <div>
             <Route exact path="/" component={CompaniesList}/>
             <Route exact path="/add-company" component={AddCompany}/>
             <Route exact path="/details/:id" component={CompanyDetails}/>
         </div>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
