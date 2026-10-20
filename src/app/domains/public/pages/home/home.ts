import { DatePipe } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { PingService } from '../../../../core/api/ping.service';
import { PingResponse } from '../../../../core/api/api.models';

@Component({
  selector: 'app-home',
  imports: [DatePipe],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  private readonly pingService = inject(PingService);

  readonly ping = signal<PingResponse | null>(null);
  readonly error = signal<boolean>(false);

  ngOnInit(): void {
    // Note: Render free tier takes ~30s to wake up. The loading state handles this.
    this.pingService.ping().subscribe({
      next: (res) => this.ping.set(res),
      error: (err) => {
        console.error('Ping failed', err);
        this.error.set(true);
      }
    });
  }
}
