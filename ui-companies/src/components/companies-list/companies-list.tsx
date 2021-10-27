import React from 'react';
import './companies-list.css';
import { ApiService } from '../../services/api.service';
import { Company } from '../../interfaces/companies';
import CompanyCard from '../companies-card/company-card';

class CompaniesList extends React.Component<any, any> {
    private apiService: ApiService;
    companies: Company[] | undefined;
    constructor(props: any) {
        super(props);
        this.apiService = new ApiService();
        this.state = {
            companies: []
        }
    }

    navigateToAddCompany() {
        window.location.href = '/add-company';
    }

    componentDidMount() {
        this.apiService.getCompanies()
            .then((companies: Company[]) => {
                this.setState({
                    companies
                })
            })
            .catch((err) => console.error(err))
    }

    render() {
        return (
            <div className={'companies-list'}>
                {this.state.companies?.map((company: Company) => (
                    <CompanyCard name={company.name}
                    location_city={company.location_city}
                    location_state={company.location_state}
                    description={company.description}
                    id={company.id}/>
                ))}
                <div className={'add-company'} onClick={this.navigateToAddCompany}>Add Company</div>
            </div>
        );
    }
}

export default CompaniesList;
