const strings = {
    ukr: {
        "clicktofilechoose": "Натисніть сюди, щоб обрати файл",
        "uploadfilestitle": "Завантажте свої файли",
        "filemaxsize": "Макс. розмір файлу: 128MiB",
        "doctitle": "Вивантажувач файлів",
        "fileistoobig": "Розмір файлу більше ніж 128МіБ!",
        "fileuploaded": "Файл успішно завантажено",
        "fileExists": "Файл з таким ім'ям вже завантажений!",
        "uploading": "Завантаження файлу..."
    },
    en: {
        "clicktofilechoose": "Click here to select a file",
        "uploadfilestitle": "Upload your files",
        "filemaxsize": "Max. file size: 128MiB",
        "doctitle": "File uploader",
        "fileistoobig": "File size is bigger than 128MiB!",
        "fileuploaded": "Successfully uploaded file",
        "fileExists": "File with this name already uploaded!",
        "uploading": "Uploading file..."
    }
}

const ukrlang = navigator.language.includes('ua');
const elementsToTranslate = document.querySelectorAll('[data-i18n]');

if (ukrlang) {
    elementsToTranslate.forEach(
        elem => elem.innerText = strings.ukr[elem.getAttribute('data-i18n')]
    );

    document.title = strings.ukr.doctitle;
} else {
    elementsToTranslate.forEach(
        elem => elem.innerText = strings.en[elem.getAttribute('data-i18n')]
    );

    document.title = strings.en.doctitle;
}
