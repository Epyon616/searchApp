import React, { Component, PropTypes} from 'react';

export default class UserRow extends Component {
  render() {
    const user = this.props.user;
    return (
      <tr>
        <td>{user.id}</td>
        <td>{user.firstName}</td>
        <td>{user.lastName}</td>
        <td>{user.email}</td>
      </tr>
    )
  }
}

UserRow.propTypes = {
  user: PropTypes.object,
}
