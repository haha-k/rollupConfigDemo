/*
 * @Author: keke
 * @Date: 2022-11-15 01:06:21
 * @LastEditors: keke
 * @LastEditTime: 2022-11-24 01:49:07
 * @Description: 
 */
import babel from 'rollup-plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser'

export default {
    input: 'src/main.js',
    output: {
        file: 'dist/bundle.js',
        format: 'iife', // 五种输出格式：amd /  es6 / iife / umd / cjs
        name: 'a',
    },
    plugins: [
        resolve(),
        commonjs(),
        typescript(),
        terser(),
        babel({})
    ],
    external: ['lodash']
}
