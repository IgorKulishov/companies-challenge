import React from 'react';
import { ApiService } from '../../services/api.service';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './company-details.css';
import {Company, NewCompany} from "../../interfaces/companies";
class CompanyDetails extends React.Component<any, any> {
    private apiService: ApiService;
    constructor(props: any) {
        super(props);
        this.apiService = new ApiService();
        this.state = {
            companyDetails: {
                id: undefined,
                name: undefined,
                location_city: undefined,
                location_state: undefined,
                description: undefined,
                founded_date: undefined,
                founder_full_name: undefined,
                founder_position: undefined
            }
        };
        this.handleDeleteCompany = this.handleDeleteCompany.bind(this);
    }
    navigateToListCompanies() {
        window.location.href = '/';
    }
    handleDeleteCompany(e: any) {
        e.preventDefault();
        const id = this.state.companyDetails.id;
        this.apiService.deleteCompany(id)
            .then((response: Company[]) => {
                if(response) {
                    this.navigateToListCompanies();
                }
            })
            .catch((err: any) => console.error(err))
    }
    componentDidMount() {
        const id = this.props.match.params.id;
        this.apiService.getCompanyDetails(id)
            .then((company: Company[]) => {
                const {
                    id,
                    name,
                    location_city,
                    location_state,
                    description,
                    founded_date,
                    founder_full_name,
                    founder_position
                } = company[0];
                this.setState({
                    companyDetails:{
                        id,
                        name,
                        location_city,
                        location_state,
                        description,
                        founded_date,
                        founder_full_name,
                        founder_position
                    }
                });
            })
            .catch((err) => console.error(err))
    }
    render() {
        return (
            <div className={'company-details-page'}>
                <div className={'company-details-name'}>{this.state.companyDetails.name}</div>
                <div className={'company-details-middle-part'}>
                    <div>{this.state.companyDetails.founded_date}</div>
                    <div>{this.state.companyDetails.location_city}</div>
                    <div>{this.state.companyDetails.location_state}</div>
                    <div className={'company-details-edit'} onClick={this.handleDeleteCompany}>Edit</div>
                    <div className={'company-details-delete'}>Delete</div>
                </div>
                <div className={'company-details-description'}>{this.state.companyDetails.description}</div>
            </div>
        );
    }
}

export default CompanyDetails;
