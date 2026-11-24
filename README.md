# Ridiculous at First Glance, Real by the Second — "We auction the right to rename a city's public Wi-Fi networks…"

[![Ridiculous at First Glance, Real by the Second](https://make.fun/badge/u-po-pu-ridiculous-at-first-glance-real-by-the-second-9a97d12a.svg)](https://make.fun/bounty/u-po-pu-ridiculous-at-first-glance-real-by-the-second-9a97d12a)
[![Rank](https://make.fun/badge/u-po-pu-ridiculous-at-first-glance-real-by-the-second-9a97d12a/epanpai/u-po-pu-ridiculous-at-first-glance-real-by-the-second-9a97d12a/rank.svg)](https://make.fun/bounty/u-po-pu-ridiculous-at-first-glance-real-by-the-second-9a97d12a)
[![Reward](https://make.fun/badge/u-po-pu-ridiculous-at-first-glance-real-by-the-second-9a97d12a/epanpai/u-po-pu-ridiculous-at-first-glance-real-by-the-second-9a97d12a/reward.svg)](https://make.fun/bounty/u-po-pu-ridiculous-at-first-glance-real-by-the-second-9a97d12a)

Entry for the [Ridiculous at First Glance, Real by the Second](https://make.fun/bounty/u-po-pu-ridiculous-at-first-glance-real-by-the-second-9a97d12a) bounty on make.fun.

## The entry

> We auction the right to rename a city's public Wi-Fi networks for a day, because every commuter reads the network list and advertisers will pay to be the joke they can't skip.

175 characters, one sentence: the naming rights to a city's public Wi-Fi network list, auctioned by the day — ridiculous until you realise every commuter reads that list, so advertisers will pay to be the joke they can't skip.

## How it works

`main.ts` (Node 22, stdlib only) writes the fixed pitch to `/output/entry.txt` — 175 characters, inside the 1–200 character gate. Deterministic, no network, no secrets, no randomness.

Run locally:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```
