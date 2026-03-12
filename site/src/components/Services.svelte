<svelte:options runes={true} />

<script>
  import { onMount } from 'svelte';
  import gsap from 'gsap';
  import { ScrollTrigger } from 'gsap/ScrollTrigger';

  gsap.registerPlugin(ScrollTrigger);

  let sectionEl;

  // Card 1 — Diagnostic Shuffler state
  let shufflerIndex = $state(0);
  const shufflerItems = [
    { label: 'ERP Systems', sub: 'Custom enterprise resource planning' },
    { label: 'Web Platforms', sub: 'High-performance applications' },
    { label: 'Mobile Apps', sub: 'Cross-platform solutions' },
  ];

  // Card 2 — Telemetry Typewriter state
  let typewriterText = $state('');
  const typewriterMessages = [
    '> Checking taxpayer payload schema...',
    '> Validating invoice tax totals...',
    '> Confirming eTIMS field mapping ✓',
    '> Reviewing service compliance rules...',
    '> KRA submission format ready ✓',
    '> Compliance status: aligned',
  ];

  // Card 3 — Scheduler state
  let activeDays = $state([]);
  let cursorPos = $state({ x: 0, y: 0 });
  let cursorVisible = $state(false);
  let saveActive = $state(false);
  const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  let aiBars = $state([42, 68, 54, 76]);
  let securityPulse = $state(0);
  let docProgress = $state(0);

  onMount(() => {
    const ctx = gsap.context(() => {
      gsap.from('.service-card', {
        scrollTrigger: {
          trigger: sectionEl,
          start: 'top 80%',
        },
        y: 60,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.15,
      });
      gsap.from('.services-heading', {
        scrollTrigger: {
          trigger: sectionEl,
          start: 'top 85%',
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      });
    }, sectionEl);

    // Shuffler interval
    const shuffleInterval = setInterval(() => {
      shufflerIndex = (shufflerIndex + 1) % shufflerItems.length;
    }, 3000);

    // Typewriter
    let msgIdx = 0;
    let charIdx = 0;
    let currentDisplay = '';
    const typeInterval = setInterval(() => {
      const msg = typewriterMessages[msgIdx];
      if (charIdx < msg.length) {
        currentDisplay += msg[charIdx];
        typewriterText = currentDisplay;
        charIdx++;
      } else {
        currentDisplay += '\n';
        charIdx = 0;
        msgIdx = (msgIdx + 1) % typewriterMessages.length;
        if (msgIdx === 0) currentDisplay = '';
      }
    }, 50);

    // Scheduler animation
    let scheduleStep = 0;
    const daySequence = [1, 3, 5]; // M, W, F
    const scheduleInterval = setInterval(() => {
      if (scheduleStep < daySequence.length) {
        cursorVisible = true;
        const dayIdx = daySequence[scheduleStep];
        cursorPos = { x: dayIdx * 40 + 20, y: 28 };
        setTimeout(() => {
          activeDays = [...activeDays, dayIdx];
          scheduleStep++;
        }, 400);
      } else if (scheduleStep === daySequence.length) {
        saveActive = true;
        cursorPos = { x: 160, y: 80 };
        scheduleStep++;
      } else {
        cursorVisible = false;
        saveActive = false;
        activeDays = [];
        scheduleStep = 0;
      }
    }, 1200);

    const aiInterval = setInterval(() => {
      aiBars = aiBars.map(() => 35 + Math.floor(Math.random() * 45));
    }, 1200);

    const securityInterval = setInterval(() => {
      securityPulse = (securityPulse + 1) % 3;
    }, 900);

    const docInterval = setInterval(() => {
      docProgress = (docProgress + 1) % 101;
    }, 60);

    return () => {
      ctx.revert();
      clearInterval(shuffleInterval);
      clearInterval(typeInterval);
      clearInterval(scheduleInterval);
      clearInterval(aiInterval);
      clearInterval(securityInterval);
      clearInterval(docInterval);
    };
  });
</script>

<section id="services" bind:this={sectionEl} class="py-24 md:py-32 px-6 md:px-12">
  <div class="max-w-7xl mx-auto">
    <div class="services-heading text-center mb-16 md:mb-20">
      <p class="font-mono text-sm text-primary tracking-widest uppercase mb-4">What We Do</p>
      <h2 class="font-display font-bold text-3xl md:text-5xl text-secondary">Our Services</h2>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <!-- Card 1: Diagnostic Shuffler — Custom Software -->
      <div class="service-card group bg-white border border-border rounded-[2rem] p-8 shadow-sm hover:shadow-xl transition-shadow duration-500">
        <h3 class="font-display font-bold text-xl md:text-2xl text-secondary mb-2">Custom Software Development</h3>
        <p class="text-muted text-sm mb-6">Tailored solutions that perfectly align with your business processes and growth objectives.</p>

        <div class="relative h-48 overflow-hidden rounded-2xl bg-secondary-light">
          {#each shufflerItems as item, i}
            <div
              class="absolute inset-x-4 rounded-xl bg-white border border-border p-4 transition-all duration-500"
              style="
                top: {i === shufflerIndex ? '8px' : i === (shufflerIndex + 1) % 3 ? '60px' : '112px'};
                z-index: {i === shufflerIndex ? 3 : i === (shufflerIndex + 1) % 3 ? 2 : 1};
                opacity: {i === shufflerIndex ? 1 : 0.6};
                transform: scale({i === shufflerIndex ? 1 : 0.95});
                transition-timing-function: cubic-bezier(0.34, 1.56, 0.64, 1);
              "
            >
              <p class="font-semibold text-secondary text-sm">{item.label}</p>
              <p class="text-muted text-xs">{item.sub}</p>
            </div>
          {/each}
        </div>
      </div>

      <!-- Card 2: Telemetry Typewriter — eTIMS Compliance -->
      <div class="service-card group bg-white border border-border rounded-[2rem] p-8 shadow-sm hover:shadow-xl transition-shadow duration-500">
        <div class="flex items-center gap-2 mb-2">
          <h3 class="font-display font-bold text-xl md:text-2xl text-secondary">eTIMS Compliance</h3>
        </div>
        <p class="text-muted text-sm mb-6">Validate invoices, tax payloads, and service flows so your application stays aligned with KRA compliance requirements.</p>

        <div class="relative rounded-2xl bg-secondary p-5 h-48 overflow-hidden">
          <div class="flex items-center gap-2 mb-3">
            <span class="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
            <span class="font-mono text-xs text-green-400">Live Feed</span>
          </div>
          <pre class="font-mono text-xs text-green-300/80 leading-relaxed whitespace-pre-wrap">{typewriterText}<span class="inline-block w-1.5 h-4 bg-primary animate-pulse ml-0.5 align-middle"></span></pre>
        </div>
      </div>

      <!-- Card 3: Cursor Protocol Scheduler — Cloud Migration -->
      <div class="service-card group bg-white border border-border rounded-[2rem] p-8 shadow-sm hover:shadow-xl transition-shadow duration-500">
        <h3 class="font-display font-bold text-xl md:text-2xl text-secondary mb-2">Cloud Migration</h3>
        <p class="text-muted text-sm mb-6">Expert Azure cloud migration and optimization services to modernize your infrastructure.</p>

        <div class="relative rounded-2xl bg-secondary-light p-5 h-48">
          <p class="font-mono text-xs text-muted mb-3 tracking-wider">SCHEDULE</p>
          <div class="flex gap-2 justify-center mb-6">
            {#each days as day, i}
              <div
                class="w-9 h-9 rounded-lg flex items-center justify-center text-xs font-semibold transition-all duration-300"
                class:bg-primary={activeDays.includes(i)}
                class:text-white={activeDays.includes(i)}
                class:bg-white={!activeDays.includes(i)}
                class:text-muted={!activeDays.includes(i)}
                class:border={!activeDays.includes(i)}
                class:border-border={!activeDays.includes(i)}
                class:scale-95={activeDays.includes(i)}
              >
                {day}
              </div>
            {/each}
          </div>
          <div class="flex justify-center">
            <button
              class="px-6 py-2 rounded-full text-xs font-semibold transition-all duration-300"
              class:bg-primary={saveActive}
              class:text-white={saveActive}
              class:bg-white={!saveActive}
              class:text-muted={!saveActive}
              class:border={!saveActive}
              class:border-border={!saveActive}
            >
              Save Migration Plan
            </button>
          </div>

          <!-- Animated cursor -->
          {#if cursorVisible}
            <svg
              class="absolute w-5 h-5 text-primary transition-all duration-500 pointer-events-none"
              style="left: {cursorPos.x}px; top: {cursorPos.y}px; transition-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);"
              fill="currentColor" viewBox="0 0 24 24"
            >
              <path d="M5.5 3.21V20.8c0 .45.54.67.85.35l4.86-4.86a.5.5 0 01.35-.15h6.87a.5.5 0 00.35-.85L6.35 2.86a.5.5 0 00-.85.35z"/>
            </svg>
          {/if}
        </div>
      </div>
    </div>

    <!-- Additional services grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
      <div class="service-card hover-lift bg-white border border-border rounded-[2rem] p-7 transition-all duration-300">
        <div class="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
          <svg class="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>
        </div>
        <h3 class="font-display font-semibold text-lg text-secondary mb-2">AI Solutions</h3>
        <p class="text-muted text-sm mb-5">Intelligent automation from your data that saves you time and money.</p>
        <div class="rounded-2xl bg-secondary p-4 h-32 flex items-end gap-2 overflow-hidden relative">
          <div class="absolute inset-x-4 top-4 flex items-center justify-between text-[10px] font-mono text-primary/70">
            <span>MODEL OUTPUT</span>
            <span>{Math.max(...aiBars)}%</span>
          </div>
          {#each aiBars as bar}
            <div class="flex-1 rounded-t-xl bg-gradient-to-t from-primary to-primary/40 transition-all duration-700 mt-6" style={`height:${bar}%`}></div>
          {/each}
        </div>
      </div>
      <div class="service-card hover-lift bg-white border border-border rounded-[2rem] p-7 transition-all duration-300">
        <div class="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
          <svg class="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
        </div>
        <h3 class="font-display font-semibold text-lg text-secondary mb-2">Cybersecurity Consulting</h3>
        <p class="text-muted text-sm mb-5">Protect your digital assets. Identify vulnerabilities and implement robust security.</p>
        <div class="rounded-2xl bg-secondary-light p-4 h-32 flex items-center justify-center overflow-hidden relative">
          <div class="absolute top-3 left-4 font-mono text-[10px] text-muted">THREAT SURFACE</div>
          <div class="relative w-20 h-20">
            <div class={`absolute inset-0 rounded-full border-2 ${securityPulse === 0 ? 'border-primary scale-100 opacity-100' : 'border-primary/40 scale-90 opacity-70'} transition-all duration-500`}></div>
            <div class={`absolute inset-2 rounded-full border-2 ${securityPulse === 1 ? 'border-primary scale-100 opacity-100' : 'border-primary/40 scale-90 opacity-70'} transition-all duration-500`}></div>
            <div class={`absolute inset-4 rounded-full border-2 ${securityPulse === 2 ? 'border-primary scale-100 opacity-100' : 'border-primary/40 scale-90 opacity-70'} transition-all duration-500`}></div>
            <div class="absolute inset-0 flex items-center justify-center">
              <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
            </div>
          </div>
          <div class="absolute bottom-3 right-4 text-[10px] font-mono text-primary/80">
            {securityPulse === 0 ? 'SCAN' : securityPulse === 1 ? 'LOCK' : 'VERIFY'}
          </div>
        </div>
      </div>
      <div class="service-card hover-lift bg-white border border-border rounded-[2rem] p-7 transition-all duration-300">
        <div class="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
          <svg class="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
        </div>
        <h3 class="font-display font-semibold text-lg text-secondary mb-2">Digital Transformation</h3>
        <p class="text-muted text-sm mb-5">Modernize internal workflows, digitize approvals, and streamline operational paperwork.</p>
        <div class="rounded-2xl bg-secondary-light p-4 h-32 overflow-hidden">
          <div class="flex items-center justify-between text-[10px] font-mono text-muted mb-3">
            <span>WORKFLOW</span>
            <span>{docProgress}%</span>
          </div>
          <div class="w-full h-2 rounded-full bg-white mb-4 overflow-hidden">
            <div class="h-full bg-primary transition-all duration-75" style={`width:${docProgress}%`}></div>
          </div>
          <div class="space-y-2">
            <div class={`h-2 rounded-full transition-all duration-300 ${docProgress > 20 ? 'bg-primary/60 w-5/6' : 'bg-white w-2/3'}`}></div>
            <div class={`h-2 rounded-full transition-all duration-300 ${docProgress > 50 ? 'bg-primary/70 w-4/6' : 'bg-white w-3/4'}`}></div>
            <div class={`h-2 rounded-full transition-all duration-300 ${docProgress > 80 ? 'bg-primary/80 w-3/6' : 'bg-white w-1/2'}`}></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
