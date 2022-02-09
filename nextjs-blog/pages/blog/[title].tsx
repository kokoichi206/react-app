import { GetStaticPaths, GetStaticProps } from "next";
import * as path from "path";
import * as fs from "fs";
import matter from "gray-matter";

interface Props {
  content :string;
  data: PostData;
}

interface PostData {
  title: string;
  data: string;
  spoiler: string;
}

export default function Post({ content, data }: Props) {
  return (
    <>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      {content}
    </>
  );
}

// nextがビルド時にパスを生成してくれる
export const getStaticPaths: GetStaticPaths = async () => {
  return {
    // paths: [
      // {
      //   params: {
      //     title: "post1"
      //   },
      // },
      // {
      //   params: {
      //     title: "post2"
      //   },
      // },
      // {
      //   params: {
      //     title: "post3"
      //   },
      // },
    // ],
    paths: getPostAll().map(m => ({ // gray-matterのオブジェクトのm
      params: {
        title: m.data.title
      }
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params: { title } }) => {
  const {content, data} = getPostAll().find((m) => m.data.title === title)
  return {
    props: {content, data},
  };
};

const blogDirPath = path.join("pages", "blog");

function getPostAll() {
  return fs
    .readdirSync(blogDirPath, { withFileTypes: true })
    .filter((dirEnt) => dirEnt.isDirectory())
    .flatMap((dirEnt) => {
      const dirPath = path.join(blogDirPath, dirEnt.name);
      return fs
        .readdirSync(dirPath)
        .map((fileName) => fs.readFileSync(path.join(dirPath, fileName)));
    })
    .map((f) => {
      const { orig, ...post } = matter(f);
      return post;
    });
}
