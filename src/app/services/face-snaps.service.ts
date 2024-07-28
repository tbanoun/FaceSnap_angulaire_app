import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap";

@Injectable({
    providedIn: 'root'
})
export class FaceSnapsServices{
    faceSnaps: FaceSnap[] = [
    new FaceSnap(
        "Bienvenu Malika khadir",
        "Ma meilleur amie depuis toujour !",
        new Date(),
        "https://cdn.pixabay.com/photo/2016/03/11/17/31/girl-1250679_960_720.jpg",
    ), 
    new FaceSnap(
        "Bienvenu Stromer22K",
        "Le oiseaux du bonheur !",
        new Date(),
        "https://cdn.pixabay.com/photo/2024/04/21/14/13/pelican-8710717_1280.jpg",
    ),
    new FaceSnap(
        "Bienvenu Reagan_yip",
        "la meilleur amie est une vacherie!",
        new Date(),
    ),
    new FaceSnap(
        "Bienvenu tartaga",
        "le meilleur sniper de monde",
        new Date(),
        "https://cdn.pixabay.com/photo/2015/10/27/21/18/sniper-1009657_1280.jpg"
    ),
    new FaceSnap(
        "Salut Will",
        "le meilleur encadreur de openclassroom",
        new Date(),
        "https://pbs.twimg.com/ext_tw_video_thumb/974915240826720256/pu/img/u0GYpgaQ7VXjPR38.jpg:large"
    )
    ];

    getFacesnaps(): FaceSnap[]{
        return [...this.faceSnaps]
    }

    snapFaceSnapById(faceSnapId: string): void {
        const foundFaceSnap: FaceSnap | undefined = this.faceSnaps.find((faceSnap: FaceSnap) => faceSnap.id === faceSnapId);
        if (!foundFaceSnap){
            throw new Error('FaceSnap not found')
        }
        foundFaceSnap.addSnap('snap')
    }

    getFaceSnapByid(faceSnapId: string): FaceSnap{
        const foundFaceSnap: FaceSnap | undefined = this.faceSnaps.find((faceSnap: FaceSnap) => faceSnap.id === faceSnapId);
        if (!foundFaceSnap){
            throw new Error('FaceSnap not found')
        }
        return foundFaceSnap
    }

}