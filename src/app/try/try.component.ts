import { Component } from '@angular/core';
import {MatCard, MatCardContent} from "@angular/material/card";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-try',
  standalone: true,
  imports: [
    MatCard,
    MatCardContent,
    NgOptimizedImage
  ],
  templateUrl: './try.component.html',
  styleUrl: './try.component.css'
})
export class TryComponent {

}
