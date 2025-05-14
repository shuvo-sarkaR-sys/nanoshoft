
  const counters = document.querySelectorAll('.counter');

  const animateCounter = (el) => {
    const target = +el.getAttribute('data-target');
    let count = 0;
    const speed = 200; // smaller is faster
    const increment = target / speed;

    const update = () => {
      count += increment;
      if (count < target) {
        el.textContent = '£' + count.toFixed(2);
        requestAnimationFrame(update);
      } else {
        el.textContent = '£' + target.toFixed(2);
      }
    };

    update();
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        obs.unobserve(entry.target); // run only once
      }
    });
  }, { threshold: 0.6 }); // 60% in view

  counters.forEach(counter => observer.observe(counter));

 const logo = document.querySelector('.fade-in-bottom');
  const text = document.querySelectorAll('.fade-in-left');
  const texts= document.querySelectorAll('.fade-in-right')
  const observer1 = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target); // Only once
      }
    });
  }, { threshold: 0.6 });
 observer1.observe(logo)
    texts.forEach(el=> observer1.observe(el))
   text.forEach(el => observer1.observe(el))