/**
 * Convert compose file to sync stat
 */
import Ops from './abstract/ops.js'
import fs from 'fs';

export default class Convert extends Ops {
    constructor() {
        super();
        this.output("adding scripts");
        let package_file = this.getConvertData();
        this.output(package_file);
        if (package_file.scrips == null) {
            package_file.scrips = {};
        }
        package_file.scrips["sync-stat"] = "node node_modules/sync-stat/index";
        fs.writeFile( this.getProjectRoot() +'/package.json', JSON.stringify(package_file), err => {
            if (err) {
              console.error(err);
            }
            // file written successfully
          });
    }

    getConvertData(){
        return JSON.parse(fs.readFileSync( this.getProjectRoot() +'/package.json', 'utf8'));
    }

}