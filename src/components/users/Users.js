import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchUsers } from '../../actions/userActions';

const UsersPage = ({users}) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>&nbsp;</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {users.map(user =>
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
            <td>{user.email}</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

const mapStateToProps = (state) => {
  return {
    users: state.users,
  };
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
  fetchUsers,
}, dispatch);
}

UsersPage.propTypes = {
  users: PropTypes.array.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersPage);
