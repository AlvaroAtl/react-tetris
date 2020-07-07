import styled from 'styled-components'

const StyledDisplay = styled.div`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    margin: 0 0 20px 0;
    padding: 10px;
    min-height: 30px;
    width: 100%;
    border-radius: 5px;
    color: ${props => (props.gameOver ? '#e84d4d' : '#3b3b3b')};
    background: #f1f1f1;
    box-shadow: 2px 2px 2px rgba(50, 50, 50, 0.6);
    font-family: 'Open Sans', Helvetica, Arial, sans-serif;
    font-size: 0.8rem
`

export default StyledDisplay