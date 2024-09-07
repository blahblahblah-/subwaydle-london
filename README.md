# Roundle (a.k.a. Subwaydle-London)

A London-based fork of the original [Subwaydle](https://www.subwaydle.com) game. Contains some source code lifted from the [open-source clone](https://github.com/cwackerfuss/word-guessing-game) by Hannah Park. Subwaydle is a static JavaScript app, written using Create React App with React, Sass, Semantic UI React and Maplibre (with Stadia Maps). A few Ruby scripts were written to generate JSON data files used by the app.

Geolocation data [© OpenStreetMap contributors](https://www.openstreetmap.org/copyright).

See it live at https://london.subwaydle.com

## Running locally

`````
brew install yarn
yarn install
yarn start
`````

* Ruby scripts in the `scripts/` directory produce the JSON files in `src/data` that are used by the app. *Warning:* viewing the `src/data` can reveal spoilers to the puzzle! All guesses are checked against the keys in the `solutions.json` file to be a valid trip, and the `answers.json` contains an array for the answer of each day. The values of the `solutions.json` object contain an example trip of stations that are traveled through for the trip.

Forked from [Subwaydle](https://github.com/blahblahblah-/subwaydle)

Inspirations:
* [Wordle](https://www.powerlanguage.co.uk/wordle/)
* [Chengyu Wordle](https://cheeaun.github.io/chengyu-wordle/)
* [Nerdle](https://nerdlegame.com/)