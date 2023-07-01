import React from "react";

const ParkingDetailPage = ({
  address,
  photos,
  shortTermPrice,
  longTermPrice,
}) => {
  const renderPhotos = () => {
    return photos.map((photo, index) => (
      <img key={index} src={photo} alt={`Parking Photo ${index}`} />
    ));
  };

  return (
    <div>
      <h1>Parking Space Detail</h1>
      <h2>Address: {address}</h2>
      <div>
        <h3>Parking Photos:</h3>
        {renderPhotos()}
      </div>
      <div>
        <h3>Price:</h3>
        <p>Short-term renting: {shortTermPrice}</p>
        <p>Long-term renting: {longTermPrice}</p>
      </div>
      <div>
        <h3>Location:</h3>
        {/* Embed the TomTom map using the provided API */}
        {/* Replace the `YOUR_API_KEY` with your actual TomTom Maps API key */}
        <iframe
          width="100%"
          height="400"
          frameborder="0"
          src={`https://maps.tomtom.com/frame?product=maps&key=YOUR_API_KEY&zoom=15&center=${encodeURIComponent(
            address
          )}`}
        ></iframe>
      </div>
    </div>
  );
};

export default ParkingDetailPage;
