import React from 'react';
import Fade from 'react-reveal/Fade';
import styled from 'styled-components';
import Arrow from '../assets/images/down-arrow.svg';

function Section({ car }) {
    const { title, description, image, leftBtnText, rightBtnText } = car;
    return (
        <Wrap
            style={{
                background: `url(${image})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <Fade top>
                <ItemText>
                    <h1>{title}</h1>
                    <p>{description}</p>
                </ItemText>
            </Fade>
            <Buttons>
                <Fade bottom>
                    <ButtonGroup>
                        <LeftButton>{leftBtnText}</LeftButton>
                        {rightBtnText && <RightButton>Existing Inventory</RightButton>}
                    </ButtonGroup>
                </Fade>
                <DownArrow src={Arrow} />
            </Buttons>
        </Wrap>
    );
}

export default Section;

const Wrap = styled.div`
    z-index: -1;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;
`;

const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 30px;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

const LeftButton = styled.div`
    background: rgba(23, 26, 32, 0.8);
    height: 40px;
    width: 256px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.85;
    text-transform: uppercase;
    font-size: 12px;
    margin: 8px;
    cursor: pointer;
`;

const RightButton = styled(LeftButton)`
    background: white;
    color: black;
    opacity: 0.65;
`;

const DownArrow = styled.img`
    /* margin-top: 20px; */
    height: 40px;
    overflow-y: hidden;
    animation: animateDown infinite 1.5s;
`;

const Buttons = styled.div``;
