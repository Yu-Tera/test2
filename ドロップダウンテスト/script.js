// 枠組みデータ
const data = {
    tank: ["戦士", "ナイト", "暗黒騎士", "ガンブレイカー"],
    healer: ["占星術師", "学者", "白魔導士", "賢者"],
    dps1: ["侍", "モンク"],
    dps2: ["リーパー", "竜騎士"],
    dps3: ["忍者", "ヴァイパー"],
    range: ["吟遊詩人", "機工士", "踊り子"],
    caster: ["召喚士", "赤魔導士", "ピクトマンサー", "黒魔導士"]
};

// 各装備部位ごとのダミーデータ
const itemData = ["アイテム1", "アイテム2", "アイテム3", "アイテム4"];

const categorySelect = document.getElementById("category");
const jobSelect = document.getElementById("job");
const itemsDiv = document.getElementById("items");
const parts = ["head", "body", "hands", "legs", "feet", "ears", "neck", "wrists", "rings"];

// 大きな枠選択時
categorySelect.addEventListener("change", () => {
    const category = categorySelect.value;
    jobSelect.innerHTML = '<option value="">--職業を選択--</option>';
    jobSelect.disabled = !category;

    if (category) {
        data[category].forEach(job => {
            const option = document.createElement("option");
            option.value = job;
            option.textContent = job;
            jobSelect.appendChild(option);
        });
    }
});

// 職業選択時
jobSelect.addEventListener("change", () => {
    const job = jobSelect.value;
    itemsDiv.style.display = job ? "block" : "none";

    if (job) {
        parts.forEach(part => {
            const select = document.getElementById(part);
            select.innerHTML = '';
            itemData.forEach(item => {
                const option = document.createElement("option");
                option.value = item;
                option.textContent = item;
                select.appendChild(option);
            });
        });
    }
});
