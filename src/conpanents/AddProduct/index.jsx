import React, { useContext } from "react";
import { ProductContext } from "../../context";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const AddProduct = () => {
  const {
    productUrl,
    productName,
    productPrice,
    productAll,

    setProductUrl,
    setProductName,
    setProductPrice,
    setProductAll,
  } = useContext(ProductContext);
  const error = () =>
    toast.error("Заполните пустые ячейки!!!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  const success = () =>
    toast.success("Продук успешно дабавлен!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  const onChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => setProductUrl(reader.result);
    reader.readAsDataURL(file);
  };
  const addToProduct = () => {
    if (productUrl === "" || productName === "" || productPrice === "") {
      error();
    } else if (productAll.find((el) => el.name === productName)) {
      alert("Такой продукт уже есть");
    } else {
      success();
      let newPoduct = {
        id: productAll.length ? productAll[productAll.length - 1].id + 1 : 1,
        name: productName,
        url: productUrl,
        price: productPrice,
      };
      let resultLocol = JSON.parse(localStorage.getItem("product")) || [];
      resultLocol.push(newPoduct);
      localStorage.setItem("product", JSON.stringify(resultLocol));
      setProductAll(resultLocol);
      setProductName("");
      setProductUrl("");
      setProductPrice("");
    }
  };
  return (
    <div>
      <div id="addProduct">
        <div className="container">
          <div className="flex items-center flex-col pt-16 gap-8">
            <div className="relative z-0 mb-5 group w-96">
              <input
                onChange={onChange}
                style={{
                  color: "white",
                }}
                type="file"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              <label
                for="floating_email"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                AddProduct Url(....)
              </label>
            </div>
            <div className="relative z-0  mb-5 group w-96">
              <input
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                style={{
                  color: "white",
                }}
                type="name"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              <label
                for="floating_email"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                AddProduct Name
              </label>
            </div>
            <div className="relative z-0  mb-5 group w-96">
              <input
                value={productPrice}
                onChange={(e) => setProductPrice(e.target.value)}
                style={{
                  color: "white",
                }}
                type=""
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              <label
                for="floating_email"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                AddProduct Price
              </label>
            </div>
            <button
              onClick={() => addToProduct()}
              className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
            >
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Add Product
              </span>
            </button>
            <ToastContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
