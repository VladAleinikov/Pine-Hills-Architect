function onEntry(entry) {
      entry.forEach(change => {
            if (change.isIntersecting) {
                  change.target.classList.remove('element-hide');
            }
      });
}
let options = { threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.element-hide');
for (let elm of elements) {
      observer.observe(elm);
}