<script>
  const year = new Date().getFullYear();
</script>

<footer class="bg-secondary rounded-t-[4rem] text-white pt-20 pb-10 px-6 md:px-12">
  <div class="max-w-7xl mx-auto">
    <div class="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
      <!-- Brand -->
      <div class="md:col-span-2">
        <h3 class="font-display font-bold text-2xl mb-3">Ujaotech</h3>
        <p class="text-white/50 text-sm leading-relaxed max-w-sm">
          An automation startup in the heart of Kenya. Building high-performance software solutions that drive business growth.
        </p>
      </div>

      <!-- Navigation -->
      <div>
        <h4 class="font-display font-semibold text-sm uppercase tracking-wider text-white/30 mb-4">Quick Links</h4>
        <ul class="space-y-3">
          <li><a href="#services" class="text-white/60 hover:text-primary transition-colors duration-300 text-sm hover-lift inline-block">Services</a></li>
          <li><a href="#projects" class="text-white/60 hover:text-primary transition-colors duration-300 text-sm hover-lift inline-block">Projects</a></li>
          <li><a href="#contact" class="text-white/60 hover:text-primary transition-colors duration-300 text-sm hover-lift inline-block">Contact</a></li>
        </ul>
      </div>

      <!-- Insights -->
      <div>
        <h4 class="font-display font-semibold text-sm uppercase tracking-wider text-white/30 mb-4">Insights</h4>
        <ul class="space-y-3">
          <li><a href="https://blog.ujaotech.com" target="_blank" rel="noopener noreferrer" class="text-white/60 hover:text-primary transition-colors duration-300 text-sm hover-lift inline-block">Tech Blog</a></li>
        </ul>
      </div>
    </div>

    <!-- Bottom bar -->
    <div class="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
      <div class="flex items-center gap-3">
        <!-- System operational indicator -->
        <span class="flex items-center gap-2">
          <span class="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
          <span class="font-mono text-xs text-white/40">System Operational</span>
        </span>
      </div>

      <p class="text-white/30 text-sm">&copy; {year} Ujaotech. All rights reserved.</p>

      <p class="text-white/20 text-xs font-mono">Made with care in Kiambu, Kenya</p>
    </div>
  </div>
</footer>
