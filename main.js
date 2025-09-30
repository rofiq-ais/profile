function pesan() {
  let nama = document.getElementById("name").value;
  let inputNama = document.getElementById("name");
  if (nama == "") {
    alert(`Isi nama Anda terlebih dahulu`);
  } else {
    alert(
      `Halo ${nama} senang berkenalan dengan Anda. Semoga pertemanan kita karena Allah`
    );
    inputNama.value = "";
  }
}
