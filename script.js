var audio = document.getElementById("myAudio");

  function playMusic() {
    audio.play();
  }

  function pauseMusic() {
    audio.pause();
  }
  function wa() {
    alert('Kamu Akan Di Arahkan Ke Wa Guweh')
    window.open('https://api.whatsapp.com/send?phone=6283806211925&text=Halo Agus Gemooy ><','_blank')
  }
  function ig() {
    alert('Kamu akan di Arahkan Ke Instagram Guweh')
    window.open('https://instagram.com/pick_ford867?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D','_blank')
  }
  function gh() {
    alert('kamu akan di arahkan ke github saya')
    window.open('https://github.com/PICKFORD-DC')
  }
  function fb() {
    alert('kamu akan di arahkan ke facebook guweh')
    window.open('https://www.facebook.com/PICKFORDGEMOOY.PENGGUNAAKUNUNIQUE.ZAFI')
  }
  function yt() {
    alert('kamu akan di arahkan ke yt guweh')
    window.open('https://youtube.com/pickfordaffah')
    
  }
  function sendMessage() {
    const nama = document.getElementById('nama-anonim').value;
    const isi = document.getElementById('isi-pesan').value;
    const text = `from : ${nama}\n message : ${isi}\n`
    const token = '6620838486:AAFZHvBiBo6dur5I6iYQNoEl2hhi-gO_DfU'
    const idchet = '5650155753'
    if (nama,isi === '') {
      alert('ups!! tidak boleh kosong ><');
      return false;
    }
    fetch(`https://api.telegram.org/bot${token}/sendMessage?chat_id=${idchet}&text=${text}`).then(response => response.json()).then( data => {
      alert('pesan kamu sudah terkirim')
    }).catch( error => {
      alert('gagal terkirim ')
    })
  }