import YamlVersion from "../abstract/ymlVersion.js";

export default class getVolumes extends YamlVersion{

    constructor(context){
        super(context);
        this.setMinVersion(1);
        this.whenOnIncompatible("Cannot be under version 1, Please Update sync-compose");
        this.checkCompatibility();

        //return this.getVolumesFunction();
    }

    getVolumesFunction = (container) => {
        let volumes = []
       

        Object.entries(container).forEach(([key, value]) => {
            Object.entries(value.volumes).forEach(([id, volume]) => {
                
                this.output(new VolumeInfo({id: id, volume}))
            });
        });
        

        container.forEach((key) => {
            volumes.push(key);
        });
        return volumes;
    }

}