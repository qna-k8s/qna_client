import styled,{css} from 'styled-components'

const plainButton = css`
background-color: white;
color: black;
`
const redButton = css`
background-color: #673ab7;
color: white;
`
const getButtonStyles = props =>{
    if(props.isHighlighted){
        return redButton;
    }
    return plainButton;
}
export const CustomButtonContainer = styled.button`
font-size: 15px;
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;
height: 40px;
min-width: 165px;
width: auto;
${getButtonStyles}
`