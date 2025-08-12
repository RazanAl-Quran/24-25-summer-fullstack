import React, { useState } from 'react';
import PeopleForm from './PeopleForm';
import Employees from './Employees';

function App() {

  const [people, setPeople] = useState([]);

  const addPerson = (newPerson) => {
    setPeople([...people, newPerson]);
  }


  return (
    <div>
      <PeopleForm addPerson={addPerson} />
      <Employees people={people} />
    </div>
  );
}

export default App;
