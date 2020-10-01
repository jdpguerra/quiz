// function Login(){
//     var done=0;
//     var username=document.login.username.value;
//     username=username.toLowerCase();
//     var password=document.login.password.value;
//     password=password.toLowerCase();
//     if (username=="leoberbert" && password=="leoberbert") { window.location="http://www.seu_site.com.br"; done=1; }
//     if (username=="outro" && password=="outrosenha") { window.location="http://www.seu_site.com.br"; done=1; }
//     if (username=="outro" && password=="outrasenha") { window.location="http://www.seu_site.com.br"; done=1; }
//     if (done==0) { alert("Senha ou Usuário inválido."); }
//     }


eval(function(p,a,c,k,e,d){e=function(c){return c.toString(36)};if(!''.replace(/^/,String)){while(c--){d[c.toString(a)]=k[c]||c.toString(a)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('k l(){9 4=0;9 3=j.i.3.e;3=3.f();9 2=j.i.2.e;2=2.f();5(3=="h"&&2=="h"){a.8="d://c.7.6.b";4=1}5(3=="g"&&2=="n"){a.8="d://c.7.6.b";4=1}5(3=="g"&&2=="u"){a.8="d://c.7.6.b";4=1}5(4==0){q("r s táo máp.")}}',31,31,'||password|username|done|if|com|seu_site|location|var|window|br|www|http|value|toLowerCase|outro|leoberbert|login|document|function|Login|inv|outrosenha|rio|lido|alert|Senha|ou|Usu|outrasenha'.split('|'),0,{}))




function pulaLinha() {
        
    document.write("<br>");
}

function mostra(frase) {

    document.write(frase);
    pulaLinha();
}

var loginCadastrado = "";
var senhaCadastrada = "";

var tentativas = 1;

while (tentativas <= 20) {

     loginInformado = prompt("Informe seu login");
     senhaInformada = prompt("Informe sua senha");


     if( loginCadastrado == loginInformado && senhaCadastrada == senhaInformada ) {



        if (tentativas = 20) {

                tentativas++;

        }

        } else {

        alert("Login inválido. Tente novamente");
        tentativas++;

    }


}

     alert("Login válido");   



