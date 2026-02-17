// Description: This file defines the ReleasePackage interface which represents a software package with its metadata.

export interface EntryInterface {
    alias: string;
    olivaw_base: string;
    poc?: string;
    tags?: string[];
    sub_packages?: EntryInterface[];
    olivaw_files?: string[];
    gitlab_files?: string[];
    files_ignored?: string[];
}

