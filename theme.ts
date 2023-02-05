import { buildLegacyTheme } from "sanity";


const props = {
    "--my-white": "#fff",
    "--my-black": "#1a1a1a",
    "--my-red": "#ff0000",
    "--my-blue": "#0000ff",
    "--my-green": "#00ff00",
    "--my-yellow": "#ffff00",
    "--my-orange": "#ffa500",
    "--my-purple": "#800080",
};

export const theme = buildLegacyTheme({
    "--black": props["--my-black"],
    "--white": props["--my-white"],

    "--gray": "#f7f7f7",
})