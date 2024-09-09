import { TestBed } from '@angular/core/testing';

import { MarkdownConversionService } from './markdown-conversion.service';

describe('MarkdownConversionService', () => {
  let service: MarkdownConversionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MarkdownConversionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
