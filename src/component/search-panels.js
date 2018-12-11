import React from 'react';

const SearchPanel = () => {
    const searchStyle = {
        fontSize: '20px'
    };
    const searchText = 'Type here to search';
    return <input
        style={searchStyle}
        placeholder={searchText}/>;
};
export default SearchPanel;