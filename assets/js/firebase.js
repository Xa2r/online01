const firebaseConfig = {
    apiKey: "AIzaSyBtt6TTERFjcqOyyzQyhQokeWJqj9ehM7I",
    authDomain: "my-undangan.firebaseapp.com",
    databaseURL: "https://my-undangan-default-rtdb.asia-southeast1.firebasedatabase.app/",
    projectId: "my-undangan",
    storageBucket: "my-undangan.appspot.com",
    messagingSenderId: "712338841902",
    appId: "1:712338841902:web:d5b382f0f40d1b2e4fdabf",
    measurementId: "G-533BVK7ETC"
  };

firebase.initializeApp(firebaseConfig);

var dbRef = firebase.database();
var ucapanRef = dbRef.ref('kalimantan');

ucapanRef.orderByChild("priority").on("child_added", function(snap) {
    // console.log(snap.val());
    document.querySelector('#wishes')
    .innerHTML += contactHtmlFromObject(snap.val());
});

function AddZero(num) {
    return (num >= 0 && num < 10) ? "0" + num : num + "";
}

function datenow() {
    var now = new Date();
    var strDateTime = [[AddZero(now.getDate()), 
        AddZero(now.getMonth() + 1), 
        now.getFullYear()].join("/"), 
        [AddZero(now.getHours()), 
        AddZero(now.getMinutes())].join(":"), 
        now.getHours() >= 12 ? "PM" : "AM"].join(" ");
    return strDateTime;
};

document.querySelector('#guestbook_submit_btn')
.addEventListener("click", function( event ) {  
event.preventDefault();

    ucapanRef.push({
    name: document.querySelector('#name').value,
    alamat: document.querySelector('#alamat').value,
    comment: document.querySelector('#comment').value,
    time: datenow(),
    priority: 0 - Date.now()
    });
    
    $('.guestbook_form_wrapper').html("<p class='text-center'>Terima Kasih, Anda telah memberikan ucapan</p>");
    iziToast.success({
        title: 'Berhasil',
        message: 'Pesan anda telah ditambahkan. Terimakasih!',
        position: 'bottomRight'
    });
}, false);

function contactHtmlFromObject(ucapan){
var str = ucapan.name;
var html = '';
html += '<div class="wish">';
    html += '<div class="wish-badge">';
        html += '<h6>'+ str.charAt(0) +'</h6>';
    html += '</div>';
    html += '<div class="wish-description">';
        html += '<h6 style="font-size:1.17rem;">'+ ucapan.name +'</h6>';
        html += '<p>'+ ucapan.comment +'</p>';
        html += '<small class="text-muted">'+ ucapan.time + ' dari '+ ucapan.alamat +'</small>';
    html += '</div>';
html += '</div>';
return html;
}