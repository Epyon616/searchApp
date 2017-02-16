import React, { Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { userProps } from '../../../test/factories/userFactories';
import { fetchUsers } from '../../actions/userActions';
import UserRow from './UserRow';

export class UsersPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: '',
      results: this.props.users,
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }


  onInputChange() {
    const { results } = this.state;
    let newResults = this.props.users.filter(
      (user) => user.firstName.toLowerCase().includes(this.refs.search.value.toLowerCase())
    );

    this.setState({
      searchTerm: this.refs.search.value,
      results: newResults,
    })
  }

  handleReset(e) {
    e.preventDefault();

    this.setState({
      searchTerm: '',
      results: this.props.users,
    })
  }

  render() {
    const { results } = this.state;
    return (
      <div>
        <div className="well">
          <input ref="search" type="text" className="form-control" placeholder="search..." onChange={this.onInputChange}/>
          <a className="btn btn-outline-primary btn-sm" href="#" onClick={this.handleReset}>Clear</a>
        </div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>&nbsp;</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            { results.map(user => <UserRow user={user} key={user.id} /> ) }
          </tbody>
        </table>
      </div>
    );
  }
};

UsersPage.propTypes = {
  users: PropTypes.array.isRequired
};

const mapStateToProps = (state) => {
  return {
    users: userProps.users.users.users, // This could be replaced by real data if we had any
  };
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchUsers,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersPage);
