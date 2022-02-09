## command
``` sh
$ npx create-next-app
$ cd create-next-app
$ yarn dev
```

### ts の導入
1. tsconfig.json を作成
2. yarn add -D typescript @types/react @types/node
3. tsconfig.json の一番上に、"baseUrl": ".", を加える

``` json
{
  "compilerOptions": {
    "baseUrl": ".",
    "target": "es5",
    "lib": [
```

### eslint の導入
npx eslint --init

1. problems
1. JavaScript modules (import/export)
1. ...
1. Browser
1. JavaScript

.eslintrc.js の rules に以下を記述, settings もついか

```
 "rules": {
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/ba-ts-comment": "off",
        "react/react-in-jsx-scope": "off"
    },
    "settings": {
        "react": {
            "version": "detect"
        }
    }
```

yarn lint

#### prettier 導入
yarn add -D prettier eslint-plugin-prettier eslint-config-prettier

```
yarn lint --fix
```

### md のため：mdx
```
yarn add next-mdx-remote gray-matter
```

gray-matter: md のメタ情報をパース

#### memo
- [next-mdx-remoteはv2->v3で大きな変化があったらしい](https://github.com/hashicorp/next-mdx-remote/releases/tag/3.0.0)

### Tips
- dev の方だとホットリロードがかかるので、yarn dev とかの方がいい
- [絵文字画像データ](https://emojipedia.org/)
- nextはクライアントとサーバーサイドを同じファイルに書くようになっている
    - 余計なコードはクライアント側に入らないような工夫

### 疑問
- jsx?

