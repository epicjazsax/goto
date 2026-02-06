const SearchBox = ({ searchChange }) => {
    return (
        <div className='p-2'>
            <input
                className='p-3 bg-green-800'
                type='search'
                placeholder='enter search term here'
                onChange={searchChange}
            />
        </div>
    );
}

export default SearchBox;

