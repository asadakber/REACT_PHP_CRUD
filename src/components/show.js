import React, {Component, Fragment} from 'react';
import axios from 'axios';

export default class Show extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: '',
            firstname: '',
            lastname: '',
            email: ''
        }
    }

    componentDidMount() {
        axios.get('http://localhost/ReactPHPCRUD/getid.php?id=' + this.props.match.params.id)
        .then(response => {
            this.setState({
                id: response.data.sid,
                firstname: response.data.fName,
                lastname: response.data.lName,
                email: response.data.email,
            });
        })
        .catch(function(error) {
            console.log(error);
        })
    }

    render() {
        return(
            <Fragment>
                <div className="container py-5">
                    <div className="row justify-content-center">
                        <div className="col-md-5">
                            <div className="card">
                                <div className="card-header">
                                    <strong>Id: </strong>{this.state.id}
                                </div>
                                <div className="card-body">
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item"><strong>FirstName: </strong>{this.state.firstname}</li>
                                    <li class="list-group-item"><strong>lastName: </strong>{this.state.lastname}</li>
                                    <li class="list-group-item"><strong>Email: </strong>{this.state.email}</li>
                                </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}