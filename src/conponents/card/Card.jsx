import PropTypes from "prop-types";

import {
    CardAuthor,
    CardBody,
    CardTitle,
    CardWrapper} from "./Card.styles";
import {BiUser} from "react-icons/bi";

const Card = (props) => {
    const { item } = props;
    return (
        <CardWrapper>
           <CardTitle>{item?.title}</CardTitle>
            <CardBody>{item.body}</CardBody>
            <CardAuthor> <BiUser /> {item.user.name}</CardAuthor>
        </CardWrapper>
    );
};
Card.propTypes = {
    /** item of posts **/
    item: PropTypes.object,
}
export default Card;