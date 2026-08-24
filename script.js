const video = document.getElementById("loveVideo");


/* =========================
   เปลี่ยนหน้า
========================= */

function showPage(pageID) {

    document
        .querySelectorAll(".page")
        .forEach(page => {

            page.classList.remove("active");

        });


    const targetPage =
        document.getElementById(pageID);


    if (targetPage) {

        targetPage.classList.add("active");

    }

}


/* =========================
   กด OPEN
========================= */

function startVideo() {

    showPage("videoPage");

    // เริ่มวิดีโอจากต้น
    video.currentTime = 0;

    // เล่นวิดีโอพร้อมเสียง
    video.play().catch(error => {

        console.log(
            "ไม่สามารถเล่นวิดีโอ:",
            error
        );

    });

}


/* =========================
   วิดีโอจบ
========================= */

video.addEventListener(
    "ended",
    function () {

        showPage("questionPage");

    }
);


/* =========================
   คำถามแรก
========================= */

/*
   กด YES
   ↓
   ไปหน้า Pen Fan Gun Mai?????
*/

function yes() {

    showPage("proposalPage");

}


/*
   กด NO
   ↓
   ไปหน้า Are u sure?
*/

function no() {

    showPage("surePage");

}


/* =========================
   Are u sure? → BACK
========================= */

function back() {

    showPage("questionPage");

}


/* =========================
   Pen Fan Gun Mai?????
========================= */

/*
   กด YES
   ↓
   รูป YES
*/

function answerYes() {

    showPage("answerYesPage");

}


/*
   กด NO
   ↓
   รูป NO
*/

function answerNo() {

    showPage("answerNoPage");

}

function backToProposal() {

    showPage("proposalPage");

}
