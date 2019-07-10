# Use data in dashboard

Now that we have our new service imported into our dashboard component, we can jump to HTML markup and design our data!

Edit /src/app/dashboard/dashboard.component.html

### Add a card to the dashboard

Referring to the [Material Design spec for cards](https://material.io/guidelines/components/cards.html), the [Angular Material cards docs](https://material.angular.io/components/card/overview), and the [Covalent cards design patterns](https://teradata.github.io/covalent/#/design-patterns), we'll add a new card to the dashboard.

```html
<mat-card>
  <mat-card-title>Card title</mat-card-title>
  <mat-card-subtitle>card subtitle</mat-card-subtitle>
  <mat-divider></mat-divider>
  <mat-card-content>
    card content here
  </mat-card-content>
</mat-card>
```

![DCT Demo Card](assets/images/dct-demo-card.png)

---

### Add a chart to the card

We'll use NGX-Charts (an Angular D3.js library) to add a chart in our new card. Refer to the [Covalent docs on NGX-Charts](https://teradata.github.io/covalent/#/components/ngx-charts) and the official NGX Chart [docs](https://swimlane.gitbooks.io/ngx-charts/content/) and [demo](https://swimlane.github.io/ngx-charts/).

First in our TypeScript add some defaults for chart options:

```typescript
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

We want a simple bar chart for Memory usage so inside `<mat-card-content>` add:

```html
  <div style="height:250px;">
    <ngx-charts-bar-horizontal
      *ngIf="memoryChart"
      [scheme]="colorScheme"
      [results]="memoryChart"
      [gradient]="gradient"
      [xAxis]="showXAxis"
      [yAxis]="showYAxis"
      [legend]="showLegend"
      [showXAxisLabel]="showXAxisLabel"
      [showYAxisLabel]="showYAxisLabel"
      [xAxisLabel]="xAxisLabel"
      [yAxisLabel]="yAxisLabel">
    </ngx-charts-bar-horizontal>
  </div>
```

which renders

![DCT Demo Memory](assets/images/dct-memory.png)

To add a second card with a chart for CPU usage, add this in the second `<mat-card>`:

```html
  <mat-card>
    <mat-card-title>CPU Used</mat-card-title>
    <mat-card-subtitle>CPUs used by my apps</mat-card-subtitle>
    <mat-divider></mat-divider>
    <mat-card-content>
      <div style="height:250px;" flex>
        <ngx-charts-bar-horizontal
          *ngIf="cpuChart"
          [scheme]="colorScheme"
          [results]="cpuChart"
          [gradient]="gradient"
          [xAxis]="showXAxis"
          [yAxis]="showYAxis"
          [legend]="showLegend"
          [showXAxisLabel]="showXAxisLabel"
          [showYAxisLabel]="showYAxisLabel"
          [xAxisLabel]="xAxisLabel"
          [yAxisLabel]="yAxisLabel">
        </ngx-charts-bar-horizontal>
      </div>
    </mat-card-content>
  </mat-card>
```

which renders

![DCT Demo CPU](assets/images/dct-cpu.png)
