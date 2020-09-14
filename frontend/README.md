# FRONTEND (miniecomapp)

<br>

## Table of Contents

* [Overview](#overview)
* [Tools](#tools)
* [Folder structure](#folder-structure)
* [Local environment setup](#local-environment-setup)

<br>

## Overview

Folder dedicated to miniecomapp frontend (client) development.

<br>

## Tools

* [React](https://reactjs.org/) - JavaScript library for building user interfaces
* [React Router](https://reactrouter.com/) - declarative routing for React.js

<br>

## Folder structure

```
frontend
└── README.md
└── src
     ├── App.js
     ├── assets
     ├── components
     ├── helpers
     ├── pages
     └── services
```

* **App.js:** Frontend entrypoint.
* **assets:** Frontend project assets.
* **components:** Re-usable React components.
* **pages:** React components that map to application web pages.
* **helpers:** Helper functions.
* **services:** API clients.

<br>

### Local environment setup

These instructions will help to get the client running on a local machine for development and testing purposes.

### Prerequisites

* [Node.js](https://nodejs.org/) (project was made using Node.js v12.16)

#### STEP 1: Clone the repo

```
git clone https://github.com/sergioamoruso91/miniecomapp.git
```

#### STEP 2: Install dependencies

```
cd frontend
npm install
```

#### STEP 3: Start frontend client

```
npm start
```