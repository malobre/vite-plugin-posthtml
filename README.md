# `@malobre/vite-plugin-posthtml`

## Usage

1. Install 
    ```shell
    npm install --save-dev @malobre/vite-plugin-posthtml
    ```
1. Add plugin to your vite config
    ```js
    import { defineConfig } from 'vite'
    import posthtml from '@malobre/vite-plugin-posthtml'

    export default defineConfig({
      plugins: [posthtml(
        plugins: [/* postHTML plugins*/],
        options: {
          // postHTML options, see:
          // https://github.com/posthtml/posthtml/blob/v0.16.6/docs/core.md#posthtml-options
        }
      )],
    })
   ```
