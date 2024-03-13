import React, { useContext } from "react";
import { ProductContext } from "../../context";
const Product = () => {
  const { productAll, basket, setBasket } = useContext(ProductContext);
  const addToBasket = (data) => {
    let findProduct = basket.find((el) => el.id === data.id);
    if (!findProduct) {
      let res = JSON.parse(localStorage.getItem("basket")) || [];
      data.quantity = 1;
      res.push(data);
      localStorage.setItem("basket", JSON.stringify(res));
      setBasket(res);
    } else {
      let changeBasket = basket.map((el) =>
        el.id === data.id ? { ...el, quantity: el.quantity + 1 } : el
      );
      localStorage.setItem("basket", JSON.stringify(changeBasket));
      setBasket(changeBasket);
    }
  };
  return (
    <div>
      <div id="">
        <div className="container">
          <div className="flex items-start flex-wrap gap-9 mt-20">
            {productAll.map((el) => (
              <div className="max-w-sm bg- border text-center border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                  <img
                    src={el.url}
                    alt="img"
                    style={{
                      width: "300px",
                      height: "200px",
                    }}
                  />
                </a>
                <div className="p-5 flex items-center justify-between">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-blue-900 dark:text-white">
                    {el.name}
                  </h5>

                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-yellow-900 dark:text-white">
                    {el.price}$
                  </h5>
                </div>
                <button
                  onClick={() => addToBasket(el)}
                  type="button"
                  class="еext-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                >
                  Add To Basket
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
