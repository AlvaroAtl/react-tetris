import styled from 'styled-components'

export const StyledCell = styled.div`
    width: auto;
    background: ${props => (props.type === 0 ? 'rgba(' + props.color + ')' : 'rgba(' + props.color + ', 0.85)')};
    border: ${props => (props.type === 0 ? '0' : '4px solid')};
    border-bottom-color: ${props => (props.type === 0 ? 'rgba(' + props.color + ')' : 'rgba(' + props.color + ', 0.1)')};
    border-right-color: ${props => (props.type === 0 ? 'rgba(' + props.color + ')' : 'rgba(' + props.color + ', 1)')};
    border-top-color: ${props => (props.type === 0 ? 'rgba(' + props.color + ')' : 'rgba(' + props.color + ', 1)')};
    border-left-color: ${props => (props.type === 0 ? 'rgba(' + props.color + ')' : 'rgba(' + props.color + ', 0.3)')};
`