import type {BuildOptions} from 'esbuild';

export default {
    bundle           : true,
    entryPoints      : ['lambda/index.ts'],
    format           : 'esm',
    keepNames        : true,
    loader           : {'.css': 'text', '.html': 'text'},
    logLevel         : 'info',
    minifyIdentifiers: false,
    minifySyntax     : true,
    minifyWhitespace : true,
    outdir           : 'dist/lambda',
    platform         : 'node',
    sourcemap        : true,
    sourcesContent   : false,
    target           : 'node24.10',
} satisfies BuildOptions;
