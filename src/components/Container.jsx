import styled from 'styled-components'

const Container = styled.div`
        display: flex;
        text-align: center;
        justify-content: center;
        flex-direction: ${props => props.direction};
        flex-wrap: ${props => props.wrap};
        flex-grow: ${props => props.grow};
        align-items: ${props => props.align};
        
        background-color: ${props => props.bcolor};
        width: ${props => props.width};
        padding: ${props => props.padding};
        margin: ${props => props.margin ? props.margin : "20 5 0 5"};
        border: ${props => props.border};
        border-radius: ${props => props.radius};
        position: ${props => props.position};
        z-index: ${props => props.index};
        left: ${props => props.left};
    `;

export default Container;