import { fileRequest } from "./utils";

export * from "./utils";

const app = async () => {
  await fileRequest({
    user: "wesleyara",
    repo: "downgit",
    path: "package.json",
    branch: "main",
  });
};

app();
