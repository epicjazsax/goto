import { type EntryInterface } from "@utils/EntryInterface";
import path from 'path';

// Type guard function
// const isMatch = (pkg: ReleasePackage, searchField: string): pkg is ReleasePackage => {
//   return (pkg.package_name !== undefined && pkg.package_name.toLowerCase().includes(searchField.toLowerCase()))
//     || (pkg.olivaw_base !== undefined && pkg.olivaw_base.toLowerCase().includes(searchField.toLowerCase()))
//     || (pkg.poc !== undefined && pkg.poc.toLowerCase().includes(searchField.toLowerCase()));
// };

export function findFile(filename: string, pkg: EntryInterface): string {
    console.log('Finding file:', filename, 'in package:', pkg);
    if (pkg.olivaw_files && pkg.olivaw_files.includes(filename)) {
        // "olivaw_base": "VersaLab/Current Release",
        // "./HeatCapacity/HeatCapSetup.exe",
        const filePath = path.join(pkg.olivaw_base, filename);
        return filePath;
    }
    console.log('File not found in package:', pkg.alias);
    return pkg.olivaw_base;
}

