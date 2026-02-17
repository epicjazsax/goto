import { type EntryInterface } from "@utils/EntryInterface";

const isMatch = (entry: EntryInterface, searchField: string): entry is EntryInterface => {
    const searchLower = searchField.toLowerCase();
    return (
        (entry.alias?.toLowerCase().includes(searchLower))
        || (entry.url?.toLowerCase().includes(searchLower))
        || (entry.owner?.toLowerCase().includes(searchLower))
        || (entry.tags?.some(s => s.toLowerCase().includes(searchLower)) ?? false)
    );
};

export function filterPackagesByString(packages: Record<string, EntryInterface>, searchField: string, filterIsExclude?: boolean): Record<string, EntryInterface> {

    // If search field is empty, return all packages
    if (!searchField.trim()) {
        return packages;
    }

    // Filter the dictionary and return a new dictionary with matching packages
    return Object.entries(packages).reduce((filtered, [key, entry]) => {
        if (filterIsExclude) {
            if (!isMatch(entry, searchField)) {
                filtered[key] = entry;
            }
        } else {
            if (isMatch(entry, searchField)) {
                filtered[key] = entry;
            }
        }
        return filtered;
    }, {} as Record<string, EntryInterface>);
}


// export function filterStrings(strings: string[], searchField: string): string[] {
//   // console.log(`Filtering ${Object.keys(packages).length} packages with search term: ${searchField}`);

//   // If search field is empty, return all packages
//   if (!searchField.trim()) {
//     return strings;
//   }

//   // Filter the dictionary and return a new dictionary with matching packages
//   return Object.entries(packages).reduce((filtered, [key, entry]) => {
//     if (isMatch(entry, searchField)) {
//       filtered[key] = entry;
//     }
//     return filtered;
//   }, {} as Record<string, EntryInterface>);
// }

