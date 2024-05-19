import React, { useState } from 'react';
import { useProduct } from '../../context/ProductContext';
import { useNavigate } from 'react-router-dom';

const init = {
    carImage: '',
    carName: '',
    carModel: '',
    engineType: '',
    horsePower: '',
    carPrice: '',
    category: '',
    color: '',
}

const AddProduct = () => {

    const { addProduct } = useProduct();

    const navigate = useNavigate()

    const [inputValues, setInputValues] = useState(init);

    function handleInputValues (e) {
        if(e.target.name === 'carPrice') {
            let obj = {...inputValues, [e.target.name]: +e.target.value}
        setInputValues(obj)
        } else {
            let obj = {...inputValues, [e.target.name]: e.target.value}
        setInputValues(obj)
        }
    }

    // console.log(inputValues);

    function handleSubmit () {
        addProduct(inputValues)
        navigate('/listProduct')
    }

    return (
        <div>
            <div className="MainAddProduct">
                <div className="container">
                    <div className="addProduct">
                        <div className="productBlock">
                        <input onChange={handleInputValues} type="text" name='carImage' placeholder='Car Image'/>
                        <input onChange={handleInputValues} type="text" name='carName' placeholder='Car Name'/>
                        <input onChange={handleInputValues} type="text" name='carModel' placeholder='Car Model'/>
                        <input onChange={handleInputValues} type="text" name='engineType' placeholder='Engine Type'/>
                        <input onChange={handleInputValues} type="text" name='horsePower' placeholder='Horse Power'/>
                        <input onChange={handleInputValues} type="text" name='carPrice' placeholder='Car Price'/>
                        <input onChange={handleInputValues} type="text" name='category' placeholder='Category'/>
                        <input onChange={handleInputValues} type="text" name='color' placeholder='Color'/>
                        <button onClick={handleSubmit}>CREATE</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;