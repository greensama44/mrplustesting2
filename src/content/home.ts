// All homepage content, carried over from the V1 Mega Rewards site.
// Edit copy, prizes and dates here; components only handle layout.

const u = (id: string, w = 900) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=75`;

export const img = {
  watch: u("photo-1722152909289-89d345b9c9a0"),
  tyre: u("photo-1601411101851-ea0e07766235"),
  fuel: u("photo-1644246905181-c3753e9a82bd"),
  sneakers: u("photo-1542291026-7eec264c27ff"),
  grocery: u("photo-1588964895597-cfccd6e2dbf9"),
  raceCar: u("photo-1676319884704-ac12ac3b6226"),
  court: u("photo-1570587031956-6b6d5694ea11", 1000),
  shopping: u("photo-1483985988355-763728e1935b", 1200),
  phone: u("photo-1488509082528-cefbba5ad692"),
  beach: u("photo-1473116763249-2faaef81ccda"),
  concert: u("photo-1470229722913-7c0e2dbbafd3"),
  power: u("photo-1473341304170-971dccb5ac1e"),
};

export const nav = {
  links: [
    { label: "Mega Loyalty", href: "#giveaways" },
    { label: "Mega Savings", href: "#savings" },
    { label: "Plus", href: "#membership" },
    { label: "Tipping", href: "#tipping" },
    { label: "Community", href: "#community" },
  ],
};

export const hero = {
  lines: ["Save more.", "Experience more.", "Enjoy more."],
  price: "Plus from $19.99 a month.",
  sub: "6,000+ discounts. Free giveaways every week. Join in 60 seconds.",
  slides: [
    {
      kicker: "Mega Loyalty Club · Free entry",
      eyebrow: "The ultimate",
      title: "VIP Game-Day Experience",
      body: "Four experiences across selected JackJumpers home games",
      image: img.court,
      draw: { kind: "weekly" as const, weekday: 5, hour: 19 },
      cta: "Enter free",
    },
    {
      kicker: "Supercars · Experience",
      eyebrow: "Super 1000 Bathurst",
      title: "Tickford Racing Raceday Experience",
      body: "Behind the scenes in the pits with the team",
      image: img.raceCar,
      draw: { kind: "weekly" as const, weekday: 1, hour: 9 },
      cta: "Enter free",
    },
    {
      kicker: "Mega Friday · Free entry",
      eyebrow: "This Friday",
      title: "Win a $500 Supercheap Auto voucher",
      body: "Plus members get 2x tickets",
      image: img.tyre,
      draw: { kind: "weekly" as const, weekday: 5, hour: 10 },
      cta: "Enter free",
    },
  ],
};

export const happeningNow = {
  nextDraw: "Mega Friday: win a $500 Supercheap Auto voucher",
  recentWin: "Allo, our Day 1 winner at the Bendigo Blitz",
};

export const everyDay = {
  tag: "Every single day",
  title: "$1,000 every day. A Mega Catch every day. One Mega Friday a week.",
  sub: "Ten subscribers win $100 each, every single day. New product every day. Big draw every Friday.",
  daily: {
    label: "Mega Daily",
    big: "$1,000",
    bigSub: "given away today",
    when: "Drawn daily, 6pm ACST",
    title: "10 winners. $100 each. Every day.",
    entry: "Free",
    plus: "2x tickets",
    cta: "Enter today's draw",
    announced: "Winner announced on 22 September 2026",
  },
  catch: {
    label: "Mega Catch",
    when: "Today's Mega Catch",
    title: "Apple Watch Series 11, 46mm GPS",
    everyone: "$699",
    plus: "$599",
    cta: "Add to cart",
    image: img.watch,
  },
  friday: {
    label: "Mega Friday",
    headline: "Win a $500 Supercheap Auto voucher",
    when: "This Friday, 25 Sep, 10am ACST",
    title: "Win a $500 Supercheap Auto voucher",
    entry: "Free",
    plus: "2x tickets",
    status: "Drawing now",
    image: img.tyre,
  },
};

export type GiveawayCat = "motorsport" | "basketball" | "everyday";

export const giveaways = {
  tag: "Mega Loyalty Club",
  title: "Pick your Mega Moment",
  sub: "Free to enter. Every entry earns points. Certified draws.",
  total: 10,
  tabs: [
    { id: "all", label: "All giveaways", count: 10 },
    { id: "motorsport", label: "Motorsport", count: 3 },
    { id: "basketball", label: "Basketball", count: 2 },
    { id: "everyday", label: "Everyday savings", count: 5 },
  ],
  occasions: [
    "Game Day",
    "Race Day",
    "Fuel Up",
    "Grocery Run",
    "New Kicks",
    "Payday",
    "Date Night",
    "Road Trip",
  ],
  items: [
    {
      type: "Cash",
      cat: "everyday" as GiveawayCat,
      occasions: ["Payday", "Date Night"],
      draw: "Drawn every day, 6pm ACST",
      title: "Mega Daily: 10 winners share $1,000 every day",
      announced: "Winner announced on 22 September 2026",
      image: "",
      art: "daily",
    },
    {
      type: "Voucher",
      cat: "everyday" as GiveawayCat,
      occasions: ["Fuel Up", "Road Trip"],
      draw: "Draw Mon 21 Sep, 11am ACST",
      title: "Mega Fuel Upgrade: win 1 of 4 $100 fuel vouchers",
      announced: "Winner announced on 23 September 2026",
      image: img.fuel,
      art: "Win a Mega Fuel Upgrade",
    },
    {
      type: "Voucher",
      cat: "motorsport" as GiveawayCat,
      occasions: ["Race Day", "Road Trip"],
      draw: "Draw Fri 25 Sep, 10am ACST",
      title: "Mega Friday: win a $500 Supercheap Auto voucher",
      announced: "Winner announced on 25 September 2026",
      image: img.tyre,
      art: "Win a $500 Supercheap Auto voucher",
    },
    {
      type: "Voucher",
      cat: "basketball" as GiveawayCat,
      occasions: ["New Kicks", "Game Day"],
      draw: "Draw Mon 28 Sep, 11am ACST",
      title: "Foot Locker Voucher Upgrade: win 1 of 2 $250 vouchers",
      announced: "Winner announced on 28 September 2026",
      image: img.sneakers,
      art: "Win a $250 Foot Locker voucher",
    },
    {
      type: "Voucher",
      cat: "everyday" as GiveawayCat,
      occasions: ["Grocery Run"],
      draw: "Draw Fri 2 Oct, 11am ACST",
      title: "Mega Grocery Saving: win 1 of 2 $250 grocery vouchers",
      announced: "Winner announced on 2 October 2026",
      image: img.grocery,
      art: "Mega Grocery Saving",
    },
    {
      type: "Experience",
      cat: "motorsport" as GiveawayCat,
      occasions: ["Race Day", "Game Day"],
      draw: "Draw Mon 5 Oct, 9am ACST",
      title: "Tickford Racing Experience, Super 1000 Bathurst",
      announced: "Winner announced on 5 October 2026",
      image: img.raceCar,
      art: "Super 1000 Bathurst Raceday Experience",
    },
  ],
  note: "Availability and eligibility may vary by partner.",
};

export const winners = {
  tag: "The winners wall",
  title: "Real prizes. Real people. Drawn in the open.",
  sub: "Certified draws. Real winners. Real handovers.",
  latest: [
    { name: "Matt and Dylan", what: "Played a sim, won a real race car ride", where: "Supercars, Tickford Racing" },
    { name: "Allo", what: "Day 1 winner, $500 daily prize", where: "Bendigo Blitz 2026" },
    { name: "Logan", what: "Took out the $500 daily prize", where: "Bendigo Blitz 2026" },
    { name: "Four lucky lads", what: "Teed it up at Blitz golf", where: "NBL Blitz" },
    { name: "Arun", what: "Travelling with Adelaide United to take on Melbourne Victory", where: "Travel with the team" },
  ],
  spotlight: {
    label: "Tickford Racing Experience",
    quote:
      "Getting the chance to see how it all works behind the scenes and spend time in the pits with the team was an incredible and unique experience. Huge thanks to Mega Rewards and Tickford for such a great day.",
    by: "Mark, Tickford Racing Experience winner",
    image: img.raceCar,
  },
};

export const moments = {
  tag: "Mega Moments",
  title: "34 Mega Moments.",
  sub: "Hover to watch, tap the speaker for sound.",
  socials: ["Instagram", "TikTok", "Facebook"],
  videos: [
    "Cam Waters and Thomas Randle jumped on the Mega Rewards sims and set the time to beat",
    "Played a sim. Won a real race car ride. Explain that.",
    "That's a wrap on the Bendigo Blitz 2026. Logan took out the $500 daily prize.",
    "DJ Vasiljevic pulled up to the Mega Rewards stand",
    "Congrats to Allo, our Day 1 winner at the Bendigo Blitz",
  ],
};

export const testimonials = {
  title: "In their words",
  items: [
    {
      quote:
        "Big thanks to Mega Rewards for our big day out at the Adelaide Grand Final. It really was amazing and a truly great experience. Something we will remember forever!",
      name: "Kitty",
      role: "Competition winner",
    },
    {
      quote:
        "Getting the chance to see how it all works behind the scenes and spend time in the pits with the team was an incredible and unique experience. Huge thanks to Mega Rewards and Tickford for such a great day.",
      name: "Mark",
      role: "Tickford Racing Experience winner",
    },
    {
      quote:
        "Just had the best experience with my husband and daughter! A big thank you to Mega Rewards and Adelaide United for this amazing experience, it's one we won't forget. GO YOU REDS!",
      name: "Kate",
      role: "Mega Rewards subscriber",
    },
    {
      quote: "[Full quote from the Sydney FC match day winner, as on V1]",
      name: "Sydney FC",
      role: "Match day experience",
    },
  ],
};

export const savings = {
  tag: "Mega Savings",
  title: "Shop everything in one place",
  sub: "Normal prices for everyone. Member prices for Plus.",
  hero: {
    kicker: "Most popular",
    big: "4–8% off",
    title: "Gift cards",
    body: "Groceries, fuel, retail and dining. Buy at a discount, spend at full value. Member prices for Plus.",
    cta: "Shop gift cards",
    image: img.shopping,
  },
  tiles: [
    { kicker: "Mate mobile", big: "$23/mo", title: "Mobile plans", cta: "Compare plans", image: img.phone },
    { kicker: "Mega Catch", title: "One product a day.", body: "Resets in", timer: true, cta: "See today's catch", image: img.watch },
    { kicker: "Wholesale rates", title: "Travel", body: "Flights, hotels and packages.", cta: "Browse travel", image: img.beach },
    { kicker: "Wholesale tickets", title: "Tickets and experiences", body: "Sport, gigs and events with our partners.", cta: "Find tickets", image: img.concert },
    { kicker: "Bills", title: "Utilities", body: "Energy and internet through our partners.", cta: "Compare", image: img.power },
  ],
  included: {
    kicker: "Included with Plus",
    title: "Four more ways to save, one membership",
    items: [
      { title: "Dining and activity offers", body: "Entertainment-Book-style 2-for-1 deals" },
      { title: "Everyday discounts", body: "Movies, dining, fuel, pharmacy" },
      { title: "Fitness apps", body: "Member pricing" },
      { title: "Products", body: "Tech, home, fashion and more" },
    ],
  },
};

export const membership = {
  tag: "Plus and Mega memberships",
  title: ["Pay less. Play more.", "Pick your level."],
  sub: "Free gets you in. Plus gets you member prices. Mega covers the whole household and multiplies every ticket.",
  annualDiscount: 0.15,
  plans: [
    {
      id: "free",
      name: "Free",
      who: "One person",
      monthly: 0,
      note: "No card. No catch.",
      intro: "What you get for nothing:",
      features: [
        ["6,000+", "discounts to browse"],
        ["1x", "ticket in every draw"],
        ["Free", "giveaways every week"],
        ["Free", "Mega Tipping, every round"],
        ["1x", "points on everything"],
        ["Your own", "dashboard and ledger"],
      ],
      footnote: "Member prices are the one thing Free does not get: you see them, and you pay RRP.",
      cta: "Join free",
    },
    {
      id: "plus",
      name: "Plus",
      who: "One person",
      monthly: 19.99,
      note: "Billed monthly, cancel anytime.",
      intro: "Everything in Free, plus:",
      features: [
        ["4–8%", "off gift cards"],
        ["$23", "mobile plans"],
        ["Plus price", "on every Mega Catch"],
        ["2-for-1", "dining and activities"],
        ["Wholesale", "travel, tickets, products"],
        ["2x", "points on everything"],
      ],
      footnote:
        "Plus cashback straight to your account, round-ups, movies, fuel, utilities and more. Join thousands of Australians already saving with Plus.",
      cta: "Go Plus",
    },
    {
      id: "mega",
      name: "Mega",
      who: "Up to 3 people",
      badge: "Best for households",
      monthly: 49.99,
      note: "Billed monthly, cancel anytime.",
      intro: "Everything in Plus, for the whole house, plus:",
      features: [
        ["3 logins", "own tickets and points for each person"],
        ["5x", "entries on every giveaway, 5x points on everything"],
        ["$20", "Mega Credit to spend in the store, every month"],
        ["$10,000", "Mega-only cash draw, every month"],
        ["First dibs", "on every Mega Catch, 2 hours early"],
        ["Presale", "access to partner tickets"],
      ],
      footnote:
        "Two Plus memberships cost $39.98. Mega is $49.99 with $20 credit back every month, so a household pays $29.99 for 3 members and 5x the tickets.",
      cta: "Go Mega",
    },
  ],
  perks: ["2x tickets", "6,000+ discounts", "$23 mobile", "4–8% off gift cards", "2-for-1 dining", "Wholesale travel", "2x points", "Plus price on Mega Catch", "Cashback", "Round-ups"],
};

export const calculator = {
  tag: "Savings calculator",
  title: "Does Plus pay for itself?",
  sub: "Drag the sliders. Gift cards and mobile only. Everything else is a bonus.",
  yearlyFee: 239.88,
  plan: 23,
  disclaimer:
    "Estimate only. Actual savings depend on which gift cards, plans and offers you use. Plus members see their real running total in the dashboard.",
};

export const points = {
  tag: "Points and levels",
  title: "Play. Earn. Level up.",
  sub: "Earn on every entry. Level up for more tickets. Spend on entries, merch or products. Refer a mate: free month of Plus.",
  actions: [
    { pts: 10, label: "Enter a giveaway", mission: 0 },
    { pts: 5, label: "Daily check-in", mission: 1 },
    { pts: 25, label: "Follow us (verified)" },
    { pts: 100, label: "Refer a mate who joins" },
  ],
  missions: [
    { label: "Enter 3 giveaways", goal: 3, start: 0 },
    { label: "Check in 5 days", goal: 5, start: 4 },
    { label: "Buy one Mega Catch", goal: 1, start: 0 },
  ],
  levels: [
    { name: "Rookie", range: "0 – 249 points", min: 0, reward: "Where you start" },
    { name: "Fan", range: "250 – 999 points", min: 250, reward: "+5 bonus tickets" },
    { name: "Legend", range: "1,000 – 2,499 points", min: 1000, reward: "+10 bonus tickets" },
    { name: "Hall of Fame", range: "2,500+ points", min: 2500, reward: "+25 bonus tickets" },
  ],
  shop: [
    { pts: "500 pts", what: "5 bonus Mega Friday tickets" },
    { pts: "1,000 pts", what: "Mega Rewards cap" },
    { pts: "2,500 pts", what: "$25 store credit" },
    { pts: "5,000 pts", what: "A month of Plus, free" },
  ],
  leaderboard: [
    { name: "Jess T.", level: "Legend", streak: "12-day streak", pts: "1,240" },
    { name: "Marcus P.", level: "Legend", streak: "9-day streak", pts: "1,185" },
    { name: "Priya S.", level: "Fan", streak: "21-day streak", pts: "980" },
    { name: "Dylan K.", level: "Fan", streak: "5-day streak", pts: "850" },
    { name: "Sam R.", level: "Fan", streak: "4-day streak", pts: "640" },
  ],
  weekly:
    "Top 3 each week score 10 bonus Mega Friday tickets. Points come from entries, check-ins, referrals and store buys.",
  badges: ["First entry", "7-day streak", "Mega Friday regular", "Referrer", "Catch collector", "Tipping champ"],
  sampleNote: "Sample standings. The live board starts with the first full week of entries.",
};

export const tipping = {
  tag: "Mega Tipping",
  codes: "NBL · Supercars · A-League · AFL · NRL",
  title: "Tip with your head or your heart?",
  sub: "Five codes. One account. Best record wins $2,500.",
  stats: [
    { big: "$2,500", small: "Major prize, best overall record" },
    { big: "Free", small: "To play, every round of the season" },
    { big: "+45 pts", small: "For a full round locked in" },
  ],
  cta: "Start tipping",
  thanks: "Season live now. Thanks to our friends at the NBL.",
  round: "Round 1 · NBL",
  games: [
    { home: "Adelaide 36ers", away: "Tasmania JackJumpers", when: "Home · Fri 7:30pm ACST" },
    { home: "Sydney Kings", away: "Melbourne United", when: "Home · Sat 5:00pm AEST" },
    { home: "Perth Wildcats", away: "Brisbane Bullets", when: "Home · Sun 2:00pm AWST" },
  ],
};

export const community = {
  tag: "Mega Community",
  title: "Offers and experiences from Australia's biggest clubs and brands.",
  cta: "Meet our community partners",
  partners: ["Adelaide United", "Tickford Racing", "NBL", "Tasmania JackJumpers", "Sydney FC", "Supercars", "Supercheap Auto", "Foot Locker"],
};

export const finalCta = {
  title: "Start unlocking Mega value today",
  sub: "Free in 60 seconds.",
  counterStart: 128460,
};

export const footer = {
  legal:
    "All promotions, offers, and rewards are subject to the terms and conditions of participating partners, which may be amended or withdrawn at any time at their discretion. Availability and eligibility may vary by partner.",
  explore: ["About", "Giveaways", "Mega Catch", "Mega Tipping", "The store", "Mega Rewards Plus", "Points and merch", "Cashback and round-ups", "Community partners"],
  company: ["My dashboard", "FAQ", "Winners", "Become a partner", "Privacy policy", "Terms and conditions", "Plus terms", "Tipping rules"],
  contact: ["[PHONE NUMBER]", "[CONTACT EMAIL]", "Message us"],
  socials: ["Instagram", "Facebook", "TikTok"],
  bottom: "Mega Rewards Pty Ltd | ABN: [ABN]",
  office: "Head office: [HEAD OFFICE ADDRESS]",
};
