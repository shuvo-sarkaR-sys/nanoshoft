
  function togglePassword() {
    const password = document.getElementById("password");
    const icon = document.getElementById("eyeIcon");

   
    if (password.type === "password") {
      password.type = "text";
      icon.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none">
          <path d="M23.821 11.181a15.736 15.736 0 0 0-4.145-5.44l3.032-3.032-1.415-1.416L18 4.583A11.783 11.783 0 0 0 12 3C4.5 3 1.057 9.261.179 11.181a1.969 1.969 0 0 0 0 1.64 15.736 15.736 0 0 0 4.145 5.44L1.293 21.293l1.414 1.414L6 19.417A11.783 11.783 0 0 0 12 21c7.5 0 10.943-6.261 11.821-8.181a1.968 1.968 0 0 0 0-1.638ZM6 12a5.99 5.99 0 0 1 9.471-4.885L14.019 8.567A3.947 3.947 0 0 0 12 8a4 4 0 0 0-4 4 3.947 3.947 0 0 0 .567 2.019L7.115 15.471A5.961 5.961 0 0 1 6 12Zm6 6a5.961 5.961 0 0 1-3.471-1.115l1.452-1.452A3.947 3.947 0 0 0 12 16a4 4 0 0 0 4-4 3.947 3.947 0 0 0-.567-2.019l1.452-1.452A5.99 5.99 0 0 1 12 18Z" fill="#e8eaf6"/>
        </svg>
      `;
    } else {
      password.type = "password";
      icon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="30" height="30" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.dev/svgjs"><g width="100%" height="100%" transform="matrix(1,0,0,1,0,0)"><path d="M23.821,11.181v0C22.943,9.261,19.5,3,12,3S1.057,9.261.179,11.181a1.969,1.969,0,0,0,0,1.64C1.057,14.739,4.5,21,12,21s10.943-6.261,11.821-8.181A1.968,1.968,0,0,0,23.821,11.181ZM12,18a6,6,0,1,1,6-6A6.006,6.006,0,0,1,12,18Z" fill="#e8eaf6" fill-opacity="1" data-original-color="#000000ff" stroke="none" stroke-opacity="1"/><circle cx="12" cy="12" r="4" fill="#e8eaf6" fill-opacity="1" data-original-color="#000000ff" stroke="none" stroke-opacity="1"/></g></svg`;
    }
  }
  const counters = document.querySelectorAll('.counter');

  const animateCounter = (el) => {
    const target = +el.getAttribute('data-target');
    let count = 0;
    const speed = 100; // smaller is faster
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
 
if (logo instanceof Element) {
  observer1.observe(logo);
}
    texts.forEach(el=> observer1.observe(el))
   text.forEach(el => observer1.observe(el))