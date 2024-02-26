import { Component } from '@angular/core';
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatTooltipModule} from "@angular/material/tooltip";
import {Router} from "@angular/router";

@Component({
  selector: 'app-enter-site-button',
  standalone: true,
  imports: [
    MatButtonModule, MatTooltipModule, MatIconModule
  ],
  templateUrl: './enter-site-button.component.html',
  styleUrl: './enter-site-button.component.css'
})
export class EnterSiteButtonComponent {

  constructor(private router:Router) {
  }

  onEnterGym(){
    this.router.navigate(['/','home']);
  }

}
