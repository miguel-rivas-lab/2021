# Collections Structure

## Users Collection
```json
{
  "main": {
    "name": "Jesus",
    "middleName": "Miguel",
    "lastname": "Rivas",
    "title": "Frontend Developer",
    "location": {
      "city": "Washington",
      "state": "DC"
    },
    "media": {
      "codepen": {
        "user": "planetwurlex"
      },
      "issuu": {
        "user": "jemiguelrivas"
      },
      "linkedin": {
        "user": "jemiguelrivas"
      },
      "github": {
        "user": "jemiguelrivas",
        "development": "miguel-rivas-dev",
        "production": "miguel-rivas"
      }
    }
  }
}
```

## Projects Collection
```json
{
  "projectId": {
    "title": "Mainfront",
    "category": 1,
    "client": 1,
    "date": "20150301",
    "type": 1,
    "disabled": false,
    "links": [
      {
        "text": "Berlin App",
        "url": "main-front",
        "params": {
          "city": "berlin"
        },
        "type": 1
      }
    ],
    "roles": [
      1,
      2
    ],
    "tools": [
      1,
      2
    ]
  }
}
```

### Category
```js
{
  0: userFlow,
  0: wireFrame,
  0: app,
  0: prototype,
  0: landingPage,
  0: motionGraphics,
  0: animation3D,
  0: document,
  0: module,
}
```

### Roles
```js
{
  0: design,
  0: frontend,
  0: animation,
}
```

### Client
```js
{
  0: presidente,
  0: drLogic,
  0: descubria,
  0: capitalDBG,
  0: miguelRivas,
  0: pepsi,
  0: redRock,
  0: itla,
  0: pixelPerfectTree,
  0: bprBank,
  0: voxel,
  0: orange,
  0: apap,
  0: enovational,
  0: socialNetwork,
  0: jellyfish,
}
```

### Type
```js
{
  0: userFlow,
  0: wireFrame,
  0: app,
  0: prototype,
  0: landingPage,
  0: motionGraphics,
  0: animation3D,
  0: document,
  0: module,
}
```

### Tools
```js
{
  0: html: {
    0: html,
    1: slim,
    2: haml,
    3: pug,
    4: erb,
  }
  1: css: {
    0: css,
    1: scss,
    2: less,
    3: sass,
  }
  2: javascript: {
    0: javascript,
    1: jQuery,
    2: react,
    3: vue,
    4: angular,
    5: three,
    6: sizzle,
    7: tweenMax,
    8: snapSVG,
    9: chartJS,
    10: typescript,
    11: vuex,
    12: vueRouter,
    13: lodash,
    14: velocity,
    15: sweetAlert,
    16: stellar,
    17: canvas,
  },
  3: multimedia: {
    0: photoshop,
    1: illustrator,
    2: flash,
    3: indesign,
    4: afterEffects,
    5: premiere,
    6: inkscape,
    7: scribus,
  },
  4: cucumber,
  5: unity,
  6: rails,
  7: php,
  8: python,
  9: grunt,
  10: miva,
  11: markdown,
  12: bootstrap,
  13: git,
  14: animate,
  15: wordpress,
  16: kotlin,
}
```

### Links Type
```js
{
  0: web,
  1: github,
  2: video,
  3: dev,
  4: codepen,
}
```

### Disable
> Show or hide project on the database.