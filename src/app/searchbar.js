import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

    
  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm);
  };

    return (
      <div>
                <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleInputChange}
      />
      <button type="submit">Search</button>
      </form>


      </div>






      
    
  );
};

export default SearchBar;