# Devil Fruitle

Guess the names of the devil fruits from the One Piece (anime) world .
[**Try it here!**](https://devil-fruitle.vercel.app/)

## Forked from [Reactle](https://github.com/cwackerfuss/react-wordle)

This is a fork project of the popular word guessing game we all know and love. Made using React, Typescript, and Tailwind.

## Build and run

### To Run Locally:

Clone the repository and perform the following command line actions:

```bash
$> cd react-wordle
$> npm install
$> npm run start
```

### To build/run docker container:

#### Development

```bash
$> docker build -t reactle:dev -f docker/Dockerfile .
$> docker run -d -p 3000:3000 --name reactle-dev reactle:dev
```

Open [http://localhost:3000](http://localhost:3000) in browser.

#### Production

```bash
$> docker build --target=prod -t reactle:prod -f docker/Dockerfile .
$> docker run -d -p 80:8080  --name reactle-prod reactle:prod
```

Open [http://localhost](http://localhost) in browser.
