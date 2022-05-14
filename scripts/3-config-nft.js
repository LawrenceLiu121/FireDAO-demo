import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop("0x861f9FBA2A40E85EbDd2023b0F56113C3CEB6B0D");

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "My HeadProfile",
        description: "This NFT will give you access to FireDAO!",
        image: readFileSync("scripts/assets/IMG_7210.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();