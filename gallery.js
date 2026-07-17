const modal = document.querySelector(".media-modal");
const viewer = document.querySelector(".media-viewer");

const titleEl = document.querySelector(".media-title");
const descEl = document.querySelector(".media-desc");
const closeBtn = document.querySelector(".media-close");

/* folder data */
const folders = {
    1: {
        title: "𝟐𝟎𝟐𝟐 𝒀𝒆𝒂𝒓 𝑬𝒏𝒅 𝑷𝒂𝒓𝒕𝒚",
        desc: "𝟓 𝒑𝒉𝒐𝒕𝒐𝒔 | 𝟎 𝒗𝒊𝒅𝒆𝒐",
        items: [
            { type: "image", src: "gallery/01/01.jpg" },
            { type: "image", src: "gallery/01/02.jpg" },
            { type: "image", src: "gallery/01/03.jpg" },
            { type: "image", src: "gallery/01/04.jpg" },
            { type: "image", src: "gallery/01/05.jpg" }
        ]
    },
    2: {
        title: "𝑩𝒖𝒅 𝑴𝒆𝒎𝒐𝒓𝒊𝒆𝒔",
        desc: "𝟏𝟑 𝒑𝒉𝒐𝒕𝒐𝒔 | 𝟐 𝒗𝒊𝒅𝒆𝒐",
        items: [
            { type: "image", src: "gallery/02/01.jpg" },
            { type: "image", src: "gallery/02/02.jpg" },
            { type: "image", src: "gallery/02/03.jpg" },
            { type: "image", src: "gallery/02/04.jpg" },
            { type: "image", src: "gallery/02/05.jpg" },
            { type: "image", src: "gallery/02/06.jpg" },
            { type: "image", src: "gallery/02/07.jpg" },
            { type: "image", src: "gallery/02/08.jpg" },
            { type: "image", src: "gallery/02/09.jpg" },
            { type: "image", src: "gallery/02/10.jpg" },
            { type: "image", src: "gallery/02/11.jpg" },
            { type: "image", src: "gallery/02/12.jpg" },
            { type: "image", src: "gallery/02/13.jpg" },
            {   
                type: "video",
                src: "gallery/02/14.mp4",
                thumbnail: "gallery/02/14.png"
            },{
                type: "video",
                src: "gallery/02/15.mp4",
                thumbnail: "gallery/02/15.png"
            }
        ]
    },
    3: {
        title: "𝑬𝒈𝒈𝒚 𝑷𝒂𝒓𝒕𝒚",
        desc: "𝟖 𝒑𝒉𝒐𝒕𝒐𝒔 | 𝟒 𝒗𝒊𝒅𝒆𝒐",
        items: [
            { type: "image", src: "gallery/03/01.webp" },
            { type: "image", src: "gallery/03/02.webp" },
            { type: "image", src: "gallery/03/03.webp" },
            { type: "image", src: "gallery/03/04.webp" },
            { type: "image", src: "gallery/03/05.webp" },
            { type: "image", src: "gallery/03/06.webp" },
            { type: "image", src: "gallery/03/07.webp" },
            { type: "image", src: "gallery/03/08.webp" },
            {
                type: "video",
                src: "gallery/03/09.mp4",
                thumbnail: "gallery/03/09.png"
            },{
                type: "video",
                src: "gallery/03/10.mp4",
                thumbnail: "gallery/03/10.png"
            },{
                type: "video",
                src: "gallery/03/11.mp4",
                thumbnail: "gallery/03/11.png"
            },{
                type: "video",
                src: "gallery/03/12.mp4",
                thumbnail: "gallery/03/12.png"
            }

        ]
    },
    4: {
        title: "𝑴𝒊𝒏𝒆𝒄𝒓𝒂𝒇𝒕",
        desc: "𝟖 𝒑𝒉𝒐𝒕𝒐𝒔 | 𝟏 𝒗𝒊𝒅𝒆𝒐",
        items: [
            { type: "image", src: "gallery/04/01.webp" },
            { type: "image", src: "gallery/04/02.jpg" },
            { type: "image", src: "gallery/04/03.jpg" },
            { type: "image", src: "gallery/04/04.webp" },
            { type: "image", src: "gallery/04/05.webp" },
            { type: "image", src: "gallery/04/06.png" },
            { type: "image", src: "gallery/04/07.png" },
            { type: "image", src: "gallery/04/08.png" },
            {
                type: "video",
                src: "gallery/04/09.mp4",
                thumbnail: "gallery/04/09.png"
            }
        ]
    },
    5: {
        title: "𝑹𝒐𝒃𝒍𝒐𝒙",
        desc: "𝟖 𝒑𝒉𝒐𝒕𝒐𝒔 | 𝟎 𝒗𝒊𝒅𝒆𝒐",
        items: [
            { type: "image", src: "gallery/05/01.png" },
            { type: "image", src: "gallery/05/02.png" },
            { type: "image", src: "gallery/05/03.png" },
            { type: "image", src: "gallery/05/04.png" },
            { type: "image", src: "gallery/05/05.png" },
            { type: "image", src: "gallery/05/06.png" },
            { type: "image", src: "gallery/05/07.png" },
            { type: "image", src: "gallery/05/08.png" }
        ]
    },
    6: {
        title: "𝑯𝒆𝒂𝒓𝒕𝒐𝒑𝒊𝒂",
        desc: "𝟔 𝒑𝒉𝒐𝒕𝒐𝒔 | 𝟎 𝒗𝒊𝒅𝒆𝒐",
        items: [
            { type: "image", src: "gallery/06/01.jpg" },
            { type: "image", src: "gallery/06/02.jpg" },
            { type: "image", src: "gallery/06/03.jpg" },
            { type: "image", src: "gallery/06/04.jpg" },
            { type: "image", src: "gallery/06/05.jpg" },
            { type: "image", src: "gallery/06/06.jpg" }
        ]
    },
    7: {
        title: "𝑹𝒐𝒃𝒍𝒐𝒙",
        desc: "𝟏 𝒑𝒉𝒐𝒕𝒐𝒔 | 𝟎 𝒗𝒊𝒅𝒆𝒐",
        items: [
            { type: "image", src: "gallery/07/01.png" }
        ]
    }
};

document.querySelectorAll(".gallery-folder").forEach(folder => {

    folder.addEventListener("click", () => {

        const key = folder.dataset.folder; // 👈 gets bud / eggy / etc
        const data = folders[key];

        if (!data) return;

        titleEl.textContent = data.title;
        descEl.textContent = data.desc;

        viewer.innerHTML = "";

        data.items.forEach(media => {

            if (media.type === "image") {
                viewer.innerHTML += `<img src="${media.src}">`;
            }

            if (media.type === "video") {
                viewer.innerHTML += `
                    <img
                        class="video-thumbnail"
                        src="${media.thumbnail}"
                        data-video="${media.src}"
                        alt="Video Thumbnail"
                    >
                `;
            }

        });

        modal.classList.add("open");
        document.documentElement.classList.add("no-scroll");
        document.body.classList.add("no-scroll");
    });

});

/* close */
closeBtn.addEventListener("click", () => {
    modal.classList.remove("open");
    document.documentElement.classList.remove("no-scroll");
    document.body.classList.remove("no-scroll");
    viewer.innerHTML = "";
});

/* click outside optional */
modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.classList.remove("open");
        document.documentElement.classList.remove("no-scroll");
        document.body.classList.remove("no-scroll");
        viewer.innerHTML = "";
    }
});

const preview = document.querySelector(".media-preview");
const previewImg = document.querySelector(".preview-img");
const previewVideo = document.querySelector(".preview-video");
const previewClose = document.querySelector(".preview-close");

/* Open image/video preview */
document.addEventListener("click", (e) => {

    // IMAGE
    if (e.target.tagName === "IMG" &&
        e.target.closest(".media-viewer") &&
        !e.target.dataset.video) {

        previewImg.src = e.target.src;
        previewImg.style.display = "block";

        previewVideo.pause();
        previewVideo.removeAttribute("src");
        previewVideo.load();
        previewVideo.style.display = "none";

        preview.classList.add("open");
    }

    // VIDEO THUMBNAIL
    if (e.target.dataset.video) {

        previewImg.style.display = "none";
        previewImg.src = "";

        previewVideo.src = e.target.dataset.video;
        previewVideo.style.display = "block";

        preview.classList.add("open");

        previewVideo.onloadeddata = () => {
            previewVideo.play();
        };

    }

});

/* close viewer */
previewClose.addEventListener("click", () => {

    preview.classList.remove("open");

    previewImg.src = "";

    previewVideo.pause();
    previewVideo.removeAttribute("src");
    previewVideo.load();

});

/* click outside image */
preview.addEventListener("click", (e) => {

    if (e.target === preview) {

        preview.classList.remove("open");

        previewImg.src = "";

        previewVideo.pause();
        previewVideo.removeAttribute("src");
        previewVideo.load();

    }

});