
//(()=>{const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];let sfx=true,ctx;
//function tone(f,d=.08){if(!sfx)return;try{ctx??=new(window.AudioContext||window.webkitAudioContext)();let o=ctx.createOscillator(),g=ctx.createGain();o.frequency.value=f;g.gain.value=.035;g.gain.exponentialRampToValueAtTime(.0001,ctx.currentTime+d);o.connect(g);g.connect(ctx.destination);o.start();o.stop(ctx.currentTime+d)}catch(e){}}
//const snd={click:()=>tone(420,.06),bad:()=>{tone(180,.1);setTimeout(()=>tone(130,.12),70)},win:()=>{tone(523,.1);setTimeout(()=>tone(659,.1),90);setTimeout(()=>tone(784,.15),180)},lose:()=>{tone(300,.13);setTimeout(()=>tone(220,.18),120)}};
//function go(id){$$(".screen").forEach(x=>x.classList.remove("active"));$("#"+id).classList.add("active");$$(".navbtn").forEach(x=>x.classList.toggle("active",x.dataset.go===id));scrollTo({top:0,behavior:"smooth"});snd.click()}$$("[data-go]").forEach(x=>x.onclick=()=>go(x.dataset.go));
//const nc={1:[50,4],2:[1000,8],3:[1000000,12]};let n={d:0,s:null,max:0,lim:0,a:0,over:0};
//function prime(x){if(x<2)return 0;for(let i=2;i*i<=x;i++)if(x%i===0)return 0;return 1}function nnew(){if(!n.d)return;n.s=Math.floor(Math.random()*n.max)+1;n.a=0;n.over=0;$("#ni").disabled=$("#ng").disabled=false;$("#ni").value="";$("#nr").textContent="1–"+n.max.toLocaleString();$("#na").textContent=0;$("#nrem").textContent=n.lim;$("#nh").innerHTML="💡 "+(n.s%2===0?"The number is even.":prime(n.s)?"The number is prime.":"The number is odd.")+"<br>🔢 It has <b>"+String(n.s).length+"</b> digit(s).";msg("#nm","Round ready — make your first guess.","")}
//function msg(id,t,c=""){let e=$(id);e.className="message "+c;e.innerHTML=t}$$("[data-nd]").forEach(b=>b.onclick=()=>{let d=+b.dataset.nd;n.d=d;n.max=nc[d][0];n.lim=nc[d][1];$$("[data-nd]").forEach(x=>x.classList.toggle("selected",+x.dataset.nd===d));nnew()});$("#nf").onsubmit=e=>{e.preventDefault();if(n.over)return;let raw=$("#ni").value,g=Number(raw);if(raw===""||!Number.isInteger(g)){msg("#nm","Please enter a whole number.");return}if(g<1||g>n.max){msg("#nm","Enter a number between 1 and "+n.max.toLocaleString()+".");return}n.a++;$("#na").textContent=n.a;$("#nrem").textContent=n.lim-n.a;if(g===n.s){n.over=1;snd.win();msg("#nm","🎉 <b>Correct!</b> The number was "+n.s.toLocaleString()+".<br>You used "+n.a+" attempt(s).","win")}else if(n.a>=n.lim){n.over=1;snd.lose();msg("#nm","❌ <b>Game Over!</b><br>The secret number was <b>"+n.s.toLocaleString()+"</b>.","lose")}else{snd.bad();msg("#nm",g<n.s?"⬆️ Too low — try again!":"⬇️ Too high — try again!");$("#ni").select()}};$("#nn").onclick=nnew;
//const bank=["apple","banana","orange","computer","keyboard","school","football","garden","mountain","river","sunshine","planet","ocean","camera","book","friend","music","pencil","window","market","teacher","student","family","adventure","rainbow","airplane","telephone","supermarket","chocolate","butterfly","elephant","kangaroo","library","diamond","forest","village","hospital","journey","rocket","castle","tiger","sunflower","basketball","sandwich","laptop","raincoat"],wc={1:[1,6],2:[2,12],3:[3,18]};let w={d:0,s:"",lim:0,a:0,found:new Set(),over:0};
//function pick(k){let a=[];while(a.length<k){let x=bank[Math.floor(Math.random()*bank.length)];if(!a.includes(x))a.push(x)}return a.join(" ")}function wnew(){if(!w.d)return;w.s=pick(wc[w.d][0]);w.lim=wc[w.d][1];w.a=0;w.found=new Set();w.over=0;$("#wi").disabled=$("#wg").disabled=false;$("#wi").value="";$("#wc").textContent=wc[w.d][0];$("#wa").textContent=0;$("#wr").textContent=w.lim;$("#wh").innerHTML="💡 The answer contains <b>"+w.s.replaceAll(" ","").length+"</b> letters and "+wc[w.d][0]+" word(s).";render();msg("#wm","Round ready — make your first guess.","")}
//function render(){$("#wd").textContent=[...w.s].map(c=>c===" "?"   ":w.found.has(c)?c:"•").join("");$("#hearts").textContent="❤️".repeat(w.lim-w.a)+" 🖤".repeat(w.a)}
//$$("[data-wd]").forEach(b=>b.onclick=()=>{w.d=+b.dataset.wd;$$("[data-wd]").forEach(x=>x.classList.toggle("selected",+x.dataset.wd===w.d));wnew()});$("#wf").onsubmit=e=>{e.preventDefault();if(w.over)return;let g=$("#wi").value.trim().toLowerCase();if(!g){msg("#wm","Enter a word or phrase first.");return}if(g===w.s){w.over=1;w.s.split("").forEach(c=>w.found.add(c));render();snd.win();msg("#wm","🎉 <b>Correct!</b> The answer was “"+w.s+"”.","win");return}w.a++;$("#wa").textContent=w.a;$("#wr").textContent=w.lim-w.a;for(let c of g)if(/[a-z]/.test(c)&&w.s.includes(c))w.found.add(c);render();if(w.a>=w.lim){w.over=1;snd.lose();msg("#wm","❌ <b>Game Over!</b><br>The answer was <b>"+w.s+"</b>.","lose")}else{snd.bad();let h=[...new Set([...g].filter(c=>/[a-z]/.test(c)&&w.s.includes(c)))];msg("#wm",h.length?"🔎 Letters found: <b>"+h.join(", ")+"</b>.":"❌ No letters from that guess are in the answer.");$("#wi").select()}};$("#wn").onclick=wnew;
//$("#sfx").onclick=()=>{sfx=!sfx;$("#sfx").textContent=sfx?"ON":"OFF";if(sfx)snd.click()};
//})();

(function () {
    const $ = (s) => document.querySelector(s);
    const $$ = (s) => [...document.querySelectorAll(s)];
  
    let sfx = true;
    let ctx;
  
    function tone(f, d = 0.08) {
      if (!sfx) return;
      try {
        ctx ??= new (window.AudioContext || window.webkitAudioContext)();
        let o = ctx.createOscillator();
        let g = ctx.createGain();
  
        o.frequency.value = f;
        g.gain.value = 0.035;
        g.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + d);
  
        o.connect(g);
        g.connect(ctx.destination);
  
        o.start();
        o.stop(ctx.currentTime + d);
      } catch (e) {}
    }
  
    const snd = {
      click: () => tone(420, 0.06),
      bad: () => {
        tone(180, 0.1);
        setTimeout(() => tone(130, 0.12), 70);
      },
      win: () => {
        tone(523, 0.1);
        setTimeout(() => tone(659, 0.1), 90);
        setTimeout(() => tone(784, 0.15), 180);
      },
      lose: () => {
        tone(300, 0.13);
        setTimeout(() => tone(220, 0.18), 120);
      },
    };
  
    function go(id) {
      $$(".screen").forEach((x) => x.classList.remove("active"));
      $("#" + id).classList.add("active");
      $$(".navbtn").forEach((x) =>
        x.classList.toggle("active", x.dataset.go === id)
      );
      scrollTo({ top: 0, behavior: "smooth" });
      snd.click();
    }
  
    $$("[data-go]").forEach((x) => (x.onclick = () => go(x.dataset.go)));
  
    // --- Number Guessing Game ---
  
    const nc = {
      1: [50, 4],
      2: [1000, 8],
      3: [1000000, 12],
    };
  
    let n = {
      d: 0,
      s: null,
      max: 0,
      lim: 0,
      a: 0,
      over: 0,
    };
  
    function prime(x) {
      if (x < 2) return 0;
      for (let i = 2; i * i <= x; i++) {
        if (x % i === 0) return 0;
      }
      return 1;
    }
  
    function nnew() {
      if (!n.d) return;
  
      n.s = Math.floor(Math.random() * n.max) + 1;
      n.a = 0;
      n.over = 0;
  
      $("#ni").disabled = $("#ng").disabled = false;
      $("#ni").value = "";
      $("#nr").textContent = "1–" + n.max.toLocaleString();
      $("#na").textContent = 0;
      $("#nrem").textContent = n.lim;
  
      $("#nh").innerHTML =
        "💡 " +
        (n.s % 2 === 0
          ? "The number is even."
          : prime(n.s)
          ? "The number is prime."
          : "The number is odd.") +
        "<br>🔢 It has <b>" +
        String(n.s).length +
        "</b> digit(s).";
  
      msg("#nm", "Round ready — make your first guess.", "");
    }
  
    function msg(id, t, c = "") {
      let e = $(id);
      e.className = "message " + c;
      e.innerHTML = t;
    }
  
    $$("[data-nd]").forEach(
      (b) =>
        (b.onclick = () => {
          let d = +b.dataset.nd;
          n.d = d;
          n.max = nc[d][0];
          n.lim = nc[d][1];
          $$("[data-nd]").forEach((x) =>
            x.classList.toggle("selected", +x.dataset.nd === d)
          );
          nnew();
        })
    );
  
    $("#nf").onsubmit = (e) => {
      e.preventDefault();
      if (n.over) return;
  
      let raw = $("#ni").value;
      let g = Number(raw);
  
      if (raw === "" || !Number.isInteger(g)) {
        msg("#nm", "Please enter a whole number.");
        return;
      }
  
      if (g < 1 || g > n.max) {
        msg("#nm", "Enter a number between 1 and " + n.max.toLocaleString() + ".");
        return;
      }
  
      n.a++;
      $("#na").textContent = n.a;
      $("#nrem").textContent = n.lim - n.a;
  
      if (g === n.s) {
        n.over = 1;
        snd.win();
        msg(
          "#nm",
          "🎉 <b>Correct!</b> The number was " +
            n.s.toLocaleString() +
            ".<br>You used " +
            n.a +
            " attempt(s).",
          "win"
        );
      } else if (n.a >= n.lim) {
        n.over = 1;
        snd.lose();
        msg(
          "#nm",
          "❌ <b>Game Over!</b><br>The secret number was <b>" +
            n.s.toLocaleString() +
            "</b>.",
          "lose"
        );
      } else {
        snd.bad();
        msg("#nm", g < n.s ? "⬆️ Too low — try again!" : "⬇️ Too high — try again!");
        $("#ni").select();
      }
    };
  
    $("#nn").onclick = nnew;
  
    // --- Word Guessing Game ---
  
    const bank = [
      "apple", "banana", "orange", "computer", "keyboard", "school", "football",
      "garden", "mountain", "river", "sunshine", "planet", "ocean", "camera",
      "book", "friend", "music", "pencil", "window", "market", "teacher",
      "student", "family", "adventure", "rainbow", "airplane", "telephone",
      "supermarket", "chocolate", "butterfly", "elephant", "kangaroo", "library",
      "diamond", "forest", "village", "hospital", "journey", "rocket", "castle",
      "tiger", "sunflower", "basketball", "sandwich", "laptop", "raincoat"
    ];
  
    const wc = {
      1: [1, 6],
      2: [2, 12],
      3: [3, 18],
    };
  
    let w = {
      d: 0,
      s: "",
      lim: 0,
      a: 0,
      found: new Set(),
      over: 0,
    };
  
    function pick(k) {
      let a = [];
      while (a.length < k) {
        let x = bank[Math.floor(Math.random() * bank.length)];
        if (!a.includes(x)) a.push(x);
      }
      return a.join(" ");
    }
  
    function wnew() {
      if (!w.d) return;
  
      w.s = pick(wc[w.d][0]);
      w.lim = wc[w.d][1];
      w.a = 0;
      w.found = new Set();
      w.over = 0;
  
      $("#wi").disabled = $("#wg").disabled = false;
      $("#wi").value = "";
      $("#wc").textContent = wc[w.d][0];
      $("#wa").textContent = 0;
      $("#wr").textContent = w.lim;
  
      $("#wh").innerHTML =
        "💡 The answer contains <b>" +
        w.s.replaceAll(" ", "").length +
        "</b> letters and " +
        wc[w.d][0] +
        " word(s).";
  
      render();
      msg("#wm", "Round ready — make your first guess.", "");
    }
  
    function render() {
      $("#wd").textContent = [...w.s]
        .map((c) => (c === " " ? "   " : w.found.has(c) ? c : "•"))
        .join("");
      $("#hearts").textContent =
        "❤️".repeat(w.lim - w.a) + " 🖤".repeat(w.a);
    }
  
    $$("[data-wd]").forEach(
      (b) =>
        (b.onclick = () => {
          w.d = +b.dataset.wd;
          $$("[data-wd]").forEach((x) =>
            x.classList.toggle("selected", +x.dataset.wd === w.d)
          );
          wnew();
        })
    );
  
    $("#wf").onsubmit = (e) => {
      e.preventDefault();
      if (w.over) return;
  
      let g = $("#wi").value.trim().toLowerCase();
      if (!g) {
        msg("#wm", "Enter a word or phrase first.");
        return;
      }
  
      if (g === w.s) {
        w.over = 1;
        w.s.split("").forEach((c) => w.found.add(c));
        render();
        snd.win();
        msg("#wm", "🎉 <b>Correct!</b> The answer was “" + w.s + "”.", "win");
        return;
      }
  
      w.a++;
      $("#wa").textContent = w.a;
      $("#wr").textContent = w.lim - w.a;
  
      for (let c of g) {
        if (/[a-z]/.test(c) && w.s.includes(c)) w.found.add(c);
      }
      render();
  
      if (w.a >= w.lim) {
        w.over = 1;
        snd.lose();
        msg("#wm", "❌ <b>Game Over!</b><br>The answer was <b>" + w.s + "</b>.", "lose");
      } else {
        snd.bad();
        let h = [
          ...new Set([...g].filter((c) => /[a-z]/.test(c) && w.s.includes(c))),
        ];
        msg(
          "#wm",
          h.length
            ? "🔎 Letters found: <b>" + h.join(", ") + "</b>."
            : "❌ No letters from that guess are in the answer."
        );
        $("#wi").select();
      }
    };
  
    $("#wn").onclick = wnew;
  
    // --- Sound Toggle ---
  
    $("#sfx").onclick = () => {
      sfx = !sfx;
      $("#sfx").textContent = sfx ? "ON" : "OFF";
      if (sfx) snd.click();
    };
  })();