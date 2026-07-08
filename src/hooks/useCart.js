import useCartContext from "./useCartContext";

function useCart() {
  const { cart, dispatch, totalItems, totalPrice } = useCartContext();

  const addToCart = (product) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: product,
    });
  };

  const removeFromCart = (id) => {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: id,
    });
  };

  const increase = (id) => {
    dispatch({
      type: "INCREASE",
      payload: id,
    });
  };

  const decrease = (id) => {
    dispatch({
      type: "DECREASE",
      payload: id,
    });
  };

  const clearCart = () => {
    dispatch({
      type: "CLEAR_CART",
    });
  };

  const isInCart = (id) => {
    return cart.some((item) => item.id === id);
  };

  return {
    cart,
    totalItems,
    totalPrice,
    addToCart,
    removeFromCart,
    increase,
    decrease,
    clearCart,
    isInCart,
  };
}

export default useCart;




