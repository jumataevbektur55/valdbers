import React, { useContext, useEffect } from "react";
import { ProductContext } from "../../context";
const Basket = () => {
  const { basket, setBasket } = useContext(ProductContext);

  const del = (tap) => {
    let res = JSON.parse(localStorage.getItem("basket")) || [];
    let resFilter = res.filter((el) => el.id !== tap.id); // Use !== instead of ===
    localStorage.setItem("basket", JSON.stringify(resFilter));
    setBasket(resFilter); // Update the state with the filtered array
  };
  return (
    <div>
      <div id="basket">
        <div className="container">
          <div className="basket">
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
              <table class="w-full text-sm text-left mt-9 rtl:text-right text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" class="px-6 py-3">
                      Nomer
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Img
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Name
                    </th>

                    <th scope="col" class="px-6 py-3">
                      Price
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Quantity
                    </th>
                    <th scope="col" class="px-6 py-3 text-center">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {basket?.map((el, idx) => (
                    <tr class=" odd:dark:bg-gray-900  even:dark:bg-gray-800 border-b  dark:border-gray-700">
                      <th
                        scope="row"
                        class="px-6 py-4 text-3xl font-medium text-white-900 whitespace-nowrap dark:text-white"
                      >
                        {" "}
                        {idx + 1}
                      </th>
                      <th
                        scope="row"
                        class="px-6 py-4  font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        <img src={el.url} alt="img" width={70} />
                      </th>
                      <td class="px-6 py-4 text-2xl">{el.name}</td>
                      <td class="px-6 py-4 text-2xl">
                        {el.price * el.quantity}$
                      </td>
                      <td class="px-6 py-4 text-2xl">{el.quantity}</td>
                      <td class="px-6 py-4 text-2xl text-center">
                        <button
                          onClick={(e) => del(el)}
                          type="button"
                          class="focus:outline-none   text-white  bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Basket;
