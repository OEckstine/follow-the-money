// Top 25 Senate fundraisers 2023-2024 cycle from FEC candidate summary data.
const FECData = [
  {
    name: "Sherrod Brown",
    party: "DEM",
    state: "OH",
    status: "incumbent",
    totalRaised: 96530241,
    individuals: 79877201,
    pacs: 3085597,
    partyCommittees: 57800,
    selfFunded: 0,
    other: 13509642,
  },
  {
    name: "Colin Allred",
    party: "DEM",
    state: "TX",
    status: "challenger",
    totalRaised: 94674183,
    individuals: 85341900,
    pacs: 964090,
    partyCommittees: 62300,
    selfFunded: 0,
    other: 8305893,
  },
  {
    name: "Jon Tester",
    party: "DEM",
    state: "MT",
    status: "incumbent",
    totalRaised: 93570123,
    individuals: 81104097,
    pacs: 3077010,
    partyCommittees: 61171,
    selfFunded: 0,
    other: 9327845,
  },
  {
    name: "Ted Cruz",
    party: "REP",
    state: "TX",
    status: "incumbent",
    totalRaised: 74050031,
    individuals: 67435723,
    pacs: 1262520,
    partyCommittees: 5500,
    selfFunded: 0,
    other: 5346288,
  },
  {
    name: "Ruben Gallego",
    party: "DEM",
    state: "AZ",
    status: "open seat",
    totalRaised: 64657200,
    individuals: 59385707,
    pacs: 1784685,
    partyCommittees: 75650,
    selfFunded: 0,
    other: 3411158,
  },
  {
    name: "David Trone",
    party: "DEM",
    state: "MD",
    status: "open seat",
    totalRaised: 63833137,
    individuals: 853812,
    pacs: 5000,
    partyCommittees: 0,
    selfFunded: 62877800,
    other: 96525,
  },
  {
    name: "Bob Casey",
    party: "DEM",
    state: "PA",
    status: "incumbent",
    totalRaised: 58147345,
    individuals: 43598592,
    pacs: 2903155,
    partyCommittees: 61800,
    selfFunded: 0,
    other: 11583798,
  },
  {
    name: "Elissa Slotkin",
    party: "DEM",
    state: "MI",
    status: "open seat",
    totalRaised: 51937060,
    individuals: 46587667,
    pacs: 1198587,
    partyCommittees: 58507,
    selfFunded: 0,
    other: 4092300,
  },
  {
    name: "Tammy Baldwin",
    party: "DEM",
    state: "WI",
    status: "incumbent",
    totalRaised: 50228545,
    individuals: 42080849,
    pacs: 2607544,
    partyCommittees: 62426,
    selfFunded: 0,
    other: 5477727,
  },
  {
    name: "Adam Schiff",
    party: "DEM",
    state: "CA",
    status: "open seat",
    totalRaised: 48149197,
    individuals: 45110629,
    pacs: 1015453,
    partyCommittees: 250,
    selfFunded: 0,
    other: 2022865,
  },
  {
    name: "Jacky Rosen",
    party: "DEM",
    state: "NV",
    status: "incumbent",
    totalRaised: 43915245,
    individuals: 33769625,
    pacs: 2574528,
    partyCommittees: 57800,
    selfFunded: 0,
    other: 7513292,
  },
  {
    name: "Rick Scott",
    party: "REP",
    state: "FL",
    status: "incumbent",
    totalRaised: 36696093,
    individuals: 5556640,
    pacs: 991223,
    partyCommittees: 52800,
    selfFunded: 21393850,
    other: 8701580,
  },
  {
    name: "Debbie Mucarsel-Powell",
    party: "DEM",
    state: "FL",
    status: "challenger",
    totalRaised: 36616416,
    individuals: 34482940,
    pacs: 806010,
    partyCommittees: 58050,
    selfFunded: 0,
    other: 1269416,
  },
  {
    name: "Dave McCormick",
    party: "REP",
    state: "PA",
    status: "challenger",
    totalRaised: 35970837,
    individuals: 21181318,
    pacs: 1013544,
    partyCommittees: 52800,
    selfFunded: 7691847,
    other: 6031328,
  },
  {
    name: "Katie Porter",
    party: "DEM",
    state: "CA",
    status: "open seat",
    totalRaised: 32527821,
    individuals: 19140784,
    pacs: 67526,
    partyCommittees: 0,
    selfFunded: 0,
    other: 13319510,
  },
  {
    name: "Eric Hovde",
    party: "REP",
    state: "WI",
    status: "challenger",
    totalRaised: 31958333,
    individuals: 9292283,
    pacs: 423695,
    partyCommittees: 52800,
    selfFunded: 20000000,
    other: 2189556,
  },
  {
    name: "Angela Alsobrooks",
    party: "DEM",
    state: "MD",
    status: "open seat",
    totalRaised: 31077806,
    individuals: 23764486,
    pacs: 1194819,
    partyCommittees: 58400,
    selfFunded: 0,
    other: 6060100,
  },
  {
    name: "Tim Sheehy",
    party: "REP",
    state: "MT",
    status: "challenger",
    totalRaised: 30015786,
    individuals: 21776099,
    pacs: 1317450,
    partyCommittees: 63109,
    selfFunded: 2602762,
    other: 4256366,
  },
  {
    name: "Bernie Moreno",
    party: "REP",
    state: "OH",
    status: "challenger",
    totalRaised: 26920694,
    individuals: 14811194,
    pacs: 909531,
    partyCommittees: 53325,
    selfFunded: 4500838,
    other: 6645805,
  },
  {
    name: "Kari Lake",
    party: "REP",
    state: "AZ",
    status: "open seat",
    totalRaised: 26252199,
    individuals: 23239868,
    pacs: 407825,
    partyCommittees: 52800,
    selfFunded: 0,
    other: 2551706,
  },
  {
    name: "Sam Brown",
    party: "REP",
    state: "NV",
    status: "challenger",
    totalRaised: 24063366,
    individuals: 20606960,
    pacs: 1078736,
    partyCommittees: 52800,
    selfFunded: 0,
    other: 2324870,
  },
  {
    name: "Steve Garvey",
    party: "REP",
    state: "CA",
    status: "open seat",
    totalRaised: 20356133,
    individuals: 20239043,
    pacs: 50349,
    partyCommittees: 0,
    selfFunded: 0,
    other: 66740,
  },
  {
    name: "Tim Scott",
    party: "REP",
    state: "SC",
    status: "incumbent",
    totalRaised: 18856383,
    individuals: 16176071,
    pacs: 730400,
    partyCommittees: 0,
    selfFunded: 0,
    other: 1949912,
  },
  {
    name: "Tim Kaine",
    party: "DEM",
    state: "VA",
    status: "incumbent",
    totalRaised: 18308454,
    individuals: 10885218,
    pacs: 2112230,
    partyCommittees: 1000,
    selfFunded: 0,
    other: 5310007,
  },
  {
    name: "John Kennedy",
    party: "REP",
    state: "LA",
    status: "incumbent",
    totalRaised: 15625988,
    individuals: 13511810,
    pacs: 96175,
    partyCommittees: 0,
    selfFunded: 0,
    other: 2018003,
  },
];

// Pulls colors from the CSS custom properties so the chart always matches the page
const css = getComputedStyle(document.documentElement);
const token = (name) => css.getPropertyValue(name).trim();

const colors = { DEM: token("--dem"), REP: token("--rep") };
const partyNames = { DEM: "Democratic", REP: "Republican" };
// Formats dollars as millions. Used for axis ticks and tooltips
const fmt = (v) => "$" + (v / 1e6).toFixed(1) + "M";

// Chart state id which money source is shown and which party is drilled into
let metric = "totalRaised";
let party = null;

const metricToggle = document.getElementById("metricToggle");
const backButton = document.getElementById("back");

Chart.defaults.color = token("--ink");
Chart.defaults.borderColor = token("--rule");
Chart.defaults.font.family = "Inter, system-ui, sans-serif";

const chart = new Chart(document.getElementById("FECChart"), {
  type: "bar",
  data: { labels: [], datasets: [{ data: [], backgroundColor: [] }] },
  options: {
    // Fill the chart-wrap box instead of forcing Chart.js's default 2:1 shape
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },

      title: {
        display: true,
        font: {
          family: "'Playfair Display', Georgia, serif",
          size: 20,
          weight: "normal",
        },
        padding: { bottom: 16 },
      },
      // ctx.raw is the bars unformatted dollar value
      tooltip: { callbacks: { label: (ctx) => fmt(ctx.raw) } },
    },
    scales: { y: { ticks: { callback: fmt } } },
    // els = bars under the click. Drill-down only works from the party view.
    // Bar 0 is always Democrats because update() sets labels in that order
    onClick: (e, els) => {
      if (!party && els.length) {
        party = els[0].index === 0 ? "DEM" : "REP";
        update();
      }
    },
  },
});

// Redraws the chart for the current metric and party state
function update() {
  const label = metricToggle.querySelector(".active").textContent.trim();
  if (!party) {
    // Party view is one bar per party summing the selected metric across its candidates
    const sum = (p) =>
      FECData.filter((d) => d.party === p).reduce((s, d) => s + d[metric], 0);

    chart.data.labels = ["Democrats", "Republicans"];
    chart.data.datasets[0].data = [sum("DEM"), sum("REP")];
    chart.data.datasets[0].backgroundColor = [colors.DEM, colors.REP];
    chart.options.plugins.title.text = `${label} by Party, 2024 Senate Races`;
  } else {
    // Candidate view is one partys candidates ranked highest to lowest on the selected metric
    const rows = FECData.filter((d) => d.party === party).sort(
      (a, b) => b[metric] - a[metric],
    );

    chart.data.labels = rows.map((d) => d.name);
    chart.data.datasets[0].data = rows.map((d) => d[metric]);
    chart.data.datasets[0].backgroundColor = colors[party];
    chart.options.plugins.title.text = `${label}: ${partyNames[party]} Candidates, 2024 Senate Races`;
  }

  // Back button only appears in the candidate view
  backButton.hidden = !party;
  chart.update();
}

// closest() catches clicks that land on text inside a button; clicks on gaps are ignored
metricToggle.addEventListener("click", (e) => {
  const btn = e.target.closest("button");
  if (!btn) return;
  metricToggle.querySelector(".active").classList.remove("active");
  btn.classList.add("active");
  metric = btn.dataset.metric;
  update();
});

backButton.addEventListener("click", () => {
  party = null;
  update();
});

update();
