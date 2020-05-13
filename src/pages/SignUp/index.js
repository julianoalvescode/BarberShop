import React from 'react';

import { Form, Input } from '@rocketseat/unform';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

const schema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string()
        .email('Enter a valid email')
        .required('Email is required'),
    password: Yup.string()
        .min(8, 'Minimum 8 characters')
        .required('Password is required'),
});

const SignUp = () => {
    function handleSubmit(data) {
        console.tron.log(data);
    }

    return (
        <>
            <Form onSubmit={handleSubmit} schema={schema}>
                <div className="form__row">
                    <Input
                        type="text"
                        name="name"
                        placeholder="Your name here"
                    />
                </div>
                <div className="form__row">
                    <Input
                        type="email"
                        name="email"
                        placeholder="Your email here"
                    />
                </div>
                <div className="form__row">
                    <Input
                        type="password"
                        name="password"
                        placeholder="Your password here"
                    />
                </div>
                <button type="submit">Register</button>
                <Link to="/">Login</Link>
            </Form>
        </>
    );
};

export default SignUp;
