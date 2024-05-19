import axios from "axios";
import React, { createContext, useContext, useReducer, useState } from "react";
import { API } from "../helpers/const";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { type } from "@testing-library/user-event/dist/type";

const productContext = createContext();
export const useProduct = () => useContext(productContext);

const INIT_STATE = {
  product: [],
  oneProduct: {},
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET":
      return { ...state, product: action.payload };

    case "GET_ONE":
      return { ...state, oneProduct: action.payload };

    default:
      return state;
  }
}; 

///?
const ProductContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  // const [product, setProduct] = useState([]);
  // const [oneProduct, setOneProduct] = useState({})

  const location = useLocation();

  //! ADD RPODUCT
  async function addProduct(newProduct) {
    await axios.post(API, newProduct);
  }
  //! ADD RPODUCT

  //! GET PRODUCT
  async function readProduct() {
    let { data } = await axios(`${API}/${window.location.search}`);
    // setProduct(data)
    dispatch({
      type: "GET",
      payload: data,
    });
  }
  //! GET PRODUCT

  //! DELETE PRODUCT
  async function deleteProduct(id) {
    await axios.delete(`${API}/${id}`);
    readProduct();
  }
  //! DELETE PRODUCT

  //! PRODUCT PAGINATION
  const [page, setPage] = useState(1);

  const itemPerPage = 6;

  const count = Math.ceil(state.product.length / itemPerPage);

  function currentPage() {
    const start = (page - 1) * itemPerPage;
    const end = start + itemPerPage;
    return state.product.slice(start, end);
  }
  //! PRODUCT PAGINATION

  //! GET ONE PRODUCT
  async function getOneProduct(id) {
    let { data } = await axios.get(`${API}/${id}`);
    // setOneProduct(data)
    dispatch({
      type: "GET_ONE",
      payload: data,
    });
  }
  //! GET ONE PRODUCT

  //! EDIT PRODUCT
  async function editProduct(id, editedProduct) {
    await axios.patch(`${API}/${id}`, editedProduct);
    readProduct();
  }
  //! EDIT PRODUCT

  //! FILTER PRODUCT
  const searchParams = useSearchParams();
  const navigate = useNavigate();

  function filterProduct(query, value) {
    const searchedProduct = new URLSearchParams(location.search);

    if (value === "all") {
      searchedProduct.delete(query);
    } else {
      searchedProduct.set(query, value);
    }

    const url = `${location.pathname}?${searchedProduct}`;
    navigate(url);
    readProduct();
  }
  //! FILTER PRODUCT


  //todo FILTER BY 
  function filterByColor(query, value) {
    const searchedByColor = new URLSearchParams(location.search)

    if(value === 'allcolors') {
      searchedByColor.delete(query)
    } else {
      searchedByColor.set(query, value)
    }

    const url2 = `${location.pathname}?${searchedByColor}`
    navigate(url2)
    readProduct()
  }
  //todo FILTER BY COLOR



  //! SEARCH PRODUCT
  function searchProduct (value) {
    let res = state.product.filter((el) => el.carModel.toLowerCase().includes(value.toLowerCase()))

    dispatch({
        type: "GET",
        payload: res,
      })
  }
  //! SEARCH PRODUCT



  //! FILTER BY PRICE
  function filterByPrice(value) {
    if(value === 'e') {
        let res = state.product.filter((a, b) => b.carPrice - a.carPrice)
        dispatch({
            type: "GET",
            payload: res,
        })
    } else {
        let res = state.product.filter((a, b) => a.carPrice - b.carPrice)
        dispatch({
            type: "GET",
            payload: res,
        })
    }
  }
  //! FILTER BY PRICE




  const values = {
    addProduct,
    readProduct,
    product: state.product,
    deleteProduct,
    currentPage,
    count,
    setPage,
    getOneProduct,
    oneProduct: state.oneProduct,
    // setOneProduct,
    editProduct,
    filterProduct,
    searchProduct,
    filterByPrice,
    filterByColor,
  };
  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContext;
