# Azure Virtual Machine Setup Guide

## Introduction

This guide provides step-by-step instructions for setting up an Azure Virtual Machine (VM) for use in deploying Mongeese Maps.

## Prerequisites

- Azure subscription: Ensure you have an active Azure subscription.
- Azure Portal: Access to the [Azure Portal](https://portal.azure.com/).

## Step 1: Create a Virtual Machine

1. Open the [Azure Portal](https://portal.azure.com/).
2. Click on "Create a resource" and search for "Virtual Machine."
3. Click "Create" to start the VM creation wizard.
4. Fill in the required information, including:
   - **Basics**: Create a resource group if required, set VM name, Region, Operating System Image (recommended Rocky Linux 9), VM Size (B1ms recommended), and Authentication type (SSH public key recommended).
   - **Disks**: Configure OS disk and additional data disks if needed, 10 GiB Standard HDD recommended.
   - **Networking**: Set up network settings, selecting the resource group's virtual network and network security group.
   - **Monitoring**: Configure monitoring if desired.
5. Review your configuration and click "Review + create."
6. Click "Create" to start the deployment.

## Step 2: Creating a DNS label

Once the VM is deployed:

1. Navigate to the Azure Portal.
2. Go to the VM resource you created.
3. Under "Overview", click the public IP address to navigate to IP configuration.
4. Enter a DNS name label.

## Step 3: Connect to the Virtual Machine

1. Go to the VM resource.
2. Click on "Connect" to get connection details.
3. Use an SSH client to connect.

## Step 4: Install Software and configure application

### 1. General

To install the necessary software for use, enter the following commands:

```bash
sudo dnf update
# Updates the default packages.
sudo dnf install nano
# Installs the nano text editor.
```

The version of Node.js in the DNF package manager is currently too old for some application requirements so a newer version needs to be acquired from the NodeSource repository. To do this the following commands are used:

```bash
curl -sL https://rpm.nodesource.com/setup_18.x -o nodesource_setup.sh 
# Copies and saves a shell script from NodeSource as 'nodesource_setup.sh'
sudo bash nodesource_setup.sh
# Runs the script, adding the repository to DNF.
sudo dnf install nodejs 
# Installs Node.js, including npm functionality.
```


### 2. GitHub

To get the files for the application from GitHub, the following commands are used:

```bash
sudo dnf install git
# Installs git functionality.
sudo git clone https://github.com/TheodorosChristou/DevOps-Group.git
# -	Creates a local branch of the repository and checks out a branch that is forked from the repository’s currently active branch, in this case ‘main’.
```

Following this, the .env.local.example file needs to be renamed and modified to work on the website rather than a local environment using these commands:

```bash
cd DevOps-Group
# Changes the current directory to the cloned application's folder.
sudo cp .env.local.example .env.local
# Creates a copy of the file and names it .env.local.
sudo nano .env.local
# Opens the newly created .env.local file in the nano text editor.
```

In the text editor, find and set the nextauth URL to the DNS label. For example:

```bash
NEXTAUTH_URL=localhost:3000 modified to ->
NEXTAUTH_URL=https://com619mongeese.uksouth.cloudapp.azure.com
```

In a production environment, the access tokens for the authentication services would not be provided and would have to be set up and entered manually.


### 3. Docker

To install docker and docker compose, the following commands are run:

```bash
sudo dnf config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo
# Adds the Docker repository to the default package manager.
sudo dnf install docker-ce docker-ce-cli containerd.io docker-compose-plugin
# Install Docker, Docker CLI, Containerd, and Docker Compose
```

After installation, the following commands are run to configure the service:

```bash
sudo usermod -aG docker $USER
# Adds the user to the docker group, allowing commands to be run outside of root.
sudo systemctl start docker
# Starts the docker service
sudo systemctl enable docker
# Starts the service at boot
```


### 4. Deploying the application

To start the application, navigate to the root directory of the application if not already there by using the following command:

```bash
cd DevOps-Group
# If not already in the application directory.
```

Then enter:

```bash
sudo docker compose build
# Uses the Dockerfile to build the container for use by docker. May take a while.
docker compose up -d
# Starts  the containers, the -d option specifies detached mode - allowing the container to run in the background of the CLI.
```

At this stage the application will run, however it is without HTTPS certification.


### 5. Certbot

To configure HTTPS on the website, a valid certificate is required. This can be obtained from Let's Encrypt using Certbot. To do so, ensure the containers are running and enter the following command:

```bash
cd DevOps-Group
# If not already in the application directory.
sudo docker compose run certbot certonly
# Runs the certification function of certbot from the docker compose image.

How would you like to authenticate with the ACME CA?
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
1: Runs an HTTP server locally which serves the necessary validation files under
the /.well-known/acme-challenge/ request path. Suitable if there is no HTTP
server already running. HTTP challenge only (wildcards not supported).
(standalone)
2: Saves the necessary validation files to a .well-known/acme-challenge/
directory within the nominated webroot path. A seperate HTTP server must be
running and serving files from the webroot path. HTTP challenge only (wildcards
not supported). (webroot)
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
Select the appropriate number [1-2] then [enter] (press 'c' to cancel):
# Enter 2 to use the webroot validation method.
```

If asked for a webroot path, enter /var/www/certbot/

```bash
Please enter the domain name(s) you would like on your certificate (comma and/or
space separated) (Enter 'c' to cancel):
# Enter the DNS label with the full path, for example: com619mongeese.uksouth.cloudapp.azure.com
```


### 7. Pushing updates to the application

To get updates for and to redeploy the application from GitHub, enter the following commands:

```bash
cd DevOps-Group
# If not already in the application directory.
docker compose down
# Stops all currently active containers.
sudo docker system prune -a
# Removes all docker related files created after installation with the exception of volumes. The -a option removes all unused images rather than just dangling ones. This is necessary if storage space is limited.
sudo git pull
# Fetches and merges all changes in active branch of the repository to the local repository. May ask for and require a valid username and [personal access token](https://github.com/settings/tokens).

sudo docker compose build

docker compose up -d
```
