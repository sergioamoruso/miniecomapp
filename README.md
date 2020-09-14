# miniecomapp

<br>

## Overview

This project consists on a sample e-commerce application which implements a Node.js back-end and a React front-end. The project follows a [monorepo](https://en.wikipedia.org/wiki/Monorepo) architecture. Details for each side of the application are located in the `README.md` document within the corresponding folder.

```
miniecommapp
|
└── backend
|     └── README.md
└── frontend
|     └── README.md
└── README.md
```

<br>

## Run the application locally

The following steps will get both the server and client running up locally.

### Prerequisites

* [Node.js](https://nodejs.org/) (project was made using Node.js v12.16)

#### STEP 1: Clone the repo

```
git clone https://github.com/sergioamoruso91/miniecomapp.git
```

#### STEP 2: Run script

The following script runs both the backend server and the frontend client [concurrently](https://github.com/kimmobrunfeldt/concurrently#readme), it may take a few minutes until the whole application is up and running the first time, due to dependencies installation.

```
cd miniecomapp
npm run startapp
```
