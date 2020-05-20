import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import { Container } from './styles';
import { signOut } from '~/store/modules/auth/actions';
import { updateProfileRequest } from '~/store/modules/user/actions';
import AvatarInput from './AvatarInput';

export default function Profile() {
    const dispatch = useDispatch();
    const profile = useSelector((state) => state.user.profile);

    function handleSubmit(data) {
        dispatch(updateProfileRequest(data));
    }

    function handleSignOut() {
        dispatch(signOut());
    }

    return (
        <Container>
            <Form initialData={profile} onSubmit={handleSubmit}>
                <AvatarInput name="avatar_id" />

                <Input name="name" type="text" placeholder="Full name" />
                <Input
                    name="email"
                    type="email"
                    placeholder="Your e-mail address"
                />

                <hr />

                <Input
                    name="oldPassword"
                    type="password"
                    placeholder="Your current password"
                />

                <Input
                    name="password"
                    type="password"
                    placeholder="New password"
                />

                <Input
                    name="confirmPassword"
                    type="password"
                    placeholder="Confirm password"
                />

                <button type="submit">Update Profile</button>
            </Form>

            <button type="button" onClick={handleSignOut}>
                Logout
            </button>
        </Container>
    );
}
