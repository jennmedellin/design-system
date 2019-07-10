# Build and deploy container

Edit `build.conf.js` and change the values as needed

```bash
    deploymentServer: 'nginx', // can be 'nginx' or 'nodejs'
    imageName: '<username>/appcenter-app',
    tag: 'mytag',
    repository: 'quay.ac.uda.io'
```

> Notice you must change the `<username>` above in `imageName` to your Quay username!

`deploymentServer` defaults to nginx which is much smaller. Use nodejs if you want to write backend code serverside

## Build and Push to Docker Repository

Run command: `npm run docker:push`

If you encounter the following error when running this command:

```bash
Error: Command failed: docker push quay.ac.uda.io/<username>/appcenter-app:mytag
unauthorized: access to the requested resource is not authorized
```

Then run the following command `docker login quay.ac.uda.io`

### Login to container repository (Quay)

Login to the website of the repository you used above, for example: [https://quay.ac.uda.io/](https://quay.ac.uda.io/)

![Quay Login](assets/images/quay_login.png)

### Drill down to container

After logging in your containers will be listed. 

Click on the container name:

![Quay Repo](assets/images/quay_repositories.png)

### To make the container publicly accessible:

   a. Click on your container name

   b. Click on Settings (in the left nav icons)

   c. Click on the "Make Public" button under Repository Visibility

![Quay Public](assets/images/quay-public.jpg)
