    // variable to hold the previously clicked button
    let prevEventSource;

    // setTheme takes the theme name and the source element of the click event
    const setTheme = (theme, eventSource) => {
      document.documentElement.className = theme;
      localStorage.setItem('theme', theme)
     
    // remove border from previous button if we have one
    if (!!prevEventSource)
    prevEventSource.classList.toggle('btn-border');

    // add border to current button    
    eventSource.classList.toggle('btn-border');

    // hold on to current button reference so we can remove border if another button is clicked 
    prevEventSource = eventSource;
    

      // switch icon img src based on theme value
      const icon = document.getElementById('navbarIcon');
     
      switch (theme) {
        case 'blue':
          icon.src = "/icons/green-c.png"
          break;
        case 'green':
          icon.src = "/icons/blue-c.png"
          break;
        case 'pink':
          icon.src = "/icons/yellow-c.png"
          break;
        case 'yellow':
          icon.src = "/icons/red-c.png"
          break;
        case 'red':
          icon.src = "/icons/yellow-c.png"
          break;
        // add more cases for other theme colors 

        default:
          icon.src = "/icons/red-c.png"
      }
     
      
    }

    const getTheme = () => {
      const theme = localStorage.getItem('theme');
      theme && setTheme(theme);
    }  

    window.addEventListener('load', (event) => {
      getTheme();
    });










