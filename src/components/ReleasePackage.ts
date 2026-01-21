// Description: This file defines the ReleasePackage class which represents a software package with its metadata.

export class ReleasePackage {
    package_name: string = 'TBD';
    location: string = 'TBD';
    poc: string = 'TBD';
    sub_packages: object[] = [];

    constructor(json: string) {
        // console.log(json)
        Object.assign(this, json);
        this.sub_packages = structuredClone(json['sub_packages'] || []);
    }
}

