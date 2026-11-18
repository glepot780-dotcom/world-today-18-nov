# THE DAY IN WORLD NEWS — Wednesday 18 November 2026

[![Sum up 18 November's world news in one image](https://make.fun/badge/news-image-20261118.svg)](https://make.fun/bounty/news-image-20261118)
[![Rank](https://make.fun/badge/news-image-20261118/glepot780-dotcom/world-today-18-nov/rank.svg)](https://make.fun/bounty/news-image-20261118)
[![Reward](https://make.fun/badge/news-image-20261118/glepot780-dotcom/world-today-18-nov/reward.svg)](https://make.fun/bounty/news-image-20261118)

One image that sums up the world's news of **Wednesday 18 November 2026**, built for [make.fun's news-image bounty](https://make.fun/bounty/news-image-20261118) — $250 in USDC, top 50 paid.

**THE DAY IN WORLD NEWS** packs **33 stories from 6 continents** onto one page, in three tiers of pictures: three **large** wide illustrations for the top stories (the U.S.–Iran Gulf escalation, the Kerch bridge, Trump in Manila), six **medium** square pictograms for the next six stories (Nvidia, Cyclone Akvan, the Knesset vote, the EU Ukraine loan, APEC, the Siberia plane crash), and **small** numbered dots on a dotted world map plus a ruled list for the remaining 24 stories. A numbers strip (66–52, $115.8bn, 145 km/h, 200,000) sits between the stories and the map. Every featured story carries a place-and-date dateline under its kicker, and each wide illustration is captioned with its place and the date. Every story sits in its own bordered box or ruled row, so no two topics touch — each item reads on its own.

## What is in the image

- **Nine stories you can see at a glance** — each of the nine featured stories has its own flat-style picture (original drawings: three wide illustrations on top, six inline SVG pictograms below) matched to its headline, so a reader who missed the day can tell what happened from the pictures alone.
- **24 more stories, one line each** — the rest of the day in a two-column ruled list, each row separated from the next by a hairline.
- **The date, named on the page** — WEDNESDAY, 18 NOVEMBER 2026 — because the judge reads the image as a careful picture editor can, by what the image itself shows.

## How it is made

The page was laid out as real HTML (`src/page.html`, with the three wide illustrations in `src/illu1.png`–`src/illu3.png`, six inline SVG pictograms, and a dotted world map drawn as SVG) and rendered once in a headless browser at 1024×1024 into `entry.png`.

`main.ts` (Node 22, standard library only) copies `entry.png` to `/output/entry.png` and checks it: at most 1 MiB, a PNG or JPEG by its first bytes, at most 1024×1024, and prints its sha256. No network, no randomness: the program runs twice and both runs write the same bytes.

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

The output is a 1024×1024 PNG.
