import { css } from 'styled-components';
import { darken } from 'polished';
import { colors } from './settings';

export const ButtonPrimary = css`
    background-color: ${colors.primary};
    color: ${colors.white};
    padding: 17px 0;
    text-align: center;
    border: none;
    border-radius: 4px;
    transition: all 0.2s;

    &:hover {
        background-color: ${darken(0.03, colors.primary)};
    }
`;

export const Input = css`
    width: 100%;
    border: none;
    background: none;
    color: ${colors.white};
    background-color: ${colors.light_black};
    padding: 17px 22px;
    border-radius: 4px;
`;
