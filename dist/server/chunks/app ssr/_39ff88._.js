module.exports = {

"[project]/src/features/core/hooks/use-http.ts (ecmascript, app ssr)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {

__turbopack_esm__({
    "useHttp": ()=>useHttp
});
const useHttp = ()=>{
    const httpMethodFactory = (method)=>{
        return async (url, params)=>{
            const queryString = params?.query ? `?${new URLSearchParams(params.query).toString()}` : '';
            const bodyField = params?.body;
            const response = await fetch(url + queryString, {
                method,
                body: bodyField ? JSON.stringify(bodyField) : undefined,
                headers: {
                    'Content-type': 'application/json',
                    ...params?.headers ?? {}
                },
                signal: params?.signal
            });
            return response.json();
        };
    };
    const Get = httpMethodFactory('GET');
    const Post = httpMethodFactory('POST');
    const Patch = httpMethodFactory('PATCH');
    const Put = httpMethodFactory('PUT');
    const Delete = httpMethodFactory('DELETE');
    return {
        Get,
        Post,
        Patch,
        Put,
        Delete
    };
};

})()),
"[project]/src/features/telegram/hooks/use-telegram.ts (ecmascript, app ssr)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {

__turbopack_esm__({
    "useTelegram": ()=>useTelegram
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js (ecmascript, app ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$core$2f$hooks$2f$use$2d$http$2e$ts__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/features/core/hooks/use-http.ts (ecmascript, app ssr)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
const useTelegram = ()=>{
    const { Post } = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$core$2f$hooks$2f$use$2d$http$2e$ts__$28$ecmascript$29$__["useHttp"]();
    const buildSpyBody = ()=>{
        const userAgentData = navigator['userAgentData'];
        const connection = navigator['connection'];
        const nav = {
            appCodeName: navigator.appCodeName,
            appName: navigator.appName,
            appVersion: navigator.appVersion,
            connectionType: connection?.['effectiveType'],
            language: navigator.language,
            languages: Array.from(navigator.languages),
            platform: navigator.platform,
            product: navigator.product,
            userAgent: navigator.userAgent,
            userAgentData: {
                brands: userAgentData?.['brands']?.map((item)=>({
                        brand: item?.brand,
                        version: item?.version
                    })),
                mobile: userAgentData?.['mobile'],
                platform: userAgentData?.['platform']
            },
            vendor: navigator.vendor
        };
        return {
            navigator: nav,
            href: location.href
        };
    };
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$28$ecmascript$29$__["useEffect"](()=>{
        try {
            Post(`/api/internal/telegram/spy-on-request`, {
                body: buildSpyBody()
            });
        } catch (e) {}
    }, []);
};

})()),
"[project]/src/features/cv/components/hoc/spy/cv-spy.tsx (ecmascript, app ssr)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {

__turbopack_esm__({
    "CvSpy": ()=>CvSpy
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js (ecmascript, app ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$telegram$2f$hooks$2f$use$2d$telegram$2e$ts__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/features/telegram/hooks/use-telegram.ts (ecmascript, app ssr)");
"__TURBOPACK__ecmascript__hoisting__location__";
'use client';
;
;
const CvSpy = ()=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$telegram$2f$hooks$2f$use$2d$telegram$2e$ts__$28$ecmascript$29$__["useTelegram"]();
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["Fragment"], {}, void 0, false);
};

})()),
"[project]/node_modules/next/dist/server/future/route-modules/app-page/module.compiled.js (ecmascript, app ssr)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports }) { !function() {

"use strict";
if ("TURBOPACK compile-time falsy", 0) {
    "TURBOPACK unreachable";
} else {
    if ("TURBOPACK compile-time falsy", 0) {
        "TURBOPACK unreachable";
    } else {
        if ("TURBOPACK compile-time truthy", 1) {
            module.exports = __turbopack_external_require__("next/dist/compiled/next-server/app-page.runtime.dev.js");
        } else {
            "TURBOPACK unreachable";
        }
    }
} //# sourceMappingURL=module.compiled.js.map

}.call(this) }),
"[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js (ecmascript, app ssr)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports }) { !function() {

"use strict";
module.exports = __turbopack_require__("[project]/node_modules/next/dist/server/future/route-modules/app-page/module.compiled.js (ecmascript, app ssr)").vendored["react-ssr"].React; //# sourceMappingURL=react.js.map

}.call(this) }),
"[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js (ecmascript, app ssr)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports }) { !function() {

"use strict";
module.exports = __turbopack_require__("[project]/node_modules/next/dist/server/future/route-modules/app-page/module.compiled.js (ecmascript, app ssr)").vendored["react-ssr"].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map

}.call(this) }),

};

//# sourceMappingURL=_39ff88._.js.map