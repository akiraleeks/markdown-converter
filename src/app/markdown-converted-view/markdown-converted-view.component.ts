import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-markdown-converted-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './markdown-converted-view.component.html',
  styleUrl: './markdown-converted-view.component.css',
})
export class MarkdownConvertedViewComponent {
  @Input() convertedHtml = '';
}
