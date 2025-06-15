import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RelayService {
  private apiUrl = 'http://localhost:8000/api/rele'; // ajuste se necessário

  constructor(private http: HttpClient) {}

  ligar() {
    return firstValueFrom(this.http.post(`${this.apiUrl}/ligar/`, {}));
  }

  desligar() {
    return firstValueFrom(this.http.post(`${this.apiUrl}/desligar/`, {}));
  }
}
