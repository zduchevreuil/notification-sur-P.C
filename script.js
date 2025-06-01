Notification.requestPermission(function(){
    if(Notification.permission == "granted") {

    }else {
        console.log("La permissiona été refusée");
    }
})

// creer une notification

let notification = new Notification("Notification de ZakNox", {
    body: "cliquez ici , vous avez reçu un message",
})


// redirection qunad in click sur la notification

notification.onclick = function() {
    window.open('notification.html', '_blank');
}

// convertir cette page en APK
// Pour convertir cette page en APK, vous pouvez utiliser des outils comme Cordova ou PhoneGap.
// Ces outils vous permettent de créer des applications mobiles à partir de technologies web.