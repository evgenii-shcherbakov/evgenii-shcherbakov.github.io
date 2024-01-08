module.exports = {

"[project]/src/features/telegram/messages/spy-on-request.message.ts (ecmascript, rsc)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {

__turbopack_esm__({
    "spyOnRequestMessage": ()=>spyOnRequestMessage
});
const spyOnRequestMessage = (navigator, href, authorChat)=>{
    const greeting = authorChat?.first_name ? authorChat.first_name : `@${authorChat?.username}`;
    return `
<pre>
<b>Spy on request</b> <i>${new Date().toJSON()}</i>
Hey, ${greeting}! Looks like somebody opened website...

Path: ${href}

Navigator:
<code>${JSON.stringify(navigator, null, 4)}</code>
</pre>
  `;
};

})()),
"[project]/src/features/telegram/services/telegram.service.ts (ecmascript, rsc)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {

__turbopack_esm__({
    "TelegramService": ()=>TelegramService
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$node$2d$telegram$2d$bot$2d$api$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/node-telegram-bot-api/index.js (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$telegram$2f$messages$2f$spy$2d$on$2d$request$2e$message$2e$ts__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/features/telegram/messages/spy-on-request.message.ts (ecmascript, rsc)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
class TelegramService {
    config;
    bot;
    authorChat;
    constructor(config){
        this.config = config;
        if (!config.token) {
            throw new Error('Telegram token not provided');
        }
        this.bot = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$node$2d$telegram$2d$bot$2d$api$2f$index$2e$js__$28$ecmascript$29$__["default"](config.token, {
            polling: true
        });
    }
    async spyOnRequest(navigator, href) {
        if (!this.config.authorId || !navigator || !href) {
            return;
        }
        const authorChat = await this.getAuthorChat();
        await this.bot.sendMessage(this.config.authorId, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$telegram$2f$messages$2f$spy$2d$on$2d$request$2e$message$2e$ts__$28$ecmascript$29$__["spyOnRequestMessage"](navigator, href, authorChat), {
            disable_notification: true,
            parse_mode: 'HTML'
        });
    }
    async getAuthorChat() {
        if (this.authorChat) {
            return this.authorChat;
        }
        const chat = await this.bot.getChat(this.config.authorId ?? '');
        this.authorChat = chat;
        return chat;
    }
}

})()),
"[project]/src/features/telegram/services/index.ts (ecmascript, rsc)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {

__turbopack_esm__({
    "telegramService": ()=>telegramService
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$telegram$2f$services$2f$telegram$2e$service$2e$ts__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/features/telegram/services/telegram.service.ts (ecmascript, rsc)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
console.log(process.env);
const telegramService = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$telegram$2f$services$2f$telegram$2e$service$2e$ts__$28$ecmascript$29$__["TelegramService"]({
    token: process.env.TELEGRAM_API_TOKEN ?? ("TURBOPACK compile-time value", JSON.parse('"6558629008:AAFq44Yc2CkaDY6Sva9IiLm--hYRg8tLaD8"')),
    authorId: process.env.TELEGRAM_AUTHOR_ID ?? ("TURBOPACK compile-time value", JSON.parse('"586794202"')),
    authorNickname: process.env.TELEGRAM_AUTHOR_NICKNAME ?? ("TURBOPACK compile-time value", JSON.parse('"IIPEKOLICT"'))
});

})()),
"[project]/src/app/api/internal/telegram/spy-on-request/route.ts (ecmascript, rsc)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {

__turbopack_esm__({
    "POST": ()=>POST
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$web$2f$exports$2f$next$2d$response$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/web/exports/next-response.js (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$telegram$2f$services$2f$index$2e$ts__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/features/telegram/services/index.ts (ecmascript, rsc)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
const POST = async (request)=>{
    try {
        const { navigator, href } = await request.json();
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$telegram$2f$services$2f$index$2e$ts__$28$ecmascript$29$__["telegramService"].spyOnRequest(navigator, href);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$web$2f$exports$2f$next$2d$response$2e$js__$28$ecmascript$29$__["default"].json({});
    } catch (e) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$web$2f$exports$2f$next$2d$response$2e$js__$28$ecmascript$29$__["default"].json({});
    }
};

})()),

};

//# sourceMappingURL=src_70b88b._.js.map