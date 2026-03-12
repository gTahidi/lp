<script>
  import { onMount } from 'svelte';
  import gsap from 'gsap';
  import { ScrollTrigger } from 'gsap/ScrollTrigger';

  gsap.registerPlugin(ScrollTrigger);

  let sectionEl;

  const projects = [
    {
      name: 'Wander Lust AI',
      desc: 'Empowering 1M+ travelers using Artificial Intelligence. Personalized recommendations for discovering, planning, and booking perfect trips.',
      features: ['AI-Powered Recommendations', 'Smart Trip Planning', 'Real-time Travel Updates'],
      link: 'https://www.wanderwiseai.com/',
      linkText: 'Visit Platform',
      icon: 'globe',
    },
    {
      name: 'Herbie AI',
      desc: 'Making Pentesting Easier and Smarter using AI. Combines artificial intelligence with penetration testing expertise.',
      features: ['AI-Powered Vulnerability Detection', 'Automated Security Testing', 'Comprehensive Reporting'],
      link: 'https://bastco.org/',
      linkText: 'Learn More',
      icon: 'shield',
    },
    {
      name: 'Diaspora Directory',
      desc: 'Connecting Kenyans Abroad to companies back home. Bridging the gap between diaspora talent and local opportunities.',
      features: ['Global Talent Network', 'Job Matching', 'Resource Hub'],
      link: 'https://thediasporadirectory.com/',
      linkText: 'Explore Platform',
      icon: 'network',
    },
    {
      name: 'Digital Marketing',
      desc: 'Transform your brand\'s digital presence with expert marketing strategies. Data-driven insights with creative excellence.',
      features: ['SEO Optimization', 'Content Strategy', 'Social Media Management'],
      link: '#contact',
      linkText: 'Learn More',
      icon: 'megaphone',
    },
  ];

  onMount(() => {
    const ctx = gsap.context(() => {
      gsap.from('.projects-heading', {
        scrollTrigger: { trigger: sectionEl, start: 'top 85%' },
        y: 40, opacity: 0, duration: 0.8, ease: 'power3.out',
      });
      gsap.from('.project-card', {
        scrollTrigger: { trigger: sectionEl, start: 'top 70%' },
        y: 60, opacity: 0, duration: 0.8, ease: 'power3.out', stagger: 0.15,
      });
    }, sectionEl);
    return () => ctx.revert();
  });
</script>

<section id="projects" bind:this={sectionEl} class="py-24 md:py-32 px-6 md:px-12 bg-secondary-light">
  <div class="max-w-7xl mx-auto">
    <div class="projects-heading text-center mb-16 md:mb-20">
      <p class="font-mono text-sm text-primary tracking-widest uppercase mb-4">Our Work</p>
      <h2 class="font-display font-bold text-3xl md:text-5xl text-secondary">Projects We Build & Maintain</h2>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      {#each projects as project}
        <div class="project-card group hover-lift bg-white border border-border rounded-[2rem] p-8 transition-all duration-500 hover:shadow-xl hover:shadow-primary/5">
          <div class="flex items-center gap-4 mb-5">
            <div class="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
              {#if project.icon === 'globe'}
                <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path></svg>
              {:else if project.icon === 'shield'}
                <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
              {:else if project.icon === 'network'}
                <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path></svg>
              {:else}
                <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"></path></svg>
              {/if}
            </div>
            <h3 class="font-display font-bold text-xl md:text-2xl text-secondary">{project.name}</h3>
          </div>

          <p class="text-muted text-sm leading-relaxed mb-5">{project.desc}</p>

          <div class="bg-secondary-light rounded-2xl p-4 mb-5">
            <ul class="space-y-2">
              {#each project.features as feature}
                <li class="flex items-center gap-2 text-sm text-secondary">
                  <svg class="w-4 h-4 text-primary shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                  {feature}
                </li>
              {/each}
            </ul>
          </div>

          <a
            href={project.link}
            target={project.link.startsWith('http') ? '_blank' : undefined}
            rel={project.link.startsWith('http') ? 'noopener noreferrer' : undefined}
            class="inline-flex items-center gap-1.5 text-primary font-semibold text-sm hover-lift transition-colors hover:text-accent"
          >
            {project.linkText}
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
          </a>
        </div>
      {/each}
    </div>
  </div>
</section>
