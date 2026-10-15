
import React, { use } from 'react';
import { Link } from 'react-router';
import Swal from 'sweetalert2';
import { AuthContext } from '../../context/AuthContext/AuthContext';

const Register = () => {
    const { createUser } = use(AuthContext);

    const handleRegister = (event) => {
        event.preventDefault();

        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        console.log(name, email, password);

        createUser(email, password)
            .then(result => {
                console.log(result.user);

                // Success notification
                Swal.fire({
                    icon: 'success',
                    title: 'Registration Successful!',
                    text: 'Your account has been created successfully.',
                    confirmButtonText: 'OK'
                });

                event.target.reset();
            })
            .catch(error => {
                console.log(error);

                // Error notification
                Swal.fire({
                    icon: 'error',
                    title: 'Registration Failed!',
                    text: error.message,
                    confirmButtonText: 'Try Again'
                });
            });
    };

    return (
        <div className="reg-log reg register-form card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl reg-form">
            <div className="card-body">

                <h1 className="text-5xl font-bold">
                    Register please!
                </h1>

                <form onSubmit={handleRegister}>
                    <fieldset className="fieldset">

                        <label className="label">Name</label>
                        <input
                            type="text"
                            name="name"
                            className="rbn input"
                            placeholder="Name"
                            required
                        />

                        <label className="label">Email</label>
                        <input
                            type="email"
                            name="email"
                            className="rbn input"
                            placeholder="Email"
                            required
                        />

                        <label className="label">Password</label>
                        <input
                            type="password"
                            name="password"
                            className="rbn input"
                            placeholder="Password"
                            required
                        />

                        <button className="hover rbn btn btn-neutral mt-4">
                            Register
                        </button>

                    </fieldset>
                </form>

                <p>
                    Already have an account? please{' '}
                    <Link
                        className="text-blue-500 hover:text-red-500"
                        to="/login"
                    >
                        Login
                    </Link>
                </p>

            </div>
        </div>
    );
};

export default Register;
