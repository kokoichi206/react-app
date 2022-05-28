# ドラッグ&ドロップ

[参考にした youtube](https://www.youtube.com/watch?v=1amkEbOZM8M&ab_channel=%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9F%E3%83%B3%E3%82%B0%E3%83%81%E3%83%A5%E3%83%BC%E3%83%88%E3%83%AA%E3%82%A2%E3%83%AB)

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

