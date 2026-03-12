<script>
  import { onMount } from 'svelte';
  import gsap from 'gsap';
  import { ScrollTrigger } from 'gsap/ScrollTrigger';

  gsap.registerPlugin(ScrollTrigger);

  let sectionEl;

  onMount(() => {
    const ctx = gsap.context(() => {
      gsap.from('.cta-content', {
        scrollTrigger: { trigger: sectionEl, start: 'top 75%' },
        y: 50, opacity: 0, duration: 0.9, ease: 'power3.out',
      });
    }, sectionEl);
    return () => ctx.revert();
  });
</script>

<section id="contact" bind:this={sectionEl} class="py-24 md:py-32 px-6 md:px-12">
  <div class="cta-content max-w-3xl mx-auto text-center">
    <p class="font-mono text-sm text-primary tracking-widest uppercase mb-4">Ready?</p>
    <h2 class="font-display font-bold text-3xl md:text-5xl lg:text-6xl text-secondary mb-6">
      Let's Discuss Your Project
    </h2>
    <p class="text-muted text-lg md:text-xl mb-10 max-w-xl mx-auto leading-relaxed">
      Whether it's custom software, cloud migration, or AI solutions — we're here to build something great together.
    </p>
    <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
      <a
        href="https://cal.com/daniel-omusula"
        target="_blank"
        rel="noopener noreferrer"
        class="btn-magnetic inline-flex items-center gap-2 bg-primary text-white font-semibold px-10 py-4 rounded-full text-lg"
      >
        <span class="btn-bg bg-accent rounded-full"></span>
        <span class="relative z-10">Talk to Us</span>
      </a>
      <a
        href="https://blog.ujaotech.com"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center gap-2 text-muted hover:text-secondary font-medium transition-colors duration-300 hover-lift"
      >
        <span>Read Our Blog</span>
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
      </a>
    </div>
  </div>
</section>
