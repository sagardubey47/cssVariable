var inputs = document.querySelectorAll('input');
 
function handleEvent() {
    let suffix = this.dataset.sizing || '';
   
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach(input => input.addEventListener('change', handleEvent));
inputs.forEach(input => input.addEventListener('mousemove', handleEvent));
 