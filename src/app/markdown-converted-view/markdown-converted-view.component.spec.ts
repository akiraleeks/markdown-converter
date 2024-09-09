import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MarkdownConvertedViewComponent } from './markdown-converted-view.component';

describe('MarkdownConvertedViewComponent', () => {
  let component: MarkdownConvertedViewComponent;
  let fixture: ComponentFixture<MarkdownConvertedViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarkdownConvertedViewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MarkdownConvertedViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
