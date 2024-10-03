//Rest client code to make API call to backend
import axios from "axios";



const REST_API_BASE_URL = "http://localhost:8080/api/employees";


//Create js function for the get all employees REST api
 const listEmployees = () => {
    return axios.get(REST_API_BASE_URL);

}

export default listEmployees