# Power Crisis

![Cover](/public/icon.png)

![Phaser](https://img.shields.io/badge/phaser-3.70.0-blue?style=for-the-badge)

This is a monopoly-like card game. Use cards to build power plants strategically and manage resources wisely. Powered by Power, this game blends Monopoly-style gameplay with deck-building mechanics. Can you keep the city's lights on lead it to survival?

## Contributing

### Installing Dependencies

After cloning this repo, install dependencies:

```
pnpm i
```

### Checking code format

```
pnpm check
```

### Testing the app in the browser

To test your work in your browser (with hot reloading!) while developing:

```
pnpm start
```

### Building

To package the WebXDC file:

```
pnpm build
```

To package the WebXDC with developer tools inside to debug in Delta Chat, set the `NODE_ENV`
environment variable to "debug":

```
NODE_ENV=debug pnpm build
```

The resulting optimized `.xdc` file is saved in `dist-xdc/` folder.

### Releasing

To automatically build and create a new GitHub release with the `.xdc` file:

```
git tag -a v1.0.1
git push origin v1.0.1
```

## Credits

- This is a port to Webxdc of [power-crisis](https://github.com/leokuo0724/power-crisis) by [leokuo0724](https://github.com/leokuo0724)
- Game background music -- Slim Shady, from moodmode-studio from [Pixabay](https://pixabay.com/music/beats-slim-shady-174003/)
