import Card from '@components/Card';
import { type EntryInterface } from '@utils/EntryInterface';

interface CardListProps {
    pkgs: Record<string, EntryInterface>;
    showJson?: boolean;
}

const CardList = ({ pkgs, showJson }: CardListProps) => {
    const sortedPackages = Object.values(pkgs).sort((a, b) => {
        return a.alias.localeCompare(b.alias);
    });

    return (
        <div className="flex flex-wrap justify-center gap-4 w-full py-16 px-4 sm:px-8 md:px-16 lg:px-16">
            {sortedPackages.map((pkg) => (
                <Card
                    key={pkg.alias}
                    pkg={pkg}
                    showJson={showJson}
                />
            ))}
        </div>
    );
};

export default CardList;

