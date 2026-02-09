'use client'

import { useEffect, useRef } from 'react';
import { useState } from 'react';

interface MultiStringSearchBoxProps {
    strings: string[];
    setStrings: React.Dispatch<React.SetStateAction<string[]>>
    currentInput: string;
    setCurrentInput: React.Dispatch<React.SetStateAction<string>>
    label_override?: string;
    activation_key_override?: string;
    placeholder_override?: string;
}

const MultiStringSearchBox: React.FunctionComponent<MultiStringSearchBoxProps> = ({
    strings, setStrings, currentInput, setCurrentInput, label_override, activation_key_override, placeholder_override
}) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const label = label_override ? label_override : 'Search';
    const activation_key = activation_key_override ? activation_key_override : '/';
    const placeholder = placeholder_override ? placeholder_override : 'Press / to search...';

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
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && currentInput.trim()) {
            e.preventDefault();
            setStrings([...strings, currentInput.trim().toLowerCase()]);
            setCurrentInput('');
        }
        if (e.key === 'Escape' && currentInput.trim()) {
            e.preventDefault();
            // setStrings([...strings, currentInput.trim()]);
            setCurrentInput('');
        }
    };

    const removeString = (indexToRemove: number) => {
        setStrings(strings.filter((_, index) => index !== indexToRemove));
    };

    // const clearAll = () => {
    //   setStrings([]);
    //   setCurrentInput('');
    // };

    return (
        <div className="flex flex-items-start w-full">
            <div className="flex flex-items-start rounded-lg">
                {/* Input field */}
                <div className="flex items-start gap-2">
                    <label htmlFor="text" className="mr-2 pt-2">{label}:</label>
                    <div className="flex flex-col flex-wrap">
                        <input
                            ref={inputRef}
                            type="search"
                            value={currentInput}
                            onChange={(e) => setCurrentInput(e.target.value)}
                            onKeyDown={handleInputKeyDown}
                            placeholder={placeholder}
                            className='ml-1 w-64 p-2 border-2 dark:border-teal-600 border-gray-400 rounded focus:outline-none focus:ring-2  dark:focus:ring-teal-400 focus:ring-gray-600'
                        />

                        {/* Display added strings */}
                        <div className="flex flex-row flex-wrap gap-2 w-full min-w-full">

                            {strings.length > 0 && (
                                <div className="m-4 flex flex-wrap w-full gap-2">
                                    {strings.map((str, index) => (
                                        <div key={index} className="p-1 rounded-md flex items-center text-xs text-gray-400 border border-gray-600" >
                                            <span>{str}</span>
                                            <button
                                                onClick={() => removeString(index)}
                                                className="hover:text-blue-200 w-4 h-4 flex items-center justify-center"
                                                aria-label="Remove"
                                            >
                                                ×
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                    {/*
          {strings.length > 0 && (
            <button
              onClick={clearAll}
              className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
            >
              Clear All
            </button>
          )}
          */}
                </div>

                {/* Instructions */}
                {/*
        <p className="mt-2 text-sm text-gray-600">
          Press <kbd className="px-2 py-1 bg-gray-100 border border-gray-300 rounded">Enter</kbd> to add strings to your search
        </p>
        */}

                {/* Display current list */}
                {/*
        {strings.length > 0 && (
          <div className="mt-4 p-4 bg-gray-50 rounded-lg">
            <h3 className="font-semibold text-gray-700 mb-2">Current Strings ({strings.length}):</h3>
            <ul className="list-disc list-inside space-y-1">
              {strings.map((str, index) => (
                <li key={index} className="text-gray-700">{str}</li>
              ))}
            </ul>
          </div>
        )}
        */}
            </div>
        </div>
    );
}

export default MultiStringSearchBox;

