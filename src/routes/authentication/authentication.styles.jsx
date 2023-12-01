import styled from 'styled-components';

export const AuthenticationContainer = styled.div`
    display: flex;
    width: 900px;
    justify-content: space-between;
    margin: 30px auto;

    @media (max-width: 768px) {
        flex-direction: column;
        width: 380px;
    }
`;
