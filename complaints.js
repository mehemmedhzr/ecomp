// Remake input[type:file]

let fileUpload = document.getElementById('file-upload');
// console.log(fileUpload)

fileUpload.addEventListener('change', function(e) {
  var fileName = e.target.files[0] ? e.target.files[0].name : "Fayl seçilməyib!";
  document.getElementById('upload-label').textContent = fileName;
});