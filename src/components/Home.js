import React from 'react';
import styled from 'styled-components';
import CarInfo from '../assets/carInfo.json';
import Section from './Section';

function Home() {
    return (
        <Container>
            {CarInfo.map((car) => (
                <Section car={car} key={car.id} />
            ))}
        </Container>
    );
}

export default Home;

const Container = styled.div`
    height: 100vh;
`;
