'use client';

//import Link from 'next/link'
import { useState, useEffect } from 'react'
import ErrorBoundary from '@components/ErrorBoundary'
import SearchBox from '@components/SearchBox'
import CardList from '@components/CardList'
import { filterPackagesByString } from '@utils/filter'
import { type EntryInterface } from '@utils/EntryInterface';

export default function Home() {

    const [searchField, setSearchField] = useState<string>('')
    const [entries, setEntries] = useState<Record<string, EntryInterface>>({})
    const showCardData = false;

    useEffect(() => {
        fetch('/app-database.json')
            .then(res => res.json())
            .then(data => {

                try {
                    // Validate that it's an object (dictionary)
                    if (typeof data !== 'object' || Array.isArray(data) || data === null) {
                        throw new Error('JSON content must be an object/dictionary');
                    }

                    // Set the entries dictionary directly
                    setEntries(data);
                } catch (err) {
                    const message = err instanceof Error ? err.message : String(err);
                    throw new Error(`Failed to load or process JSON data": ${message}`);
                }
            })
    }, [])

    const onSearchFieldChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchField(event.target.value);
    }

    const filteredEntries =
        filterPackagesByString(entries, searchField)

    return (
        <>
            <main className="flex flex-col py-16 px-16 font-sans">
                <div className="flex flex-row">
                    <div className="flex-1"></div>
                    <SearchBox searchChange={onSearchFieldChange} />
                </div>
                <div className="flex mx-auto max-w-2/3 items-center">
                    <ErrorBoundary>
                        <CardList pkgs={filteredEntries} showJson={showCardData} />
                    </ErrorBoundary>
                </div>
            </main>
        </>
    );
}
