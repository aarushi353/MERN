import React from 'react';
import AddUser from './components/Users/AddUser';
import usersList from './components/Users/usersList';
function App() {
  return (
    <div>
     <AddUser />
     <usersList users={[]} />
    </div>
  );
}

export default App;
