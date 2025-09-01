import { FaBed, FaBath, FaCar, FaMapMarkerAlt } from "react-icons/fa";

const Card = ({ image, location, area, bedrooms, bathrooms, parking }) => {
  return (
    <div className="property-card">
      {/* Image */}
      <img src={image} alt={location} className="property-card__image" />

      {/* Details */}
      <div className="property-card__content">
        {/* Location */}
        <div className="property-card__location">
          <FaMapMarkerAlt className="mr-2 text-red-500"></FaMapMarkerAlt>
          <span>{location}</span>
        </div>

        {/* Area */}
        <p className="text-gray-800 font-medium mb-3">{area}sqft</p>

        {/* Icons Row */}
        <div className="property-card__details">
          <div className="flex items-center">
            <FaBed className="mr-1 text-blue-500" /> {bedrooms}
          </div>
          <div className="flex items-center">
            <FaBath className="mr-1 text-green-500" /> {bathrooms}
          </div>
          <div className="flex items-center">
            <FaCar className="mr-1 text-yellow-500" /> {parking}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
