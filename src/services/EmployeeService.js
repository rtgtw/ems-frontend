//Rest client code to make API call to backend
import axios from "axios";



const REST_API_BASE_URL = "http://192.168.87.24:8080/api/employees";


//Create js function for the get all employees REST api
 export const listEmployees = () => {
    return axios.get(REST_API_BASE_URL);

}

export const createEmployee = (employee) =>{
    return axios.post(REST_API_BASE_URL, employee)
}

