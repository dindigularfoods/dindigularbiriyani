import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

// Define the path to your sovereign data store
const dataPath = path.join(process.cwd(), "src/data/shops.json");

/**
 * GET: Fetches the current footprint data
 * Resolves the 405 error by allowing the browser to read the JSON file
 */
export async function GET() {
    try {
        // Check if directory exists, if not create it
        const dir = path.dirname(dataPath);
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
        }

        // Check if file exists, if not return an empty shops array
        if (!fs.existsSync(dataPath)) {
            return NextResponse.json({ shops: [] });
        }

        const jsonData = fs.readFileSync(dataPath, "utf8");
        return NextResponse.json(JSON.parse(jsonData));
    } catch (error) {
        console.error("API GET Error:", error);
        return NextResponse.json({ shops: [] }, { status: 500 });
    }
}

/**
 * POST: Updates the sovereign data store
 * Saves changes made from the Admin Console
 */
export async function POST(request: Request) {
    try {
        const body = await request.json();
        
        // Ensure directory exists before writing
        const dir = path.dirname(dataPath);
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
        }

        fs.writeFileSync(dataPath, JSON.stringify(body, null, 2), "utf8");
        return NextResponse.json({ message: "Sovereign data synchronized" });
    } catch (error) {
        console.error("API POST Error:", error);
        return NextResponse.json({ error: "Failed to sync data" }, { status: 500 });
    }
}