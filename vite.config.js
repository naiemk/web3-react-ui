var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import { peerDependencies } from "./package.json";
export default defineConfig({
    build: {
        lib: {
            entry: "./src/index.ts",
            name: "web3-react-ui",
            fileName: function (format) { return "index.".concat(format, ".js"); },
            formats: ["cjs", "es"]
        },
        rollupOptions: {
            external: __spreadArray([], Object.keys(peerDependencies), true)
        },
        sourcemap: true,
        emptyOutDir: true
    },
    plugins: [dts({ include: ['src'] })],
});
