function alerta(){alert("Hola"+name)}function suma(e,t){return e+t}function resta(e,t){return e-t}function division(e,t){return e/t}function multiplicacion(e,t){return e*t}function calculadora(e,t,n){return e(t,n)}function obtenerLikes(e,t){setTimeout(function(){t(["123132a34534519874639","123a34534519864639","123132a34534519874659"])},5e3)}$(function(){var e=$("#app-header"),t=$("h1",e[0]);console.log(t),$("#app-header").find("h1"),$("div.foo").has("p"),$("h1").not(".bar"),$("ul li").filter(".current"),$("ul li").first(),$("ul li").eq(5),$("#myForm :input"),$("#myForm").find("h3").eq(2).html("Nuevo texto para el tercer elemento h3"),$("h4").css("fontSize","100px"),$("h5").click(function(e){e.preventDefault(),$(this).css({fontSize:"100px",color:"red"})}),t.addClass("big"),t.removeClass("big"),t.toggleClass("big"),$("a").attr("href","index.html"),$("a").attr({title:"Aquí el título que cambia",href:"index.html"});var n=$("<a>",{href:"http://platzi.com",target:"_blank",html:"Ir a platzi"});e.append(n),n.addClass("danger"),setTimeout(function(){n.toggleClass("danger")},2e3)});const name="Arnold";calculadora(suma,1,3);var postId="123187039";obtenerLikes(postId,function(e){alert("Se encontraron "+e.lenght+" likes")});var button=document.getElementById("myButton");button.addEventListener("click",function(e){alert("Me hicieron Click")}),$("#button").click(function(){alert("Me Hicieron Click")}),$("#button").on("click",function(){alert("Me Hicieron Click")}),$(".product button.like").click(function(e){$(this).closest(".product").addClass("liked")}),$("input").on("click change",function(e){e.preventDefault(),console.log("Me hicieron Click o me cambiaron el texto")}),$("p").on({click:function(){console.log("Me hicieron ckick")},mouser:function(){console.log("Me pasaron el mouse por arriba")}});