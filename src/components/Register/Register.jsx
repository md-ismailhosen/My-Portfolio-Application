//import { createUserWithEmailAndPassword } from 'firebase/auth';
import { Result } from 'postcss';
import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../../context/AuthContext/AuthContext';
//import { auth } from '../../Firebase/Firebase.init';

const Register = () => {
    const {createUser} = use(AuthContext)
    //console.log('in the register', authInfo)

    const handleRegister = (event) =>{
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email,password)

        createUser(email, password)
        .then(result =>{
            console.log(result.user)
        })
        .catch(error =>{
            console.log(error)
        });
        
       
        
    }

   /*  const handleRegister = (even) =>{
        even.preventDefault();
        const name = even.target.name.value;
        const email = even.target.email.value;
        const password = even.target.password.value;
        console.log(name,email, password);

        createUserWithEmailAndPassword(auth, email, password)
        .then(result =>{
            console.log(result)
        })
        .catch(error => {
            console.log(error)
        })
        
    } */
    return (

        <div className="reg-log reg register-form  card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl reg-form">
            <div className=" card-body">
                <h1 className="text-5xl font-bold">Register please!</h1>
                <form onSubmit={handleRegister}>
                    <fieldset className="fieldset">
                        <label className="label">Name</label>
                        <input type="text" name='name' className="rbn input" placeholder="Name" />

                        <label className="label">Email</label>
                        <input type="email" name='email' className="rbn input" placeholder="Email" />

                        <label className="label">Password</label>
                        <input type="password" name='password' className="rbn input" placeholder="Password" />

                        
                        <button className="hover rbn btn btn-neutral mt-4">Register</button>
                    </fieldset>
                </form>
                <p>Already have an account? please <Link className='text-blue-500 hover:text-red-500' to='/login'>Login</Link></p>
            </div>
        </div>

    );
};

export default Register;