/* roles.js: a directory of job titles mapped to a field in domains.js.
   Used for (1) title suggestions, (2) picking the field when a title is typed or found in a resume.
   Titles that do not fit a field map to "general", which uses the universal role-based questions.
   Add your own titles freely: "field-id": ["title", ...]. */

const ROLE_MAP = {
 software:["software engineer","software developer","web developer","frontend developer","backend developer","full stack developer","mobile app developer","game developer","devops engineer","site reliability engineer","cloud engineer","cloud architect","data engineer","data scientist","machine learning engineer","ai engineer","qa engineer","test automation engineer","security engineer","cybersecurity analyst","network engineer","system administrator","database administrator","embedded software engineer","technical support engineer","solutions architect","it support specialist","blockchain developer"],
 law:["lawyer","attorney","advocate","solicitor","barrister","paralegal","legal counsel","corporate counsel","legal associate","compliance officer","legal secretary","notary","judge","patent attorney","contracts manager","legal analyst"],
 fashion:["fashion designer","pattern maker","apparel designer","textile designer","costume designer","fashion stylist","fashion merchandiser","tailor","seamstress","fashion buyer","garment technologist","jewelry designer","footwear designer","fashion illustrator"],
 interior:["interior designer","interior decorator","space planner","kitchen designer","lighting designer","set designer","exhibition designer","furniture designer","home stager","visual merchandiser"],
 architecture:["architect","junior architect","project architect","urban planner","urban designer","landscape architect","bim coordinator","architectural technologist","town planner","quantity surveyor","building surveyor"],
 finance:["financial advisor","financial planner","wealth manager","investment banker","investment analyst","portfolio manager","equity research analyst","relationship manager","private banker","insurance agent","insurance underwriter","actuary","risk analyst","credit analyst","loan officer","mortgage advisor","fund manager","trader","treasury analyst","financial analyst"],
 accounting:["accountant","auditor","tax consultant","chartered accountant","bookkeeper","payroll specialist","finance manager","cost accountant","accounts payable clerk","forensic accountant","controller"],
 marketing:["marketing manager","digital marketer","seo specialist","content marketer","social media manager","brand manager","growth marketer","pr executive","public relations officer","copywriter","community manager","market researcher","email marketer","product marketer","event marketer","influencer manager","advertising executive","media planner"],
 sales:["sales executive","sales manager","business development manager","account executive","account manager","inside sales representative","retail sales associate","real estate agent","property consultant","sales engineer","key account manager","territory manager","telesales executive","pre-sales consultant"],
 hr:["hr manager","hr executive","hr generalist","hr business partner","recruiter","talent acquisition specialist","payroll administrator","learning and development manager","compensation analyst","employee relations specialist","training coordinator","headhunter"],
 pm:["project manager","product manager","program manager","scrum master","product owner","delivery manager","project coordinator","business analyst","pmo analyst","agile coach","technical program manager"],
 design:["ux designer","ui designer","graphic designer","product designer","visual designer","brand designer","motion designer","art director","illustrator","animator","3d artist","web designer","packaging designer","creative director","photo editor","video editor"],
 healthcare:["nurse","staff nurse","registered nurse","doctor","physician","surgeon","dentist","pharmacist","physiotherapist","occupational therapist","radiographer","medical laboratory technologist","midwife","paramedic","medical officer","veterinarian","nutritionist","dietitian","psychologist","counsellor","speech therapist","optometrist","healthcare assistant","medical coder","clinical research associate","caregiver"],
 education:["teacher","school teacher","lecturer","professor","tutor","instructional designer","school principal","teaching assistant","early childhood educator","special education teacher","trainer","academic advisor","librarian","education counsellor","curriculum developer","corporate trainer","language teacher"],
 engineering:["civil engineer","mechanical engineer","electrical engineer","electronics engineer","chemical engineer","structural engineer","site engineer","production engineer","maintenance engineer","design engineer","quality engineer","process engineer","industrial engineer","manufacturing engineer","hvac engineer","automotive engineer","aerospace engineer","petroleum engineer","environmental engineer","instrumentation engineer","mining engineer","marine engineer","safety engineer","field engineer","planning engineer"],
 writing:["journalist","editor","content writer","reporter","technical writer","content strategist","scriptwriter","copy editor","author","proofreader","blogger","screenwriter","translator","interpreter","speechwriter","newsroom producer","publisher"],
 operations:["operations manager","supply chain analyst","supply chain manager","logistics manager","logistics coordinator","procurement manager","purchasing officer","warehouse manager","inventory controller","demand planner","import export executive","freight forwarder","fleet manager","production planner","facilities manager","store manager"],
 service:["customer service executive","customer support agent","call center agent","customer success manager","hotel manager","front desk agent","receptionist","chef","cook","restaurant manager","waiter","barista","guest relations officer","flight attendant","cabin crew","travel agent","concierge","event planner","bartender","housekeeping supervisor","tour guide"],
 general:["pilot","air traffic controller","electrician","plumber","carpenter","welder","mechanic","auto technician","truck driver","delivery driver","farmer","agronomist","fisherman","social worker","community worker","scientist","researcher","lab technician","chemist","biologist","physicist","geologist","photographer","videographer","musician","singer","actor","dancer","athlete","coach","personal trainer","fitness instructor","security guard","police officer","firefighter","soldier","military officer","florist","hairdresser","barber","makeup artist","beautician","massage therapist","real estate developer","entrepreneur","consultant","management consultant","executive assistant","office administrator","data entry operator","librarian assistant","museum curator","archivist","diplomat","policy analyst","ngo program officer","fundraiser","cleaner","janitor","construction worker","crane operator","surveyor","gardener","landscaper","pet groomer","event photographer","sound engineer","dj","interpreter"]
};

const ROLE_INDEX = (() => {
  const m = new Map();
  for (const [id, list] of Object.entries(ROLE_MAP)) list.forEach(t => { if (!m.has(t)) m.set(t, id); });
  return m;
})();

/* Exact (case-insensitive) title match -> field id, else null */
function roleDomain(title) {
  return ROLE_INDEX.get(String(title || "").trim().toLowerCase()) || null;
}

if (typeof module !== "undefined") module.exports = { ROLE_MAP, ROLE_INDEX, roleDomain };
