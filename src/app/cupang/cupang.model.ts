import { Tipe } from '../shared/tipe.model';
export class Cupang{
  tipes: any;
    public name:string;
    public description:string;
    public imagePath:string;
    public tipe:Tipe[];

    constructor(name:string,desc:string,imagePath:string,tipe:Tipe[]){
        this.name=name;
        this.description=desc;
        this.imagePath=imagePath;
        this.tipe=tipe;
    }
}