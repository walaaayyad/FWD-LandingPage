/*************************
  Define Global Variables
**************************/
let navbar = document.querySelector('.navbar__menu'),
    navList = document.getElementById('navbar__list'),
    sideList = document.getElementById('sideNavbar'),
    navListItems = document.querySelectorAll('listItem'),
    containerSection = document.getElementById('page__section'),
    scrollUpBtn = document.querySelector('.scrollUpBtn'),
    secId = 0;

/*************************
  Define Global FUNCTIONS
**************************/
//1- Function to add new section to the page & its URL in the navbar
const addListItem = ()=> {
     secId++;   
    
     // build the nav [Add new li to the navbar] & add click event handler with smooth effect comes from css
      navList.insertAdjacentHTML('beforeend',
      `
        <li onclick='addActiveClass(${secId})'>
          <a href="#section${secId}">
            section${secId}
          </a>
        </li>
      `
    );
    // Build the Side Navigation bar for small screen
    sideList.insertAdjacentHTML('beforeend',
      `
        <li onclick='openIconHandler()'>
          <a href="#section${secId}">
            section${secId}
          </a>
        </li>
      `
    );

     //Add new section to the DOM
      containerSection.insertAdjacentHTML('beforeend',
      `
        <section id="section${secId}"  data-nav="Section ${secId}">
          <div class="landing__container">
            <h2>Section ${secId}</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.</p>
            <p>Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.</p>
          </div>
        </section>
      `
    );
}

//2- Function to activate section & its URL on the navbar 
const addActiveClass= (id)=> {
    //Add active class for link on navbar
    document.querySelector('.link__active')?.classList.remove('link__active');
    document.querySelector(`[href="#section${id}"]`).classList.add('link__active');

    //Add active class to section
    document.querySelector(".your-active-class")?.classList.remove("your-active-class");
    document.querySelector(`#section${id}`).classList.add("your-active-class");
    
}

//3- Function to add class 'active' to section when near top of viewport
const activeCurrentSection = ()=> {
  //select all sections by attribute
  const newSections = document.querySelectorAll('[data-nav]');
    //loop the sections and add active style on current section
    newSections.forEach(section=> {
      let sectionRect= section.getBoundingClientRect();
        //add condition if the section appears on viewport by its ratio
        if(sectionRect.top/sectionRect.height < 0.5) {
          //Use a function [slice the id number from the sectionId to pass it to the function]    
          addActiveClass(section.id.slice(7));
        }
    })
} 

//4- Function to scroll top whith smooth effect comes from css
const scrollToTop = () => {
  scrollUpBtn.classList.add('hidden');
  window.scrollTo(0,0);
}

//5- Function to start page with three sections & make first section active when start page
const init= ()=> {
  //update location hash
  setTimeout(()=> {
    scrollToTop();
    window.location.hash = '';
  }, 10);
  //Create 3 sections
  addListItem();
  addListItem();
  addListItem();
  //Make first section active
  addActiveClass(1);
}

//6- Function to change navbar color when scroll down
const changeBackgroud = ()=> {
  if(window.scrollY >= 70) {
    navbar.classList.add('scroll');
    scrollUpBtn.classList.remove('hidden');
  }else{
    document.querySelector('.navbar__menu').classList.remove('scroll');
    scrollUpBtn.classList.add('hidden');

  }
}

//7- Function to handle open & close side menu
const openIconHandler = ()=> {
  document.getElementById('1').classList.toggle('line1');
  document.getElementById('2').classList.toggle('line2');
  document.getElementById('3').classList.toggle('line3');
  document.getElementById('sideMenu').classList.toggle('open');
  document.getElementById('cover').classList.toggle('openCover');
}

//******************************/
//    Define EVENT LISTENERS  
//******************************/
// Start the page  
window.addEventListener('load', init);   

// Scroll to targetElement
window.addEventListener('scroll', ()=> {
  activeCurrentSection(); 
  changeBackgroud();
}
);

//********************  END *********************/


