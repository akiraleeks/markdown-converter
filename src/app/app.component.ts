import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { MarkdownInputComponent } from "./markdown-input/markdown-input.component";

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, MarkdownInputComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'markdown-converter';
}
