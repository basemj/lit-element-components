import typescript from '@rollup/plugin-typescript';
import resolve from "@rollup/plugin-node-resolve";
import { terser } from "rollup-plugin-terser";
import { babel } from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';

export default [
  {
    input: 'src/index.ts',
    output: {
      file: 'cjs/index.js',
      format: 'cjs',
      exports: 'default',
      sourcemap: true,
    },
    plugins: [
      typescript({ tsconfig: './tsconfig-cjs.json' }),
      babel({
        presets: [['@babel/preset-env', { targets: { ie: 11 } }]],
        babelHelpers: 'bundled'
      }),
      resolve(),
      terser(),
    ]
  },
  {
    input: 'src/babel-polyfills-nomodule.ts',
    output: {
      file: 'babel-polyfills-nomodule.js',
      format: 'iife',
    },
    plugins: [
      commonjs({ include: ['node_modules/**'] }),
      resolve(),
      terser(),
    ],
  },
  {
    input: 'src/index.ts',
    output: {
      file: 'esm/index.js',
      format: 'esm',
      sourcemap: true,
    },
    plugins: [
      typescript({ tsconfig: './tsconfig.json' }),
      resolve(),
      terser(),
    ]
  }
];