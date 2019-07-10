# New Teradata Brand

> WARNING:  
> You have been asked by Teradata Corporation to assist with the development and realization of this Project and in doing so you will be exposed to, receive and exchange highly confidential technical and business secret information relative to this Project.
> Your obligations with regard to Confidential Information will be on-going and, unless you are otherwise expressly advised by Teradata in writing, your obligations will survive (1) the termination of your involvement in the Project and (2) the voluntary or involuntary termination of your employment with Teradata.

You MUST confirm that you have read and agree to the terms of this Agreement:
[Sign NDA](http://trd.td.teradata.com/bus_apps/Teradata_Access_Control_Tool/nda/sign_up_for_nda.cfm?id=150)

## Implementation

To implement the all new Teradata logo, font, and colors follow these simple steps:

1. Update [/src/assets/icons](https://github.td.teradata.com/ux/covalent-criteria/tree/develop/src/assets/icons) (overwrite existing)
2. Update [/src/app/app.component.ts](https://github.td.teradata.com/ux/covalent-criteria/blob/develop/src/app/app.component.ts) (to load new SVG icons)
3. Add [/src/assets/font](https://github.td.teradata.com/ux/covalent-criteria/tree/develop/src/assets/font) (for the new webfont)
4. Update [/src/assets/ico](https://github.td.teradata.com/ux/covalent-criteria/tree/develop/src/assets/ico) (new favicon files)
5. Update [/src/index.html](https://github.td.teradata.com/ux/covalent-criteria/blob/develop/src/index.html) (update your loader w/ the new logo, font & colors)
6. Update [/src/theme.scss](https://github.td.teradata.com/ux/covalent-criteria/blob/develop/src/theme.scss) & add [/src/_teradata-branding.scss](https://github.td.teradata.com/ux/covalent-criteria/blob/develop/src/_teradata-branding.scss)  (you may have to merge some existing styles)
7. Update /src/main/main.component.html & /src/login/login.component.html and change `svgIcon ="assets:teradata"` to `svgIcon ="teradata-dark"`

### Update icons directory

By overwriting/updating your [/src/assets/icons](https://github.td.teradata.com/ux/covalent-criteria/tree/develop/src/assets/icons) directory you'll get:

1. New Teradata logo (default 2 color, reverse 2 color & solid)
2. Updated Teradata product icons (AppCenter, Control Center, QueryGrid, Unity, Viewpoint & Workload Analytics)

### Update SVGs in app.component.ts

Update [/src/app/app.component.ts](https://github.td.teradata.com/ux/covalent-criteria/blob/develop/src/app/app.component.ts) to include all the new Angular SVG icon registrations for the logo(s) and product icons

> Notice: we keep the legacy "assets:teradata" icon namespace BUT the rest of the icons don't require the "assets:" namespace

### Add webfont directory

By adding the [/src/assets/font](https://github.td.teradata.com/ux/covalent-criteria/tree/develop/src/assets/font) directory your app will embed the new brand webfont (Ridley Grotesk), including:

1. Ridley Grotesk Regular
2. Ridley Grotesk Medium
3. Ridley Grotesk Semibold
4. Ridley Grotesk Bold
5. CSS for the webfont

### Update favicons

By updating & overwriting the [/src/assets/ico](https://github.td.teradata.com/ux/covalent-criteria/tree/develop/src/assets/ico) directory you'll get:

1. New Teradata logo default favicons
2. New Teradata logo Apple icons
3. New Teradata logo Android icons
4. New Teradata logo Windows icons

> Important: these favicons won't be used unless you update your index.html 


### Update index.html

Merging in the changes in [/src/index.html](https://github.td.teradata.com/ux/covalent-criteria/blob/develop/src/index.html) your app will get the later logo & Angular pre-loader as well as the updated favicon links.

*Make sure you:*

- Update the html title with your app/product title
- Use the proper accent color (default is orange)

### Update theme.scss & add _teradata-branding.scss

Most importantly you'll need to update [/src/theme.scss](https://github.td.teradata.com/ux/covalent-criteria/blob/develop/src/theme.scss) and add [/src/_teradata-branding.scss](https://github.td.teradata.com/ux/covalent-criteria/blob/develop/src/_teradata-branding.scss).

There are many important things from this update you must include:

1. Import of new webfont
2. Use of new webfont
3. Custom Teradata brand color palette
4. Utility classes for new background & font colors
5. Angular Material theme usage of new brand colors
6. New standard stateful color classes (positive, neutral, negative, etc)

View the [Teradata Color Palettes](#color) for more usage information.
