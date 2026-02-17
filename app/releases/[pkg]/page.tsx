import Link from "next/link";
import { readFile } from 'fs/promises';
import path from 'path';
import { type EntryInterface } from '@utils/EntryInterface';

export default async function Package({
    params,
}: {
    params: Promise<{ pkg: string }>
}) {
    const { pkg } = await params;
    console.log('pkg:', pkg);

    let cleanPkg = pkg.replace("%20", " ");
    // Read and parse the JSON file
    const filePath = path.join(process.cwd(), 'public/app-database.json');
    const fileContents = await readFile(filePath, 'utf8');
    const packages: Record<string, EntryInterface> = JSON.parse(fileContents);

    // Find the matching package - first try exact match, then case-insensitive
    let releasePackage: EntryInterface | undefined = packages[cleanPkg];

    if (!releasePackage) {
        // Try case-insensitive search
        const pkgLower = cleanPkg.toLowerCase();
        const matchingKey = Object.keys(packages).find(key => key.toLowerCase() === pkgLower);
        releasePackage = matchingKey ? packages[matchingKey] : undefined;
    }

    if (!releasePackage) {
        return (
            <div className="flex min-h-screen items-center justify-center">
                <p>Package "{cleanPkg}" not found</p>
            </div>
        );
    }

    return (
        <div className="flex items-center justify-center font-sans">
            <div className="flex max-w-3xl flex-col items-center justify-center py-16 px-16 sm:items-start">
                <h1 className="max-w-xs text-3xl font-semibold">
                    {releasePackage.alias}
                </h1>
                {releasePackage.tags && releasePackage.tags.length > 0 &&
                    <div className=''>
                        {releasePackage.tags.map((tag) => (
                            <span key={tag} className='text-xs m-1 border border-gray-600'>#{tag.replace('shared', 'cross-platform')}</span>
                        ))}
                    </div>
                }

                <div className="flex items-center gap-6 text-center sm:items-start sm:text-left">

                    {releasePackage.alias && releasePackage.alias.length > 0 &&
                        <div className='flex-col rounded-lg p-6 mt-4 border border-gray-600'>
                            <h2 className="text-xl font-semibold mb-4">Entry Information</h2>
                            <Link key={releasePackage.alias} href={releasePackage.alias}>
                                <div className="border border-teal-600 m-2 p-2 rounded-xl text-xs text-center">
                                    {path.basename(releasePackage.alias)}
                                </div>
                            </Link>
                        </div>
                    }

                    {releasePackage.alias && releasePackage.alias.length > 0 ||
                        <div className="flex flex-col mt-16">
                            <div>No package description created yet</div>
                        </div>
                    }

                </div>
            </div>
        </div>
    );
}

