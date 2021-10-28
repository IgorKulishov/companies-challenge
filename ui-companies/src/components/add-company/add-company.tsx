import React from 'react';
import { ApiService } from '../../services/api.service';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './add-company.css';
import {Company, NewCompany} from "../../interfaces/companies";
class AddCompany extends React.Component<any, any> {
    private apiService: ApiService;
    constructor(props: any) {
        super(props);
        this.apiService = new ApiService();
        this.state = {
            newCompany: {
                name: undefined,
                locationCity: undefined,
                locationState: undefined,
                foundedDate: new Date(),
                description: undefined
            },
            isCalendarOpen: false
        }
        this.openCalendar = this.openCalendar.bind(this);
        this.onChange = this.onChange.bind(this);
        this.handleAddCompany = this.handleAddCompany.bind(this);
    }
    onChange(e: any) {
        this.setState({
            newCompany: {
                foundedDate: e
            },
            isCalendarOpen: false
        })
        console.log(this.state);
    }
    openCalendar() {
        this.setState({
            isCalendarOpen: true
        })
    }
    navigateToListCompanies() {
        window.location.href = '/';
    }
    handleAddCompany(e: any) {
        e.preventDefault();
        const values = e.target.elements;
        const newCompany: NewCompany = {
            name: values.companyName.value,
            locationCity: values.companyLocationCity.value,
            locationState: values.companyLocationState.value,
            foundedDate: this.state.newCompany.foundedDate,
            founderFullName: 'undefined',
            founderPosition: 'undefined',
            description: values.companyDescription.value,
        }
        this.apiService.createCompany(newCompany)
            .then((response: Company) => {
                if(response) {
                    this.navigateToListCompanies();
                }
            })
            .catch((err) => console.error(err))
    }
    render() {
        const foundedDate = this.state.newCompany.foundedDate;
        const foundedDay = foundedDate.getDate();
        const foundedMonth = foundedDate.getMonth();
        const foundedYear = foundedDate.getFullYear();
        return (
            <div className={'add-company-page'}>
                <form onSubmit={this.handleAddCompany}>
                    <div className={'add-company-form'}>
                        <div className={'add-company-name'}>
                            <label htmlFor="companyName">Company Name:</label>
                            <input type="text" id={'companyName'} name={'companyName'} placeholder={'please add'}/>
                        </div>
                        <div className={'city-state-date'}>
                            <div>
                                <label htmlFor="companyLocationCity">City:</label>
                                <input type="text" id={'companyLocationCity'} name={'companyLocationCity'} placeholder={'please add'}/>
                            </div>
                            <div>
                                <label htmlFor="companyLocationState">State:</label>
                                <input type="text" id={'companyLocationState'} name={'companyLocationState'} placeholder={'please add'}/>
                            </div>
                            <div>
                                {!this.state.isCalendarOpen
                                    ? (
                                        <div>
                                            <label htmlFor="companyFoundedDate">Founded Date:</label>
                                            <input onClick={this.openCalendar} type="text" id={'companyFoundedDate'} name={'companyFoundedDate'} placeholder={`${foundedDay} / ${foundedMonth + 1} / ${foundedYear}`}/>
                                        </div>
                                    ) : (
                                        <div>
                                            <Calendar onChange={this.onChange} value={this.state.newCompany.foundedDate} />
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                        <div className={'add-company-description'}>
                            <label htmlFor="companyDescription">Description:</label>
                            <textarea id={'companyDescription'} name={'companyDescription'} placeholder={'please add'}/>
                        </div>
                        <input className={'add-company-submit'} type="submit" value="Save"/>
                    </div>
                </form>
            </div>
        );
    }
}

export default AddCompany;
