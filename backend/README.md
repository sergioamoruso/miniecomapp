# BACKEND (miniecomapp)

<br>

## Table of Contents

* [Overview](#overview)
* [Tools](#tools)
* [Folder structure](#folder-structure)
* [Endpoints](#endpoints)
* [Local environment setup](#local-environment-setup)

<br>

## Overview

Folder dedicated to miniecomapp backend (server) development.

<br>

## Tools

* [Node.js](https://nodejs.org/en/) - JavaScript runtime
* [Express](https://expressjs.com/) - minimalist web framework for Node.js

<br>

## Folder structure

```
backend
└─ README.md
└─ src
    ├── server.js
    ├── handlers
    └── services
```

* **server.js:** Backend entrypoint.
* **handlers:** Endpoint handler components.
* **services:** Business logic / helpers / middleware components.

<br>

## Endpoints

The backend exposes the following endpoints:

* [SEARCH QUERY](#search-query)
* [SEARCH ITEM](#search-item)

<br>

### SEARCH QUERY ENDPOINT

- URL: `/api/items`
- METHOD: `GET`

| **Parameter**  | **Type** | **Definition** |
|----------------|----------|----------------|
| q 	         |  query   | Search query   |

#### Process

When receiving a request through this endpoint, the backend will send the request to Mercado Libre API using the provided query and limiting the result to only 4 items. If there is an error, it will return a 500 status code with the error details; otherwise it will return a 200 status code with the reponse payload. 

#### Request

##### Structure

There is no input payload.

##### Example

```
GET http://localhost:5000/api/items?q=Motorola%20G6
```

#### Response

##### Structure

- **author** - _Object_ - payload signature
- **categories** - _Array of Strings_ - item categories
- **items** - _Array of Objects_ - items

Contents of **author**:

- **name** - _String_ - payload signature name
- **lastname** - _String_ - payload signature lastname

Contents of each Object contained in **items**:

- **id** - _String_ - item ID
- **title** - _String_ - item title
- **price** - _Object_ - price info
- **picture** - _String_ - item picture URL
- **condition** - _String_ - item condition
- **free_shipping** - _Boolean_ - indicates whether the item has free shipping or not
- **state_name** - _String_ - item seller location

Contents of **price**:

- **currency** - _String_ - price currency
- **amount** - _Number_ - price amount
- **decimals** - _Number_ - price cents

##### Example

```json
{
    "author": {
        "name": "Sergio",
        "lastName": "Amoruso"
    },
    "categories": [
        "Celulares y Teléfonos",
        "Celulares y Smartphones"
    ],
    "items": [
        {
            "id": "MLA860287783",
            "title": "Moto G6 Plus 64 Gb Índigo Oscuro 4 Gb Ram",
            "price": {
                "currency": "ARS",
                "amount": 38999,
                "decimals": 0
            },
            "picture": "http://http2.mlstatic.com/D_909111-MLA31239994076_062019-I.jpg",
            "condition": "new",
            "free_shipping": true,
            "state_name": "Buenos Aires"
        },
        {
            "id": "MLA864038002",
            "title": "Moto G6 Plus 64 Gb Nimbus 4 Gb Ram",
            "price": {
                "currency": "ARS",
                "amount": 39199.3,
                "decimals": 30
            },
            "picture": "http://http2.mlstatic.com/D_795558-MLA31003306206_062019-I.jpg",
            "condition": "new",
            "free_shipping": true,
            "state_name": "Buenos Aires"
        },
        {
            "id": "MLA875045888",
            "title": "Moto G6 64 Gb Índigo Oscuro 4 Gb Ram",
            "price": {
                "currency": "ARS",
                "amount": 32899,
                "decimals": 0
            },
            "picture": "http://http2.mlstatic.com/D_875801-MLA31003483573_062019-I.jpg",
            "condition": "new",
            "free_shipping": true,
            "state_name": "Misiones"
        },
        {
            "id": "MLA763283174",
            "title": "Celular Motorola Moto G6 Play Xt1922-4 Refabricado Liberado",
            "price": {
                "currency": "ARS",
                "amount": 22999,
                "decimals": 0
            },
            "picture": "http://http2.mlstatic.com/D_784605-MLA29040580775_122018-O.jpg",
            "condition": "new",
            "free_shipping": true,
            "state_name": "Capital Federal"
        }
    ]
}
```

<br>

### SEARCH ITEM ENDPOINT

- URL: `/api/items/:id`
- METHOD: `GET`

| **Parameter**  | **Type** | **Definition** |
|----------------|----------|----------------|
| id 	         |  URL     | Item ID        |

#### Process

When receiving a request through this endpoint, the backend will send 3 requests to Mercado Libre API, to get the **item** (using provided item ID), **item description** (using provided item ID) and **item categories** (using the retrieved item category ID). If there is an error, it will return a 500 status code with the error details; otherwise it will return a 200 status code with the reponse payload. 

#### Request

##### Structure

There is no input payload.

##### Example

```
http://localhost:5000/api/items/MLA915539578
```

#### Response

##### Structure

- **author** - _Object_ - payload signature
- **item** - _Object_ - item data

Contents of **author**:

- **name** - _String_ - payload signature name
- **lastname** - _String_ - payload signature lastname

Contents of **item**:

- **id** - _String_ - item ID
- **title** - _String_ - item title
- **price** - _Object_ - price info
- **picture** - _String_ - item picture URL
- **condition** - _String_ - item condition
- **free_shipping** - _Boolean_ - indicates whether the item has free shipping or not
- **sold_quantity** - _Number_ - quantity selled
- **description** - _String_ - item description
- **categories** - _Array of Strings_ - item categories

Contents of **price**:

- **currency** - _String_ - price currency
- **amount** - _Number_ - price amount
- **decimals** - _Number_ - price amount cents

##### Example

```json
{
    "author": {
        "name": "Sergio",
        "lastName": "Amoruso"
    },
    "item": {
        "id": "MLA876762332",
        "title": "Moto G8 Dual Sim 64 Gb Holo White 4 Gb Ram",
        "price": {
            "currency": "ARS",
            "amount": 35490,
            "decimals": 0
        },
        "picture": "http://http2.mlstatic.com/D_698020-MLA41797493867_052020-I.jpg",
        "condition": "new",
        "free_shipping": true,
        "sold_quantity": 0,
        "description": "Enfocate en lo importante\nEl novedoso sistema operativo Android 10 incorpora respuestas inteligentes y acciones sugeridas para todas tus aplicaciones. Además, incluye la función de Bienestar Digital y el Tema Oscuro, para que evites distracciones y logres una mayor concentración.\n\nMayor rendimiento\nSu memoria RAM de 4 GB te permitirá ejecutar varias aplicaciones al mismo tiempo, jugar y navegar con gran rapidez y sin inconvenientes.\n\nMás para ver\nCon su pantalla IPS de 6.4\", disfrutá de colores intensos y mayor nitidez en todos tus contenidos.\n\nGran capacidad de almacenamiento\nCon su memoria interna de 64 GB siempre tendrás espacio para almacenar archivos y documentos importantes. Además, podrás guardar películas, series y videos para reproducirlos cuando quieras sin conexión.\n\nBatería superior\n¡Desenchufate! Con la súper batería de 4000 mAh, tendrás energía por mucho más tiempo para jugar, ver series o trabajar sin necesidad de recargar tu teléfono.\n\nFotografía profesional en tu bolsillo\nDescubrí infinitas posibilidades para tus fotos con las 3 cámaras principales de tu equipo. Con su cámara de poca profundidad, lograrás fondos difuminados, la de ángulo amplio te permitirá capturar fotos brillantes y con la ultra gran angular obtendrás imágenes panorámicas excepcionales.\n\n Además, el dispositivo cuenta con cámara frontal de 8 Mpx para que puedas sacarte divertidas selfies o hacer videollamadas.\n\nTecnología premium\nMaximizá tu seguridad y asegurate de que solo vos puedas desbloquear el equipo. Gracias al sensor de huella dactilar, podrás habilitar tu dispositivo con solo un toque. Además, cuenta con reconocimiento facial que se activa rápidamente al colocar la pantalla frente a tu rostro.",
        "categories": [
            "Celulares y Teléfonos",
            "Celulares y Smartphones"
        ]
    }
}
```

<br>

## Local environment setup

These instructions will help to get a copy of the project up and running on a local machine for development and testing purposes.

### Prerequisites

* [Node.js](https://nodejs.org/) (project was made using Node.js v12.16)

#### STEP 1: Clone the repo

```
git clone https://github.com/sergioamoruso91/miniecomapp.git
```

#### STEP 2: Install dependencies

```
cd backend
npm install
```

#### STEP 3: Configure environment variables

Create a new file named **.env** in **backend** and add the following environment variables:

* [OPTIONAL] **PORT:** Server port number. If not provided, the default is 5000.
* [MANDATORY] **MERCADOLIBRE_BASE_URL:** Mercado Libre API base URL. Check [documentation](https://developers.mercadolibre.com/api-docs/).
* [MANDATORY] **MERCADOLIBRE_SITE_ID:** Mercado Libre site ID. Check [documentation](https://developers.mercadolibre.com/api-docs/).
* [OPTIONAL] **API_SIGNATURE_NAME:** API payload signature name. If not provided, will be null.
* [OPTIONAL] **API_SIGNATURE_LASTNAME:** API payload signature lastname. If not provided, will be null.

##### Example

```
PORT=5000
MERCADOLIBRE_BASE_URL=https://api.mercadolibre.com
MERCADOLIBRE_SITE_ID=MLA
API_SIGNATURE_NAME=John
API_SIGNATURE_LASTNAME=Smith
```

#### STEP 4: Start backend server

```
npm start
```