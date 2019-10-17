import React, {useState} from 'react';

const FormStructure = props => {
    const [member, setForm] = useState({
       name: "",
       email: "",
       role: "" 
    });
    
    const handleChanges = e => {
        setForm ({...member, [e.target.id]: e.target.value});
        console.log(e.target.value)
    };

    const submitForm = e => {
        e.preventDefault();
        props.addNewMember(member);
        console.log(member);
        setForm ({
            name: "",
            email: "",
            role: ""
        });
    };

    return (
        <form onSubmit={submitForm}>
            <label htmlFor="name">Name</label>
            <input
                id="name"
                type="text"
                name="name"
                onChange={handleChanges}
                value={member.name}
            />
            <label htmlFor="email">Email</label>
            <input
                id="email"
                type="text"
                name="email"
                onChange={handleChanges}
                value={member.email}
            />
            <label>
                Role: <select onChange={handleChanges} id="role">
                    <option />
                    <option>Front End</option>
                    <option>Back End</option>
                    <option>UX Designer</option>
                </select>
            </label>



            <button type="submit">Add New Member</button>
        </form>
    );
};

export default FormStructure;


/*
  <select name="cars">
    <option value="volvo">Volvo XC90</option>
    <option value="saab">Saab 95</option>
    <option value="mercedes">Mercedes SLK</option>
    <option value="audi">Audi TT</option>
  </select>

<input
id="role"
type="text"
name="role"
onChange={handleChanges}
value={member.role}
/>

*/