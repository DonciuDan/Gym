import { Component } from '@angular/core';
import {MatCard, MatCardContent} from "@angular/material/card";
import {MatIcon} from "@angular/material/icon";
import {EnterSiteButtonComponent} from "./enter-site-button/enter-site-button.component";
import {MatFabButton} from "@angular/material/button";

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [
    MatCardContent,
    MatCard,
    MatIcon,
    EnterSiteButtonComponent,
    MatFabButton
  ],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent {

}
