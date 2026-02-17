// Description: This file defines the Entry interface which represents a go-to alias with its associated data

export interface EntryInterface {
    alias: string;
    poc?: string;
    tags?: string[];
    sub_packages?: EntryInterface[];
    gitlab_files?: string[];
    files_ignored?: string[];
}

