import React from 'react'

function Update() {
  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
    <div className='w-50 border bg-secondary text-white p-5'>
      <h3>Modifier un utilisateur</h3>
      <form>
      <div>
        <label htmlFor="name">Name : </label>
        <input type="text" name='name' className='form-control' placeholder='Entrez votre nom complet'/>
      </div>

      <div>
        <label htmlFor="email">Email : </label>
        <input type="email" name='email' className='form-control' placeholder='Entrez votre email'/>
      </div> <br />

      <button className='btn btn-info'>Modifier</button>

      </form>
    </div>
  </div>
  )
}

export default Update
