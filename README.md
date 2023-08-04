# NxMfTreeshaking




> nx run normal-app:build:production --namedChunks

✔ Browser application bundle generation complete.
✔ Copying assets complete.
✔ Index html generation complete.

Initial Chunk Files           | Names         |  Raw Size | Estimated Transfer Size
main.8e51530dbbf4a9ff.js      | main          | 113.36 kB |                32.77 kB
polyfills.59b193bf748ad1da.js | polyfills     |  33.02 kB |                10.67 kB
runtime.d33a85fc0e460bd6.js   | runtime       | 902 bytes |               507 bytes
styles.ef46db3751d8e999.css   | styles        |   0 bytes |                       -

                              | Initial Total | 147.26 kB |                43.93 kB

Build at: 2023-07-12T12:50:13.844Z - Hash: ebf3b71411a3fb9f - Time: 10655ms




> nx run mf-host:build:production --namedChunks

⠋ Generating browser application bundles (phase: setup)...    TypeScript compiler options "target" and "useDefineForClassFields" are set to "ES2022" and "false" respectively by the Angular CLI. To control ECMA version and features use the Browerslist configuration. For more information, see https://angular.io/guide/build#configuring-browser-compatibility
    NOTE: You can set the "target" to "ES2022" in the project's tsconfig to remove this warning.
✔ Browser application bundle generation complete.
✔ Copying assets complete.
✔ Index html generation complete.

Initial Chunk Files                                                                                                      | Names         |  Raw Size | Estimated Transfer Size
polyfills.4b268ae5f6b246d2.js                                                                                            | polyfills     |  44.51 kB |                13.57 kB
main.45049c8b0a7a82a7.js                                                                                                 | main          |  12.34 kB |                 3.13 kB
styles.ef46db3751d8e999.css                                                                                              | styles        |   0 bytes |                       -

                                                                                                                         | Initial Total |  56.85 kB |                16.70 kB

Lazy Chunk Files                                                                                                         | Names         |  Raw Size | Estimated Transfer Size
default-node_modules_ng-bootstrap_ng-bootstrap_fesm2022_ng-bootstrap_mjs.8f4f22c5afe1ae4d.js                             | -             | 258.48 kB |                48.31 kB
node_modules_angular_core_fesm2022_core_mjs.c753b9cca1ee37b1.js                                                          | -             | 197.85 kB |                56.47 kB
default-node_modules_angular_common_fesm2022_common_mjs.797368b2c7f32462.js                                              | -             |  61.26 kB |                15.70 kB
default-node_modules_angular_common_fesm2022_http_mjs.c49af71d17a87d52.js                                                | -             |  30.15 kB |                 8.74 kB
default-node_modules_angular_platform-browser_fesm2022_platform-browser_mjs.5b82ff8f54dd9b22.js                          | -             |  22.21 kB |                 6.22 kB
default-node_modules_rxjs_dist_esm_internal_observable_innerFrom_js-node_modules_rxjs_dist_es-f32a11.64dc60d12f3e832a.js | -             |  11.21 kB |                 3.72 kB
default-node_modules_rxjs_dist_esm_internal_BehaviorSubject_js-node_modules_rxjs_dist_esm_int-f82344.623748aa0348d7cc.js | -             |   7.52 kB |                 2.56 kB
node_modules_rxjs_dist_esm_internal_Subject_js-node_modules_rxjs_dist_esm_internal_operators_-037a73.2a65eb4e1dd1920c.js | -             |   2.61 kB |               928 bytes
default-node_modules_angular_core_fesm2022_rxjs-interop_mjs.f6469985b3b6535f.js                                          | -             |   2.35 kB |                 1.03 kB
apps_mf-host_src_bootstrap_ts.3e04313ddf467c6c.js                                                                        | bootstrap     | 717 bytes |               397 bytes
 | -             |   0 bytes |                       -
 | 22m-             |   0 bytes |                       -

Build at: 2023-07-12T12:51:04.624Z - Hash: 6f36e3fae66eaa05 - Time: 4171ms
