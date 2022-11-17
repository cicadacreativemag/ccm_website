setTimeout(function () {
    var msnry = new Masonry('.grid');
    msnry.layout();
  }, 100);
  
  setTimeout(function () {
    var msnry = new Masonry('.grid');
    msnry.layout();
  }, 300);
  
  setTimeout(function () {
    var msnry = new Masonry('.grid');
    msnry.layout();
  }, 1000);
  
  setTimeout(function () {
    var msnry = new Masonry('.grid');
    msnry.layout();
  }, 5000);

  Promise.all(Array.from(document.images).filter(img => !img.complete).map(img => new Promise(resolve => { img.onload = img.onerror = resolve; }))).then(() => {
    var msnry = new Masonry('.grid');
    msnry.layout();
  });