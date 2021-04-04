const init = () => {
    let sources = [];
    let targets = [];
    const selectedColor = document.getElementById("selected");
    selectedColor.style.backgroundColor = "black";
    const COLORS = Object.values(COLOR_NAMES);
    const px = "px";

    const copyColor = (b, a) => {
        b.style.backgroundColor = a.style.backgroundColor
    }

    const buildSources = () => {
        const size = 12;
        const width = size;
        const height = size;
        for (let y = 0; y < height; y++) {
            for (let x = 0; x < width; x++) {
                let d = document.createElement("div");
                d.style.left = (x * 16) + px;
                d.style.top = (y * 16) + px;
                d.style.backgroundColor = COLORS[(y * width) + x];
                d.addEventListener("click", e => {
                    copyColor(selectedColor, e.target)
                });
                sources.push(d)
            }
        }
        return sources;
    }
    buildSources().map((n) => document.getElementById("sources").appendChild(n));

    const buildTargets = () => {
        const size = 16;
        const width = size;
        const height = size;
        let down = false;
        for (let y = 0; y < height; y++) {
            for (let x = 0; x < width; x++) {
                let d = document.createElement("div");
                d.style.left = (x * size) + px;
                d.style.top = (y * size) + px;
                d.style.backgroundColor = "grey";
                d.addEventListener("click", e => {
                    copyColor(e.target, selectedColor)
                });
                d.addEventListener("mousedown", e => {
                    down = true;
                });
                d.addEventListener("mouseup", e => {
                    down = false;
                });
                d.addEventListener("mousemove", e => {
                    if (down) {
                        copyColor(e.target, selectedColor)
                    }
                });
                targets.push(d)
            }
        }
        return targets;
    }
    buildTargets().map((n) => document.getElementById("targets").appendChild(n));

}
document.addEventListener("DOMContentLoaded", init)
