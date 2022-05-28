# ドラッグ&ドロップ

https://user-images.githubusercontent.com/52474650/170814160-8e9fbf96-fb31-4434-8547-c8e1279ea508.mov


## [react-beautiful-dnd](https://github.com/atlassian/react-beautiful-dnd)
``` sh
npm install react-beautiful-dnd
```

[API](https://github.com/atlassian/react-beautiful-dnd#api-%EF%B8%8F)の部分にあるが、３つのコンポーネントが必要


## Unable to find draggable with id: item-3👷‍
```
Unable to find draggable with id: item-3👷‍ This is a development only message. It will be removed in production builds.
```

のようなエラーが出ていて、ドラッグできなかった

``` react
root.render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
);
```


## [Board](https://codesandbox.io/s/ym3rvj1z71?file=/src/index.js:1107-1112)
自分でボードっぽいの作れたけど、ここでは Column から Column への移動も実現できている。。。

本格的に何か作る時はここを参考にしつつ、列間での移動を実現させたい。


## Links
- [react-beautiful-dnd](https://github.com/atlassian/react-beautiful-dnd)
- [参考にした youtube](https://www.youtube.com/watch?v=1amkEbOZM8M&ab_channel=%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9F%E3%83%B3%E3%82%B0%E3%83%81%E3%83%A5%E3%83%BC%E3%83%88%E3%83%AA%E3%82%A2%E3%83%AB)
- [horizontal example](https://codesandbox.io/s/mmrp44okvj?file=/index.js:1814-1836)
- [Board](https://codesandbox.io/s/ym3rvj1z71?file=/src/index.js:1107-1112)

