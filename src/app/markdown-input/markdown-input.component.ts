import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { FormsModule } from '@angular/forms'
;import { ButtonModule } from 'primeng/button';


@Component({
  selector: 'app-markdown-input',
  standalone: true,
  imports: [CommonModule, InputTextareaModule, FormsModule, ButtonModule],
  templateUrl: './markdown-input.component.html',
  styleUrl: './markdown-input.component.css',
})
export class MarkdownInputComponent {

  markdown = '';
}
