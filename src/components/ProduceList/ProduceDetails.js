import { useDispatch } from "react-redux";
import { addToCart } from "../../store/cart"

function ProduceDetails({ produce }) {
  const cartItem = {};
  //use useDispatch to run action.
  const dispatch = useDispatch();

  const handle = () => {
    // e.preventDefault();
    dispatch(addToCart(produce.id));
  }

  return (
    <li className="produce-details">
      <span>{produce.name}</span>
      <span>
        <button
          className={"like-button" + (produce.liked ? " selected" : "")}
        >
          <i className={"fas fa-heart"} />
        </button>
        <button
          className={"plus-button" + (cartItem ? " selected" : "")}
          onClick={handle}
        >
          <i className="fas fa-plus" />
        </button>
      </span>
    </li>
  );
}

export default ProduceDetails;
