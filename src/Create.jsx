// import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom';

// function Create() {

// const [name, setName] = useState('');
// const [email, setEmail] = useState('');

// const navigate= useNavigate();

// const handleSubmit = () => { navigate('/'); }

//   return (
//     <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
//       <div className='w-50 border bg-secondary text-white p-5'>
//         <h3>Ajouter un nouveau utilisateur</h3>
//         <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="name">Name : </label>
//           {/* e.target.value récupère les nouvelles valeurs saisies daans le champ / setName pour mettre à jour la valeur initiale avec la nouvelle valeur*/}
//           <input type="text" name='name' className='form-control' value={name} onChange={(e)=> setName(e.target.value)} placeholder='Entrez votre nom complet'/>
//         </div>

//         <div>
//           <label htmlFor="email">Email : </label>
//           <input type="email" name='email' className='form-control' value={email} onChange={(e)=> setEmail(e.target.value)}  placeholder='Entrez votre email'/>
//         </div> <br />

//         <button className='btn btn-info' >Envoyer</button>

//         </form>
//       </div>
//     </div>
//   )
// }

// export default Create


import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { addUsers } from './redux/Userreducer';
function Create() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const users = useSelector((state) => state.users)
    console.log(users);
    const handleSubmit = (e) => {

        dispatch(addUsers({
            id: users[users.length - 1].id + 1, email, name
        }));
        navigate("/");
        e.preventDefault();
        console.log(name, email);

    }
    return (
        <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
            <div className='w-50 border bg-secondary text-white p-5'>
                <h3>Ajouter un nouveau utilisateur</h3>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor='name'>Name:</label>
                        <input type='text' name='name' id='name' value={name} onChange={(e) => setName(e.target.value)} className='form-control' placeholder='Entrer votre nom complet' />
                    </div>
                    <div>
                        <label htmlFor='email'>Email:</label>
                        <input type='email' name='email' id='email' value={email} onChange={(e) => setEmail(e.target.value)} className='form-control' placeholder='Entrer votre email' />
                    </div>
                    <br />

                    <button className='btn btn-info'>Envoyer</button>
                </form>
            </div>
        </div>
    )
}

export default Create