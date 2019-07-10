# Material Design

Always refer to the official Material Design spec as the source of truth.

Any components in Angular Material, Covalent, or your product should follow the spec.

> Heads up: the Material.io spec was radically updated recently, and it will take some time for Angular Material and Covalent to update with all the new spec options and components!

- [Material Design](https://material.io/)
- [Material Design Development](https://material.io/develop/)
- [Material Design Tools](https://material.io/tools/)

## Creating new components

For Teradata products, you should VERY RARELY ever have to create brand new components. Always try to use [Atomic Design](http://bradfrost.com/blog/post/atomic-web-design/) principles, and mix & match existing Angular Material & Covalent components to create new Molecules, Organisms & Templates (View [Covalent Templates](https://teradata.github.io/covalent/#/templates) for inspiration).

If you do create a new component (for example, a component that's in the Material Design spec but not in Angular Material or Covalent), make sure you follow the guidance and patterns of the spec when creating the component.