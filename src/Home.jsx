import React from 'react'
import { Link } from "react-router-dom"
// import { userData } from "./Data";
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser } from './redux/UserReducer';
function Home() {
    const users = useSelector((state) => state.users)
    const dispatch = useDispatch();
    // const navigate = useNavigate();
    const handeleDelete = (id) => {
        dispatch(deleteUser({
            id: id
        }));
        // navigate('/');
    }
    return (
        <div className='container'>
            <h2>Crud app with redux toolkit</h2>
            <Link className='btn btn-success my-3' to="/add">Ajouter</Link>
            <h3>liste des utilisateur</h3>
            <table className='table'>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Nom</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((data, index) => {
                            return <tr key={index}>
                                <td>{data.id}</td>
                                <td>{data.name}</td>
                                <td>{data.email}</td>
                                <td>
                                    <Link to={`/edit/${data.id}`} className='btn btn-primary btn-sm'>Modifier</Link>
                                    <Link className='btn btn-danger btn-sm' onClick={() => { handeleDelete(data.id); }}>Supprimer</Link>
                                </td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div >
    )
}

export default Home