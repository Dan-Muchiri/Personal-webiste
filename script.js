document.addEventListener("DOMContentLoaded", () => {
    const btn1 = document.querySelector('.btn1')
    btn1.addEventListener("click", ()=>{
        scrollToSection('profile')
    })

    const btn2 = document.querySelector('.btn2')
    btn2.addEventListener("click", ()=>{
        scrollToSection('education')
    })

    const btn3 = document.querySelector('.btn3')
    btn3.addEventListener("click", ()=>{
        scrollToSection('experience')
    })

    const btn4 = document.querySelector('.btn4')
    btn4.addEventListener("click", ()=>{
        scrollToSection('contact')
    })
  
    function scrollToSection(sectionId) {
      const section = document.getElementById(sectionId);
      const headerHeight = 80;
      const scrollPosition = section.offsetTop - headerHeight;
  
      window.scrollTo({
        top: scrollPosition,
        behavior: 'smooth'
      });
    }

    const phoneNumberLink = document.getElementById("phone-number");
    phoneNumberLink.addEventListener('click', function (event) {
      event.preventDefault();
      copyPhoneNumber();
    });
    
    function copyPhoneNumber() {
      const phoneNumber = phoneNumberLink.innerText;
      navigator.clipboard.writeText(phoneNumber)
        .then(() => alert("Phone number copied to clipboard: " + phoneNumber))
        .catch(error => console.error('Unable to copy phone number', error));
    }
  
  });
  