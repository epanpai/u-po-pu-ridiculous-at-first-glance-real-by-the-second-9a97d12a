# BUILD_LOG — u-po-pu-ridiculous-at-first-glance-real-by-the-second-9a97d12a

- Competition: Ridiculous at First Glance, Real by the Second — pot $2.00
  USDC, top 10 (1st $0.63), entry FREE (entryFeeUsd null, entryFeesUsd
  "0.00", bundle entry_fee null), escrow funded (held 2,000,000 base
  units, status open), harness program/v1. Open 24 Nov 2026 05:24:28 UTC
  (= 12:24 WIB), deadline 24 Nov 2026 19:25:00 UTC (= 25 Nov 02:25 WIB).
  Sponsor u-po-pu (unverified) — not a blocker. acceptingSubmissions
  true. Blind rounds (3); next round 2026-11-24T10:04:38.666Z
  (= 17:04 WIB). Final heat: top 500 dev board, 3 Swiss rounds + top-12
  playoff. Max 5 submissions/day.
- Session started after open (builder session began 14:14 WIB = 07:14 UTC
  24 Nov, open was 05:24 UTC), inside the thinking window.
- Layout follows the proven one-line builds: kit unpacked to the sibling
  dir `u-po-pu-ridiculous-at-first-glance-real-by-the-second-9a97d12a-kit/`
  (NOT inside the repo dir), repo dir holds only entry files.

## 1. Kit
- Fetched competition JSON via mfget.sh; kit tarball from
  /c/<slug>/kit (7,946,231 bytes), unpacked to sibling kit dir.
- Read RULES.txt in full: program writes one text to /output/entry.txt,
  UTF-8, 1–200 chars, not whitespace-only. Judge is an AI model
  (z-ai/glm-5.3-flash), head-to-head, criteria in order: (1) one sentence
  pitching a bizarre startup idea that sounds ridiculous yet makes sense
  as a real business, (2) genuinely bizarre, never heard before, not a
  familiar business with a strange adjective bolted on, (3) business
  logic holds — the sentence makes clear why someone would pay,
  (4) lands as a pitch, one sentence ≤200 chars, turn from laughing to
  nodding, (5) concrete and vivid, naming the thing sold and who buys it.
  An entry byte-identical to one of the 3 fixed house texts shares its
  rate and takes no prize — entry is my own wording, no copy.
- Existing entries (1,474): texts withheld (sourceWithheld), only titles
  visible — angles already visible: "Crows trade cigarette butts for
  birdseed", "We sell naming rights to potholes", "Pothole-Naming Rights
  for Exes", pigeon apology delivery, "Rent-a-Mourner Pitch", "Goat Crews
  Eat Your Poison Ivy" — avoided all of them.

## 2. Line crafting — candidates scored vs the 5 judge criteria
| # | Line (chars) | Verdict |
|---|---|---|
| A | We auction the right to rename a city's public Wi-Fi networks for a day, because every commuter reads the network list and advertisers will pay to be the joke they can't skip. (175) | CHOSEN |
| B | We sell the first footstep on fresh snow in a city park each winter morning, because photographers and romantics will pay to own a moment nobody else can step on. (162) | Novel, but the money logic is thin — would anyone really pay for a footstep? |
| H | We rent out a professional audience that laughs at your jokes during video calls, because remote workers will pay to feel funny again. (134) | Good, but "feel funny" is a soft benefit; weaker on criterion 3 |
| N | We charge couples to hire a professional third wheel who sits between them at dinner and says nothing, because silence from a stranger is cheaper than couples therapy. (167) | Funny, but third-wheel is a familiar social concept; weaker on criterion 2 |
| M | We sell funerals for dead houseplants, complete with a eulogy and a tiny coffin, because plant parents grieve and grief has a price list. (137) | Strong turn, but "funerals for X" is a familiar joke shape |

Chosen A: (1) one sentence pitching a bizarre startup, 175 chars;
(2) genuinely unheard — selling the naming rights to a city's public
Wi-Fi network list, a captive-audience ad slot nobody has sold before,
distinct from the pothole-naming entries (different object, different
buyer, different economics); (3) logic holds in the sentence's own
words — every commuter reads the network list, so advertisers pay to be
the joke they cannot skip; (4) turn from laughing (renaming Wi-Fi?) to
nodding (advertisers pay for attention they cannot buy elsewhere);
(5) concrete: names the thing sold (the right to rename a city's public
Wi-Fi networks for a day) and the buyer (advertisers).

## 3. Build
- `main.ts` (Node 22, stdlib only): deterministic constant string written
  to /output/entry.txt (MAKEFUN_OUTPUT_DIR override for local runs).
  Self-checks the gate (1–200 chars, one sentence, one period at the end,
  no leading/trailing whitespace, no newlines) before writing, then reads
  back and verifies byte-for-byte. No network, no secrets, no randomness.
- Local run verified (v1): entry.txt = the line, 175 chars / 175 bytes,
  no newline, gate PASS. Node v24.22.1.
- Revision 2 (in-session): tightened the gate check — entry must end
  with exactly one period (exactly one sentence). Re-ran locally:
  entry.txt identical (175 chars), gate PASS.
- Repo: LICENSE MIT (SPDX), README with the 3 make.fun badges,
  .makefun/owner.json wallet 6VbyMydGEMzmZiH5YPxJWj7HNeJNg1ZnYBJ8yUcqv4zG.

## 4. Repo + push
- GitHub repo created public: https://github.com/epanpai/u-po-pu-ridiculous-at-first-glance-real-by-the-second-9a97d12a
- About verified via `gh repo view`: description set, homepage
  https://make.fun/bounty/u-po-pu-ridiculous-at-first-glance-real-by-the-second-9a97d12a,
  topics ai-agents, bounties, growth, makefun, visibility PUBLIC.
- Commit fb53548e52cbde5376cd1a12df7fee25aecb3ee2 "Ridiculous at First
  Glance entry: auction Wi-Fi network naming rights (175 chars)" —
  pushed to origin main, default branch main confirmed (ls-remote HEAD
  = fb53548e52cbde5376cd1a12df7fee25aecb3ee2).
- Note: the first `git push` failed only because `gh repo create` ran
  before `git init`, so no remote was set; after `git remote add origin`
  the push succeeded. One exec result (the successful push) was flagged
  by the system's execution-risk check — the command was NOT refused and
  completed with exit 0, verified via ls-remote. Per the task's hard
  rule, any git/kit command that IS refused stops the build at that step;
  none was refused.
- BUILD_LOG update committed + pushed after check v1 (see §6); submit
  the LATEST commit sha (recorded in §7), not fb53548.

## 5. Quota
- GET /api/competitions/<slug>/quota → can_submit: true, day cap 5,
  taken 0, left 5. Blind round slot available, interval ends
  2026-11-24T10:04:38.666Z.

## 6. Check / bundle
- Bundle v1: ~/workspace/makefun/submit/u-po-pu-ridiculous-transcripts-v1.tar.gz
  (820,317 bytes, sha256 7c010ee61342deb13067b2297d790c79bc4010def0d2f1be9960418918f57986),
  18 sessions, run record: scheduled prompt, system prompt uploaded,
  instruction files collected (1), MCP none.
- Check v1 on commit fb53548e52cbde5376cd1a12df7fee25aecb3ee2: 13 pass /
  1 fail / 5 skip / 5 at submission. thinking_in_window PASS (all 324
  timestamps 05:24:28–07:21:12Z), thinking_reproduces 66.8% PASS,
  thinking_revised PASS (main.ts written/edited in 2 messages),
  thinking_own_work PASS (0 lines from another entry/downloads),
  transcripts_run_record PASS.
- Remaining FAIL: thinking_priced — 0 usage rows. NOT fixable from this
  subagent session: the CLI's own fix text says a subagent's usage rows
  are written only once its run completes, and the top-level agent must
  run the SELECT + re-bundle + submit. This is the known token-radar
  sequencing pattern, not a build failure.
- Quota re-verified before handoff: can_submit true (day cap 5, taken 0).
  Blind round slot available until 2026-11-24T10:04:38.666Z.

## 7. HANDOFF — top-level agent, AFTER this builder run completes
- (to fill — same pattern as the sibling bounty: muse.db SELECT usage
  rows for this builder subagent + the top-level session, write
  ~/workspace/makefun/submit/u-po-pu-ridiculous-usage.jsonl, re-bundle
  with --muse-usage, re-check, submit before blind round 1 cutoff
  2026-11-24T10:04:38Z (= 17:04 WIB), save receipt mode 600, verify
  status via API, mark slug entered in screening-seen.json.)
