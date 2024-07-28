import { Component, input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { Input } from '@angular/core';
import { NgClass, UpperCasePipe, NgStyle, LowerCasePipe, TitleCasePipe, DatePipe, DecimalPipe, PercentPipe, CurrencyPipe } from '@angular/common';
import { FaceSnapsServices } from '../services/face-snaps.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [
    NgStyle,
    NgClass,
    UpperCasePipe,
    LowerCasePipe,
    TitleCasePipe,
    DatePipe, 
    DecimalPipe,
    PercentPipe,
    CurrencyPipe
  ],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss',
})
export class FaceSnapComponent implements OnInit{
  @Input() faceSnap!: FaceSnap;
  title!: string;
  description!: string;
  createDate!: Date;
  snaps!: boolean;
  imageUrl!: string;
  msg!: string;

  constructor(private faceSnapService: FaceSnapsServices, private router: Router){}



  ngOnInit(): void {
    this.snaps = false;
    this.msg = "snap me plz!"
  }
  onView(){
    console.log("Hello amigooss")
    this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`)
  }
  onSnap(){
    this.faceSnapService.snapFaceSnapById(this.faceSnap.id)
    this.snaps = !this.snaps;
    if (this.snaps){
      this.msg = "Oh Snap!"
    }
    else{
      this.msg = "Oops, un Snap!"
    }
  }
}

