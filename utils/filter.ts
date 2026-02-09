import { type ReleasePackage } from "@utils/release-package";

const isMatch = (pkg: ReleasePackage, searchField: string): pkg is ReleasePackage => {
    const searchLower = searchField.toLowerCase();
    return (
        (pkg.package_name?.toLowerCase().includes(searchLower))
        || (pkg.olivaw_base?.toLowerCase().includes(searchLower))
        || (pkg.poc?.toLowerCase().includes(searchLower))
        || (pkg.tags?.some(s => s.toLowerCase().includes(searchLower)) ?? false)
        || (pkg.olivaw_files?.some(s => s.toLowerCase().includes(searchLower)) ?? false)
        // || (pkg.files_ignored?.some(s => s.toLowerCase().includes(searchLower)) ?? false)
    );
};

export function filterPackagesByString(packages: Record<string, ReleasePackage>, searchField: string, filterIsExclude?: boolean): Record<string, ReleasePackage> {
    // console.log(`Filtering ${Object.keys(packages).length} packages with search term: ${searchField}`);

    // If search field is empty, return all packages
    if (!searchField.trim()) {
        return packages;
    }

    // Filter the dictionary and return a new dictionary with matching packages
    return Object.entries(packages).reduce((filtered, [key, pkg]) => {
        if (filterIsExclude) {
            if (!isMatch(pkg, searchField)) {
                filtered[key] = pkg;
            }
        } else {
            if (isMatch(pkg, searchField)) {
                filtered[key] = pkg;
            }
        }
        return filtered;
    }, {} as Record<string, ReleasePackage>);
}


// export function filterStrings(strings: string[], searchField: string): string[] {
//   // console.log(`Filtering ${Object.keys(packages).length} packages with search term: ${searchField}`);

//   // If search field is empty, return all packages
//   if (!searchField.trim()) {
//     return strings;
//   }

//   // Filter the dictionary and return a new dictionary with matching packages
//   return Object.entries(packages).reduce((filtered, [key, pkg]) => {
//     if (isMatch(pkg, searchField)) {
//       filtered[key] = pkg;
//     }
//     return filtered;
//   }, {} as Record<string, ReleasePackage>);
// }

