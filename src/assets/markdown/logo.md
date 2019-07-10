# Teradata Logo Placement

![logo](assets/images/logo.png)

Always use the standard Covalent logo options for the Teradata logo and your product/application name.

Do not include a second logo next to the Teradata logo, always use a text name. Dual logos are not allowed.

## Toolbar & Nav Drawer placement

![logo placement](assets/images/logo-toolbar-navdrawer.png)

### Toolbar logo

![logo placement](assets/images/logo-toolbar.png)

The Teradata logo should be placed on the left after the menu icon (if present) and before plain text product/app title.

#### Code

```html
<td-layout-nav logo="assets:teradata" toolbarTitle="Product Name" navigationRoute="/">
```

### Navigation Drawer logo (sidenav)

![logo placement](assets/images/logo-navdrawer.png)

The Teradata logo should be placed in the navigation drawer toolbar and before plain text product/app title.

#### Code

```html
<td-navigation-drawer logo="assets:teradata" sidenavTitle="Product Name">
```
### Dark Mode / Light Mode Navigation Drawer logo (optional)

![logo placement](assets/images/logo-navdrawer-dark.png)

If your application has a dark mode toggle, use this code to dynamically change between both 2 color variants (assuming your toggle variable is "activeTheme"):

#### Code

/src/app/main/main.component.html (or anywhere you're using the navigation drawer)

```html
<td-navigation-drawer [logo]="activeTheme === 'dark-theme' ? 'teradata' : 'teradata-dark'" sidenavTitle="Product Name">
```

/src/app/login/login.component.html (or anywhere you're using the mat-icon logo)

```html
<mat-icon class="mat-icon-logo" [svgIcon]="activeTheme === 'dark-theme' ? 'teradata' : 'teradata-dark'"></mat-icon>
```
