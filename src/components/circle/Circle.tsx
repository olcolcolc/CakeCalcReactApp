import styled from "@emotion/styled";
import React, { ReactNode } from 'react';
import { theme } from "../../styles/theme";

const CircleDiv = styled.div`
    display: flex;
    z-index: 1;
    background-color: ${theme.colors.white};
    color: ${theme.colors.black};
    border-radius: 50%;
    height: 30px;
    width: 30px;
    justify-content: center;
    align-items: center;
    border: 3px solid #e0e0e0;
    transition: 0.4s ease;

    &.active{
        border-color: ${theme.colors.startButton};
    }
`

interface CircleProps {
    children: ReactNode;
    classname: string;
}

const Circle: React.FC<CircleProps> = ({ children, classname }) => {
    return (
        <CircleDiv className={classname}>{children}</CircleDiv>
    )
}

export default Circle;
