import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger);

// Elements stay visible if this never runs or motion is reduced.
if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const lenis = new Lenis({ anchors: true });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);

  // Add data-reveal to any element that should rise in as it enters the screen.
  gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((el) => {
    gsap.from(el, {
      y: 32,
      opacity: 0,
      duration: 0.8,
      ease: 'power2.out',
      scrollTrigger: { trigger: el, start: 'top 85%', once: true },
    });
  });

  // data-lines: a heading whose data-line children arrive one by one, tilted and blurred, then settle.
  gsap.utils.toArray<HTMLElement>('[data-lines]').forEach((el) => {
    const trigger = { trigger: el, start: 'top 80%', once: true };
    gsap.from(el.querySelectorAll('[data-line]'), {
      y: 50,
      opacity: 0,
      rotate: 4,
      filter: 'blur(10px)',
      transformOrigin: 'left bottom',
      duration: 0.9,
      ease: 'power3.out',
      stagger: 0.14,
      scrollTrigger: trigger,
    });
    gsap.from(el.querySelectorAll('[data-mark]'), {
      scaleX: 0,
      duration: 0.6,
      delay: 0.5,
      ease: 'power2.inOut',
      scrollTrigger: trigger,
    });
  });

  // data-tiles: a photo grid that builds one data-tile at a time, then drifts as you scroll.
  gsap.utils.toArray<HTMLElement>('[data-tiles]').forEach((el) => {
    gsap.from(el.querySelectorAll('[data-tile]'), {
      opacity: 0,
      scale: 0.7,
      y: 40,
      duration: 0.7,
      ease: 'power3.out',
      stagger: 0.09,
      scrollTrigger: { trigger: el, start: 'top 80%', once: true },
    });
    gsap.to(el, {
      yPercent: -8,
      ease: 'none',
      scrollTrigger: { trigger: el, start: 'top bottom', end: 'bottom top', scrub: true },
    });
  });
  // data-rows: list rows (data-row) fade up one after another.
  gsap.utils.toArray<HTMLElement>('[data-rows]').forEach((el) => {
    gsap.from(el.querySelectorAll('[data-row]'), {
      opacity: 0,
      y: 24,
      duration: 0.6,
      ease: 'power2.out',
      stagger: 0.09,
      scrollTrigger: { trigger: el, start: 'top 82%', once: true },
    });
  });

  // data-wipe: an image uncovers from left to right.
  gsap.utils.toArray<HTMLElement>('[data-wipe]').forEach((el) => {
    gsap.fromTo(
      el,
      { clipPath: 'inset(0 100% 0 0)' },
      { clipPath: 'inset(0 0% 0 0)', duration: 1.1, ease: 'power3.inOut', scrollTrigger: { trigger: el, start: 'top 80%', once: true } },
    );
  });

  // data-photo-stack: overlapping data-photo items slide in tilted and straighten.
  gsap.utils.toArray<HTMLElement>('[data-photo-stack]').forEach((el) => {
    gsap.from(el.querySelectorAll('[data-photo]'), {
      opacity: 0,
      x: -60,
      y: 40,
      rotate: (i) => (i % 2 ? 8 : -8),
      duration: 1,
      ease: 'power3.out',
      stagger: 0.18,
      scrollTrigger: { trigger: el, start: 'top 75%', once: true },
    });
  });

  // data-counts: each data-stat fades in and its data-count number counts up, one after another.
  gsap.utils.toArray<HTMLElement>('[data-counts]').forEach((group) => {
    const trigger = { trigger: group, start: 'top 85%', once: true };
    gsap.from(group.querySelectorAll('[data-stat]'), { opacity: 0, y: 24, duration: 0.6, stagger: 0.2, scrollTrigger: trigger });
    group.querySelectorAll<HTMLElement>('[data-count]').forEach((el, i) => {
      const target = el.dataset.count ?? '0';
      const decimals = (target.split('.')[1] ?? '').length;
      const counter = { value: 0 };
      el.textContent = (0).toFixed(decimals);
      gsap.to(counter, {
        value: parseFloat(target),
        duration: 1.4,
        delay: i * 0.2,
        ease: 'power2.out',
        scrollTrigger: trigger,
        onUpdate: () => (el.textContent = counter.value.toFixed(decimals)),
      });
    });
  });

  // data-progress: a line that fills (--progress 0 to 1) as the element scrolls through the screen.
  gsap.utils.toArray<HTMLElement>('[data-progress]').forEach((el) => {
    gsap.fromTo(
      el,
      { '--progress': 0 },
      { '--progress': 1, ease: 'none', scrollTrigger: { trigger: el, start: 'top 75%', end: 'bottom 60%', scrub: 0.4 } },
    );
  });

  // data-words: a heading that appears word by word.
  gsap.utils.toArray<HTMLElement>('[data-words]').forEach((el) => {
    const words = (el.textContent ?? '').trim().split(/\s+/);
    el.setAttribute('aria-label', words.join(' '));
    el.textContent = '';
    words.forEach((word, i) => {
      const span = document.createElement('span');
      span.textContent = word;
      span.setAttribute('aria-hidden', 'true');
      span.style.display = 'inline-block';
      el.append(span, i < words.length - 1 ? ' ' : '');
    });
    gsap.from(el.children, {
      opacity: 0,
      y: '0.5em',
      duration: 0.6,
      ease: 'power3.out',
      stagger: 0.07,
      scrollTrigger: { trigger: el, start: 'top 85%', once: true },
    });
  });

  // data-compare: a before/after pair. Scrolling moves the dividing line (--p) from right to left.
  // On wide screens the section holds still while it happens; on small ones it follows the scroll.
  const media = gsap.matchMedia();
  gsap.utils.toArray<HTMLElement>('[data-compare]').forEach((el) => {
    const sweep = (scrollTrigger: ScrollTrigger.Vars) =>
      gsap.fromTo(el, { '--p': '96%' }, { '--p': '4%', ease: 'none', scrollTrigger: { scrub: 0.4, ...scrollTrigger } });

    media.add('(min-width: 1024px)', () => {
      sweep({ trigger: el.closest('section'), start: 'top top+=73', end: '+=90%', pin: true });
    });
    media.add('(max-width: 1023px)', () => {
      sweep({ trigger: el, start: 'top 75%', end: 'bottom 45%' });
    });
  });

  // The pinned section adds scroll length, so put every trigger back in page order and re-measure.
  ScrollTrigger.sort();
  ScrollTrigger.refresh();
}
