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
          hint: "Travel from {{origin}} to {{destination}} with 2 interchanges.",
          error: {
            not_enough: "Not enough trains for the journey",
            not_valid: "Not a valid journey"
          },
          settings: {
            title: "Settings",
            display: {
              title: "Display",
              show_badges: "Show answer status badges",
              show_badges_hint: "Having trouble seeing the difference in the colors? Turn on status badges!"
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
            win_message: "Yay! You completed today's journey!",
            lose_message: "Aww, looks like you got lost on the MTR...",
            title: "Today's Journey",
            direction: "from {{origin}} to {{destination}}",
            share: "Share",
            copied: "Copied",
          },
          about: {
            title: "How to Play",
            intro: "<p>Guess the <strong>MTRDLE</strong> in 6 tries.</p><p>Each guess must a be a <strong>valid train trip involving 3 trains</strong> using interchanges between them.</p><p>You need to guess a specific set of three trains that can make the trip.</p>",
            explanation: "<p><strong>Multiple routings may be possible</strong> to make the trip, but your goal is to find <strong>the one routing</strong> that matches the puzzle of the day. The solution <strong>may or may not</strong> be the fastest or efficient routing.</p><p>Routing for each train line is based on <strong>weekday midday schedule</strong> (i.e. LOHAS Park branch Tseung Kwan O line trains terminate at Tiu Keng Leng).</p>",
            examples: {
              title: "Examples",
              correct: "is in the correct spot of the trip.",
              present: "is part of the trip, but in the wrong spot.",
              absent: "is not part of the trip in any spot.",
            },
            about: {
              title: "About",
              subwaydle: "This game is forked from the original <1>Subwaydle</1> game based on the NYC Subway system.",
              inspirations: "Inspired by <1>Wordle</1>, its <3>open-source clone</3>, <5>Nerdle</5>, and <7>New York Transit Museum</7> Trivia Nights.",
              created: "Created by <1>Sunny Ng</1>",
              other_projects: "Check out my other NYC Subway related projects:"
            }
          }
        }
      },
      zh: {
        translation: {
          hint: "{{origin}}站 往 {{destination}}站 轉車兩次",
          error: {
            not_enough: "路綫不足",
            not_valid: "路綫錯誤"
          },
          settings: {
            title: "設置",
            display: {
              title: "顯示",
              show_badges: "附加答案提示指標",
              show_badges_hint: "如果您難分辨顏色, 啟用這個設置"
            }
          },
          statistics: {
            title: "統計數據",
            total_games: "遊戲次數",
            success_rate: "勝率 %",
            current_streak: "目前連勝",
            max_streak: "最大連勝",
            guess_distribution: "猜測數分佈",
          },
          solution: {
            win_message: "好嘢！你完成咗今日嘅旅程！",
            lose_message: "哎呀！您好似蕩失咗路！",
            title: "今日旅程",
            direction: "{{origin}}站 往 {{destination}}站",
            share: "分享",
            copied: "複製了",
          },
          about: {
            title: "遊戲說明",
            intro: "<p>用 6 次機會猜今天的 <strong>MTRDLE</strong> 謎。</p><p>每個猜測都必須是<strong>真實的路綫使用 3 輛列車</strong>。</p><p>您需要猜測可進行某個旅程的一組特定 3 輛列車。</p>",
            explanation: "<p>每天的謎<strong>可能有多條路綫</strong>能完成旅程，但您的目標是找到與<strong>當天的相匹配的路綫</strong>。 旅程謎的方案路綫<strong>可能不是</strong>最快或有效的路綫。</p><p>路綫是基於<strong>平日非繁忙時刻表</strong>(例：將軍澳綫康城支綫列車在調景嶺終點站)。</p>",
            examples: {
              title: "例子",
              correct: "在旅程中的正確位置。",
              present: "是在旅程裡，但在錯誤的位置。",
              absent: "不是在旅程的任何部分。",
            },
            about: {
              title: "關於",
              subwaydle: "該遊戲是從基於紐約地鐵的原始 <1>Subwaydle</1> 遊戲衍生而來的。",
              inspirations: "受 <1>Wordle</1>、<3>其開源克隆</3>、<5>Nerdle</5> 和 <7>New York Transit Museum</7> 的啟發。",
              created: "創造者 <1>Sunny Ng</1>",
              other_projects: "我的其他項目："
            }
          },
        }
      }
    }
  });

export default i18n;
