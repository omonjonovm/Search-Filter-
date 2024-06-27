import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Form, InputGroup, Table } from 'react-bootstrap';
import { data } from './Data';

const App = () => {
  const [search, setSearch] = useState('');

  return (
    <div className='App'>
      <Container>
        <h1 className='text-center mt-4'>Contact Keeper</h1>
        <Form>
          <InputGroup className='my-3'>
            <Form.Control
              onChange={(e) => {
                const searchValue = e.target.value;
                setSearch(searchValue);
              }}
              placeholder='Search contacts' />
          </InputGroup>
        </Form>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {data.filter((item) => {
              const firstNameMatches = item.first_name.toLocaleLowerCase().includes(search.toLocaleLowerCase());
              const lastNameMatches = item.last_name.toLocaleLowerCase().includes(search.toLocaleLowerCase());
              
              if (firstNameMatches || lastNameMatches) {
                return true;
              }
              return false;
            }).map((item) => (
              <tr key={item.id}>
                <td>{item.first_name}</td>
                <td>{item.last_name}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default App;
