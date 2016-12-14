# Webpack Talk

This is the source code I used to demonstrate a bunch of concepts with Webpack at the Google Developers Group Meetup, in Brazil. The presentation I made is availbale at my [Google Drive](https://docs.google.com/presentation/d/1VPdD_5JUOmXBub1LD89xI_qn563crDkbXEq4NAle-Yo/)

## Quick start

```bash
# clone this repo
$ git clone https://github.com/MtDalPizzol/webpack-talk.git my-app

# change directory to your app
$ cd my-app

# install the dependencies with npm
$ npm install

# start the development server
$ npm start

# Browse to http://localhost:8080
```

## Usage

### Lifting the dev server
This will put the `webpack-dev-server` listening on [http://localhost:8080](http://localhost:8080) and serving the assets directly from the RAM.
```bash
npm start
```

### Building files for production
This will build your files for production and write them to the disk.
```bash
npm run build
```

### Emulating a production environment
This serves your build directory at http://localhost:3000, which is a good way to test if your assets were correctly generated.
```bash
npm run serve
```

### Generating stats
This will profile your app and generate a `stats.json` file which you can later analyze with the [Webpack analysis tool](https://webpack.github.io/analyse/).
```bash
npm run stats
```

## License

This software is provided free of charge and without restriction under the [MIT License](/LICENSE)
