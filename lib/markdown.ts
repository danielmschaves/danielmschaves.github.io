import { readFile } from "fs/promises";
import path from "path";

export async function getReadmeContent(projectId: string): Promise<string | null> {
  try {
    const readmePath = path.join(process.cwd(), "readme", `${projectId}.md`);
    const content = await readFile(readmePath, "utf-8");
    return content;
  } catch (error) {
    // File doesn't exist or can't be read - return null
    return null;
  }
}

