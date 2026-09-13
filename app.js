(function(){
  "use strict";

  /* ================= Data ================= */
  const CATEGORIES = [
    {id:"angka", label:"Angka", badge:"数", words:[
      {hanzi:"一", pinyin:"yī", arti:"satu", tones:[1]},
      {hanzi:"二", pinyin:"èr", arti:"dua", tones:[4]},
      {hanzi:"三", pinyin:"sān", arti:"tiga", tones:[1]},
      {hanzi:"四", pinyin:"sì", arti:"empat", tones:[4]},
      {hanzi:"五", pinyin:"wǔ", arti:"lima", tones:[3]},
      {hanzi:"六", pinyin:"liù", arti:"enam", tones:[4]},
      {hanzi:"七", pinyin:"qī", arti:"tujuh", tones:[1]},
      {hanzi:"八", pinyin:"bā", arti:"delapan", tones:[1]},
      {hanzi:"九", pinyin:"jiǔ", arti:"sembilan", tones:[3]},
      {hanzi:"十", pinyin:"shí", arti:"sepuluh", tones:[2]},
      {hanzi:"百", pinyin:"bǎi", arti:"seratus", tones:[3]}
    ]},
    {id:"sapaan", label:"Sapaan", badge:"好", words:[
      {hanzi:"你好", pinyin:"nǐ hǎo", arti:"halo", tones:[3, 3]},
      {hanzi:"早上好", pinyin:"zǎoshang hǎo", arti:"selamat pagi", tones:[3, 5, 3]},
      {hanzi:"晚安", pinyin:"wǎn'ān", arti:"selamat malam", tones:[3, 1]},
      {hanzi:"再见", pinyin:"zàijiàn", arti:"sampai jumpa", tones:[4, 4]},
      {hanzi:"谢谢", pinyin:"xièxie", arti:"terima kasih", tones:[4, 5]},
      {hanzi:"不客气", pinyin:"bú kèqi", arti:"sama-sama", tones:[2, 4, 5]},
      {hanzi:"对不起", pinyin:"duìbuqǐ", arti:"maaf", tones:[4, 5, 3]},
      {hanzi:"没关系", pinyin:"méi guānxi", arti:"tidak apa-apa", tones:[2, 1, 5]}
    ]},
    {id:"ganti", label:"Kata Ganti", badge:"我", words:[
      {hanzi:"我", pinyin:"wǒ", arti:"saya", tones:[3]},
      {hanzi:"你", pinyin:"nǐ", arti:"kamu", tones:[3]},
      {hanzi:"他", pinyin:"tā", arti:"dia (laki-laki)", tones:[1]},
      {hanzi:"她", pinyin:"tā", arti:"dia (perempuan)", tones:[1]},
      {hanzi:"我们", pinyin:"wǒmen", arti:"kami / kita", tones:[3, 5]},
      {hanzi:"你们", pinyin:"nǐmen", arti:"kalian", tones:[3, 5]},
      {hanzi:"他们", pinyin:"tāmen", arti:"mereka", tones:[1, 5]}
    ]},
    {id:"keluarga", label:"Keluarga", badge:"家", words:[
      {hanzi:"爸爸", pinyin:"bàba", arti:"ayah", tones:[4, 5]},
      {hanzi:"妈妈", pinyin:"māma", arti:"ibu", tones:[1, 5]},
      {hanzi:"哥哥", pinyin:"gēge", arti:"kakak laki-laki", tones:[1, 5]},
      {hanzi:"姐姐", pinyin:"jiějie", arti:"kakak perempuan", tones:[3, 5]},
      {hanzi:"弟弟", pinyin:"dìdi", arti:"adik laki-laki", tones:[4, 5]},
      {hanzi:"妹妹", pinyin:"mèimei", arti:"adik perempuan", tones:[4, 5]},
      {hanzi:"朋友", pinyin:"péngyou", arti:"teman", tones:[2, 5]},
      {hanzi:"老师", pinyin:"lǎoshī", arti:"guru", tones:[3, 1]},
      {hanzi:"学生", pinyin:"xuésheng", arti:"murid", tones:[2, 5]}
    ]},
    {id:"warna", label:"Warna", badge:"色", words:[
      {hanzi:"红色", pinyin:"hóngsè", arti:"merah", tones:[2, 4]},
      {hanzi:"黄色", pinyin:"huángsè", arti:"kuning", tones:[2, 4]},
      {hanzi:"蓝色", pinyin:"lánsè", arti:"biru", tones:[2, 4]},
      {hanzi:"绿色", pinyin:"lǜsè", arti:"hijau", tones:[4, 4]},
      {hanzi:"黑色", pinyin:"hēisè", arti:"hitam", tones:[1, 4]},
      {hanzi:"白色", pinyin:"báisè", arti:"putih", tones:[2, 4]},
      {hanzi:"紫色", pinyin:"zǐsè", arti:"ungu", tones:[3, 4]}
    ]},
    {id:"waktu", label:"Waktu & Hari", badge:"天", words:[
      {hanzi:"今天", pinyin:"jīntiān", arti:"hari ini", tones:[1, 1]},
      {hanzi:"明天", pinyin:"míngtiān", arti:"besok", tones:[2, 1]},
      {hanzi:"昨天", pinyin:"zuótiān", arti:"kemarin", tones:[2, 1]},
      {hanzi:"星期一", pinyin:"xīngqīyī", arti:"Senin", tones:[1, 1, 1]},
      {hanzi:"星期二", pinyin:"xīngqī'èr", arti:"Selasa", tones:[1, 1, 4]},
      {hanzi:"星期三", pinyin:"xīngqīsān", arti:"Rabu", tones:[1, 1, 1]},
      {hanzi:"星期四", pinyin:"xīngqīsì", arti:"Kamis", tones:[1, 1, 4]},
      {hanzi:"星期五", pinyin:"xīngqīwǔ", arti:"Jumat", tones:[1, 1, 3]},
      {hanzi:"星期六", pinyin:"xīngqīliù", arti:"Sabtu", tones:[1, 1, 4]},
      {hanzi:"星期日", pinyin:"xīngqīrì", arti:"Minggu", tones:[1, 1, 4]}
    ]},
    {id:"makanan", label:"Makanan", badge:"吃", words:[
      {hanzi:"米饭", pinyin:"mǐfàn", arti:"nasi", tones:[3, 4]},
      {hanzi:"面条", pinyin:"miàntiáo", arti:"mi", tones:[4, 2]},
      {hanzi:"水", pinyin:"shuǐ", arti:"air", tones:[3]},
      {hanzi:"茶", pinyin:"chá", arti:"teh", tones:[2]},
      {hanzi:"咖啡", pinyin:"kāfēi", arti:"kopi", tones:[1, 1]},
      {hanzi:"牛奶", pinyin:"niúnǎi", arti:"susu", tones:[2, 3]},
      {hanzi:"鸡蛋", pinyin:"jīdàn", arti:"telur", tones:[1, 4]},
      {hanzi:"苹果", pinyin:"píngguǒ", arti:"apel", tones:[2, 3]}
    ]},
    {id:"hewan", label:"Hewan", badge:"猫", words:[
      {hanzi:"猫", pinyin:"māo", arti:"kucing", tones:[1]},
      {hanzi:"狗", pinyin:"gǒu", arti:"anjing", tones:[3]},
      {hanzi:"鸟", pinyin:"niǎo", arti:"burung", tones:[3]},
      {hanzi:"鱼", pinyin:"yú", arti:"ikan", tones:[2]},
      {hanzi:"马", pinyin:"mǎ", arti:"kuda", tones:[3]},
      {hanzi:"牛", pinyin:"niú", arti:"sapi", tones:[2]}
    ]},
    {id:"sifat", label:"Kata Sifat", badge:"大", words:[
      {hanzi:"大", pinyin:"dà", arti:"besar", tones:[4]},
      {hanzi:"小", pinyin:"xiǎo", arti:"kecil", tones:[3]},
      {hanzi:"多", pinyin:"duō", arti:"banyak", tones:[1]},
      {hanzi:"少", pinyin:"shǎo", arti:"sedikit", tones:[3]},
      {hanzi:"好", pinyin:"hǎo", arti:"bagus / baik", tones:[3]},
      {hanzi:"漂亮", pinyin:"piàoliang", arti:"cantik", tones:[4, 5]},
      {hanzi:"高兴", pinyin:"gāoxìng", arti:"senang", tones:[1, 4]},
      {hanzi:"冷", pinyin:"lěng", arti:"dingin", tones:[3]},
      {hanzi:"热", pinyin:"rè", arti:"panas", tones:[4]}
    ]},
    {id:"kerja", label:"Kata Kerja", badge:"去", words:[
      {hanzi:"吃", pinyin:"chī", arti:"makan", tones:[1]},
      {hanzi:"喝", pinyin:"hē", arti:"minum", tones:[1]},
      {hanzi:"看", pinyin:"kàn", arti:"melihat / menonton", tones:[4]},
      {hanzi:"听", pinyin:"tīng", arti:"mendengar", tones:[1]},
      {hanzi:"说", pinyin:"shuō", arti:"berbicara", tones:[1]},
      {hanzi:"去", pinyin:"qù", arti:"pergi", tones:[4]},
      {hanzi:"来", pinyin:"lái", arti:"datang", tones:[2]},
      {hanzi:"爱", pinyin:"ài", arti:"cinta", tones:[4]},
      {hanzi:"喜欢", pinyin:"xǐhuan", arti:"suka", tones:[3, 5]},
      {hanzi:"学习", pinyin:"xuéxí", arti:"belajar", tones:[2, 2]}
    ]},
    {id:"instrumen", label:"Alat Musik", badge:"乐", words:[
      {hanzi:"古筝", pinyin:"gǔzhēng", arti:"kecapi Tiongkok (guzheng)", tones:[3, 1]},
      {hanzi:"二胡", pinyin:"èrhú", arti:"rebab dua senar (erhu)", tones:[4, 2]},
      {hanzi:"琵琶", pinyin:"pípá", arti:"pipa (semacam gitar Tiongkok)", tones:[2, 2]},
      {hanzi:"笛子", pinyin:"dízi", arti:"suling bambu", tones:[2, 5]},
      {hanzi:"古琴", pinyin:"gǔqín", arti:"kecapi tujuh senar (guqin)", tones:[3, 2]},
      {hanzi:"唢呐", pinyin:"suǒnà", arti:"terompet Tiongkok (suona)", tones:[3, 4]},
      {hanzi:"扬琴", pinyin:"yángqín", arti:"simbalon Tiongkok (yangqin)", tones:[2, 2]},
      {hanzi:"笙", pinyin:"shēng", arti:"alat musik tiup mulut (sheng)", tones:[1]},
      {hanzi:"锣", pinyin:"luó", arti:"gong", tones:[2]},
      {hanzi:"鼓", pinyin:"gǔ", arti:"genderang / drum", tones:[3]}
    ]}
  ];

  const ALL_WORDS = CATEGORIES.flatMap(c => c.words.map(w => Object.assign({catId:c.id}, w)));
  const INK_COLOR = "#241a11";

  /* ================= State ================= */
  const state = { catId:"semua", index:0, mode:"hanzi", showGuide:true, srs:{} };

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

  /* ================= Spaced repetition (simplified SM-2) =================
     Each word tracks: repetitions (consecutive correct reviews), interval
     (days until next review), ease (how quickly the interval grows), and
     due (the timestamp it should be reviewed again). A correct answer
     pushes the next review further out; a mistake resets it back to
     "review again tomorrow" — the same idea behind Anki, simplified down
     to a single correct/incorrect signal per word instead of a 0-5 scale. */
  const SRS_DEFAULT_EASE = 2.5;
  function todayTs(){ return new Date().setHours(0,0,0,0); }
  function addDays(ts, days){ return ts + days*86400000; }

  function recordReview(hanzi, wasCorrect){
    const rec = state.srs[hanzi] || {repetitions:0, interval:0, ease:SRS_DEFAULT_EASE, due:todayTs()};
    if(wasCorrect){
      rec.repetitions++;
      if(rec.repetitions === 1) rec.interval = 1;
      else if(rec.repetitions === 2) rec.interval = 3;
      else rec.interval = Math.max(1, Math.round(rec.interval * rec.ease));
      rec.ease = Math.min(2.8, rec.ease + 0.05);
    } else {
      rec.repetitions = 0;
      rec.interval = 1;
      rec.ease = Math.max(1.3, rec.ease - 0.2);
    }
    rec.due = addDays(todayTs(), rec.interval);
    state.srs[hanzi] = rec;
    saveProgress();
  }

  function isDue(hanzi){
    const rec = state.srs[hanzi];
    return !!rec && rec.due <= todayTs();
  }
  function isMastered(hanzi){
    const rec = state.srs[hanzi];
    return !!rec && rec.repetitions >= 2;
  }
  function getDueWords(){
    return ALL_WORDS.filter(w => isDue(w.hanzi));
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
        if(data && data.srs && typeof data.srs === "object"){
          state.srs = data.srs;
        } else if(data && Array.isArray(data.mastered)){
          // Migrate from the old binary "mastered" list (pre-SRS) into a
          // reasonable starting SRS state instead of losing that progress.
          const due = addDays(todayTs(), 6);
          data.mastered.forEach(hanzi => {
            state.srs[hanzi] = {repetitions:2, interval:6, ease:SRS_DEFAULT_EASE, due};
          });
        }
      }
    }catch(err){ /* belum ada progres tersimpan */ }
  }
  async function saveProgress(){
    try{
      await storageBackend.set("mandarin-progress", JSON.stringify({srs:state.srs}));
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

  function drawTianZiGeCell(ctx,x,y,size){
    const pad = size * 0.08;
    const x0 = x+pad, y0 = y+pad, s = size - pad*2, x1 = x0+s, y1 = y0+s, cx = (x0+x1)/2, cy = (y0+y1)/2;
    ctx.save();
    ctx.strokeStyle = "rgba(193,52,47,0.45)";
    ctx.lineWidth = 1.4;
    ctx.strokeRect(x0,y0,s,s);
    ctx.setLineDash([5,5]);
    line(ctx,x0,cy,x1,cy);
    line(ctx,cx,y0,cx,y1);
    ctx.globalAlpha = 0.55;
    line(ctx,x0,y0,x1,y1);
    line(ctx,x1,y0,x0,y1);
    ctx.restore();
  }

  // A Hanzi "word" in our list can be 1-3 characters long (你好, 星期一, ...).
  // HanziWriter only knows how to render ONE character per instance (its
  // stroke data is fetched per single character), so a multi-character
  // word needs one cell/instance per character, laid out side by side —
  // this layout is shared by the grid drawing and by initHanziWriter() so
  // the two stay visually aligned.
  function computeHanziLayout(word){
    const chars = word ? Array.from(word.hanzi) : [];
    const n = Math.max(chars.length, 1);
    const gap = Math.max(4, Math.round(Math.min(cssW,cssH) * 0.02));
    const cellSize = n === 1
      ? Math.max(Math.min(cssW,cssH) - 8, 40)
      : Math.max(Math.floor(Math.min((cssW - gap*(n-1)) / n, cssH - 8)), 40);
    const totalWidth = n*cellSize + (n-1)*gap;
    const startX = (cssW - totalWidth) / 2;
    const y0 = (cssH - cellSize) / 2;
    return {chars, n, gap, cellSize, totalWidth, startX, y0};
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
      const layout = computeHanziLayout(word);
      for(let i=0;i<layout.n;i++){
        const x = layout.startX + i*(layout.cellSize+layout.gap);
        drawTianZiGeCell(guideCtx, x, layout.y0, layout.cellSize);
      }
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
     play back the correct writing animation on demand.

     IMPORTANT: HanziWriter only renders ONE character per instance — its
     stroke data is fetched per single character (e.g. 我.json), not per
     word. Many entries in our list are 2-3 character words (你好, 星期一,
     ...), so each character in a word gets its own HanziWriter instance,
     laid out side by side, and the quiz runs through them in order. */
  let writers = []; // one HanziWriter instance per character of the current word
  let writerKey = null; // "<hanzi>__<cssWxcssH>__<showGuide>" of what's currently mounted
  const quizFeedbackEl = document.getElementById("quizFeedback");

  // During an exam there is never an outline hint, regardless of what the
  // (hidden) "Tampilkan panduan" switch was last set to.
  function effectiveShowGuide(){
    return examState ? false : state.showGuide;
  }

  // Decides whether the HanziWriter instances need rebuilding: only when
  // the word, board size, or guide setting actually differ from what's
  // currently mounted. Called on every render/resize so word navigation
  // always swaps the character(s) immediately.
  function syncHanziWriter(){
    if(state.mode !== "hanzi") return;
    const word = currentWord();
    const key = word ? `${word.hanzi}__${cssW}x${cssH}__${effectiveShowGuide()}` : null;
    if(key === writerKey) return;
    writerKey = key;
    initHanziWriter();
  }

  function setQuizFeedback(text, isMistake){
    quizFeedbackEl.textContent = text || "";
    quizFeedbackEl.classList.toggle("is-mistake", !!isMistake);
  }

  function destroyWriters(){
    if(writers.length){
      hanziTargetEl.innerHTML = "";
      writers = [];
    }
  }

  function initHanziWriter(){
    destroyWriters();
    const word = currentWord();
    setQuizFeedback("");
    if(!word || typeof HanziWriter === "undefined") return;
    const layout = computeHanziLayout(word);
    hanziTargetEl.style.gap = layout.gap + "px";
    try{
      layout.chars.forEach(ch => {
        const cell = document.createElement("div");
        cell.className = "hanzi-cell";
        hanziTargetEl.appendChild(cell);
        writers.push(HanziWriter.create(cell, ch, {
          width: layout.cellSize,
          height: layout.cellSize,
          padding: Math.round(layout.cellSize*0.1),
          showCharacter: false,
          showOutline: effectiveShowGuide(),
          strokeAnimationSpeed: 1.1,
          delayBetweenStrokes: 200,
          strokeColor: INK_COLOR,
          outlineColor: "rgba(36,26,17,0.22)",
          drawingColor: INK_COLOR,
          radicalColor: "#c1342f"
        }));
      });
      startQuiz();
    }catch(err){
      // Character stroke data not available (e.g. offline, or an
      // uncommon character) — fail quietly rather than breaking the page.
      console.error("HanziWriter gagal memuat data goresan", err);
      setQuizFeedback("Data goresan untuk karakter ini tidak berhasil dimuat.", true);
    }
  }

  // Runs the quiz for each character in the word in sequence — writing
  // the 2nd character only becomes active once the 1st is completed —
  // and reports the combined mistake count for the whole word at the end.
  function startQuiz(){
    if(!writers.length) return;
    const word = currentWord();
    let totalMistakes = 0;
    const multi = writers.length > 1;

    function runCell(i){
      setQuizFeedback(multi ? `Tulis karakter ${i+1} dari ${writers.length}.` : "Mulai menulis di dalam kotak.");
      writers[i].quiz({
        onMistake: function(strokeData){
          totalMistakes++;
          setQuizFeedback(
            multi
              ? `Belum tepat (karakter ${i+1}, goresan ke-${strokeData.strokeNum+1}).`
              : `Belum tepat, coba lagi (goresan ke-${strokeData.strokeNum+1}).`,
            true
          );
        },
        onCorrectStroke: function(strokeData){
          const remaining = strokeData.strokesRemaining;
          setQuizFeedback(remaining > 0 ? `Benar! ${remaining} goresan lagi.` : "Goresan terakhir benar!");
        },
        onComplete: function(){
          if(i+1 < writers.length){
            runCell(i+1);
          } else if(examState){
            handleExamAnswerComplete(totalMistakes);
          } else {
            setQuizFeedback(totalMistakes === 0 ? "Sempurna, tanpa kesalahan!" : `Selesai dengan ${totalMistakes} kesalahan.`);
            if(word) recordReview(word.hanzi, totalMistakes === 0);
            render();
          }
        }
      });
    }
    runCell(0);
  }

  document.getElementById("demoBtn").addEventListener("click", () => {
    if(state.mode !== "hanzi" || !writers.length || examState) return;
    setQuizFeedback("Memutar urutan goresan yang benar...");
    function playCell(i){
      writers[i].animateCharacter({
        onComplete: () => {
          if(i+1 < writers.length) playCell(i+1);
          else startQuiz();
        }
      });
    }
    playCell(0);
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

  const reviewDueBarEl = document.getElementById("reviewDueBar");
  const reviewDueCountEl = document.getElementById("reviewDueCount");

  function updateReviewDueBar(){
    if(!reviewDueBarEl || examState || toneState) return;
    const due = getDueWords();
    if(due.length > 0){
      reviewDueBarEl.hidden = false;
      reviewDueCountEl.textContent = due.length;
    } else {
      reviewDueBarEl.hidden = true;
    }
  }

  document.getElementById("startReviewBtn").addEventListener("click", () => {
    if(toneState) return;
    const due = getDueWords();
    if(!due.length) return;
    startExam(due);
  });

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
    recordReview(item.hanzi, mistakes === 0);
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
    if(toneState) return; // one quiz mode at a time
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

  /* ================= Tone practice =================
     Mandarin is tonal — 妈/麻/马/骂 (mā/má/mǎ/mà) are completely different
     words that only differ by tone, and that's the piece most learners
     skip past because the app only ever *showed* the tone marks rather
     than testing them. Here the user hears (or already knows) the word,
     then has to pick the correct tone (1-4, or "轻" for the neutral tone)
     for every character — no pinyin shown until after checking. */
  let toneState = null; // { list, idx, results:[], answers:[], checked }
  const TONE_LABELS = {1:"1", 2:"2", 3:"3", 4:"4", 5:"轻"};

  const toneIdleBar = document.getElementById("toneIdleBar");
  const toneCountEl = document.getElementById("toneCount");
  const toneStatusBar = document.getElementById("toneStatusBar");
  const toneProgressTextEl = document.getElementById("toneProgressText");
  const tonePanelEl = document.getElementById("tonePanel");
  const toneHanziDisplayEl = document.getElementById("toneHanziDisplay");
  const toneSyllablesEl = document.getElementById("toneSyllables");
  const toneFeedbackEl = document.getElementById("toneFeedback");
  const toneCheckBtn = document.getElementById("toneCheckBtn");
  const toneSpeakBtn = document.getElementById("toneSpeakBtn");
  const toneSummaryEl = document.getElementById("toneSummary");
  const toneScoreTextEl = document.getElementById("toneScoreText");
  const toneMissedListEl = document.getElementById("toneMissedList");
  const toneRetryMissedBtn = document.getElementById("toneRetryMissedBtn");

  function updateToneCount(){
    if(toneState) return;
    toneCountEl.textContent = currentList().length;
  }

  function startTonePractice(list){
    if(!list || !list.length) return;
    toneState = { list: shuffle(list.slice()), idx: 0, results: [], answers: [], checked: false };
    document.body.classList.add("tone-active");
    toneIdleBar.hidden = true;
    toneStatusBar.hidden = false;
    toneSummaryEl.hidden = true;
    tonePanelEl.hidden = false;
    renderToneQuestion();
  }

  function renderToneQuestion(){
    const item = toneState.list[toneState.idx];
    toneState.answers = new Array(item.tones.length).fill(null);
    toneState.checked = false;
    toneProgressTextEl.textContent = `Soal ${toneState.idx+1} / ${toneState.list.length}`;
    toneHanziDisplayEl.textContent = item.hanzi;
    toneFeedbackEl.textContent = "";
    toneFeedbackEl.classList.remove("is-mistake");
    toneCheckBtn.textContent = "Periksa Jawaban";
    toneCheckBtn.disabled = true;
    toneSyllablesEl.innerHTML = "";

    Array.from(item.hanzi).forEach((ch, i) => {
      const slot = document.createElement("div");
      slot.className = "tone-slot";

      const chEl = document.createElement("span");
      chEl.className = "tone-slot-char";
      chEl.lang = "zh-CN";
      chEl.textContent = ch;
      slot.appendChild(chEl);

      const btnRow = document.createElement("div");
      btnRow.className = "tone-slot-buttons";
      [1,2,3,4,5].forEach(t => {
        const b = document.createElement("button");
        b.type = "button";
        b.className = "tone-btn";
        b.textContent = TONE_LABELS[t];
        b.dataset.tone = t;
        b.addEventListener("click", () => {
          if(toneState.checked) return;
          toneState.answers[i] = t;
          btnRow.querySelectorAll(".tone-btn").forEach(x => x.classList.remove("is-selected"));
          b.classList.add("is-selected");
          toneCheckBtn.disabled = toneState.answers.some(a => a === null);
        });
        btnRow.appendChild(b);
      });
      slot.appendChild(btnRow);

      const resultEl = document.createElement("span");
      resultEl.className = "tone-slot-result";
      slot.appendChild(resultEl);

      toneSyllablesEl.appendChild(slot);
    });
  }

  function checkToneAnswers(){
    const item = toneState.list[toneState.idx];
    const slots = toneSyllablesEl.querySelectorAll(".tone-slot");
    let allCorrect = true;
    slots.forEach((slot, i) => {
      const correct = item.tones[i];
      const chosen = toneState.answers[i];
      const isRight = chosen === correct;
      if(!isRight) allCorrect = false;
      slot.classList.add(isRight ? "is-correct" : "is-wrong");
      slot.querySelector(".tone-slot-result").textContent = isRight ? "Benar" : `Harusnya nada ${TONE_LABELS[correct]}`;
      slot.querySelectorAll(".tone-btn").forEach(b => {
        b.disabled = true;
        if(Number(b.dataset.tone) === correct) b.classList.add("is-answer");
      });
    });
    toneState.checked = true;
    toneFeedbackEl.textContent = `Pinyin lengkapnya: ${item.pinyin}`;
    toneFeedbackEl.classList.toggle("is-mistake", !allCorrect);
    toneState.results.push({hanzi:item.hanzi, pinyin:item.pinyin, arti:item.arti, correct:allCorrect});
    recordReview(item.hanzi, allCorrect);
    toneCheckBtn.textContent = (toneState.idx+1 < toneState.list.length) ? "Lanjut ke soal berikutnya" : "Lihat Hasil";
    toneCheckBtn.disabled = false;
  }

  function finishTonePractice(){
    const results = toneState.results;
    const total = results.length;
    const correctCount = results.filter(r => r.correct).length;
    const missed = results.filter(r => !r.correct);

    toneStatusBar.hidden = true;
    tonePanelEl.hidden = true;
    toneSummaryEl.hidden = false;

    toneScoreTextEl.textContent = `${correctCount} / ${total} kata dengan nada benar semua`;
    toneMissedListEl.innerHTML = "";
    if(missed.length === 0){
      const li = document.createElement("li");
      li.textContent = "Semua nada benar — mantap!";
      toneMissedListEl.appendChild(li);
    } else {
      missed.forEach(r => {
        const li = document.createElement("li");
        li.textContent = `${r.hanzi} (${r.pinyin}) — ${r.arti}`;
        toneMissedListEl.appendChild(li);
      });
    }
    toneState.missedWords = missed.map(r => ALL_WORDS.find(w => w.hanzi === r.hanzi)).filter(Boolean);
    toneRetryMissedBtn.hidden = missed.length === 0;
  }

  function exitTonePractice(){
    toneState = null;
    document.body.classList.remove("tone-active");
    toneIdleBar.hidden = false;
    toneStatusBar.hidden = true;
    tonePanelEl.hidden = true;
    toneSummaryEl.hidden = true;
    render();
  }

  toneSpeakBtn.addEventListener("click", () => {
    const item = toneState && toneState.list[toneState.idx];
    if(item) speak(item.hanzi);
  });

  toneCheckBtn.addEventListener("click", () => {
    if(!toneState) return;
    if(!toneState.checked){
      checkToneAnswers();
    } else {
      toneState.idx++;
      if(toneState.idx >= toneState.list.length) finishTonePractice();
      else renderToneQuestion();
    }
  });

  document.getElementById("startToneBtn").addEventListener("click", () => {
    if(examState) return; // one quiz mode at a time
    startTonePractice(currentList());
  });
  document.getElementById("exitToneBtn").addEventListener("click", exitTonePractice);
  document.getElementById("toneFinishBtn").addEventListener("click", exitTonePractice);
  toneRetryMissedBtn.addEventListener("click", () => {
    if(!toneState || !toneState.missedWords || !toneState.missedWords.length) return;
    const list = toneState.missedWords;
    toneState = null;
    startTonePractice(list);
  });

  /* ================= Speech synthesis (permissive availability check) =================
     Checking `"speechSynthesis" in window` only proves the *API* exists —
     it says nothing about whether a Mandarin voice is actually installed,
     and on plenty of browsers (lots of Android WebViews, some mobile
     Safari versions) getVoices() stays empty and "voiceschanged" never
     fires at all, even though speech synthesis itself still works fine.
     So: voice detection is used ONLY to show an informational warning —
     never to disable the button. The button stays clickable whenever the
     API exists, and speak() always attempts to play; if it genuinely
     can't, the browser/OS will simply produce no sound. */
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
    speakBtn.disabled = !supported;
    if(!supported){
      speakBtn.title = "Fitur suara tidak didukung di perangkat/browser ini";
      voiceWarningEl.hidden = false;
    } else if(!zhVoiceAvailable){
      speakBtn.title = "Coba dengarkan (voice Mandarin belum terdeteksi, tapi mungkin tetap bisa terdengar)";
      voiceWarningEl.hidden = false;
    } else {
      speakBtn.title = "Dengarkan pengucapan";
      voiceWarningEl.hidden = true;
    }
  }

  function speak(text){
    if(!("speechSynthesis" in window)) return;
    try{
      window.speechSynthesis.cancel();
      const utter = new SpeechSynthesisUtterance(text);
      const voices = window.speechSynthesis.getVoices();
      const zhVoice = voices.find(v => v.lang && v.lang.toLowerCase().startsWith("zh"));
      if(zhVoice) utter.voice = zhVoice;
      utter.lang = zhVoice ? zhVoice.lang : "zh-CN";
      utter.rate = 0.85;
      utter.onerror = function(ev){ console.error("Speech synthesis error", ev); };
      window.speechSynthesis.speak(utter);
    }catch(err){ console.error("Gagal memutar suara", err); }
  }

  if("speechSynthesis" in window){
    refreshVoices();
    window.speechSynthesis.addEventListener("voiceschanged", refreshVoices);
    // Fallback for browsers that never fire "voiceschanged": poll a few
    // times shortly after load so the warning banner still clears once
    // voices actually do show up, without blocking the button meanwhile.
    let pollCount = 0;
    const voicePoll = setInterval(() => {
      pollCount++;
      refreshVoices();
      if(zhVoiceAvailable || pollCount >= 10) clearInterval(voicePoll);
    }, 500);
  } else {
    updateSpeakButtonState();
  }

  speakBtn.addEventListener("click", () => {
    const word = currentWord();
    if(word) speak(word.hanzi);
  });

  /* ================= Background music =================
     "In the Temple Garden" by Aaron Kenny — from the YouTube Audio
     Library under the standard "YouTube Audio Library License" (not the
     Creative Commons/CC BY tier), which does not require attribution.
     Loops for as long as the toggle is on. */
  const bgMusic = document.getElementById("bgMusic");
  let musicPlaying = false;

  function updateMusicBtn(){
    const btn = document.getElementById("musicToggleBtn");
    if(!btn) return;
    btn.classList.toggle("is-active", musicPlaying);
    btn.setAttribute("aria-pressed", musicPlaying ? "true" : "false");
    btn.title = musicPlaying ? "Matikan musik latar" : "Putar musik latar";
  }

  const musicToggleBtn = document.getElementById("musicToggleBtn");
  if(musicToggleBtn && bgMusic){
    bgMusic.volume = 0.5;
    musicToggleBtn.addEventListener("click", () => {
      if(musicPlaying){
        bgMusic.pause();
        musicPlaying = false;
        updateMusicBtn();
      } else {
        bgMusic.play()
          .then(() => { musicPlaying = true; updateMusicBtn(); })
          .catch(err => console.error("Gagal memutar musik latar", err));
      }
    });
    bgMusic.addEventListener("pause", () => { musicPlaying = false; updateMusicBtn(); });
    bgMusic.addEventListener("playing", () => { musicPlaying = true; updateMusicBtn(); });
  } else if(musicToggleBtn){
    musicToggleBtn.disabled = true;
    musicToggleBtn.title = "Musik latar tidak tersedia";
  }

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
    updateToneCount();

    const masterBtn = document.getElementById("masterBtn");
    const isWordMastered = !!(word && isMastered(word.hanzi));
    masterBtn.classList.toggle("is-active", isWordMastered);
    masterBtn.setAttribute("aria-pressed", isWordMastered ? "true" : "false");
    masterBtn.querySelector(".btn-label").textContent = isWordMastered ? "Sudah Dikuasai" : "Tandai Selesai";

    document.getElementById("clearBtnLabel").textContent = state.mode === "hanzi" ? "Ulangi" : "Hapus";
    document.getElementById("demoBtn").style.display = state.mode === "hanzi" ? "inline-flex" : "none";

    const masteredInList = list.filter(w => isMastered(w.hanzi)).length;
    const pct = list.length ? Math.round(masteredInList/list.length*100) : 0;
    document.getElementById("progressFill").style.width = pct + "%";
    document.getElementById("progressLabel").textContent = list.length ? `${masteredInList} dari ${list.length} kata dikuasai (${pct}%)` : "";
    updateReviewDueBar();

    wrap.classList.toggle("mode-pinyin", state.mode === "pinyin");
    wrap.setAttribute("aria-label", `Papan latihan menulis ${state.mode === "hanzi" ? "karakter Han" : "pinyin"} untuk kata saat ini`);

    // Multi-character Hanzi words (你好, 星期一, ...) get a wider board so
    // each character's cell isn't squeezed too small; single characters
    // and Pinyin mode keep the CSS-defined square/16:10 sizing.
    if(state.mode === "hanzi" && word){
      const n = Array.from(word.hanzi).length;
      if(n > 1){
        wrap.style.maxWidth = Math.min(170*n + 40, 520) + "px";
        wrap.style.aspectRatio = `${n} / 1.05`;
      } else {
        wrap.style.maxWidth = "";
        wrap.style.aspectRatio = "";
      }
    } else {
      wrap.style.maxWidth = "";
      wrap.style.aspectRatio = "";
    }

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
    if(isMastered(word.hanzi)){
      // Toggling off means "actually, I need to practice this again" —
      // reset it back to a fresh, unreviewed state.
      delete state.srs[word.hanzi];
      saveProgress();
    } else {
      // Manually marking it mastered logs it as if it had already survived
      // two correct spaced reviews, so it's scheduled ahead like any other
      // word the SRS considers learned, not sitting outside the system.
      state.srs[word.hanzi] = {repetitions:2, interval:6, ease:SRS_DEFAULT_EASE, due:addDays(todayTs(),6)};
      saveProgress();
    }
    render();
  });

  document.getElementById("resetProgressBtn").addEventListener("click", () => {
    if(confirm("Hapus semua progres latihan yang tersimpan di perangkat ini?")){
      state.srs = {};
      saveProgress();
      render();
    }
  });

  /* ================= Init ================= */
  buildCategoryPills();
  loadProgress().finally(render);
})();