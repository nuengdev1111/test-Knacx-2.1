const pyramidContainer = document.getElementById('pyramid');

function generatePyramid(rows) {
  let pyramid = '';
  for (let i = 1; i <= rows; i++) {
    // เพิ่มช่องว่างเพื่อจัดตำแหน่งให้อยู่ตรงกลาง
    let spaces = '&nbsp;'.repeat(rows - i);
    // เพิ่มเครื่องหมาย * ในแต่ละแถว
    let stars = '*'.repeat(2 * i - 1);
    // เพิ่มบรรทัดใหม่ในพีระมิด
    pyramid +=  stars + '<br>';
  }
  return pyramid;
}

// กำหนดจำนวนแถวของพีระมิด
const rows = 10;
pyramidContainer.innerHTML = generatePyramid(rows);
