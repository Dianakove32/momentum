import styled from "styled-components";
import { IoIosCloseCircleOutline } from 'react-icons/io';

export const DishWrapper = styled.div`
width:500px;
position:relative;
display: flex;
padding:20px 10px 10px 10px;
border-radius: 4px;

margin: 0 auto;
background: unset;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
background:#f6f1f1;
  img {
    padding-top:10px;
    width:200px;
    height:200px;
    border-radius:4px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
`
export const WrapperImage = styled.div`
width:210px;
}
`
export const WrapperContent = styled.div`
padding-left:10px;
text-align: justify;
font-size:12px;
h3{
    color: rgb(107, 89, 89);
    margin-top:0px
}
`
export const Imag = styled.img`
    padding-top:10px;
    width:200px;
    height:200px;
    border-radius:4px
    `
export const CloseIcon = styled(IoIosCloseCircleOutline)`
width: 20px;
height: 20px;
position: absolute;
top: 5px;
right: 5px;
color:red;
&:hover{
    cursor:pointer
}
`
export const CloseWidgets = styled(IoIosCloseCircleOutline)`
width: 20px;
height: 20px;
color:red;

&:hover{

    cursor:pointer
}
`
export const Btn = styled.button`
    background-color:  rgb(191, 221, 248);
    border: 1px solid rgb(167, 182, 230);
    padding: 3px;
    border-radius: 4px;
    font-size: 12px;
margin-top:10px;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`
export const QuantityLength = styled.div`
position: absolute;
  display: flex;
justify-content: center;
 align-items:center;
right: -5px;
top: 13px;
width: 20px;
height: 20px;
background: #df6d85;
border-radius: 50%;
`;