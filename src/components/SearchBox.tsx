interface SearchBoxProps {
    searchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBox: React.FunctionComponent<SearchBoxProps> = ({ searchChange }) => {
    return (
        <div className='pa2'>
            <input
                className='pa3 ba b--green'
                type='search'
                size={50}
                placeholder='enter search term here'
                onChange={searchChange}
            />
        </div>
    );
}

export default SearchBox;

