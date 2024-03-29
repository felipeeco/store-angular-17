import { Component, ElementRef, Input, ViewChild, Inject, PLATFORM_ID, signal } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import WaveSurfer from 'wavesurfer.js';

@Component({
  selector: 'app-wave-audio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wave-audio.component.html',
  styleUrl: './wave-audio.component.css'
})

export class WaveAudioComponent {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  @Input({required: true}) audioUrl!: string;
  @ViewChild('wave') container!: ElementRef;
  private ws!: WaveSurfer;
  isPlaying = signal(false);
  
  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.ws = WaveSurfer.create({
        url: this.audioUrl,
        container: this.container.nativeElement
      });

      this.ws?.on('play', () => this.isPlaying.set(true));
      this.ws?.on('pause', () => this.isPlaying.set(false));
    }
  }

  playPause() {
    this.ws.playPause();
  }
}
