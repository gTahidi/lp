<script>
  import { onMount } from 'svelte';
  import gsap from 'gsap';
  import { ScrollTrigger } from 'gsap/ScrollTrigger';

  gsap.registerPlugin(ScrollTrigger);

  let sectionEl;

  const techs = [
    { name: 'Golang', color: '#00ADD8' },
    { name: 'TypeScript', color: '#3178C6' },
    { name: 'Python', color: '#3776AB' },
    { name: 'Azure', color: '#0078D4' },
    { name: 'React', color: '#61DAFB' },
    { name: 'Node.js', color: '#339933' },
  ];

  onMount(() => {
    const ctx = gsap.context(() => {
      gsap.from('.tech-heading', {
        scrollTrigger: { trigger: sectionEl, start: 'top 85%' },
        y: 40, opacity: 0, duration: 0.8, ease: 'power3.out',
      });
      gsap.from('.tech-pill', {
        scrollTrigger: { trigger: sectionEl, start: 'top 75%' },
        y: 30, opacity: 0, scale: 0.9, duration: 0.6, ease: 'power3.out', stagger: 0.1,
      });
    }, sectionEl);
    return () => ctx.revert();
  });
</script>

<section bind:this={sectionEl} class="py-24 md:py-32 px-6 md:px-12">
  <div class="max-w-5xl mx-auto text-center">
    <div class="tech-heading mb-14">
      <p class="font-mono text-sm text-primary tracking-widest uppercase mb-4">Our Stack</p>
      <h2 class="font-display font-bold text-3xl md:text-5xl text-secondary">Powered by Modern Tech</h2>
      <p class="text-muted mt-4 max-w-xl mx-auto">Scalable, efficient solutions built with industry-leading technologies.</p>
    </div>

    <div class="flex flex-wrap justify-center gap-4 md:gap-5">
      {#each techs as tech}
        <div
          class="tech-pill hover-lift group flex items-center gap-3 bg-white border border-border rounded-full px-6 py-3.5 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 cursor-default"
        >
          <span
            class="w-3 h-3 rounded-full shrink-0 transition-transform duration-300 group-hover:scale-125"
            style="background-color: {tech.color};"
          ></span>
          <span class="font-display font-semibold text-secondary">{tech.name}</span>
        </div>
      {/each}
    </div>
  </div>
</section>
