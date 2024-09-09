import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MarkdownInputComponent } from './markdown-input.component';

describe('MarkdownInputComponent', () => {
  let component: MarkdownInputComponent;
  let fixture: ComponentFixture<MarkdownInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarkdownInputComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MarkdownInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('convertToHtml should convert input text to html', () => {
    component.inputText = '# Heading 1';
    component.convertToHtml();
    expect(component.convertedHtml).toBe('<h1>Heading 1</h1>');
  });

  it('clearHtml should clear converted html', () => {
    component.convertedHtml = '<h1>Heading 1</h1>';
    component.clearHtml();
    expect(component.convertedHtml).toBe('');
  });
});
