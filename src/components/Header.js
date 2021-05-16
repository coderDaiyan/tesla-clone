import CloseIcon from '@material-ui/icons/Close';
import MenuIcon from '@material-ui/icons/Menu';
import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import LogoImg from '../assets/images/logo.svg';
import { selectCars } from '../features/car/carSlice';

function Header() {
    const [burgerStatus, setBurgerStatus] = React.useState(false);
    const cars = useSelector(selectCars);
    console.log(cars);

    return (
        <Container>
            <a style={{ marginLeft: '15px' }} href="/">
                <img src={LogoImg} alt="" />
            </a>
            <Menu>
                {cars &&
                    cars.map((car, index) => (
                        <p>
                            <a key={index} href="/">
                                {car}
                            </a>
                        </p>
                    ))}
            </Menu>
            <RightMenu>
                <a href="/">Shop</a>
                <a href="/">Tesla Account</a>
                <CustomMenu onClick={() => setBurgerStatus(true)} />
            </RightMenu>
            <BurgerNav show={burgerStatus}>
                <CloseWrapper onClick={() => setBurgerStatus(false)}>
                    <CustomClose />
                </CloseWrapper>
                {cars &&
                    cars.map((car, index) => (
                        <li>
                            <a key={index} href="/">
                                {car}
                            </a>
                        </li>
                    ))}
                <li>
                    <a href="/">Existing Inventory</a>
                </li>
                <li>
                    <a href="/">Used Inventory</a>
                </li>
                <li>
                    <a href="/">Trade-In</a>
                </li>
                <li>
                    <a href="/">CyberTruck</a>
                </li>
                <li>
                    <a href="/">Roadaster</a>
                </li>
            </BurgerNav>
        </Container>
    );
}

export default Header;

const Container = styled.div`
    /* width: 100%; */
    min-height: 60px;
    position: fixed;
    display: flex;
    justify-content: space-between;
    align-items: center;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
`;

const Menu = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;

    a {
        font-weight: 600;
        text-transform: uppercase;
        padding: 0 10px;
        flex-wrap: nowrap;
    }

    @media (max-width: 768px) {
        display: none;
    }
`;

const RightMenu = styled.div`
    display: flex;
    align-items: center;
    a {
        font-weight: 600;
        text-transform: uppercase;
        margin-right: 10px;
    }
`;

const CustomMenu = styled(MenuIcon)`
    cursor: pointer;
    margin-right: 10px;
`;

const BurgerNav = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    background: white;
    width: 300px;
    z-index: 100;
    display: flex;
    flex-direction: column;

    transform: ${(props) => (props.show ? 'translateX(0)' : 'translateX(100%)')};
    transition: transform 0.5s linear;

    li {
        list-style: none;
        padding: 15px 0;
        margin-left: 15px;
        margin-top: 2px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.2);
        text-align: start;
    }

    a {
        font-weight: 700;
    }
`;

const CustomClose = styled(CloseIcon)`
    margin-right: 15px;
    margin-top: 15px;
    margin-bottom: 20px;
    cursor: pointer;
`;

const CloseWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`;
