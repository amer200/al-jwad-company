const showElement = (id) => {
  const showE = document.getElementById(id);
  const hideE = Array.from(document.getElementsByClassName('all-forms'));
  hideE.forEach(e => {
    if (!Array.from(e.classList).includes('d-none')) {
      e.classList.add('d-none');
    }
  })
  showE.classList.remove('d-none');
}
/* stores */
const removeStore = (id, name) => {
  if (confirm(`! حذف متجر ${name}`)) {
    fetch(`/admin/remove-store/${id}`)
      .then(response => {
        if (response.status == 200) {
          const s = document.getElementById(`store${id}`);
          s.remove()
        } else {
          alert('خطاء حاول مرة اخرى');
        }
      })
      .catch(err => {
        console.log(err)
      })
  }
}