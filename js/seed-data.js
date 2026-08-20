export const seasons = [
  {id:"s1-fall",name:"Season 1 • Fall",order:1,start:"2026-08-03",end:"2026-11-19",status:"active",note:"CAA elementary volleyball begins earlier; confirmed IYAC Season 1 competition is Sept. 21–Nov. 19."},
  {id:"s2-late-fall",name:"Season 2 • Late Fall",order:2,start:"2026-09-21",end:"2026-12-19",status:"planned",note:"CAA Boys Volleyball and Girls Flag Football. Exact sport schedules follow league release."},
  {id:"s3-winter",name:"Season 3 • Winter",order:3,start:"2026-11-16",end:"2027-03-10",status:"planned",note:"IYAC basketball is historically Dec–Feb; CAA boys flag runs Jan–Mar."},
  {id:"s4-spring",name:"Season 4 • Spring",order:4,start:"2027-02-15",end:"2027-05-15",status:"planned",note:"IYAC soccer historically Mar–May; CAA spring offerings overlap."}
];

export const teams = [
  {id:"s1-caa-girls-vb-45",seasonId:"s1-fall",name:"Girls Volleyball",sport:"Volleyball",league:"CAA",grades:"4–5",gender:"Girls",costEstimate:1000,status:"active",placement:"Elementary-first"},
  {id:"s1-iyac-girls-vb-ms",seasonId:"s1-fall",name:"MS Girls Volleyball",sport:"Volleyball",league:"IYAC",grades:"6–8",gender:"Girls",costEstimate:0,status:"planned",placement:"IYAC-first; 5th only by exception"},
  {id:"s1-iyac-coed-flag-ms",seasonId:"s1-fall",name:"MS Coed Flag Football",sport:"Flag Football",league:"IYAC",grades:"6–8",gender:"Coed",costEstimate:0,status:"planned",placement:"IYAC-first; 5th only by exception"},
  {id:"s2-caa-boys-vb-46",seasonId:"s2-late-fall",name:"Boys Volleyball",sport:"Volleyball",league:"CAA",grades:"4–6",gender:"Boys",costEstimate:1000,status:"interest",placement:"6th is bridge grade"},
  {id:"s2-caa-girls-flag-45",seasonId:"s2-late-fall",name:"Girls Flag Football",sport:"Flag Football",league:"CAA",grades:"4–5",gender:"Girls",costEstimate:1000,status:"interest",placement:"Elementary-first"},
  {id:"s2-internal-esports",seasonId:"s2-late-fall",name:"Esports",sport:"Esports",league:"Internal",grades:"4–8",gender:"Coed",costEstimate:0,status:"interest",placement:"Mario Kart + Smash Bros as one program"},
  {id:"s2-internal-chess",seasonId:"s2-late-fall",name:"Chess",sport:"Chess",league:"Internal",grades:"4–8",gender:"Coed",costEstimate:0,status:"interest",placement:"Internal"},
  {id:"s3-iyac-boys-bball",seasonId:"s3-winter",name:"MS Boys Basketball",sport:"Basketball",league:"IYAC",grades:"6–8",gender:"Boys",costEstimate:0,status:"planned",placement:"IYAC-first; 5th only by exception"},
  {id:"s3-iyac-girls-bball",seasonId:"s3-winter",name:"MS Girls Basketball",sport:"Basketball",league:"IYAC",grades:"6–8",gender:"Girls",costEstimate:0,status:"planned",placement:"IYAC-first; 5th only by exception"},
  {id:"s3-caa-boys-flag-45",seasonId:"s3-winter",name:"Boys Flag Football",sport:"Flag Football",league:"CAA",grades:"4–5",gender:"Boys",costEstimate:1000,status:"planned",placement:"Elementary-first"},
  {id:"s4-iyac-coed-soccer",seasonId:"s4-spring",name:"MS Coed Soccer",sport:"Soccer",league:"IYAC",grades:"6–8",gender:"Coed",costEstimate:0,status:"planned",placement:"IYAC-first; 5th only by exception"},
  {id:"s4-caa-boys-bball-45",seasonId:"s4-spring",name:"Boys Basketball",sport:"Basketball",league:"CAA",grades:"4–5",gender:"Boys",costEstimate:1000,status:"planned",placement:"Elementary-first"},
  {id:"s4-caa-coed-soccer-45",seasonId:"s4-spring",name:"Coed Soccer",sport:"Soccer",league:"CAA",grades:"4–5",gender:"Coed",costEstimate:1000,status:"viability",placement:"Only if participation supports cost"}
];
