//functional component
//code snippets
import React, {useEffect, useState} from 'react'
import {listEmployees} from '../services/EmployeeService'
import { useNavigate } from 'react-router-dom'


const ListEmployeeComponent = () => {

//In order to hold the response of the rest API we have to use the state variable
//in a functional component we have to use the useState hook method
//Initial state of the Variable is empty


    const [employees, setEmployees] = useState([])

    const navigator = useNavigate();

    //In order to make the REST api call or AJAX call in a react functional component
// we have to use useEffect hook
    useEffect(() =>{
        listEmployees().then((response) => {
            setEmployees(response.data);
        } ).catch(error => {
            console.error(error);
        })
    },[])

    function addNewEmployee(){
        //to navigate from one page to another page use navigation hook
        navigator('/add-employee ')

    }

  return (
    <div className='container'>
        <h2 className = 'text-center'>List of Employees</h2>
        <button className='btn btn-primary mb-2' onClick={addNewEmployee}>Add Employee</button>
        <table className = 'table table-striped table-bordered'>
            <thead>
                <tr>
                    <th>Employee First Name</th>
                    <th>Employee Last Name</th>
                    <th>Employee Email Id</th>
                </tr>
            </thead>

            <tbody>
                {employees.map(employee =>
                    <tr key={employee.id}>
                        <td>{employee.id}</td>
                        <td>{employee.firstName}</td>
                        <td>{employee.lastName}</td>
                        <td>{employee.email}</td>
                    </tr>
                 )}
                <tr>

                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default ListEmployeeComponent
