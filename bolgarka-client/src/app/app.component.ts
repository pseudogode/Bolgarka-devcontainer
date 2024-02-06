import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TestHttpClientService } from './test-http-client.service';
import { Observable, shareReplay } from 'rxjs';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'bolgarka-client';
  data$: Observable<any[]>;
  constructor(testService: TestHttpClientService){
    this.data$ = testService.getTestData().pipe(shareReplay(1));
  }
}
