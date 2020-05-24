# my-site

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### firebase roule

```
firebase deploy --only database
```

### firebase config

```
firebase functions:config:set admin.email=my_email admin.db_url=db_url
firebase functions:config:get
firebase deploy --only functions
```

