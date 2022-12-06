import axios from "axios";
import fs from "fs";

interface IFileRequestProps {
  user: string;
  repo: string;
  path: string;
  branch: string;
  file?: string;
}

export const fileRequest = async ({
  user,
  repo,
  path,
  branch,
  file,
}: IFileRequestProps) => {
  const response = await axios.get(
    `https://api.github.com/repos/${user}/${repo}/contents/${path}?ref=${branch}`,
  );

  const data = await response.data;

  const content = Buffer.from(data.content, "base64").toString("utf-8");

  if (file) {
    fs.writeFileSync(file, content);
    return content;
  }

  return content;
};
