# Covalent Layouts

![layouts](assets/images/layouts.png)

All of your product or application layouts should follow these flows and use these specific layouts.

## Nav View (for dashboards)

![nav view](assets/images/nav-view.png)

Dashboards can come in various varieties and can range in analytical/chart dashboards to environmental dashboards to browsing/catalog dashboards.

Typically, dashboards should use responsive widths of cards in 33/33/33, 60/40 or 70/30

### Examples of Dashboards

![dashboard](assets/images/dashboard1.png)

![dashboard](assets/images/dashboard2.png)

![dashboard](assets/images/dashboard3.png)

![dashboard](assets/images/dashboard4.png)

---

## Nav List View (for documentation)

![nav list](assets/images/nav-list.png)

Nav lists have larger in page navigation for things like documentation where you want the nav list to have titles, descriptions, icons and always be present.

### Examples of Nav Lists

![docs](assets/images/nav-list1.png)

---

## Manage List View (for list or management views)

![manage list](assets/images/manage-list.png)

Manage lists are the most commonly used in subpages of Teradata products. All CRUD (create, read, update, delete) views should use the manage list.

Common features:

- left nav for subpages (and occassionally filters)
- left nav title above menu
- sub-toolbar with active page title
- actions in sub-toolbar
- filters in sub-toolbar
- card with list (occassionally datatable)
- searchbox filter in card

### Examples of Manage Lists

![manage list](assets/images/manage-list1.png)

![manage list](assets/images/manage-list2.png)

![manage list](assets/images/manage-list3.png)

#### Lists VS Datatables

##### When possible use a responsive material list to limit the amount of data and for maximum responsive resizing

Responsive List:

Notice how the columns react to the browser width.

![responsive list](assets/images/manage-list-responsive.gif)

Datatable:

Reserve datatable usage for primarily for tablature data, or for lists that MUST have many columns driven by dynamic JSON.

![datatable list](assets/images/manage-list-datatable.gif)

> ProTip: notice the use of Covalent [flexbox layout](https://teradata.github.io/covalent/#/layouts) & [virtual scroll](https://teradata.github.io/covalent/#/components/virtual-scroll) for the datatable

---

## Card Over View (for isolated, focused detail views or forms)

![card over](assets/images/card-over.png)

The Card over view is used for focus. Simple forms, blog/news details, and other simple, focused views are good candidates for this layout.

### Examples of Card Over

![card over](assets/images/card-over1.png)

![card over listener](assets/images/card-over-listener.png)

> ProTip: Don't use overly complex forms with too many steppers and expansion panels in a card over. It should be used for focused, contextual forms or singular articles or blog posts.

---

## Create / Add Views

Depending on the complexity, there are several options for creation views.

### Dialog Creation

ONLY use dialogs (modals) for extremely simple creation, such as forms with 1-5 fields

![dialog-creation](assets/images/dialog-creation.png)

A dialog may also be used when selecting a type that will lead to more options in a sub-dashboard

![dialog-type](assets/images/dialog-type.png)

> ProTip: notice the usage of a Setup Guide for multiple, async steps for creation

![sub-dashboard](assets/images/sub-dashboard.png)

### Manage List Form

Sometimes when creating a new item, a child item, or metadata on an item, using a form inside the manage list with the left nav is useful for context.

![manage-list-form](assets/images/manage-list-form.png)