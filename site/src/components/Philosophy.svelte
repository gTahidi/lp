<script>
  import { onMount } from 'svelte';
  import gsap from 'gsap';
  import { ScrollTrigger } from 'gsap/ScrollTrigger';

  gsap.registerPlugin(ScrollTrigger);

  let sectionEl;

  onMount(() => {
    const ctx = gsap.context(() => {
      const words = sectionEl.querySelectorAll('.reveal-word');
      gsap.from(words, {
        scrollTrigger: {
          trigger: sectionEl,
          start: 'top 70%',
        },
        y: 30,
        opacity: 0,
        duration: 0.6,
        ease: 'power3.out',
        stagger: 0.08,
      });
    }, sectionEl);
    return () => ctx.revert();
  });
</script>

<section bind:this={sectionEl} class="relative py-32 md:py-44 px-6 md:px-12 bg-secondary overflow-hidden">
  <!-- Parallax texture -->
  <div class="absolute inset-0 opacity-10">
    <img
      src="https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1920&q=60&auto=format&fit=crop"
      alt=""
      class="w-full h-full object-cover"
      aria-hidden="true"
    />
  </div>

  <div class="relative z-10 max-w-5xl mx-auto text-center">
    <p class="reveal-word text-white/40 text-lg md:text-xl font-sans mb-8 max-w-2xl mx-auto leading-relaxed">
      Most tech companies focus on: shipping features fast, checking boxes, and moving on.
    </p>

    <h2 class="leading-tight">
      <span class="reveal-word font-display font-bold text-3xl md:text-5xl lg:text-6xl text-white block mb-2">We focus on:</span>
      <span class="reveal-word font-drama italic text-4xl md:text-6xl lg:text-7xl text-primary block">
        building digital instruments
      </span>
      <span class="reveal-word font-drama italic text-4xl md:text-6xl lg:text-7xl text-white/80 block">
        that compound your growth.
      </span>
    </h2>

    <p class="reveal-word text-white/30 font-mono text-xs tracking-widest uppercase mt-12">
      Kiambu, Kenya — Since 2024
    </p>
  </div>
</section>
