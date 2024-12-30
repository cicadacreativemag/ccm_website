---
weight: 3
title: "Postcard Generator"
authors: ["Jay Serrano"]
description: Send us a postcard!
draft: false
featuredImage: "/images/issue7/thumb/postcards.webp"
type: art
---

To celebrate the release of this issue, we've created a way for you to take a little piece of this issue with you when you leave. Where are you reading Issue 07? Snap a photo, tell us where you are (doesn't have to be specific), leave your name and your social media handle, click the "Download" button, then tag us on [Twitter](https://twitter.com/cicadacreatemag) or [Instagram](https://www.instagram.com/cicadacreativemag/) with your postcard so we can share it. Or keep it as a private souvenir, send it to a group chat, whatever!

*Notes*:
- Toggle through different themes to switch the postcard color scheme.
- Although this generator should be compatible with most displays, if any of your text is cut off, try switching to desktop. 
- Thumbnail demo photo [credit](https://unsplash.com/photos/twukN12EN7c)  

<script type="text/javascript" src="https://html2canvas.hertzen.com/dist/html2canvas.min.js"></script>

**Postcard Preview:**

<div id="postcard"> 

<div id="postcard-left"> 
<div id="postcard-question"> <em>Where are you reading Issue 07?</em><br>
<input type="text" id="answer" placeholder="Start typing..." class="postcardInput">
</div>
<div id="postcard-image"> </div>
</div>

<div id="postcard-right"> 
<div id="stamp"><img id="stamp-img" src='/icons/stamps/red-c.png' alt="icon"></div>

<input type="text" id="name" placeholder="Type your name..." class="postcardInput"> <br>
<input type="text" id="socials" placeholder="Type your @..." class="postcardInput"> <br>
<div id="logo-qr">
<div id="logo">CCM #07: <br> You are here</div>
<img id="qr-img" src='/images/misc/qr.webp' alt="qr code"></div>
</div>

</div>

<br>
<div class="option"><strong>Upload your image</strong><br>
<label for="upload" class="download">Choose file</label>
<input type="file" id="upload" accept ="image/jpeg, image/png, image/jpg" style="display: none;"></div>

<div class="option"><strong>Save your postcard as a PNG</strong><br>
<button class="download">Download</button>   

</div>
</div>
</div>
                
<style>
#postcard {
display: flex;
width: 100%;
overflow: hidden;
aspect-ratio: 3 / 2;
font-size: calc(0.6rem + 0.3vw);
border: 2px solid var(--text-color);
background-color: var(--bg-color);
filter: brightness(1.1);
border-top: 2.5em solid;
}
#postcard-left, #postcard-right {
display: flex;
flex-direction: column;
width: 50%;
text-align: center;
}
#postcard-left {
border-right: 2px dashed var(--text-color);
}
#postcard-right {
justify-content: space-between;
}
#postcard-question {
margin: 1em;
height: 15%;
}
.postcardInput {
text-align: center;
line-height: calc(0.25 + 1 + 0.5);
max-width: 80%;
background-color: transparent;
color: var(--text-color);
border: 0;
outline:0;
border-bottom: 1px solid;
overflow: hidden;
}
.postcardInput::placeholder, .postcardInput::-moz-placeholder {
font-family: var(--body-font);
font-size: calc(0.6rem + 0.39vw);
}
input::placeholder {
overflow: visible;
}
#postcard-image {
flex: 1;
margin: 1rem;
background: center / cover no-repeat;
border: 1px solid;
border-radius: 5px;
}
#stamp {
text-align: right;
padding: 1em;
}
#logo-qr {
padding: calc(1em - 0.2vw);
display: flex;
align-items: flex-end;
justify-content: space-between;
}
#logo {
font-weight: bold;
width: 6.5em;
font-family: var(--header-font);
font-size: calc(0.7rem + 0.39vw);
}
#qr-img {
width: calc(2rem + 2.5vw);
}
#stamp-img {
width: 40%;
}
.option {
display: flex;
align-items: center;
justify-content: space-between;
margin: 1em 0;
}
#input {
font-size: 0.9rem;
height: 1.5rem;
width: 15rem;
}
input[type="file"] {
width: 13rem;
border: 0;
}
input[type="file"i] {
background-color: var(--bg-color);
color: var(--text-color);

}
.download {
border: 1.5px solid var(--text-color);
background-color: var(--bg-color);
color: var(--text-color);
border-radius: 0;
padding: 5px 15px;
cursor: pointer;
}

.download:hover {
  background-color: var(--text-color);
  color: var(--bg-color);
}

 @media (max-width: 400px) {
#postcard {
font-size: 0.6rem;
}
#logo {
width: 6.3em;
font-size: calc(0.6rem + 0.39vw);
}
#qr-img {
width: calc(1.5rem + 2.5vw);
} 
.postcardInput {
    line-height: calc(0.4 + 1 + 0.5);
}
 }

</style>

<script>

  // Upload image
  const image_input = document.querySelector("#upload");
  image_input.addEventListener("change", function() {
    const file_reader = new FileReader();
    file_reader.addEventListener("load", () => {
      const uploaded_image = file_reader.result;
      document.querySelector("#postcard-image").style.backgroundImage = `url(${uploaded_image})`;
    });
    file_reader.readAsDataURL(this.files[0]);
  });
  
  // Download image
  document.getElementById("download").addEventListener("click", function() {
      html2canvas(document.querySelector('#postcard'),{useCORS: true,allowTaint: true,}).then(function(canvas) {
          saveAs(canvas.toDataURL(), 'ccm-postcard.png');
      });
  });
  function saveAs(uri, filename) {
      var link = document.createElement('a');
      if (typeof link.download === 'string') {
          link.href = uri;
          link.download = filename;
          //Firefox requires the link to be in the body
          document.body.appendChild(link);
          //simulate click
          link.click();
          //remove the link when done
          document.body.removeChild(link);
      } else {
          window.open(uri);
      }
  }
  
</script>