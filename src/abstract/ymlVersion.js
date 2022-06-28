import { default as Log } from "./log.js";

export default class YamlVersion extends Log {
    
    constructor(){

    }

    /**
     * Some Yaml functions will be limited to versions
     */
    setMinVersion(version){
        this.version = version;
    }

    getMinVersion(){
        return this.version;
    }

}