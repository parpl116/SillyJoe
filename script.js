async function sha256Hash(input) {
    const encoder = new TextEncoder();
    const data = encoder.encode(input);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(byte => byte.toString(16).padStart(2, '0')).join('');
    return hashHex;
}

async function Submit() {
    var value = document.getElementById("input").value;
    var hash = await sha256Hash(value)
    if (hash === "0dc394fe8eddaedfdc65d6ee68a6a5ceecc84738bfe9817fb529264f03ae1940") {
        document.getElementById("block").style.display = "none";
        document.getElementById("block2").style.display = "none";
        document.getElementById("block3").style.display = "block";
        document.getElementById("winning").innerHTML = "Text me on Instagram @parpl_116 that u got it! Good job!";
    }
    
}