## Підготовка до роботи

1. Переконайтеся, що на комп'ютері встановлено LTS-версію Node.js.
   [Скачай та встанови](https://nodejs.org/en/) її якщо необхідно.
2. Встанови базові залежності проекту командою `npm install`.
3. Запусти режим розробки, виконавши команду `npm start`.
4. Перейдіть до браузера за адресою
   [http://localhost:3000](http://localhost:3000). Ця сторінка буде автоматично
   перезавантажуватись після збереження змін у файли проекту.

## Followers

Картки користувачів, за якими ми можемо слідкувати натиснувши "Follow".

<img src="/src/images/Screenshot_333.png"  width="500">

[Live site](https://team-project-pet-support.vercel.app/)

- При клікові на кнопку Follow - її текст змінюється на Following. Також
  змінюється колір кнопки. А до кількості фоловерів додається і ваш. Тобто,
  початкова кількість складає 100,500 фоловерів. При клікові на кнопку буде
  100,501.
- При оновлені сторінки фіксувється кінцевий результат дій юзера. Тобто, якщо
  клікнути по кнопці і оновити сторінку - то кнопка все рівно залишається в
  стані Following із відповідним кольором, а кількість фоловерів НЕ зменшується
  до початкового значення.
- При повторному клікові на кнопку її текст та колір змінюються до початкового
  стану. Також змінюється і кількість фоловерів. Вона зменшується на 1
  (100,500).
- В коді цифра 100,500 має бути прописана одним значенням (100500). В UI -
  виведено через кому (100,500).

## Використані технології

![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white) ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) ![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![Styled-components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)
