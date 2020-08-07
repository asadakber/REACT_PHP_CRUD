import React, { Component, Fragment } from 'react';
import axios from 'axios';


export default class Insert extends Component {
    constructor(props) {
        super(props);
        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            firstname: '',
            lastname: '',
            email: '',
        }
    
    }

    onChangeFirstName(e) {
        this.setState({
            firstname: e.target.value
        })
    }

    onChangeLastName(e) {
        this.setState({
            lastname: e.target.value
        })
    }

    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();
            if(this.state.firstname == "" && this.state.lastname == "" && this.state.email == "") {
                alert('Fill All Fields');
            }
            else {
                const obj = {
                    firstname: this.state.firstname,
                    lastname: this.state.lastname,
                    email: this.state.email,
                };
        
                axios.post('http://localhost/ReactPHPCRUD/insert.php', obj)
                .then(res => console.log(res.data));
                
                console.log(obj);
             
            }

            this.setState({
                firstname: '',
                lastname: '',
                email: '',
            })
    }
    render(){
        return(
            <Fragment>
               <div style={{marginTop: 10}}>
                    <h3>Add New User</h3>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label>First Name: </label>
                            <input value={this.state.firstname} onChange={this.onChangeFirstName} type="text" className="form-control" />
                        </div>

                        <div className="form-group">
                            <label>Last Name: </label>
                            <input value={this.state.lastname} onChange={this.onChangeLastName} type="text" className="form-control" />
                        </div>

                        <div className="form-group">
                            <label>Email: </label>
                            <input value={this.state.email} onChange={this.onChangeEmail} type="text" className="form-control" />
                        </div>
                        <div className="form-group">
                            <input type="submit" value="Register" className="btn btn-primary" />
                        </div>
                    </form>
               </div>
            </Fragment>
        )
    }
}