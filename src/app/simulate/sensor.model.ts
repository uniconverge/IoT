export class Sensor {
    constructor(
       public deviceid:string,public  temperature:boolean,public humidity:boolean,
       public solarvoltage:boolean,public batteryvoltage:boolean,public _id:string
   ){}
}