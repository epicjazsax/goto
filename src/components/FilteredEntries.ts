import Entry from "./Card";

export function filterEntriesByString(entries: Entry[], searchField: string): Entry[] {
    return entries.filter((entry: Entry) => {
        return entry.alias.toLowerCase().includes(searchField.toLowerCase())
            || entry.url.toLowerCase().includes(searchField.toLowerCase())
            || entry.owner.toLowerCase().includes(searchField.toLowerCase())
    })
}

