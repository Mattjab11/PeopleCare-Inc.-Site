/* ============================================================
   PeopleCare — SITE DATA (edit this file, not the HTML pages)
   ============================================================
   This is the one place to update things that repeat across the
   site — the navigation menu, phone/address, board & staff,
   impact numbers, and upcoming events. Every page reads from
   here, so a change here shows up everywhere automatically —
   no need to hunt through 8 HTML files.

   How to edit safely:
   - Keep the curly braces { } and square brackets [ ] exactly
     where they are.
   - Text goes inside "double quotes".
   - Each item in a list ends with a comma, except the last one.
   - If you're ever unsure, copy an existing entry and just
     change the words inside the quotes.
   ============================================================ */

const PC_SITE = {

  // ---------- CONTACT INFO (shown in the header/footer of every page) ----------
  phone: "(708) 442-1223",
  phoneHref: "tel:7084421223",
  address: "273 Nuttall Road, Riverside, IL 60546",
  email: "powerofanhour@peoplecareinc.org",

  // ---------- ONLINE DONATIONS ----------
  // Leave donateUrl as "" until you have a payment link (PayPal.me,
  // Venmo, GiveButter, etc). Once you paste a real link in here, the
  // Donate button and QR code on the Donations page connect to it
  // automatically — nothing else to change.
  donateUrl: "",

  // ---------- MAIN NAVIGATION MENU ----------
  // This exact list is what builds the menu at the top of every
  // page, in this order. To add, remove, rename, or reorder a
  // page, edit this list — every page updates at once.
  nav: [
    { label: "Home", href: "index.html" },
    { label: "HOTH Endowment", href: "hoth-endowment.html" },
    { label: "Get Help", href: "get-help.html" },
    { label: "Get Involved", href: "get-involved.html" },
    { label: "Donations", href: "donations.html" },
    { label: "Newsletters", href: "newsletters.html" },
    { label: "About Us", href: "about.html" },
    { label: "Contact Us", href: "contact.html" }
  ],

  // ---------- OUR IMPACT (numbers shown on the About page) ----------
  impactStats: [
    { number: "2,500+", label: "Calls for help answered last year" },
    { number: "1,700+", label: "Clients served annually" },
    { number: "30+", label: "Years serving our neighbors" }
    // To add another stat, copy a line above and edit it, e.g.:
    // { number: "500+", label: "Rides given last year" }
  ],

  // ---------- RUNNING TALLY (About page) ----------
  // Set showTally to false to hide this section completely.
  showTally: true,
  tally: {
    number: "1,842",
    label: "People helped in 2026 (as of August 1)"
  },

  // ---------- BOARD OF DIRECTORS (About page) ----------
  // photo: leave blank ("") to use an automatic colored-initials
  // avatar, or paste a real photo file name (e.g. "mary-coonda.jpg")
  // once you've added that image file to the repo.
  board: [
    { name: "Mary Coonda", title: "President", photo: "" },
    { name: "Joseph Skaggs Jr.", title: "Vice President & Secretary", photo: "" },
    { name: "Tom Piette", title: "Treasurer", photo: "" },
    { name: "Russell Jablonski", title: "Board Member", photo: "" },
    { name: "Bruce Jablonski", title: "Board Member", photo: "" },
    { name: "Brian Kuratko", title: "Board Member", photo: "" },
    { name: "Lorraine Marek", title: "Board Member", photo: "" },
    { name: "Dr. Ita Sih", title: "Board Member", photo: "" },
    { name: "Jean Vondriska", title: "Board Member", photo: "" }
  ],

  // ---------- OUR STAFF (About page) ----------
  staff: [
    { name: "Judy Mantel", title: "Executive Director", bio: "", photo: "" },
    { name: "Diane Chaney", title: "Financial Director", bio: "A retired physician with an undergraduate background in finance.", photo: "" },
    { name: "Peggy Devlin", title: "Transportation Coordinator", bio: "Joined the staff after volunteering with PeopleCare.", photo: "" }
  ],

  // ---------- TESTIMONIALS (About page) ----------
  // These are sample placeholders — swap in real quotes once you
  // have permission from the client or family member to use them.
  testimonials: [
    { quote: "Our volunteer driver never once made my mother feel like a burden. She looked forward to those rides more than the appointments themselves.", attribution: "Family member, Riverside", sample: true },
    { quote: "Just having someone to talk to every week made all the difference during a very isolating year.", attribution: "PeopleCare client, Brookfield", sample: true },
    { quote: "I didn't know where to turn for groceries and prescriptions. One phone call and PeopleCare took care of the rest.", attribution: "PeopleCare client, LaGrange Park", sample: true }
  ],

  // ---------- UPCOMING EVENTS (Get Involved page) ----------
  // These are sample dates — replace with your real schedule.
  events: [
    { month: "Sep", day: "12", title: "Volunteer Orientation", details: "New driver & friendly visitor training — PeopleCare office, Riverside" },
    { month: "Oct", day: "3", title: "Fall Donor Luncheon", details: "Celebrating our volunteers and supporters" },
    { month: "Nov", day: "14", title: "Powerful Tools for Caregivers — Info Session", details: "Open house for family caregivers interested in the program" }
  ]

};
