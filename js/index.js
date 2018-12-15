
function switchPane(from,to) {
  document.querySelector(from).style.maxHeight = "0";
  setTimeout(function() {
    document.querySelector(to).style.maxHeight = "1000vh";
  },750)
  location.hash = to
}
document.querySelector("#sociallinks").style.maxHeight = "1000vh";

document.querySelector("#devicesBtn").style.display = ""
document.querySelector("#faqButton").style.display = ""

if (document.querySelector(location.hash)) {
  switchPane("#sociallinks",location.hash)
}


//KONAMI

function loadScript(href) {
  return new Promise(function(a,r) {
    console.log("Loading " + href)
    var script = document.createElement('script');
    script.src = href;
    script.onload = a
    document.querySelector("#clippyjs").appendChild(script);
  })
}

async function loadClippy() {

  
  document.querySelector("#clippyjs").innerHTML = `<video src="clippy/peakaboo.webm" playsinline autoplay style="position:fixed;top:0;width:640px;height:480px;left:50vw;margin-left:-320px;"></video>`

}
(async function() {
  await loadScript("clippy/konami.js")
  new Konami(loadClippy)
})()
