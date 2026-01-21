import { type ReleasePackage } from "./ReleasePackage";

// Type guard function
const isMatch = (pkg: ReleasePackage, searchField: string): pkg is ReleasePackage => {
    return (pkg.package_name !== undefined && pkg.package_name.toLowerCase().includes(searchField.toLowerCase()))
        || (pkg.location !== undefined && pkg.location.toLowerCase().includes(searchField.toLowerCase()))
        || (pkg.poc !== undefined && pkg.poc.toLowerCase().includes(searchField.toLowerCase()));
};

export function filterPackagesByString(packages: ReleasePackage[], searchField: string): ReleasePackage[] {
    // console.log(`Filtering ${packages.length} packages with search term: ${searchField}`);
    return packages.filter(pkg => isMatch(pkg, searchField))
}

