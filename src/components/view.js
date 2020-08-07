import React, { Component, Fragment } from 'react';
import axios from 'axios';
import RecordList from './Recordlist';


export default class View extends Component {
    constructor(props) {
        super(props);
        this.state = {
            students: [],
        };
    }

    componentDidMount() {
        axios.get('http://localhost/ReactPHPCRUD/view.php')
        .then(response => {
            this.setState({
                students: response.data, 
            });
        })
        .catch(function (error) {
            console.log(error);
        })
    }

    userList() {
        return this.state.students.map(function(object, i) {
            return <RecordList obj={object} key={i} />
        })
    }

    render(){

        return(
            <Fragment>
                ,<h3 align="center">User List</h3>
                <table className="table table-striped" style={{marginTop: 20}}>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th colspan="2">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.userList()}
                    </tbody>
                </table>
            </Fragment>
        )
    }
}