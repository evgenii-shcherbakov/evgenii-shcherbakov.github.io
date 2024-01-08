(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/app/src_features_788238._.js", {

"[project]/src/features/core/hooks/use-http.ts (ecmascript, app)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {

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
"[project]/src/features/telegram/hooks/use-telegram.ts (ecmascript, app)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "useTelegram": ()=>useTelegram
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js (ecmascript, app)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$core$2f$hooks$2f$use$2d$http$2e$ts__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/features/core/hooks/use-http.ts (ecmascript, app)");
"__TURBOPACK__ecmascript__hoisting__location__";
var _s = __turbopack_refresh__.signature();
;
;
const useTelegram = ()=>{
    _s();
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
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useEffect"](()=>{
        try {
            Post(`/api/internal/telegram/spy-on-request`, {
                body: buildSpyBody()
            });
        } catch (e) {}
    }, []);
};
_s(useTelegram, "j8TzLthsYB2JizbPNCyrYw/ndwU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$core$2f$hooks$2f$use$2d$http$2e$ts__$28$ecmascript$29$__["useHttp"]
    ];
});

})()),
"[project]/src/features/cv/components/hoc/spy/cv-spy.tsx (ecmascript, app)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "CvSpy": ()=>CvSpy
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js (ecmascript, app)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$telegram$2f$hooks$2f$use$2d$telegram$2e$ts__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/features/telegram/hooks/use-telegram.ts (ecmascript, app)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature();
'use client';
;
const CvSpy = ()=>{
    _s();
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$telegram$2f$hooks$2f$use$2d$telegram$2e$ts__$28$ecmascript$29$__["useTelegram"]();
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["Fragment"], {}, void 0, false);
};
_s(CvSpy, "wfDszhQ41dZ6u/nssQbLagwCO1E=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$telegram$2f$hooks$2f$use$2d$telegram$2e$ts__$28$ecmascript$29$__["useTelegram"]
    ];
});
_c = CvSpy;
var _c;
__turbopack_refresh__.register(_c, "CvSpy");

})()),
}]);

//# sourceMappingURL=src_features_788238._.js.map