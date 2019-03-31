const fs = require("fs");
const palette = require("./colors");
const generateTheme = require("./theme");
(async function() {
    Object.values(palette).map(async theme => {
        const mono = await generateTheme(theme);
        const data = await JSON.stringify(mono);
        fs.writeFileSync(`Lomokai${theme.mod}.theme.json`, data);
    });
})();
