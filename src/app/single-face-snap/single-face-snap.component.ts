import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { FaceSnapsServices } from '../services/face-snaps.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CurrencyPipe, DatePipe, DecimalPipe, LowerCasePipe, PercentPipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
@Component({
  selector: 'app-single-face-snap',
  standalone: true,
  imports: [
    UpperCasePipe,
    LowerCasePipe,
    DatePipe,
    DecimalPipe,
    CurrencyPipe,
    TitleCasePipe,
    PercentPipe,
    RouterLink
  ],
  templateUrl: './single-face-snap.component.html',
  styleUrl: './single-face-snap.component.scss'
})
export class SingleFaceSnapComponent implements OnInit{ 
  faceSnap!: FaceSnap;

  constructor(private faceSnapService: FaceSnapsServices, private route: ActivatedRoute ){}

  ngOnInit(): void {
    const faceSnapId = this.route.snapshot.params['id'];
    this.faceSnap = this.faceSnapService.getFaceSnapByid(faceSnapId)
    console.log(this.faceSnap)
  }
}
