function checkPassword() {
    const password = document.getElementById('passInput').value;
    
    // สร้างรายการรหัสผ่านที่ถูกต้องไว้ในนี้ (ใส่กี่อันก็ได้)
    const validPasswords = [
        "Conan",          // รหัสที่ 1 (เช่น วันครบรอบ)
        "16/8/2548",          // รหัสที่ 2 (เช่น ชื่อเล่น)
        "16/8/2005",      // รหัสที่ 3
        "conan" ,
        "28/4/2006",
        "28/4/2549"     // รหัสที่ 4 (ภาษาไทยก็ใช้ได้นะ!)
    ];

    // เช็กว่ารหัสที่ผู้ใช้กรอกมา มีอยู่ในรายการ validPasswords ไหม
    if (validPasswords.includes(password)) {
        document.getElementById('step-0').classList.add('hidden');
        document.getElementById('step-1').classList.remove('hidden');
    } else {
        alert("รหัสผ่านไม่ถูกต้องนะ  🥺");
    }
}

function nextStep(step) {
    // ซ่อนทุก step
    document.getElementById('step-1').classList.add('hidden');
    document.getElementById('step-2').classList.add('hidden');
    document.getElementById('step-3').classList.add('hidden');
    
    // โชว์ step ที่ต้องการ
    document.getElementById('step-' + step).classList.remove('hidden');
}

function moveButton() {
    const btn = document.getElementById('no-btn');
    const x = Math.random() * (window.innerWidth - btn.offsetWidth - 50);
    const y = Math.random() * (window.innerHeight - btn.offsetHeight - 50);
    
    btn.style.position = 'fixed';
    btn.style.left = x + 'px';
    btn.style.top = y + 'px';
}