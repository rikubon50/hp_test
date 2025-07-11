// 仮データ（実際はJSONなどでもOK）
const playerDetails = {
  player1: {
    name: "選手A",
    photo: "img/flower.png",
    comment: "「チームを勝利に導きます！」",
    details: "出身高校: 青学高校<br>出身スポーツ: サッカー<br>学部: 法学部法律学科<br>役職: 主将"
  },
  player2: {
    name: "選手B",
    photo: "img/flower.png",
    comment: "「最後まで走り切ります！」",
    details: "出身高校: ◯◯高校<br>出身スポーツ: 野球<br>学部: 経済学部"
  },
  player3: {
    name: "選手C",
    photo: "img/flower.png",
    comment: "「堅実なディフェンスを心がけます！」",
    details: "出身高校: △△高校<br>出身スポーツ: バスケ<br>学部: 経営学部<br>役職: 副将"
  },
  player4: {
    name: "選手D",
    photo: "img/flower.png",
    comment: "「最後の砦になります！」",
    details: "出身高校: □□高校<br>出身スポーツ: ラグビー<br>学部: 教育学部"
  },
  player5: {
    name: "選手E",
    photo: "img/flower.png",
    comment: "「全力で挑みます！」",
    details: "出身高校: ××高校<br>出身スポーツ: テニス<br>学部: 商学部"
  },
  player6: {
    name: "選手F",
    photo: "img/flower.png",
    comment: "「攻守両面で貢献します！」",
    details: "出身高校: △△高校<br>出身スポーツ: バレーボール<br>学部: 理工学部"
  }
};

// クリックイベント
document.querySelectorAll('.player-card').forEach(card => {
  card.addEventListener('click', () => {
    const playerId = card.getAttribute('data-player-id');
    const data = playerDetails[playerId];

    if (data) {
      document.getElementById('modal-player-details').innerHTML = `
        <img src="${data.photo}" alt="${data.name}" class="modal-player-photo">
        <h3>${data.name}</h3>
        <p class="player-comment">${data.comment}</p>
        <div class="player-extra">${data.details}</div>
      `;

      document.getElementById('player-modal').style.display = 'block';
    }
  });
});

// モーダルを閉じる
document.querySelector('.close-button').addEventListener('click', () => {
  document.getElementById('player-modal').style.display = 'none';
});