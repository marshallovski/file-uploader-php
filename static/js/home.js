const fileInput = document.getElementById('fileInput');
const fileSize = document.getElementById('dropform_uploadedsize');
const inputTrigger = document.getElementById('dropform_fileinputTrigger');

inputTrigger.onclick = () => fileInput.click();
fileInput.onchange = async () => await uploadFile();

async function uploadFile() {
    document.querySelector('.msgbox').hidden = true;
    document.querySelector('.form-container').style.marginTop = '20%';

    if (fileInput.files[0].size > 128217728) {
        document.querySelector('.form-container').style.marginTop = '20px';
        document.querySelector('.msgbox').innerText = ukrlang ? strings.ukr.fileistoobig : strings.en.fileistoobig;
        document.querySelector('.msgbox').classList.add('errbox');
        document.querySelector('.msgbox').hidden = false;
        fileInput.value = '';
        return;
    }

    document.querySelector('.msgbox').classList.remove('errbox');
    document.querySelector('.msgbox').innerText = ukrlang ? strings.ukr.uploading : strings.en.uploading;
    document.querySelector('.msgbox').hidden = false;
    document.getElementById('dropform_submitbtn').click();

    // https://developer.mozilla.org/en-US/docs/Web/API/File_API/Using_files_from_web_applications#example_showing_files_size
    let numberOfBytes = 0;
    for (const file of fileInput.files) {
        numberOfBytes += file.size;
    }

    const units = [
        "B",
        "KiB",
        "MiB",
        "GiB",
        "TiB",
        "PiB",
        "EiB",
        "ZiB",
        "YiB",
    ];

    const exponent = Math.min(
        Math.floor(Math.log(numberOfBytes) / Math.log(1024)),
        units.length - 1
    );

    const approx = numberOfBytes / 1024 ** exponent;
    const output =
        exponent === 0
            ? `${numberOfBytes} B`
            : `${approx.toFixed()} ${units[exponent]}`;

    fileSize.innerText = output;
    fileSize.hidden = false;
}

const urlmsg = new URLSearchParams(location.search).get('message');

switch (urlmsg) {
    case 'fileExists':
        document.querySelector('.msgbox').classList.add('errbox');
        document.querySelector('.msgbox').innerText = ukrlang ? strings.ukr.fileExists : strings.en.fileExists;
        document.querySelector('.msgbox').hidden = false;
        break;

    case 'uploaded':
        document.querySelector('.msgbox').innerText = ukrlang ? strings.ukr.fileuploaded : strings.en.fileuploaded;
        document.querySelector('.msgbox').hidden = false;
        break;

    default:
        break;
}