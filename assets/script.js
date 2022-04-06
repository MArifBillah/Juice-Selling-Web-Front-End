// Buat mengganti gambar ketika klik pilih
function gantiGambar(element){
    if(element.value=='jeruk'){
        document.getElementById("ganti").style.backgroundImage='url(assets/image/orange.jpg)';
        document.getElementById("ganti").style.backgroundPosition='top'
    }else if(element.value=='lemon'){
        document.getElementById("ganti").style.backgroundImage='url(assets/image/lemonade.jpg)';    
    }else if(element.value=='brokoli'){
        document.getElementById("ganti").style.backgroundImage='url(assets/image/broccoli.jpg)';    
    }
}

// dropdown, cuma muncul ketika lebar layar dibawah 1200px
function munculDropdown() {
        document.getElementById("dropdown").classList.toggle('tampil');
  }
// menghilangkan dropdown ketika klik dimana saja saat dropdown nya muncul
  window.onclick = function(event) {
    if (!event.target.matches('.hide')) {
        if(document.getElementById("dropdown").classList.contains('tampil')){
            document.getElementById("dropdown").classList.toggle('tampil');
        }
    }
}

//scroll kebawah smooth
function kebawah(element){
    document.getElementById("pilih-rasa").scrollIntoView({ behavior: 'smooth'});
}