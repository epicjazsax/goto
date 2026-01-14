export function filterEntriesByString(entries: object[], searchField: string): object[] {
    return entries.filter(entry => {
        return entry.alias.toLowerCase().includes(searchField.toLowerCase())
            || entry.url.toLowerCase().includes(searchField.toLowerCase())
            || entry.owner.toLowerCase().includes(searchField.toLowerCase())
    })
}

// export default filterEntriesByString

