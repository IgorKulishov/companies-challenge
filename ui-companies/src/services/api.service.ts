import axios, {AxiosResponse} from 'axios';
import { apiUrl } from '../constants/environment';
import { Company, NewCompany } from '../interfaces/companies';

export class ApiService {
    getCompanies(): Promise<Company[]> {
        return axios.get(`${apiUrl}/companies`)
            .then((res: any) => {
                return res.data;
            });
    }

    getCompanyDetails(id: string): Promise<Company[]> {
        return axios.get(`${apiUrl}/company/${id}`)
            .then((res: any) => {
                return res.data;
            });
    }

    deleteCompany(id: string): Promise<Company[]> {
        return axios.delete(`${apiUrl}/company/${id}`)
            .then((res: any) => {
                return res.data;
            });
    }

    createCompany(newCompany: NewCompany): Promise<Company> {
        return axios.put(`${apiUrl}/company`, newCompany)
            .then((res: any) => {
                return res.data;
            });
    }
}
