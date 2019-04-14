import React from 'react';
import styled from 'styled-components';
import background from './assets/sea.jpg';

const Jumbotrone = styled.div`
    background: url(${background});
    background-size: cover;
    background-repeat: no-repeat;
    max-width: 100%;
    height: 60vh;
    display: flex;
    align-items: center;
    justify-content: center;
`

const stylesh3 = {
    height: '60px',
    textAlign: 'center',
    color: 'white'
}

const Home = () => {
    return (
        <Jumbotrone>
            <div style={stylesh3}><h3><b>Welcome Home!</b></h3>`</div>
        </Jumbotrone>
    );
};

export default Home;