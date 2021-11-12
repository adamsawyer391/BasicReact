
// // import './App.css';
// import React, { useState } from 'react';

// const App = (props) => {
//   const [people, setPeople] = useState([
//     {
//       firstName: 'John',
//       lastName: 'Smith'
//     },
//     {
//       firstName: 'Jane',
//       lastName: 'Doe'
//     }
//   ]);
//   const [person, setPerson] = useState({ firstName: '', lastName: '' });
//   const onChange = (event) => {
//     setPerson({ ...person, [event.target.value] : event.target.value});
//   }
//   const onSubmit = (event) => {
//     event.preventDefault();
//     if(person.firstName.trim() === '' || person.lastName.trim() === '') return;

//     const newPerson = {
//       firstName: person.firstName.trim(),
//       lastName: person.lastName.trim(),
//     };
//     setPeople([...people, newPerson]);

//   }
  
//   return (
//     <div className="container">
//       <div className="row">
//         <div className="col">
//           <h2>Add a Person</h2>
//           <hr />
//           <form onSubmit={onSubmit}>
//             <div className="form-group">
//               <input 
//                 type="text"
//                 name="firstName"
//                 placeholder="First Name"
//                 value={person.firstName}
//                 onChange={onChange}
//                 className="form-control"
//               />
//             </div>
//             <br />
//             <div className="form-group">
//               <input 
//                 type="text"
//                 name="lastName"
//                 placeholder="Last Name"
//                 value={person.lastName}
//                 onChange={onChange}
//                 className="form-control"
//               />
//             </div>
//             <br />
//             <button className="btn btn-success" type="submit">Add Person</button>
//           </form>
//         </div>
//         <div className="col">
//           <h2>People:</h2>
//           <hr />
//           {
//             people.map(p => (
//               <div key={Math.random() * 1000000000 }>
//                 <p> {p.firstName} {p.lastName} </p>
//               </div>
//             ))
//           }
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;














/**
 * This is the one that works. Now commenting it out for part II: useEffect. This was for episode 1: useState()
 */

// import React, { useState } from 'react';

// const App = () => {
//   const [people, setPeople] = useState([
//     {
//       firstName: 'John',
//       lastName: 'Doe'
//     },
//     {
//       firstName: 'Jane',
//       lastName: 'Doe'
//     }
//   ]);
//   const [person, setPerson] = useState({ firstName: '', lastName: '' });
//   const onChange = (event) => {
//     setPerson({ ...person, [event.target.name]: event.target.value });
//   };
//   const onSubmit = (event) => {
//     event.preventDefault();
//     if (person.firstName.trim() === '' || person.lastName.trim() === '') return;

//     const newPerson = {
//       firstName: person.firstName.trim(),
//       lastName: person.lastName.trim()
//     };

//     setPeople([...people, newPerson]);
//     setPerson({ firstName: '', lastName: '' });
//   };
//   return (
//     <div className="container">
//       <div className="row">
//         <div className="col">
//           <h2>Add a person: </h2>
//           <hr />
//           <form onSubmit={onSubmit}>
//             <div className="form-group">
//               <input
//                 type="text"
//                 className="form-control"
//                 name="firstName"
//                 placeholder="First Name.."
//                 value={person.firstName}
//                 onChange={onChange}
//               />
//             </div>
//             <div className="form-group">
//               <input
//                 type="text"
//                 className="form-control"
//                 name="lastName"
//                 placeholder="Last Name.."
//                 value={person.lastName}
//                 onChange={onChange}
//               />
//             </div>
//             <button className="btn btn-success" type="submit">
//               Add person
//             </button>
//           </form>
//         </div>
//         <div className="col">
//           <h2>People: </h2>
//           <hr />
//           {people.map((p) => (
//             <div key={Math.random() * 1000000000}>
//               <p>
//                 {p.firstName} {p.lastName}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default App;











import React, { useState } from 'react';

import Form from './components/Form';
import People from './components/People';
import NewestPerson from './components/NewestPerson';

const App = () => {
  const [people, setPeople] = useState([
    {
      firstName: 'John',
      lastName: 'Doe'
    },
    {
      firstName: 'Jane',
      lastName: 'Doe'
    }
  ]);
  const addPerson = (person) => {
    setPeople([...people, person]);
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <Form addPerson={addPerson} />
        <People people={people} />
        <NewestPerson newestPerson={people[people.length - 1]} />
      </div>
    </div>
  );
};

export default App;