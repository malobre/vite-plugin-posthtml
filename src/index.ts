import posthtml, {
  type Plugin as PostHTMLPlugin,
  type Options as PostHTMLOptions,
} from "posthtml";
import type { Plugin as VitePlugin } from "vite";

type Config = {
  plugins: Array<PostHTMLPlugin<unknown>>;
  options?: Omit<PostHTMLOptions, "sync" | "skipParse">;
};

export default ({ plugins, options }: Config): VitePlugin => {
  return {
    name: "@malobre/vite-plugin-posthtml",
    enforce: "pre",
    async transformIndexHtml(html) {
      return await posthtml(plugins)
        .process(html, {
          ...options,
          sync: false,
          skipParse: false,
        })
        .then(({ html }) => html);
    },
  };
};
