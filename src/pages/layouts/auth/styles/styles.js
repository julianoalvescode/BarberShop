import styled from 'styled-components';
import { colors } from '~/styles/settings';
import { ButtonPrimary } from '~/styles/components';

export const Wrapper = styled.div`
    height: 100%;
    background-color: ${colors.black};
    display: grid;
    grid-template-columns: 236px;
    grid-template-rows: 1fr;
    justify-content: center;
    align-items: center;
`;

export const Content = styled.div`
    width: 100%;

    .logo {
        margin-bottom: 25px;
    }

    form {
        display: grid;
        justify-content: center;
        gap: 10px;

        input {
            width: 100%;
            border: none;
            background: none;
            color: ${colors.white};
        }

        .form__row {
            background-color: ${colors.light_black};
            padding: 17px 22px;
            border-radius: 4px;
            display: flex;
            align-items: center;
        }

        .form__icon {
            margin-right: 15px;
        }

        button {
            ${ButtonPrimary}
            margin-top: 20px;
        }

        a {
            text-align: center;
            color: ${colors.grey};
        }
    }
`;
