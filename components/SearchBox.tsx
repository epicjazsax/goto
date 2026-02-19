"use client";

import { useEffect, useRef } from 'react';

interface SearchBoxProps {
    searchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBox: React.FunctionComponent<SearchBoxProps> = ({ searchChange }) => {

    const inputRef = useRef<HTMLInputElement>(null);
    const activation_key = '/';
    const placeholder = 'Press / to search...';

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            const isInputFocused =
                document.activeElement instanceof HTMLInputElement ||
                document.activeElement instanceof HTMLTextAreaElement ||
                (document.activeElement as HTMLElement)?.isContentEditable;

            // Open search with '/' or whatever override was specified
            if (event.key === activation_key && !isInputFocused) {
                event.preventDefault();
                inputRef.current?.focus();
            }

            // blur removes focus.  The escape key implicit also clears the input control
            if (event.key === 'Escape' && document.activeElement === inputRef.current) {
                inputRef.current?.blur();
            }
            // blur removes focus.  The enter key does not clear the input control
            if (event.key === 'Enter' && document.activeElement === inputRef.current) {
                inputRef.current?.blur();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    return (
        <div className='p-2'>
            <input
                ref={inputRef}
                className='ml-1 p-2 border-2 dark:border-teal-600 border-gray-400 rounded focus:outline-none focus:ring-2  dark:focus:ring-teal-400 focus:ring-gray-600'
                type='search'
                size={50}
                placeholder={placeholder}
                onChange={searchChange}
            />
        </div>
    );
}

export default SearchBox;

