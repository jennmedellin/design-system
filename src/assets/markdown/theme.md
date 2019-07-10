# Customize your app theme, logo & title

It's easy to change the color of your app and the logo & title in the main toolbar & sidenav.

## Edit app theme

To change the app color, edit /src/theme.scss and change the $primary & $accent colors following the Material Design color palette spec. [https://material.io/guidelines/style/color.html](https://material.io/guidelines/style/color.html)

For example to change the app from Teal & Orange to Orange & Light Blue, change

```scss
$primary: mat-palette($mat-teal, 700, 100, 900);
$accent:  mat-palette($mat-orange, 800, 100, 900);
```

to

```scss
$primary: mat-palette($mat-orange, 800, 100, 900);
$accent:  mat-palette($mat-light-blue, 700, 100, 900);
```

> ProTip&trade;: 700, 100 and 900 are all different hues or shades of the color. 50 is lightest and 900 is darkest

Now your login should look like this:

![DCT Demo Login](assets/images/dct-demo-login.png)

---

### Edit app title

Since we're using Angular Translate to translate the app to any language, you can easily change the app title in 1 location.

Edit /src/assets/i18n/en.json to edit the English file and change this line to change your title:

```typescript
"APP_TITLE": "App Template",
```

---

### Edit app logo

#### Add a custom SVG logo

Copy your custom SVG logo to /src/assets/icons

Next, edit /src/app/app.component.ts to register & sanitize your SVG in Angular. Add this line:

```typescript
this._iconRegistry.addSvgIconInNamespace('assets', 'dct',
      this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/dct.svg'));
```

#### Change logo in sidenav

To change the app logo in the sidenav edit /src/app/main/main.component.html and edit this line:

```html
<td-navigation-drawer flex logo="assets:dct" sidenavTitle="{{'APP_TITLE' | translate }}" [name]="user?.display_name" [email]="user?.email">
```

and change the `logo` from `assets:teradata` to `assets:dct` (you could also change `sidenavTitle` if you don't want to use the app title)

#### Change logo in dashboard toolbar

To change the app logo from `assets:teradata` to `assets:dct` in the dashboard toolbar edit /src/app/dashboard/dashboard.component.html and edit this line:

```html
<td-layout-nav logo="assets:dct" toolbarTitle="{{'APP_TITLE' | translate }}">
```

and change the `logo` (you could also change `toolbarTitle` if you don't want to use the app title)

Now your dashboard should look like this:

![DCT Demo Dashboard](assets/images/dct-dashboard-logo.png)


#### Change logo on login

To edit the logo in the card on the login page, edit /src/app/login/login.component.html and change this line:

```html
<mat-icon class="mat-icon-logo" svgIcon ="assets:dct"></mat-icon>
```

#### Change logo on pre-loading screen

To edit the logo on the very first pre-loading screen, edit /src/index.html and replace the contents inside the `<mat-icon>` with the SVG code of your logo.

> ProTip&trade;: We must use the SVG code here since index.html is actually outside the Angular application.

### Extra Credit

To have a little fun we can do some custom SCSS to add a background image to ONLY the dashboard inner toolbar.

Edit /src/app/dashboard/dashboard.component.scss and add:

```scss
 .mat-toolbar {
     background: url('/assets/icons/dct-bg.svg') no-repeat center center fixed;
     background-size: cover;
     color: white;
 }
```
> ProTip&trade;: This ONLY targets the toolbar inside the dashboard page since Angular components isolate CSS by using Shadow DOM!

Now your app should look like:

![DCT Toolbar](assets/images/dct-toolbar.png)
