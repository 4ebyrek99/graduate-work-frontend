import ru from "~/locale/ru.js"
import en from "~/locale/en.js"
import kk from "~/locale/kk.js"

// eslint-disable-next-line no-undef
export default defineI18nConfig(() => ({
    legacy: false,
    locale: "ru",
    fallbackLocale: "ru",
    messages: {
        ru,
        en,
        kk
    }
}))