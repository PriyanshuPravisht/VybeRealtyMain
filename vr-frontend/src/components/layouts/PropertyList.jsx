import react from 'react'
import PropertyCard from "./Propertycard"

const PropertyListing = () =>{
    const properties = [
    {
        image : "property1.jpg",
        location:"New York, USA",
        area: 1500 ,
        bedrooms: 3,
        bathrooms: 2,
        parking :1 
    },
    {
        image :"property3.jpg",
        location:"Los Angeles, USA",
        area: 1900 ,
        bedrooms: 4,
        bathrooms: 3,
        parking :2 
    },
    {
        image :"property7.jpg",
        location:"New York City, USA",
        area: 1100 ,
        bedrooms: 2,
        bathrooms: 1,
        parking :1 
    },
    {
        image :"property5.jpg",
        location:"San Francisco, USA",
        area: 1800 ,
        bedrooms: 4,
        bathrooms: 2,
        parking :1 
    },
    {
        image :"property6.jpg",
        location:"Miami, USA",
        area: 3000 ,
        bedrooms: 2,
        bathrooms: 2,
        parking :1 
    },
    {
        image :"property8.jpg",
        location:"Chicago, USA",
        area: 1200 ,
        bedrooms: 5,
        bathrooms: 3,
        parking :2
    },
    // {
    //     image :"property7.jpg",
    //     location:"Los Angeles, USA",
    //     area: 2000 ,
    //     bedrooms: 3,
    //     bathrooms: 2,
    //     parking :1 
    // },
    ];

    return (
        <div className='propertylist-content'>
            {properties.map((property,index)=>(
                <PropertyCard key={index} {...property}/>
            ))}
        </div>
    );
};

export default PropertyListing;