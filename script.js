
function opentab(tabName) {
    
    var tabcontent = document.getElementsByClassName("tab-contents");
    
    var tablinks = document.getElementsByClassName("tab-links");
  
    
    for (var i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
   
    for (var i = 0; i < tablinks.length; i++) {
      tablinks[i].classList.remove("active-link");
    }
  
    
    document.getElementById(tabName).style.display = "block";
    event.target.classList.add("active-link");
  }
  


    var sidemeu = document.getElementById("sidemenu");
    function openmenu(){
        sidemeu.style.right="0";
    }
    function closemenu(){
        sidemeu.style.right="-200px";
    }

    const scriptURL = 'https://script.google.com/macros/s/AKfycbxXFb3BPaQ-EQZBwk447nNaefPb-6DVu3ikOC3jBQFGgNJXJCxw7g0wyRmxIvoEuV9jmg/exec'
    const form = document.forms['submit-to-google-sheet']
    const msg = document.getElementById("msg")
  
    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            msg.innerHTML = "Thank you for your message!"
            setTimeout(function(){
                msg.innerHTML = ""
            },5000)
            form.reset()
        }
    )
        .catch(error => console.error('Error!', error.message))
    })
