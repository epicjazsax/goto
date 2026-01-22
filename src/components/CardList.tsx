import Card from './Card';
import { type ReleasePackage } from './ReleasePackage.ts';

interface CardListProps {
    pkgs: ReleasePackage[];
    showJson?: boolean;
}

const CardList = ({ pkgs, showJson }: CardListProps) => {
    // console.log("typeof pkgs:", typeof pkgs);
    return (
        <>
            {
                // console.log("Rendering CardList with packages:", pkgs),
                pkgs.map(pkg =>
                    <Card
                        key={pkg.package_name}
                        pkg={pkg}
                        showJson={showJson}
                    />
                )}
        </>
    );
}

export default CardList;

