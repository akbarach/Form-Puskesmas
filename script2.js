const save = document.getElementById('save');
save.addEventListener('click', () => {
  let lnikahumur = document.getElementById('nikahumur').value;
  let llamakawin = document.getElementById('lamakawin').value;
  let lkawinkeberapa = document.getElementById('kawinkeberapa').value;
  let lriwayatpenyakitsekarang = document.getElementById('riwayatpenyakitsekarang').value;
  let lriwayatpenyakitlalu = document.getElementById('riwayatpenyakitlalu').value;
  let lriwayatobstetri = document.getElementById('riwayatobstetri').value;
  let lmenarcheumur = document.getElementById('menarcheumur').value;
  let lsiklushaid = document.getElementById('siklushaid').value;
  let llamahaid = document.getElementById('lamahaid').value;
  let lbanyaknyahaid = document.getElementById('banyaknyahaid').value;
  let lriwayatpenyakitkeluarga = document.getElementById('riwayatpenyakitkeluarga').value;
  let lriwayatkehamilandanpersalinanlalu = document.getElementById('riwayatkehamilandanpersalinanlalu').value;

  let elementTr1 = document.createElement('tr');
  elementTr1.innerHTML = `
      <td> ${lnikahumur} </td>
      <td> ${llamakawin}</td>
      <td> ${lkawinkeberapa}</td>
      <td> ${lriwayatpenyakitsekarang}</td>
      <td> ${lriwayatpenyakitlalu}</td>
      <td> ${lriwayatobstetri}</td>
      <td> ${lmenarcheumur}</td>
      <td> ${lsiklushaid}</td>
      <td> ${llamahaid}</td>
      <td> ${lbanyaknyahaid}</td>
      <td> ${lriwayatpenyakitkeluarga}</td>
      <td> ${lriwayatkehamilandanpersalinanlalu}</td>`;
  table.appendChild(elementTr1);

  document.getElementById('nikahumur').value;
  document.getElementById('lamakawin').value;
  document.getElementById('kawinkeberapa').value;
  document.getElementById('riwayatpenyakitsekarang').value;
  document.getElementById('riwayatpenyakitlalu').value;
  document.getElementById('riwayatobstetri').value;
  document.getElementById('menarcheumur').value;
  document.getElementById('siklushaid').value;
  document.getElementById('lamahaid').value;
  document.getElementById('banyaknyahaid').value;
  document.getElementById('riwayatpenyakitkeluarga').value;
  document.getElementById('riwayatkehamilandanpersalinanlalu').value;
});

save.addEventListener('click', () => {
  let ladatidak = document.getElementById('adatidak').value;
  let lhubungan = document.getElementById('hubungan').value;
  let ljumlahanakyangdiinginkan = document.getElementById('jumlahanakyangdiinginkan').value;
  let lmetodekb = document.getElementById('metodekb').value;
  let lapakahia = document.getElementById('apakahia').value;
  let lrencanakb = document.getElementById('rencanakb').value;
  let lharipertama = document.getElementById('haripertama').value;
  let lharitaksiran = document.getElementById('haritaksiran').value;
  let lkeluhanutama = document.getElementById('keluhanutama').value;
  let lstatusperkawinan = document.getElementById('statusperkawinan').value;
  let lsudahbelum = document.getElementById('sudahbelum').value;
  let ltt1 = document.getElementById('tt1').value;

  let elementTr2 = document.createElement('tr');
  elementTr2.innerHTML = `
      <td> ${ladatidak} </td>
      <td> ${lhubungan}</td>
      <td> ${ljumlahanakyangdiinginkan}</td>
      <td> ${lmetodekb}</td>
      <td> ${lapakahia}</td>
      <td> ${lrencanakb}</td>
      <td> ${lharipertama}</td>
      <td> ${lharitaksiran}</td>
      <td> ${lkeluhanutama}</td>
      <td> ${lstatusperkawinan}</td>
      <td> ${lsudahbelum}</td>
      <td> ${ltt1}</td>`;
  table2.appendChild(elementTr2);

  document.getElementById('adatidak').value;
  document.getElementById('hubungan').value;
  document.getElementById('jumlahanakyangdiinginkan').value;
  document.getElementById('metodekb').value;
  document.getElementById('apakahia').value;
  document.getElementById('rencanakb').value;
  document.getElementById('haripertama').value;
  document.getElementById('haritaksiran').value;
  document.getElementById('keluhanutama').value;
  document.getElementById('statusperkawinan').value;
  document.getElementById('sudahbelum').value;
  document.getElementById('tt1').value;
});
