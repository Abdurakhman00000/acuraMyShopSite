import React, { useEffect } from 'react';
import { useProduct } from '../../context/ProductContext';
import ProductPagination from './ProductPagination';
import { Link, useNavigate } from 'react-router-dom';
import FilterProduct from './FilterProduct';
import FilterByColor from './FilterByColor';

const ListProduct = () => {

    const {readProduct, deleteProduct, currentPage, searchProduct, filterByPrice} = useProduct();

    const navigate = useNavigate();

    useEffect(() => {
        readProduct();
    }, [])

    return (
        <div className='cart'>

                 <div className="paginationBlock">
            <ProductPagination />
            </div>

            <div className="searchBlock">
                <input onChange={(e) => searchProduct(e.target.value)} type="search" placeholder='Search...' />
            </div>

            <div className="filterByPrice">
                <select onChange={(e) => filterByPrice(e.target.value)}>
                    <option value='e'>First EXPENSIVE</option>
                    <option value='c'>First CHEAP</option>
                </select>
            </div>

            <div className="filterBlock">
            <FilterProduct />
            </div>

            <div className="filterByColor">
                <FilterByColor />
            </div>


            <div className="container">
            {
                currentPage().map((el, index) => (
                    <div key={index} id="superMine">
                            <div  className="main-block">
                        <div className="card-block">
                        <img src={el.carImage} alt="" />

                            <div className="main-active">
                            <p className='mainName'>{el.carName}</p>
                            <p className='mainName2'>{el.carModel}</p>
                            <p className='mainEngine'><span>Engine:</span> {el.engineType}</p>
                            <div className="spec-block">
                                <p className='mainPower'><span>Power:</span>  {el.horsePower}hp</p>
                                <p className='mainPrice'><span>Price:</span> {el.carPrice}$</p>
                            </div>
                            <div className="active-block">
                                <Link to='/signUp'>
                                <button className='buyButton'>BUY</button>
                                </Link>
                                <button onClick={() => navigate(`/editProduct/${el.id}`)} className='editButton'>EDIT</button>
                                <button onClick={() => deleteProduct(el.id)} className='delButton'>DELETE</button>
                            </div>
                            </div>

                        </div>
                    </div>
                    </div>
                ))
            }
            
            </div>
        </div>
    );
};

export default ListProduct;