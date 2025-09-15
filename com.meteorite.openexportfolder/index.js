const csInterface = new CSInterface();

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("openBtn").addEventListener("click", () => {
    csInterface.evalScript("openLastExportFolder()");
  });

  document.getElementById("hookBtn").addEventListener("click", () => {
    csInterface.evalScript("registerAMEHook()");
    alert("Meteorite: Auto-open enabled for Media Encoder!");
  });
});
