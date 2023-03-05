
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
/*companies */
const changeCompanyStutus = (id) => {
  const myInput = document.getElementById('co' + id);
  let Txt1 = 'سيتم الغاء تفعيل الشركة ولن تظهر للمتاجر!';
  if (myInput.checked) {
    Txt1 = 'سيتم تفعيل الشركة للمتاجر'
  }
  if (confirm(Txt1)) {
    fetch(`/admin/change-company-status/${id}`)
      .then(response => {
        if (!response.status == 200) {
          alert('خطاء حاول ثانية')
        }
      })
      .catch(err => {
        console.log(err)
      })
  }
}