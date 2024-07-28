import { SnapType } from "./face-snap.type.type";

export class FaceSnap{
    id: string;
    constructor(
        public title: string,
        public description:string,
        public createDate: Date,
        public imageUrl?: string,
    ){
    this.id = crypto.randomUUID().substring(0, 8)
    }
    addSnap(snap: SnapType){
        console.log("Hello, kikka")
    }
}