import React from 'react';


const Cart = (props) => {
    const {cart} = props;
    let total = 0;
    for(const service of cart){
        total = total + service.price;
    }
    return (
        <div className="">           
            <h3 className="text-3xl">Courses added: {cart.length}</h3>
            <p className="text-xl">Total Price: {total}</p>
            <div className="mt-10 mx-2">
            {
                cart.map(service => <div className="bg-gray-200 text-gray-700 rounded px-2 py-3 mb-2 flex flex-row justify-around">
                    <img className="rounded-full h-24 w-24" src={service.img} alt="" />
                    <div>
                        <h4 className="">{service.name}</h4>
                        <p>Price: {service.price}</p>
                        <p>Total Lecture: {service.totalLecture}</p>
                        <p>Course Duration: {service.courseDuration}</p>
                    </div>
                </div>    
                )
            }
            </div>
        </div>
    );
};

export default Cart;