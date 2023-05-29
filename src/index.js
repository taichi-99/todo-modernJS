import "./styles.css";

const onClickAdd = () => {
  //テキストボックスの値を所得し初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  createIncompleteList(inputText);
};
//未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

//未完了リストに追加する関数
const createIncompleteList = (text) => {
  // div生成
  const div = document.createElement("div");
  div.className = "list-row";

  //liタグ生成
  const li = document.createElement("li");
  li.innerText = text;

  // button(完了)生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    //押された完了ボタンを未完了から削除
    deleteFromIncompleteList(deleteButton.parentNode);

    //完了リストに追加する要素
    const addTarget = completeButton.parentNode;

    //TODO内容テキストを所得
    const text = addTarget.firstElementChild.innerText;

    //div以下の初期化
    addTarget.textContent = null;

    //liタグを生成
    const li = document.createElement("li");
    li.innerText = text;

    //buttonタグ生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      //押された戻すボタンの親タグを完了リストから削除
      const deleteTarget = backButton.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);

      //テキスト所得
      const text = backButton.parentNode.firstElementChild.innerText;
      createIncompleteList(text);
    });

    // button(削除)生成
    const deleteButton2 = document.createElement("button");
    deleteButton2.innerText = "削除";
    deleteButton2.addEventListener("click", () => {
      //押された削除ボタンの親divを未完了リストから削除
      deleteFromIncompleteList2(deleteButton2.parentNode);
    });

    //divタグの子要素に各要素を設定
    addTarget.appendChild(li);
    addTarget.appendChild(backButton);
    addTarget.appendChild(deleteButton2);

    //完了リストに追加
    document.getElementById("complete-list").appendChild(addTarget);
  });

  //
  const deleteFromIncompleteList2 = (addtarget) => {
    document.getElementById("complete-list").removeChild(addtarget);
  };

  // button(削除)生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    //押された削除ボタンの親divを未完了リストから削除
    deleteFromIncompleteList(deleteButton.parentNode);
  });

  //divタグの子要素に各要素を設定
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  //未完了リストに追加
  document.getElementById("incomplete-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
