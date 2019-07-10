# Create an AppCenter app

## Login

Login into an AppCenter environment (for example, [https://appcenter.ps.ac.uda.io/](https://appcenter.ps.ac.uda.io/)). 

Enter your Quicklook ID & password:

![AppCenter Login](assets/images/appcenter_login.png)

## Develop an Application

Click on the menu icon, then on Develop, then Create:

![AppCenter Create App](assets/images/appcenter-create-app.png)

### App form

To create an app specify the name, leave Application selected as the type, and hit save.

> For help on creating a script see AppCenter's manual.

![AppCenter App Info](assets/images/appcenter_creation-form.png)

### App setup

Once the app is created, it needs configuration.  Click on App Container to get started:

![AppCenter App Info](assets/images/appcenter_creation-setup.png)

In the App Container section enter your docker image information:

Registry: `quay.ac.uda.io` (or your repo)

Image: `username/image-name` (enter your username and image name)

Tag: `specialTagRequired` (your image tag)

Click Save on top

> Skip this next step if you set your Quay settings to Make Public

##### Optional info

Username: (Username to the repository)

Password: (Password to the repository)

![AppCenter App Info](assets/images/appcenter-container.png)

After your image successfully uploads (if you got an error make sure your container image is set to public in Quay), be sure to set your port number correctly.

Port: 8080 (make sure to use 8080 for web apps)

> ProTip&trade;: if you update the image the port needs to be set to 8080 again

![AppCenter App Info](assets/images/appcenter-app-configuration.png)

### App Settings

Optionally, you can modify metadata and settings from the App Overview's App Info card including: 
- Name
- Description
- Color
- Icon
- Memory
- CPU

### App Permissions

#### Managers

Optionally you grant manager permissions to other users or LDAP groups. This gives them full control over your app settings so grant with caution!

### Start App

Once the app container is configured and your status reads "Ready to Run", click the Start button.

![AppCenter Launch](assets/images/appcenter-ready.png)

### Celebration!

Visit the AppCenter homepage and you should see your app now!

Click the launch icon to run your app in a new tab or click the card to preview your app overview as others see it.

![AppCenter Launch](assets/images/appcenter-launch.png)
