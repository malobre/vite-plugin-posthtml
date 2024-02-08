import posthtml, {
  type Plugin as PostHTMLPlugin,
  type Options as PostHTMLOptions,
} from "posthtml";
import { type Plugin as VitePlugin } from "vite";

type Config = {
  plugins: Array<PostHTMLPlugin<unknown>>;
  options?: Pick<PostHTMLOptions, "parser" | "render">;
};

export default ({ plugins, options }: Config): VitePlugin => {
  return {
    name: "@malobre/vite-plugin-posthtml",
    enforce: "pre",
    transformIndexHtml: (html) =>
      posthtml(plugins)
        .process(html, {
          ...options,
          sync: false,
          skipParse: false,
        })
        .then((r) => r.html),
  };
};
