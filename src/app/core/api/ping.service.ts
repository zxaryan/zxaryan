import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PingResponse } from './api.models';

@Injectable({ providedIn: 'root' })
export class PingService {
  private readonly http = inject(HttpClient);
  
  // ⚠️ IMPORTANT: Pointing directly to your live Render URL
  private readonly apiUrl = 'https://zxaryan-backend.onrender.com/api/public/db-ping';

  ping(): Observable<PingResponse> {
    return this.http.get<PingResponse>(this.apiUrl);
  }
}