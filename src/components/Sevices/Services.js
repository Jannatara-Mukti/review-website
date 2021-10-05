import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect( () => {
        fetch('./serviceData.JSON')
        .then(res => res.json())
        .then(data => setServices(data))
    }, []);

    const handleClick = services =>{
        const newCart = [...cart, services];
        setCart(newCart);
    }

    return (
        <div>
            <div className="bg-service-pattern bg-cover bg-no-repeat bg-center min-h-full py-44 text-white text-center">
                <h2 className="text-3xl">See, All Our Services are here.</h2>
            </div>
           <div className="grid grid-cols-4 px-3">
                <div className="grid gap-2 grid-cols-3 col-span-3 my-5 mr-2">
                    {
                        // All data are shown from serviceData.JSON 
                        services.map(service => <Service key={service.id} handleClick={handleClick} service={service}></Service>)
                    }
                </div>
                <div className="bg-green-600 text-center text-white font-semibold my-5 w-full py-12 place-self-start rounded">
                    <Cart key={cart.id} cart={cart}></Cart>
                </div>
           </div>
        </div>
    );
};

export default Services;