import MarkdownIt from "markdown-it";

const md = new MarkdownIt({ html: true });

export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets/js");
  eleventyConfig.addPassthroughCopy("src/assets/css/*.css");
  eleventyConfig.addPassthroughCopy("src/CNAME");

  eleventyConfig.addFilter("markdownify", (value) => md.render(value || ""));
  eleventyConfig.addFilter("markdownifyInline", (value) => md.renderInline(value || ""));

  eleventyConfig.addFilter("absoluteUrl", (path, base) => {
    try {
      return new URL(path, base).href;
    } catch {
      return path;
    }
  });

  eleventyConfig.addFilter("whatsappDigits", (phone) => (phone || "").replace(/[^\d]/g, ""));

  eleventyConfig.addFilter("objectValues", (obj) => Object.values(obj || {}).filter(Boolean));

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data",
    },
    templateFormats: ["njk", "md"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
}
