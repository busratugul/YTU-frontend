import React from 'react'

function UserList({ data }) {
  return (
    <>
      { data.map((user) => {
        return (
          <tbody key={user.id}>
            <tr>
              <th scope="row">{user.id}</th>
              <td>{user.first_name}</td>
              <td>{user.last_name}</td>
              <td>{user.email}</td>
            </tr>
          </tbody>
        )
      })}
    </>
  )
}

export default UserList
