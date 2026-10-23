/* domains.js: professions, detection keywords and question banks.
   Add your own field by copying any block below. Levels: basic (fresher), mid (2 yrs), senior (5+ / advanced).
   "software" has no core/case here because index.html holds its detailed skill bank. */

const DOMAINS = [
 {id:"software", name:"Software / IT", se:{site:"stackoverflow"},
  kw:["software","developer","programming","programmer","backend","frontend","full stack","fullstack","api","devops","sdlc","web development","mobile app","coding","algorithms","data structures","microservices","qa engineer","sre","data engineer","machine learning"],
  roles:["software engineer","software developer","full stack developer","frontend developer","backend developer","data scientist","data engineer","devops engineer","qa engineer","test engineer","machine learning engineer","mobile developer","android developer","ios developer","technical lead","cloud engineer","sre"]},

 {id:"law", name:"Law / Legal", se:{site:"law",q:"contract"},
  kw:["lawyer","advocate","attorney","litigation","legal counsel","paralegal","court","arbitration","llb","llm","bar council","legal drafting","contract law","compliance","due diligence","intellectual property","corporate law","legal research","pleadings","solicitor","barrister"],
  roles:["lawyer","advocate","attorney","legal counsel","paralegal","compliance officer","solicitor","barrister","legal associate"],
  core:{
   basic:["Explain the difference between civil and criminal liability.","What are the essential elements of a valid contract?","How do you approach legal research on an unfamiliar issue?"],
   mid:["Walk me through how you draft and review a commercial contract. Which clauses get most of your attention?","How do you assess litigation risk and advise a client on settling versus fighting?","How do you manage deadlines, evidence and procedure across several matters at once?"],
   senior:["How do you structure a negotiation where the other side has more leverage?","How do you handle conflicts of interest, privilege and ethics on a sensitive matter?","How do you manage a team, client relationships and fees on complex matters?"]},
  case:{
   basic:["A client says a landlord is withholding a deposit. How do you proceed?","A client signed an agreement without reading it. What are your first steps?"],
   mid:["Opposing counsel misses a filing deadline in your client's favour. What do you do?","A client wants to hold back unhelpful documents. How do you respond?"],
   senior:["A major client faces a regulatory investigation. Outline your first 48 hours.","Two partners disagree on strategy in a high-stakes case. How do you resolve it?"]}},

 {id:"fashion", name:"Fashion Design", se:{site:"sewing",q:"pattern"},
  kw:["fashion designer","fashion design","garment","pattern making","pattern cutting","textile","apparel","couture","merchandising","fabric","collection","tailoring","draping","tech pack","illustrator sketches","lookbook","sampling","trend forecasting"],
  roles:["fashion designer","pattern maker","apparel designer","fashion merchandiser","textile designer","costume designer","stylist"],
  core:{
   basic:["Walk me through your design process from inspiration to a finished garment.","What is the difference between woven and knit fabrics, and how does it affect design?","How do you build a mood board and turn it into a collection?"],
   mid:["How do you balance creativity with production cost and manufacturing limits?","How do you create tech packs and work with pattern makers and factories?","How do you research trends and decide which to follow or ignore?"],
   senior:["How do you set a brand's design direction and keep collections cohesive across seasons?","How do you balance sustainability, ethical sourcing and margins?","How do you lead a design team and work to the buying and merchandising calendar?"]},
  case:{
   basic:["A sample comes back from the factory with fit problems. What do you do?","You have two weeks to finish a capsule collection. How do you prioritise?"],
   mid:["A key fabric supplier delays delivery. How do you protect the launch?","Sales of a flagship line drop mid-season. How do you respond?"],
   senior:["Your brand wants to enter a market with different tastes. How do you adapt the line?","A viral trend conflicts with your brand identity. How do you decide?"]}},

 {id:"interior", name:"Interior Design", se:{site:"diy",q:"layout"},
  kw:["interior designer","interior design","space planning","furniture","autocad","sketchup","mood board","décor","decor","lighting design","renovation","fit-out","fitout","3ds max","vray","materials and finishes","bill of quantities","site supervision"],
  roles:["interior designer","interior decorator","space planner","design consultant","visualiser"],
  core:{
   basic:["Walk me through how you take a client brief to a final design.","How do you plan a space layout for flow, function and light?","How do you choose a colour palette and materials for a room?"],
   mid:["How do you manage a client's budget and handle scope changes?","How do you coordinate contractors, electricians and vendors during a fit-out?","Which tools do you use (AutoCAD, SketchUp, Revit, rendering) and how do you present concepts?"],
   senior:["How do you manage several projects, timelines and suppliers at once?","How do you balance building codes, safety and accessibility with the design vision?","How do you grow client relationships and a portfolio or studio?"]},
  case:{
   basic:["A client dislikes your first concept. How do you respond?","A small apartment must work as both living room and workspace. How do you design it?"],
   mid:["Materials arrive damaged a week before handover. What do you do?","The client's budget is 30% below your quote. How do you adapt?"],
   senior:["A contractor's work does not match your drawings and the client is upset. How do you handle it?","You are pitching a hospitality project against larger studios. How do you win it?"]}},

 {id:"architecture", name:"Architecture", se:{site:"engineering",q:"building design"},
  kw:["architect","architecture","revit","building codes","urban design","site plan","planning permission","bim","landscape","masterplan","concept design","construction documents","zoning","facade","coa registered","rhino","archicad"],
  roles:["architect","junior architect","project architect","urban designer","landscape architect","bim coordinator"],
  core:{
   basic:["Walk me through your process from site analysis to concept design.","How do building codes and zoning shape a design?","Which software do you use (AutoCAD, Revit, SketchUp, BIM) and for what?"],
   mid:["How do you coordinate with structural, MEP and landscape consultants?","How do you build sustainability and passive design into a project?","How do you handle design changes during construction documentation?"],
   senior:["How do you lead a project from feasibility through construction administration?","How do you manage fees, risk, liability and client expectations on large projects?","How do you mentor junior architects and keep design quality across a studio?"]},
  case:{
   basic:["Your site has a steep slope and limited access. How do you begin?","A client wants a design that exceeds the permitted height. What do you do?"],
   mid:["Construction reveals a clash between structure and services. How do you resolve it?","The budget is cut after concept approval. How do you respond?"],
   senior:["A project is late and over budget and the parties blame each other. How do you recover it?","A heritage building needs a modern use. How do you approach it?"]}},

 {id:"finance", name:"Financial Advisory / Wealth", se:{site:"money",q:"retirement"},
  kw:["financial advisor","financial adviser","financial planning","wealth management","portfolio","mutual funds","retirement planning","insurance","cfp","asset allocation","investment advisory","relationship manager","equity research","fund manager","client advisory","private banking","risk profiling","sip"],
  roles:["financial advisor","wealth manager","investment advisor","relationship manager","financial planner","portfolio manager","equity analyst"],
  core:{
   basic:["Explain the difference between stocks, bonds and mutual funds.","What is risk tolerance and how do you assess it for a client?","What is diversification and why does it matter?"],
   mid:["How do you build a financial plan for a client with retirement, education and protection goals?","How do you explain complex products and fees clearly?","How do you review and rebalance a portfolio?"],
   senior:["How do you handle suitability, compliance and conflicts of interest in your recommendations?","How do you keep clients invested through market downturns?","How do you grow and retain a client book and manage a team?"]},
  case:{
   basic:["A client wants to put all savings in one hot stock. What do you say?","A client has no emergency fund but wants to invest. How do you advise?"],
   mid:["A client's risk tolerance does not match their return goals. How do you handle it?","Markets fall 20% and a retiree panics. What do you do?"],
   senior:["A long-time client asks for a product you think is unsuitable. How do you respond?","A regulatory change affects a product you sold widely. How do you act?"]}},

 {id:"accounting", name:"Accounting / Audit / Tax", se:{site:"money",q:"tax"},
  kw:["accountant","accounting","audit","auditor","taxation","gst","ifrs","gaap","bookkeeping","tally","cpa","chartered accountant","payroll","reconciliation","accounts payable","accounts receivable","financial reporting","month-end","general ledger","sap fico","quickbooks"],
  roles:["accountant","auditor","tax consultant","chartered accountant","bookkeeper","finance manager","accounts executive"],
  core:{
   basic:["What is the accounting equation and how do debits and credits work?","What is the difference between accrual and cash accounting?","How do you reconcile a bank statement?"],
   mid:["How do you run a month-end close and which controls do you apply?","Explain depreciation methods and when each is used.","How do you prepare for an audit?"],
   senior:["How do you manage financial reporting under IFRS or GAAP, including judgement areas?","How do you design internal controls and detect fraud risk?","How do you lead a finance team through a systems change or restructuring?"]},
  case:{
   basic:["The trial balance does not balance. How do you find the error?","An invoice is posted to the wrong period. What do you do?"],
   mid:["A manager asks you to defer an expense to hit targets. How do you respond?","Tax rules change mid-year. How do you adjust?"],
   senior:["An audit finds a material misstatement. What are your steps?","The company plans an acquisition. How do you support due diligence?"]}},

 {id:"marketing", name:"Marketing / Communications", se:{site:"webmasters",q:"seo"},
  kw:["marketing","seo","sem","social media","brand","campaign","content marketing","google ads","copywriting","growth","email marketing","digital marketing","public relations","influencer","meta ads","performance marketing","market research","brand manager"],
  roles:["marketing manager","digital marketer","seo specialist","brand manager","content marketer","social media manager","growth marketer","pr executive"],
  core:{
   basic:["What is the difference between branding and performance marketing?","How do you define a target audience?","Which metrics do you use to judge a campaign?"],
   mid:["Walk me through a campaign you planned and its results.","How do you split budget across channels and optimise it?","How do you run A/B tests and act on the results?"],
   senior:["How do you build a marketing strategy and tie it to revenue goals?","How do you manage brand positioning across markets or product lines?","How do you build and lead a team and manage agencies?"]},
  case:{
   basic:["A campaign gets clicks but no sales. What do you check?","You have a small budget and a new product. Where do you start?"],
   mid:["Cost per acquisition doubles overnight. How do you investigate?","A competitor launches a similar offer. How do you respond?"],
   senior:["The CEO wants brand awareness while sales wants leads. How do you balance both?","You must cut the marketing budget by 25%. What do you cut and why?"]}},

 {id:"sales", name:"Sales / Business Development", se:{site:"workplace",q:"sales"},
  kw:["sales","business development","account executive","crm","quota","lead generation","negotiation","b2b","pipeline","cold calling","salesforce","key account","territory","revenue target","closing deals","inside sales","channel sales"],
  roles:["sales executive","business development manager","account executive","account manager","sales manager","inside sales representative"],
  core:{
   basic:["How do you qualify a lead?","Walk me through your sales process from first contact to close.","How do you handle common objections?"],
   mid:["How do you build and manage a pipeline to hit quota?","Describe a deal you lost and what you learned.","How do you use CRM data to forecast?"],
   senior:["How do you build a sales strategy for a new market or segment?","How do you coach and motivate a team to hit targets?","How do you negotiate large, multi-stakeholder deals?"]},
  case:{
   basic:["A prospect says your price is too high. What do you say?","A lead goes silent after a demo. What do you do?"],
   mid:["You are 40% short of quota mid-quarter. What do you do?","A customer wants a discount you cannot approve. How do you handle it?"],
   senior:["A top performer is hurting team culture. How do you manage them?","A key account is about to churn. What is your plan?"]}},

 {id:"hr", name:"Human Resources / Recruiting", se:{site:"workplace",q:"hr"},
  kw:["human resources","hr","recruiter","recruitment","talent acquisition","payroll","onboarding","employee relations","hris","performance management","compensation","benefits","hrbp","learning and development","employee engagement","sourcing candidates","exit interviews"],
  roles:["hr manager","recruiter","talent acquisition specialist","hr business partner","hr executive","hr generalist"],
  core:{
   basic:["Describe the full recruitment cycle you have worked on.","How do you handle an employee complaint?","What is the purpose of a performance review?"],
   mid:["How do you reduce time-to-hire without lowering quality?","How do you run a disciplinary process fairly and legally?","How do you design onboarding and measure its success?"],
   senior:["How do you align HR strategy with business goals?","How do you manage organisational change, layoffs or restructuring?","How do you build culture, engagement and retention programs and measure them?"]},
  case:{
   basic:["Two employees are in conflict. What are your steps?","A candidate rejects your offer for a higher one. What do you do?"],
   mid:["A manager wants to dismiss someone without documentation. How do you respond?","Attrition rises in one team. How do you investigate?"],
   senior:["A senior leader is accused of misconduct. How do you handle the investigation?","The company must cut costs by 15%. How do you plan people decisions?"]}},

 {id:"pm", name:"Project / Product Management", se:{site:"pm",q:"scope"},
  kw:["project manager","product manager","scrum","agile","pmp","roadmap","stakeholder","jira","kanban","sprint","program manager","product owner","prince2","waterfall","backlog","gantt","risk register","project management"],
  roles:["project manager","product manager","program manager","scrum master","product owner","delivery manager"],
  core:{
   basic:["What is the difference between agile and waterfall?","How do you break a project into tasks and estimates?","How do you communicate status to stakeholders?"],
   mid:["How do you manage scope, schedule and risk on a project?","How do you prioritise a backlog or roadmap with competing requests?","How do you handle a stakeholder who keeps changing requirements?"],
   senior:["How do you manage a portfolio of programs and resources across teams?","How do you define product strategy and success metrics?","How do you recover a failing project?"]},
  case:{
   basic:["A task is late and blocks others. What do you do?","Your team disagrees about priorities. How do you decide?"],
   mid:["The sponsor wants more features without moving the deadline. How do you respond?","A key team member leaves mid-project. What do you do?"],
   senior:["Two critical projects compete for the same team. How do you decide?","A launch is at risk and quality is poor. Do you delay? Why?"]}},

 {id:"design", name:"UX / Graphic Design", se:{site:"ux",q:"user research"},
  kw:["ux","ui","figma","graphic designer","graphic design","branding","typography","photoshop","illustrator","user research","wireframe","prototype","design system","adobe xd","indesign","visual design","motion graphics","after effects","packaging design","logo design"],
  roles:["ux designer","ui designer","graphic designer","product designer","visual designer","brand designer","motion designer","art director"],
  core:{
   basic:["Walk me through your design process.","What makes a good interface or a good layout?","How do you use typography, colour and hierarchy?"],
   mid:["How do you run user research and turn findings into design decisions?","How do you handle feedback that conflicts with your design judgement?","How do you hand designs off to developers?"],
   senior:["How do you build or scale a design system?","How do you measure design impact on business outcomes?","How do you lead designers and set design direction?"]},
  case:{
   basic:["A client says 'make the logo bigger'. How do you respond?","Users cannot find a key button. How do you investigate?"],
   mid:["Stakeholders want conflicting changes. How do you proceed?","Development constraints block your ideal solution. What do you do?"],
   senior:["Leadership wants a redesign without research. How do you respond?","Designs are inconsistent across your products. What is your plan?"]}},

 {id:"healthcare", name:"Healthcare / Nursing / Medical", se:{site:"health",q:"patient"},
  kw:["nurse","nursing","doctor","clinical","patient care","physician","pharmacist","hospital","medical","diagnosis","mbbs","physiotherapy","icu","emr","ward","dentist","medication","paramedic","healthcare","surgery","public health"],
  roles:["nurse","staff nurse","doctor","physician","pharmacist","physiotherapist","medical officer","dentist","clinical coordinator"],
  core:{
   basic:["How do you prioritise patients when several need care at once?","How do you keep patient documentation accurate?","How do you communicate with anxious patients and families?"],
   mid:["Describe a difficult clinical situation and how you handled it.","How do you ensure patient safety and prevent medication errors?","How do you work with a multidisciplinary team?"],
   senior:["How do you lead a team through high-pressure situations such as short staffing?","How do you apply evidence-based practice and quality improvement?","How do you handle ethical dilemmas and consent?"]},
  case:{
   basic:["A patient's condition changes suddenly. What do you do first?","A patient refuses treatment. How do you respond?"],
   mid:["You notice a colleague making a safety error. What do you do?","A family member is angry about care delays. How do you respond?"],
   senior:["A serious incident occurs on your unit. How do you manage the response and review?","Resources are cut but demand rises. How do you protect care quality?"]}},

 {id:"education", name:"Teaching / Education", se:{site:"academia",q:"teaching"},
  kw:["teacher","lecturer","curriculum","classroom","pedagogy","tutor","lesson plan","student","professor","school","b.ed","assessment","faculty","early childhood","special education","e-learning","instructional design","academic"],
  roles:["teacher","lecturer","professor","tutor","instructional designer","school coordinator","trainer"],
  core:{
   basic:["How do you plan a lesson and set objectives?","How do you manage classroom behaviour?","How do you assess student learning?"],
   mid:["How do you differentiate instruction for mixed-ability students?","How do you involve parents and keep them informed?","How do you use technology effectively in teaching?"],
   senior:["How do you design curriculum and align it to standards?","How do you mentor teachers and improve teaching quality?","How do you use data to improve outcomes across a school or department?"]},
  case:{
   basic:["A student is repeatedly disruptive. What do you do?","Half the class did poorly on a test. What next?"],
   mid:["A parent disputes a grade. How do you respond?","A student with learning difficulties is falling behind. What is your plan?"],
   senior:["Staff resist a curriculum change. How do you lead it?","Exam results decline year on year. How do you investigate and act?"]}},

 {id:"electronics", name:"Electronics / Semiconductor / Embedded / IoT", se:{site:"electronics",q:"microcontroller"},
  kw:["embedded","firmware","microcontroller","stm32","arduino","raspberry pi","rtos","freertos","iot","internet of things","semiconductor","vlsi","verilog","vhdl","fpga","asic","rtl","soc","pcb","altium","kicad","schematic","analog design","digital design","uvm","soc verification","physical design","cadence","synopsys","spi","i2c","uart","can bus","bsp","device driver","bootloader","arm cortex","esp32","mqtt","ble","bluetooth low energy","lora","zigbee","signal integrity","emc","power electronics","dft","timing closure","wafer","fab","process engineer","yield","test engineer","embedded c"],
  roles:["embedded engineer","embedded software engineer","firmware engineer","iot engineer","vlsi engineer","rtl design engineer","design verification engineer","physical design engineer","fpga engineer","analog design engineer","pcb design engineer","hardware engineer","semiconductor process engineer","device driver engineer","electronics engineer"],
  core:{
   basic:["Explain the difference between a microcontroller and a microprocessor.","What are SPI, I2C and UART, and when would you use each?","What is the difference between a combinational and a sequential circuit?","Explain what a pull-up resistor does and why it is needed.","What does the volatile keyword do in embedded C, and why does it matter?"],
   mid:["How does an interrupt work, and what should and should not happen inside an interrupt service routine?","Explain setup and hold time and what happens when they are violated.","How do you debug a board that does not boot? Walk me through your steps and tools.","How do you choose between a bare-metal loop and an RTOS? What problems do priority inversion and deadlock cause?","What are the main considerations when laying out a PCB for a mixed-signal design?","How do you write a testbench and measure verification coverage?"],
   senior:["How do you design for low power across firmware, hardware and wireless duty cycling in a battery-powered IoT device?","Describe how you would architect secure OTA firmware updates, including rollback, signing and secure boot.","How do you close timing on a block that misses at the target clock? What knobs do you try first?","How do you manage clock domain crossings and metastability in a large SoC?","How do you plan bring-up of new silicon or a new board, and decide what to validate first?","How do you handle design for test, yield and manufacturing variation?"]},
  case:{
   basic:["A sensor returns noisy readings. How do you find and reduce the noise?","Your code works on the bench but resets randomly in the field. What do you check?"],
   mid:["The device passes functional tests but fails EMC testing. How do you find the source?","A bug appears only once every few hours. How do you capture and reproduce it?"],
   senior:["A product recall risk appears from a firmware bug already shipped to 50,000 devices. What is your plan?","Your chip is two weeks from tape-out and a critical bug is found in verification. How do you decide whether to delay?"]}},

 {id:"engineering", name:"Engineering (Civil / Mechanical / Electrical)", se:{site:"engineering",q:"design"},
  kw:["civil engineer","mechanical engineer","electrical engineer","cad","structural","hvac","manufacturing","plc","site engineer","autocad","staad","etabs","solidworks","ansys","quality control","construction","autocad mep","scada","maintenance engineer","production engineer","iso 9001"],
  roles:["civil engineer","mechanical engineer","electrical engineer","site engineer","production engineer","maintenance engineer","structural engineer","design engineer"],
  core:{
   basic:["Explain a basic concept from your field and apply it to a real example.","How do you read and interpret technical drawings?","What safety standards apply to your work?"],
   mid:["Walk me through a project you designed or supervised end to end.","How do you do calculations and validate designs, and with which tools?","How do you manage quality control and testing?"],
   senior:["How do you manage risk, cost and schedule on large projects?","How do you balance performance, cost, safety and sustainability in design decisions?","How do you lead engineers and coordinate with contractors and clients?"]},
  case:{
   basic:["A component fails testing. How do you find the cause?","Site conditions differ from the drawings. What do you do?"],
   mid:["A supplier delivers out-of-spec material. How do you respond?","A design change is requested late in construction or production. How do you handle it?"],
   senior:["A safety incident occurs on site. What is your response?","A project is 20% over budget. How do you recover it?"]}},

 {id:"writing", name:"Writing / Journalism / Content", se:{site:"writers",q:"editing"},
  kw:["journalist","editor","copywriter","content writer","reporter","publishing","proofreading","journalism","blogger","technical writer","editorial","newsroom","ghostwriting","scriptwriter","content strategy","press release","feature writing"],
  roles:["journalist","editor","copywriter","content writer","reporter","technical writer","content strategist","scriptwriter"],
  core:{
   basic:["How do you verify facts before publishing?","How do you structure an article or story?","How do you adapt your tone to different audiences?"],
   mid:["Walk me through how you find, pitch and develop a story.","How do you handle tight deadlines and editing feedback?","How do you use SEO and analytics in your writing?"],
   senior:["How do you set editorial strategy and manage a content calendar?","How do you handle ethical issues such as sources, corrections and conflicts of interest?","How do you lead writers and keep quality and voice consistent?"]},
  case:{
   basic:["A source asks to retract a quote. What do you do?","You have two hours to turn around a story. How do you work?"],
   mid:["A published story contains an error. What are your steps?","An editor rewrites your piece in a way you disagree with. How do you respond?"],
   senior:["A legal threat arrives over a published piece. How do you handle it?","Traffic is falling but quality standards must hold. What is your plan?"]}},

 {id:"operations", name:"Operations / Supply Chain / Logistics", se:{site:"workplace",q:"operations"},
  kw:["supply chain","logistics","procurement","inventory","warehouse","operations manager","erp","six sigma","lean","vendor management","demand planning","sourcing","import export","freight","purchase","distribution","s&op","materials management"],
  roles:["operations manager","supply chain analyst","logistics manager","procurement manager","warehouse manager","purchase executive","demand planner"],
  core:{
   basic:["What is inventory management and why does it matter?","How do you track KPIs such as lead time and fill rate?","What is the role of procurement in an organisation?"],
   mid:["How do you forecast demand and plan inventory?","How do you evaluate and negotiate with suppliers?","How do you find and remove bottlenecks in a process?"],
   senior:["How do you design a resilient supply chain and manage disruption risk?","How do you reduce cost while holding service levels?","How do you lead operational improvement (lean, Six Sigma) across teams?"]},
  case:{
   basic:["A shipment is delayed and a customer is waiting. What do you do?","Stock counts do not match the system. How do you investigate?"],
   mid:["A key supplier fails. How do you respond?","Demand spikes unexpectedly. How do you adapt?"],
   senior:["Costs rise 15% across the chain. How do you protect margins?","You must open a new distribution hub. How do you plan it?"]}},

 {id:"service", name:"Customer Service / Hospitality", se:{site:"workplace",q:"customer service"},
  kw:["customer service","customer support","call center","call centre","hotel","hospitality","chef","restaurant","front office","guest relations","housekeeping","food and beverage","banquet","concierge","cabin crew","tourism","helpdesk","customer success"],
  roles:["customer service executive","support agent","hotel manager","front office executive","chef","restaurant manager","guest relations officer","customer success manager"],
  core:{
   basic:["What does excellent customer service mean to you?","How do you handle a difficult or angry customer?","How do you prioritise several requests at once?"],
   mid:["How do you turn a complaint into a loyal customer?","How do you work with other teams (kitchen, housekeeping, front office, sales) to resolve issues?","How do you track and improve service quality?"],
   senior:["How do you build and train a service team to a high standard?","How do you manage service standards, cost control and revenue together?","How do you handle escalations, reputation and online reviews?"]},
  case:{
   basic:["A customer asks for something against policy. What do you do?","You are short-staffed in a busy period. How do you cope?"],
   mid:["A VIP guest or key client is dissatisfied. What do you do?","A colleague keeps making mistakes that affect guests. How do you respond?"],
   senior:["Reviews drop sharply after a service change. How do you diagnose and fix it?","You must cut costs without hurting the experience. What is your approach?"]}},

 {id:"general", name:"Other / General Professional", se:{site:"workplace",q:"interview"},
  kw:[], roles:[],
  core:{
   basic:["What are the core responsibilities of the role you are applying for?","Which tools, methods or standards do you use most in your work?","How do you plan and prioritise your work?"],
   mid:["Describe a project or task where your specific skills made the difference.","How do you keep your skills current in your field?","How do you measure the quality of your work?"],
   senior:["How do you set direction and standards for your team or area?","How do you make high-stakes decisions with incomplete information?","How do you mentor others and share expertise?"]},
  case:{
   basic:["You receive an unclear task from your manager. What do you do?","You make a mistake that affects a colleague. How do you handle it?"],
   mid:["Two stakeholders ask for conflicting things. How do you resolve it?","You have too many deadlines at once. How do you decide?"],
   senior:["A project is going badly and the team is demoralised. What do you do?","You must introduce a major change that people resist. How?"]}}
];

const escRe = s => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

/* Scores every field by keyword hits in the (lower-cased) resume text.
   `extra` lets the page add points (e.g. software skills found). Returns fields sorted best-first. */
function detectDomains(low, extra = {}) {
  const out = [];
  for (const d of DOMAINS) {
    let score = extra[d.id] || 0;
    const seen = new Set();
    for (const k of d.kw) {
      const re = new RegExp("(^|[^a-z0-9])" + escRe(k) + "($|[^a-z0-9])", "g");
      const n = (low.match(re) || []).length;
      if (n) { seen.add(k); score += Math.min(n, 5) * (k.includes(" ") ? 2 : 1); }
    }
    score += seen.size; // reward breadth of distinct matches
    out.push({ id: d.id, score });
  }
  out.sort((a, b) => b.score - a.score);
  return out;
}

function pickDomain(low, extra) {
  const r = detectDomains(low, extra);
  return r[0].score >= 3 ? r[0].id : "general";
}

function pickRole(low, domainId) {
  const d = DOMAINS.find(x => x.id === domainId);
  return (d && d.roles.find(r => low.includes(r))) || (d && d.id !== "general" ? d.roles[0] : "professional");
}

if (typeof module !== "undefined") module.exports = { DOMAINS, detectDomains, pickDomain, pickRole };
