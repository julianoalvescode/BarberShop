import styled from 'styled-components';
import { colors } from '~/styles/settings';
import { ButtonPrimary, Input } from '~/styles/components';

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
            ${Input}
        }
        .form__row {
            display: grid;
            align-items: center;
            span {
                color: ${colors.red};
                margin-top: 8px;
            }
        }
        .form__icon {
            background-color: ${colors.light_black};
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
