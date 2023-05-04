export const navlink = document.querySelectorAll('.nav-link')

export const sectionShow = () => {
  for (const iterator of navlink) {
    document.querySelector('#' + iterator.getAttribute('href')).style.display = "none";
  }
}

export const handleCellClick = (e) => {
  e.preventDefault()
  const targetID = e.target
  const hrefAttr = targetID.getAttribute('href')
 
  sectionShow()
  document.querySelector('#' + hrefAttr).style.display = "block";

}

navlink.forEach(el => el.addEventListener('click', handleCellClick));

