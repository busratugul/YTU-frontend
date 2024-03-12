import React, { useEffect, useState } from 'react'
import { Users } from '../users.js'
import UserList from './UserList'

export default function UsersData() {
  const [search, setSearch] = useState('')

  const keys = ['first_name', 'last_name', 'email']
  function searchedList(data) {
    return data.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(search))
    )
  }
  return (
    <>
      <input
        type="search"
        className="form-control"
        placeholder="Search..."
        onChange={(e) => setSearch(e.target.value)}
      />

      <table className="table table-striped" style={{ cursor: 'pointer' }}>
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Firstname</th>
            <th scope="col">Lastname</th>
          </tr>
        </thead>
        <UserList data={searchedList(Users)} />
      </table>
    </>
  )
}
