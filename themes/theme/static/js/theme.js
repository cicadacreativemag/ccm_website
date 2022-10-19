// variable to hold the previously clicked button
let prevEventSource;

    // setTheme takes the theme name and the source element of the click event
    const setTheme = (theme, eventSource) => {
      document.documentElement.className = theme;
      localStorage.setItem('theme', theme)

      // switch icon img src based on theme value
      const icon = document.getElementById('navbarIcon');
      console.log("theme value is:" + theme); // checking theme value
      switch (theme) {
        case 'blue':
          console.log("setting icon for blue");  
          icon.src = "/icons/green-c.png"
          break;
        case 'green':
          console.log("setting icon for green");   
          icon.src = "/icons/blue-c.png"
          break;
        case 'pink':
          console.log("setting icon for pink");   
          icon.src = "/icons/yellow-c.png"
          break;
        case 'yellow':
          console.log("setting icon for yellow");   
          icon.src = "/icons/red-c.png"
          break;
        case 'red':
          console.log("setting icon for red"); 
          icon.src = "/icons/yellow-c.png"
          break;
        default:
          icon.src = "/icons/red-c.png"
      }

      // remove border from previous button if we have one
      if (!!prevEventSource)
        prevEventSource.classList.toggle('btn-border');

     

       // this part sets the button border

       // if no event source (button) then load border from value in local storage

       if (!eventSource) {

         const buttonId = localStorage.getItem('activeButtonId'); 
         const button = document.getElementById(buttonId);
         button.classList.toggle('btn-border');

       } else {  

        // add border to current button    
        eventSource.classList.toggle('btn-border');


        // save id of active button 
        localStorage.setItem('activeButtonId', eventSource.id) 

     

        // hold on to current button reference so we can remove border if another button is clicked 
        prevEventSource = eventSource; 

      } 

    }

    const getTheme = () => {
      const theme = localStorage.getItem('theme');
      theme && setTheme(theme);
    }  

    window.addEventListener('load', (event) => {
      getTheme();
    });


    









