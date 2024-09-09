import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MarkdownConversionService {
  convertToHtml(inputText: string): string {
    let convertedHtml = inputText;

    //# Heading 1,2,3,4,5,6
    const headingLevels = [1, 2, 3, 4, 5, 6];
    headingLevels.forEach(level => {
      const regex = new RegExp(`^${'#'.repeat(level)} (.*$)`, 'gim');
      convertedHtml = convertedHtml.replace(regex, `<h${level}>$1</h${level}>`);
    });

    //Unformatted text excluding headings
    convertedHtml = convertedHtml.replace(/^(?!<h[1-6]>.*<\/h[1-6]>)(?!\s*$).+/gim, '<p>$&</p>');

    //[Link text](https://www.example.com)
    convertedHtml = convertedHtml.replace(/\[(.*?)\]\((.*?)\)/gim, (match, p1, p2) => {
      const url = p2 ? p2 : '#';
      const text = p1 ? p1 : p2;
      return `<a href="${url}">${text}</a>`;
    });

    console.log(convertedHtml);

    return convertedHtml
  }
  
}
