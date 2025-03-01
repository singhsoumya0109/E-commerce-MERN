import Product from "../models/product.model.js"
export const getAllProducts = async (requestAnimationFrame, res) => {
    try {
        const products = await Product.find({});
        res.json({ products });
    }
    catch (error) {
        console.log("Error in getAllProducts controller", error.message);
        res.status(500).json({ message: "Server error", error: error.message });
    }
};



export const getFeauturedProducts = async (req, res) => {
    try {
        let feauturedProducts = await redis.get("featured_prodcuts");

        if (feauturedProducts) {
            return res.json(JSON.parse(feauturedProducts));
        }

        feauturedProducts = await Product.find({ isFeatured: true }).lean();
        if (!feauturedProducts) {
            return res.status(404).json({ message: "No feautured products" });
        }

        await redis.set("featured_products", JSON.stringify(feauturedProducts));
        res.json(feauturedProducts);
    } catch (error) {
        console.log("error in getFeaturedProducts controller", error.message);
        res.status(500).json({ message: "Server error", error: error.message });
    }
};