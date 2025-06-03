/**
 * Функция загрузки ресурса
 * @param link Строка-URL расположения ресурса
 * @param target Строка, указывающая где откроется новое окно:
 * - _self - страница открывается в текущей вкладке
 * - _blank - страница открывается в новой вкладке или в отдельном окне
 *
 * По умолчанию будет открыта чистая вкладка
 */
export const openExternalLink = (link: string, target = '_blank') => {
  window.open(link, target);
};

/**
 * Создание элемента-ссылки в <body> с атрибутами href (ссылка на файл) и download (имя файла при сохранении).
 * А также вызов события нажатия на созданную ссылку для скачивания файла
 * @param response Файл
 */
export const getFileFromBlob = (response: File) => {
  const fileUrl = window.URL.createObjectURL(response);
  const fileLink = document.createElement('a');

  fileLink.href = fileUrl;
  fileLink.setAttribute('download', response.name);
  document.body.appendChild(fileLink);

  fileLink.click();
};
