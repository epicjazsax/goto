import { useState } from 'react'
import SearchBox from './components/SearchBox'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'tachyons'
import './App.css'

function App() {
    const [searchField, setSearchField] = useState('')

    const onSearchFieldChange = (event) => {
        setSearchField(event.target.value);
    }

    return (
        <>
            <div>
                <a href="https://vite.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <h1>Go-To</h1>
            <div>
                <SearchBox searchChange={onSearchFieldChange} />
                Search Term is: {searchField}
            </div>
        </>
    )
}

export default App

