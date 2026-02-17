import { type EntryInterface } from '@utils/EntryInterface';
// import stringify from "json-stringify-pretty-compact";
import JsonView from '@uiw/react-json-view';
import { nordTheme as jsonThemeDark } from '@uiw/react-json-view/nord';
// import { vscodeTheme as jsonThemeDark } from '@uiw/react-json-view/vscode';
import { lightTheme as jsonTheme } from '@uiw/react-json-view/light';
// see themes at https://uiwjs.github.io/react-json-view/

import { useTheme } from "next-themes"

import Link from 'next/link';

interface CardProps {
    pkg: EntryInterface;
    showJson?: boolean;
}

const Card = ({ pkg, showJson }: CardProps) => {
    const { theme, resolvedTheme } = useTheme()
    // resolvedTheme accounts for "system" theme
    const currentTheme = resolvedTheme || theme
    const shouldShow = pkg.olivaw_files && pkg.olivaw_files.length > 0 ||
        pkg.gitlab_files && pkg.gitlab_files.length > 0;

    if (!shouldShow) {
        // return null;
        return (
            <div className='flex flex-col p-2 m-1 border-2 border-gray-400 rounded-xl' data-testid='card'>
                <div>
                    <h2 className='inline-block text-gray-400 dark:text-gray-600 text-center'><Link href={`/releases/${pkg.alias}`}>{pkg.alias}</Link></h2>
                </div>
            </div >
        );
    }
    return (
        <div className='flex flex-col min-w-40 p-2 m-1 border-2 border-gray-400 rounded-xl' data-testid='card'>
            <div>
                <h2 className='inline-block text-red dark:text-teal-600 font-bold text-center'><Link href={`/releases/${pkg.alias}`}>{pkg.alias}</Link></h2>
                {/* {pkg.path.includes("Cross-Platform_Options") &&
          <span className='text-gray-600'>[Cross-Platform]</span> || <br />} */}
                {/* {pkg.poc && <p>poc: {pkg.poc}</p>} */}
                {/* <pre>{stringify(pkg)}</pre> */}

                {pkg.tags && pkg.tags.length > 0 &&
                    <div className=''>
                        {/* <h4 className='di'>Tags:</h4><span className='pa2' /> */}
                        {pkg.tags.map((tag) => (
                            <span key={tag} className='text-xs m-1 border border-gray-600'>#{tag.replace('shared', 'cross-platform')}</span>
                        ))}
                    </div>
                }
                {showJson &&
                    <div className='mt2'>
                        <JsonView value={pkg} style={currentTheme === "dark" ? jsonThemeDark : jsonTheme} displayDataTypes={false} collapsed={1} enableClipboard={false} />
                    </div>
                }
            </div>
        </div >
    );
}

export default Card;

