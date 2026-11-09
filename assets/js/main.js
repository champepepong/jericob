const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const CG={"Microsoft 365 and productivity":["Master Microsoft 365 Certificate: Pro Hacks","Get Certified as an Excel Pro","PowerPoint Pro Certificate","Word for Work","Outlook 101: Zero to Hero","AI Productivity Mastery with Microsoft Copilot"],"Data and AI":["Power BI Certificate: Mastering Data Skills","ChatGPT Certificate: Mastering Career Growth with AI","CLAUD AI","OPENCODE","FREEBUFF"],"IT service and CRM":["ITIL V4 Introduction to Service Management Concept","ServiceNow Basics: IT Automation and AI-Powered Workflows","Automate tasks and processes with Jira","Introduction to CRM with HubSpot","Core Hardware: CPUs and Memory"],"Communication":["Impress with Fluent English at the Workplace","Everyday English Enhanced"]};
$("#cg").innerHTML=Object.entries(CG).map(([k,v])=>`<div class="gc"><h3>${k}</h3>${v.map(x=>`<div>${x}</div>`).join("")}</div>`).join("");
/* toolbox */
const tg={"Zoho suite":"Zoho CRM;Zoho Desk;Zoho Mail;Zoho One;Zoho People;Zoho Books;Zoho Projects","Workspace and admin":"Microsoft 365;Google Workspace;Active Directory;Windows Server;NetSuite","Service management":"ServiceNow;Jira;Spiceworks;HubSpot CRM","Remote and hosting":"TeamViewer;AnyDesk;Hostinger;phpMyAdmin;WAMP;XAMPP;WordPress"};
$("#p0").innerHTML=Object.entries(tg).map(([k,v])=>`<div class="grp"><h4>${k}</h4><div class="chips">${v.split(";").map(x=>`<span>${x}</span>`).join("")}</div></div>`).join("");
const sk={"Web development":"HTML;CSS;JavaScript;PHP;MySQL;Responsive design;Website deployment;Hosting management","IT support":"IT support for 8 branches;Technical support;Help desk;Ticket and incident management;Remote and on-site support;Hardware and software troubleshooting","Systems and network":"Microsoft 365 administration;User provisioning;Role and permission management;LAN/Wi-Fi;TCP/IP, DNS, DHCP;VPN support;Windows and macOS","Practice":"Workflow automation;Cybersecurity fundamentals;Technical documentation"};
$("#p1").innerHTML=Object.entries(sk).map(([k,v])=>`<div class="grp"><h4>${k}</h4><div class="chips">${v.split(";").map(x=>`<span>${x}</span>`).join("")}</div></div>`).join("");
$$("#seg button").forEach(b=>b.onclick=()=>{$$("#seg button").forEach(x=>x.classList.toggle("on",x===b));$("#seg").classList.toggle("r",b.dataset.s==="1");$$(".tbp").forEach((p,i)=>p.classList.toggle("on",i==b.dataset.s))});

/* works */
const nav=(n,l)=>`<div class="nv">${n}<span>${l.map(x=>`<i style="font-style:normal">${x}</i>`).join("")}</span></div>`;
const W=[
{t:"Company website",s:"saklawfoundationinc.com",u:"https://saklawfoundationinc.com",k:["HTML","CSS","JavaScript","PHP","MySQL","Hostinger"],d:"The public website of Saklaw Foundation Inc: about, programs and services, events, news, gallery, and links to Operations, TimeSync and the My SFI member portal. I developed it and keep it running.",
 p:nav("Saklaw Foundation Inc",["Home","About Us","Programs","Events","News","Gallery","Others"])+`<div style="color:var(--silver);margin:-2cqw 0 1cqw">Welcome to Saklaw Foundation Inc</div><div class="hh" style="font-size:4.4cqw;max-width:62cqw">Serving the poor towards total human development.</div><div style="max-width:52cqw">An encompassing mission apostolate foundation rooted from the Catholic Relief Service Program, serving communities across Oriental Mindoro.</div><span class="bt">View Your Loan →</span><span class="pill">Operations</span> <span class="pill">My SFI</span><div class="cards3"><div>Social Action<small>Partnership programs with AVC</small></div><div>Microfinance<small>Savings, capital build-up and loans</small></div><div>Community<small>Events, news and programs</small></div></div>`},
{t:"SFI TimeSync",s:"saklawfoundationinc.com/SFITimeSync",u:"https://saklawfoundationinc.com/SFITimeSync/public/index.php",k:["PHP","MySQL","JavaScript","Face recognition","Liveness check"],d:"A secure time and attendance system. Employees clock in with face recognition and a liveness check, with office and onsite time-in, real-time HR monitoring, role-based access control and full audit logging.",
 p:`<div class="split"><div><div class="nv" style="margin-bottom:3cqw">SFI TimeSync <span class="pill">● Online</span></div><div class="hh">Your face is your<br>time card.</div><div>Local time</div><div class="clk tm">--:--:--</div><span class="bt">Office Time In / Out</span><span class="bt g">Area Time-In</span><div style="margin-top:2.4cqw"><span class="pill">Face Recognition + Liveness</span> <span class="pill">Real-time HR Monitoring</span></div></div><div class="box"><div style="color:var(--white);font:700 2.2cqw var(--d)">Welcome back</div><small style="font-size:1.3cqw">Sign in to your account to continue</small><div class="fld">Username, Email</div><div class="fld">Password</div><div class="row"><span>Remember me</span><span>Forgot password?</span></div><div class="bt" style="margin:1.4cqw 0 0;width:100%;text-align:center">Sign In</div><div style="display:grid;place-items:center"><div class="face" style="width:11cqw;height:11cqw"><s></s></div><small style="font-size:1.2cqw">Protected by role-based access control and full audit logging</small></div></div></div>`},
{t:"SFI Member Portal",s:"saklawfoundationinc.com/saklawfoundationinc",u:"https://saklawfoundationinc.com/saklawfoundationinc/",c:"cream",k:["PHP","MySQL","JavaScript","Client portal"],d:"My SFI: the online member portal where clients sign in to see every loan, balance and arrear, plus voluntary savings and capital build-up, straight from their branch’s records.",
 p:nav("Saklaw Foundation Inc",["About","Your records","Savings","FAQ","Dark mode"])+`<div class="split"><div><div class="hh">Your records,<br>one sign in away.</div><div>See every loan, your savings, and your balances in one place.</div><div style="margin-top:2.4cqw" class="row"><span>Every loan</span><b>Cycle, release and maturity</b></div><div class="row"><span>Principal and interest</span><b>Split clearly</b></div><div class="row"><span>Voluntary Savings</span><b>Running VS balance</b></div><div class="row"><span>Capital Build-Up</span><b>CBU balance and status</b></div></div><div class="box"><small style="font-size:1.3cqw">Saklaw Cooperative</small><div style="color:var(--white);font:700 2.4cqw var(--d);margin-bottom:1.4cqw">Member sign in</div><div class="fld">Username</div><div class="fld">Password</div><div class="bt" style="margin:1.4cqw 0 0;width:100%;text-align:center">View my records →</div><small style="font-size:1.2cqw">Forgot your password?</small></div></div>`},
{t:"SMS notification system",s:"Real-time SMS alerts to members",k:["PHP","MySQL","JavaScript","SMS"],d:"A real-time SMS notification system that improves operational communication and branch coordination. It sends members withdrawal confirmations, missed-payment reminders, and birthday and holiday greetings.",
 p:`<div class="split"><div><div class="hh">Messages that<br>reach people<br>in real time.</div><div style="max-width:36cqw">Withdrawal confirmations, missed-payment reminders and greetings, sent to members by SMS.</div></div><div style="display:grid;place-items:center;height:100%"><div class="phone"><div style="text-align:center;font:700 1.4cqw var(--d);color:var(--white)">SFI</div><div class="msg">Matagumpay ang pag-withdraw! Php 5,000 ay na-withdraw mula sa iyong savings account noong November 5, 2026. Salamat, Juan! (TN:5841528526526562)</div><div class="msg">Hi Juan! May na-miss kang bayad sa iyong loan na hanggang 1000 sa PL at 500 sa ANL. Paki-update ang iyong payment para maiwasan ang penalty. Salamat sa iyong pakikipag-ugnayan sa SFI.</div><div class="msg">Maligayang Kaarawan, Juan! Pagbati mula sa SFI.</div><div class="msg">Maligayang Pasko at Manigong Bagong Taon, Juan! Pagbati mula sa SFI</div></div></div></div>`},
{t:"IT support across 8 branches",s:"Supporting 8 branches",k:["IT Support","Microsoft 365","Networking","Active Directory","Remote support"],d:"Day-to-day IT support for 8 branches and 100+ employees as part of a two-person IT team: network administration, Microsoft 365 management, OS deployment, user accounts, troubleshooting, and remote and on-site help.",
 p:nav("IT Support",["Network","Microsoft 365","Hardware","Remote"])+`<div class="split"><div><div class="hh">Supporting<br>8 branches.</div><div style="max-width:40cqw">Network, Microsoft 365, hardware and software support, on-site and remote, for 100+ employees.</div><div class="br"><span>Head Office Operations</span><span>Roxas</span><span>Pinamalayan</span><span>Bongabong</span><span>Calapan</span><span>Victoria</span><span>Bansud</span><span>Puerto Galera</span></div></div><div class="box"><div style="color:var(--white);font:700 2.2cqw var(--d);margin-bottom:1.2cqw">What I look after</div><div class="row"><span>Network administration</span><b>Active</b></div><div class="row"><span>Microsoft 365 management</span><b>Active</b></div><div class="row"><span>OS deployment</span><b>Active</b></div><div class="row"><span>User account administration</span><b>Active</b></div><div class="row"><span>Hardware and software troubleshooting</span><b>Active</b></div><div class="row"><span>Remote and on-site support</span><b>Active</b></div></div></div>`}];
const tabs=$("#tabs"),vp=$("#vp");let cur=0,tm;
tabs.innerHTML=W.map((w,i)=>`<button class="tab" data-i="${i}"><h3>${w.t}</h3><p>${w.s}</p></button>`).join("");
vp.innerHTML=W.map(w=>`<div class="pv ${w.c||""}">${w.p}</div>`).join("");
function show(i){cur=i;$$(".tab").forEach((t,n)=>{t.classList.remove("on");if(n===i){void t.offsetWidth;t.classList.add("on")}});$$(".pv").forEach((p,n)=>p.classList.toggle("on",n===i));
 const w=W[i];$("#url").textContent=w.u?w.u.replace("https://",""):w.s;$("#it").textContent=w.t;$("#id").textContent=w.d;$("#ig").innerHTML=w.k.map(k=>`<span>${k}</span>`).join("");
 const a=$("#ia");if(w.u){a.href=w.u;a.style.display=""}else a.style.display="none";
 clearTimeout(tm);if(!$("#sc").classList.contains("hold"))tm=setTimeout(()=>show((cur+1)%W.length),7000)}
tabs.onclick=e=>{const t=e.target.closest(".tab");if(t)show(+t.dataset.i)};
$("#sc").addEventListener("mouseenter",()=>{$("#sc").classList.add("hold");clearTimeout(tm)});
$("#sc").addEventListener("mouseleave",()=>{$("#sc").classList.remove("hold");show(cur)});
show(0);
const bw=$("#bw");
if(!matchMedia("(prefers-reduced-motion: reduce)").matches)$("#stage").addEventListener("mousemove",e=>{const r=bw.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;bw.style.transform=`rotateY(${x*6}deg) rotateX(${-y*5}deg)`});
$("#stage").addEventListener("mouseleave",()=>bw.style.transform="");
setInterval(()=>$$(".tm").forEach(c=>c.textContent=new Date().toLocaleTimeString("en-GB")),1000);$$(".tm").forEach(c=>c.textContent=new Date().toLocaleTimeString("en-GB"));

/* PHOTO: drop your photo at assets/img/jerico.jpg. Until it exists, the JB placeholder shows. */
const ph=$("#ph"),img=$("#img");
const okPhoto=()=>ph.classList.add("has");
img.addEventListener("load",okPhoto);
img.addEventListener("error",()=>ph.classList.remove("has"));
if(img.complete&&img.naturalWidth)okPhoto();

/* counters, reveal, progress, nav */
function count(el){const n=+el.dataset.n,s=el.dataset.s||"",t0=performance.now();(function f(t){const k=Math.min((t-t0)/1600,1);el.textContent=Math.round(n*(1-Math.pow(1-k,4))).toLocaleString()+(k===1?s:"");k<1&&requestAnimationFrame(f)})(t0)}
setTimeout(()=>$$("[data-n]").forEach(count),900);
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}}),{threshold:.12});$$(".rv").forEach(el=>io.observe(el));
const secs=["work","exp","certs","contact"].map(id=>$("#"+id));
function sc(){const h=document.documentElement;$("#bar").style.width=scrollY/(h.scrollHeight-innerHeight)*100+"%";let cur="";secs.forEach(s=>{if(s.getBoundingClientRect().top<innerHeight*.4)cur=s.id});$$(".links a").forEach(a=>a.classList.toggle("on",a.getAttribute("href")==="#"+cur));const t=$("#tl").getBoundingClientRect();$("#tl").style.setProperty("--p",Math.max(0,Math.min(100,(innerHeight*.6-t.top)/t.height*100))+"%")}
addEventListener("scroll",sc,{passive:true});sc();
function toast(m){const t=$("#toast");t.textContent=m;t.classList.add("show");setTimeout(()=>t.classList.remove("show"),2600)}
/* contact form: EmailJS (REST API, no SDK needed) */
const EMAILJS={
  service:"service_j15f8e3",
  template:"template_yfwcy0v",   // EmailJS dashboard > Email Templates > Template ID
  key:"edk3iAPPd3gjJCXqr"          // EmailJS dashboard > Account > General > Public Key
};
$("#fm").onsubmit=async e=>{
  e.preventDefault();
  const f=e.target,btn=f.querySelector("button[type=submit]"),label=btn.textContent;
  const name=$("#fn").value.trim(),email=$("#fe").value.trim(),msg=$("#ft").value.trim();
  if(EMAILJS.template.startsWith("YOUR_")||EMAILJS.key.startsWith("YOUR_")){
    toast("Contact form isn't configured yet");console.error("EmailJS: set EMAILJS.template and EMAILJS.key in assets/js/main.js");return}
  btn.disabled=true;btn.textContent="Sending…";
  try{
    const r=await fetch("https://api.emailjs.com/api/v1.0/email/send",{
      method:"POST",headers:{"Content-Type":"application/json"},
      body:JSON.stringify({service_id:EMAILJS.service,template_id:EMAILJS.template,user_id:EMAILJS.key,
        template_params:{from_name:name,from_email:email,reply_to:email,message:msg,subject:"Portfolio inquiry from "+name}})});
    if(!r.ok)throw new Error(await r.text());
    toast("Message sent. Thank you!");f.reset();
  }catch(err){
    console.error("EmailJS error:",err);toast("Couldn’t send. Please email me directly.");
  }finally{btn.disabled=false;btn.textContent=label}
};

$("#th").onclick=()=>{const t=document.documentElement.dataset.theme==="light"?"dark":"light";document.documentElement.dataset.theme=t;try{localStorage.setItem("jb-theme",t)}catch(e){}};
function dlRes(){const a=document.createElement("a");a.href="assets/Jerico_Bucoy_Resume.pdf";a.download="Jerico_Bucoy_Resume.pdf";document.body.append(a);a.click();a.remove();toast("Resume downloaded")}
$$(".dl").forEach(b=>b.onclick=dlRes);

// Typing effect for the role line
(function () {
  const el = document.getElementById("typed");
  if (!el) return;

  const phrases = ["IT Support Specialist", "Web Developer"];
  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let timeout;

  function type() {
    const current = phrases[phraseIndex];
    
    if (isDeleting) {
      el.textContent = current.substring(0, charIndex - 1);
      charIndex--;
    } else {
      el.textContent = current.substring(0, charIndex + 1);
      charIndex++;
    }

    let speed = isDeleting ? 45 : 85;

    if (!isDeleting && charIndex === current.length) {
      // Pause at full word
      speed = 2200;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      speed = 400;
    }

    timeout = setTimeout(type, speed);
  }

  // Start after the name animation finishes
  setTimeout(type, 900);
})();