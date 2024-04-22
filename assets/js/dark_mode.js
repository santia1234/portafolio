document.addEventListener('DOMContentLoaded', function() {
  let checkbox = document.getElementById('darkmode-toggle');

  function updateStyles() {
      let root = document.documentElement;
      root.style.setProperty("--primary-color", checkbox.checked ? "#F2F2F2" : "#111");
      root.style.setProperty("--text-primary", checkbox.checked ? "#FFA000" : "#EE991A");
      root.style.setProperty("--bg-color-section1", checkbox.checked ? "#CCCCCC" : "#eee");
      root.style.setProperty("--bg-color-section2", checkbox.checked ? "#999999" : "#FAFAFA");
      root.style.setProperty("--bg-color-buttons", checkbox.checked ? "#666666" : "#E0E0E0");
      root.style.setProperty("--color-white", checkbox.checked ? "black" : "#fff");
      root.style.setProperty("--color-white-1", checkbox.checked ? "#1A237E" : "#EBEBEB");
      root.style.setProperty("--color-white-2", checkbox.checked ? "#303F9F" : "#F0F0F0");
      root.style.setProperty("--color-white-3", checkbox.checked ? "#388E3C" : "#ccc");
      root.style.setProperty("--color-black", checkbox.checked ? "white" : "#000");
  }

  checkbox.addEventListener('change', updateStyles);
});
