    //lenis
    var lenis = new Lenis({
      duration: .8,
      smooth: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    // Small JS for interactivity: mobile menu, modal, theme toggle, form demo, scroll reveal
    document.getElementById('year').textContent = new Date().getFullYear();

    // Mobile menu
    const mobileBtn = document.getElementById('mobileBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    mobileBtn.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));

    // Theme toggle (simple)
    const themeBtn = document.getElementById('themeToggle');
    themeBtn.addEventListener('click', () => {
      if (document.documentElement.classList.contains('light')) {
        document.documentElement.classList.remove('light');
        document.body.classList.remove('bg-white');
        document.body.classList.add('bg-gray-900');
        themeBtn.textContent = '🌙';
      } else {
        document.documentElement.classList.add('light');
        document.body.classList.remove('bg-gray-900');
        document.body.classList.add('bg-white');
        themeBtn.textContent = '☀️';
      }
    });

    // Project modal
    const modal = document.getElementById('projectModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalDesc = document.getElementById('modalDesc');
    const modalLink = document.getElementById('modalLink');
    const closeModal = document.getElementById('closeModal');

    document.querySelectorAll('.openProject').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const card = e.target.closest('article');
        const title = card.dataset.title || 'Project';
        const desc = card.dataset.desc || 'Details';
        const link = card.dataset.link || '#';
        modalTitle.textContent = title;
        modalDesc.textContent = desc;
        modalLink.href = link;
        modal.classList.remove('hidden');
        modal.classList.add('flex');
      });
    });
    closeModal.addEventListener('click', () => { modal.classList.add('hidden'); modal.classList.remove('flex'); });
    modal.addEventListener('click', (e) => { if (e.target === modal) { modal.classList.add('hidden'); modal.classList.remove('flex'); } });

    // Contact form demo (no backend)
    const form = document.getElementById('contactForm');
    const formMsg = document.getElementById('formMsg');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      formMsg.classList.remove('hidden');
      setTimeout(() => formMsg.classList.add('hidden'), 2500);
      form.reset();
    });

    // Simple scroll reveal
    const observers = document.querySelectorAll('.fade-up');
    const io = new IntersectionObserver(entries => {
      entries.forEach(ent => { if (ent.isIntersecting) ent.target.classList.add('show'); });
    }, { threshold: 0.1 });
    observers.forEach(el => io.observe(el));

    // Keyboard accessibility: open card with Enter
    document.querySelectorAll('article[tabindex]').forEach(card => {
      card.addEventListener('keydown', (e) => { if (e.key === 'Enter') card.querySelector('.openProject').click(); });
    });

    gsap.from("#nav", {
      y: -50,
      ease: "power2.inout",
      stagger: { each: 0.3, from: "start" }
    })
    gsap.registerPlugin(ScrollTrigger, SplitText)
    // split elements with the class "split" into words and characters
    let split = SplitText.create("#mp", { type: "words, chars,lines" });
    gsap.from(split.lines, {
      y:50,      // animate from 100px below
      autoAlpha: 0, // fade in from opacity: 0 and visibility: hidden
      stagger: { each: .5, from: "edgs" }
    });
    let split1 = SplitText.create("#nm", { type: "words, chars,lines" });
    gsap.from(split1.chars, {
      y: 50,       // animate from 100px below
      autoAlpha: 0, // fade in from opacity: 0 and visibility: hidden
      repeat: 10000,
      stagger: { each: 0.2, from: "edgs" }
    });
    gsap.from("#bn", {
      x: -300,
      ease: "power2.inout",
      stagger: { each: .8, from: "end" }
    })
    gsap.from("#sm", {
      y: 100,
      ease: "power2.inout",
      stagger: { each: 1, from: "end" }
    })
    gsap.from("#img", {
      // x: 400,
      opacity: 0,
      ease: "circ.inout",
      duration: 3.5
      // stagger: { each:1 , from: "end" }
    })
    Shery.mouseFollower()
    Shery.makeMagnet("#nav,#bn,#sm,#send", {
      ease: "cubic-bezier(0.23, 1, 0.320, 1)",
      duration: .1,
    })
    Shery.imageMasker("#img" /* Element to target.*/, {
      //Parameters are optional.
      // mouseFollower: true,
      // text: "Shery",
      ease: "cubic-bezier(0.23, 1, 0.320, 1)",
      duration: .5,
    });
    gsap.from("#ar",{y:100,stagger:{each:.2,from:"start",},
      scrollTrigger:{trigger:"#ar",
        start:"top 90%",
        // markers:true,
      }})
    gsap.from("#ab",{y:50,stagger:0.2,
      scrollTrigger:{trigger:"#ab",start:"top 80%"}}
    )
    gsap.from("#abd",{y:5100,duration:.7 ,ease:"power1.inout",
      scrollTrigger:{trigger:"#ab",start:"top 80%"}}
    )
    gsap.from("#sk",{y:200,stagger:{each:.2,from:"start"},ease:"sin.inout",
      scrollTrigger:{trigger:"#sk",start:"top 80%"}}
    )
    Shery.hoverWithMediaCircle("#ab" /* Element to target.*/, {
  images: ["image/silu.png"] /*OR*/,
  //videos: ["video1.mp4", "video2.mp4"],
});