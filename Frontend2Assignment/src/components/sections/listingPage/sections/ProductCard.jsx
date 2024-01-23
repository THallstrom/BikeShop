import TopContent from "../individuals/TopContent";
import PCardDescription from "../individuals/PCardDescription";
import PriceBuyButton from "../individuals/PriceBuyButton";
import PropTypes from "prop-types";
import styled from "styled-components";

const PCard = styled.div`
	display: flex;
	width: 305px;
	height: 550px;
	padding: 16px;
	flex-direction: column;
	justify-content: space-between;
	align-items: flex-start;
	border: 1px solid #798490;
	border-radius: 0.7rem;
	box-shadow: 0 0 5px
`;

const ProductCard = ({ name, description, price, pRange, image }) => {
	return (
		<PCard>
			<TopContent name={name} image={image} />
			<PCardDescription description={description} pRange={pRange} />
			<PriceBuyButton price={price} />
		</PCard>
	);
};
ProductCard.propTypes = {
	name: PropTypes.string,
	description: PropTypes.string,
	price: PropTypes.string,
	pRange: PropTypes.string,
	image: PropTypes.string,
};

export default ProductCard;
