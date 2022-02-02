const save = document.getElementById('save');
save.addEventListener('click', () => {
  let lditemukan = document.getElementById('ditemukan').value;
  let ljenisresiko = document.getElementById('jenisresiko').value;
  let ldirujuktanggal = document.getElementById('dirujuktanggal').value;
  let ldirujukke = document.getElementById('dirujukke').value;
  let ltindakansementara = document.getElementById('tindakansementara').value;

  let elementTr1 = document.createElement('tr');
  elementTr1.innerHTML = `
      <td> ${lditemukan} </td>
      <td> ${ljenisresiko}</td>
      <td> ${ldirujuktanggal}</td>
      <td> ${ldirujukke}</td>
      <td> ${ltindakansementara}</td>`;
  table.appendChild(elementTr1);

  document.getElementById('noregis').value;
  document.getElementById('nopuskesmas').value;
});
