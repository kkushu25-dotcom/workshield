const $=s=>document.querySelector(s);
const esc=s=>s.replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const st={get(k,d){try{const v=localStorage.getItem('ss:'+k);return v?JSON.parse(v):d}catch(e){return d}},set(k,v){try{localStorage.setItem('ss:'+k,JSON.stringify(v))}catch(e){}}};
const ICONS={"home":"<path d=\"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z\"/><path d=\"M9 22V12h6v10\"/>","message-square":"<path d=\"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z\"/>","link":"<path d=\"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71\"/><path d=\"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71\"/>","qr-code":"<rect x=\"3\" y=\"3\" width=\"7\" height=\"7\"/><rect x=\"14\" y=\"3\" width=\"7\" height=\"7\"/><rect x=\"3\" y=\"14\" width=\"7\" height=\"7\"/><path d=\"M14 14h3v3h-3zM20 14v2M14 20h2M20 20h1\"/>","history":"<path d=\"M3 12a9 9 0 1 0 3-6.7L3 8\"/><path d=\"M3 3v5h5M12 7v5l3 2\"/>","clock":"<circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"M12 6v6l4 2\"/>","bell":"<path d=\"M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9\"/><path d=\"M13.73 21a2 2 0 0 1-3.46 0\"/>","shield":"<path d=\"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z\"/>","lock":"<rect x=\"3\" y=\"11\" width=\"18\" height=\"11\" rx=\"2\"/><path d=\"M7 11V7a5 5 0 0 1 10 0v4\"/>","cookie":"<circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"M8.5 9h.01M15 14h.01M9 15h.01M14 8.5h.01\"/>","key":"<circle cx=\"7.5\" cy=\"15.5\" r=\"4.5\"/><path d=\"M10.7 12.3L21 2M16 7l3 3M14 9l2 2\"/>","alert-triangle":"<path d=\"M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z\"/><path d=\"M12 9v4M12 17h.01\"/>","siren":"<path d=\"M7 18v-6a5 5 0 0 1 10 0v6M5 21h14M12 2v2M4.9 5.4l1.4 1.4M19.1 5.4l-1.4 1.4\"/>","wallet":"<path d=\"M20 12V8H6a2 2 0 0 1 0-4h12v4\"/><path d=\"M4 6v12a2 2 0 0 0 2 2h14v-4\"/><path d=\"M18 12a2 2 0 0 0 0 4h4v-4z\"/>","user-x":"<path d=\"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2\"/><circle cx=\"9\" cy=\"7\" r=\"4\"/><path d=\"M17 8l5 5M22 8l-5 5\"/>","user":"<path d=\"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2\"/><circle cx=\"12\" cy=\"7\" r=\"4\"/>","flag":"<path d=\"M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z\"/><path d=\"M4 22v-7\"/>","book-open":"<path d=\"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z\"/><path d=\"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z\"/>","help-circle":"<circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3M12 17h.01\"/>","play":"<path d=\"M5 3l14 9-14 9z\"/>","trending-up":"<path d=\"M23 6l-9.5 9.5-5-5L1 18\"/><path d=\"M17 6h6v6\"/>","users":"<path d=\"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2\"/><circle cx=\"9\" cy=\"7\" r=\"4\"/><path d=\"M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75\"/>","heart":"<path d=\"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z\"/>","settings":"<path d=\"M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3M1 14h6M9 8h6M17 16h6\"/>","globe":"<circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20\"/>","search":"<circle cx=\"11\" cy=\"11\" r=\"8\"/><path d=\"M21 21l-4.35-4.35\"/>","sun":"<circle cx=\"12\" cy=\"12\" r=\"5\"/><path d=\"M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42\"/>","chevron-right":"<path d=\"M9 18l6-6-6-6\"/>","chevron-down":"<path d=\"M6 9l6 6 6-6\"/>","arrow-left":"<path d=\"M19 12H5M12 19l-7-7 7-7\"/>","clipboard":"<path d=\"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2\"/><rect x=\"8\" y=\"2\" width=\"8\" height=\"4\" rx=\"1\"/>","phone":"<path d=\"M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z\"/>","external-link":"<path d=\"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6\"/><path d=\"M15 3h6v6M10 14L21 3\"/>","check-circle":"<path d=\"M22 11.08V12a10 10 0 1 1-5.93-9.14\"/><path d=\"M22 4L12 14.01l-3-3\"/>"};
const ic=n=>`<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[n]||''}</svg>`;
const NAV=[
{id:'home',n:'Home',i:'home',d:'',items:[['dashboard','Dashboard','home']]},
{id:'scam-detection',n:'Scam detection',i:'message-square',d:'Check messages, links and QR codes.',items:[['message-scanner','Message Scanner','message-square'],['url-scanner','URL Scanner','link'],['qr-scanner','QR Code Scanner','qr-code'],['scan-history','Scan History','history']]},
{id:'digital-protection',n:'Digital protection',i:'shield',d:'Alerts, privacy and account safety.',items:[['security-alerts','Security Alerts','bell'],['privacy-centre','Privacy Centre','lock'],['cookie-scanner','Cookie & Tracker Scanner','cookie'],['secure-account','Secure My Account','key']]},
{id:'emergency-centre',n:'Emergency centre',i:'alert-triangle',d:'Lost money or hacked? Start here.',items:[['lost-money','I Lost Money','wallet'],['account-hacked','Account Hacked','user-x'],['report-fraud','Report Cyber Fraud','flag'],['emergency-history','Emergency History','clock']]},
{id:'learning-centre',n:'Learning centre',i:'book-open',d:'Lessons, quizzes and practice.',items:[['lessons','Scam Lessons','book-open'],['quizzes','Interactive Quizzes','help-circle'],['simulator','Scam Simulator','play'],['progress','My Learning Progress','trending-up']]},
{id:'family-safety',n:'Family safety',i:'users',d:'Trusted contacts and family help.',items:[['contacts','Trusted Contacts','users'],['family','Family Protection','heart']]},
{id:'settings',n:'Settings',i:'settings',d:'Profile, language and privacy.',items:[['profile','My Profile','user'],['language','Language','globe'],['notifications','Notifications','bell'],['privacy-settings','Privacy Settings','lock']]}];
const LANG={en:'English',hi:'हिन्दी',kn:'ಕನ್ನಡ'};
let lang=st.get('lang','en');
const tiles=()=>NAV.slice(1).map(g=>`<a class="card act" href="#g-${g.id}">${ic(g.i)}<h3>${g.n}</h3><span class="note">${g.d}</span></a>`).join('');
/* ---------- rule engine (runs on this device only) ---------- */
const RULES=[
{id:'urg',w:1,re:/urgent|immediately|within \d+ ?(hours?|minutes?|hrs)|last chance|expires? (today|soon)|account (will be )?(blocked|suspended|closed)|तुरंत|ತಕ್ಷಣ/gi,t:'Urgency or threat',why:'Scammers create time pressure so you act before thinking.'},
{id:'cred',w:3,re:/\b(otp|upi pin|cvv|net ?banking password|aadhaar|pan card|card number)\b|ओटीपी|ಒಟಿಪಿ/gi,t:'Asks for secret codes or identity details',why:'Real banks never ask for your OTP, PIN or CVV by message or call.'},
{id:'kyc',w:2,re:/\bkyc\b|केवाईसी|ಕೆವೈಸಿ|update your (pan|aadhaar|details)/gi,t:'KYC update pressure',why:'KYC scams push you to a fake link to “verify” your account.'},
{id:'pay',w:2,re:/processing fee|registration fee|refundable deposit|collect request|send (rs\.?|₹)? ?\d+|pay (rs\.?|₹) ?\d+|scan (this )?qr to receive/gi,t:'Unusual payment request',why:'You never need to pay or approve a request to receive money.'},
{id:'prize',w:3,re:/\b(lottery|lucky draw|you (have )?won|prize|winner|cashback of)\b/gi,t:'Prize or lottery claim',why:'Prizes you never entered for are a classic advance-fee scam.'},
{id:'job',w:2,re:/work from home|earn (rs\.?|₹)? ?\d[\d,]* ?(per|a|\/) ?day|part[- ]time job|like (and|&) (subscribe|review)|task(s)? to earn/gi,t:'Too-good-to-be-true job offer',why:'Genuine employers do not promise daily payouts for simple tasks.'},
{id:'inv',w:2,re:/guaranteed returns?|double your (money|investment)|crypto (signal|trading)|risk[- ]free profit/gi,t:'Investment promise',why:'Guaranteed or very high returns are a hallmark of investment fraud.'},
{id:'rem',w:3,re:/anydesk|teamviewer|quicksupport|screen ?share|install (this )?app to (verify|fix)/gi,t:'Remote-access request',why:'Remote-access apps let a scammer see and control your phone.'},
{id:'del',w:1,re:/parcel|courier|delivery (failed|attempt)|customs (fee|duty)|package on hold/gi,t:'Delivery or parcel claim',why:'Fake delivery notices often lead to payment or phishing pages.'},
{id:'cc',w:2,re:/customer (care|support) (no|number)|call (us )?(now )?on \+?\d[\d -]{8,}/gi,t:'Phone number to call',why:'Numbers in unsolicited messages can be fake customer-care lines. Use the number on your card or the official site.'}];
const CAT={urg:'Pressure tactic',cred:'Credential phishing',kyc:'KYC phishing',pay:'UPI / payment fraud',prize:'Lottery & prize fraud',job:'Fake job offer',inv:'Investment fraud',rem:'Remote-access scam',del:'Delivery & parcel fraud',cc:'Fake customer-care number'};
const LES={'KYC phishing':'Why “update KYC” links are traps','Credential phishing':'Never share an OTP, PIN or CVV','UPI / payment fraud':'You never pay to receive money','Lottery & prize fraud':'Prizes you did not enter for','Fake job offer':'Spotting fake work-from-home offers','Investment fraud':'Guaranteed returns do not exist','Remote-access scam':'Remote-access apps and your phone','Delivery & parcel fraud':'Fake delivery messages','Fake customer-care number':'Finding real customer care','Phishing link':'Reading a link before you tap'};
const SHORT=/\b(bit\.ly|tinyurl\.com|t\.co|cutt\.ly|rb\.gy|is\.gd|goo\.gl|shorturl\.at)\b/i;
const BRANDS={sbi:'sbi.co.in',hdfc:'hdfcbank.com',icici:'icicibank.com',axis:'axisbank.com',paytm:'paytm.com',phonepe:'phonepe.com',google:'google.com',amazon:'amazon.in',npci:'npci.org.in'};
function inspectUrl(raw){
let u,f=[];raw=raw.trim();
try{u=new URL(/^[a-z]+:\/\//i.test(raw)?raw:'http://'+raw)}catch(e){return null}
const h=u.hostname.toLowerCase();
if(!/^https?:$/.test(u.protocol))f.push('Unusual link type ('+u.protocol+')');
if(u.protocol==='http:')f.push('Not encrypted (HTTP)');
if(/^\d+\.\d+\.\d+\.\d+$/.test(h))f.push('Uses a raw IP address instead of a name');
if(h.includes('xn--'))f.push('Punycode domain – may imitate other characters');
if(SHORT.test(h))f.push('Shortened link – the real destination is hidden');
if(/\.(xyz|top|click|buzz|icu|live|work|shop|cfd|sbs)$/.test(h))f.push('Domain ending often seen in scam campaigns');
if(h.split('.').length>4)f.push('Unusually many subdomains');
if(u.username||raw.includes('@'))f.push('Contains “@” which can disguise the real host');
if((h.match(/-/g)||[]).length>=2)f.push('Several hyphens in the domain');
for(const b in BRANDS){const d=BRANDS[b];if(h.includes(b)&&!(h===d||h.endsWith('.'+d)))f.push(`Mentions “${b}” but is not ${d}`)}
return{host:h,f,https:u.protocol==='https:'};
}
function analyse(text){
const hits=[];let score=0;
RULES.forEach(r=>{const m=text.match(r.re);if(m){hits.push({...r,m:[...new Set(m.map(x=>x.trim()))]});score+=r.w}});
const urls=text.match(/(https?:\/\/[^\s]+|\b[a-z0-9-]+(\.[a-z0-9-]+)+\/[^\s]*)/gi)||[];
const uf=[];urls.forEach(x=>{const i=inspectUrl(x);if(i&&i.f.length){score+=Math.min(3,i.f.length+1);uf.push({url:x,...i})}});
let cat='No specific category';
const top=hits.filter(h=>h.id!=='urg').sort((a,b)=>b.w-a.w)[0];
if(top)cat=CAT[top.id];else if(uf.length)cat='Phishing link';
return{hits,uf,score,cat,verdict:score>=5?'scam':score>=2?'sus':'safe'};
}
function highlight(text,res){
let h=esc(text);const terms=[];res.hits.forEach(x=>x.m.forEach(m=>terms.push(esc(m))));res.uf.forEach(u=>terms.push(esc(u.url)));
[...new Set(terms)].sort((a,b)=>b.length-a.length).forEach(t=>{h=h.split(t).join('\u0001'+t+'\u0002')});
return h.replace(/\u0001/g,'<mark>').replace(/\u0002/g,'</mark>');
}
const EXAMPLES=[
'Dear customer, your SBI account will be blocked within 24 hours. Update KYC now: http://sbi-kyc-update.top/login and share the OTP you receive.',
'Congratulations! You won a lucky draw prize of Rs 25,00,000. Pay a refundable deposit of Rs 4999 to claim. Call customer care no 9876543210.',
'Hi, your cab is arriving in 3 minutes. Driver Ravi, KA01AB1234.'];
const VL={safe:'no red flags',sus:'suspicious',scam:'likely scam'};
/* ---------- views ---------- */
const V={};
const head=(t,l)=>`<h1>${t}</h1><p class="lead">${l}</p>`;
V._group=g=>head(g.n,g.d)+`<div class="grid">${g.items.map(([r,l,x])=>`<a class="card act item${r==='lost-money'?' sos':''}" href="#${r}">${ic(x)}<h3>${l}</h3><span class="sp"></span>${ic('chevron-right')}</a>`).join('')}</div>`;
V.dashboard=()=>{
const hist=st.get('hist',[]),chk=progress();
return `<section class="hero"><div class="blob b1"></div><div class="blob b2"></div>
<h1>Your personal<br>digital safety<br>assistant.</h1><p class="lead">Check a message or link before you tap, and get step-by-step help if money is already lost.</p>
<div class="row"><a class="btn p" href="#message-scanner">${ic('message-square')}Scan a message</a><a class="btn o" href="#lost-money">${ic('alert-triangle')}I lost money</a></div></section>
<div class="grid qk" style="margin-bottom:16px">
<a class="card act" href="#message-scanner">${ic('message-square')}<h3>Scan message</h3><span class="note">Paste an SMS or WhatsApp text.</span></a>
<a class="card act" href="#url-scanner">${ic('link')}<h3>Check a suspicious URL</h3><span class="note">Inspect a link without opening it.</span></a>
<a class="card act" href="#qr-scanner">${ic('qr-code')}<h3>QR scanner</h3><span class="note">Check what a QR code contains.</span></a></div>
<a class="card act sos" href="#lost-money" style="margin-bottom:16px">${ic('siren')}<h3>Lost money to a scam? Get help now</h3><span class="note">One step at a time: call 1930, contact your bank, file a report.</span></a>
<h2>Explore</h2><div class="grid tiles" style="margin-bottom:16px">${tiles()}</div>
<div class="grid g2"><div class="card"><h2>Recent scans</h2>${hist.length?`<ul class="l">${hist.slice(0,4).map(h=>`<li>${h.cat} – ${VL[h.verdict]} <span class="note">${h.when}</span></li>`).join('')}</ul>`:'<div class="empty">No scans yet. Results you run here are listed (without message text).</div>'}</div>
<div class="card"><h2>Security alerts</h2><div class="empty">No alerts. They appear only after a scan finds something.</div></div>
<div class="card"><h2>Security checklist progress</h2><div class="bar"><i style="width:${chk.pct}%"></i></div><p class="note">${chk.done} of ${chk.total} actions completed on this device.</p><a href="#secure-account">Open checklist</a></div>
<div class="card"><h2>Recommended next steps</h2><ul class="l"><li><a href="#secure-account">Turn on two-factor sign-in</a></li><li><a href="#lessons">Read: Never share an OTP</a></li><li><a href="#contacts">Choose someone you trust to call</a></li></ul></div></div>`};
V['message-scanner']=()=>`${head('Message Scanner','Paste a suspicious SMS, WhatsApp or payment message. Checks run in your browser; your text is not sent or saved.')}
<div class="card"><label for="mt" class="note">Message</label><textarea id="mt" placeholder="Paste the message here"></textarea>
<div class="row" style="margin-top:12px"><button class="btn" id="paste">${ic('clipboard')}Paste from clipboard</button><select id="ml" style="width:auto" aria-label="Message language"><option value="en">English</option><option value="hi">हिन्दी</option><option value="kn">ಕನ್ನಡ</option></select><span class="sp"></span><button class="btn p" id="go">${ic('search')}Analyse</button></div>
<div class="err" id="err" role="alert"></div>
<p class="note">On Android, share a message to ScamShield from your messaging app. Never paste a real OTP, PIN or CVV.</p>
<div class="row"><span class="note">Try an example:</span>${EXAMPLES.map((e,i)=>`<button class="chip" data-ex="${i}">Example ${i+1}</button>`).join('')}</div></div><div id="out" style="margin-top:20px" aria-live="polite"></div>`;
function runScan(){
const t=$('#mt').value.trim();if(!t){$('#err').textContent='Paste a message first, then select Analyse.';return}
$('#err').textContent='';$('#out').innerHTML='<div class="card row"><div class="spin"></div>Analysing on this device…</div>';
setTimeout(()=>{const r=analyse(t),L={safe:['Likely safe','Low','Limited – only known patterns were checked. No red flags is not proof of safety.'],sus:['Suspicious','Medium','Moderate – several warning signs, but a person should confirm.'],scam:['Likely scam','High','Higher – multiple strong scam patterns matched.']}[r.verdict];
const hist=st.get('hist',[]);hist.unshift({verdict:r.verdict,cat:r.cat,when:new Date().toLocaleString()});st.set('hist',hist.slice(0,30));
$('#out').innerHTML=`<div class="v ${r.verdict}"><div class="big">${L[0]}</div><p>Risk level: <b>${L[1]}</b> · Category: <b>${r.cat}</b></p><p class="note">Confidence: ${L[2]}</p></div>
<div class="grid g2"><div class="card"><h2>What we found</h2>${r.hits.length||r.uf.length?`<ul class="l">${r.hits.map(h=>`<li><b>${h.t}.</b> ${h.why}</li>`).join('')}${r.uf.map(u=>`<li><b>Suspicious link:</b> ${u.f.map(esc).join('; ')}.</li>`).join('')}</ul>`:'<p class="note">No known scam patterns matched. Stay careful with anything asking for money or codes.</p>'}</div>
<div class="card"><h2>Message evidence</h2><div class="msg">${highlight(t,r)}</div></div></div>
<div class="card" style="margin-top:16px"><h2>Recommended action</h2><ul class="l">${r.verdict==='safe'?'<li>If anything feels off, contact the sender through an official channel.</li>':'<li>Do not tap links, call listed numbers or reply.</li><li>Never share an OTP, PIN or CVV.</li><li>Contact the organisation using the number on your card or its official website.</li><li>If you already paid or shared codes, <a href="#lost-money">get emergency help</a>.</li>'}</ul>${LES[r.cat]?`<p class="note">Related lesson: <a href="#lessons">${LES[r.cat]}</a></p>`:''}
<p class="note">This is a rule-based check on your device. The AI analysis and reputation services described for the full product need the ScamShield backend, which is not connected here.</p></div>`;$('#out').scrollIntoView({behavior:'smooth'});},600);
}
V['url-scanner']=()=>`${head('URL Scanner','Inspect a link without opening it.')}<div class="card"><label for="ut" class="note">Link</label><input id="ut" type="text" inputmode="url" placeholder="example.com/login"><div class="row" style="margin-top:12px"><span class="sp"></span><a class="btn" href="#qr-scanner">${ic('qr-code')}QR code instead</a><button class="btn p" id="ug">${ic('search')}Inspect link</button></div><div class="err" id="err" role="alert"></div></div><div id="out" style="margin-top:20px" aria-live="polite"></div>`;
function runUrl(){
const i=inspectUrl($('#ut').value);if(!i){$('#err').textContent='Enter a valid link, for example example.com/login.';return}$('#err').textContent='';
const c=i.f.length>=3?'scam':i.f.length?'sus':'safe';
$('#out').innerHTML=`<div class="v ${c}"><div class="big">${({scam:'Likely malicious',sus:'Suspicious',safe:'No red flags in the address'})[c]}</div><p>Domain: <b>${esc(i.host)}</b></p></div>
<div class="grid g2"><div class="card"><h2>Indicators</h2>${i.f.length?`<ul class="l">${i.f.map(x=>`<li>${esc(x)}</li>`).join('')}</ul>`:'<p class="note">No suspicious structure found in the address itself.</p>'}</div>
<div class="card"><h2>What was not checked</h2><ul class="l"><li><b>Reputation:</b> not checked. Needs a reputation service through the backend.</li><li><b>Redirects:</b> not followed. The link was never opened.</li><li><b>HTTPS:</b> ${i.https?'present':'absent'}. HTTPS alone does not prove a site is genuine.</li></ul></div></div>
<div class="card" style="margin-top:16px"><h2>Recommendation</h2><p>${c==='safe'?'Type the official address yourself if the link asks for a login or payment.':'Do not open it or enter details. Visit the organisation by typing its official address.'}</p></div>`;}
/* ---------- info pages ---------- */
const INFO={
'qr-scanner':['QR Code Scanner','Camera scanning is part of the Android app. In the browser, paste what the QR code contains into the URL Scanner.',['Never scan a QR code to receive money. QR codes only send money.','Check the payee name on your UPI app before approving anything.','Be careful of QR stickers placed over genuine ones in shops.','Paste a link from a QR code into the URL Scanner before opening it.'],'Educational guidance'],
'security-alerts':['Security Alerts','Alerts come from your own scans. Nothing here monitors your SMS, WhatsApp or bank in the background.',[],'alerts'],
'privacy-centre':['Privacy Centre','Learn how cookies and trackers work. This page explains; it does not inspect websites or your browser.',['Essential cookies keep a site working, such as staying signed in.','Analytics cookies count visits and are usually optional.','Advertising cookies follow you across sites; decline them where you can.','First-party cookies come from the site you visit. Third-party cookies come from other companies embedded in it.','Chrome: Settings › Privacy and security › Delete browsing data. Safari: Settings › Privacy › Manage Website Data. Firefox: Settings › Privacy & Security › Cookies and Site Data.','Review camera, microphone and location permissions for each site and remove ones you do not use.'],'Educational guidance'],
'cookie-scanner':['Cookie & Tracker Scanner','A website cannot read another website’s cookies. Real tracker scanning needs a browser extension, planned for a later release.',['Open your browser’s cookie settings and sort by site.','Block third-party cookies in your browser.','Use a tracker-blocking extension you trust.'],'Not available yet'],
'secure-account':['Secure My Account','Steps to lock down an account. ScamShield cannot sign you out of other sites; you do it in each service’s own settings.',['Change the password from a device you trust. Use a long, unique one.','Open the account’s security page and sign out all other sessions.','Remove devices and sessions you do not recognise.','Turn on two-factor authentication with an authenticator app.','Review connected apps and remove any you do not know.','Check recovery email and phone number are yours.','Use official pages only: myaccount.google.com/security for Google; Settings › Security in Instagram, Facebook and WhatsApp.'],'Checklist'],
'lessons':['Scam Lessons','Short lessons, one for each scam type we detect. Tick each one when you have read and understood it.',Object.values(LES),'Lessons'],
'progress':['My Learning Progress','Counts the lessons and security actions you have ticked on this device. It is not a measure of how protected you are.',[],'progress'],
'contacts':['Trusted Contacts','Choose people to call first if something goes wrong. Contacts are not alerted automatically in this version.',['Pick one family member who can help you call the bank.','Agree a family code word for calls claiming an emergency.','Share this app’s Emergency Centre with them.'],'Checklist'],
'family':['Family Protection','Sharing alerts with family needs accounts and your explicit consent. That requires the backend and is not active here.',['Nothing is shared with anyone from this page.','Talk through the common scams with older relatives.','Set up call-and-verify habits before an emergency.'],'Not available yet'],
'profile':['My Profile','Accounts need the backend. Without sign-in, everything stays on this device.',['Use Clear data on this device in the profile menu to remove all saved items.'],'Local only'],
'language':['Language','Choose the language for message analysis. This build’s interface text is English; Hindi and Kannada keywords are matched in messages.',[],'language'],
'notifications':['Notifications','Push notifications arrive with the Android app. This browser build sends none.',[],'Local only'],
'privacy-settings':['Privacy Settings','Messages you scan are processed in your browser and never saved. Only the verdict, category and time are kept in this browser’s storage.',['Scan results store no message text.','Clear everything from the profile menu at any time.'],'Local only']};
V._info=r=>{const[t,l,items,kind]=INFO[r],k='chk:'+r,s=st.get(k,[]);
let body='';
if(kind==='alerts')body='<div class="card"><div class="empty">No alerts. Scan a message or link and any warning will be listed here.</div></div>';
else if(kind==='language')body=`<div class="card"><select id="pl" aria-label="Language">${Object.entries(LANG).map(([c,n])=>`<option value="${c}"${c===lang?' selected':''}>${n}</option>`).join('')}</select></div>`;
else if(kind==='progress'){const p=progress();body=`<div class="card"><div class="bar"><i style="width:${p.pct}%"></i></div><p>${p.done} of ${p.total} actions ticked · ${(st.get('quiz',{}).n||0)} quiz answers correct</p><a href="#quizzes">Take a quiz</a></div>`}
else body=`<div class="card"><span class="tag">${kind}</span><div style="margin-top:10px">${items.map((x,i)=>`<label class="chk"><input type="checkbox" data-k="${k}" data-i="${i}"${s.includes(i)?' checked':''}><span>${esc(x)}</span></label>`).join('')}</div></div>`;
return head(t,l)+body};
function progress(){let d=0,t=0;['secure-account','lessons','contacts'].forEach(r=>{t+=INFO[r][2].length;d+=st.get('chk:'+r,[]).length});return{done:d,total:t,pct:Math.round(d/t*100)}}
/* ---------- emergency ---------- */
const TEL=`<a class="btn p" href="tel:1930">${ic('phone')}Call 1930</a>`;
const PORTAL=`<a class="btn p" href="https://cybercrime.gov.in/" target="_blank" rel="noopener noreferrer">${ic('external-link')}Open cybercrime.gov.in</a>`;
const FLOW={
'lost-money':{t:'I Lost Money',l:'We will go one step at a time. Move as fast as you can; speed matters.',steps:[
{h:'What happened?',p:'Pick the closest match.',kinds:{'Unauthorized withdrawal':'Block your card in your bank’s official app now.','UPI fraud':'Open your UPI app and block or disable UPI.','Sent money to a scammer':'Do not send more money, even to “get it back”.','OTP shared':'Treat the account as compromised: call your bank now.','UPI PIN compromised':'Change your UPI PIN in your UPI app.','Fake investment':'Stop all deposits and keep all chat records.','Remote access':'Uninstall the remote app and turn on airplane mode.'}},
{h:'Stop more loss',p:'Do not share any more codes. Do not call numbers the scammer gave you. Block your card or UPI through your bank’s own app.'},
{h:'Call your bank',p:'Use the number printed on your card or on your bank’s official website. Ask them to block the card or account and raise a dispute.'},
{h:'Call 1930',p:'This is India’s cyber financial fraud helpline. Reporting early gives the best chance of stopping the money moving on.',a:TEL},
{h:'Report on the national portal',p:'File a complaint on the National Cyber Crime Reporting Portal.',a:PORTAL},
{h:'Keep your evidence',p:'Save: transaction ID, amount, date and time, bank or app name, the scammer’s phone number, any link, and screenshots. Do not delete the chat.'},
{h:'Record your reference numbers',p:'Write down the bank complaint number and the cybercrime acknowledgement number. Never type an OTP, PIN, CVV or password here.',refs:1}]},
'account-hacked':{t:'Account Hacked',l:'Secure the account that was taken over, one step at a time.',steps:[
{h:'Use a device you trust',p:'Do the next steps on your own phone or computer, not a shared one.'},
{h:'Change the password',p:'Go to the service’s official site, reset the password, and use a new one you have not used elsewhere.'},
{h:'Sign out every session',p:'Find “Devices” or “Security” in the account settings and sign out all other sessions.'},
{h:'Turn on two-factor sign-in',p:'Use an authenticator app instead of SMS where possible.'},
{h:'Remove unknown apps',p:'Check connected apps and revoke any you do not recognise.'},
{h:'Report if money is involved',p:'If you lost money or the hacker contacted others, report it.',a:TEL}]},
'report-fraud':{t:'Report Cyber Fraud',l:'Everything you need to report digital fraud.',steps:[
{h:'Gather details',p:'Transaction ID, amount, date and time, bank or app, scammer’s number or link, screenshots.'},
{h:'Call 1930',p:'The national cyber financial fraud helpline.',a:TEL},
{h:'File online',p:'Submit your complaint on the national portal.',a:PORTAL},
{h:'Save your acknowledgement',p:'Record the acknowledgement number so you can follow up.',refs:1},
{h:'Follow up with your bank',p:'Give your bank the acknowledgement number and ask for a written dispute reference.'}]}};
V._flow=r=>{const F=FLOW[r],k='em:'+r,n=st.get(k,0),s=F.steps,cur=s[n];
let h=head(F.t,F.l)+`<div class="card sos"><p class="note" style="margin:0">ScamShield guides you. It does not replace your bank or the police, cannot freeze accounts, and cannot promise money back.</p></div><div style="height:16px"></div>`;
h+=`<div class="bar"><i style="width:${n/s.length*100}%"></i></div><p class="note">${Math.min(n+1,s.length)} of ${s.length}</p>`;
h+=s.slice(0,n).map(x=>`<div class="done">${ic('check-circle')}${x.h}</div>`).join('');
if(!cur)return h+`<div class="card"><h2>All steps done</h2><p>Keep your reference numbers safe and follow up with your bank. <a href="#emergency-history">View saved references</a></p><button class="btn" id="eReset" data-k="${k}">Start again</button></div>`;
const kind=st.get('kind:'+r,'');
h+=`<div class="card" style="margin:10px 0"><h2>${cur.h}</h2><p>${cur.p}</p>`;
if(cur.kinds)h+=`<div class="chips" role="group">${Object.keys(cur.kinds).map(x=>`<button class="chip" aria-pressed="${kind===x}" data-kind="${x}" data-r="${r}">${x}</button>`).join('')}</div>${kind?`<p><b>Right now:</b> ${cur.kinds[kind]}</p>`:''}`;
if(cur.refs)h+=`<div class="grid g2"><input type="text" id="r1" placeholder="Bank complaint number" aria-label="Bank complaint number"><input type="text" id="r2" placeholder="Cybercrime acknowledgement number" aria-label="Cybercrime acknowledgement number"></div><p class="note">Saved only in this browser.</p>`;
h+=`<div class="row" style="margin-top:14px">${cur.a||''}<span class="sp"></span>${n?`<button class="btn" data-step="-1" data-k="${k}">Back</button>`:''}<button class="btn ${cur.a?'':'p'}" data-step="1" data-k="${k}"${cur.kinds&&!kind?' disabled':''}>${n===s.length-1?'Finish':'Done, next step'}</button></div></div>`;return h};
V['emergency-history']=()=>{const r=st.get('refs',[]);return head('Emergency History','Reference numbers you saved on this device.')+`<div class="card">${r.length?`<ul class="l">${r.map(x=>`<li>${esc(x.when)} – Bank: ${esc(x.a||'not recorded')} · Cybercrime: ${esc(x.b||'not recorded')}</li>`).join('')}</ul>`:'<div class="empty">Nothing saved yet. Add reference numbers in the final step of I Lost Money.</div>'}</div>`};
V['scan-history']=()=>{const h=st.get('hist',[]);return head('Scan History','Verdict, category and time only. Message text is never stored.')+`<div class="card">${h.length?`<ul class="l">${h.map(x=>`<li>${x.cat} – ${VL[x.verdict]} <span class="note">${x.when}</span></li>`).join('')}</ul><button class="btn" id="hClr" style="margin-top:12px">Delete history</button>`:'<div class="empty">No scans yet. <a href="#message-scanner">Scan a message</a></div>'}</div>`};
/* ---------- quizzes ---------- */
const QZ={quizzes:{t:'Interactive Quizzes',l:'Short questions with explanations.',q:[
['Your bank texts asking you to share an OTP to “stop a block”. What do you do?',['Share it quickly','Ignore it and call the number on your card','Reply STOP'],1,'Banks never ask for OTPs. Call the number on your card.'],
['You receive a UPI “collect request” to get a refund. You should…',['Approve it','Decline it','Approve with a small amount'],1,'Approving a request sends money out. You never approve to receive.'],
['A site is on HTTPS with a padlock. Is it safe?',['Yes, always','No, HTTPS only means the connection is encrypted','Only on mobile'],1,'Scam sites can use HTTPS too. Check the domain name.']]},
simulator:{t:'Scam Simulator',l:'Read each message and decide: scam or genuine?',q:[
['“Your parcel is held. Pay Rs 49 customs fee at ind-post-pay.xyz today.”',['Scam','Genuine'],0,'Odd domain ending, small fee and urgency are classic delivery-scam signs.'],
['“Rs 1,200 debited from A/c XX1234 on 24-Nov. Not you? Call the number on your card.”',['Scam','Genuine'],1,'Informational, no link, and points you to your own card’s number. Still verify in your bank app if unsure.'],
['“Earn Rs 5,000 daily by liking videos. Join our Telegram group.”',['Scam','Genuine'],0,'Daily payouts for simple tasks are a known job-scam pattern.']]}};
V._quiz=r=>{const Q=QZ[r],i=st.get('qi:'+r,0);let h=head(Q.t,Q.l);
if(i>=Q.q.length)return h+`<div class="card"><h2>Finished</h2><p>You can retake it any time.</p><button class="btn" id="qReset">Retake</button></div>`;
const q=Q.q[i];return h+`<div class="card"><p class="note">Question ${i+1} of ${Q.q.length}</p><h2>${esc(q[0])}</h2><div class="chips">${q[1].map((o,j)=>`<button class="chip" data-a="${j}">${o}</button>`).join('')}</div><div id="fb" aria-live="polite" style="margin-top:14px"></div></div>`};
/* ---------- router ---------- */
const TABS=[['dashboard','Home','home',['home','emergency-centre','family-safety']],['g-scam-detection','Scan','search',['scam-detection']],['g-learning-centre','Learn','book-open',['learning-centre']],['security-alerts','Alerts','bell',['digital-protection']],['g-settings','Profile','user',['settings']]];
function route(){
const r=location.hash.slice(1)||'dashboard';
let g=NAV.find(x=>'g-'+x.id===r),it=null;
if(!g)for(const x of NAV){const m=x.items.find(i=>i[0]===r);if(m){g=x;it=m;break}}
if(!g){g=NAV[0];it=g.items[0]}
const id=it?it[0]:null;
const h=!it?V._group(g):V[id]?V[id]():INFO[id]?V._info(id):FLOW[id]?V._flow(id):QZ[id]?V._quiz(id):'';
const v=$('#view');v.innerHTML=h;v.classList.remove('go');void v.offsetWidth;v.classList.add('go');
const title=id==='dashboard'?'ScamShield':it?it[1]:g.n;
$('#title').textContent=title;document.title=title+' – ScamShield';
$('#back').hidden=id==='dashboard';$('#back').dataset.to=!it||g.id==='home'?(it?'dashboard':'dashboard'):'g-'+g.id;
if(!it)$('#back').dataset.to='dashboard';
$('#tabs').innerHTML=TABS.map(t=>`<a href="#${t[0]}"${t[3].includes(g.id)?' aria-current="page"':''}>${ic(t[2])}${t[1]}</a>`).join('');
window.scrollTo(0,0);bind(id||r);
}
function bind(r){
const on=(s,f)=>{const e=$(s);if(e)e.onclick=f};
on('#go',runScan);on('#ug',runUrl);
on('#paste',async()=>{try{$('#mt').value=await navigator.clipboard.readText()}catch(e){$('#err').textContent='Clipboard access was blocked. Paste with Ctrl+V or long-press instead.'}});
document.querySelectorAll('[data-ex]').forEach(b=>b.onclick=()=>{$('#mt').value=EXAMPLES[b.dataset.ex]});
const ut=$('#ut');if(ut)ut.onkeydown=e=>{if(e.key==='Enter')runUrl()};
const ml=$('#ml');if(ml){ml.value=lang;ml.onchange=()=>setLang(ml.value)}
on('#hClr',()=>{st.set('hist',[]);route()});
document.querySelectorAll('input[data-k]').forEach(c=>c.onchange=()=>{let s=st.get(c.dataset.k,[]);const i=+c.dataset.i;s=c.checked?[...new Set([...s,i])]:s.filter(x=>x!==i);st.set(c.dataset.k,s)});
const pl=$('#pl');if(pl)pl.onchange=()=>setLang(pl.value);
document.querySelectorAll('[data-kind]').forEach(b=>b.onclick=()=>{st.set('kind:'+b.dataset.r,b.dataset.kind);route()});
document.querySelectorAll('[data-step]').forEach(b=>b.onclick=()=>{const k=b.dataset.k,d=+b.dataset.step;
if(d>0&&$('#r1')){const a=$('#r1').value.trim(),c=$('#r2').value.trim();if(a||c){const x=st.get('refs',[]);x.unshift({a,b:c,when:new Date().toLocaleDateString()});st.set('refs',x)}}
st.set(k,Math.max(0,st.get(k,0)+d));route()});
on('#eReset',e=>{st.set(e.currentTarget.dataset.k,0);route()});
if(QZ[r]){document.querySelectorAll('[data-a]').forEach(b=>b.onclick=()=>{const i=st.get('qi:'+r,0),q=QZ[r].q[i],ok=+b.dataset.a===q[2];
document.querySelectorAll('[data-a]').forEach(x=>{x.disabled=true;if(+x.dataset.a===q[2])x.style.borderColor='var(--ok)'});
if(ok){const z=st.get('quiz',{n:0});z.n++;st.set('quiz',z)}
$('#fb').innerHTML=`<p><b>${ok?'Correct.':'Not quite.'}</b> ${q[3]}</p><button class="btn p" id="nx">${i===QZ[r].q.length-1?'Finish':'Next question'}</button>`;$('#nx').onclick=()=>{st.set('qi:'+r,i+1);route()}});
on('#qReset',()=>{st.set('qi:'+r,0);route()})}
}
function setLang(c){lang=c;st.set('lang',c);$('#langL').textContent=LANG[c];const ml=$('#ml');if(ml)ml.value=c;const pl=$('#pl');if(pl)pl.value=c}
/* ---------- shell behaviour ---------- */
function closeDD(){document.querySelectorAll('.menu.show').forEach(m=>{m.classList.remove('show');const b=document.querySelector(`[data-dd="${m.id}"]`);if(b)b.setAttribute('aria-expanded',false)})}
document.querySelectorAll('[data-dd]').forEach(b=>b.onclick=e=>{e.stopPropagation();const m=$('#'+b.dataset.dd),s=m.classList.contains('show');closeDD();if(!s){m.classList.add('show');b.setAttribute('aria-expanded',true);const f=m.querySelector('button,a');if(f&&e.detail===0)f.focus()}});
document.addEventListener('click',closeDD);
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeDD()});
document.querySelectorAll('[data-lang]').forEach(b=>b.onclick=()=>setLang(b.dataset.lang));
$('#theme').onclick=()=>{const d=document.documentElement,n=d.dataset.theme==='dark'?'light':'dark';d.dataset.theme=n;st.set('theme',n)};
$('#wipe').onclick=()=>{try{Object.keys(localStorage).filter(k=>k.startsWith('ss:')).forEach(k=>localStorage.removeItem(k))}catch(e){}location.reload()};
document.documentElement.dataset.theme=st.get('theme','dark');
document.querySelectorAll('i[data-lucide]').forEach(e=>{e.outerHTML=ic(e.dataset.lucide)});
$('#back').onclick=()=>{location.hash=$('#back').dataset.to};setLang(lang);route();
window.addEventListener('hashchange',route);
