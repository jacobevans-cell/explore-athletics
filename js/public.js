import { seasons, teams } from "./seed-data.js";
const teamGrid=document.getElementById("teamGrid");
if(teamGrid){
  teamGrid.innerHTML=teams.map(t=>`<article class="card team-card"><div class="sport">${icon(t.sport)}</div><div class="card-title"><div><h3>${t.name}</h3><p style="margin:4px 0">${t.grades} • ${t.gender}</p></div><span class="badge ${t.league==='IYAC'?'badge-green':t.league==='CAA'?'badge-blue':'badge-gold'}">${t.league}</span></div><p>${t.placement}</p></article>`).join("");
}
const seasonGrid=document.getElementById("seasonGrid");
if(seasonGrid){seasonGrid.innerHTML=seasons.map(s=>`<div class="card"><span class="badge badge-gray">${s.status}</span><h3 style="color:var(--navy);margin:10px 0 4px">${s.name}</h3><p>${fmt(s.start)} – ${fmt(s.end)}</p><small style="color:var(--muted)">${s.note}</small></div>`).join("");}
function icon(s){return ({Volleyball:'🏐','Flag Football':'🏈',Basketball:'🏀',Soccer:'⚽',Esports:'🎮',Chess:'♟️'})[s]||'🏅'}
function fmt(x){return new Date(x+'T12:00:00').toLocaleDateString('en-US',{month:'short',day:'numeric',year:'numeric'})}
