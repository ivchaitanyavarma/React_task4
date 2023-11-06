import React, { useState, useEffect } from 'react';
import axios from "axios";

function UserTable() {
  const users = useState([]);
  const setUsers = useState([]);

  useEffect(() => {

    const apiUrl = 'https://dummyjson.com/users';
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h1>User Records</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Maiden Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Username</th>
            <th>Password</th>
            <th>Birth Date</th>
            <th>Image</th>
            <th>Blood Group</th>
            <th>Height</th>
            <th>Weight</th>
            <th>Eye Color</th>
            <th>Hair (Color/Type)</th>
            <th>Domain</th>
            <th>IP</th>
            <th>Address</th>
            <th>MAC Address</th>
            <th>University</th>
            <th>Bank (Expire/Number/Type/Currency/IBAN)</th>
            <th>Company (Address/Department/Name/Title)</th>
            <th>EIN</th>
            <th>SSN</th>
            <th>User Agent</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.maidenName}</td>
              <td>{user.age}</td>
              <td>{user.gender}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.username}</td>
              <td>{user.password}</td>
              <td>{user.birthDate}</td>
              <td>{user.image}</td>
              <td>{user.bloodGroup}</td>
              <td>{user.height}</td>
              <td>{user.weight}</td>
              <td>{user.eyeColor}</td>
              {/* <td>{`${user.hair.color} / ${user.hair.type}`}</td> */}
              <td>{user.domain}</td>
              <td>{user.ip}</td>
              {/* <td>{`${user.address.address}, ${user.address.city}, (${user.address.coordinates.latitude}, ${user.address.coordinates.longitude}), ${user.address.postalCode}, ${user.address.state}`}</td> */}
              <td>{user.macAddress}</td>
              <td>{user.university}</td>
              {/* <td>{`Card Expire: ${user.bank.cardExpire}, Card Number: ${user.bank.cardNumber}, Card Type: ${user.bank.cardType}, Currency: ${user.bank.currency}, IBAN: ${user.bank.iban}`}</td> */}
              {/* <td>{`Address: ${user.company.address}, Department: ${user.company.department}, Name: ${user.company.name}, Title: ${user.company.title}`}</td> */}
              <td>{user.ein}</td>
              <td>{user.ssn}</td>
              <td>{user.userAgent}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserTable;