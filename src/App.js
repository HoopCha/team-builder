import React, { useState } from "react";

import Form from "./components/Form";
import FormStructure from "./components/FormStructure";

function App() {
  const [members, setMember] = useState([
    {
      name: "",
      email: "",
      role: ""
    }
  ]);

  const addNewMember = member => {
    const newMember = {
      name: member.name,
      email: member.email,
      role: member.role
    };
    setMember([...members, newMember]);
  };

  return (
    <div className="App">
      <h1>My Team Members</h1>
      {/* we are going to pass a function down as a prop */}
      <FormStructure addNewMember={addNewMember} />
      <Form members={members} />
    </div>
  );
}

export default App;
