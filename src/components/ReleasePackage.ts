// Description: This file defines the ReleasePackage class which represents a software package with its metadata.

export interface ReleasePackage {
    package_name: string;
    location: string;
    poc: string;
    tags: string[];
    sub_packages: ReleasePackage[];
}


/*
export class ReleasePackage {
    package_name: string = 'TBD';
    location: string = 'TBD';
    poc: string = 'TBD';
    sub_packages: object[] = [];

    constructor(json: object) {
        // console.log(json)
        Object.assign(this, json);
    }
}
*/
