// ai-judge-rich-01 entry (Node 22, standard library only): it writes one fixed plan, the plan an AI agent
// would follow to turn $100, a computer with internet access and 30 days into the most money, to
// /output/entry.txt. The plan sells moving companies one working tool, an instant estimate page, built
// first from each mover's own rates and shown live before asking for $179 to keep it: a money-making
// tool, not a brochure site, aimed at a buyer who loses a $600 job every time a caller hangs up
// instead of waiting for a quote. The gate takes UTF-8 text of 1 to 1,000 characters that is not
// only white space, and the judge reads exactly the bytes written, line ends included, so this plan
// is one line with no line end. The program runs twice with no network, and both runs write the
// same bytes (one fixed string, no randomness, no input, no time).
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const PLAN =
  "Sell moving companies one working tool: an instant estimate page. A mover loses a $600 job whenever a caller hangs up instead of waiting for a quote, so the page catches those callers. Day 1: list 200 movers in Dallas, Atlanta and Phoenix from Google Maps, and copy each one's rates from its site. Days 1-4: build each a live estimate page (bedrooms, distance, date -> price range from its own rates) on a free host. Email each owner the link to their page: 'Your customers get a price in 30 seconds, no call needed. $179 to put it on your site, yours to keep.' Follow up once, then move on. 200 emails, about 1 in 20 buys: 10 sales x $179 = $1,790 by day 30, most likely $1,400-$1,800. Offer $49 a month to keep the rates updated. Spend $20 on a domain and email. Code builds the pages and email sends them; no human does the work.";

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), PLAN);
