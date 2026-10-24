/* practice.js: practical tasks, coding challenges and problem-solving questions.
   - PRACTICAL: domain-specific hands-on tasks per field (levels: basic, mid, senior). Use {R} for the job title.
   - UNIVERSAL_TASKS: tasks that work for any job title.
   - SOLVE: reasoning questions. Numeric ones are auto-checked; open ones are scored on method.
   - CODE: JavaScript coding challenges with tests (run in the browser). Add more by copying a block. */

const UNIVERSAL_TASKS = {
 basic:["Write a clear step-by-step checklist for the first hour of work in your role as {R}, ending with how you check the quality of the result.",
        "A customer or colleague gives you unclear instructions for an urgent task. Write the exact message you would send to clarify, then say what you do while waiting."],
 mid:["Describe a process in your work as {R} that is slow or error-prone, and propose an improved version with the expected benefits.",
      "You have five tasks, three hours and one hard deadline. Show how you decide and sequence the work."],
 senior:["Design a plan to train three new people to perform {R} work to standard in 30 days: milestones, quality checks and risks.",
         "Write a one-page proposal to your manager to improve quality or cut cost in the {R} function, with numbers and how you will measure success."]
};

const PRACTICAL = {
 electronics:{
  basic:["Write the C code (or clear pseudocode) to debounce a push button read from a GPIO pin, and say what timing you chose and why.",
         "Draw or describe a circuit that powers a 3.3 V microcontroller from a 12 V supply. List the parts and what each protects against."],
  mid:["Design the firmware structure for a battery sensor node that reads a temperature sensor every minute and sends data over BLE or LoRa. State the sleep modes, wake sources and rough current budget.",
       "A SPI flash read returns wrong data intermittently. List the first 6 checks you would make, in order, with the tool for each."],
  senior:["Write a one-page plan for secure OTA updates on 10,000 deployed IoT devices: signing, rollback, staged rollout and failure handling.",
          "A block fails timing by 150 ps at the target clock. List the fixes you would try in order and the trade-off of each."]},
 law:{
  basic:["Draft a one-paragraph confidentiality clause for an agreement between a company and a freelance consultant. Then list two risks it does not cover.",
         "A client emails: 'My landlord kept my full deposit without notice.' Write the reply you would send, including the 3 facts you need from them and your next steps."],
  mid:["Summarise in under 150 words, for a non-lawyer, the main risks of a contract with an unlimited liability clause, and propose a fix.",
       "You have 3 days before a filing deadline and 2 of 5 required documents are missing. Write your action plan day by day."],
  senior:["Outline your strategy memo for a client sued by a supplier for 2 million for breach of contract: strengths, weaknesses, settlement range logic and the next 30 days.",
          "Design a 10-item due diligence checklist for a company acquisition, ordered by risk."]},
 fashion:{
  basic:["Create a mini tech pack outline for a basic cotton shirt: list the sections and the key details you would include.",
         "Describe a mood board concept (theme, palette, 3 fabrics) for a spring collection for young professionals."],
  mid:["A first sample has a shoulder fit problem and a 15% cost overrun. Write how you would diagnose and fix both.",
       "Plan a 10-piece capsule collection: the pieces, fabrics, colours and how they mix and match."],
  senior:["Build a timeline for a seasonal collection from concept to store delivery with the 6 key milestones and the biggest risk at each.",
          "Propose three ways to make a line more sustainable without raising the retail price by more than 5%."]},
 interior:{
  basic:["Plan a 25 square metre studio apartment: describe the zones, furniture and circulation as a layout list.",
         "Propose a colour palette and 3 materials for a calm home office and explain why."],
  mid:["A client has a 20,000 budget for a living room. Allocate it across categories with percentages and justify the split.",
       "List the 8 things you check on site before approving a contractor's finish work."],
  senior:["A hotel lobby must feel luxurious but handle heavy traffic. Outline the concept, materials and maintenance trade-offs.",
          "The client adds 25% more work mid-project. Write your change-management response including cost and schedule."]},
 architecture:{
  basic:["List 8 factors you analyse when assessing a new site before concept design.",
         "Describe how you would design a small 2-storey house on a 10 by 20 metre plot with the entrance on the north side."],
  mid:["List 8 coordination issues that commonly arise between architecture, structure and MEP, and how you prevent each.",
       "Explain how you would reduce the energy use of a mid-rise office building using passive strategies."],
  senior:["Write a risk register of 6 items for a 30-storey mixed-use project with likelihood, impact and mitigation.",
          "Outline your approach to presenting a controversial design to a planning committee."]},
 finance:{
  basic:["A client aged 30 saves 1,000 per month. Assuming a 6% annual return, estimate roughly what the savings could be after 20 years, and explain the assumptions in plain words.",
         "Write the 5 questions you would ask in a first meeting to understand a new client's goals and risk tolerance."],
  mid:["Client: age 45, wants 1,500,000 at 60, has 300,000 invested, adds 2,000 per month and expects 6% return. Is she on track? Show your working and recommend adjustments.",
       "Propose an asset allocation for a 62-year-old retiring in 3 years with moderate risk tolerance, and justify each part in plain language."],
  senior:["A client with 5 million in assets wants to pass wealth to their children tax-efficiently. Outline the plan, the questions you must ask and the compliance risks.",
          "Markets drop 25%. Draft the message you would send to your 20 largest clients and the actions you would take on their portfolios."]},
 accounting:{
  basic:["Record these as journal entries: purchase of equipment for 10,000 on credit, then payment of 4,000 in cash. Explain each debit and credit.",
         "List the steps of a bank reconciliation and say what you do with 3 unmatched items."],
  mid:["Prepare a month-end close checklist of 10 items in the order you would do them.",
       "A company recognised 120,000 of revenue upfront for a 12-month subscription. Explain the problem and show the correct treatment for month 1."],
  senior:["Design 8 internal controls to reduce the risk of payment fraud in accounts payable and say what each prevents.",
          "You find a 450,000 misstatement in a draft audit. Describe how you assess materiality, who you inform and what you do next."]},
 marketing:{
  basic:["Write 3 versions of a social media post announcing a new coffee product for students, each in a different tone.",
         "A small bakery has a budget of 300 per month. Suggest a channel plan and the results you would expect."],
  mid:["A campaign got 50,000 impressions, 1,000 clicks and 20 sales on a 2,000 spend. Calculate CTR, conversion rate and cost per sale, then recommend what to change.",
       "Create a 4-week content calendar outline for launching a fitness app."],
  senior:["Write a go-to-market plan summary for a new B2B software product: audience, positioning, channels, budget split and success metrics.",
          "Design an A/B test for a landing page: hypothesis, metric, sample size logic and decision rule."]},
 sales:{
  basic:["Write a 60-second cold call script for selling accounting software to small businesses.",
         "A prospect says 'we already have a vendor'. Write your response and your next question."],
  mid:["You have 10 leads (3 hot, 4 warm, 3 cold) and 5 hours this week. Plan your time and explain why.",
       "Draft a follow-up email after a demo for a deal that has stalled for two weeks."],
  senior:["Your quota is 1,000,000 and your pipeline is 4,000,000 with a 25% win rate. Is that enough? What would you change?",
          "Design a scorecard with 6 criteria to qualify enterprise deals."]},
 hr:{
  basic:["Write 5 structured interview questions for a customer service role and say what a strong answer looks like for each.",
         "Draft a short welcome email for a new hire's first day."],
  mid:["An employee has been late 8 times in two months. Describe your process step by step, including documentation.",
       "Design a 30-60-90 day onboarding plan outline for a sales executive."],
  senior:["Attrition is 28% in one department. Outline how you would diagnose the causes and your 90-day action plan.",
          "Draft the key messages and the process for a restructuring that affects 40 employees."]},
 pm:{
  basic:["Break a project to launch a company website into 10 tasks with rough durations and dependencies.",
         "Write a short status update for a project that is one week behind, with a clear recovery plan."],
  mid:["Create a risk table with probability, impact, owner and mitigation for 5 realistic risks of a software rollout.",
       "Compare agile and waterfall for building a hospital booking system and recommend one."],
  senior:["Three projects compete for the same 6 people. Design the prioritisation method and the decision you would present to the steering committee.",
          "A key stakeholder wants to add scope and keep the deadline. Write your negotiation plan with options."]},
 design:{
  basic:["Critique the sign-up flow of any app you use: 3 problems and your fixes.",
         "Describe your layout and hierarchy choices for a one-page poster for a music festival."],
  mid:["List the steps and questions for a 5-user usability test of a food delivery checkout.",
       "Design a simple colour and type system (primary, secondary, 2 fonts, 3 rules) for a fintech brand."],
  senior:["Create a plan to introduce a design system to 4 product teams over 6 months: milestones and adoption risks.",
          "A redesign launched and conversion fell 8%. Describe how you investigate and respond."]},
 healthcare:{
  basic:["Describe your handover (for example SBAR) for a patient with new chest pain to the next shift.",
         "List the steps for safe medication administration before giving a drug."],
  mid:["Prioritise these 4 patients and explain the order: stable post-op, new chest pain, a fall with minor injury, an anxious patient asking for discharge.",
       "Explain in plain language to a patient how to manage a new diabetes diagnosis in the first week."],
  senior:["Design a plan to reduce falls on a 30-bed ward by 30% in six months.",
          "After a medication error reached a patient, outline the immediate actions, reporting and learning process."]},
 education:{
  basic:["Plan a 40-minute lesson on fractions: objective, 3 activities and how you check understanding.",
         "Write feedback comments on a student essay that is clear but has weak evidence."],
  mid:["Design a differentiated activity for a class with advanced, average and struggling learners.",
       "Draft a message to parents about a student's repeated late homework."],
  senior:["Design a one-term plan to raise maths results in a department by 10%.",
          "Create a coaching plan for a teacher whose lessons lack engagement."]},
 engineering:{
  basic:["A simply supported beam of 4 m carries a 10 kN point load at mid-span. Estimate the maximum bending moment and explain the formula.",
         "List the checks you perform before releasing a drawing for manufacture."],
  mid:["A pump delivers 20 percent less flow than designed. Write your troubleshooting steps in order.",
       "Create a simple FMEA (4 failure modes with effect, cause and control) for a conveyor motor."],
  senior:["Draft a commissioning plan outline for a new production line, including safety and acceptance tests.",
          "A supplier changes a material specification without notice and 500 units have shipped. Outline containment, root cause and corrective actions."]},
 writing:{
  basic:["Rewrite this headline to be clearer and more engaging and give 3 options: 'Local council announces changes to certain municipal services'.",
         "Write a 100-word news intro about a bakery that donates unsold bread."],
  mid:["Edit this sentence for clarity and explain your edits: 'It is the case that at this point in time the team is in the process of making an attempt to improve productivity.'",
       "Pitch a feature story in 120 words: angle, sources and why now."],
  senior:["Outline an editorial calendar and quality standards for a newsroom of 6 over one month.",
          "A published story had a factual error that went viral. Write the correction note and the process steps."]},
 operations:{
  basic:["Daily demand is 120 units, lead time is 5 days and safety stock is 100. Calculate the reorder point and explain it.",
         "List the KPIs you would track for a warehouse and what each tells you."],
  mid:["A line produces 400 units per shift with 8% defects. Propose three improvements and estimate the benefit.",
       "Design a supplier scorecard with 5 criteria and weights."],
  senior:["Design a contingency plan for when your single-source supplier of a key part shuts for 6 weeks.",
          "Outline a plan to reduce logistics cost by 12% without hurting delivery performance."]},
 service:{
  basic:["Write a reply to a customer review complaining about a 40-minute wait and cold food.",
         "A guest demands a free upgrade that is not available. Write what you would say."],
  mid:["Design a 5-step process for handling an escalated complaint from first contact to follow-up.",
       "Create a 30-minute training outline for new staff on handling difficult customers."],
  senior:["Customer satisfaction fell from 4.5 to 3.9. Describe your diagnosis plan and 60-day recovery plan.",
          "Design the service standards and metrics for a new 100-room hotel."]}
};

/* Problem solving. lvl: basic | mid | senior | advanced.
   Numeric items have ans (and optional tol as a fraction, default 1%); open items have no ans. */
const SOLVE = [
 {lvl:"basic",t:"What comes next in the sequence: 2, 6, 12, 20, 30, ?",ans:42,why:"The gaps grow by 2 each time (4, 6, 8, 10, so the next gap is 12): 30 + 12 = 42."},
 {lvl:"basic",t:"A jacket costs 800 after a 20% discount. What was its original price?",ans:1000,why:"800 is 80% of the original, so the original is 800 / 0.8 = 1000."},
 {lvl:"basic",t:"5 workers finish a job in 10 days. At the same pace, how many days would 10 workers need?",ans:5,why:"The job is 50 worker-days. With 10 workers that is 50 / 10 = 5 days."},
 {lvl:"basic",t:"A train travels 150 km in 2.5 hours. At the same speed, how many km does it travel in 4 hours?",ans:240,why:"Speed is 150 / 2.5 = 60 km/h, and 60 x 4 = 240 km."},
 {lvl:"mid",t:"Sales rise 20% in month one and then fall 20% in month two. What is the net percentage change? (Enter a number, for example 5 or -5.)",ans:-4,tol:0.02,why:"1.2 x 0.8 = 0.96, a net change of -4%."},
 {lvl:"mid",t:"Task A takes 3 days. B (2 days) and C (4 days) both start after A finishes. D (2 days) starts after both B and C finish. What is the shortest total project duration in days?",ans:9,why:"A (3) + the longer of B and C (4) + D (2) = 9 days."},
 {lvl:"mid",t:"Two pipes fill a tank in 6 hours and 12 hours separately. Working together, how many hours do they need?",ans:4,why:"Rates add: 1/6 + 1/12 = 1/4 per hour, so 4 hours."},
 {lvl:"mid",t:"You have 1,000 customers and lose 5% of those remaining each month. Roughly how many remain after 12 months?",ans:540,tol:0.03,why:"1000 x 0.95^12 is about 540."},
 {lvl:"mid",t:"Your weekly sign-ups fell from 400 to 340. What is the percentage drop? (Enter a number.)",ans:15,why:"60 / 400 = 15%."},
 {lvl:"senior",t:"Eight identical-looking coins include one slightly heavier coin. Using a balance scale, what is the minimum number of weighings that guarantees you find it?",ans:2,why:"Weigh 3 against 3. If they balance the heavy coin is among the other 2 (one more weighing). If not, it is in the heavier group of 3, and one weighing of 1 against 1 finds it. So 2."},
 {lvl:"senior",t:"A product has a 70% gross margin. Marketing costs 20% of revenue and operations cost 30% of revenue. What is the operating margin in percent?",ans:20,why:"70% - 20% - 30% = 20%."},
 {lvl:"senior",t:"A funnel has 10,000 visits, 4% sign up and 25% of sign-ups pay 30 per month. What is the monthly revenue?",ans:3000,why:"10,000 x 0.04 = 400 sign-ups; x 0.25 = 100 payers; x 30 = 3,000."},
 {lvl:"senior",t:"Two people each toss a fair coin three times. What is the probability, in percent, that they get exactly the same number of heads?",ans:31.25,tol:0.02,why:"(1 + 9 + 9 + 1) / 64 = 20/64 = 31.25%."},
 {lvl:"senior",t:"A 10-step process has a 95% success rate at each step and no rework. What is the end-to-end success rate in percent? Then say how you would improve it.",ans:59.9,tol:0.02,why:"0.95^10 is about 0.599, so roughly 60%. Improving the weakest steps, adding checks and removing steps all raise it."},
 {lvl:"senior",t:"Estimate the annual revenue of a busy neighbourhood cafe. State your assumptions, do the calculation and sanity-check the result."},
 {lvl:"basic",t:"You buy 3 notebooks at 45 each and pay with a 200 note. How much change do you get?",ans:65,why:"3 x 45 = 135, and 200 - 135 = 65."},
 {lvl:"basic",t:"A shop runs 'buy 2, get 1 free' on items that cost 60 each. You need 9 items. What is the total you pay?",ans:360,why:"Every group of 3 items costs for 2, so 9 items means 6 paid items: 6 x 60 = 360."},
 {lvl:"basic",t:"A meeting starts at 2:45 pm and runs 95 minutes. How many minutes after 4:00 pm does it end?",ans:20,why:"2:45 pm + 95 min = 4:20 pm, which is 20 minutes after 4:00 pm."},
 {lvl:"basic",t:"Your phone is at 10% battery, you have an important call in one hour and no charger. What do you do, in order, and why?"},
 {lvl:"mid",t:"Plan A costs 30 per month plus a 120 setup fee. Plan B costs 45 per month with no fee. After how many whole months does Plan A become cheaper in total?",ans:9,why:"A is 30m + 120 and B is 45m. They are equal at m = 8, so A is cheaper from month 9."},
 {lvl:"mid",t:"A task needs 240 hours. Two people work 6 hours a day and one person works 4 hours a day. How many days will it take?",ans:15,why:"Together they do 6 + 6 + 4 = 16 hours a day, and 240 / 16 = 15 days."},
 {lvl:"mid",t:"Supplier X sells at 90 per unit but 4% of units are defective and are replaced at 90 each. Supplier Y sells at 100 per unit with 0.5% defective, replaced at 100 each. For 1,000 units, how much more does Y cost than X in total?",ans:6900,why:"X: 90,000 + 40 x 90 = 93,600. Y: 100,000 + 5 x 100 = 100,500. Difference = 6,900. Compare this with the quality risk before you decide."},
 {lvl:"mid",t:"Two different people give you conflicting deadlines for the same morning. What do you do, step by step?"},
 {lvl:"senior",t:"A campaign costs 5,000 and brings 200 customers who each give 40 profit. What is the return on investment as a percentage?",ans:60,why:"Profit is 200 x 40 = 8,000. Net gain is 8,000 - 5,000 = 3,000, and 3,000 / 5,000 = 60%."},
 {lvl:"senior",t:"You can sign a safe contract worth 50,000, or a risky one that pays 120,000 with a 40% chance and nothing otherwise. What is the expected value of the risky contract?",ans:48000,why:"0.4 x 120,000 = 48,000, slightly below the safe 50,000. Then think about risk tolerance and cash flow before choosing."},
 {lvl:"senior",t:"You sell 120 units a week, the supplier lead time is 2 weeks, and you keep 1 week of safety stock. At what stock level should you reorder?",ans:360,why:"Demand during lead time is 240, plus safety stock of 120 = 360 units."},
 {lvl:"senior",t:"Output fell after your team adopted a new tool. How would you decide whether to keep it? State what you would measure and what result would change your mind."},
 {lvl:"advanced",t:"You borrow 100,000 at 8% compound interest per year with no repayments. What is the balance after 2 years?",ans:116640,why:"100,000 x 1.08 x 1.08 = 116,640."},
 {lvl:"advanced",t:"Fixed costs are 90,000 per month, the price is 50 per unit and variable cost is 20 per unit. How many units must you sell each month to break even?",ans:3000,why:"Each unit contributes 50 - 20 = 30. 90,000 / 30 = 3,000 units."},
 {lvl:"advanced",t:"Two critical projects both need your only specialist for the next 3 weeks. Decide, quantify the trade-off with stated assumptions, and say what new fact would change your decision."},
 {lvl:"advanced",t:"Estimate how many cups of coffee are sold in your city each day. State your assumptions, calculate, and sanity-check the result."},
 {lvl:"advanced",t:"A key metric dropped 15% week over week with no release. List the hypotheses you would test, in order, and how you would check each."},
 {lvl:"advanced",t:"You have three important tasks and time for only two. Each differs in impact, effort and deadline. Explain the framework you would use and apply it to an example."},
 {lvl:"advanced",t:"You must choose between two options with incomplete data and a deadline tomorrow. Describe how you decide, what you would still verify, and how you limit the downside."}
];

/* JavaScript coding challenges. tests: [[args...], expected]. The first two tests are shown as examples; the rest stay hidden. */
const CODE = [
 {lvl:"basic",title:"Reverse the words",fn:"reverseWords",
  hint:"Split on whitespace (watch for empty strings), reverse the array, then join with one space.",
  prompt:"Write reverseWords(s) that returns the words of s in reverse order, separated by a single space. Ignore extra spaces.",
  starter:"function reverseWords(s) {\n  // your code here\n}\n",
  tests:[[["hello world"],"world hello"],[["  a   good  day "],"day good a"],[["single"],"single"],[[""],""]]},
 {lvl:"basic",title:"Second largest",fn:"secondLargest",
  hint:"Work with distinct values only: a Set plus sorting works, or keep two variables while looping.",
  prompt:"Write secondLargest(arr) that returns the second largest DISTINCT number in the array, or null if there is none.",
  starter:"function secondLargest(arr) {\n  // your code here\n}\n",
  tests:[[[[3,1,4,1,5]],4],[[[5,5,5]],null],[[[2]],null],[[[-1,-5,-3]],-3],[[[10,9]],9]]},
 {lvl:"basic",title:"Palindrome check",fn:"isPalindrome",
  hint:"Clean the string first (lower-case, keep letters and digits), then compare it with its reverse or use two pointers.",
  prompt:"Write isPalindrome(s) that returns true if s reads the same forwards and backwards, ignoring case and non-alphanumeric characters.",
  starter:"function isPalindrome(s) {\n  // your code here\n}\n",
  tests:[[["A man, a plan, a canal: Panama"],true],[["race a car"],false],[[""],true],[["No 'x' in Nixon"],true]]},
 {lvl:"mid",title:"Two sum",fn:"twoSum",
  hint:"Use a Map from value to index while looping and check whether target minus the current value is already in it.",
  prompt:"Write twoSum(nums, target) that returns the indices [i, j] with i < j whose values add up to target. There is at most one valid pair. Return [] if none. Aim for better than O(n^2).",
  starter:"function twoSum(nums, target) {\n  // your code here\n}\n",
  tests:[[[[2,7,11,15],9],[0,1]],[[[3,2,4],6],[1,2]],[[[3,3],6],[0,1]],[[[1,2,3],7],[]],
         [[(()=>{const a=Array.from({length:20000},()=>1);a[3]=1000000;a[19990]=2000000;return a;})(),3000000],[3,19990]]]},
 {lvl:"mid",title:"Valid brackets",fn:"isValid",
  hint:"Use a stack: push opening brackets, and a closing bracket must match the top of the stack.",
  prompt:"Write isValid(s) for a string containing only ()[]{} that returns true if every bracket is closed in the correct order.",
  starter:"function isValid(s) {\n  // your code here\n}\n",
  tests:[[["()[]{}"],true],[["(]"],false],[["([)]"],false],[["{[]}"],true],[[""],true],[["(("],false]]},
 {lvl:"mid",title:"Count anagram groups",fn:"countAnagramGroups",
  hint:"Sort the letters of each word and use that as a key in a Set.",
  prompt:"Write countAnagramGroups(words) that returns how many groups of words are anagrams of each other.",
  starter:"function countAnagramGroups(words) {\n  // your code here\n}\n",
  tests:[[[["eat","tea","tan","ate","nat","bat"]],3],[[[]],0],[[["a"]],1],[[["ab","ba","abc"]],2]]},
 {lvl:"mid",title:"Longest unique substring",fn:"lengthOfLongestSubstring",
  hint:"Sliding window: keep a Map of last seen positions and move the left edge past repeats.",
  prompt:"Write lengthOfLongestSubstring(s) that returns the length of the longest substring without repeating characters. It must handle long inputs quickly.",
  starter:"function lengthOfLongestSubstring(s) {\n  // your code here\n}\n",
  tests:[[["abcabcbb"],3],[["bbbbb"],1],[["pwwkew"],3],[[""],0],[["abcdefghij".repeat(5000)],10]]},
 {lvl:"mid",title:"Maximum subarray",fn:"maxSubarray",
  hint:"At each number decide whether to extend the running sum or start fresh (Kadane's idea).",
  prompt:"Write maxSubarray(nums) that returns the largest sum of any contiguous, non-empty subarray.",
  starter:"function maxSubarray(nums) {\n  // your code here\n}\n",
  tests:[[[[-2,1,-3,4,-1,2,1,-5,4]],6],[[[1]],1],[[[-3,-2,-1]],-1],[[[5,4,-1,7,8]],23]]},
 {lvl:"senior",title:"Merge intervals",fn:"mergeIntervals",
  hint:"Sort by start, then walk through and extend the last merged interval when the next one overlaps.",
  prompt:"Write mergeIntervals(intervals) that merges all overlapping intervals (touching ones such as [1,4] and [4,5] also merge) and returns them sorted by start.",
  starter:"function mergeIntervals(intervals) {\n  // your code here\n}\n",
  tests:[[[[[1,3],[2,6],[8,10],[15,18]]],[[1,6],[8,10],[15,18]]],[[[[1,4],[4,5]]],[[1,5]]],[[[[5,6],[1,2]]],[[1,2],[5,6]]],[[[]],[]],[[[[1,10],[2,3]]],[[1,10]]]]},
 {lvl:"senior",title:"LRU cache",fn:"lru",
  hint:"A Map keeps insertion order: delete and re-set a key to mark it recently used, and evict the first key.",
  prompt:"Write lru(capacity, ops) that simulates an LRU cache. Each op is ['put', key, value] or ['get', key]. A get returns the value or -1 and counts as a use; a put also counts as a use and evicts the least recently used key when over capacity. Return the results of all get operations in order.",
  starter:"function lru(capacity, ops) {\n  // your code here\n}\n",
  tests:[[[2,[["put",1,1],["put",2,2],["get",1],["put",3,3],["get",2],["get",3]]],[1,-1,3]],
         [[1,[["put",1,1],["put",2,2],["get",1],["get",2]]],[-1,2]],
         [[2,[["put",1,1],["put",2,2],["put",1,10],["put",3,3],["get",1],["get",2]]],[10,-1]],
         [[2,[["put",1,1],["put",2,2],["get",1],["put",3,3],["get",2],["get",1]]],[1,-1,1]],
         [[1000,Array.from({length:60000},(_,i)=>i%3===0?["put",i%1500,i]:["get",(i*7)%1500])],(()=>{const m=new Map(),cap=1000,out=[];for(let i=0;i<60000;i++){if(i%3===0){const k=i%1500;if(m.has(k))m.delete(k);m.set(k,i);if(m.size>cap)m.delete(m.keys().next().value);}else{const k=(i*7)%1500;if(m.has(k)){const v=m.get(k);m.delete(k);m.set(k,v);out.push(v);}else out.push(-1);}}return out;})()]]},
 {lvl:"senior",title:"Top K frequent",fn:"topK",
  hint:"Count with a Map, then sort the entries by count descending and value ascending.",
  prompt:"Write topK(nums, k) that returns the k most frequent numbers, ordered by frequency (highest first). Break ties by the smaller number first.",
  starter:"function topK(nums, k) {\n  // your code here\n}\n",
  tests:[[[[1,1,1,2,2,3],2],[1,2]],[[[1],1],[1]],[[[4,4,5,5,6],2],[4,5]],[[[-1,-1,-2,-2,-2,3],2],[-2,-1]]]},
 {lvl:"advanced",title:"Rate limiter",fn:"rateLimiter",
  hint:"Keep a queue of allowed timestamps and drop the ones that are too old before checking the limit.",
  prompt:"Write rateLimiter(limit, windowMs, times) for requests arriving at the ascending timestamps in times. A request at time t is allowed if fewer than limit ALLOWED requests have a time greater than t - windowMs. Return an array of booleans. It must handle 100,000 requests quickly.",
  starter:"function rateLimiter(limit, windowMs, times) {\n  // your code here\n}\n",
  tests:[[[2,10,[1,2,3,11,12,13]],[true,true,false,true,true,false]],[[1,5,[0,1,5,6,10]],[true,false,true,false,true]],[[3,1000,[]],[]],
         [[5,1000,Array.from({length:100000},(_,i)=>i*10)],(()=>{const q=[],out=[];let h=0;for(let i=0;i<100000;i++){const t=i*10;while(h<q.length&&q[h]<=t-1000)h++;if(q.length-h<5){q.push(t);out.push(true);}else out.push(false);}return out;})()]]},
 {lvl:"advanced",title:"Shortest path in a grid",fn:"shortestPath",
  hint:"Breadth-first search from the start with a visited set; each layer is one more move.",
  prompt:"Write shortestPath(grid) where 0 is open and 1 is a wall. Moving up, down, left or right, return the minimum number of moves from the top-left to the bottom-right cell, or -1 if it is impossible (or the start or end is a wall).",
  starter:"function shortestPath(grid) {\n  // your code here\n}\n",
  tests:[[[[[0,0,0],[1,1,0],[0,0,0]]],4],[[[[0,1],[1,0]]],-1],[[[[0]]],0],[[[[1,0],[0,0]]],-1],[[Array.from({length:200},()=>Array(200).fill(0))],398]]},
 {lvl:"advanced",title:"Coin change",fn:"coinChange",
  hint:"Dynamic programming: best[a] = 1 + the minimum of best[a - coin] over all coins.",
  prompt:"Write coinChange(coins, amount) that returns the fewest coins needed to make amount (unlimited coins of each value), or -1 if impossible. It must handle large amounts quickly.",
  starter:"function coinChange(coins, amount) {\n  // your code here\n}\n",
  tests:[[[[1,2,5],11],3],[[[2],3],-1],[[[1],0],0],[[[186,419,83,408],6249],20]]},
 {lvl:"basic",title:"FizzBuzz list",fn:"fizzBuzz",
  hint:"Loop from 1 to n. Check divisibility by 15 first.",
  prompt:"Write fizzBuzz(n) returning an array of strings for 1..n: 'Fizz' for multiples of 3, 'Buzz' for multiples of 5, 'FizzBuzz' for both, otherwise the number as a string.",
  starter:"function fizzBuzz(n) {\n  // your code here\n}\n",
  tests:[[[5],["1","2","Fizz","4","Buzz"]],[[15],["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]],[[0],[]],[[3],["1","2","Fizz"]]]},
 {lvl:"basic",title:"Count vowels",fn:"countVowels",
  hint:"Lower-case the text and count characters in 'aeiou'.",
  prompt:"Write countVowels(s) that returns how many vowels (a, e, i, o, u, in any case) the string contains.",
  starter:"function countVowels(s) {\n  // your code here\n}\n",
  tests:[[["Hello World"],3],[[""],0],[["rhythm"],0],[["AEIOU aeiou"],10]]},
 {lvl:"basic",title:"Sum of digits",fn:"sumDigits",
  hint:"Use n % 10 and Math.floor(n / 10), or convert to a string.",
  prompt:"Write sumDigits(n) that returns the sum of the digits of a non-negative integer.",
  starter:"function sumDigits(n) {\n  // your code here\n}\n",
  tests:[[[123],6],[[0],0],[[9999],36],[[1000000],1]]},
 {lvl:"mid",title:"First non-repeating character",fn:"firstUnique",
  hint:"Count characters first, then scan the string again in order.",
  prompt:"Write firstUnique(s) that returns the first character that appears exactly once, or an empty string if none does.",
  starter:"function firstUnique(s) {\n  // your code here\n}\n",
  tests:[[["swiss"],"w"],[["aabb"],""],[[""],""],[["leetcode"],"l"]]},
 {lvl:"mid",title:"Rotate an array",fn:"rotateRight",
  hint:"Use k % length, then slice the end and put it in front.",
  prompt:"Write rotateRight(arr, k) that returns a new array rotated to the right by k positions. k can be larger than the array length.",
  starter:"function rotateRight(a,k) {\n  // your code here\n}\n",
  tests:[[[[1,2,3,4,5],2],[4,5,1,2,3]],[[[1,2,3],5],[2,3,1]],[[[],3],[]],[[[7],10],[7]]]},
 {lvl:"mid",title:"Deep flatten",fn:"deepFlatten",
  hint:"Recurse into any element that is an array.",
  prompt:"Write deepFlatten(arr) that flattens nested arrays of any depth into one array, keeping the order.",
  starter:"function deepFlatten(a) {\n  // your code here\n}\n",
  tests:[[[[1,[2,[3,[4]]]]],[1,2,3,4]],[[[]],[]],[[[[],[[]],5]],[5]]]},
 {lvl:"senior",title:"Product of the rest",fn:"productExceptSelf",
  hint:"Build prefix products going right, then multiply by suffix products going left. Do not divide.",
  prompt:"Write productExceptSelf(nums) that returns an array where each item is the product of all other items. Do not use division, and aim for O(n).",
  starter:"function productExceptSelf(n) {\n  // your code here\n}\n",
  tests:[[[[1,2,3,4]],[24,12,8,6]],[[[0,1,2]],[2,0,0]],[[[5]],[1]],[[[2,3,0,4]],[0,0,24,0]]]},
 {lvl:"senior",title:"Search in a rotated array",fn:"searchRotated",
  hint:"Binary search: at each step one half is always sorted.",
  prompt:"A sorted array of distinct numbers was rotated at an unknown point. Write searchRotated(nums, target) returning the index of target or -1, in O(log n).",
  starter:"function searchRotated(a,t) {\n  // your code here\n}\n",
  tests:[[[[4,5,6,7,0,1,2],0],4],[[[4,5,6,7,0,1,2],3],-1],[[[1],1],0],[[[3,1],1],1]]},
 {lvl:"advanced",title:"Longest increasing subsequence",fn:"lis",
  hint:"Keep the smallest possible tail for each length and use binary search. O(n log n) is needed for large input.",
  prompt:"Write lis(nums) returning the length of the longest strictly increasing subsequence. It must handle 100,000 numbers quickly.",
  starter:"function lis(a) {\n  // your code here\n}\n",
  tests:[[[[10,9,2,5,3,7,101,18]],4],[[[]],0],[[[0,1,0,3,2,3]],4],[[Array.from({length:100000},(_,i)=>i)],1]]},
 {lvl:"advanced",title:"Count islands",fn:"numIslands",
  hint:"Flood-fill each unvisited land cell with an explicit stack, not recursion, so large grids do not overflow.",
  prompt:"Write numIslands(grid) where 1 is land and 0 is water. Count groups of land connected up, down, left or right. It must handle a 500 x 500 grid.",
  starter:"function numIslands(g) {\n  // your code here\n}\n",
  tests:[[[[[1,1,0],[0,1,0],[0,0,1]]],2],[[[[0]]],0],[[[[1,0,1],[0,1,0],[1,0,1]]],5],[[Array.from({length:500},(_,i)=>Array.from({length:500},(_,j)=>(i+j)%2))],0]]}
];

if (typeof module !== "undefined") module.exports = { UNIVERSAL_TASKS, PRACTICAL, SOLVE, CODE };

/* ---------- Generators: fresh numbers on every run, so no two sessions are identical ---------- */
const _r = (a, b) => a + Math.floor(Math.random() * (b - a + 1));
const _pick = a => a[Math.floor(Math.random() * a.length)];
const _money = n => n.toLocaleString("en-US");
const _r2 = n => Math.round(n * 100) / 100;
const GEN_SOLVE = {
  basic: [
    () => { const O = _r(4, 40) * 50, d = _pick([10, 20, 25, 30, 40]), P = O * (1 - d / 100);
      return { t: `An item costs ${_money(P)} after a ${d}% discount. What was the original price?`, ans: O, why: `${_money(P)} is ${100 - d}% of the original, so the original is ${_money(P)} / ${(1 - d / 100).toFixed(2)} = ${_money(O)}.` }; },
    () => { const w = _r(3, 8), days = _r(6, 20), w2 = w * _pick([2, 3]);
      return { t: `${w} people finish a job in ${days} days. At the same pace, how many days would ${w2} people need?`, ans: w * days / w2, why: `The job is ${w * days} person-days. With ${w2} people it takes ${w * days} / ${w2} = ${w * days / w2} days.` }; },
    () => { const n1 = _r(4, 12), n2 = n1 * _pick([2, 3]) + _r(0, 2), p1 = _r(10, 40), p2 = Math.round(p1 * n2 / n1 * _pick([0.8, 0.9, 1.1, 1.2])),
        u1 = p1 / n1, u2 = p2 / n2;
      return { t: `Pack A has ${n1} units for ${p1}. Pack B has ${n2} units for ${p2}. What is the lowest price per unit you can get? (2 decimals)`, ans: _r2(Math.min(u1, u2)), tol: 0.02, why: `A costs ${_r2(u1)} per unit and B costs ${_r2(u2)} per unit. Take the lower one.` }; },
    () => { const b = _r(4, 30) * 10, t = _pick([5, 8, 10]), s = _pick([10, 12, 15]);
      return { t: `A bill is ${b}. Tax of ${t}% is added to the bill, and then a ${s}% service charge is added on the bill before tax. What is the total? (2 decimals)`, ans: _r2(b + b * t / 100 + b * s / 100), tol: 0.02, why: `Tax ${_r2(b * t / 100)} + service ${_r2(b * s / 100)} + bill ${b}.` }; }
  ],
  mid: [
    () => { const p = _r(20, 60), v = _r(8, p - 8), F = _r(10, 90) * 100, ans = Math.ceil(F / (p - v));
      return { t: `Fixed costs are ${_money(F)}. Each unit sells for ${p} and costs ${v} to make. How many units (whole number, rounded up) do you need to sell to break even?`, ans, why: `Profit per unit is ${p - v}. ${_money(F)} / ${p - v} = ${_r2(F / (p - v))}, rounded up to ${ans}.` }; },
    () => { const x = _pick([10, 20, 25, 30, 40, 50]), y = _pick([10, 20, 25, 30, 40, 50]);
      return { t: `A figure rises ${x}% and then falls ${y}%. What is the net change in percent? (negative if it fell, 2 decimals)`, ans: _r2(((1 + x / 100) * (1 - y / 100) - 1) * 100), tol: 0.02, why: `Multiply: ${1 + x / 100} x ${1 - y / 100} = ${_r2((1 + x / 100) * (1 - y / 100))}, so the change is ${_r2(((1 + x / 100) * (1 - y / 100) - 1) * 100)}%. Percent changes do not cancel.` }; },
    () => { const a = _r(3, 8), b = a + _r(2, 8);
      return { t: `Person A can finish a task in ${a} hours and person B in ${b} hours. Working together, how many hours does it take? (2 decimals)`, ans: _r2(1 / (1 / a + 1 / b)), tol: 0.02, why: `Rates add: 1/${a} + 1/${b}. Together the time is 1 / (1/${a} + 1/${b}) = ${_r2(1 / (1 / a + 1 / b))} hours.` }; },
    () => { const c = _r(4, 40) * 10, m = _pick([20, 25, 30, 40, 50]);
      return { t: `Your cost is ${c}. You want a ${m}% profit margin on the selling price (not on cost). What price do you charge? (2 decimals)`, ans: _r2(c / (1 - m / 100)), tol: 0.02, why: `Margin is a share of the price, so price = cost / (1 - ${m / 100}) = ${_r2(c / (1 - m / 100))}.` }; }
  ],
  senior: [
    () => { const P = _r(5, 40) * 1000, r = _pick([4, 5, 6, 8, 10]), n = _r(3, 8);
      return { t: `You invest ${_money(P)} at ${r}% a year, compounded yearly. What is it worth after ${n} years? (nearest whole number)`, ans: Math.round(P * Math.pow(1 + r / 100, n)), tol: 0.005, why: `${_money(P)} x ${1 + r / 100}^${n} = ${_money(Math.round(P * Math.pow(1 + r / 100, n)))}.` }; },
    () => { const Ca = _r(6, 30) * 1000, Cb = _r(6, 30) * 1000, sa = _r(3, 12) * 100, sb = _r(3, 12) * 100, pa = Ca / sa, pb = Cb / sb;
      if (Math.abs(pa - pb) < 1) return GEN_SOLVE.senior[1]();
      return { t: `Option A costs ${_money(Ca)} and saves ${_money(sa)} a month. Option B costs ${_money(Cb)} and saves ${_money(sb)} a month. In how many months does the better option pay itself back? (1 decimal)`, ans: Math.round(Math.min(pa, pb) * 10) / 10, tol: 0.02, why: `A pays back in ${_r2(pa)} months and B in ${_r2(pb)} months. The shorter one wins.` }; },
    () => { const p = _pick([20, 30, 40, 60]), G = _r(5, 40) * 10000, C = _r(2, 8) * 10000, ev = G * p / 100 - C;
      if (ev === 0) return GEN_SOLVE.senior[2]();
      return { t: `A project costs ${_money(C)}. It has a ${p}% chance of paying ${_money(G)} and otherwise pays nothing. What is the expected net value? (negative if a loss)`, ans: ev, why: `${p}% x ${_money(G)} = ${_money(G * p / 100)}, minus the cost ${_money(C)} gives ${_money(ev)}. A positive expected value is not the only factor: also weigh how much loss you can survive.` }; },
    () => { const q = _r(40, 200), h = _r(5, 12), u = _pick([70, 75, 80, 85]), ans = Math.ceil(q / (h * u / 100));
      return { t: `You get ${q} requests an hour. One person handles ${h} an hour but can only be productive ${u}% of the time. How many people (whole number, rounded up) do you need?`, ans, why: `Real capacity is ${h} x ${u / 100} = ${_r2(h * u / 100)} per person. ${q} / ${_r2(h * u / 100)} = ${_r2(q / (h * u / 100))}, rounded up to ${ans}.` }; }
  ],
  advanced: [
    () => { const I = _r(10, 40) * 1000, cf = Math.round(I * _pick([0.4, 0.45, 0.5]) / 100) * 100, r = _pick([8, 10, 12]);
      const npv = Math.round(cf / (1 + r / 100) + cf / Math.pow(1 + r / 100, 2) + cf / Math.pow(1 + r / 100, 3) - I);
      return { t: `You invest ${_money(I)} now and receive ${_money(cf)} at the end of each of the next 3 years. At a ${r}% discount rate, what is the net present value? (nearest whole number, negative if a loss)`, ans: npv, tol: 0.02, why: `Discount each payment: ${_money(cf)}/${1 + r / 100}, /${1 + r / 100}^2, /${1 + r / 100}^3, add them and subtract ${_money(I)}. That gives ${_money(npv)}.` }; },
    () => { const a = _r(90, 98), b = _r(90, 98), c = _r(90, 98);
      return { t: `A process has 3 stages with yields of ${a}%, ${b}% and ${c}%. What is the overall yield in percent? (2 decimals)`, ans: _r2(a * b * c / 10000), tol: 0.01, why: `Multiply the yields: ${a / 100} x ${b / 100} x ${c / 100} = ${_r2(a * b * c / 10000)}%. Small losses compound.` }; },
    () => { const d = _r(20, 80), L = _r(2, 9), ss = _r(10, 60), ans = d * L + ss;
      return { t: `Demand is ${d} units a day, a supplier takes ${L} days to deliver, and you keep a safety stock of ${ss} units. At what stock level should you reorder?`, ans, why: `Demand during lead time is ${d} x ${L} = ${d * L}. Add the safety stock ${ss} to get ${ans}.` }; },
    () => { const s = _r(40, 120), a = _r(60, 85), w = _r(2, 6) * 10, ans = Math.round(100 * w / (a - s / 2) * 0) + 0;
      const rate = _r(2, 9) * 10, hrs = _r(6, 24), lost = _r(5, 20);
      return { t: `A team of ${rate / 10 + 2} people each lose ${lost}% of their week to meetings. The rest of their 40-hour week goes to project work. How many project hours does the team deliver per week? (nearest whole number)`, ans: Math.round((rate / 10 + 2) * 40 * (1 - lost / 100)), tol: 0.01, why: `Each person has ${40 * (1 - lost / 100)} project hours. Multiply by ${rate / 10 + 2} people.` }; }
  ]
};

/* Data-interpretation problems: the data is in the question, the answer is a number */
const _mon = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
Object.assign(GEN_SOLVE, {});
GEN_SOLVE.basic.push(
  () => { const v = Array.from({ length: 5 }, () => _r(20, 90)), sum = v.reduce((a, b) => a + b, 0), days = ["Mon", "Tue", "Wed", "Thu", "Fri"];
    return { t: `Orders received this week: ${days.map((d, i) => d + " " + v[i]).join(", ")}. What is the average number of orders per day? (2 decimals)`, ans: _r2(sum / 5), tol: 0.02, why: `Total ${sum} divided by 5 days = ${_r2(sum / 5)}.` }; },
  () => { const N = _r(8, 30) * 10, a = _r(2, 7) * 10, b = _r(1, 4) * 10;
    return { t: `Out of ${N} applicants, ${a} were rejected at screening and a further ${b} withdrew. What percentage of the applicants are still in the process? (2 decimals)`, ans: _r2((N - a - b) / N * 100), tol: 0.02, why: `${N} - ${a} - ${b} = ${N - a - b} remain. ${N - a - b} / ${N} = ${_r2((N - a - b) / N * 100)}%.` }; },
  () => { const v = Array.from({ length: 4 }, () => _r(40, 140)), mx = Math.max(...v), mn = Math.min(...v), q = ["Q1", "Q2", "Q3", "Q4"];
    return { t: `Sales by quarter: ${q.map((x, i) => x + " " + v[i]).join(", ")}. By how much is the best quarter higher than the weakest one?`, ans: mx - mn, why: `Best ${mx} minus weakest ${mn} = ${mx - mn}.` }; }
);
GEN_SOLVE.mid.push(
  () => { const v = [_r(100, 160)]; for (let i = 1; i < 5; i++) v.push(Math.round(v[i - 1] * (1 + _pick([-0.05, 0.04, 0.1, 0.15, 0.2, 0.25]))));
    let best = 1, bg = -9; for (let i = 1; i < 5; i++) { const g = (v[i] - v[i - 1]) / v[i - 1] * 100; if (g > bg) { bg = g; best = i; } }
    return { t: `Monthly sales (units): ${v.map((x, i) => _mon[i] + " " + x).join(", ")}. What was the largest month-on-month growth, in percent? (1 decimal)`, ans: Math.round(bg * 10) / 10, tol: 0.03, why: `Growth is (this month - last month) / last month. The best was ${_mon[best]}: (${v[best]} - ${v[best - 1]}) / ${v[best - 1]} = ${Math.round(bg * 10) / 10}%.` }; },
  () => { const need = _r(12, 30) * 10, pa = _r(10, 14), pb = pa + _r(2, 5), thr = _pick([100, 120]), d = _pick([15, 20, 25]);
    const ca = need * pa, cb = need >= thr ? need * pb * (1 - d / 100) : need * pb;
    return { t: `You need ${need} units. Vendor A charges ${pa} per unit. Vendor B charges ${pb} per unit but gives ${d}% off the whole order when you buy ${thr} or more. How much cheaper is the cheaper vendor for this order? (2 decimals)`, ans: _r2(Math.abs(ca - cb)), tol: 0.02, why: `A costs ${_money(ca)}. B costs ${_money(_r2(cb))}. The difference is ${_r2(Math.abs(ca - cb))}.` }; },
  () => { const t = _r(70, 90), c = _r(60, 85), f = _r(65, 95), wt = _pick([50, 40]), wc = _pick([30, 20]), wf = 100 - wt - wc;
    return { t: `A candidate scores ${t} on technical skills (weight ${wt}%), ${c} on communication (weight ${wc}%) and ${f} on culture fit (weight ${wf}%). What is the weighted score? (2 decimals)`, ans: _r2((t * wt + c * wc + f * wf) / 100), tol: 0.02, why: `(${t} x ${wt} + ${c} x ${wc} + ${f} x ${wf}) / 100 = ${_r2((t * wt + c * wc + f * wf) / 100)}.` }; }
);
GEN_SOLVE.senior.push(
  () => { const A = _r(2, 5), B = _r(3, 6), C = _r(2, 5), D = _r(2, 4);
    return { t: `A project has four tasks. A takes ${A} days. B takes ${B} days and starts after A. C takes ${C} days and also starts after A. D takes ${D} days and starts only after both B and C are done. What is the shortest total duration in days?`, ans: A + Math.max(B, C) + D, why: `The longest path is A + max(B, C) + D = ${A} + ${Math.max(B, C)} + ${D} = ${A + Math.max(B, C) + D}.` }; },
  () => { const V = _r(5, 40) * 1000, s = _pick([2, 3, 4, 5]), c = _pick([10, 15, 20, 25]), pr = _pick([20, 30, 40]);
    return { t: `${_money(V)} people visit a site each month. ${s}% sign up, and ${c}% of those who sign up become paying customers at ${pr} a month. What is the monthly revenue from this group?`, ans: Math.round(V * s / 100 * c / 100 * pr), tol: 0.01, why: `${_money(V)} x ${s}% = ${V * s / 100} sign-ups. x ${c}% = ${V * s / 100 * c / 100} customers. x ${pr} = ${Math.round(V * s / 100 * c / 100 * pr)}.` }; },
  () => { const d = _r(8, 20) * 100, days = _r(15, 30), cd = Math.round(d * _pick([1.3, 1.5])), mo = _r(2, 4) * 1000 * 10;
    const contractor = d * days, ft = Math.round(cd / 10) * 10 * 0 + Math.round(mo / 22 * days);
    return { t: `A contractor costs ${_money(d)} a day and you need them for ${days} working days. A full-time employee costs ${_money(mo)} a month (22 working days) and would also do this work for ${days} days. How much cheaper is the cheaper option for these ${days} days? (nearest whole number)`, ans: Math.abs(Math.round(contractor - mo / 22 * days)), tol: 0.02, why: `Contractor ${_money(contractor)}. Employee ${_money(Math.round(mo / 22 * days))}. The difference is ${_money(Math.abs(Math.round(contractor - mo / 22 * days)))}.` }; }
);
GEN_SOLVE.advanced.push(
  () => { const cs = _r(300, 480) / 10, ctl = _r(2, 4) / 10 * 10, base = _r(30, 50) / 10; const n = _r(1500, 4000), a = _r(35, 50) / 10, up = _pick([10, 15, 20]), b = Math.round(a * (1 + up / 100) * 10) / 10;
    return { t: `An A/B test: the control converts at ${a}% with ${_money(n)} visitors. The variant converts at ${b}% with ${_money(n)} visitors. What is the relative lift of the variant over the control, in percent? (1 decimal)`, ans: Math.round((b - a) / a * 1000) / 10, tol: 0.05, why: `Lift = (${b} - ${a}) / ${a} = ${Math.round((b - a) / a * 1000) / 10}%. Also check the sample size and statistical significance before shipping.` }; },
  () => { const a = _pick([99, 99.5, 99.9]), b = _pick([99, 99.5, 99.9]);
    return { t: `Two services are needed for a request to succeed (in series). One is available ${a}% of the time and the other ${b}%. What is the combined availability in percent? (3 decimals)`, ans: Math.round(a * b / 100 * 1000) / 1000, tol: 0.001, why: `Multiply: ${a / 100} x ${b / 100} = ${Math.round(a * b / 100 * 1000) / 1000}%. Series dependencies lower availability.` }; },
  () => { const L = _r(10, 60), lam = _r(2, 6) * 10;
    return { t: `On average ${L} requests are in a system at any moment, and ${lam} new requests arrive per second. Using Little's law, what is the average time a request spends in the system, in milliseconds?`, ans: Math.round(L / lam * 1000), tol: 0.01, why: `Little's law: L = arrival rate x time, so time = ${L} / ${lam} = ${_r2(L / lam)} seconds = ${Math.round(L / lam * 1000)} ms.` }; },
  () => { const pa = _r(20, 40), pb = _r(10, 30), F = _r(4, 12) * 10000, ma = _r(40, 70), mx = _pick([60, 70]);
    const blend = pa * mx / 100 + pb * (100 - mx) / 100;
    return { t: `You sell product A (margin ${pa} per unit) and product B (margin ${pb} per unit) in a ${mx}:${100 - mx} mix. Fixed costs are ${_money(F)}. How many total units (rounded up) must you sell to break even?`, ans: Math.ceil(F / blend), why: `Blended margin = ${pa} x ${mx / 100} + ${pb} x ${(100 - mx) / 100} = ${_r2(blend)} per unit. ${_money(F)} / ${_r2(blend)} = ${_r2(F / blend)}, rounded up to ${Math.ceil(F / blend)}.` }; }
);
const GEN_ORDER = { basic: ["basic"], mid: ["mid", "basic"], senior: ["senior", "mid"], advanced: ["advanced", "senior"] };
function genSolve(level, n) {
  const out = [], seen = new Set(), usedFn = new Set(), tiers = GEN_ORDER[level] || ["basic"];
  let guard = 0;
  while (out.length < n && guard++ < 60) {
    const tier = tiers[out.length % tiers.length], pool = GEN_SOLVE[tier].filter(f => !usedFn.has(f)), f = _pick(pool.length ? pool : GEN_SOLVE[tier]);
    usedFn.add(f);
    const o = f();
    if (!seen.has(o.t)) { seen.add(o.t); out.push({ type: "solve", t: o.t, ans: o.ans, tol: o.tol, why: o.why }); }
  }
  return out;
}

const GEN_TASK = {
  basic: [
    r => `You are a new ${r} and have ${_r(3, 6)} tasks due by the end of the day, ${_r(1, 2)} of them urgent. Write the order you would do them in and the message you would send to your manager.`,
    r => `A colleague asks you to check their work as a ${r}. You find ${_r(3, 7)} mistakes, ${_r(1, 2)} of them serious. Write exactly what you would say to them.`
  ],
  mid: [
    r => `A ${r} project has a budget of ${_money(_r(20, 90) * 1000)} and you are ${_r(10, 35)}% over after ${_r(4, 8)} of ${_r(10, 16)} weeks. Write a recovery plan: what you cut, what you protect and what you tell the client.`,
    r => `Your team of ${_r(3, 8)} ${r} professionals must deliver in ${_r(5, 12)} days, but ${_r(1, 2)} people are suddenly unavailable. Re-plan the work, say what you drop and write the message to stakeholders.`,
    r => `A client rates your work ${_r(2, 3)} out of 5 and says it does not meet their expectations. As a ${r}, write the steps you take in the next 48 hours.`
  ],
  senior: [
    r => `You lead ${_r(6, 20)} people in a ${r} function and must cut costs by ${_r(10, 25)}% without hurting quality. Write your plan with the numbers you would track and the order of your decisions.`,
    r => `Two of your strongest ${r} professionals threaten to resign the same week a big deliverable is due in ${_r(7, 21)} days. Write your plan for the next 7 days.`,
    r => `Design a ${_r(3, 6)}-month plan to raise customer or client satisfaction from ${_r(60, 75)}% to ${_r(85, 92)}% for a ${r} team. State the metrics, owners and risks.`
  ]
};
function genTasks(role, level, n) {
  const tiers = level === "fresher" ? ["basic"] : level === "mid" ? ["basic", "mid"] : level === "senior" ? ["mid", "senior"] : ["senior"];
  const out = [], seen = new Set(); let guard = 0;
  while (out.length < n && guard++ < 40) {
    const f = _pick(GEN_TASK[_pick(tiers)]), t = f(role);
    if (!seen.has(t)) { seen.add(t); out.push({ type: "task", t }); }
  }
  return out;
}
