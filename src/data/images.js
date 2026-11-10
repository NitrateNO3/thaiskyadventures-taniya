// Real imagery from the original Thai Sky Adventures site.
// SmartImage still falls back to a brand gradient if any ever fails to load.
const TSA = "https://thaiskyadventures.com/wp-content/uploads/";

// main jump/gallery set (01–35, 11 doesn't exist)
const GNUMS = [
  "01", "02", "03", "04", "05", "06", "07", "08", "09", "10",
  "12", "13", "14", "15", "16", "17", "18", "19", "20", "21",
  "22", "23", "24", "25", "26", "27", "28", "29", "30", "31",
  "32", "33", "34", "35",
];
const gal = (n) => `${TSA}Thai-Sky-Adventures-Gallery-${n}.jpg`;

const AFF = [
  "uspa-accelerated-freefall-learn-to-skydive-pattaya-thailand-01",
  "uspa-accelerated-freefall-learn-to-skydive-pattaya-thailand-03",
  "uspa-accelerated-freefall-learn-to-skydive-pattaya-thailand-05",
  "uspa-accelerated-freefall-learn-to-skydive-pattaya-thailand-07",
  "uspa-accelerated-freefall-learn-to-skydive-pattaya-thailand-09",
  "learning-to-skydive-pattaya-thai-sky-adventures-01",
  "learning-to-skydive-pattaya-thai-sky-adventures-03",
  "learning-to-skydive-pattaya-thai-sky-adventures-05",
].map((s) => `${TSA}${s}.jpg`);

const AIRCRAFT = [
  "the-fleet-thai-sky-adventures-pattaya",
  "porter-aircraft-thaosky-adventures",
  "Thai-Sky-Adventures-Thailand-Aircraft-01",
  "Thai-Sky-Adventures-Thailand-Aircraft-03",
  "Thai-Sky-Adventures-Thailand-Aircraft-05",
  "Thai-Sky-Adventures-Thailand-Aircraft-07",
  "turbine-aircraft-fleet-in-the-hangars-thai-sky-adventures",
].map((s) => `${TSA}${s}.jpg`);

const DROPZONE = [
  "arriving-at-thai-sky-adventures-skydiving-pattaya",
  "viewing-deck-thai-sky-adventures-skydiving-pattaya",
  "restaurant-level-thai-sky-adventures-skydiving-pattaya",
  "spectator-viewing-deck-restaurant-facilities-thai-sky-adventures-dropzone-pattaya",
  "Thai-Sky-Aerial-Plan-Landing-Area-and-Runway-Length",
  "uspa-licensed-skydivers-students-in-the-mock-upat-tsa",
].map((s) => `${TSA}${s}.jpg`);

// Categorized gallery used by the Gallery page.
export const GALLERY = [
  ...GNUMS.map((n) => ({ src: gal(n), cat: "Skydiving" })),
  ...AFF.map((src) => ({ src, cat: "Learning" })),
  ...AIRCRAFT.map((src) => ({ src, cat: "Aircraft" })),
  ...DROPZONE.map((src) => ({ src, cat: "Drop Zone" })),
];

export const GALLERY_CATS = ["All", "Skydiving", "Learning", "Aircraft", "Drop Zone"];

export const IMG = {
  heroSkydiver: gal("01"),
  tandem: gal("03"),
  freefall: gal("02"),
  canopy: gal("06"),
  course: AFF[0],
  formation: gal("05"),
  pattayaBeach: gal("07"),
  clouds: gal("09"),
  plane: AIRCRAFT[0],
  about: gal("10"),
  gallery: GALLERY.map((g) => g.src),
};
