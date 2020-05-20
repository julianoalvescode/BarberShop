import styled from 'styled-components';
import { darken } from 'polished';
import { Input } from '~/styles/components';
import { colors } from '~/styles/settings';

export const Container = styled.div`
    max-width: 600px;
    margin: 50px auto;

    form {
        display: flex;
        flex-direction: column;
        margin-top: 30px;

        input {
            ${Input}
            margin: 0 0 10px;

            &::placeholder {
                color: rgba(255, 255, 255, 0.7);
            }
        }

        span {
            color: #fb6f91;
            align-self: flex-start;
            margin: 0 0 10px;
            font-weight: bold;
        }

        button {
            margin: 5px 0;
            height: 44px;
            background: ${colors.primary};
            color: #fff;
            border: 0;
            border-radius: 4px;
            font-size: 16px;
            font-weight: bold;
            transition: background 0.2s;

            &:hover {
                background: ${darken(0.03, colors.primary)};
            }
        }
    }

    > button {
        width: 100%;
        margin: 10px 0;
        height: 44px;
        background: ${colors.red};
        color: #fff;
        border: 0;
        border-radius: 4px;
        font-size: 16px;
        font-weight: bold;
        transition: background 0.2s;

        &:hover {
            background: ${darken(0.08, colors.red)};
        }
    }
`;
