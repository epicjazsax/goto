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
    entry: EntryInterface;
    showJson?: boolean;
}

const Card = ({ entry, showJson }: CardProps) => {
    const { theme, resolvedTheme } = useTheme()
    // resolvedTheme accounts for "system" theme
    const currentTheme = resolvedTheme || theme

    return (
        <div className='flex flex-col min-w-40 p-2 m-1 border-2 border-gray-400 rounded-xl' data-testid='card'>
            <Link href={`/releases/${entry.alias}`}>
                <h1 className='text-red dark:text-teal-600 font-bold text-center'>{entry.alias}</h1>
                <h2 className='text-red dark:text-teal-600 font-bold text-center'>{entry.url}</h2>
                <h3 className='text-red dark:text-teal-600 font-bold text-center'>{entry.owner}</h3>
                {entry.tags && entry.tags.length > 0 &&
                    <div className=''>
                        {/* <h4 className='di'>Tags:</h4><span className='pa2' /> */}
                        {entry.tags.map((tag) => (
                            <span key={tag} className='text-xs m-1 border border-gray-600'>#{tag.replace('shared', 'cross-platform')}</span>
                        ))}
                    </div>
                }
                {showJson &&
                    <div className='mt2'>
                        <JsonView value={entry} style={currentTheme === "dark" ? jsonThemeDark : jsonTheme} displayDataTypes={false} collapsed={1} enableClipboard={false} />
                    </div>
                }
            </Link>
        </div >
    );
}

export default Card;

