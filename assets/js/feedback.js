
const katalcss = document.createElement('link'); 
katalcss.rel = "stylesheet";
katalcss.class="katal-style-api";
katalcss.crossorigin="anonymous";
katalcss.href = 'https://d1uznvntk80v7s.cloudfront.net/katal.components-with-data-grid.19772a04090c08d462ce.css'; 
document.head.append(katalcss);

const katalscript = document.createElement('script'); 
katalscript.src = 'https://d1uznvntk80v7s.cloudfront.net/katal.components-with-data-grid.742a7b780ec5c7e6251e.min.js'; 
katalscript.crossorigin="anonymous";
document.head.append(katalscript);

const katalstyle = document.createElement('style'); 
katalstyle.innerHTML = ''
+'.kat3-satisfaction-rating li {'
+'	float: left;'
+'	list-style-type: none;'
+'}'
+'.hmd3-emoji {'
+'	background:url(https://m.media-amazon.com/images/G/01/katal/hmd/hmdfaces.png);'
+'	height:34px;'
+'	width:35px;'
+'	display:block;'
+'	margin-right:.5rem;'
+'	cursor:pointer'
+'}'
+'.hmd3-emoji.hmd3-emoji-1 {background-position:197px -83px}'
+'.hmd3-emoji.hmd3-emoji-2 {background-position:157px -83px}'
+'.hmd3-emoji.hmd3-emoji-3 {background-position:117px -83px}'
+'.hmd3-emoji.hmd3-emoji-4 {background-position: 77px -83px}'
+'.hmd3-emoji.hmd3-emoji-5 {background-position: 37px -83px}'
+'.hmd3-emoji.hmd3-emoji-1:hover, .hmd3-emoji.hmd3-emoji-1:focus {background-position: 197px -43px;}'
+'.hmd3-emoji.hmd3-emoji-2:hover, .hmd3-emoji.hmd3-emoji-2:focus {background-position: 157px -43px;}'
+'.hmd3-emoji.hmd3-emoji-3:hover, .hmd3-emoji.hmd3-emoji-3:focus {background-position: 117px -43px;}'
+'.hmd3-emoji.hmd3-emoji-4:hover, .hmd3-emoji.hmd3-emoji-4:focus {background-position:  77px -43px;}'
+'.hmd3-emoji.hmd3-emoji-5:hover, .hmd3-emoji.hmd3-emoji-5:focus {background-position:  37px -43px;}'
;
document.head.append(katalstyle);

const divBorder = document.createElement('div');
divBorder.style="position: fixed; bottom: 0px; right: 100px";
divBorder.innerHTML = ''
	+'<svg id="feedback" width="224" height="40">'
	+'	<rect x="2" y="2" width="220" height="36"  rx="4" ry="4" style="fill-opacity:.8;fill:white;stroke:gray;stroke-width:2" />'
	+'</svg>';
document.body.append(divBorder);

const divRating = document.createElement('div');
divRating.style="position: fixed; bottom: 7px; right: 100px";
divRating.innerHTML = ''
	+'<ul class="kat3-satisfaction-rating kat-hmd-form-item-spacing">'
	+'	<li class="rating-1"><a tabindex="0" class="hmd-rating-item-icon hmd3-emoji hmd3-emoji-1" data-rating="1" aria-label="very unsatisfied"></a></li>'
	+'	<li class="rating-2"><a tabindex="0" class="hmd-rating-item-icon hmd3-emoji hmd3-emoji-2" data-rating="2" aria-label="unsatisfied"></a></li>'
	+'	<li class="rating-3"><a tabindex="0" class="hmd-rating-item-icon hmd3-emoji hmd3-emoji-3" data-rating="3" aria-label="neutral"></a></li>'
	+'	<li class="rating-4"><a tabindex="0" class="hmd-rating-item-icon hmd3-emoji hmd3-emoji-4" data-rating="4" aria-label="satisfied"></a></li>'
	+'	<li class="rating-5"><a tabindex="0" class="hmd-rating-item-icon hmd3-emoji hmd3-emoji-5" data-rating="5" aria-label="very satisfied"></a></li>'
	+'</ul>';
document.body.append(divRating);

const katal = document.createElement('kat-hmd'); 
katal.locale="en-US";
katal.title="Feedback";
katal.mode="modal";
katal.rating="0";
katal.subject="other";
katal.addEventListener("submit", (e) => {
	e.target.close();
	const hmdData = {
		score: e.detail.rating,
		comment: e.detail.comment,
		subject: e.detail.subject,
		pageName: window.location.toString()
	}
	fetch("https://application.gamma.devo.jobsatamazon.hvh.a2z.com/api/feedback", {
		method: "POST",
		//mode: 'no-cors',
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(hmdData),
	});
});
const divKatal = document.createElement('div');
divKatal.className="katal container";
divKatal.append(katal);
document.body.append(divKatal);

for (const li of divRating.firstChild.childNodes ) {
	li.addEventListener('click', e => popup(li.className));	
	li.addEventListener('keydown', e => {if(e.key === "Enter") popup(li.className);});	
}

function popup(id) {
	katal.rating=id.slice(-1); 
	katal.subject="other";
	katal.comment="";
	katal.visible=true;
}
