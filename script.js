/* =====================================================
   STAR SYSTEM
===================================================== */

function createStars(containerId, amount) {

    const container =
        document.getElementById(containerId);

    if (!container) return;

    for (let i = 0; i < amount; i++) {

        const star =
            document.createElement("div");

        star.classList.add("star");

        const type =
            Math.random();

        if (type > 0.82) {

            star.classList.add("big");
        }

        if (type > 0.94) {

            star.classList.add("cross");
        }

        star.style.left =
            Math.random() * 100 + "%";

        star.style.top =
            Math.random() * 100 + "%";


        const moveTime =
            7 + Math.random() * 10;

        const twinkleTime =
            1.5 + Math.random() * 3;


        star.style.animationDuration =
            moveTime + "s, " +
            twinkleTime + "s";


        star.style.animationDelay =
            "-" +
            Math.random() * moveTime +
            "s, -" +
            Math.random() *
            twinkleTime +
            "s";


        container.appendChild(star);
    }
}


/* ดาวแต่ละหน้า */

createStars("starField", 65);

createStars("coverStars", 45);

createStars("notebookStars", 45);

createStars("messageStars", 45);

createStars("flowerStars", 50);


/* =====================================================
   MUSIC
===================================================== */

const music =
    document.getElementById("bgMusic");

const musicButton =
    document.getElementById("musicButton");

const musicText =
    document.getElementById("musicText");


let musicPlaying = false;


/*
    พยายามเปิดเพลงทันที

    ถ้า Browser อนุญาต → เล่นเลย

    ถ้า Browser บล็อก →
    ผู้ใช้กดปุ่ม MUSIC ครั้งแรก
*/

window.addEventListener("load", () => {

    music.volume = 0.35;

    music.play()
        .then(() => {

            musicPlaying = true;

            updateMusicButton();

        })
        .catch(() => {

            musicPlaying = false;

            updateMusicButton();

        });
});


musicButton.addEventListener(
    "click",
    () => {

        if (musicPlaying) {

            music.pause();

            musicPlaying = false;

        } else {

            music.play()
                .then(() => {

                    musicPlaying = true;

                })
                .catch(() => {

                    console.log(
                        "Browser blocked autoplay."
                    );

                });
        }

        updateMusicButton();
    }
);


function updateMusicButton() {

    if (musicPlaying) {

        musicButton.classList.add(
            "playing"
        );

        musicText.textContent =
            "ON";

    } else {

        musicButton.classList.remove(
            "playing"
        );

        musicText.textContent =
            "OFF";
    }
}


/* =====================================================
   PAGE SYSTEM
===================================================== */

function showPage(pageId) {

    document
        .querySelectorAll(".page")
        .forEach(page => {

            page.classList.remove(
                "active"
            );
        });


    const target =
        document.getElementById(pageId);


    if (target) {

        target.classList.add(
            "active"
        );
    }
}


/* =====================================================
   INTRO
===================================================== */

const introText =
    document.getElementById("introText");

const heart =
    document.getElementById("heart");


const introWords = [

    "24/09",

    "HAPPY",

    "BIRTHDAY",

    "AND",

    "HAPPY",

    "ANV",

    "1 MONTH",

    "Naa"

];


let introIndex = 0;


/* ซ่อนหัวใจก่อน */

heart.style.opacity = "0";


function showIntroText() {

    introText.style.opacity = "0";

    introText.style.transform =
        "scale(0.85)";


    setTimeout(() => {

        introText.textContent =
            introWords[introIndex];


        introText.style.opacity =
            "1";


        introText.style.transform =
            "scale(1)";


        introIndex++;


        /*
            แต่ละคำอยู่ 3 วินาที
        */

        if (
            introIndex <
            introWords.length
        ) {

            setTimeout(
                showIntroText,
                3000
            );

        } else {

            /*
                Naa อยู่ 3 วินาที
                แล้วเปลี่ยนเป็นหัวใจ
            */

            setTimeout(() => {

                introText.style.opacity =
                    "0";


                setTimeout(() => {

                    heart.style.opacity =
                        "1";


                    heart.style.transform =
                        "translate(-50%, -50%) scale(1)";


                    /*
                        หัวใจค้างไว้ 3 วินาที
                        แล้วไปหน้าปกสมุด
                    */

                    setTimeout(
                        showBookCover,
                        3000
                    );

                }, 700);

            }, 3000);
        }

    }, 600);
}


/*
    เริ่มหลังเปิดเว็บ 1 วินาที
*/

setTimeout(
    showIntroText,
    1000
);


/* =====================================================
   BOOK COVER
===================================================== */

function showBookCover() {

    showPage("coverPage");
}


/* =====================================================
   OPEN BOOK
===================================================== */

const openBookBtn =
    document.getElementById(
        "openBookBtn"
    );

const notebook =
    document.getElementById(
        "notebook"
    );


openBookBtn.addEventListener(
    "click",
    () => {

        showPage(
            "notebookPage"
        );

        currentPage = 0;

        updateNotebook();


        /*
            เปิดสมุดแบบ Animation
        */

        setTimeout(() => {

            notebook.classList.add(
                "open"
            );

        }, 100);
    }
);


/* =====================================================
   NOTEBOOK CONTENT
===================================================== */

const leftContent =
    document.getElementById(
        "leftContent"
    );

const rightContent =
    document.getElementById(
        "rightContent"
    );

const prevBtn =
    document.getElementById(
        "prevBtn"
    );

const nextBtn =
    document.getElementById(
        "nextBtn"
    );

const closeBtn =
    document.getElementById(
        "closeBtn"
    );


const pages = [

    {

        left: `

            <h2></h2>

            <p>
                วันเกืดใครหนออ
                หมาแถวนี้รึป่าววว
                หรือจะหมูแถวนี้้
            </p>

        `,

        right: `

            <h2> </h2>

            <p>
                 ขอให้ทิชาไม่ทุกข์ มีแต่ความสุขล้นๆ
                 ยิ้มเยอะๆๆ ไม่เครียด ไม่บ่นปวดนุ้นนี้
                 กินข้าวอาร่อยทุกวันน 
                 เรียนดีๆ เกรดเริ่ดๆ ติดม4ที่อยากเข้านะะ
                 ไม่ดื้อกับพ่อแม่นะะ 
            </p>

        `
    },


    {

        left: `

            <h2>ยังไม่จบบ</h2>

            <p>
                ผู้สูงวัยขอบ่นหน่อยยย

            </p>

        `,

        right: `

            <h2> </h2>

            <p>
                วันเกิดแล้ว เปนนส.คือกุละเด้อ 
                บ่งอนหลายเด้อหล่า 
                นอนอย่าให้ดึกหลาย หัดตื่นเช้าๆแน 
                บ่บ่นคักบ่นหลาย
                มัธยัสถ์แนหล่าโทสับ ไอแพด โนตบุค สิ่พังเอาเด้อ
                😊😝🤗🤩😙
            </p>

        `
    },


    {

        left: `

            <h2></h2>

            <p>
                😙😙

            </p>

        `,

        right: `

            <h2></h2>

            <p>1 เดือนแล้ว ขอมีเดือนหน้าอีก แล้วก็อีกหลายๆเลยนะ
                รักกันไปนานๆนะะ ไปหาอะไรอร่อยกินกัน
                ไปเที่ยวกัน ไปทำอะไรแปกๆด้วยกัน
                ขอให้ทุกholidayมีกันเด้ออ
                ไม่รุ้จะพุดไรละ เปนคนอวยพรหรือพูดไรไม่ค่อยเปน
                พี่ได้เท่านี้แหละะ ถ้าดีเกินกลัวไม่มีใครเลวน่ะะ
                🤗🤗🤗🤗😝😝😝👉👈
            </p>

        `
    },


    {

        left: `

            <h2>สุดท้ายละะ</h2>

            <p>
                อันท้ายแล้วว
                ทนอ่านสักนิดนะะะ
                แล้วก็มีของแถมอีกอย่างงง
            </p>

        `,

        right: `

            <h2></h2>

            <p>
                อยากให้รู้ว่าาาา
                พี่รักทิชามากๆๆๆๆนะ
                รักแบบรักมากๆๆ
                รักที่สุดดดด
                งอนก็จะง้อตลอด 
                กุจะกวนประสาทจนปวดหัวเลย
                บางทีอาจจะไม่ได้บอกบ่อยนะะ แต่ก็รักนั้นหล่ะ
                โค้ดนี้เขียนนานมากมากมาก เป็นพันๆบรรทัด
                ตั้งใจทำมากมายย

            </p>

        `
    }

];


let currentPage = 0;


/* =====================================================
   UPDATE NOTEBOOK
===================================================== */

function updateNotebook() {

    const page =
        pages[currentPage];


    leftContent.innerHTML =
        page.left;


    rightContent.innerHTML =
        page.right;


    /*
        ปุ่มก่อนหน้า
    */

    if (currentPage === 0) {

        prevBtn.style.display =
            "none";

    } else {

        prevBtn.style.display =
            "inline-block";
    }


    /*
        ปุ่มหน้าถัดไป
    */

    if (
        currentPage ===
        pages.length - 1
    ) {

        nextBtn.style.display =
            "none";

        closeBtn.style.display =
            "inline-block";

    } else {

        nextBtn.style.display =
            "inline-block";

        closeBtn.style.display =
            "none";
    }
}


/* =====================================================
   NEXT
===================================================== */

nextBtn.addEventListener(
    "click",
    () => {

        if (
            currentPage <
            pages.length - 1
        ) {

            currentPage++;

            updateNotebook();
        }
    }
);


/* =====================================================
   PREVIOUS
===================================================== */

prevBtn.addEventListener(
    "click",
    () => {

        if (currentPage > 0) {

            currentPage--;

            updateNotebook();
        }
    }
);


/* =====================================================
   CLOSE BOOK
===================================================== */

closeBtn.addEventListener(
    "click",
    () => {

        /*
            ปิดสมุด
        */

        notebook.classList.remove(
            "open"
        );


        setTimeout(() => {

            /*
                ไปข้อความ
            */

            showPage(
                "flowerMessagePage"
            );


            /*
                ข้อความอยู่ 3 วินาที
            */

            setTimeout(() => {

                showPage(
                    "flowerPage"
                );

                startPixelFlower();

            }, 3000);

        }, 1000);
    }
);


/* =====================================================
   PIXEL FLOWER
===================================================== */

const canvas =
    document.getElementById(
        "flowerCanvas"
    );

const ctx =
    canvas.getContext("2d");


/*
    ทำให้ภาพเป็น pixel art จริง ๆ
*/

ctx.imageSmoothingEnabled =
    false;


/* -----------------------------------------------------
   Pixel drawing helper
----------------------------------------------------- */

function pixel(
    x,
    y,
    w,
    h,
    color
) {

    ctx.fillStyle = color;

    ctx.fillRect(
        x,
        y,
        w,
        h
    );
}


/* =====================================================
   DRAW PIXEL FLOWER
===================================================== */

function drawPixelFlower(
    sway = 0
) {

    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );


    /*
        ==================================
        STEMS
        ==================================
    */

    pixel(
        84 + sway,
        130,
        9,
        65,
        "#285d27"
    );

    pixel(
        94 + sway,
        145,
        8,
        50,
        "#397532"
    );

    pixel(
        72 + sway,
        145,
        8,
        42,
        "#4a8438"
    );


    /*
        ใบซ้าย
    */

    pixel(
        60 + sway,
        145,
        25,
        10,
        "#57943b"
    );

    pixel(
        48 + sway,
        137,
        20,
        10,
        "#74a948"
    );

    pixel(
        43 + sway,
        128,
        18,
        12,
        "#68a340"
    );

    pixel(
        55 + sway,
        151,
        20,
        9,
        "#376f2d"
    );


    /*
        ใบขวา
    */

    pixel(
        100 + sway,
        140,
        25,
        10,
        "#57943b"
    );

    pixel(
        117 + sway,
        130,
        20,
        11,
        "#73a949"
    );

    pixel(
        125 + sway,
        119,
        18,
        13,
        "#66a03f"
    );

    pixel(
        105 + sway,
        153,
        24,
        9,
        "#356d2b"
    );


    /*
        ==================================
        RIBBON
        ==================================
    */

    pixel(
        76 + sway,
        164,
        12,
        9,
        "#ff91c7"
    );

    pixel(
        88 + sway,
        164,
        12,
        9,
        "#ff73b8"
    );

    pixel(
        70 + sway,
        173,
        10,
        16,
        "#ff9dd0"
    );

    pixel(
        96 + sway,
        173,
        10,
        16,
        "#ff9dd0"
    );


    /*
        ==================================
        FLOWER 1
        TOP LEFT
        ==================================
    */

    drawRose(
        60 + sway,
        50,
        30
    );


    /*
        ==================================
        FLOWER 2
        TOP RIGHT
        ==================================
    */

    drawRose(
        116 + sway,
        57,
        30
    );


    /*
        ==================================
        FLOWER 3
        CENTER
        ==================================
    */

    drawRose(
        88 + sway,
        85,
        36
    );


    /*
        ==================================
        FLOWER 4
        LEFT
        ==================================
    */

    drawRose(
        45 + sway,
        88,
        27
    );


    /*
        ==================================
        FLOWER 5
        RIGHT
        ==================================
    */

    drawRose(
        130 + sway,
        94,
        25
    );
}


/* =====================================================
   ROSE
===================================================== */

function drawRose(
    cx,
    cy,
    size
) {

    const p =
        Math.max(
            4,
            Math.floor(
                size / 8
            )
        );


    /*
        ใบด้านหลัง
    */

    pixel(
        cx - p * 3,
        cy + p * 2,
        p * 2,
        p,
        "#477d31"
    );

    pixel(
        cx + p,
        cy + p * 2,
        p * 2,
        p,
        "#5d9639"
    );


    /*
        กลีบดอกหลัก
    */

    pixel(
        cx - p * 3,
        cy - p * 2,
        p * 6,
        p * 5,
        "#ff9dcc"
    );

    pixel(
        cx - p * 2,
        cy - p * 3,
        p * 4,
        p,
        "#ffc1df"
    );

    pixel(
        cx - p * 4,
        cy - p,
        p,
        p * 3,
        "#e978b2"
    );

    pixel(
        cx + p * 3,
        cy - p,
        p,
        p * 3,
        "#df6ca9"
    );


    /*
        กลีบด้านบน
    */

    pixel(
        cx - p * 2,
        cy - p * 4,
        p * 2,
        p,
        "#ffd0e6"
    );

    pixel(
        cx,
        cy - p * 3,
        p * 2,
        p,
        "#ffb8da"
    );


    /*
        กลีบด้านล่าง
    */

    pixel(
        cx - p * 2,
        cy + p * 2,
        p * 4,
        p * 2,
        "#ed7fb7"
    );


    /*
        จุดเงา
    */

    pixel(
        cx - p * 3,
        cy,
        p,
        p,
        "#d963a0"
    );

    pixel(
        cx + p * 2,
        cy + p,
        p,
        p,
        "#d85f9c"
    );


    /*
        ใจกลางดอก
    */

    pixel(
        cx - p,
        cy - p,
        p * 2,
        p,
        "#f57bb5"
    );

    pixel(
        cx - p,
        cy,
        p * 2,
        p,
        "#d95c9e"
    );

    pixel(
        cx,
        cy - p,
        p,
        p * 2,
        "#ffafd4"
    );


    /*
        ไฮไลต์
    */

    pixel(
        cx - p * 2,
        cy - p * 2,
        p,
        p,
        "#fff0f8"
    );

    pixel(
        cx + p,
        cy - p * 2,
        p,
        p,
        "#ffe5f2"
    );
}


/* =====================================================
   PIXEL FLOWER ANIMATION
===================================================== */

let flowerTime = 0;


function animateFlower() {

    flowerTime += 0.035;


    /*
        ขยับซ้ายขวาเบา ๆ
    */

    const sway =
        Math.round(
            Math.sin(flowerTime) * 2
        );


    drawPixelFlower(
        sway
    );


    requestAnimationFrame(
        animateFlower
    );
}


/* =====================================================
   START FLOWER
===================================================== */

function startPixelFlower() {

    flowerTime = 0;

    animateFlower();
}