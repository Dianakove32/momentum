import styled from "styled-components";
import { IoIosCloseCircleOutline } from 'react-icons/io';

export const DishWrapper = styled.div `
display: flex;
padding: 10px;
  width: 90%;
  margin: 0 auto;
  background: unset;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  img {
padding-top:10px;
    width:200px;
    height:200px;
    border-radius:4px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
`
export const WrapperContent = styled.div `
padding-left:10px;
text-align: justify;
font-size:15px;
h2{
    margin-top:0px
}

`
export const  Imag= styled.img `
padding-top:10px;
    width:200px;
    height:200px;
    border-radius:4px
    `
export const CloseIcon = styled(IoIosCloseCircleOutline)`
width: 30px;
height: 30px;
position: absolute;
top: 5px;
right: 5px;
`;