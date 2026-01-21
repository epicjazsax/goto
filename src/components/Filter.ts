export function filterEntriesByString(entries: { package_name: string; location: string; poc: string }, searchField: string): object[] {
    // console.log(`Filtering ${entries.length} entries with search term: ${searchField}`);
    return entries.filter(entry => {
        // console.log(`Checking entry: ${JSON.stringify(entry)}`);
        return (entry.package_name !== undefined && entry.package_name.toLowerCase().includes(searchField.toLowerCase()))
            || (entry.location !== undefined && entry.location.toLowerCase().includes(searchField.toLowerCase()))
            || (entry.poc !== undefined && entry.poc.toLowerCase().includes(searchField.toLowerCase()))
    })
}

export function filterPackagesByString(entries: ReleasePackage, searchField: string): object[] {
    // console.log(`Filtering ${entries.length} entries with search term: ${searchField}`);
    return entries.filter(entry => {
        // console.log(`Checking entry: ${JSON.stringify(entry)}`);
        return (entry.package_name !== undefined && entry.package_name.toLowerCase().includes(searchField.toLowerCase()))
            || (entry.location !== undefined && entry.location.toLowerCase().includes(searchField.toLowerCase()))
            || (entry.poc !== undefined && entry.poc.toLowerCase().includes(searchField.toLowerCase()))
    })
}

