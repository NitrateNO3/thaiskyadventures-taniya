// Centralized content for Thai Sky Adventures — mirrors the original site copy.

export const CONTACT = {
  phone1: "+66 (0) 85 900 3412",
  phone2: "+66 (0) 82 693 5198",
  phone1Raw: "+66859003412",
  email: "info@thaiskyadventures.com",
  hours: "Mon – Sun · 8:00 AM – 5:00 PM",
  address: "777 77, Pattaya City, Si Racha District, Chon Buri 20230, Thailand",
  whatsapp: "https://wa.me/message/DDV2GB7FXP7DI1",
  line: "https://line.me/ti/p/muo2I9bBFH",
  wechat: "https://mp.weixin.qq.com",
  facebook: "https://facebook.com/ThaiSkyAdventures",
  instagram: "https://instagram.com/thaiskyadventures",
  youtube: "https://youtube.com/@ThaiSkyAdventures/videos",
  maps: "https://maps.google.com/?q=Thai+Sky+Adventures+Si+Racha",
};

export const NAV = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Tandem", to: "/tandem-skydiving" },
  { label: "Courses", to: "/courses" },
  { label: "Licensed", to: "/licensed-skydivers" },
  { label: "Travel", to: "/travel" },
  { label: "Accommodation", to: "/accommodation" },
  { label: "Gallery", to: "/gallery" },
  { label: "FAQs", to: "/faqs" },
  { label: "Articles", to: "/articles" },
  { label: "Contact", to: "/contact" },
];

export const STATS = [
  { value: 2.7, suffix: "M+", label: "Skydives completed" },
  { value: 13000, suffix: " ft", label: "Highest jump in Thailand" },
  { value: 40, suffix: "+ yrs", label: "Combined expertise" },
  { value: 7, suffix: " days", label: "Open every week" },
];

export const HERO = {
  badge: "Open 7 Days A Week",
  title: "Skydive Thailand",
  titleAccent: "Above the Gulf",
  sub: "Jump into the adventure of a lifetime from 13,000 ft with scenic ocean views of Pattaya & Bangkok — guided by USPA-certified instructors.",
  priceNote: "Tandem jumps from ฿9,700",
};

export const WHY_US = [
  {
    icon: "ShieldCheck",
    title: "Safety First",
    text: "We follow USPA guidelines to the letter and are regularly inspected by the Thai Aviation Authority. Over 30 years of operating experience behind every jump.",
  },
  {
    icon: "Mountain",
    title: "Scenic Ocean Views",
    text: "Freefall over Thailand's turquoise coastline with sweeping views of the Gulf of Thailand, Pattaya and Bangkok on the horizon.",
  },
  {
    icon: "Award",
    title: "Expert Instructors",
    text: "Founded by international experts with 40+ years of combined skydiving experience. USPA-certified instructors and commercial pilots handle everything from exit to canopy.",
  },
  {
    icon: "Infinity",
    title: "Every Level Welcome",
    text: "No experience needed for tandem. From your very first jump to a full USPA 'A' License — a clear progression path for every skydiver.",
  },
];

export const JUMP_STEPS = [
  { n: "01", title: "Check-in", text: "Register at the office, choose your video or photo package, and get set up. Upgrade to Deluxe is possible even after you land." },
  { n: "02", title: "Payment & Scheduling", text: "After payment you receive a sticker and your flight assignment. Jumps run first come, first served." },
  { n: "03", title: "Briefing", text: "Your instructor gives a 5–10 minute briefing and your camera flyer films a short pre-jump interview." },
  { n: "04", title: "The Climb & Jump", text: "A scenic 20-minute climb to 13,000 ft, then ~60 seconds of freefall at up to 200 kph. Parachute opens around 5,000 ft." },
  { n: "05", title: "Canopy Ride", text: "7–8 serene minutes under the parachute with views of the Gulf of Thailand. You can help steer." },
  { n: "06", title: "Landing & Return", text: "Your cameraman films the landing. Collect your edited video, first-jump certificate and belongings, then head back." },
];

export const TANDEM_PACKAGES = [
  { name: "Tandem Jump", price: "9,700", desc: "The pure experience — freefall up to 60 seconds. No video.", features: ["13,000 ft exit altitude", "~60s freefall", "7–8 min canopy ride", "First-jump certificate"], featured: false },
  { name: "Tandem + Video", price: "13,650", desc: "Your jump captured by a professional air-to-air videographer.", features: ["Everything in Tandem Jump", "Edited HD video", "Air-to-air camera flyer", "Pre-jump interview"], featured: false },
  { name: "Video & Photos", price: "14,650", desc: "The full story — edited video plus a set of high-res photos.", features: ["Everything in + Video", "High-resolution photos", "Shareable highlight edit"], featured: true },
  { name: "Deluxe Skydive", price: "15,650", desc: "The complete package including the parachute-ride footage.", features: ["Full edited video", "High-resolution photos", "Canopy-ride footage", "Priority editing"], featured: false },
];

export const WEIGHT_SURCHARGES = [
  { range: "95 – 99.9 kg", fee: "฿500" },
  { range: "100 – 104.9 kg", fee: "฿1,000" },
  { range: "105 – 109.9 kg", fee: "฿1,500" },
  { range: "110 – 115 kg", fee: "฿2,000" },
];

export const TANDEM_RULES = [
  { icon: "Languages", title: "Language", text: "No English required for tandem jumps — your instructor handles everything." },
  { icon: "CalendarClock", title: "Age", text: "Minimum age 12 with written parental consent." },
  { icon: "Scale", title: "Weight", text: "Minimum 25 kg, maximum 115 kg (surcharge over 95 kg)." },
  { icon: "Footprints", title: "Footwear", text: "Closed-toe shoes required — no bare feet or sandals." },
  { icon: "HeartPulse", title: "Medical", text: "Consult a doctor if over 60, on prescription medication, or recently injured." },
  { icon: "Waves", title: "Scuba Divers", text: "Wait at least 18 hours after diving before you skydive." },
];

export const COURSES = [
  {
    name: "AFF Level 1",
    price: "25,950",
    tagline: "Take the first step towards skydiving mastery",
    duration: "Min. 3 days",
    weight: "Max 95 kg",
    desc: "Ground training, an introductory tandem, and a Level 1 skydive with two dedicated instructors.",
    includes: ["Centre induction & equipment", "Aircraft procedures", "Freefall technique", "Parachute handling", "Introductory tandem jump"],
    featured: false,
  },
  {
    name: "AFF Full Course",
    price: "90,950",
    tagline: "Seven levels to 'Cleared for Solo'",
    duration: "Min. 7 days",
    weight: "Max 95 kg",
    desc: "A USPA-endorsed course taking you through seven levels to your qualifying jump and solo clearance.",
    includes: ["~6 hours ground school", "Initial jumps with two AFF instructors", "Solo jumps with radio guidance", "All equipment provided", "Qualifying jump"],
    featured: true,
  },
  {
    name: "USPA 'A' License",
    price: "149,550",
    tagline: "The complete path to your license",
    duration: "Min. 14 days",
    weight: "Max 95 kg",
    desc: "The full AFF course plus 5 coached jumps and 12 solo consolidation jumps — reaching 25 jumps and your USPA 'A' License.",
    includes: ["Full AFF course", "5 coached jumps (USPA-rated)", "12 solo consolidation jumps", "Gear rental included", "25 jumps → 'A' License"],
    featured: false,
  },
];

export const COURSE_EXTRAS = [
  { item: "Video of all AFF jumps (helmet cam)", price: "3,000" },
  { item: "Helmet video + outside video (L1 & L7)", price: "11,400" },
  { item: "AFF Ground School", price: "6,000" },
  { item: "AFF Levels 2–3 (per level)", price: "15,000" },
  { item: "AFF Levels 4–7 (per level)", price: "9,500" },
  { item: "Repeat Levels 1–3 (per level)", price: "13,000" },
  { item: "Repeat Levels 4–7 (per level)", price: "8,000" },
  { item: "Short refresher", price: "3,000" },
  { item: "Long refresher (1+ year out)", price: "5,000" },
  { item: "Coach jump with gear", price: "6,500" },
  { item: "Coach jump without gear rental", price: "5,000" },
];

export const COURSE_INCLUDED = [
  "Student handout & logbook", "Goggles", "Jumpsuit", "Helmet",
  "Altimeter", "Parachute", "Packing after each jump",
];
export const COURSE_EXCLUDED = [
  "Accommodation", "Food", "Transport to drop zone",
  "USPA membership (~$60 USD)", "License issue fee (~$35 USD)", "Your own gear after qualifying",
];

export const LICENSED_PRICES = [
  { item: "Hop & Pop (up to 5,500 ft)", price: "1,100" },
  { item: "Fun Jump (above 11,000 ft)", price: "1,500" },
  { item: "Parachute gear rental / jump (incl. re-pack)", price: "1,500" },
  { item: "Altimeter rental / day", price: "1,000" },
  { item: "Jumpsuit rental / day", price: "500" },
  { item: "Helmet rental / day", price: "500" },
  { item: "Goggles (sale only)", price: "1,000" },
  { item: "Coach jump — no gear rental", price: "5,000" },
  { item: "Coach jump — with gear rental", price: "6,500" },
  { item: "Checkout Dive AFF — no gear rental", price: "5,800" },
  { item: "Checkout Dive AFF — with gear rental", price: "7,300" },
  { item: "Parachute Packing Course", price: "7,000" },
];

export const LICENSED_RULES = [
  "Present your License and Log Book on arrival.",
  "Licenses from FAI contracting countries are accepted.",
  "An Automatic Activation Device (AAD) is mandatory.",
  "Reserve repacks required every 6 months.",
  "Helmets required until you earn a 'B' License.",
  "Cameras not allowed until you have 200 jumps.",
  "'D' License holders must deploy by 2,500 ft minimum.",
  "No crossing or spiralling below 1,000 ft.",
  "No jumping under the influence — including hungover.",
  "Fun jumpers must not interfere with tandem jumps.",
];

export const FAQS = [
  { q: "How old do I have to be to skydive?", a: "With written parental consent you must be at least 12 years old and weigh at least 25 kg." },
  { q: "Is skydiving safe?", a: "We've run a similar business for over 30 years, follow USPA guidelines and are inspected by the Thai Aviation Authority. Tandem risk is around 0.5%, and about 1% for AFF and A-License students." },
  { q: "Do you offer a pickup service?", a: "Pattaya hotel transport is included with tandem jumps. A Bangkok shuttle departs from the Novotel at Siam Square for 500 baht round trip." },
  { q: "Is there a weight limitation?", a: "The limit is 115 kg, relative to height and build. Jumpers over 95 kg pay a small supplement for the extra instructor work involved." },
  { q: "Is a reservation required?", a: "Usually yes — especially for groups of more than five or specific dates. Online deposits by card are easiest; cash deposits are accepted and walk-ins are sometimes possible." },
  { q: "Can my friend come on the plane to watch?", a: "For insurance reasons only jumpers and pilots may board. One spectator rides the Pattaya bus free; extra spectators pay 500 baht." },
  { q: "Can I take my own pictures?", a: "You can take photos on the ground but not in the aircraft. Professional air-to-air videographers are available to capture your jump." },
  { q: "Are there any medical considerations?", a: "People over 60, those on prescription medication, or those recently injured or ill should consult a doctor first. We can refer you if you have any doubts." },
  { q: "What should I wear?", a: "Non-restrictive clothing and closed-toe shoes — no bare feet or sandals. Jumpsuits are provided, and older shoes can be borrowed." },
  { q: "What if the weather forecast is bad?", a: "You must still come to the drop zone. If a jump is cancelled you'll be called. If weather turns after arrival, jumps are postponed until conditions are safe." },
  { q: "What is the refund policy?", a: "Refunds require a signed doctor's certificate declaring you unfit to jump. Full refunds apply if a jump is cancelled for reasons beyond your or our control, such as weather or aircraft issues." },
  { q: "What if I have been scuba diving?", a: "Experienced divers must wait at least 18 hours before skydiving. Beginners who dove to 12 m or less on a course can jump the next day." },
  { q: "What's the difference between the three courses?", a: "It's one course in three parts: AFF Level 1 as a trial, the full AFF course, and the full A License which adds the jumps needed to reach the 25 required for a USPA A License." },
  { q: "Can I break the AFF / A-License course into weekends?", a: "Yes, but training should be as regular as possible to avoid needing extra jumps." },
  { q: "Are there extra or hidden costs?", a: "No hidden charges. Handouts, logbook and equipment are included. USPA membership (~$60) and a license issue fee (~$35) are typical additional costs once qualified." },
];

export const ACCOMMODATION = [
  { name: "Photisan Sports Apartments", price: "฿950 / night", note: "Includes daily transfers to and from the drop zone. Ideal for fun jumpers and AFF or 'A' License students." },
  { name: "Smile Resort", price: "~7 km away", note: "Top-of-the-line amenities and fantastic service, strategically located just 7 km from our drop zone." },
  { name: "North Pattaya (Naklua)", price: "Recommended", note: "We highly recommend staying in North Pattaya for ease of transport. Pickup offered at Aiyara Palace, JP Villa Hotel and select Naklua hotels." },
];

export const ACCOMMODATION_NOTES = [
  "We do not pick up from Jomtien — a taxi from Jomtien is approximately ฿800 each way.",
  "Motorbike rental from the drop zone costs ฿300 per day.",
  "The morning bus serves hotels within easy range, but pickup isn't guaranteed — confirm with us first.",
];

export const TRAVEL = {
  bangkok: {
    title: "Bangkok Shuttle",
    points: [
      "Departs daily from outside the Novotel Hotel, a 5-minute walk from Siam Square Exit 6 BTS Station.",
      "Arrive by 8:45 am — departure is at 9:00 am sharp.",
      "Return is once all bus occupants have jumped. Round trip 500 baht.",
      "By BTS: take the Green Sukhumvit Line to Siam Square, leave via Exit 6, walk ~200 m to the hotel.",
    ],
  },
  pattaya: {
    title: "Pattaya Pickup",
    points: [
      "Transfers from Pattaya are included in the tandem jump price.",
      "An air-conditioned minibus collects you from your hotel or Pattaya North Bus Station.",
      "Choose a pickup window: 7:00–7:30 am or 10:00–10:30 am.",
      "Returns are after jumping, around 1 pm or 4 pm — sometimes earlier.",
    ],
  },
  airports: [
    { name: "Suvarnabhumi (BKK)", dist: "96 km", note: "Thailand's main international airport." },
    { name: "Don Muang (DMK)", dist: "156 km", note: "Low-cost carriers — Air Asia, Nok Air, Tiger." },
    { name: "U-Tapao (UTP)", dist: "~56 km", note: "South of Pattaya — a few low-cost carriers." },
  ],
  driving: [
    "The centre is near Nong Khor Reservoir in Si Racha, Chon Buri — just off Motorway No. 7.",
    "Follow signs for Sri Racha Tiger Zoo and continue past it for 1.8 km.",
    "Turn left at the Nong Khor Reservoir sign and drive 5.2 km. The centre is on the left.",
    "Alternatively, follow the signs for Baan Map Lang.",
  ],
  taxi: "We recommend Bolt Taxi for its app, prices and reliability. Grab also works. From Don Muang or U-Tapao a taxi should cost no more than 1,800 THB.",
};

export const ARTICLES = [
  { title: "Why Skydiving in Thailand Is the Ultimate Adventure Destination", date: "5 November 2026", excerpt: "If you're looking for the ultimate adventure, skydiving in Thailand should be at the top of your bucket list — the view from thousands of feet is unmatched.", tag: "Adventure" },
  { title: "Why We Don't Sell Cheap Skydives — We Deliver Quality & Experience", date: "1 November 2026", excerpt: "Looking for the cheapest skydive in Thailand? We might not be the cheapest option, and that's exactly the point.", tag: "Our Story" },
  { title: "The Thai Skydiving Fun Jump Community Is Growing", date: "29 October 2026", excerpt: "We're proud to see our fun jump community continuing to grow. If you're looking for fun jumping in Thailand, come join us.", tag: "Community" },
  { title: "Skydiving Safety: Why Pre-Jump Gear Checks Matter", date: "23 October 2026", excerpt: "Skydiving is an incredible experience, but every successful jump begins long before the aircraft leaves the ground.", tag: "Safety" },
  { title: "Bangkok Skydiving: Your Complete Tandem Day-Trip Guide", date: "20 October 2026", excerpt: "Ever dreamed of jumping out of an aeroplane and experiencing the incredible thrill of freefall? Here's how to do it from Bangkok.", tag: "Guide" },
  { title: "How to Prepare for Your Tandem Skydive in Thailand", date: "18 October 2026", excerpt: "Planning your first tandem skydive? Here's what to wear, what to bring and how to get the best photos.", tag: "Guide" },
  { title: "Building the Future of Thai Skydiving", date: "16 October 2026", excerpt: "Skydiving is about much more than jumping out of an aeroplane — it's about community, trust and personal growth.", tag: "Community" },
  { title: "10 Best Things to Do in Pattaya, Thailand (2026 Guide)", date: "13 October 2026", excerpt: "Looking for the best things to do in Pattaya? From skydiving over the Gulf of Thailand to ATV trail rides — here's our list.", tag: "Travel" },
  { title: "Thai Sky Adventures Makes History: One Flag, One Nation, One World Record", date: "10 October 2026", excerpt: "The sky is no longer the limit! Inside our role in the One Flag Thailand world-record project.", tag: "News" },
];

export const TESTIMONIALS = [
  { name: "Emma R.", from: "United Kingdom", text: "The most incredible experience of my life. The staff made me feel completely safe from the moment I arrived — and that view over the ocean is unreal.", rating: 5 },
  { name: "Lukas M.", from: "Germany", text: "Did my full AFF course here. The instructors are world-class and genuinely care about your progression. Can't recommend them enough.", rating: 5 },
  { name: "Siriporn T.", from: "Thailand", text: "Booked a tandem for my birthday and it exceeded every expectation. The video package is worth every baht — I've watched it a hundred times.", rating: 5 },
  { name: "Daniel K.", from: "Australia", text: "13,000 ft, 60 seconds of freefall over Pattaya. Absolutely unbeatable. Professional from start to finish.", rating: 5 },
];
