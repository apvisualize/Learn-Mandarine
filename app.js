(function(){
  "use strict";

  /* ================= Data ================= */
  const CATEGORIES = [
    {id:"angka", label:"Angka", badge:"数", words:[
      {hanzi:"一", pinyin:"yī", arti:"satu"},
      {hanzi:"二", pinyin:"èr", arti:"dua"},
      {hanzi:"三", pinyin:"sān", arti:"tiga"},
      {hanzi:"四", pinyin:"sì", arti:"empat"},
      {hanzi:"五", pinyin:"wǔ", arti:"lima"},
      {hanzi:"六", pinyin:"liù", arti:"enam"},
      {hanzi:"七", pinyin:"qī", arti:"tujuh"},
      {hanzi:"八", pinyin:"bā", arti:"delapan"},
      {hanzi:"九", pinyin:"jiǔ", arti:"sembilan"},
      {hanzi:"十", pinyin:"shí", arti:"sepuluh"},
      {hanzi:"百", pinyin:"bǎi", arti:"seratus"}
    ]},
    {id:"sapaan", label:"Sapaan", badge:"好", words:[
      {hanzi:"你好", pinyin:"nǐ hǎo", arti:"halo"},
      {hanzi:"早上好", pinyin:"zǎoshang hǎo", arti:"selamat pagi"},
      {hanzi:"晚安", pinyin:"wǎn'ān", arti:"selamat malam"},
      {hanzi:"再见", pinyin:"zàijiàn", arti:"sampai jumpa"},
      {hanzi:"谢谢", pinyin:"xièxie", arti:"terima kasih"},
      {hanzi:"不客气", pinyin:"bú kèqi", arti:"sama-sama"},
      {hanzi:"对不起", pinyin:"duìbuqǐ", arti:"maaf"},
      {hanzi:"没关系", pinyin:"méi guānxi", arti:"tidak apa-apa"}
    ]},
    {id:"ganti", label:"Kata Ganti", badge:"我", words:[
      {hanzi:"我", pinyin:"wǒ", arti:"saya"},
      {hanzi:"你", pinyin:"nǐ", arti:"kamu"},
      {hanzi:"他", pinyin:"tā", arti:"dia (laki-laki)"},
      {hanzi:"她", pinyin:"tā", arti:"dia (perempuan)"},
      {hanzi:"我们", pinyin:"wǒmen", arti:"kami / kita"},
      {hanzi:"你们", pinyin:"nǐmen", arti:"kalian"},
      {hanzi:"他们", pinyin:"tāmen", arti:"mereka"}
    ]},
    {id:"keluarga", label:"Keluarga", badge:"家", words:[
      {hanzi:"爸爸", pinyin:"bàba", arti:"ayah"},
      {hanzi:"妈妈", pinyin:"māma", arti:"ibu"},
      {hanzi:"哥哥", pinyin:"gēge", arti:"kakak laki-laki"},
      {hanzi:"姐姐", pinyin:"jiějie", arti:"kakak perempuan"},
      {hanzi:"弟弟", pinyin:"dìdi", arti:"adik laki-laki"},
      {hanzi:"妹妹", pinyin:"mèimei", arti:"adik perempuan"},
      {hanzi:"朋友", pinyin:"péngyou", arti:"teman"},
      {hanzi:"老师", pinyin:"lǎoshī", arti:"guru"},
      {hanzi:"学生", pinyin:"xuésheng", arti:"murid"}
    ]},
    {id:"warna", label:"Warna", badge:"色", words:[
      {hanzi:"红色", pinyin:"hóngsè", arti:"merah"},
      {hanzi:"黄色", pinyin:"huángsè", arti:"kuning"},
      {hanzi:"蓝色", pinyin:"lánsè", arti:"biru"},
      {hanzi:"绿色", pinyin:"lǜsè", arti:"hijau"},
      {hanzi:"黑色", pinyin:"hēisè", arti:"hitam"},
      {hanzi:"白色", pinyin:"báisè", arti:"putih"},
      {hanzi:"紫色", pinyin:"zǐsè", arti:"ungu"}
    ]},
    {id:"waktu", label:"Waktu & Hari", badge:"天", words:[
      {hanzi:"今天", pinyin:"jīntiān", arti:"hari ini"},
      {hanzi:"明天", pinyin:"míngtiān", arti:"besok"},
      {hanzi:"昨天", pinyin:"zuótiān", arti:"kemarin"},
      {hanzi:"星期一", pinyin:"xīngqīyī", arti:"Senin"},
      {hanzi:"星期二", pinyin:"xīngqī'èr", arti:"Selasa"},
      {hanzi:"星期三", pinyin:"xīngqīsān", arti:"Rabu"},
      {hanzi:"星期四", pinyin:"xīngqīsì", arti:"Kamis"},
      {hanzi:"星期五", pinyin:"xīngqīwǔ", arti:"Jumat"},
      {hanzi:"星期六", pinyin:"xīngqīliù", arti:"Sabtu"},
      {hanzi:"星期日", pinyin:"xīngqīrì", arti:"Minggu"}
    ]},
    {id:"makanan", label:"Makanan", badge:"吃", words:[
      {hanzi:"米饭", pinyin:"mǐfàn", arti:"nasi"},
      {hanzi:"面条", pinyin:"miàntiáo", arti:"mi"},
      {hanzi:"水", pinyin:"shuǐ", arti:"air"},
      {hanzi:"茶", pinyin:"chá", arti:"teh"},
      {hanzi:"咖啡", pinyin:"kāfēi", arti:"kopi"},
      {hanzi:"牛奶", pinyin:"niúnǎi", arti:"susu"},
      {hanzi:"鸡蛋", pinyin:"jīdàn", arti:"telur"},
      {hanzi:"苹果", pinyin:"píngguǒ", arti:"apel"}
    ]},
    {id:"hewan", label:"Hewan", badge:"猫", words:[
      {hanzi:"猫", pinyin:"māo", arti:"kucing"},
      {hanzi:"狗", pinyin:"gǒu", arti:"anjing"},
      {hanzi:"鸟", pinyin:"niǎo", arti:"burung"},
      {hanzi:"鱼", pinyin:"yú", arti:"ikan"},
      {hanzi:"马", pinyin:"mǎ", arti:"kuda"},
      {hanzi:"牛", pinyin:"niú", arti:"sapi"}
    ]},
    {id:"sifat", label:"Kata Sifat", badge:"大", words:[
      {hanzi:"大", pinyin:"dà", arti:"besar"},
      {hanzi:"小", pinyin:"xiǎo", arti:"kecil"},
      {hanzi:"多", pinyin:"duō", arti:"banyak"},
      {hanzi:"少", pinyin:"shǎo", arti:"sedikit"},
      {hanzi:"好", pinyin:"hǎo", arti:"bagus / baik"},
      {hanzi:"漂亮", pinyin:"piàoliang", arti:"cantik"},
      {hanzi:"高兴", pinyin:"gāoxìng", arti:"senang"},
      {hanzi:"冷", pinyin:"lěng", arti:"dingin"},
      {hanzi:"热", pinyin:"rè", arti:"panas"}
    ]},
    {id:"kerja", label:"Kata Kerja", badge:"去", words:[
      {hanzi:"吃", pinyin:"chī", arti:"makan"},
      {hanzi:"喝", pinyin:"hē", arti:"minum"},
      {hanzi:"看", pinyin:"kàn", arti:"melihat / menonton"},
      {hanzi:"听", pinyin:"tīng", arti:"mendengar"},
      {hanzi:"说", pinyin:"shuō", arti:"berbicara"},
      {hanzi:"去", pinyin:"qù", arti:"pergi"},
      {hanzi:"来", pinyin:"lái", arti:"datang"},
      {hanzi:"爱", pinyin:"ài", arti:"cinta"},
      {hanzi:"喜欢", pinyin:"xǐhuan", arti:"suka"},
      {hanzi:"学习", pinyin:"xuéxí", arti:"belajar"}
    ]}
  ];

  const ALL_WORDS = CATEGORIES.flatMap(c => c.words.map(w => Object.assign({catId:c.id}, w)));
  const INK_COLOR = "#241a11";

  /* ================= State ================= */
  const state = { catId:"semua", index:0, mode:"hanzi", showGuide:true, mastered:new Set() };

  function currentList(){
    return state.catId === "semua" ? ALL_WORDS : ALL_WORDS.filter(w => w.catId === state.catId);
  }
  // During an exam, the "current word" comes from the shuffled exam
  // question list instead of the normal practice list/index.
  function currentWord(){
    if(examState) return examState.list[examState.idx] || null;
    const list = currentList();
    if(list.length === 0) return null;
    if(state.index >= list.length) state.index = 0;
    return list[state.index];
  }
  function shuffle(arr){
    for(let i = arr.length-1; i > 0; i--){
      const j = Math.floor(Math.random() * (i+1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  /* ================= Storage (with fallback) =================
     window.storage only exists inside the Claude Artifacts runtime.
     If this page is hosted/opened as a normal standalone website,
     window.storage will not exist and progress must fall back to
     localStorage instead of silently failing. */
  const storageBackend = (function(){
    if(window.storage && typeof window.storage.get === "function" && typeof window.storage.set === "function"){
      return window.storage;
    }
    return {
      async get(key){
        const raw = localStorage.getItem(key);
        if(raw === null) throw new Error("key not found");
        return {key, value: raw};
      },
      async set(key, value){
        localStorage.setItem(key, value);
        return {key, value};
      }
    };
  })();

  async function loadProgress(){
    try{
      const res = await storageBackend.get("mandarin-progress");
      if(res && res.value){
        const data = JSON.parse(res.value);
        if(data && Array.isArray(data.mastered)) state.mastered = new Set(data.mastered);
      }
    }catch(err){ /* belum ada progres tersimpan */ }
  }
  async function saveProgress(){
    try{
      await storageBackend.set("mandarin-progress", JSON.stringify({mastered:Array.from(state.mastered)}));
    }catch(err){ console.error("Gagal menyimpan progres", err); }
  }

  /* ================= Canvas setup (grid + pinyin guide) ================= */
  const wrap = document.getElementById("canvasWrap");
  const guideCanvas = document.getElementById("guideCanvas");
  const inkCanvas = document.getElementById("inkCanvas");
  const hanziTargetEl = document.getElementById("hanziWriterTarget");
  let guideCtx, inkCtx, cssW = 0, cssH = 0;
  let lastSize = {w:0, h:0};

  function setupCanvasSize(canvas){
    const dpr = Math.max(window.devicePixelRatio || 1, 1);
    const rect = canvas.getBoundingClientRect();
    const w = Math.max(Math.round(rect.width), 1);
    const h = Math.max(Math.round(rect.height), 1);
    canvas.width = Math.round(w * dpr);
    canvas.height = Math.round(h * dpr);
    const ctx = canvas.getContext("2d");
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    return {ctx, w, h};
  }

  function line(ctx,x1,y1,x2,y2){ ctx.beginPath(); ctx.moveTo(x1,y1); ctx.lineTo(x2,y2); ctx.stroke(); }

  function drawTianZiGe(ctx,w,h){
    const pad = Math.min(w,h) * 0.09;
    const size = Math.min(w,h) - pad*2;
    const x0 = (w-size)/2, y0 = (h-size)/2, x1 = x0+size, y1 = y0+size, cx = (x0+x1)/2, cy = (y0+y1)/2;
    ctx.save();
    ctx.strokeStyle = "rgba(193,52,47,0.45)";
    ctx.lineWidth = 1.4;
    ctx.strokeRect(x0,y0,size,size);
    ctx.setLineDash([5,5]);
    line(ctx,x0,cy,x1,cy);
    line(ctx,cx,y0,cx,y1);
    ctx.globalAlpha = 0.55;
    line(ctx,x0,y0,x1,y1);
    line(ctx,x1,y0,x0,y1);
    ctx.restore();
    return {x0,y0,size};
  }

  function drawRuledLines(ctx,w,h){
    const marginX = w*0.08;
    const top = h*0.30, mid = h*0.50, base = h*0.68, bottom = h*0.82;
    ctx.save();
    ctx.strokeStyle = "rgba(193,52,47,0.45)";
    ctx.lineWidth = 1.4;
    line(ctx,marginX,top,w-marginX,top);
    ctx.setLineDash([4,5]);
    line(ctx,marginX,mid,w-marginX,mid);
    ctx.setLineDash([]);
    ctx.lineWidth = 2;
    line(ctx,marginX,base,w-marginX,base);
    ctx.lineWidth = 1.4;
    ctx.setLineDash([4,5]);
    ctx.strokeStyle = "rgba(193,52,47,0.3)";
    line(ctx,marginX,bottom,w-marginX,bottom);
    ctx.restore();
  }

  // The Hanzi character itself is now drawn by HanziWriter (with real stroke
  // data), so this layer only draws the guiding grid / ruled lines.
  function drawGuideLayer(){
    if(!guideCtx) return;
    guideCtx.clearRect(0,0,cssW,cssH);
    const word = currentWord();
    if(!word) return;
    if(state.mode === "hanzi"){
      drawTianZiGe(guideCtx,cssW,cssH);
    } else {
      drawRuledLines(guideCtx,cssW,cssH);
      if(state.showGuide){
        guideCtx.font = `600 ${cssH*0.24}px "Inter", sans-serif`;
        guideCtx.textAlign = "center";
        guideCtx.textBaseline = "alphabetic";
        guideCtx.fillStyle = "rgba(36,26,17,0.26)";
        guideCtx.fillText(word.pinyin, cssW/2, cssH*0.635);
      }
    }
  }

  function clearInk(){
    if(!inkCtx) return;
    inkCtx.clearRect(0,0,cssW,cssH);
  }

  function updateModeVisibility(){
    const isHanzi = state.mode === "hanzi";
    inkCanvas.style.display = isHanzi ? "none" : "block";
    hanziTargetEl.style.display = isHanzi ? "flex" : "none";
  }

  function resizeCanvases(){
    const g = setupCanvasSize(guideCanvas);
    const i = setupCanvasSize(inkCanvas);
    guideCtx = g.ctx; inkCtx = i.ctx;
    const newW = g.w, newH = g.h;
    const sizeChanged = Math.abs(newW - lastSize.w) > 1 || Math.abs(newH - lastSize.h) > 1;
    cssW = newW; cssH = newH;
    inkCtx.lineCap = "round";
    inkCtx.lineJoin = "round";
    inkCtx.strokeStyle = INK_COLOR;
    drawGuideLayer();
    updateModeVisibility();
    // Only wipe the freehand ink when the size actually changed meaningfully
    // — avoids losing a user's in-progress drawing on trivial reflows
    // (e.g. font loading, minor layout shifts).
    if(sizeChanged){
      clearInk();
    }
    // The HanziWriter instance is rebuilt whenever the *word*, size, or
    // guide setting changes — not just on resize — otherwise navigating
    // to the next/previous word leaves the old character on screen.
    syncHanziWriter();
    lastSize = {w:newW, h:newH};
  }

  const ro = new ResizeObserver(() => resizeCanvases());
  ro.observe(wrap);

  /* ================= Freehand drawing (Pinyin mode) =================
     Adds a simple velocity-based variable line width so tracing feels
     less like a uniform ballpoint pen and a bit more brush-like: slower
     movement -> thicker stroke, faster movement -> thinner stroke. */
  let drawingNow = false;
  let lastPoint = null;
  let lastTime = 0;
  const MIN_WIDTH_FACTOR = 0.45;
  const MAX_WIDTH_FACTOR = 1.4;

  function baseLineWidth(){
    return Math.max(2.5, Math.min(cssW,cssH)*0.026);
  }

  function pointerPos(e){
    const rect = inkCanvas.getBoundingClientRect();
    return {x:e.clientX-rect.left, y:e.clientY-rect.top};
  }

  function widthForVelocity(p1, p2, dt){
    if(!dt || dt <= 0) return baseLineWidth();
    const dist = Math.hypot(p2.x-p1.x, p2.y-p1.y);
    const speed = dist / dt; // px per ms
    // Map speed to a width factor: slow -> MAX, fast -> MIN.
    const factor = Math.max(MIN_WIDTH_FACTOR, MAX_WIDTH_FACTOR - speed*2.2);
    return baseLineWidth() * Math.min(factor, MAX_WIDTH_FACTOR);
  }

  inkCanvas.addEventListener("pointerdown", e => {
    e.preventDefault();
    drawingNow = true;
    try{ inkCanvas.setPointerCapture(e.pointerId); }catch(err){}
    const p = pointerPos(e);
    lastPoint = p;
    lastTime = performance.now();
    inkCtx.lineWidth = baseLineWidth();
    inkCtx.beginPath();
    inkCtx.moveTo(p.x,p.y);
    inkCtx.lineTo(p.x+0.01,p.y+0.01);
    inkCtx.stroke();
  });
  inkCanvas.addEventListener("pointermove", e => {
    if(!drawingNow) return;
    const p = pointerPos(e);
    const now = performance.now();
    const dt = now - lastTime;
    if(lastPoint){
      inkCtx.lineWidth = widthForVelocity(lastPoint, p, dt);
    }
    inkCtx.beginPath();
    inkCtx.moveTo(lastPoint ? lastPoint.x : p.x, lastPoint ? lastPoint.y : p.y);
    inkCtx.lineTo(p.x,p.y);
    inkCtx.stroke();
    lastPoint = p;
    lastTime = now;
  });
  function endStroke(){ drawingNow = false; lastPoint = null; }
  inkCanvas.addEventListener("pointerup", endStroke);
  inkCanvas.addEventListener("pointercancel", endStroke);
  inkCanvas.addEventListener("pointerleave", endStroke);

  /* ================= HanziWriter (stroke-order validation) =================
     Replaces the old "draw whatever you want, nobody checks" behaviour for
     Hanzi mode: HanziWriter knows the real stroke data for each character,
     so it can validate stroke direction/position/order live, and can also
     play back the correct writing animation on demand. */
  let writer = null;
  let writerKey = null; // "<hanzi>__<size>__<showGuide>" of what's currently mounted
  const quizFeedbackEl = document.getElementById("quizFeedback");

  // During an exam there is never an outline hint, regardless of what the
  // (hidden) "Tampilkan panduan" switch was last set to.
  function effectiveShowGuide(){
    return examState ? false : state.showGuide;
  }

  // Decides whether the HanziWriter instance needs rebuilding: only when
  // the word, board size, or guide setting actually differ from what's
  // currently mounted. Called on every render/resize so word navigation
  // always swaps the character immediately.
  function syncHanziWriter(){
    if(state.mode !== "hanzi") return;
    const word = currentWord();
    const size = Math.max(Math.min(cssW,cssH) - 8, 40);
    const key = word ? `${word.hanzi}__${size}__${effectiveShowGuide()}` : null;
    if(key === writerKey) return;
    writerKey = key;
    initHanziWriter();
  }

  function setQuizFeedback(text, isMistake){
    quizFeedbackEl.textContent = text || "";
    quizFeedbackEl.classList.toggle("is-mistake", !!isMistake);
  }

  function destroyWriter(){
    if(writer){
      hanziTargetEl.innerHTML = "";
      writer = null;
    }
  }

  function initHanziWriter(){
    destroyWriter();
    const word = currentWord();
    setQuizFeedback("");
    if(!word || typeof HanziWriter === "undefined") return;
    const size = Math.max(Math.min(cssW,cssH) - 8, 40);
    try{
      writer = HanziWriter.create(hanziTargetEl, word.hanzi, {
        width: size,
        height: size,
        padding: Math.round(size*0.1),
        showCharacter: false,
        showOutline: effectiveShowGuide(),
        strokeAnimationSpeed: 1.1,
        delayBetweenStrokes: 200,
        strokeColor: INK_COLOR,
        outlineColor: "rgba(36,26,17,0.22)",
        drawingColor: INK_COLOR,
        radicalColor: "#c1342f"
      });
      startQuiz();
    }catch(err){
      // Character stroke data not available (e.g. offline, or an
      // uncommon character) — fail quietly rather than breaking the page.
      console.error("HanziWriter gagal memuat data goresan", err);
      setQuizFeedback("Data goresan untuk karakter ini tidak berhasil dimuat.", true);
    }
  }

  function startQuiz(){
    if(!writer) return;
    setQuizFeedback("Mulai menulis di dalam kotak.");
    writer.quiz({
      onMistake: function(strokeData){
        setQuizFeedback(`Belum tepat, coba lagi (goresan ke-${strokeData.strokeNum+1}).`, true);
      },
      onCorrectStroke: function(strokeData){
        const remaining = strokeData.strokesRemaining;
        setQuizFeedback(remaining > 0 ? `Benar! ${remaining} goresan lagi.` : "Goresan terakhir benar!");
      },
      onComplete: function(summaryData){
        const mistakes = summaryData && typeof summaryData.totalMistakes === "number" ? summaryData.totalMistakes : 0;
        if(examState){
          handleExamAnswerComplete(mistakes);
        } else {
          setQuizFeedback(mistakes === 0 ? "Sempurna, tanpa kesalahan!" : `Selesai dengan ${mistakes} kesalahan.`);
        }
      }
    });
  }

  document.getElementById("demoBtn").addEventListener("click", () => {
    if(state.mode !== "hanzi" || !writer || examState) return;
    setQuizFeedback("Memutar urutan goresan yang benar...");
    writer.animateCharacter({
      onComplete: () => startQuiz()
    });
  });

  /* ================= Exam mode =================
     A real test: no outline, no "Lihat cara menulis" demo, no unlimited
     retries — just pinyin + arti as the question, write the Hanzi from
     memory, and get a score at the end. */
  let examState = null; // { list, idx, results:[{hanzi,pinyin,arti,mistakes}], missedWords? }

  const examIdleBar = document.getElementById("examIdleBar");
  const examCountEl = document.getElementById("examCount");
  const examStatusBar = document.getElementById("examStatusBar");
  const examProgressTextEl = document.getElementById("examProgressText");
  const examSummaryEl = document.getElementById("examSummary");
  const examScoreTextEl = document.getElementById("examScoreText");
  const examMissedListEl = document.getElementById("examMissedList");
  const retryMissedBtn = document.getElementById("retryMissedBtn");
  const canvasToolsEl = document.querySelector(".canvas-tools");

  function updateExamCount(){
    if(examState) return;
    examCountEl.textContent = currentList().length;
  }

  function startExam(list){
    if(!list || !list.length) return;
    examState = { list: shuffle(list.slice()), idx: 0, results: [] };
    document.body.classList.add("exam-active");
    examSummaryEl.hidden = true;
    examStatusBar.hidden = false;
    wrap.style.display = "";
    canvasToolsEl.style.display = "";
    quizFeedbackEl.classList.remove("is-mistake");
    writerKey = null; // force a fresh HanziWriter build for the first question
    render();
  }

  function handleExamAnswerComplete(mistakes){
    const item = examState.list[examState.idx];
    examState.results.push({hanzi:item.hanzi, pinyin:item.pinyin, arti:item.arti, mistakes});
    setQuizFeedback(mistakes === 0 ? "Benar, tanpa kesalahan!" : `Dicatat — ${mistakes} kesalahan.`, mistakes > 0);
    examState.idx++;
    setTimeout(() => {
      if(!examState) return; // user may have exited the exam during the delay
      if(examState.idx >= examState.list.length){
        finishExam();
      } else {
        render();
      }
    }, 900);
  }

  function finishExam(){
    const results = examState.results;
    const total = results.length;
    const correct = results.filter(r => r.mistakes === 0).length;
    const missed = results.filter(r => r.mistakes > 0);

    examStatusBar.hidden = true;
    examSummaryEl.hidden = false;
    wrap.style.display = "none";
    canvasToolsEl.style.display = "none";
    quizFeedbackEl.textContent = "";

    examScoreTextEl.textContent = `${correct} / ${total} benar tanpa kesalahan`;
    examMissedListEl.innerHTML = "";
    if(missed.length === 0){
      const li = document.createElement("li");
      li.textContent = "Semua benar tanpa kesalahan — kerja bagus!";
      examMissedListEl.appendChild(li);
    } else {
      missed.forEach(r => {
        const li = document.createElement("li");
        li.textContent = `${r.hanzi} (${r.pinyin}) — ${r.arti}: ${r.mistakes} kesalahan`;
        examMissedListEl.appendChild(li);
      });
    }
    examState.missedWords = missed.map(r => {
      const full = ALL_WORDS.find(w => w.hanzi === r.hanzi);
      return full || {hanzi:r.hanzi, pinyin:r.pinyin, arti:r.arti, catId:state.catId};
    });
    retryMissedBtn.hidden = missed.length === 0;
  }

  function exitExam(){
    examState = null;
    document.body.classList.remove("exam-active");
    examIdleBar.hidden = false;
    examStatusBar.hidden = true;
    examSummaryEl.hidden = true;
    wrap.style.display = "";
    canvasToolsEl.style.display = "";
    writerKey = null;
    render();
  }

  document.getElementById("startExamBtn").addEventListener("click", () => {
    startExam(currentList());
  });
  document.getElementById("exitExamBtn").addEventListener("click", exitExam);
  document.getElementById("finishExamBtn").addEventListener("click", exitExam);
  retryMissedBtn.addEventListener("click", () => {
    if(!examState || !examState.missedWords || !examState.missedWords.length) return;
    const list = examState.missedWords;
    examState = null;
    startExam(list);
  });

  /* ================= Speech synthesis (with real availability check) =================
     Checking `"speechSynthesis" in window` only proves the *API* exists —
     it says nothing about whether a Mandarin voice is actually installed.
     Voices also load asynchronously in most browsers, so we must wait for
     the "voiceschanged" event before trusting getVoices(). */
  let zhVoiceAvailable = false;
  const speakBtn = document.getElementById("speakBtn");
  const voiceWarningEl = document.getElementById("voiceWarning");

  function refreshVoices(){
    if(!("speechSynthesis" in window)) return;
    const voices = window.speechSynthesis.getVoices();
    zhVoiceAvailable = voices.some(v => v.lang && v.lang.toLowerCase().startsWith("zh"));
    updateSpeakButtonState();
  }

  function updateSpeakButtonState(){
    const supported = "speechSynthesis" in window;
    speakBtn.disabled = !supported || !zhVoiceAvailable;
    if(!supported){
      speakBtn.title = "Fitur suara tidak didukung di perangkat ini";
      voiceWarningEl.hidden = false;
    } else if(!zhVoiceAvailable){
      speakBtn.title = "Voice Mandarin tidak ditemukan di perangkat ini";
      voiceWarningEl.hidden = false;
    } else {
      speakBtn.title = "Dengarkan pengucapan";
      voiceWarningEl.hidden = true;
    }
  }

  function speak(text){
    if(!("speechSynthesis" in window) || !zhVoiceAvailable) return;
    try{
      window.speechSynthesis.cancel();
      const utter = new SpeechSynthesisUtterance(text);
      const voices = window.speechSynthesis.getVoices();
      const zhVoice = voices.find(v => v.lang && v.lang.toLowerCase().startsWith("zh"));
      if(zhVoice) utter.voice = zhVoice;
      utter.lang = zhVoice ? zhVoice.lang : "zh-CN";
      utter.rate = 0.85;
      window.speechSynthesis.speak(utter);
    }catch(err){ console.error("Gagal memutar suara", err); }
  }

  if("speechSynthesis" in window){
    refreshVoices();
    window.speechSynthesis.addEventListener("voiceschanged", refreshVoices);
  } else {
    updateSpeakButtonState();
  }

  speakBtn.addEventListener("click", () => {
    const word = currentWord();
    if(word) speak(word.hanzi);
  });

  /* ================= Rendering ================= */
  function render(){
    const word = currentWord();
    const list = currentList();

    const hanziEl = document.getElementById("promptHanzi");
    const pinyinEl = document.getElementById("promptPinyin");
    const artiEl = document.getElementById("promptArti");

    if(!word){
      hanziEl.style.display = "none";
      pinyinEl.style.display = "";
      pinyinEl.textContent = "Belum ada kata di kategori ini.";
      artiEl.textContent = "";
    } else if(examState){
      // Exam question: only pinyin + meaning are given — the Hanzi has to
      // be written from memory, with no outline hint at all.
      hanziEl.style.display = "none";
      pinyinEl.style.display = "";
      pinyinEl.textContent = word.pinyin;
      artiEl.textContent = word.arti;
      examProgressTextEl.textContent = `Soal ${examState.idx+1} / ${examState.list.length}`;
    } else {
      const revealPinyin = state.mode === "pinyin" ? state.showGuide : true;
      hanziEl.style.display = "";
      hanziEl.textContent = word.hanzi;
      pinyinEl.style.display = revealPinyin ? "" : "none";
      pinyinEl.textContent = word.pinyin;
      artiEl.textContent = word.arti;
    }

    document.getElementById("counterText").textContent = list.length ? `${state.index+1} / ${list.length}` : "0 / 0";
    updateExamCount();

    const masterBtn = document.getElementById("masterBtn");
    const isMastered = !!(word && state.mastered.has(word.hanzi));
    masterBtn.classList.toggle("is-active", isMastered);
    masterBtn.setAttribute("aria-pressed", isMastered ? "true" : "false");
    masterBtn.querySelector(".btn-label").textContent = isMastered ? "Sudah Dikuasai" : "Tandai Selesai";

    document.getElementById("clearBtnLabel").textContent = state.mode === "hanzi" ? "Ulangi" : "Hapus";
    document.getElementById("demoBtn").style.display = state.mode === "hanzi" ? "inline-flex" : "none";

    const masteredInList = list.filter(w => state.mastered.has(w.hanzi)).length;
    const pct = list.length ? Math.round(masteredInList/list.length*100) : 0;
    document.getElementById("progressFill").style.width = pct + "%";
    document.getElementById("progressLabel").textContent = list.length ? `${masteredInList} dari ${list.length} kata dikuasai (${pct}%)` : "";

    wrap.classList.toggle("mode-pinyin", state.mode === "pinyin");
    wrap.setAttribute("aria-label", `Papan latihan menulis ${state.mode === "hanzi" ? "karakter Han" : "pinyin"} untuk kata saat ini`);

    resizeCanvases();
  }

  /* ================= Category rail ================= */
  function makePill(id,label,badge,count){
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "cat-pill";
    btn.dataset.cat = id;
    btn.innerHTML = `<span class="cat-badge" lang="zh-CN" aria-hidden="true">${badge}</span><span class="cat-label">${label}</span><span class="cat-count">${count}</span>`;
    btn.addEventListener("click", () => {
      state.catId = id;
      state.index = 0;
      updatePillActive();
      render();
    });
    return btn;
  }
  function updatePillActive(){
    document.querySelectorAll(".cat-pill").forEach(btn => {
      const active = btn.dataset.cat === state.catId;
      btn.classList.toggle("is-active", active);
      btn.setAttribute("aria-pressed", active ? "true" : "false");
    });
  }
  function buildCategoryPills(){
    const rail = document.getElementById("categoryRail");
    rail.appendChild(makePill("semua","Semua","全",ALL_WORDS.length));
    CATEGORIES.forEach(c => rail.appendChild(makePill(c.id,c.label,c.badge,c.words.length)));
    updatePillActive();
  }

  /* ================= Controls ================= */
  function setMode(m){
    if(state.mode === m) return;
    state.mode = m;
    document.getElementById("modeHanziBtn").classList.toggle("is-active", m === "hanzi");
    document.getElementById("modeHanziBtn").setAttribute("aria-pressed", m === "hanzi");
    document.getElementById("modePinyinBtn").classList.toggle("is-active", m === "pinyin");
    document.getElementById("modePinyinBtn").setAttribute("aria-pressed", m === "pinyin");
    render();
  }
  document.getElementById("modeHanziBtn").addEventListener("click", () => setMode("hanzi"));
  document.getElementById("modePinyinBtn").addEventListener("click", () => setMode("pinyin"));

  document.getElementById("guideToggle").addEventListener("change", e => {
    state.showGuide = e.target.checked;
    render();
  });

  document.getElementById("clearBtn").addEventListener("click", () => {
    if(state.mode === "hanzi"){
      startQuiz();
    } else {
      clearInk();
    }
  });

  document.getElementById("prevBtn").addEventListener("click", () => {
    const list = currentList();
    if(!list.length) return;
    state.index = (state.index - 1 + list.length) % list.length;
    render();
  });
  document.getElementById("nextBtn").addEventListener("click", () => {
    const list = currentList();
    if(!list.length) return;
    state.index = (state.index + 1) % list.length;
    render();
  });

  document.getElementById("masterBtn").addEventListener("click", () => {
    const word = currentWord();
    if(!word) return;
    if(state.mastered.has(word.hanzi)) state.mastered.delete(word.hanzi);
    else state.mastered.add(word.hanzi);
    saveProgress();
    render();
  });

  document.getElementById("resetProgressBtn").addEventListener("click", () => {
    if(confirm("Hapus semua progres latihan yang tersimpan di perangkat ini?")){
      state.mastered.clear();
      saveProgress();
      render();
    }
  });

  /* ================= Init ================= */
  buildCategoryPills();
  loadProgress().finally(render);
})();