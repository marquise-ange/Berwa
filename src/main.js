
import './style.css'

document.querySelector('#app').innerHTML = `
  <!-- HEADER -->
  <header class="bg-[#100D16] border-b border-white/10">
    <nav class="flex items-center justify-between px-8 py-5">

      <!-- Logo -->
      <a href="/" class="flex items-center gap-4">
        <svg class="w-12 h-12" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14 17V12C14 6 18 3 24 3C30 3 34 6 34 12V17"
            stroke="#9333EA" stroke-width="3" stroke-linecap="round"/>
          <rect x="5" y="14" width="38" height="32" rx="5" fill="#7E22CE"/>
          <text x="24" y="37" text-anchor="middle" fill="white"
            font-size="25" font-weight="bold">B</text>
        </svg>

        <span class="text-3xl font-extrabold tracking-wide text-white border-b-4 border-orange-500 pb-1">
          BERWA
        </span>
      </a>

      <!-- Navigation -->
      <ul class="hidden lg:flex items-center gap-10">
        <li>
          <a href="#" class="text-purple-500 font-semibold text-lg border-b-2 border-purple-500 pb-2">
            Home
          </a>
        </li>
        <li><a href="#" class="text-white text-lg hover:text-purple-500 transition-colors duration-300">About</a></li>
        <li><a href="#" class="text-white text-lg hover:text-purple-500 transition-colors duration-300">Shop</a></li>
        <li><a href="#" class="text-white text-lg hover:text-purple-500 transition-colors duration-300">Categories</a></li>
        <li><a href="#" class="text-white text-lg hover:text-purple-500 transition-colors duration-300">New Arrivals</a></li>
        <li><a href="#" class="text-white text-lg hover:text-purple-500 transition-colors duration-300">Sales</a></li>
        <li><a href="#" class="text-white text-lg hover:text-purple-500 transition-colors duration-300">Contact</a></li>
      </ul>

      <!-- Header Actions -->
      <div class="hidden md:flex items-center gap-6">
        <a href="#" class="text-white hover:text-purple-500 transition-colors duration-300">Search</a>
        <a href="#" class="text-white hover:text-purple-500 transition-colors duration-300">Wishlist</a>
        <a href="#" class="text-white hover:text-purple-500 transition-colors duration-300">Cart</a>
      </div>

    </nav>
  </header>


  <!-- HERO SECTION -->
  <section class="relative min-h-[850px] flex items-center overflow-hidden bg-[#080B18]">

    <!-- Background Image -->
    <img src="/images/hero.jpg" alt="BERWA fashion collection" class="absolute inset-0 h-full w-full object-cover"/>

    <!-- Dark Overlay -->
    <div class="absolute inset-0 bg-[#080B18]/70"></div>
    <!-- Hero Content -->
    <div class="relative z-10 w-full px-8 py-16 md:px-16">
      <!-- Hero Heading -->
      <div class="max-w-2xl">
        <p class="mb-5 text-sm font-bold uppercase tracking-[0.2em] text-fuchsia-400">
          Welcome to BERWA</p>

        <h1 class="text-4xl font-extrabold leading-tight text-white md:text-6xl">
          Elevate Your
          <span class="block text-fuchsia-400">Everyday Style</span>
        </h1>

        <p class="mt-6 max-w-xl text-base leading-relaxed text-gray-200 md:text-lg">
          Discover curated collections of premium fashion and lifestyle
          products. Timeless designs crafted for the modern individual.
        </p>

        <!-- Hero Buttons -->
        <div class="mt-9 flex flex-wrap gap-4">

          <a
            href="#products"
            class="rounded-xl bg-fuchsia-600 px-8 py-4 text-base font-bold text-white transition hover:bg-fuchsia-700"
          >
            Shop Collection →
          </a>

          <a
            href="#categories"
            class="rounded-xl border border-white/40 bg-white/10 px-8 py-4 text-base font-bold text-white backdrop-blur-sm transition hover:bg-white/20"
          >
            Browse Categories
          </a>

        </div>
      </div>

      <!-- BOTTOM ROW: STATISTICS + FLOATING CARDS -->
      <div class="mt-20 flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-12">

        <!-- LEFT SIDE: STATISTICS -->
        <div class="w-full lg:max-w-[62%]">

          <!-- Short Horizontal Line -->
          <div class="border-t border-white/20 pt-50">

            <div class="flex flex-wrap items-center gap-x-11 gap-y-6 -translate-y-45">

              <!-- Happy Customers -->
              <div >
                <h3 class="text-2xl font-bold text-white">50K+</h3>
                <p class="text-sm text-gray-300">Happy Customers</p>
              </div>

             <div class="h-10 border-l border-white/30"></div>

              <!-- Average Rating -->
              <div >
                <h3 class="text-2xl font-bold text-white">4.9 ★</h3>
                <p class="text-sm text-gray-300">Average Rating</p>
              </div>

              <div class="h-10 border-l border-white/30"></div>

              <!-- Premium Products -->
              <div >
                <h3 class="text-2xl font-bold text-white">500+</h3>
                <p class="text-sm text-gray-300">Premium Products</p>
              </div>

            </div>
          </div>
        </div>


        <!-- RIGHT SIDE: FLOATING INFORMATION CARDS -->
        <div class="flex w-full flex-col gap-4 lg:w-[325px] lg:shrink-0">

          <!-- Free Shipping Card -->
          <div class="flex min-h-[80px] -translate-y-25 items-center gap-4 rounded-2xl border border-white/5 bg-white/5 px-5 py-2 shadow-2xl backdrop-blur-xl">
            <div class="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-purple-500/30 text-fuchsia-400">

              <svg class="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round"  stroke-linejoin="round"  stroke-width="1.8"
                  d="M20 12v10H4V12m16 0H4m16 0h2V7H2v5h2m8 0v10m0-15c-4-5-8-1-4 2h4m0-2c4-5 8-1 4 2h-4"/>
              </svg>
            </div>
            <div>
              <h3 class="text-lg font-bold text-white">Free Shipping</h3>
              <p class="text-base text-gray-300">On orders over $100</p>
            </div>
          </div>


          <!-- Secure Checkout Card -->
          <div class="flex min-h-[80px] -translate-y-23 items-center gap-4 rounded-2xl border border-white/5 bg-white/5 px-5 py-4 shadow-2xl backdrop-blur-xl">
            <div class="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-green-500/20 text-green-400">
              <svg class="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="9" stroke-width="1.8"/>
                <path stroke-linecap="round"  stroke-linejoin="round  stroke-width="2"  d="m8 12 2.5 2.5L16 9" />
              </svg>
            </div>

            <div>
              <h3 class="text-lg font-bold text-white">Secure Checkout</h3>
              <p class="text-base text-gray-300">100% protected payment</p>
            </div>

          </div>

        </div>

      </div>

    </div>

  </section>

  
`
