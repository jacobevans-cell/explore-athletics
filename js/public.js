import { db } from "./firebase.js";
import { teams as fallbackTeams, programWindows, windowMap } from "./seed-data.js";
import { collection,getDocs } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-firestore.js";

const $=id=>document.getElementById(id);
let teams=fallbackTeams;
try{
  const snap=await getDocs(collection(db,"teams"));
  if(!snap.empty) teams=snap.docs.map(d=>({id:d.id,...d.data()}));
}catch(e){ console.warn("Using packaged team catalog.",e); }

renderGroup("elementaryPrograms", teams.filter(t=>t.audience==="Elementary" || t.audience==="All"));
renderGroup("middlePrograms", teams.filter(t=>t.audience==="Middle School" || t.audience==="All"));
renderCalendar();

function renderGroup(id,rows){
  $(id).innerHTML=rows.map(card).join("");
}
function card(t){
  const w=windowMap[t.windowId]||{};
  const status=String(t.status||"planned");
  const badge=status==="official"?"Confirmed":status==="active"?"Active":status==="viability"?"Participation Dependent":"Interest";
  return `<article class="card">
    <div class="program-topline"><span class="badge badge-blue">${esc(w.label||"Program")}</span><span class="badge ${status==="official"||status==="active"?"badge-green":"badge-gold"}">${badge}</span></div>
    <h3>${esc(t.displayName||t.name)}</h3>
    <p><strong>Grades ${esc(t.grades)}</strong>${t.bridgeGrade||t.bridgeEligible?` <small>• Grade 6 may be placed by program needs</small>`:""}</p>
    <p>${dateRange(t.competitionStart,t.regularSeasonEnd)}</p>
  </article>`;
}
function renderCalendar(){
  $("calendarRows").innerHTML=programWindows.map(w=>{
    const rows=teams.filter(t=>t.windowId===w.id);
    return `<article class="card">
      <span class="eyebrow">${esc(w.audience.toUpperCase())} • ${esc(w.grades)}</span>
      <h3>${esc(w.label)}</h3>
      <p>${dateRange(w.start,w.end)}</p>
      <div class="checklist">${rows.map(t=>`<div class="check"><div><strong>${esc(t.displayName||t.name)}</strong><small>${esc(t.gender)} • Grades ${esc(t.grades)}</small></div></div>`).join("")}</div>
    </article>`;
  }).join("");
}
function dateRange(a,b){
  if(!a&&!b)return "Dates to be announced";
  return `${fmt(a)} – ${fmt(b)}`;
}
function fmt(v){
  if(!v)return "";
  const [y,m,d]=v.split("-").map(Number);
  return new Intl.DateTimeFormat("en-US",{month:"short",day:"numeric",year:"numeric"}).format(new Date(y,m-1,d));
}
function esc(v){return String(v??"").replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[m]))}
