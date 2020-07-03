export class Device {
     constructor(
        public name:string, public modelNo:string,public location:string,public runTime:number,
        public status:string,public  temperature:number,public humidity:number,
        public solarVoltage:number,public batteryVoltage:number,public imagePath:string,public _id:string
    ){}
}