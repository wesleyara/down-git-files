import { describe, expect, it } from "vitest";

import { fileRequest } from "../index";

describe("resquest file", () => {
  it("should return a file", async () => {
    const file = await fileRequest({
      user: "wesleyara",
      repo: "down-git-files",
      path: "commitlint.config.js",
      branch: "main",
    });

    expect(file).toContain("module.exports = {");
  });
});
