import { TestBed } from '@angular/core/testing';

import { MarkdownConversionService } from './markdown-conversion.service';
import exp = require('constants');

describe('MarkdownConversionService', () => {
  let service: MarkdownConversionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MarkdownConversionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should convert markdown to html - Heading test', () => {
    const inputText = '# Heading 1';
    const expectedHtml = '<h1>Heading 1</h1>';
    const convertedHtml = service.convertToHtml(inputText);

    expect(convertedHtml).toEqual(expectedHtml);
  });

  it('should convert markdown to html - multiple headings test', () => {
    const inputText = '# Heading 1\n## Heading 2\n### Heading 3\n#### Heading 4\n##### Heading 5\n###### Heading 6';
    const expectedHtml = '<h1>Heading 1</h1>\n<h2>Heading 2</h2>\n<h3>Heading 3</h3>\n<h4>Heading 4</h4>\n<h5>Heading 5</h5>\n<h6>Heading 6</h6>';
    const convertedHtml = service.convertToHtml(inputText);

    expect(convertedHtml).toEqual(expectedHtml);
  })

  it('should convert markdown to html - Unformatted text test', () => {
    const inputText = 'Unformatted text excluding headings';
    const expectedHtml = '<p>Unformatted text excluding headings</p>';
    const convertedHtml = service.convertToHtml(inputText);

    expect(convertedHtml).toEqual(expectedHtml);
  });

  it('should convert markdown to html - Link test', () => {
    const inputText = '[Link text](https://www.example.com)';
    const expectedHtml =
      '<p><a href="https://www.example.com">Link text</a></p>';
    const convertedHtml = service.convertToHtml(inputText);

    expect(convertedHtml).toEqual(expectedHtml);
  });

  it('should convert markdown to html - Heading, Unformatted text, Link test', () => {
    const inputText =
      '# Heading 1\nUnformatted text excluding headings\n[Link text](https://www.example.com)';
    const expectedHtml =
      '<h1>Heading 1</h1>\n<p>Unformatted text excluding headings</p>\n<p><a href="https://www.example.com">Link text</a></p>';
    const convertedHtml = service.convertToHtml(inputText);

    expect(convertedHtml).toEqual(expectedHtml);
  });

  it('should convert markdown to html - link with no url', () => {
    const inputText = '[Link text]()';
    const expectedHtml = '<p><a href="#">Link text</a></p>';
    const convertedHtml = service.convertToHtml(inputText);

    expect(convertedHtml).toEqual(expectedHtml);
  });

  it('should convert markdown to html - link with no text', () => {
    const inputText = '[](https://www.example.com)';
    const expectedHtml = '<p><a href="https://www.example.com">https://www.example.com</a></p>';
    const convertedHtml = service.convertToHtml(inputText);

    expect(convertedHtml).toEqual(expectedHtml);
  });

  it('should convert markdown to html - link with no text and no url', () => {  
    const inputText = '[]()';
    const expectedHtml = '<p><a href="#"></a></p>';
    const convertedHtml = service.convertToHtml(inputText);

    expect(convertedHtml).toEqual(expectedHtml);
  });
});
