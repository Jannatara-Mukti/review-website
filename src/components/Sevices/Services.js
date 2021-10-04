import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect( () => {
        fetch('./serviceData.JSON')
        .then(res => res.json())
        .then(data => setServices(data))
    }, []);

    return (
        <div>
            <div className="bg-service-pattern bg-cover bg-no-repeat bg-center min-h-full py-44 text-white text-center">
                <h2 className="text-3xl">See, All Our Services are here.</h2>
            </div>
            <div className="p-20">
                <div className="grid gap-8 grid-cols-3">
                    {
                        // All data are shown from serviceData.JSON 
                        services.map(service => <Service key={service.id} service={service}></Service>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;