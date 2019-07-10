# Branch Standards

### Branch Model

The branch model to follow is based on [`git flow model`](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow) with a few modifications. It utilizes the core feature of Git, which is the power of branches.

#### Develop and Master Branches

Instead of a single master branch, this workflow uses two branches to record the history of the project. The master branch stores the official release history, and the develop branch serves as an integration branch for features.

* **Develop:** The development branch is used for integrating features planned for a future release. Partially complete features should not be merged into this branch. Separate feature branches should contain any partial work until it is in a complete enough state to merge to develop. See more about **Feature Branches** below.
* **Master:** This is a highly stable branch that is always production-ready and contains the last release version of source code in production (feature complete and stable snapshots of the `develop` branch).

![branch-img](assets/images/branch-model-main-branches.svg)

The previous two branches are the starting points for any project. They are very important and should be protected against accidental deletion until the project is better defined. Only authorized leads or project owners should be given the responsibility to merge changes from other branches—such as the feature branch, which we’ll discuss later—to the develop or master branches.

#### Feature Branch

Each new feature should reside in its own branch that is created from the develop branch. When a feature is complete, it gets merged back into develop. Feature branches should never interact directly with master.

![branch-img](assets/images/branch-model-feature-branch.svg)

The following requirements should be followed when possible:
* changes on the branch should not be more than **600** additions/deletions, this allows for easier PR reviews (line changes should not take into account unit or e2e tests)
* if the previous is not possible, then an empty base feature branch should be created and additional feature branches should be opened from it and **squash** merged into the base feature branch
* the branch should only be merged back to **develop** if the feature is complete

#### Fix Branch (hotfix)

Fix branches are used to create bug fixes for the next release and for production releases. They should be created from the develop branch and merged back into develop (then cherry-picked from develop into release branches when needed).

#### Mock Branch

This derives from the develop branch and is used to mock features which can potentially be **squash** merged as the initial commit of an empty **feature** branch, but its not required as the mock can become stale or just serve as inpiration for other branches.

#### Test Branch

There are times when we need to add missing unit or e2e tests into our product. When there is a need for this, they should be branched off develop and should be treated the same way as a **feature** branch.

### Branch Name Format
Each branch name consists of a **prefix**, a **name** and an **issueNumber**.

```bash
<prefix>/<name>-<issueNumber>
```

The **prefix** and **name** are mandatory but the **issueNumber** is only required if there is an issue that is bound to the task at hand.

Any branch name cannot be longer than 40 characters! This allows the branch to be easier
to read on GitHub, in various git tools, as well as easier to type in command line.

#### Prefix
Must be one of the following:

* **feature**: A new feature or enhancement, performance enhancements, code refactoring, changes that affect the build system, CI configuration or external dependencies
* **fix**: A bug fix or hot fix
* **mock**: A mock of a feature
* **test**: Adding missing tests or correcting existing tests (unit or e2e)

#### Name
The name could be anything specifying the task that was done. 

* kebab and lower case
* meaningful 2-3 words to describe the task

For example
`name-edit`, `ie9-flex`, `dashboard-system-monitoring`, etc.

#### issueNumber
The Jira/GitHub/etc issue bound to the task:

Note: add just the number in the case of Jira. e.g. `423` of `UDAAPP-423`

e.g.

```bash
feature/dashboard-monitoring
fix/safari-form-save-2345
test/app-save
```

### Branch Commands

#### Branch Creation

To create a branch the same way [`git flow`](https://github.com/nvie/gitflow) does it without the constraint, you need to create it the following way: 

```
git checkout -b feature/my-name-issueNumber develop
git checkout -b fix/my-bug-issueNumber develop
git checkout -b test/my-test develop
git checkout -b mock/my-mock develop
```
