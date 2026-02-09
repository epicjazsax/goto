import Card from '@components/card';
import { type ReleasePackage } from '@utils/release-package';

interface CardListProps {
    pkgs: Record<string, ReleasePackage>;
    showJson?: boolean;
}

const CardList = ({ pkgs, showJson }: CardListProps) => {
    const sortedPackages = Object.values(pkgs).sort((a, b) => {
        const aIsInstrument = a.tags?.includes("instrument") ?? false;
        const bIsInstrument = b.tags?.includes("instrument") ?? false;

        if (aIsInstrument !== bIsInstrument) {
            // If a is an instrument and b isn't, a comes first (-1)
            return aIsInstrument ? -1 : 1;
        }

        return a.package_name.localeCompare(b.package_name);

        // const aFileCount = a.olivaw_files?.length ?? 0;
        // const bFileCount = b.olivaw_files?.length ?? 0;

        // if (aFileCount !== bFileCount) {
        //   // Larger length comes first
        //   return bFileCount - aFileCount;
        // }

        // return 0; // They are equal
    });

    return (
        <div className="flex flex-wrap justify-center gap-4 w-full py-16 px-4 sm:px-8 md:px-16 lg:px-16">
            {sortedPackages.map((pkg) => (
                <Card
                    key={pkg.package_name}
                    pkg={pkg}
                    showJson={showJson}
                />
            ))}
        </div>
    );
};

export default CardList;

