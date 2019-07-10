# Add an Angular service

In this step we'll create a new Angular service that pulls in an existing AppCenter app which is a headless microservice.

> Service is a broad category encompassing any value, function, or feature that your application needs.
> Almost anything can be a service. A service is typically a class with a narrow, well-defined purpose. It should do something specific and do it well. --Angular.io

[https://angular.io/guide/architecture#services](https://angular.io/guide/architecture#services)

### Teradata Ecosystem Services

We import several of the Ecosystem Services already in this app template:

- Auth (included in jwt-data & login service)
- Query (API to query Teradata)
- System (API to load registered Teradata databases)

### Create a new Angular service

Create a new typescript file in the /src/services directory (named something like dct.service.ts)

#### Import dependencies

We first need to import everything we need to build our new service.

```typescript
import { Injectable } from '@angular/core';
import { Response, Headers, RequestOptionsArgs } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subscriber } from 'rxjs/Subscriber';

import { RESTService, HttpInterceptorService, IRestQuery } from '@covalent/http';

import { APP_CENTER_API } from '../config/api.config';
```

#### Export an interface

Next we'll create a TypeScript interface that defines our new object

```typescript
export interface IDct {
  data?: object[];
}
```

#### Export a class

Now to the main function of the service. Create a class that will use the RESTful interface to consume an API and make it available for use in a dashboard.

```typescript
@Injectable()
export class DctService extends RESTService<IApp> {

  constructor(private _http: HttpInterceptorService) {
    super(_http, {
      baseHeaders: new Headers({'Accept': 'application/json'}),
      baseUrl: APP_CENTER_API,
      path: '/apps',
    });
  }

}
```

After you've created your service, make sure you add an export to /src/services/index.ts to make this service available to import into components.

```typescript
export { DctService, IDct } from './dct.service';
```
