---
title: "Change Set 15: Debug Tools & Game Feel Tuning"
date: 2026-07-19T16:17:00.000-05:00
summary: Built myself a hidden debug panel to actually dial in game feel, fixed
  a durability exploit or two, and rewrote the "you lost your garbage" messages
  so they actually make sense.
draft: false
---
This one was about giving myself better tools to actually dial in the game feel instead of guessing. I built a secret debug panel (accessible via a hidden key sequence) so I can live-tweak things like shield regen delay, scoop durability, garbage lifetime, and attraction forces without redeploying every time. Playtesting also revealed the pooper-scooper power-up was too durable and auto-shield still made the game too forgiving, so both got debug-tunable now. I cleaned up visual bugs — mismatched powerup colors, overlapping achievement text — and made level transitions carry hunters and garbage forward properly, which makes progression feel more consequential. Also rewrote the "you lost your garbage" messages because the old ones were just confusing; players deserve to know exactly what happened and why. That last piece — clearer voice lines for a broken garbage chain — took a little longer to get right and shipped about a week after the rest of this set.
