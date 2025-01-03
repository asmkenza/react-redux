// import React from 'react'

// function Update() {
//   return (
//     <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
//     <div className='w-50 border bg-secondary text-white p-5'>
//       <h3>Modifier un utilisateur</h3>
//       <form>
//       <div>
//         <label htmlFor="name">Name : </label>
//         <input type="text" name='name' className='form-control' placeholder='Entrez votre nom complet'/>
//       </div>

//       <div>
//         <label htmlFor="email">Email : </label>
//         <input type="email" name='email' className='form-control' placeholder='Entrez votre email'/>
//       </div> <br />

//       <button className='btn btn-info'>Modifier</button>

//       </form>
//     </div>
//   </div>
//   )
// }

// export default Update


import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { editUser } from './redux/UserReducer';
function Update() {
    const { id } = useParams();
    const users = useSelector((state) => state.users);
    const exisitingUser = users.filter((user) => user.id == id)
    console.log(exisitingUser);
    const [name, setName] = useState(exisitingUser[0].name);
    const [email, setEmail] = useState(exisitingUser[0].email);
    const dispatch = useDispatch();
    // const navigate = useNavigate();
    const hundelSubmit = (e) => {
        e.preventDefault();
        dispatch(editUser({
            id: id, email: email, name: name
        }));
        // navigate('/');
    }
    return (
        <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
            <div className='w-50 border bg-secondary text-white p-5'>
                <h3>Modifier un utilisateur</h3>
                <form onSubmit={hundelSubmit}>
                    <div>
                        <label htmlFor='name'>Name:</label>
                        <input type='text' name='name' id='name' value={name} onChange={(e) => { setName(e.target.value) }} className='form-control' placeholder='Entrer votre nom complet' />
                    </div>
                    <div>
                        <label htmlFor='email'>Email:</label>
                        <input type='email' name='email' id='email' value={email} onChange={(e) => { setEmail(e.target.value) }} className='form-control' placeholder='Entrer votre email' />
                    </div>
                    <br />

                    <button className='btn btn-info'>Modifier</button>
                </form>
            </div>
        </div>
    )
}

export default Update