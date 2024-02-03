import styled from "styled-components";
import { useContext } from "react";
import { TempCartContext } from "../sections/CartContent.jsx"

const StyledDescription = styled.div`
display: flex;
padding-top: 0.5rem;
flex-direction: column;
align-items: flex-start;

flex: 1 0 0;

`;

const CartProductDescription = () => {
    const tempContext = useContext(TempCartContext);
    const imgLink = `${tempContext.image}`
    const prodctName = `${tempContext.name}`
    const prductCategory = `${tempContext.category} `
    const sex = `${tempContext.sex}` 
    const id = `${tempContext.id}`

    return (
        <StyledDescription>
            <div>
            <img src={imgLink} alt="Bild på cyckel" />
            </div>
            <h3>{prodctName}</h3>
            <p>{id}</p>
            <p>{prductCategory}</p>
            <p>{sex}</p>
        </StyledDescription>
    );
}

export default CartProductDescription;