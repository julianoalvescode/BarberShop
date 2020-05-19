import styled from 'styled-components';
import { colors } from '~/styles/settings';

export const Container = styled.div`
    height: 64px;
    padding: 0 30px;
    background-color: ${colors.black};
`;

export const Content = styled.div`
    height: 64px;
    max-width: 900px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    nav {
        display: flex;
        align-items: center;

        svg {
            margin-right: 20px;
            padding-right: 20px;
            border-right: 1px solid #eee;
        }
    }

    a {
        color: ${colors.primary};
    }

    aside {
        display: flex;
        align-items: center;
    }
`;

export const Profile = styled.div`
    display: flex;
    margin-left: 20px;
    padding-left: 20px;
    border-left: 1px solid #eeee;

    div {
        text-align: right;
        margin-right: 10px;

        strong {
            display: block;
            color: #fff;
        }

        a {
            display: block;
            margin-top: 2px;
            font-size: 12px;
            color: #ffff;
        }
    }

    img {
        height: 32px;
        width: 32px;
        border-radius: 50%;
    }
`;
