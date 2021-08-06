# Countdown

This is a countdown app made in React with Material-UI and MomentJS!

### You can see this online at https://react-countdown.glitch.me!

![Example](/example.jpg)

## Installation

1. Clone this repo (`git clone https://github.com/megargayu/Countdown.git`)
2. Run `npm start` in the directory
3. Go to `http://localhost:3000/`
4. Enjoy!

## Pages

- `/` - The home page, where a simple form resides where you can enter a title for the countdown and a date
- `/countdown` - The countdown page, which takes two query parameters:
  - `title` - The title of the countdown
  - `date` - The date & time of the end of the countdown, using a Unix Timestamp (in seconds). For more information,
    see https://www.unixtimestamp.com/
  - `showHomeButton` - Whether to show the home button or not. Any value except `false` (not case sensitive) will make the home button appear,
    otherwise, the home button is hidden. Useful when wanting to use the countdown in an `iframe`.
