import React, { useEffect, useState } from 'react';
import { useProduct } from '../../context/ProductContext';
import { useNavigate, useParams } from 'react-router-dom';




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

const EditProduct = () => {

    const [inputValues, setInputValues] = useState(init);

    const {getOneProduct, oneProduct, editProduct} = useProduct()


    const {id} = useParams()
    const navigate = useNavigate()

    // console.log(id);

    useEffect(() => {
        getOneProduct(id)
    }, [])

    useEffect(() => {
        if(oneProduct) {
            setInputValues(oneProduct)
        }
    }, [oneProduct])


    function handlerEditInputs () {
        editProduct(id, inputValues)
        navigate('/listProduct')
    }



    function handleInputValues (e) {
        if(e.target.name === 'carPrice') {
            let obj = {...inputValues, [e.target.name]: +e.target.value}
        setInputValues(obj)
        } else {
            let obj = {...inputValues, [e.target.name]: e.target.value}
        setInputValues(obj)
        }
    }



    return (
        <div>
             <div className="MainAddProduct2">
                <div className="container">
                    <div className="addProduct2">
                        <div className="productBlock2">
                        <input onChange={handleInputValues} value={inputValues.carImage} type="text" name='carImage' placeholder='Car Image'/>
                        <input onChange={handleInputValues} value={inputValues.carName} type="text" name='carName' placeholder='Car Name'/>
                        <input onChange={handleInputValues} value={inputValues.carModel} type="text" name='carModel' placeholder='Car Model'/>
                        <input onChange={handleInputValues} value={inputValues.engineType} type="text" name='engineType' placeholder='Engine Type'/>
                        <input onChange={handleInputValues} value={inputValues.horsePower} type="text" name='horsePower' placeholder='Horse Power'/>
                        <input onChange={handleInputValues} value={inputValues.carPrice} type="text" name='carPrice' placeholder='Car Price'/>
                        <input onChange={handleInputValues} value={inputValues.category} type="text" name='category' placeholder='Category'/>
                        <input onChange={handleInputValues} value={inputValues.color} type="text" name='color' placeholder='Color'/>
                        <button onClick={handlerEditInputs}>SAVE</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditProduct;