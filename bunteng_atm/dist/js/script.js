// ดึงปุ่มทั้งหมด
const buttons = document.querySelectorAll('.header .box a');

// ดึงปุ่มเริ่มต้น
const defaultBtn = document.querySelector('.header .box a.deposit');

// ดึงส่วนเนื้อหา
const sections = document.querySelectorAll('.money > div');

// ฟังก์ชันแสดงเนื้อหา
function showSection(target) {
    sections.forEach(sec => sec.style.display = "none");
    document.querySelector('.money .' + target).style.display = "block";
}

// --- ตั้งค่าเริ่มต้น ---
showSection("deposit");     // แสดง deposit
defaultBtn.classList.add("active");  // active ปุ่ม deposit
defaultBtn.focus();                   // focus deposit

// --- Event ปุ่ม ---
buttons.forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.preventDefault();
        const target = this.classList[0];

        // แสดงเนื้อหา
        showSection(target);

        // ลบ active ทุกปุ่ม
        buttons.forEach(b => b.classList.remove("active"));

        // เพิ่ม active ให้ปุ่มที่คลิก
        this.classList.add("active");

        // focus ปุ่ม
        this.focus();
    });
});
