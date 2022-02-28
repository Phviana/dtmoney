import styled from "styled-components";

export const Container = styled.header`
    background: var(--blue);   
`;

export const Content = styled.div`
    max-width: 1120px;
    display:flex;
    justify-content: space-between;
    margin: auto;
    padding: 2rem 1rem 12rem;

    button {
        background: var(--blue-light);
        color: #FFF;
        font-size: 1rem;
        border-radius: 0.25rem;
        border: 0;
        padding: 0 2rem;
        height: 3rem;

        transition: filter 0.2s;

        &:hover{
            filter: brightness(0.9);
        }
    }
`;