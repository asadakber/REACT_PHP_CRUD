import React, {Component} from 'react';
import axios from 'axios';
import { Redirect, Link } from 'react-router-dom';

class RecordList extends Component {
    constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
        this.state = {
            redirect: false
        }
    }

    delete() {
        axios.delete('http://localhost/ReactPHPCRUD/delete.php?id='+ this.props.obj.sid)
        .then(
            this.setState({redirect: true})
            // this.props.history.push('/view')
        )
        .catch(err => console.log(err))
    }

    render() {
        const { redirect } = this.state;

        if(redirect) {
            return <Redirect to='/view' />;
        }
        return(
            <tr>
                <td>
                    {this.props.obj.sid}
                </td>
                <td>
                    {this.props.obj.fName}
                </td>
                <td>
                    {this.props.obj.lName}
                </td>
                <td>
                    {this.props.obj.email}
                </td>
                <td>
                    <Link to={"/edit/" + this.props.obj.sid} className="btn btn-primary">Edit</Link>
                </td>
                <td>
                <button onClick={this.delete} className="btn btn-danger">Delete</button>
                </td>

                <td>
                <Link to={"/show/" + this.props.obj.sid} className="btn btn-warning">Details</Link>
                </td>

            </tr>
        )
    }
}

export default RecordList