// import fsharpPlugin from "../src/index.js";
// import syntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight";

// console.log(fsharpPlugin)

export default function (eleventyConfig) {

    // Add a nunjucks filter to check that it can be accessed from the .fsx file
    eleventyConfig.addNunjucksFilter(
        "now",
        function () {
            const now = new Date();
            return now.toISOString();
        }
        );

    // Set up the syntax highlighter
    // eleventyConfig.addPlugin(syntaxHighlight, {
    //     // init: function ({ Prism }) {
    //     //     // Prism.languages.fs = Prism.languages.fsharp;
    //     // }
    // });

    // eleventyConfig.addPlugin(fsharpPlugin);

    return {
        dir: {
            input: ".",
            includes: "_includes",
            output: "_site",
        },
        dataTemplateEngine: "njk",
        htmlTemplateEngine: "njk",
        markdownTemplateEngine: "njk"
    };
};
