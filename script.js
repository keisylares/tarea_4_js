function addItem(name) {
    let li = document.createElement('li');
    li.textContent = name;
    return li;
  }
  
  function infoCollecter() {
    let info = document.querySelectorAll('#name, #age, #nacionality');
  
    let name = info[0].value;
    let age = info[1].value;
    let nacionality = info[2].value;
    let totalInfo = [name, age, nacionality]
    
    let list = document.querySelector('#NacionalityList');
    list.appendChild(addItem(totalInfo));
  }