export interface Product {
  id: string;
  name: string;
  size: string;
  variant: string;
  tab: "valves" | "saddles" | "fittings" | "bathroom" | "agri";
  img: string;
}

export const CATALOG: Product[] = [
  // ════════════════════════════════
  // CATEGORY 1: BALL VALVES & CORE PIPING VALVES
  // ════════════════════════════════
  {
    id: "1",
    name: "Solid Seal Ball Valve (Short Handle)",
    size: '1/2" (20 mm) to 4" (110 mm) — includes 1/2", 3/4", 1", 1¼", 1½", 2", 2½", 3", 4"',
    variant: "Black, White & Grey varieties available",
    tab: "valves",
    img: "Picture1.png"
  },
  {
    id: "10",
    name: "Long Handle Solid Seal Ball Valve",
    size: '1/2" (20 mm) to 4" (110 mm) — includes 1/2", 3/4", 1", 1¼", 1½", 2", 2½", 3", 4"',
    variant: "Black, White & Grey — Premium Heavy Cast",
    tab: "valves",
    img: "Picture10.png"
  },
  {
    id: "19",
    name: "M.S. Handle Solid Ball Valve",
    size: '2" (63 mm) to 8" (200 mm) — includes 2", 2½", 3", 4", 5", 6", 7", 8"',
    variant: "Black, White — Standard Industrial High-Grade Castings",
    tab: "valves",
    img: "Picture19.jpg"
  },
  {
    id: "27",
    name: "CPVC Ball Valve (High Temperature)",
    size: '1/2" (20 mm) to 4" (110 mm) — includes 1/2", 3/4", 1", 1¼", 1½", 2", 2½", 3", 4"',
    variant: "Cream / Orange — Hot-Water Mold Execution",
    tab: "valves",
    img: "Picture27.png"
  },
  {
    id: "36",
    name: "R-UPVC Rigid Ball Valve",
    size: '1/2" (20 mm) to 4" (110 mm) — includes 1/2", 3/4", 1", 1¼", 1½", 2", 2½", 3", 4"',
    variant: "Grey — Standard Industrial Matte Finish",
    tab: "valves",
    img: "Picture36.png"
  },
  {
    id: "45",
    name: "PP. UPVC Hybrid Ball Valve",
    size: '1/2" (20 mm) to 4" (110 mm) — includes 1/2", 3/4", 1", 1¼", 1½", 2", 2½", 3", 4"',
    variant: "White / Grey — Composite Formulation",
    tab: "valves",
    img: "Picture45.jpg"
  },
  {
    id: "54",
    name: "Screwed End Flange Valve",
    size: "15 mm to 250 mm (ranges: 15–65 mm & 80–250 mm)",
    variant: "Black — Solid Heavy Matte Compound",
    tab: "valves",
    img: "Picture20.jpg"
  },
  {
    id: "56",
    name: "Male Female Compact Utility Valve",
    size: '1" (25 mm)',
    variant: "Black Body / Blue Accent Lever",
    tab: "valves",
    img: "Picture15.png"
  },
  {
    id: "57",
    name: "MTA Rain Pipe Pressure Valve",
    size: '1" (25 mm)',
    variant: "Black Body / Blue Accent Lever",
    tab: "valves",
    img: "Picture16.png"
  },
  {
    id: "58",
    name: "Three-Way Multi Routing Flow Valve",
    size: '1/2" (20 mm) to 4" (110 mm) — includes 1/2", 3/4", 1", 1¼", 1½", 2", 2½", 3", 4"',
    variant: "Grey / White — Selector Shell Housing",
    tab: "valves",
    img: "Picture58.png"
  },
  {
    id: "67",
    name: "Single Piece Ball Valve (Plain Socket)",
    size: "50 mm to 110 mm",
    variant: "Grey — Solid Industrial Dark Grey Casting",
    tab: "valves",
    img: "Picture8.png"
  },
  {
    id: "68",
    name: "Single Piece Ball Valve (Threaded End)",
    size: "50 mm to 110 mm",
    variant: "Grey — Solid Industrial Dark Grey Casting",
    tab: "valves",
    img: "Picture8.png"
  },
  {
    id: "69",
    name: "Prince Utility Ball Valve (Plain Slip)",
    size: "15 mm to 100 mm (all sizes)",
    variant: "Blue / Black — High-Vis Toggle Combo",
    tab: "valves",
    img: "Picture1.png"
  },
  {
    id: "70",
    name: "Prince Utility Ball Valve (Threaded)",
    size: "15 mm to 100 mm (all sizes)",
    variant: "Blue / Black — High-Vis Toggle Combo",
    tab: "valves",
    img: "Picture2.png"
  },
  {
    id: "373",
    name: "Rigid PVC Ball Valve (Short Handle)",
    size: '1/2" to 4" (20 mm to 110 mm)',
    variant: "Grey — Standard Industrial Finish",
    tab: "valves",
    img: "Picture373.png"
  },
  {
    id: "382",
    name: "Rigid PVC Ball Valve (Long Handle)",
    size: '1/2" to 4" (20 mm to 110 mm)',
    variant: "Grey — Standard Industrial Finish",
    tab: "valves",
    img: "Picture382.png"
  },
  {
    id: "391",
    name: "Rigid PVC Ball Valve (Long Handle — White)",
    size: '1/2" to 4" (20 mm to 110 mm)',
    variant: "White — Architectural Smooth Pure White Mold",
    tab: "valves",
    img: "Picture24.png"
  },
  {
    id: "368",
    name: "Plastic MDPE Compression Line Ball Valve",
    size: "20 mm",
    variant: "Black Core Body + Bright Blue Nut",
    tab: "valves",
    img: "Picture206.png"
  },

  // ════════════════════════════════
  // CATEGORY 2: NRV / FOOT VALVES & SADDLES
  // ════════════════════════════════
  {
    id: "71",
    name: "N.R.V. Check Valve (Nut-Bolt Ball Type)",
    size: "50 mm to 160 mm (all sizes)",
    variant: "Black — Heavy Shielded Matte Compound",
    tab: "saddles",
    img: "Picture21.png"
  },
  {
    id: "72",
    name: "Solid NRV (Plain Ball Type)",
    size: "50 mm to 160 mm (all sizes)",
    variant: "Black — Heavy Shielded Matte Compound",
    tab: "saddles",
    img: "Picture2.png"
  },
  {
    id: "73",
    name: "Solid NRV (Threaded Ball Type)",
    size: "50 mm to 160 mm (all sizes)",
    variant: "Black — Heavy Shielded Matte Compound",
    tab: "saddles",
    img: "Picture2.png"
  },
  {
    id: "74",
    name: "Solid NRV (Flanged Block Type)",
    size: "50 mm to 160 mm (all sizes)",
    variant: "Black — Heavy Shielded Matte Compound",
    tab: "saddles",
    img: "Picture21.png"
  },
  {
    id: "76",
    name: "Service Main Branch Saddle (Black)",
    size: '1½" to 10" (ranges: 1½"–4" & 5"–10")',
    variant: "Black — High-Impact Industrial Resin",
    tab: "saddles",
    img: "Picture25.png"
  },
  {
    id: "78",
    name: "Pipe Support Anchoring Saddle (Grey)",
    size: '1½" to 10" (ranges: 1½"–4" & 5"–10")',
    variant: "Grey — Engineered High-Density Casting",
    tab: "saddles",
    img: "Picture25.png"
  },
  {
    id: "80",
    name: "D-Joint Leak Containment Sleeve — Short (Black)",
    size: "2\" to 10\" (ranges: 2\"–5\" & 6\"–10\")",
    variant: "Black — High-Pressure Carbon Leak Sleeve",
    tab: "saddles",
    img: "Picture26.png"
  },
  {
    id: "82",
    name: "D-Joint Leak Containment Sleeve — Long (Black)",
    size: "2\" to 10\" (ranges: 2\"–5\" & 6\"–10\")",
    variant: "Black — High-Pressure Carbon Leak Sleeve",
    tab: "saddles",
    img: "Picture26.png"
  },
  {
    id: "88",
    name: "Industrial Pipe Flange (Open)",
    size: '2" to 6"',
    variant: "Black — Solid Machined Carbon Poly",
    tab: "saddles",
    img: "Picture28.png"
  },
  {
    id: "89",
    name: "Industrial Pipe Flange (Close Blind)",
    size: '2" to 10"',
    variant: "Black — Solid Machined Carbon Poly",
    tab: "saddles",
    img: "Picture28.png"
  },
  {
    id: "90",
    name: "Industrial Pipe Flange (Taper TEL Profile)",
    size: '2" to 10"',
    variant: "Black — Solid Machined Carbon Poly",
    tab: "saddles",
    img: "Picture28.png"
  },
  {
    id: "91",
    name: "Industrial Flange with Collar Ring",
    size: '4"',
    variant: "Black — Solid Machined Carbon Poly",
    tab: "saddles",
    img: "Picture28.png"
  },
  {
    id: "93",
    name: "Heavy Structural Deep Well Bore Cap",
    size: '4" to 10"',
    variant: "Black — High-Impact Matte Resin",
    tab: "saddles",
    img: "Picture34.png"
  },
  {
    id: "119",
    name: "Service Saddle (White)",
    size: '1¼" to 6" (all sizes)',
    variant: "White — Pristine Sanitary Grade",
    tab: "saddles",
    img: "Picture118.png"
  },
  {
    id: "120",
    name: "Pipe Support Anchoring Saddle (White)",
    size: '2" to 6"',
    variant: "White — Pristine Sanitary Grade",
    tab: "saddles",
    img: "Picture118.png"
  },
  {
    id: "121",
    name: "D-Joint Repair Sleeve — Short (White)",
    size: "2\" to 10\" (all sizes)",
    variant: "White — Pristine Sanitary Grade",
    tab: "saddles",
    img: "Picture118.png"
  },
  {
    id: "122",
    name: "D-Joint Repair Sleeve — Long (White)",
    size: "2½\" to 10\" (all sizes)",
    variant: "White — Pristine Sanitary Grade",
    tab: "saddles",
    img: "Picture118.png"
  },

  // ════════════════════════════════
  // CATEGORY 3: PIPELINE FITTINGS
  // ════════════════════════════════
  {
    id: "92",
    name: "M.T.A. Pipeline Male Threaded Adapter",
    size: '2" to 4"',
    variant: "Black — High-Impact Matte Resin",
    tab: "fittings",
    img: "Picture34.png"
  },
  {
    id: "95",
    name: "90-Degree Pipeline Elbow",
    size: '1¼" to 4" (all sizes)',
    variant: "Grey (Standard) / White (Virgin variant)",
    tab: "fittings",
    img: "Picture34.png"
  },
  {
    id: "97",
    name: "Equal Tee Fluid Distribution Branch",
    size: '1¼" to 4" (all sizes)',
    variant: "Grey (Standard) / White (Virgin variant)",
    tab: "fittings",
    img: "Picture34.png"
  },
  {
    id: "99",
    name: "Inline Straight Joint Coupler Sleeve",
    size: '1¼" to 4" (all sizes)',
    variant: "Grey (Standard) / White (Virgin variant)",
    tab: "fittings",
    img: "Picture34.png"
  },
  {
    id: "101",
    name: "Pipeline Roof Vent Air Breather Cowl",
    size: '1¼" to 4" (all sizes)',
    variant: "Grey — Standard Distribution",
    tab: "fittings",
    img: "Picture34.png"
  },
  {
    id: "102",
    name: "Plain Thread Interlocking Pipe Union",
    size: '2" to 3"',
    variant: "Black — Heavy Injection Solid Mold",
    tab: "fittings",
    img: "Picture15.png"
  },
  {
    id: "103",
    name: "Sanitary Bathroom Nani Trap (White)",
    size: '1¼" to 4" (all sizes)',
    variant: "White — Pristine Sanitary Grade",
    tab: "fittings",
    img: "Picture118.png"
  },
  {
    id: "105",
    name: "Threaded End Cap Pipe Termination",
    size: '1¼" to 4" (all sizes)',
    variant: "Grey — Standard Distribution",
    tab: "fittings",
    img: "Picture34.png"
  },
  {
    id: "106",
    name: "Plain End Cap Pipe Termination",
    size: '1¼" to 4" (all sizes)',
    variant: "Grey — Standard Distribution",
    tab: "fittings",
    img: "Picture34.png"
  },
  {
    id: "159",
    name: "Hose Collar Adapter (Outer Thread)",
    size: "15 mm to 50 mm (all sizes)",
    variant: "Black — Solid Carbon Heavy Matte",
    tab: "fittings",
    img: "Picture69.png"
  },
  {
    id: "161",
    name: "Hose Collar Adapter (Inner Thread)",
    size: "15 mm to 50 mm (all sizes)",
    variant: "Black — Solid Carbon Heavy Matte",
    tab: "fittings",
    img: "Picture69.png"
  },
  {
    id: "163",
    name: "Hose Connector Terminal Socket (Blue)",
    size: "15 mm to 50 mm (all sizes)",
    variant: "Blue — High-Visibility Primary Poly",
    tab: "fittings",
    img: "Picture69.png"
  },
  {
    id: "165",
    name: "Hose Connector Terminal Socket (Black)",
    size: "32 mm to 50 mm (all sizes)",
    variant: "Black — High-Impact Resistant",
    tab: "fittings",
    img: "Picture69.png"
  },
  {
    id: "174",
    name: "Blue Threaded 90-Degree Bend",
    size: "15 mm to 100 mm (all sizes)",
    variant: "Blue — High-Visibility Primary Poly",
    tab: "fittings",
    img: "Picture88.png"
  },
  {
    id: "175",
    name: "Blue Threaded Pipeline Flange",
    size: "40 mm to 100 mm (all sizes)",
    variant: "Blue — High-Visibility Primary Poly",
    tab: "fittings",
    img: "Picture88.png"
  },
  {
    id: "176",
    name: "Bulkhead Tank Nipple Fitting (Blue)",
    size: "15 mm to 80 mm",
    variant: "Blue — High-Visibility Primary Poly",
    tab: "fittings",
    img: "Picture88.png"
  },
  {
    id: "177",
    name: "Bulkhead Tank Nipple Fitting (White)",
    size: "15 mm to 50 mm",
    variant: "White — Pure Alabaster Sanitary",
    tab: "fittings",
    img: "Picture88.png"
  },
  {
    id: "188",
    name: "Fluid Transport Pipe Nipple (Blue)",
    size: '3" (15–25 mm) · 4" (15–40 mm) · 6" (15–65 mm) · 9" (15–65 mm) · 12" (15–65 mm)',
    variant: "Blue — High-Visibility Primary Poly",
    tab: "fittings",
    img: "Picture88.png"
  },
  {
    id: "194",
    name: "P.P. Network Pipeline Connection Elbow",
    size: "15 mm to 80 mm (all sizes)",
    variant: "Blue — High-Visibility Primary Poly",
    tab: "fittings",
    img: "Picture194.png"
  },
  {
    id: "195",
    name: "P.P. Network Pipeline Connection Tee",
    size: "15 mm to 80 mm (all sizes)",
    variant: "Blue — High-Visibility Primary Poly",
    tab: "fittings",
    img: "Picture194.png"
  },
  {
    id: "196",
    name: "P.P. Network Pipeline Coupling",
    size: "15 mm to 80 mm (all sizes)",
    variant: "Blue — High-Visibility Primary Poly",
    tab: "fittings",
    img: "Picture194.png"
  },
  {
    id: "197",
    name: "P.P. Network Pipeline Union",
    size: "15 mm to 80 mm (all sizes)",
    variant: "Blue — High-Visibility Primary Poly",
    tab: "fittings",
    img: "Picture194.png"
  },
  {
    id: "198",
    name: "P.P. Network Pipeline Hex Nipple",
    size: "15 mm to 80 mm (all sizes)",
    variant: "Blue — High-Visibility Primary Poly",
    tab: "fittings",
    img: "Picture194.png"
  },
  {
    id: "199",
    name: "P.P. Internal Network Plug / Bush (Blue)",
    size: "15 mm to 80 mm (all sizes)",
    variant: "Blue — High-Visibility Primary Poly",
    tab: "fittings",
    img: "Picture194.png"
  },
  {
    id: "200",
    name: "P.P. Internal Network Plug / Bush (Black)",
    size: "15 mm to 25 mm",
    variant: "Black — High-Impact Resistant Matte",
    tab: "fittings",
    img: "Picture194.png"
  },
  {
    id: "201",
    name: "P.P. Retaining Network Pipe Cap Terminal",
    size: "15 mm to 80 mm (all sizes)",
    variant: "Blue — High-Visibility Primary Poly",
    tab: "fittings",
    img: "Picture194.png"
  },
  {
    id: "349",
    name: "F.T.A. Connector Adapter (Molded Brass Thread)",
    size: "20 mm",
    variant: "Black Body + Machine Knurled Brass",
    tab: "fittings",
    img: "Picture206.png"
  },
  {
    id: "350",
    name: "F.T.A. Connector Adapter (Plain Running Thread)",
    size: "20 mm",
    variant: "Black — Dense UV-Stabilized Matte Poly",
    tab: "fittings",
    img: "Picture206.png"
  },
  {
    id: "361",
    name: "MDPE Pipe Compression End Cap",
    size: "20 mm",
    variant: "Black Core Body + Bright Blue Nut",
    tab: "fittings",
    img: "Picture206.png"
  },
  {
    id: "363",
    name: "MDPE Pipe Compression Straight Union Coupler",
    size: "20 mm",
    variant: "Black Core Body + Bright Blue Nut",
    tab: "fittings",
    img: "Picture206.png"
  },

  // ════════════════════════════════
  // CATEGORY 4: BATHROOM FITTINGS
  // ════════════════════════════════
  {
    id: "180",
    name: "Polypropylene (PP) Core Ball Cock",
    size: "15 mm to 25 mm",
    variant: "White / Blue — Clean Sanitary",
    tab: "bathroom",
    img: "Picture118.png"
  },
  {
    id: "184",
    name: "High-Gloss ABS Core Ball Cock",
    size: "15 mm to 25 mm",
    variant: "White / Chrome Finish",
    tab: "bathroom",
    img: "Picture119.png"
  },
  {
    id: "193",
    name: "PTMT Flexible Braided Connection Hose",
    size: "12\" to 2 MTR lengths",
    variant: "White Base + Stainless Nuts",
    tab: "bathroom",
    img: "Picture118.png"
  },
  {
    id: "204",
    name: "T-Cock Tap",
    size: "15 mm to 25 mm",
    variant: "White / Colored Knobs — Standard & Fancy variants available",
    tab: "bathroom",
    img: "Picture118.png"
  },
  {
    id: "206",
    name: "Pan Cock Faucet Spout",
    size: "15 mm to 25 mm",
    variant: "White / Colored Knobs — Heavy & Deluxe variants available",
    tab: "bathroom",
    img: "Picture118.png"
  },
  {
    id: "208",
    name: "Handi Cock Small Valve Tap",
    size: "15 mm to 20 mm",
    variant: "White / Colored — Ergonomic Design",
    tab: "bathroom",
    img: "Picture118.png"
  },
  {
    id: "210",
    name: "Spring Loaded Sanitary Push Cock",
    size: "15 mm",
    variant: "White — Pristine Smooth Pure",
    tab: "bathroom",
    img: "Picture118.png"
  },
  {
    id: "211",
    name: "Washing Machine Supply Mosco Adapter",
    size: "15 mm to 25 mm",
    variant: "White — Pristine Smooth Pure",
    tab: "bathroom",
    img: "Picture118.png"
  },
  {
    id: "212",
    name: "Concealed Bush Line Wall Valve Cover",
    size: "15 mm to 20 mm",
    variant: "White — Pristine Smooth Pure",
    tab: "bathroom",
    img: "Picture118.png"
  },
  {
    id: "217",
    name: "Aaro Cock (Short / Long Thread)",
    size: "15 mm",
    variant: "White — Pristine Smooth Pure",
    tab: "bathroom",
    img: "Picture118.png"
  },
  {
    id: "219",
    name: "Jug Cock",
    size: "15 mm",
    variant: "White — Pristine Smooth Pure",
    tab: "bathroom",
    img: "Picture118.png"
  },
  {
    id: "222",
    name: "Three Way Elbow",
    size: "15 mm to 25 mm",
    variant: "White — Pristine Smooth Pure",
    tab: "bathroom",
    img: "Picture118.png"
  },
  {
    id: "223",
    name: "Dabba Shower",
    size: "15 mm fitting socket",
    variant: "White — Pristine Smooth Pure",
    tab: "bathroom",
    img: "Picture152.png"
  },
  {
    id: "229",
    name: "PP Polo Bib Cock Series",
    size: '1/2"',
    variant: "White Shell / High-Gloss Colored Handle — Short, Long, Foam, Angle, etc.",
    tab: "bathroom",
    img: "Picture118.png"
  },
  {
    id: "238",
    name: "PP Polo ABS Series",
    size: '1/2"',
    variant: "Chrome Plating Over White Shell — Short Body & Pillar Cock variants",
    tab: "bathroom",
    img: "Picture119.png"
  },
  {
    id: "240",
    name: "PP Mosco Bib Cock Series",
    size: '1/2"',
    variant: "Full Branded Colored Poly — Short, Long, Nozzle, Foam Flow, Angle, Pillar variants",
    tab: "bathroom",
    img: "Picture118.png"
  },
  {
    id: "246",
    name: "Sink Coupling",
    size: "1¼\" × 3\" and 1¼\" × 4\"",
    variant: "White / Grey — Standard Structural Run",
    tab: "bathroom",
    img: "Picture118.png"
  },
  {
    id: "249",
    name: "West Coupling",
    size: "1¾\"",
    variant: "White / Grey — Standard Structural Run",
    tab: "bathroom",
    img: "Picture118.png"
  },
  {
    id: "250",
    name: "PP Royal Bib Cock Series",
    size: '1/2"',
    variant: "Premium White/Grey — Short, Long, Nozzle, Foam Flow, 2-Way, Angle Cock variants",
    tab: "bathroom",
    img: "Picture118.png"
  },
  {
    id: "256",
    name: "PP Royal Swan Neck Sink Cock",
    size: '1/2"',
    variant: "Premium White / Grey",
    tab: "bathroom",
    img: "Picture118.png"
  },
  {
    id: "258",
    name: "Turbo Bib Cock Series",
    size: '1/2"',
    variant: "Dual Tone Accent — Short, Long, Nozzle, Foam Flow, Angle Cock variants",
    tab: "bathroom",
    img: "Picture118.png"
  },
  {
    id: "263",
    name: "Zibra Bib Cock Series",
    size: '1/2"',
    variant: "Zebra Stripe / Black & White — Short & Long Body variants",
    tab: "bathroom",
    img: "Picture118.png"
  },
  {
    id: "265",
    name: "Corsa Bib Cock",
    size: '1/2"',
    variant: "Standard White / Grey Framework",
    tab: "bathroom",
    img: "Picture118.png"
  },
  {
    id: "266",
    name: "Diamond Bib Cock",
    size: '1/2"',
    variant: "Premium Glossy High-Mirror Polishing",
    tab: "bathroom",
    img: "Picture118.png"
  },
  {
    id: "267",
    name: "U-PVC Bib Cock",
    size: '1/2"',
    variant: "Ivory / White Adaptation",
    tab: "bathroom",
    img: "Picture118.png"
  },
  {
    id: "268",
    name: "Fancy Bib Cock Series",
    size: '1/2"',
    variant: "Elegant White/Colored — Short, Long, Nozzle, Foam Flow, Angle, Pillar variants",
    tab: "bathroom",
    img: "Picture118.png"
  },
  {
    id: "274",
    name: "Classic Bib Cock Series",
    size: '1/2"',
    variant: "Classic White — Short, Long, Foam, Angle, Pillar, Washing Machine variants",
    tab: "bathroom",
    img: "Picture118.png"
  },
  {
    id: "281",
    name: "Star Bib Cock Series",
    size: '1/2" to 1"',
    variant: "White/Blue Accent — Short, Long, Nozzle, Washing Machine variants",
    tab: "bathroom",
    img: "Picture118.png"
  },
  {
    id: "285",
    name: "Fancy Crystal Bib Cock Series",
    size: '1/2"',
    variant: "Crystal Transparent Synthetic Polymer — Short, Long, Foam, Angle, Pillar variants",
    tab: "bathroom",
    img: "Picture118.png"
  },
  {
    id: "291",
    name: "Folding Gutter Jali",
    size: "6\" × 6\"",
    variant: "White / Grey — Standard Structural",
    tab: "bathroom",
    img: "Picture118.png"
  },
  {
    id: "292",
    name: "ABS Slim Shower",
    size: "4\"×4\" (Square) · 5\"×5\" (Round) · 6\"×6\" (Square)",
    variant: "Chrome Plating Over White Core",
    tab: "bathroom",
    img: "Picture152.png"
  },
  {
    id: "295",
    name: "PP Slim & Deluxe Shower",
    size: "3\" and 4\" (Round)",
    variant: "Standard Matte White / Grey",
    tab: "bathroom",
    img: "Picture152.png"
  },
  {
    id: "297",
    name: "Waste Pipe (Standard)",
    size: "1¼\" × 2.5 FT and 1¼\" × 3 FT",
    variant: "White / Grey — Corrugated Flexible Resin",
    tab: "bathroom",
    img: "Picture152.png"
  },
  {
    id: "299",
    name: "Royal Spring Waste Pipe",
    size: "1¼\"",
    variant: "White — Reinforced Stretchable Pure Poly",
    tab: "bathroom",
    img: "Picture152.png"
  },
  {
    id: "300",
    name: "Super Flow Waste Pipe",
    size: "1¼\" × 2.5 FT and 1¼\" × 3 FT",
    variant: "White — Smooth Non-Clog Internal Layer",
    tab: "bathroom",
    img: "Picture152.png"
  },

  // ════════════════════════════════
  // CATEGORY 5: AGRI IRRIGATION
  // ════════════════════════════════
  {
    id: "94",
    name: "Back Flow NRV",
    size: "2\" to 6\" (all sizes)",
    variant: "Black — Dense UV-Stabilized",
    tab: "agri",
    img: "Picture21.png"
  },
  {
    id: "115",
    name: "H.B. Green Foot Valve",
    size: "50 mm to 100 mm",
    variant: "Green — High-Visibility Forest Cast",
    tab: "agri",
    img: "Picture115.png"
  },
  {
    id: "124",
    name: "Foot Valve (Spring)",
    size: "15 mm to 25 mm (Blue/Black) and 15 mm to 100 mm (Full Range, Black)",
    variant: "Blue / Black or Pure Black",
    tab: "agri",
    img: "Picture65.png"
  },
  {
    id: "125",
    name: "Nipple Foot Valve (Flap)",
    size: "15 mm to 25 mm",
    variant: "Blue / Black",
    tab: "agri",
    img: "Picture65.png"
  },
  {
    id: "126",
    name: "Nipple Foot Valve (Spring)",
    size: "15 mm to 25 mm",
    variant: "Blue / Black",
    tab: "agri",
    img: "Picture65.png"
  },
  {
    id: "127",
    name: "Spring N.R.V.",
    size: "15 mm to 25 mm",
    variant: "Blue / Black",
    tab: "agri",
    img: "Picture65.png"
  },
  {
    id: "129",
    name: "Air Valve",
    size: "15 mm to 50 mm",
    variant: "Black — Solid Carbon Reinforced",
    tab: "agri",
    img: "Picture65.png"
  },
  {
    id: "133",
    name: "Foot Valve (Threaded)",
    size: "15 mm to 150 mm — includes 15, 20, 25, 32, 40, 50, 65, 80, 100, 125, 150 mm",
    variant: "Black — Solid Carbon Reinforced",
    tab: "agri",
    img: "Picture65.png"
  },
  {
    id: "141",
    name: "Nut Bolt Foot Valve",
    size: "32 mm to 150 mm — includes 32, 40, 50, 65, 80, 100, 125, 150 mm",
    variant: "Black — Solid Carbon Reinforced",
    tab: "agri",
    img: "Picture65.png"
  },
  {
    id: "148",
    name: "Bore Foot Valve",
    size: "50 mm to 100 mm — includes 50, 65, 80, 100 mm",
    variant: "Black — Solid Carbon Reinforced",
    tab: "agri",
    img: "Picture65.png"
  },
  {
    id: "152",
    name: "Non Return Valve (Standard)",
    size: "32 mm to 150 mm — includes 32, 40, 50, 65, 80, 100, 125, 150 mm",
    variant: "Black — Thick-Wall Anti-Corrosive Shield",
    tab: "agri",
    img: "Picture65.png"
  },
  {
    id: "226",
    name: "Water Softener",
    size: '1/2"',
    variant: "White / Blue Cap",
    tab: "agri",
    img: "Picture118.png"
  },
  {
    id: "227",
    name: "Water Filter",
    size: '1/2"',
    variant: "Clear / Blue Intake",
    tab: "agri",
    img: "Picture118.png"
  },
  {
    id: "228",
    name: "Mini Water Filter",
    size: '1/2"',
    variant: "Clear / Blue Intake",
    tab: "agri",
    img: "Picture118.png"
  },
  {
    id: "302",
    name: "Drip Jointer (Black)",
    size: "12 mm to 20 mm",
    variant: "Black — High-Density Solid Matte",
    tab: "agri",
    img: "Picture181.png"
  },
  {
    id: "303",
    name: "Drip Jointer (Blue)",
    size: "16 mm",
    variant: "Blue — High-Visibility Primary Poly",
    tab: "agri",
    img: "Picture181.png"
  },
  {
    id: "311",
    name: "Lateral Cock (Black)",
    size: "12 mm to 20 mm",
    variant: "Black — High-Density Solid Matte",
    tab: "agri",
    img: "Picture181.png"
  },
  {
    id: "328",
    name: "Mini Sprinkler",
    size: '1/2"',
    variant: "Black Frame + Green Swivel Spindle",
    tab: "agri",
    img: "Picture181.png"
  },
  {
    id: "331",
    name: "Venturi Set",
    size: "1½\" to 2½\"",
    variant: "Green — Chemical Resistant Matte",
    tab: "agri",
    img: "Picture115.png"
  },
  {
    id: "332",
    name: "Flush Valve",
    size: "1½\" to 2½\"",
    variant: "Black — Dense UV-Stabilized",
    tab: "agri",
    img: "Picture65.png"
  },
  {
    id: "338",
    name: "Rain Pipe Jointer",
    size: "1¼\" to 1½\"",
    variant: "Black — Dense UV-Stabilized",
    tab: "agri",
    img: "Picture194.png"
  },
  {
    id: "341",
    name: "Rain Pipe Cock",
    size: "1¼\" to 1½\"",
    variant: "Black — Dense UV-Stabilized",
    tab: "agri",
    img: "Picture194.png"
  },
  {
    id: "346",
    name: "Rain Pipe (Semi & Virgin — 100 MTR Roll)",
    size: "40 mm",
    variant: "Black — Dense UV-Stabilized",
    tab: "agri",
    img: "Picture181.png"
  }
];

// Ensure items are ordered by ID numerically
CATALOG.sort((a, b) => parseInt(a.id) - parseInt(b.id));
