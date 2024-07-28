import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent implements OnInit{

  ngOnInit(): void {
    
  }
  constructor(private router: Router){}

goFacesnaps(){
  this.router.navigateByUrl('facesnaps');
}

}
