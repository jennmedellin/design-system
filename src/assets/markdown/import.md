# Import service into the dashboard

Now that we've imported in the service from an existing AppCenter app, let's put it to use in our dashboard.

Edit /src/app/dashboard/dashboard.component.ts and notice that we're already importing several services:

```typescript
import {
  ErrorService, SystemService, ISystem, AppsService, IApp,
} from '../../services';
```

Add our new service (and interface) to this import:

```typescript
import {
  ErrorService, SystemService, ISystem, AppsService, IApp, DctService, IDct,
} from '../../services';
```

Next create a variable with a type (since we're in TypeScript!):

```typescript
  dct: IDct[];
```

then add to the constructor for use in our component

```typescript
private _dctService: DctService,
```

Next create a new function with the async await promise to load our data from our service into our variable:

```typescript
  async loadDct(): Promise<void> {
    this.dct = await this._dctService.getDct().toPromise();
  }
```

Lastly, in our `ngOnit` add this function to load it on page initialization:

```typescript
  this.loadDct(),
```
