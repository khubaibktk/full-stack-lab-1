function showAlert(text){
  const msg = document.getElementById('message');
  msg.innerHTML = `<div class="alert alert-success alert-dismissible fade show" role="alert">
    ${text}
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>`;
  setTimeout(()=>{const a = msg.querySelector('.alert'); if(a) a.classList.remove('show');}, 3000);
}

document.addEventListener('DOMContentLoaded', ()=>{
  const form = document.getElementById('joinForm');
  form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    if(!name || !email){ showAlert('Please enter name and email.'); return; }
    showAlert(`Thanks, ${name}! We'll contact you at ${email}.`);
    form.reset();
  });

  // Smooth scrolling for internal links and collapse mobile menu
  document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
    anchor.addEventListener('click', function(e){
      const targetId = this.getAttribute('href');
      if(targetId === '#' || !targetId) return;
      const target = document.querySelector(targetId);
      if(!target) return;
      e.preventDefault();
      target.scrollIntoView({behavior:'smooth', block:'start'});

      // close navbar on small screens
      const navCollapse = document.querySelector('.navbar-collapse.show');
      if(navCollapse){
        const bsCollapse = bootstrap.Collapse.getInstance(navCollapse) || new bootstrap.Collapse(navCollapse);
        bsCollapse.hide();
      }
    });
  });
});
