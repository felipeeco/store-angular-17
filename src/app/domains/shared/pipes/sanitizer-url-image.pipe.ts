import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ 
   name: 'safeUrl',
   standalone: true
 })
export class SafeUrlPipe implements PipeTransform {

 constructor(private sanitizer: DomSanitizer) {}

 transform(url: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(url);
 }
}
