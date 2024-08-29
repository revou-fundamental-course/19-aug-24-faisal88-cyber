

function formValidation() {
    // Ini cara ambil DOM
    let name = document.getElementById('name').value;
    // Ini Kondisi pemisahnya
    if (name == '') {
        alert('Formnya kosong');
        return;
    } 
    
    let tgl = document.getElementById('tgl').value;
    if (tgl == '') {
        alert('Formnya kosong')
        return;
    }

    let genderElement = document.querySelector('input[name="gender"]:checked');
    if (genderElement === null) {
        alert("Jenis Kelamin harus dipilih.");
        return;
    }
    let gender = genderElement.value;

    let pesann =  document.getElementById('pesan').value;
    if (pesann == '') {
        alert('Tuliskan Pesan Anda');
        return;
    }

    document.getElementById('result').innerHTML = name;
    document.getElementById('hasil').innerHTML = tgl;
    document.getElementById("gender").innerText = gender === "Male" ? "Pria" : "Wanita";
    document.getElementById('pesanh').innerHTML = pesann;

}
 

let indexSlide = 1;
showBanner(1);

function nextSlide(n) {
    showBanner(indexSlide += n);
}

function showBanner(indexBanner) {
    let listImage = document.getElementsByClassName('banner-img');
    console.log('indexBanner:' + indexBanner);
    console.log('listImage:' + listImage.length);
    if (indexBanner > listImage.length) indexSlide = 1;

    let index = 0;
    while (index < listImage.length) {
        listImage[index].style.display = 'none';
        index++;
    }

    listImage[indexSlide - 1].style.display = 'block';
    console.log(listImage);
}