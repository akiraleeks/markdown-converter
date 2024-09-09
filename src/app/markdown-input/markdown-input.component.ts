import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { FormsModule } from '@angular/forms'
import { ButtonModule } from 'primeng/button';
import { MarkdownConversionService } from '../services/markdown-conversion/markdown-conversion.service';
import { MarkdownConvertedViewComponent } from '../markdown-converted-view/markdown-converted-view.component';


@Component({
  selector: 'app-markdown-input',
  standalone: true,
  imports: [CommonModule, InputTextareaModule, FormsModule, ButtonModule, MarkdownConvertedViewComponent],
  templateUrl: './markdown-input.component.html',
  styleUrl: './markdown-input.component.css',
})
export class MarkdownInputComponent {

  inputText = '';
  convertedHtml = '';

  constructor(private markdownConversionService: MarkdownConversionService) {}

  convertToHtml() {
    this.convertedHtml = this.markdownConversionService.convertToHtml(this.inputText);
  }

  clearHtml() {
    this.convertedHtml = '';
  }
}
