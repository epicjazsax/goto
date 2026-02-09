'use client';

import Link from 'next/link'
import { useState, useEffect } from 'react'
import ErrorBoundary from '@components/ErrorBoundary'
import SearchBox from '@components/SearchBox'
import CardList from '@components/CardList'
import { filterPackagesByString } from '@utils/filter'
import { type ReleasePackage } from '@utils/release-package';

export default function Home() {

    const [searchField, setSearchField] = useState<string>('')
    // const [excludeField, setExcludeField] = useState<string>('')
    const [packages, setPackages] = useState<Record<string, ReleasePackage>>({})
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

                    // Set the packages dictionary directly
                    setPackages(data);
                } catch (err) {
                    const message = err instanceof Error ? err.message : String(err);
                    throw new Error(`Failed to load or process JSON data": ${message}`);
                }
            })
    }, [])

    const onSearchFieldChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchField(event.target.value);
    }

    // const onExcludeFieldChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //   setExcludeField(event.target.value);
    // }

    // const filteredPackages = filterPackagesByString(
    //   filterPackagesByString(packages, searchField),
    //   excludeField,
    //   true)

    const filteredPackages =
        filterPackagesByString(packages, searchField)

    return (
        <>
            <main className="flex flex-col py-16 px-16 font-sans">
                <div className="flex flex-row">
                    <div className="flex-1"></div>
                    <SearchBox searchChange={onSearchFieldChange} />
                </div>
                <div className="flex mx-auto max-w-2/3 items-center">
                    <ErrorBoundary>
                        <CardList pkgs={filteredPackages} showJson={showCardData} />
                    </ErrorBoundary>
                </div>
            </main>
        </>
    );
}
