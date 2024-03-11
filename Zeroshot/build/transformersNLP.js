export default class TransformersNLP {
    async zeroShotClassification(text, labels) {
        try {
            const { pipeline } = await import("@xenova/transformers");
            const classifier = await pipeline("zero-shot-classification", 
            // "Xenova/mobilebert-uncased-mnli",
            "Xenova/nli-deberta-v3-xsmall");
            const output = await classifier(text, labels, { multi_label: true });
            return output;
        }
        catch (error) {
            throw error;
        }
    }
    async translation(text) {
        try {
            const { pipeline } = await import("@xenova/transformers");
            const translator = await pipeline("translation", "Xenova/m2m100_418M");
            const config = {
                src_lang: "es",
                tgt_lang: "en",
            };
            const output = await translator(text, config);
            return output;
        }
        catch (error) {
            throw error;
        }
    }
}
