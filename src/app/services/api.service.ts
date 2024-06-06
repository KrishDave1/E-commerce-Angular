import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Import the HttpClient class
import { Observable } from 'rxjs';
import { Options } from 'src/types';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private httpClient: HttpClient) {}

  get<T>(url: string, options?: Options): Observable<T> {
    return this.httpClient.get<T>(url, options) as Observable<T>;
  }
}

//* Here we are injecting the HttpClient dependency into some service and using it to make requests.However,we need to provide some Provider for the HttpClient dependency to be injected into the service.
// Essentially Providers is a set of instructions to tell Angular about how to inject dependencies into a service.So, a provider is required to inject the HttpClient dependency into the ApiService service.