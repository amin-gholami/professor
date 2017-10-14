function setActive() {
  aObj = document.getElementById('mainnavbar').getElementsByTagName('a');
  console.log(aObj);
  for(i=0;i<aObj.length;i++) {
    if(document.location.href.indexOf(aObj[i].href)>=0) {
      aObj[i].className='active';
    }
  }
}
