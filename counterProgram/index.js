let cnt = 0
document.getElementById("decrease").onclick = function() {
    cnt-=1
    document.getElementById("cntLabel").innerHTML = cnt
}

document.getElementById("increase").onclick = function() {
    cnt+=1
    document.getElementById("cntLabel").innerHTML = cnt
}

document.getElementById("reset").onclick = function() {
    cnt=0
    document.getElementById("cntLabel").innerHTML = cnt
}
