# Setup

## 1. Environment

- Node.js  
- Vite  
- React  
- Docker (+ Docker compose - Linux)

## 2. Clone the project

Clone the project using GIT or download it from github.com and extract the files to your designated location.

```bash
git clone https://github.com/MarioBudzel/dp-vite-react-template.git
```

## 3. Install dependecies

After cloning the project you need to install the required dependencies for API and for WEB.

### Directory - web

```bash
cd <project_folder_name>
cd web

<sudo - Linux> npm install
```

### Directory - api

```bash
# Starting from 
# <project_folder_name>/web
cd ..
cd api

<sudo - Linux> npm install
```

## 4. Create volumes directory

After installing the dependecies you need to create volumes directory inside project root directory.

### Directory - web

```bash
# Starting inside
# <project_folder_name> directory

<Linux> mkdir volumes
<Linux> cd volumes
<Linux> mkdir mongoApi
```

## 5. Running Docker

Now you are ready to run your docker-compose command.

### Directory - <project_folder_name>

```bash
# Inside the 
# <project_folder_name> directory
# (Where your docker-compose.yml
# file is located)

<sudo - Linux> docker-compose up
# or docker compose up
```

### Subsequent starting of the project:

```bash
# Inside the 
# <project_folder_name> directory
# (Where your docker-compose.yml
# file is located)

<sudo - Linux> docker-compose up
# or docker compose up
```

## 6. Try it out

After Docker finishes, you should be able to navigate to [http://localhost:5173](http://localhost:5173) inside your browser.
