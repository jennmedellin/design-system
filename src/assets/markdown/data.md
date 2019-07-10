# Create data objects for charts

### Define variables

First lets define chart variables & options we'll use

Edit /src/app/dashboard/dashboard.component.ts and inside the `DashboardComponent` class add:

```typescript
// chart objects
cpuChart: any;
memoryChart: any;

// options
showXAxis: boolean = true;
showYAxis: boolean = true;
gradient: boolean = false;
showLegend: boolean = false;
showXAxisLabel: boolean = false;
xAxisLabel: string = '';
showYAxisLabel: boolean = false;
yAxisLabel: string = '';

colorScheme: any = {
  domain: ['#EF6C00', '#1976D2', '#00796B', '#303F9F', '#512DA8', '#C2185B'],
};
```

To populate and object with metadata about apps in AppCenter we'll loop over data from the existing app service.

---

### Import the User token

Since we want to load on the apps from the logged in user, we'll use the ** Ecosystem Core Service ** for JWT token:

Add the `JWTDataService` to the `import`:

```typescript
import {
  ErrorService, SystemService, ISystem, AppsService, IApp, JWTDataService,
} from '../../services';
```

and then define a private variable in our constructor for user in this component to put that `JWTDataService` to use:

```typescript
  constructor(private _changeDetectorRef: ChangeDetectorRef,
              private _systemService: SystemService,
              private _appsService: AppsService,
              private _jwtDataService: JWTDataService,
              private _loadingService: TdLoadingService,
              private _errorService: ErrorService) {
  }
```

> ProTip&trade;: private & public are access modifiers, and this constructor syntax is shorthand

---

### Create array of my apps

Inside the `loadApps` function we need to first grab all the apps the current use owns:

Update the function to look like:

```typescript
async loadApps(): Promise<void> {
  this.apps = await this._appsService.query({per_page: 5, page: 1}).toPromise();
  // Get all apps from my username
  let data: IApp[] = await this._appsService.query({ username: this._jwtDataService.data.username }).toPromise();
}
```

> ProTip&trade;: notice we're filtering the query by username from the JWT token of the logged in user

---

### Create chart data for Memory & CPU

Next we'll use a `map` on our new `data` object to loop over each app and `return` an array of objects with App Name and CPU usage:

```typescript
  async loadApps(): Promise<void> {
    this.apps = await this._appsService.query({per_page: 5, page: 1}).toPromise();
    // Get all apps from my username
    let data: IApp[] = await this._appsService.query({ username: this._jwtDataService.data.username }).toPromise();
    // Map an array of apps with name & memory info
    this.memoryChart = data.map((app: IApp) => {
      return {
        name: app.name,
        value: app.memory,
      };
    });
  }
```

While we're here lets copy that bit and grab the CPU usage

```typescript
  async loadApps(): Promise<void> {
    this.apps = await this._appsService.query({per_page: 5, page: 1}).toPromise();
    // Get all apps from my username
    let data: IApp[] = await this._appsService.query({ username: this._jwtDataService.data.username }).toPromise();
    // Map an array of apps with name & memory info
    this.memoryChart = data.map((app: IApp) => {
      return {
        name: app.name,
        value: app.memory,
      };
    });
    // Map an array of apps with name & cpu info
    this.cpuChart = data.map((app: IApp) => {
      return {
        name: app.name,
        value: app.cpus,
      };
    });
  }
```