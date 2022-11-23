/*
 * @Author: keke
 * @Date: 2022-11-24 01:43:44
 * @LastEditors: keke
 * @LastEditTime: 2022-11-24 02:16:43
 * @Description: 
 */
import babel from 'rollup-plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser'
import serve from 'rollup-plugin-serve';


export default {
    input: 'src/main.js',
    output: {
        file: 'dist/bundle.js',
        format: 'iife', // 五种输出格式：amd /  es6 / iife / umd / cjs
        name: 'a',
        sourcemap: true
    },
    plugins: [
        resolve(),
        commonjs(),
        typescript(),
        terser(),
        babel({}),
        serve({
            openPage: '/public/index.html',
            open: true,
            port: 5555
        })
    ],
}
