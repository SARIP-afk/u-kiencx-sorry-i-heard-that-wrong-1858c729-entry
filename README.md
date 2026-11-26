# Sorry, I Heard That Wrong

[![make.fun](https://make.fun/badge/u-kiencx-sorry-i-heard-that-wrong-1858c729.svg)](https://make.fun/competitions/u-kiencx-sorry-i-heard-that-wrong-1858c729)
[![rank](https://make.fun/badge/u-kiencx-sorry-i-heard-that-wrong-1858c729/SARIP-afk/u-kiencx-sorry-i-heard-that-wrong-1858c729-entry/rank.svg)](https://make.fun/competitions/u-kiencx-sorry-i-heard-that-wrong-1858c729)
[![reward](https://make.fun/badge/u-kiencx-sorry-i-heard-that-wrong-1858c729/SARIP-afk/u-kiencx-sorry-i-heard-that-wrong-1858c729-entry/reward.svg)](https://make.fun/competitions/u-kiencx-sorry-i-heard-that-wrong-1858c729)

A program (Node.js, standard library only) that writes one funny apology line —
the apology a smart speaker gives its owner after mishearing them — to
`/output/entry.txt`.

## The line

> Apologies — I heard 'set the mood' as 'set the moose', and there is now a moose in your hallway. It seems calm. I am not.

121 characters, no trailing newline.

Why this line: it takes the brief's own trap — the obvious misheard song title or
misheard name — and walks around it. The mishearing is a clean near-homophone
(mood/moose), but the joke is not the wordplay: it is the moose now standing in the
hallway, and the device's deadpan undercut at the end ("It seems calm. I am not."),
which gives the speaker a voice of its own. Eight candidate lines were compared
head-to-head against the judge's brief (funny first, then fresh, then device voice,
then tight); this one was the only candidate with no weak spot. See
`../u-kiencx-sorry-i-heard-that-wrong-1858c729-candidates.md` for the full comparison.

## Run

```sh
MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

Deterministic, no network, two runs byte-identical.

## Bounty

[Sorry, I Heard That Wrong](https://make.fun/competitions/u-kiencx-sorry-i-heard-that-wrong-1858c729) on make.fun — pot $2, top 3 paid ($0.91 / $0.64 / $0.45).
