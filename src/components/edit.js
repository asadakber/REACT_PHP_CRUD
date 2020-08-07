import React, { Component, Fragment } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

export default class Edit extends Component {
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
            redirect: false
        }
    
    }

    componentDidMount() {
        axios.get('http://localhost/ReactPHPCRUD/getid.php?id=' + this.props.match.params.id)
        .then(response => {
            this.setState({
                firstname: response.data.fName,
                lastname: response.data.lName,
                email: response.data.email,
            });
        })
        .catch(function(error) {
            console.log(error);
        })
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
            const obj = {
                firstname: this.state.firstname,
                lastname: this.state.lastname,
                email: this.state.email,
            };
    
            axios.put('http://localhost/ReactPHPCRUD/update.php?id=' + this.props.match.params.id, obj)
            .then(res => console.log(res.data),
                this.setState({redirect: true})
            );
    }

    render(){
        const { redirect } = this.state;

        if(redirect) {
            return <Redirect to='/' />;
        }
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
                            <input type="submit" value="Update" className="btn btn-primary" />
                        </div>
                    </form>
               </div>
            </Fragment>
        )
    }
}