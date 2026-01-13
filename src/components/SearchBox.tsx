const SearchBox = ({ searchChange }) => {
    return (
        <div className='pa2'>
            <input
                className='pa3 ba b--green'
                type='search'
                placeholder='enter search term here'
                onChange={searchChange}
            />
        </div>
    );
}

export default SearchBox;

