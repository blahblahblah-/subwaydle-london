import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          hint: "Travel from {{origin}} to {{destination}} with 2 changes.",
          error: {
            not_enough: "Not enough trains for the journey",
            not_valid: "Not a valid journey"
          },
          settings: {
            title: "Settings",
            display: {
              title: "Display",
              show_badges: "Show answer status badges",
              show_badges_hint: "Having trouble seeing the difference in the colours? Turn on status badges!",
              dark_mode: "Dark mode",
            }
          },
          statistics: {
            title: "Statistics",
            total_games: "Played",
            success_rate: "Win %",
            current_streak: "Current<1 />Streak",
            max_streak: "Max<1 />Streak",
            guess_distribution: "Guess Distribution",
          },
          solution: {
            win_message: "Brilliant! You completed today's journey!",
            lose_message: "Oh no, looks like you got lost on the Tube...",
            title: "Today's Journey",
            direction: "from {{origin}} to {{destination}}",
            share: "Share",
            copied: "Copied",
          },
          about: {
            title: "How to Play",
            intro: "<p>Guess the <strong>ROUNDLE</strong> in 6 tries.</p><p>Each guess must a be a <strong>valid train trip involving 3 trains</strong> using valid interchanges between them.</p><p>You need to guess a specific set of three trains that can make the trip.</p>",
            explanation: "<p><strong>Multiple routings may be possible</strong> to make the trip, but your goal is to find <strong>the one routing</strong> that matches the puzzle of the day. The solution <strong>may or may not</strong> be the fastest or efficient routing.</p><p>Routing for each train line is based on <strong>weekday off-peak schedule</strong> (i.e. Edgware to Morden - Northern line trains travel via Bank only, no fast/semi-fast Metroplitan line trains).</p>",
            examples: {
              title: "Examples",
              correct: "is in the correct position of the trip.",
              present: "is part of the trip, but in the wrong position.",
              absent: "is not part of the trip in any position.",
            },
            about: {
              title: "About",
              subwaydle: "This game is forked from the original <1>Subwaydle</1> game based on the NYC Subway system",
              around_the_world: "Subwaydles around the world: <1>New York</1>, <3>Hong Kong</3>.",
              inspirations: "Inspired by <1>Wordle</1>, its <3>open-source clone</3>, <5>Nerdle</5>, and <7>New York Transit Museum</7> Trivia Nights.",
              created: "Created by <1>Sunny Ng</1>",
              other_projects: "Check out my other NYC Subway related projects:"
            }
          }
        }
      },
    }
  });

export default i18n;
