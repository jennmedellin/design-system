# Teradata Color Palettes

The [Material Design color system](https://material.io/design/color/) is extremely flexible and accessible.

> "In this system, a primary and a secondary color are typically selected to represent your brand. Dark and light variants of each color can then be applied to your UI in different ways." - Material Design

## Teradata Color Families for Products

![color](assets/images/colors.png)

Colors signify different families of products and apps for Teradata. Each of the following palettes are recommended for each family:

### Console Color Scheme

Core consoles & products (such as IntelliCloud Management Console, Control Center, Server Management) color palette is Slate & Orange:

#### Slate & Orange

![orange-light-blue palette](assets/images/orange.png)

colors in theme.scss:
```scss
$primary: mat-palette($td-slate, 700, 100, 900);
$accent:  mat-palette($td-orange, 800, 100, 900);
$warn:    mat-palette($mat-deep-orange, 800, 100, 900);
```

![controlcenter](assets/images/controlcenter.png)

-----

### Apps & Field Solution Color Scheme

Non-core products & field solutions (such as AppCenter apps, Customer Journey & CIM/RTIM) color palette is Slate & Teal:

#### Slate & Teal

![teal-orange palette](assets/images/teal.png)

colors in theme.scss:
```scss
$primary: mat-palette($td-slate, 700, 100, 900);
$accent:  mat-palette($td-teal, 800, 100, 900);
$warn:    mat-palette($mat-deep-orange, 800, 100, 900);
```

![appcenter](assets/images/appcenter.png)

-----

### Analytics & Monitoring Color Scheme

Analytics & Monitoring products (such as Viewpoint, Unity System Monitoring & Workload Analytics) color palette is Slate & Teal:

#### Slate & Blue

![blue-orange palette](assets/images/blue.png)

colors in theme.scss:
```scss
$primary: mat-palette($td-slate, 700, 100, 900);
$accent:  mat-palette($td-blue, 800, 100, 900);
$warn:    mat-palette($mat-deep-orange, 800, 100, 900);
```

![unity](assets/images/unity.png)

-----

### Website Color Scheme

Public websites (such as the Teradata.com homepage, Docs site, Access site and other subsites) color palette is Slate & Orange, but with a white toolbar:

#### White, Slate & Orange

![orange-light-blue palette](assets/images/white.png)

toolbar markup:
```html
<td-layout-nav color="white" logo="teradata-dark" toolbarTitle="Website">
```

colors in theme.scss:
```scss
$primary: mat-palette($td-slate, 700, 100, 900);
$accent:  mat-palette($td-orange, 800, 100, 900);
$warn:    mat-palette($mat-deep-orange, 800, 100, 900);
```

![controlcenter](assets/images/website.png)

-----

## Remember to update your theme.scss file!

If you get an error like the following, you'll need to update your theme.scss with the latest files from the [New Teradata Brand](#brand).

```
ERROR in ./src/theme.scss (./node_modules/raw-loader!./node_modules/postcss-loader/lib??embedded!./node_modules/sass-loader/lib/loader.js??ref--14-3!./src/theme.scss)
Module build failed: 
$primary: mat-palette($td-slate, 700, 100, 900);
                     ^
      Undefined variable: "$td-slate".
      in /Users/username/Sites/covalent-criteria/src/theme.scss (line 93, column 23)
ℹ ｢wdm｣: Failed to compile.
```

-----

