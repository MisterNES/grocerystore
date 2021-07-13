import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { removeOne } from '../../store/cart'

function CartItem({ item }) {
  const [count, setCount] = useState(item.count);

  useEffect(() => {
    setCount(item.count);
  }, [item.count]);

  const dispatch = useDispatch();

  const remove = () => {
    dispatch(removeOne(item.id));
  }


  return (
    <li className="cart-item">
      <div className="cart-item-header">
        {item.name}
      </div>
      <div className="cart-item-menu">
        <input
          type="number"
          value={count} />
        <button
          className="cart-item-button"
        >
          +
        </button>
        <button
          className="cart-item-button"
        >
          -
        </button>
        <button
          className="cart-item-button"
          onClick={remove}
        >
          Remove
        </button>
      </div>
    </li>
  )
}

export default CartItem;
