var n="java scripting"

// BT1
document.write("<h4>BT1</h4>  <br> ")
function ucFirst(n) {
    var splitn = n.toLowerCase().split(" ");
    // tạo chuỗi mới viết thường tất cả và lấy only "kí tự" trừ "chỗ trống"
    // ==> ['java', 'scripting']
    for (var i = 0; i < splitn.length; i++) {//xét phần tử trong chuỗi mới là ư phần tử "java" và "scripting"

        splitn[i] = splitn[i].charAt(0).toUpperCase() + splitn[i].substring(1);     
        //
       // console.log(splitn[i].charAt(0).toUpperCase()); ==> "J" và "S"
       // console.log(splitn[i].substring(1));==> "ava" và "cripting"
    }
    
    return splitn.join(" "); // hàm này sẽ sẽ nối các phần tử của mảng thành một chuỗi
                            //"J"+"ava" "S"+"cripting"
 }
 document.write(ucFirst(n));
 
// BT2
document.write("<h4>BT2</h4>  <br> ")
document.write(n.replace(/a/g,"4").replace(/c/g,"3").replace(/i/g,"2").trim());
document.write(" <br>")
// BT3
document.write("<h4>BT3</h4>  <br> ")
    if(n.length>=3){
        if(n.slice(-3)=="ing"){
            document.write(n.slice(0,-3)+"ly");
        }
        else{
            document.write(n+"ing");
        }
    }else{
        document.write(n);
    }


