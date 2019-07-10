# Standard State Colors

> IMPORTANT: You must have the latest theme.scss & _teradata-branding.scss in your /src directory to use these classes!

Now that we have a custom Angular Material palette for the Teradata brand, we use standard Material Design colors for state across all products and apps.

## Type colors

![type-colors](assets/images/type-colors.png)

```html
<div class="tc-positive pad-xs">Positive - tc-positive</div>
<div class="tc-caution pad-xs">Caution - tc-caution</div>
<div class="tc-negative pad-xs">Negative - tc-negative</div>
<div class="tc-neutral pad-xs">Neutral - tc-neutral</div>
<div class="tc-emphasis-1 pad-xs">Emphasis 1 - tc-emphasis-1</div>
<div class="tc-emphasis-2 pad-xs">Emphasis 2 - tc-emphasis-2</div>
```

## Background colors

![background-colors](assets/images/background-colors.png)

```html
<div class="bgc-positive pad-sm push-bottom-xs">Positive - bgc-positive</div>
<div class="bgc-caution pad-sm push-bottom-xs">Caution - bgc-caution</div>
<div class="bgc-negative pad-sm push-bottom-xs">Negative - bgc-negative</div>
<div class="bgc-neutral pad-sm push-bottom-xs">Neutral - bgc-neutral</div>
<div class="bgc-emphasis-1 pad-sm push-bottom-xs">Emphasis 1 - bgc-emphasis-1</div>
<div class="bgc-emphasis-2 pad-sm push-bottom-xs">Emphasis 2 - bgc-emphasis-2</div>
```

## List colors

![list-colors](assets/images/list-colors.png)

```html
<mat-list>
  <mat-list-item>
    <mat-icon matListIcon class="tc-positive">check</mat-icon>
    <p matLine class="tc-positive">Positive list item</p>
    <mat-divider [inset]="true"></mat-divider>
  </mat-list-item>
  <mat-list-item>
    <mat-icon matListIcon class="tc-caution">warning</mat-icon>
    <p matLine class="tc-caution">Caution list item</p>
    <mat-divider [inset]="true"></mat-divider>
  </mat-list-item>
  <mat-list-item>
    <mat-icon matListIcon class="tc-negative">error</mat-icon>
    <p matLine class="tc-negative">Negative list item</p>
    <mat-divider [inset]="true"></mat-divider>
  </mat-list-item>
</mat-list>
<mat-list class="push-top">
  <mat-list-item>
    <mat-icon matListIcon class="tc-neutral">ac_unit</mat-icon>
    <p matLine class="tc-neutral">Neutral list item</p>
    <mat-divider [inset]="true"></mat-divider>
  </mat-list-item>
  <mat-list-item>
    <mat-icon matListIcon class="tc-emphasis-1">directions_boat</mat-icon>
    <p matLine class="tc-emphasis-1">Emphasis 1 list item</p>
    <mat-divider [inset]="true"></mat-divider>
  </mat-list-item>
  <mat-list-item>
    <mat-icon matListIcon class="tc-emphasis-2">local_activity</mat-icon>
    <p matLine class="tc-emphasis-2">Emphasis 2 list item</p>
    <mat-divider [inset]="true"></mat-divider>
  </mat-list-item>
</mat-list>

```

## Additional background colors

![background2-colors](assets/images/background2-colors.png)

```html
<div layout-gt-xs="row">
  <div flex-gt-xs layout="row" layout-align="start center" class="bgc-positive push-sm pad">
    <div flex>
      <div class="mat-title push-none">Positive</div>
      <div class="mat-body-1">Result</div>
    </div>
    <mat-icon class="text-30">check</mat-icon>
  </div>
  <div flex-gt-xs layout="row" layout-align="start center" class="bgc-caution push-sm pad">
    <div flex>
      <div class="mat-title push-none">Caution</div>
      <div class="mat-body-1">Result</div>
    </div>
    <mat-icon class="text-30">warning</mat-icon>
  </div>
  <div flex-gt-xs layout="row" layout-align="start center" class="bgc-negative push-sm pad">
    <div flex>
      <div class="mat-title push-none">Negative</div>
      <div class="mat-body-1">Result</div>
    </div>
    <mat-icon class="text-30">error</mat-icon>
  </div>
</div>
<p class="mat-subheading-1 push-none">Other backgrounds</p>
<div layout-gt-xs="row">
  <div flex-gt-xs layout="row" layout-align="start center" class="bgc-neutral push-sm pad">
    <div flex>
      <div class="mat-title push-none">Neutral</div>
      <div class="mat-body-1">Miscellaneous</div>
    </div>
    <mat-icon class="text-30">ac_unit</mat-icon>
  </div>
  <div flex-gt-xs layout="row" layout-align="start center" class="bgc-emphasis-1 push-sm pad">
    <div flex>
      <div class="mat-title push-none">Emphasis 1</div>
      <div class="mat-body-1">Miscellaneous</div>
    </div>
    <mat-icon class="text-30">directions_boat</mat-icon>
  </div>
  <div flex-gt-xs layout="row" layout-align="start center" class="bgc-emphasis-2 push-sm pad">
    <div flex>
      <div class="mat-title push-none">Emphasis 2</div>
      <div class="mat-body-1">Miscellaneous</div>
    </div>
    <mat-icon class="text-30">local_activity</mat-icon>
  </div>
</div>

```
