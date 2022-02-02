const save = document.getElementById('save');
save.addEventListener('click', () => {
  let lnoregis = document.getElementById('noregis').value;
  let lnopuskesmas = document.getElementById('nopuskesmas').value;
  let lnamaibu = document.getElementById('namaibu').value;
  let lumur = document.getElementById('umur').value;
  let lagama = document.getElementById('agama').value;
  let lpendidikan = document.getElementById('pendidikan').value;
  let lpekerjaan = document.getElementById('pekerjaan').value;
  let lalamat = document.getElementById('alamat').value;
  let lnamasuami = document.getElementById('namasuami').value;
  let lumur2 = document.getElementById('umur2').value;
  let lagama2 = document.getElementById('agama2').value;
  let lpendidikan2 = document.getElementById('pendidikan2').value;
  let lpekerjaan2 = document.getElementById('pekerjaan2').value;
  let lalamat2 = document.getElementById('alamat2').value;

  let elementTr1 = document.createElement('tr');
  elementTr1.innerHTML = `
      <td> ${lnoregis} </td>
      <td> ${lnopuskesmas}</td>
      <td> ${lnamaibu}</td>
      <td> ${lumur}</td>
      <td> ${lagama}</td>
      <td> ${lpendidikan}</td>
      <td> ${lpekerjaan}</td>
      <td> ${lalamat}</td>
      <td> ${lnamasuami}</td>
      <td> ${lumur2}</td>
      <td> ${lagama2}</td>
      <td> ${lpendidikan2}</td>
      <td> ${lpekerjaan2}</td>
      <td> ${lalamat2}</td>`;
  table.appendChild(elementTr1);

  document.getElementById('noregis').value;
  document.getElementById('nopuskesmas').value;
});
