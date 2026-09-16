export interface LocationItem {
  id: string
  name: string
  shortName: string
  subtitle: string
  type: "city" | "airport" | "landmark" | "area" | "station"
  iata?: string
  keywords: string[]
}

export const ALL_INDIAN_AIRPORTS: LocationItem[] = [
  {
    id: "apt-stv",
    name: "Surat Airport (STV)",
    shortName: "Surat Airport",
    subtitle: "Dumas Road, Surat, Gujarat",
    type: "airport",
    iata: "STV",
    keywords: ["surat", "sur", "stv", "surat airport", "dumas", "vesu", "magdalla", "gujarat"]
  },
  {
    id: "apt-bom",
    name: "Mumbai Airport (BOM) - T1 / T2",
    shortName: "Mumbai Airport",
    subtitle: "Chhatrapati Shivaji Maharaj Intl Airport, Sahar, Mumbai, Maharashtra",
    type: "airport",
    iata: "BOM",
    keywords: ["mumbai", "mum", "bom", "mumbai airport", "chhatrapati shivaji", "terminal 1", "terminal 2", "sahar", "vile parle", "andheri", "maharashtra"]
  },
  {
    id: "apt-amd",
    name: "Ahmedabad Airport (AMD)",
    shortName: "Ahmedabad Airport",
    subtitle: "Sardar Vallabhbhai Patel Intl Airport, Hansol, Ahmedabad, Gujarat",
    type: "airport",
    iata: "AMD",
    keywords: ["ahmedabad", "ahem", "ahe", "amd", "ahmedabad airport", "sardar vallabhbhai", "hansol", "gandhinagar", "gujarat"]
  },
  {
    id: "apt-del",
    name: "Delhi Airport (DEL) - IGI T1/T2/T3",
    shortName: "Delhi Airport",
    subtitle: "Indira Gandhi International Airport, New Delhi, NCR",
    type: "airport",
    iata: "DEL",
    keywords: ["delhi", "del", "igi", "delhi airport", "indira gandhi", "new delhi", "t3", "t2", "t1", "aerocity", "ncr"]
  },
  {
    id: "apt-idr",
    name: "Indore Airport (IDR)",
    shortName: "Indore Airport",
    subtitle: "Devi Ahilya Bai Holkar Airport, Indore, Madhya Pradesh",
    type: "airport",
    iata: "IDR",
    keywords: ["indore", "ind", "in", "idr", "indore airport", "devi ahilya", "pitampur", "madhya pradesh", "mp"]
  },
  {
    id: "apt-bdq",
    name: "Vadodara Airport (BDQ)",
    shortName: "Vadodara Airport",
    subtitle: "Harni Road, Vadodara, Gujarat",
    type: "airport",
    iata: "BDQ",
    keywords: ["vadodara", "baroda", "vad", "bdq", "vadodara airport", "harni", "gujarat"]
  },
  {
    id: "apt-hsr",
    name: "Rajkot International Airport (HSR)",
    shortName: "Rajkot Airport",
    subtitle: "Hirasar, Rajkot, Gujarat",
    type: "airport",
    iata: "HSR",
    keywords: ["rajkot", "raj", "hsr", "rajkot airport", "hirasar", "gujarat"]
  },
  {
    id: "apt-udr",
    name: "Udaipur Airport (UDR)",
    shortName: "Udaipur Airport",
    subtitle: "Maharana Pratap Airport, Dabok, Udaipur, Rajasthan",
    type: "airport",
    iata: "UDR",
    keywords: ["udaipur", "uda", "udr", "udaipur airport", "dabok", "maharana pratap", "rajasthan"]
  },
  {
    id: "apt-blr",
    name: "Bengaluru Airport (BLR)",
    shortName: "Bengaluru Airport",
    subtitle: "Kempegowda Intl Airport, Devanahalli, Bengaluru, Karnataka",
    type: "airport",
    iata: "BLR",
    keywords: ["bengaluru", "bangalore", "blr", "kempegowda", "devanahalli", "karnataka"]
  },
  {
    id: "apt-pnq",
    name: "Pune Airport (PNQ)",
    shortName: "Pune Airport",
    subtitle: "Lohegaon, Pune, Maharashtra",
    type: "airport",
    iata: "PNQ",
    keywords: ["pune", "pun", "pnq", "lohegaon", "viman nagar", "maharashtra"]
  },
  {
    id: "apt-bho",
    name: "Bhopal Airport (BHO)",
    shortName: "Bhopal Airport",
    subtitle: "Raja Bhoj Airport, Bhopal, Madhya Pradesh",
    type: "airport",
    iata: "BHO",
    keywords: ["bhopal", "bho", "raja bhoj", "gandhi nagar", "madhya pradesh", "mp"]
  },
  {
    id: "apt-jai",
    name: "Jaipur Airport (JAI)",
    shortName: "Jaipur Airport",
    subtitle: "Sanganer, Jaipur, Rajasthan",
    type: "airport",
    iata: "JAI",
    keywords: ["jaipur", "jai", "sanganer", "pink city", "rajasthan"]
  },
  {
    id: "apt-goi",
    name: "Goa Dabolim Airport (GOI)",
    shortName: "Goa Dabolim Airport",
    subtitle: "Dabolim, Vasco da Gama, Goa",
    type: "airport",
    iata: "GOI",
    keywords: ["goa", "goi", "dabolim", "vasco", "south goa"]
  },
  {
    id: "apt-gox",
    name: "Goa Mopa Airport (GOX)",
    shortName: "Goa Mopa Airport",
    subtitle: "Manohar Intl Airport, Mopa, Pernem, Goa",
    type: "airport",
    iata: "GOX",
    keywords: ["goa", "gox", "mopa", "manohar", "pernem", "north goa"]
  },
  {
    id: "apt-ayo",
    name: "Ayodhya Airport (AYJ)",
    shortName: "Ayodhya Airport",
    subtitle: "Maharishi Valmiki Intl Airport, Ayodhya, Uttar Pradesh",
    type: "airport",
    iata: "AYJ",
    keywords: ["ayodhya", "ayo", "ayj", "maharishi valmiki", "uttar pradesh", "up"]
  },
  {
    id: "apt-ccu",
    name: "Kolkata Airport (CCU)",
    shortName: "Kolkata Airport",
    subtitle: "Netaji Subhash Chandra Bose Intl Airport, Dum Dum, Kolkata",
    type: "airport",
    iata: "CCU",
    keywords: ["kolkata", "ccu", "dum dum", "netaji subhash", "west bengal"]
  },
  {
    id: "apt-maa",
    name: "Chennai Airport (MAA)",
    shortName: "Chennai Airport",
    subtitle: "Meenambakkam, Chennai, Tamil Nadu",
    type: "airport",
    iata: "MAA",
    keywords: ["chennai", "maa", "meenambakkam", "madras", "tamil nadu"]
  },
  {
    id: "apt-hyd",
    name: "Hyderabad Airport (HYD)",
    shortName: "Hyderabad Airport",
    subtitle: "Rajiv Gandhi Intl Airport, Shamshabad, Hyderabad, Telangana",
    type: "airport",
    iata: "HYD",
    keywords: ["hyderabad", "hyd", "rajiv gandhi", "shamshabad", "telangana"]
  },
  {
    id: "apt-cok",
    name: "Cochin / Kochi Airport (COK)",
    shortName: "Cochin Airport",
    subtitle: "Cochin International Airport, Nedumbassery, Kochi, Kerala",
    type: "airport",
    iata: "COK",
    keywords: ["cochin", "kochi", "cok", "nedumbassery", "kerala"]
  },
  {
    id: "apt-ixc",
    name: "Chandigarh Airport (IXC)",
    shortName: "Chandigarh Airport",
    subtitle: "Shaheed Bhagat Singh Intl Airport, Mohali, Punjab",
    type: "airport",
    iata: "IXC",
    keywords: ["chandigarh", "ixc", "mohali", "bhagat singh", "punjab", "haryana"]
  },
  {
    id: "apt-atq",
    name: "Amritsar Airport (ATQ)",
    shortName: "Amritsar Airport",
    subtitle: "Sri Guru Ram Dass Jee Intl Airport, Raja Sansi, Amritsar, Punjab",
    type: "airport",
    iata: "ATQ",
    keywords: ["amritsar", "atq", "raja sansi", "punjab"]
  },
  {
    id: "apt-vns",
    name: "Varanasi Airport (VNS)",
    shortName: "Varanasi Airport",
    subtitle: "Lal Bahadur Shastri Intl Airport, Babatpur, Varanasi, UP",
    type: "airport",
    iata: "VNS",
    keywords: ["varanasi", "vns", "babatpur", "banaras", "kashi", "uttar pradesh", "up"]
  },
  {
    id: "apt-lko",
    name: "Lucknow Airport (LKO)",
    shortName: "Lucknow Airport",
    subtitle: "Chaudhary Charan Singh Intl Airport, Amausi, Lucknow, UP",
    type: "airport",
    iata: "LKO",
    keywords: ["lucknow", "lko", "amausi", "chaudhary charan singh", "uttar pradesh", "up"]
  },
  {
    id: "apt-pat",
    name: "Patna Airport (PAT)",
    shortName: "Patna Airport",
    subtitle: "Jayprakash Narayan Airport, Sheikhpura, Patna, Bihar",
    type: "airport",
    iata: "PAT",
    keywords: ["patna", "pat", "jayprakash narayan", "bihar"]
  },
  {
    id: "apt-ded",
    name: "Dehradun Airport (DED)",
    shortName: "Dehradun Airport",
    subtitle: "Jolly Grant Airport, Dehradun, Uttarakhand",
    type: "airport",
    iata: "DED",
    keywords: ["dehradun", "ded", "jolly grant", "uttarakhand", "rishikesh", "haridwar"]
  },
  {
    id: "apt-sxr",
    name: "Srinagar Airport (SXR)",
    shortName: "Srinagar Airport",
    subtitle: "Sheikh ul-Alam Intl Airport, Budgam, Srinagar, J&K",
    type: "airport",
    iata: "SXR",
    keywords: ["srinagar", "sxr", "kashmir", "jammu kashmir"]
  },
  {
    id: "apt-nag",
    name: "Nagpur Airport (NAG)",
    shortName: "Nagpur Airport",
    subtitle: "Dr. Babasaheb Ambedkar Intl Airport, Sonegaon, Nagpur, Maharashtra",
    type: "airport",
    iata: "NAG",
    keywords: ["nagpur", "nag", "sonegaon", "maharashtra"]
  },
  {
    id: "apt-isk",
    name: "Nashik Airport (ISK)",
    shortName: "Nashik Airport",
    subtitle: "Ozar Airport, Nashik, Maharashtra",
    type: "airport",
    iata: "ISK",
    keywords: ["nashik", "nasik", "isk", "ozar", "maharashtra"]
  },
  {
    id: "apt-sag",
    name: "Shirdi Airport (SAG)",
    shortName: "Shirdi Airport",
    subtitle: "Kakadi, Shirdi, Ahmednagar, Maharashtra",
    type: "airport",
    iata: "SAG",
    keywords: ["shirdi", "sag", "kakadi", "sai baba", "maharashtra"]
  },
  {
    id: "apt-jdh",
    name: "Jodhpur Airport (JDH)",
    shortName: "Jodhpur Airport",
    subtitle: "Air Force Area, Jodhpur, Rajasthan",
    type: "airport",
    iata: "JDH",
    keywords: ["jodhpur", "jdh", "rajasthan"]
  },
  {
    id: "apt-gwl",
    name: "Gwalior Airport (GWL)",
    shortName: "Gwalior Airport",
    subtitle: "Rajmata Vijaya Raje Scindia Airport, Maharajpur, Gwalior, MP",
    type: "airport",
    iata: "GWL",
    keywords: ["gwalior", "gwl", "maharajpur", "madhya pradesh", "mp"]
  },
  {
    id: "apt-jlr",
    name: "Jabalpur Airport (JLR)",
    shortName: "Jabalpur Airport",
    subtitle: "Dumna Airport, Jabalpur, Madhya Pradesh",
    type: "airport",
    iata: "JLR",
    keywords: ["jabalpur", "jlr", "dumna", "madhya pradesh", "mp"]
  },
  {
    id: "apt-rpr",
    name: "Raipur Airport (RPR)",
    shortName: "Raipur Airport",
    subtitle: "Swami Vivekananda Airport, Mana, Raipur, Chhattisgarh",
    type: "airport",
    iata: "RPR",
    keywords: ["raipur", "rpr", "mana", "chhattisgarh"]
  },
  {
    id: "apt-bbi",
    name: "Bhubaneswar Airport (BBI)",
    shortName: "Bhubaneswar Airport",
    subtitle: "Biju Patnaik Intl Airport, Bhubaneswar, Odisha",
    type: "airport",
    iata: "BBI",
    keywords: ["bhubaneswar", "bbi", "biju patnaik", "odisha"]
  },
  {
    id: "apt-gau",
    name: "Guwahati Airport (GAU)",
    shortName: "Guwahati Airport",
    subtitle: "Lokpriya Gopinath Bordoloi Intl Airport, Borjhar, Guwahati, Assam",
    type: "airport",
    iata: "GAU",
    keywords: ["guwahati", "gau", "borjhar", "assam"]
  },
  {
    id: "apt-ixb",
    name: "Bagdogra Airport (IXB)",
    shortName: "Bagdogra Airport",
    subtitle: "Siliguri / Darjeeling Gateway, Bagdogra, West Bengal",
    type: "airport",
    iata: "IXB",
    keywords: ["bagdogra", "ixb", "siliguri", "darjeeling", "west bengal"]
  }
]

export const POPULAR_TRENDING_CITIES: LocationItem[] = [
  {
    id: "surat-city",
    name: "Surat, Gujarat",
    shortName: "Surat",
    subtitle: "Textile & Diamond City, Gujarat",
    type: "city",
    keywords: ["surat", "sur", "stv", "gujarat"]
  },
  {
    id: "amd-city",
    name: "Ahmedabad, Gujarat",
    shortName: "Ahmedabad",
    subtitle: "Heritage City, Gujarat",
    type: "city",
    keywords: ["ahmedabad", "ahem", "ahe", "amd", "gujarat"]
  },
  {
    id: "mum-city",
    name: "Mumbai, Maharashtra",
    shortName: "Mumbai",
    subtitle: "Financial Capital, Maharashtra",
    type: "city",
    keywords: ["mumbai", "mum", "bom", "bombay", "maharashtra"]
  },
  {
    id: "vad-city",
    name: "Vadodara (Baroda), Gujarat",
    shortName: "Vadodara",
    subtitle: "Cultural Capital, Gujarat",
    type: "city",
    keywords: ["vadodara", "baroda", "vad", "bdq", "gujarat"]
  },
  {
    id: "ujj-city",
    name: "Ujjain, Madhya Pradesh",
    shortName: "Ujjain",
    subtitle: "Mahakal Nagari, Madhya Pradesh",
    type: "city",
    keywords: ["ujjain", "ujj", "ujn", "madhya pradesh", "mp"]
  },
  {
    id: "ind-city",
    name: "Indore, Madhya Pradesh",
    shortName: "Indore",
    subtitle: "Cleanest City of India, Madhya Pradesh",
    type: "city",
    keywords: ["indore", "ind", "in", "idr", "madhya pradesh", "mp"]
  },
  {
    id: "cty-udaipur",
    name: "Udaipur, Rajasthan",
    shortName: "Udaipur",
    subtitle: "City of Lakes, Rajasthan",
    type: "city",
    keywords: ["udaipur", "uda", "udr", "lake pichola", "fatehsagar", "rajasthan"]
  },
  {
    id: "cty-pune",
    name: "Pune, Maharashtra",
    shortName: "Pune",
    subtitle: "Hinjewadi / Viman Nagar / Baner, Maharashtra",
    type: "city",
    keywords: ["pune", "pun", "pnq", "hinjewadi", "viman nagar", "baner", "wakad", "maharashtra"]
  },
  {
    id: "cty-rajkot",
    name: "Rajkot, Gujarat",
    shortName: "Rajkot",
    subtitle: "Saurashtra Region, Gujarat",
    type: "city",
    keywords: ["rajkot", "raj", "hsr", "kalawad road", "150 feet ring road", "gujarat"]
  },
  {
    id: "cty-statue-unity",
    name: "Statue of Unity (Kevadia)",
    shortName: "Statue of Unity",
    subtitle: "Ekta Nagar, Kevadia, Gujarat",
    type: "landmark",
    keywords: ["statue of unity", "sou", "kevidia", "kevadia", "ekta nagar", "narmada", "poicha", "gujarat"]
  },
  {
    id: "cty-somnath",
    name: "Somnath, Gujarat",
    shortName: "Somnath",
    subtitle: "Sacred Jyotirlinga Temple, Veraval, Gujarat",
    type: "landmark",
    keywords: ["somnath", "som", "veraval", "jyotirlinga", "gujarat"]
  },
  {
    id: "cty-dwarka",
    name: "Dwarka, Gujarat",
    shortName: "Dwarka",
    subtitle: "Dwarkadhish Temple Dham, Gujarat",
    type: "landmark",
    keywords: ["dwarka", "dwa", "dwarkadhish", "bet dwarka", "gujarat"]
  },
  {
    id: "cty-mount-abu",
    name: "Mount Abu, Rajasthan",
    shortName: "Mount Abu",
    subtitle: "Hill Station, Rajasthan",
    type: "city",
    keywords: ["mount abu", "abu", "nakki lake", "dilwara", "ambaji", "rajasthan"]
  },
  {
    id: "cty-navsari",
    name: "Navsari, Gujarat",
    shortName: "Navsari",
    subtitle: "South Gujarat",
    type: "city",
    keywords: ["navsari", "nav", "gujarat"]
  },
  {
    id: "cty-valsad",
    name: "Valsad, Gujarat",
    shortName: "Valsad",
    subtitle: "South Gujarat",
    type: "city",
    keywords: ["valsad", "val", "tithal", "gujarat"]
  },
  {
    id: "cty-vapi",
    name: "Vapi, Gujarat",
    shortName: "Vapi",
    subtitle: "Industrial Hub, South Gujarat",
    type: "city",
    keywords: ["vapi", "vap", "gujarat"]
  },
  {
    id: "cty-ankleshwar",
    name: "Ankleshwar, Gujarat",
    shortName: "Ankleshwar",
    subtitle: "Industrial Hub, Gujarat",
    type: "city",
    keywords: ["ankleshwar", "ank", "gujarat"]
  },
  {
    id: "cty-bharuch",
    name: "Bharuch, Gujarat",
    shortName: "Bharuch",
    subtitle: "Narmada Riverside, Gujarat",
    type: "city",
    keywords: ["bharuch", "bha", "narmada", "gujarat"]
  },
  {
    id: "cty-shirdi",
    name: "Shirdi, Maharashtra",
    shortName: "Shirdi",
    subtitle: "Sai Baba Temple Dham, Maharashtra",
    type: "landmark",
    keywords: ["shirdi", "shi", "sai baba", "maharashtra"]
  },
  {
    id: "cty-nashik",
    name: "Nashik, Maharashtra",
    shortName: "Nashik",
    subtitle: "Wine Capital / Trimbakeshwar, Maharashtra",
    type: "city",
    keywords: ["nashik", "nas", "nasik", "trimbakeshwar", "maharashtra"]
  },
  {
    id: "cty-delhi",
    name: "Delhi / NCR",
    shortName: "Delhi",
    subtitle: "Capital Region, New Delhi, Gurgaon, Noida",
    type: "city",
    keywords: ["delhi", "del", "new delhi", "ncr", "gurgaon", "gurugram", "noida", "ghaziabad"]
  },
  {
    id: "cty-jaipur",
    name: "Jaipur, Rajasthan",
    shortName: "Jaipur",
    subtitle: "Pink City, Rajasthan",
    type: "city",
    keywords: ["jaipur", "jai", "pink city", "rajasthan"]
  }
]

export const OTHER_INDIAN_LOCATIONS: LocationItem[] = [
  // --- SURAT LOCAL AREAS ---
  {
    id: "surat-vesu",
    name: "Vesu, Surat",
    shortName: "Vesu",
    subtitle: "Vesu Main Road, VIP Road, Surat, Gujarat",
    type: "area",
    keywords: ["vesu", "vip road", "surat", "sur"]
  },
  {
    id: "surat-adajan",
    name: "Adajan, Surat",
    shortName: "Adajan",
    subtitle: "Adajan Patia, L.P. Savani Road, Surat, Gujarat",
    type: "area",
    keywords: ["adajan", "lp savani", "honey park", "surat", "sur"]
  },
  {
    id: "surat-varachha",
    name: "Varachha, Surat",
    shortName: "Varachha",
    subtitle: "Mini Bazar, Hirabaug, Varachha Road, Surat, Gujarat",
    type: "area",
    keywords: ["varachha", "hirabaug", "mini bazar", "surat", "sur"]
  },
  {
    id: "surat-katargam",
    name: "Katargam, Surat",
    shortName: "Katargam",
    subtitle: "Gajera Circle, Katargam, Surat, Gujarat",
    type: "area",
    keywords: ["katargam", "gajera", "surat", "sur"]
  },
  {
    id: "surat-piplod",
    name: "Piplod, Surat",
    shortName: "Piplod",
    subtitle: "Dumas Road, Piplod, Surat, Gujarat",
    type: "area",
    keywords: ["piplod", "vr mall", "surat", "sur"]
  },
  {
    id: "surat-citylight",
    name: "City Light, Surat",
    shortName: "City Light",
    subtitle: "City Light Road, Surat, Gujarat",
    type: "area",
    keywords: ["city light", "citylight", "surat", "sur"]
  },
  {
    id: "surat-althan",
    name: "Althan, Surat",
    shortName: "Althan",
    subtitle: "Althan Canal Road, Surat, Gujarat",
    type: "area",
    keywords: ["althan", "surat", "sur"]
  },
  {
    id: "surat-pal",
    name: "Pal, Surat",
    shortName: "Pal",
    subtitle: "Pal-Hazira Road, Surat, Gujarat",
    type: "area",
    keywords: ["pal", "surat", "sur"]
  },
  {
    id: "surat-kamrej",
    name: "Kamrej, Surat",
    shortName: "Kamrej",
    subtitle: "Kamrej Char Rasta, NH 48, Surat, Gujarat",
    type: "area",
    keywords: ["kamrej", "highway", "surat", "sur"]
  },
  {
    id: "surat-rander",
    name: "Rander, Surat",
    shortName: "Rander",
    subtitle: "Rander Road, Surat, Gujarat",
    type: "area",
    keywords: ["rander", "surat", "sur"]
  },
  {
    id: "surat-stn",
    name: "Surat Railway Station",
    shortName: "Surat Station",
    subtitle: "Station Road, Railway Colony, Surat, Gujarat",
    type: "station",
    keywords: ["surat station", "surat railway station", "stn", "surat", "sur"]
  },

  // --- AHMEDABAD LOCAL AREAS ---
  {
    id: "amd-sg-highway",
    name: "SG Highway, Ahmedabad",
    shortName: "SG Highway",
    subtitle: "Sarkhej - Gandhinagar Highway, Ahmedabad, Gujarat",
    type: "area",
    keywords: ["sg highway", "sarkhej", "gandhinagar", "ahmedabad", "ahem", "amd"]
  },
  {
    id: "amd-satellite",
    name: "Satellite, Ahmedabad",
    shortName: "Satellite",
    subtitle: "Shivranjani, Ramdev Nagar, Satellite, Ahmedabad, Gujarat",
    type: "area",
    keywords: ["satellite", "shivranjani", "ramdev nagar", "ahmedabad", "ahem", "amd"]
  },
  {
    id: "amd-prahladnagar",
    name: "Prahlad Nagar, Ahmedabad",
    shortName: "Prahlad Nagar",
    subtitle: "Corporate Road, Prahlad Nagar, Ahmedabad, Gujarat",
    type: "area",
    keywords: ["prahlad nagar", "prahladnagar", "corporate road", "ahmedabad", "ahem", "amd"]
  },
  {
    id: "amd-vastrapur",
    name: "Vastrapur, Ahmedabad",
    shortName: "Vastrapur",
    subtitle: "Vastrapur Lake, IIM Road, Ahmedabad, Gujarat",
    type: "area",
    keywords: ["vastrapur", "iim", "ahmedabad", "ahem", "amd"]
  },
  {
    id: "amd-navrangpura",
    name: "Navrangpura, Ahmedabad",
    shortName: "Navrangpura",
    subtitle: "CG Road, Navrangpura, Ahmedabad, Gujarat",
    type: "area",
    keywords: ["navrangpura", "cg road", "ahmedabad", "ahem", "amd"]
  },
  {
    id: "amd-bodakdev",
    name: "Bodakdev, Ahmedabad",
    shortName: "Bodakdev",
    subtitle: "Sindhu Bhavan Road, Bodakdev, Ahmedabad, Gujarat",
    type: "area",
    keywords: ["bodakdev", "sindhu bhavan", "sbr", "ahmedabad", "ahem", "amd"]
  },
  {
    id: "amd-maninagar",
    name: "Maninagar, Ahmedabad",
    shortName: "Maninagar",
    subtitle: "Kankaria Lake Area, Maninagar, Ahmedabad, Gujarat",
    type: "area",
    keywords: ["maninagar", "kankaria", "ahmedabad", "ahem", "amd"]
  },
  {
    id: "amd-bopal",
    name: "Bopal, Ahmedabad",
    shortName: "Bopal",
    subtitle: "South Bopal, SP Ring Road, Ahmedabad, Gujarat",
    type: "area",
    keywords: ["bopal", "south bopal", "sp ring road", "ahmedabad", "ahem", "amd"]
  },
  {
    id: "amd-gandhinagar",
    name: "Gandhinagar, Gujarat",
    shortName: "Gandhinagar",
    subtitle: "Capital City, GIFT City, Gujarat",
    type: "city",
    keywords: ["gandhinagar", "gift city", "infocity", "ahmedabad", "ahem", "amd"]
  },
  {
    id: "amd-stn",
    name: "Ahmedabad Railway Station (Kalupur)",
    shortName: "Ahmedabad Station",
    subtitle: "Kalupur, Ahmedabad, Gujarat",
    type: "station",
    keywords: ["ahmedabad station", "kalupur station", "ahmedabad railway station", "amd"]
  },

  // --- MUMBAI LOCAL AREAS ---
  {
    id: "mum-bandra",
    name: "Bandra, Mumbai",
    shortName: "Bandra",
    subtitle: "Bandra West / BKC Bandra Kurla Complex, Mumbai",
    type: "area",
    keywords: ["bandra", "bkc", "bandra kurla complex", "linking road", "mumbai", "mum", "bom"]
  },
  {
    id: "mum-andheri",
    name: "Andheri, Mumbai",
    shortName: "Andheri",
    subtitle: "Andheri East / West, Lokhandwala, SV Road, Mumbai",
    type: "area",
    keywords: ["andheri", "lokhandwala", "jb nagar", "mumbai", "mum", "bom"]
  },
  {
    id: "mum-juhu",
    name: "Juhu, Mumbai",
    shortName: "Juhu",
    subtitle: "Juhu Beach, Vile Parle West, Mumbai",
    type: "area",
    keywords: ["juhu", "vile parle", "mumbai", "mum", "bom"]
  },
  {
    id: "mum-borivali",
    name: "Borivali, Mumbai",
    shortName: "Borivali",
    subtitle: "Borivali West / East, National Park, Mumbai",
    type: "area",
    keywords: ["borivali", "kandivali", "malad", "mumbai", "mum", "bom"]
  },
  {
    id: "mum-dadar",
    name: "Dadar, Mumbai",
    shortName: "Dadar",
    subtitle: "Dadar TT, Shivaji Park, Mumbai",
    type: "area",
    keywords: ["dadar", "shivaji park", "mumbai", "mum", "bom"]
  },
  {
    id: "mum-powai",
    name: "Powai, Mumbai",
    shortName: "Powai",
    subtitle: "Hiranandani Gardens, Powai, Mumbai",
    type: "area",
    keywords: ["powai", "hiranandani", "iit bombay", "mumbai", "mum", "bom"]
  },
  {
    id: "mum-thane",
    name: "Thane, Maharashtra",
    shortName: "Thane",
    subtitle: "Thane West, Ghodbunder Road, Majiwada, Maharashtra",
    type: "city",
    keywords: ["thane", "ghodbunder", "majiwada", "mumbai", "mum"]
  },
  {
    id: "mum-navi-mumbai",
    name: "Navi Mumbai, Maharashtra",
    shortName: "Navi Mumbai",
    subtitle: "Vashi, Belapur, Kharghar, Nerul, Panvel, Maharashtra",
    type: "city",
    keywords: ["navi mumbai", "vashi", "belapur", "kharghar", "panvel", "nerul", "mumbai"]
  },
  {
    id: "mum-csmt",
    name: "Mumbai CSMT / CST Railway Station",
    shortName: "CSMT Station",
    subtitle: "Fort, Chhatrapati Shivaji Maharaj Terminus, Mumbai",
    type: "station",
    keywords: ["csmt", "cst", "mumbai cst", "mumbai station", "fort", "mumbai"]
  },

  // --- VADODARA LOCAL AREAS ---
  {
    id: "vad-alkapuri",
    name: "Alkapuri, Vadodara",
    shortName: "Alkapuri",
    subtitle: "RC Dutt Road, Alkapuri, Vadodara, Gujarat",
    type: "area",
    keywords: ["alkapuri", "vadodara", "baroda", "vad"]
  },
  {
    id: "vad-sayajigunj",
    name: "Sayajigunj, Vadodara",
    shortName: "Sayajigunj",
    subtitle: "MS University Area, Sayajigunj, Vadodara, Gujarat",
    type: "area",
    keywords: ["sayajigunj", "ms university", "vadodara", "baroda", "vad"]
  },
  {
    id: "vad-stn",
    name: "Vadodara Railway Station",
    shortName: "Vadodara Station",
    subtitle: "Sayajigunj, Vadodara, Gujarat",
    type: "station",
    keywords: ["vadodara station", "baroda station", "vadodara railway station"]
  },

  // --- INDORE LOCAL AREAS ---
  {
    id: "ind-vijaynagar",
    name: "Vijay Nagar, Indore",
    shortName: "Vijay Nagar",
    subtitle: "AB Road, Vijay Nagar, Indore, MP",
    type: "area",
    keywords: ["vijay nagar", "vijaynagar", "ab road", "indore", "ind", "in", "mp"]
  },
  {
    id: "ind-palasia",
    name: "Palasia, Indore",
    shortName: "Palasia",
    subtitle: "Old & New Palasia, Indore, MP",
    type: "area",
    keywords: ["palasia", "indore", "ind", "in", "mp"]
  },
  {
    id: "ind-rajwada",
    name: "Rajwada Palace, Indore",
    shortName: "Rajwada",
    subtitle: "Rajwada Chowk, Indore, MP",
    type: "landmark",
    keywords: ["rajwada", "indore", "ind", "in", "mp"]
  },
  {
    id: "ind-stn",
    name: "Indore Junction Railway Station",
    shortName: "Indore Station",
    subtitle: "Chhoti Gwaltoli, Indore, MP",
    type: "station",
    keywords: ["indore station", "indore railway station", "indore", "ind"]
  },

  // --- UJJAIN LOCAL AREAS ---
  {
    id: "ujj-mahakal",
    name: "Mahakaleshwar Temple, Ujjain",
    shortName: "Mahakal Temple",
    subtitle: "Mahakal Lok, Jaisinghpura, Ujjain, MP",
    type: "landmark",
    keywords: ["mahakal", "mahakaleshwar", "temple", "mahakal lok", "ujjain", "ujj", "ujn", "mp"]
  },
  {
    id: "ujj-nanakheda",
    name: "Nanakheda, Ujjain",
    shortName: "Nanakheda",
    subtitle: "Nanakheda Bus Stand Road, Ujjain, MP",
    type: "area",
    keywords: ["nanakheda", "bus stand", "ujjain", "ujj", "ujn", "mp"]
  },
  {
    id: "ujj-stn",
    name: "Ujjain Junction Railway Station",
    shortName: "Ujjain Station",
    subtitle: "Railway Station Road, Ujjain, MP",
    type: "station",
    keywords: ["ujjain station", "ujjain railway station", "ujjain", "ujj"]
  },
  {
    id: "cty-jodhpur",
    name: "Jodhpur, Rajasthan",
    shortName: "Jodhpur",
    subtitle: "Blue City, Rajasthan",
    type: "city",
    keywords: ["jodhpur", "jod", "rajasthan"]
  },
  {
    id: "cty-bhuj",
    name: "Bhuj, Kutch, Gujarat",
    shortName: "Bhuj",
    subtitle: "Kutch Gateway, Rann Utsav, Gujarat",
    type: "city",
    keywords: ["bhuj", "bhu", "kutch", "rann", "gujarat"]
  },
  {
    id: "cty-jamnagar",
    name: "Jamnagar, Gujarat",
    shortName: "Jamnagar",
    subtitle: "Brass City, Reliance Greens, Gujarat",
    type: "city",
    keywords: ["jamnagar", "jam", "reliance", "gujarat"]
  },
  {
    id: "cty-ayodhya",
    name: "Ayodhya, Uttar Pradesh",
    shortName: "Ayodhya",
    subtitle: "Ram Mandir Dham, Uttar Pradesh",
    type: "landmark",
    keywords: ["ayodhya", "ayo", "ram mandir", "up"]
  }
]

export const ALL_INDIAN_LOCATIONS: LocationItem[] = [
  ...POPULAR_TRENDING_CITIES,
  ...OTHER_INDIAN_LOCATIONS,
  ...ALL_INDIAN_AIRPORTS
]

/**
 * Google Maps Style Predictive Multi-Token Search Engine
 */
export function searchLocalIndianLocations(
  query: string,
  mode: "all" | "city" | "airport" = "all",
  limit: number = 8
): LocationItem[] {
  const trimmed = query.trim().toLowerCase()

  // 1. AIRPORT MODE
  if (mode === "airport") {
    if (!trimmed) {
      return ALL_INDIAN_AIRPORTS.slice(0, limit)
    }

    const queryTokens = trimmed.split(/\s+/).filter(Boolean)
    const scored: Array<{ item: LocationItem; score: number }> = []

    for (const item of ALL_INDIAN_AIRPORTS) {
      let itemScore = 0

      const searchHaystack = [
        item.name.toLowerCase(),
        item.shortName.toLowerCase(),
        item.subtitle.toLowerCase(),
        item.iata ? item.iata.toLowerCase() : "",
        ...item.keywords.map(k => k.toLowerCase())
      ]

      let allTokensMatch = true

      for (const token of queryTokens) {
        let tokenMatched = false
        let tokenWeight = 0

        for (const haystack of searchHaystack) {
          if (!haystack) continue

          if (haystack === token) {
            tokenMatched = true
            tokenWeight = Math.max(tokenWeight, 500)
          } else if (
            haystack.startsWith(token) ||
            haystack.includes(" " + token) ||
            haystack.includes("-" + token) ||
            haystack.includes("(" + token)
          ) {
            tokenMatched = true
            tokenWeight = Math.max(tokenWeight, 350)
          } else if (token.length >= 2 && haystack.includes(token)) {
            tokenMatched = true
            tokenWeight = Math.max(tokenWeight, 150)
          }
        }

        if (!tokenMatched) {
          allTokensMatch = false
          break
        }

        itemScore += tokenWeight
      }

      if (allTokensMatch && itemScore > 0) {
        const firstToken = queryTokens[0]
        if (
          item.shortName.toLowerCase().startsWith(firstToken) ||
          item.name.toLowerCase().startsWith(firstToken) ||
          (item.iata && item.iata.toLowerCase().startsWith(firstToken))
        ) {
          itemScore += 300
        }
        scored.push({ item, score: itemScore })
      }
    }

    scored.sort((a, b) => b.score - a.score)
    return scored.map(s => s.item).slice(0, limit)
  }

  // 2. CITY MODE (One Way, Round Trip, Local Packages)
  if (mode === "city") {
    if (!trimmed) {
      // Return popular trending cities on focus/empty query (NO AIRPORTS!)
      return POPULAR_TRENDING_CITIES.slice(0, limit)
    }

    const queryTokens = trimmed.split(/\s+/).filter(Boolean)
    const isExplicitAirportSearch = queryTokens.some(t => t.includes("airport") || t.includes("terminal"))

    // Search pool: cities, areas, landmarks, stations. Include airports ONLY if user explicitly typed "airport"
    const searchPool = isExplicitAirportSearch
      ? ALL_INDIAN_LOCATIONS
      : [...POPULAR_TRENDING_CITIES, ...OTHER_INDIAN_LOCATIONS]

    const scored: Array<{ item: LocationItem; score: number }> = []

    for (const item of searchPool) {
      let itemScore = 0

      const searchHaystack = [
        item.name.toLowerCase(),
        item.shortName.toLowerCase(),
        item.subtitle.toLowerCase(),
        item.iata ? item.iata.toLowerCase() : "",
        ...item.keywords.map(k => k.toLowerCase())
      ]

      let allTokensMatch = true

      for (const token of queryTokens) {
        let tokenMatched = false
        let tokenWeight = 0

        for (const haystack of searchHaystack) {
          if (!haystack) continue

          if (haystack === token) {
            tokenMatched = true
            tokenWeight = Math.max(tokenWeight, 500)
          } else if (
            haystack.startsWith(token) ||
            haystack.includes(" " + token) ||
            haystack.includes("-" + token) ||
            haystack.includes("(" + token)
          ) {
            tokenMatched = true
            tokenWeight = Math.max(tokenWeight, 350)
          } else if (token.length >= 2 && haystack.includes(token)) {
            tokenMatched = true
            tokenWeight = Math.max(tokenWeight, 150)
          }
        }

        if (!tokenMatched) {
          allTokensMatch = false
          break
        }

        itemScore += tokenWeight
      }

      if (allTokensMatch && itemScore > 0) {
        const firstToken = queryTokens[0]
        if (
          item.shortName.toLowerCase().startsWith(firstToken) ||
          item.name.toLowerCase().startsWith(firstToken)
        ) {
          itemScore += 300
        }
        scored.push({ item, score: itemScore })
      }
    }

    scored.sort((a, b) => b.score - a.score)
    return scored.map(s => s.item).slice(0, limit)
  }

  // 3. ALL MODE
  if (!trimmed) {
    return POPULAR_TRENDING_CITIES.slice(0, limit)
  }

  const queryTokens = trimmed.split(/\s+/).filter(Boolean)
  const scored: Array<{ item: LocationItem; score: number }> = []

  for (const item of ALL_INDIAN_LOCATIONS) {
    let itemScore = 0

    const searchHaystack = [
      item.name.toLowerCase(),
      item.shortName.toLowerCase(),
      item.subtitle.toLowerCase(),
      item.iata ? item.iata.toLowerCase() : "",
      ...item.keywords.map(k => k.toLowerCase())
    ]

    let allTokensMatch = true

    for (const token of queryTokens) {
      let tokenMatched = false
      let tokenWeight = 0

      for (const haystack of searchHaystack) {
        if (!haystack) continue

        if (haystack === token) {
          tokenMatched = true
          tokenWeight = Math.max(tokenWeight, 500)
        } else if (
          haystack.startsWith(token) ||
          haystack.includes(" " + token) ||
          haystack.includes("-" + token) ||
          haystack.includes("(" + token)
        ) {
          tokenMatched = true
          tokenWeight = Math.max(tokenWeight, 350)
        } else if (token.length >= 2 && haystack.includes(token)) {
          tokenMatched = true
          tokenWeight = Math.max(tokenWeight, 150)
        }
      }

      if (!tokenMatched) {
        allTokensMatch = false
        break
      }

      itemScore += tokenWeight
    }

    if (allTokensMatch && itemScore > 0) {
      const firstToken = queryTokens[0]
      if (
        item.shortName.toLowerCase().startsWith(firstToken) ||
        item.name.toLowerCase().startsWith(firstToken) ||
        (item.iata && item.iata.toLowerCase().startsWith(firstToken))
      ) {
        itemScore += 300
      }

      scored.push({ item, score: itemScore })
    }
  }

  scored.sort((a, b) => b.score - a.score)

  const results: LocationItem[] = []
  const seenIds = new Set<string>()

  for (const entry of scored) {
    if (!seenIds.has(entry.item.id)) {
      seenIds.add(entry.item.id)
      results.push(entry.item)
    }
    if (results.length >= limit) break
  }

  return results
}
