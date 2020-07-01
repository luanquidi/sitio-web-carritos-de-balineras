$(document).ready(function(){
  //Slider

  if (window.location.href.indexOf('index') > -1) {
    $('.galeria').bxSlider({
      mode: 'fade',
      captions: true,
      slideWidth: 1200,
      responsive: true,
      pager: true
    });
  }


  //posts
  if (window.location.href.indexOf('index') > -1){
    var posts = [
      {
        tittle: 'Prueba de titulo 1',
        date:'Publicado el dia ' + moment().date() + ' de ' + moment().format("MMMM") + ' Del ' + moment().format("YYYY"),
        content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel repellendus necessitatibus impedit odio eaque adipisci facilis iure dolorum iste omnis illo voluptatum commodi porro, illum corporis libero. Rem, ullam temporibus.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente nesciunt, temporibus minima ipsam suscipit id corrupti libero eaque molestias reprehenderit quae dolore, nobis alias cum repellat perferendis enim nostrum. Id.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel repellendus necessitatibus impedit odio eaque adipisci facilis iure dolorum iste omnis illo voluptatum commodi porro, illum corporis libero. Rem, ullam temporibus.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente nesciunt, temporibus minima ipsam suscipit id corrupti libero eaque molestias reprehenderit quae dolore, nobis alias cum repellat perferendis enim nostrum. Id."
      },
      {
        tittle: 'Prueba de titulo 2',
        date:'Publicado el dia ' + moment().date() + ' de ' + moment().format("MMMM") + ' Del ' + moment().format("YYYY"),
        content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel repellendus necessitatibus impedit odio eaque adipisci facilis iure dolorum iste omnis illo voluptatum commodi porro, illum corporis libero. Rem, ullam temporibus.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente nesciunt, temporibus minima ipsam suscipit id corrupti libero eaque molestias reprehenderit quae dolore, nobis alias cum repellat perferendis enim nostrum. Id.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel repellendus necessitatibus impedit odio eaque adipisci facilis iure dolorum iste omnis illo voluptatum commodi porro, illum corporis libero. Rem, ullam temporibus.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente nesciunt, temporibus minima ipsam suscipit id corrupti libero eaque molestias reprehenderit quae dolore, nobis alias cum repellat perferendis enim nostrum. Id."
      },{
        tittle: 'Prueba de titulo 3',
        date:'Publicado el dia ' + moment().date() + ' de ' + moment().format("MMMM") + ' Del ' + moment().format("YYYY"),
        content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel repellendus necessitatibus impedit odio eaque adipisci facilis iure dolorum iste omnis illo voluptatum commodi porro, illum corporis libero. Rem, ullam temporibus.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente nesciunt, temporibus minima ipsam suscipit id corrupti libero eaque molestias reprehenderit quae dolore, nobis alias cum repellat perferendis enim nostrum. Id.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel repellendus necessitatibus impedit odio eaque adipisci facilis iure dolorum iste omnis illo voluptatum commodi porro, illum corporis libero. Rem, ullam temporibus.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente nesciunt, temporibus minima ipsam suscipit id corrupti libero eaque molestias reprehenderit quae dolore, nobis alias cum repellat perferendis enim nostrum. Id."
      },{
        tittle: 'Prueba de titulo 4',
        date:'Publicado el dia ' + moment().date() + ' de ' + moment().format("MMMM") + ' Del ' + moment().format("YYYY"),
        content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel repellendus necessitatibus impedit odio eaque adipisci facilis iure dolorum iste omnis illo voluptatum commodi porro, illum corporis libero. Rem, ullam temporibus.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente nesciunt, temporibus minima ipsam suscipit id corrupti libero eaque molestias reprehenderit quae dolore, nobis alias cum repellat perferendis enim nostrum. Id.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel repellendus necessitatibus impedit odio eaque adipisci facilis iure dolorum iste omnis illo voluptatum commodi porro, illum corporis libero. Rem, ullam temporibus.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente nesciunt, temporibus minima ipsam suscipit id corrupti libero eaque molestias reprehenderit quae dolore, nobis alias cum repellat perferendis enim nostrum. Id."
      },{
        tittle: 'Prueba de titulo 5',
        date:'Publicado el dia ' + moment().date() + ' de ' + moment().format("MMMM") + ' Del ' + moment().format("YYYY"),
        content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel repellendus necessitatibus impedit odio eaque adipisci facilis iure dolorum iste omnis illo voluptatum commodi porro, illum corporis libero. Rem, ullam temporibus.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente nesciunt, temporibus minima ipsam suscipit id corrupti libero eaque molestias reprehenderit quae dolore, nobis alias cum repellat perferendis enim nostrum. Id.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel repellendus necessitatibus impedit odio eaque adipisci facilis iure dolorum iste omnis illo voluptatum commodi porro, illum corporis libero. Rem, ullam temporibus.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente nesciunt, temporibus minima ipsam suscipit id corrupti libero eaque molestias reprehenderit quae dolore, nobis alias cum repellat perferendis enim nostrum. Id."
      },
    ];
    posts.forEach((item, index)=>{
      var post = `
      <article class="post">
        <hr>
        <h2 class="titulo">${item.tittle}</h2>
        <span class="date">${item.date}</span>
        <p>${item.content}</p>
        <button type="button" name="button" class="boton">Leer más</button>
      </article>
      `;
      $("#posts").append(post);
    });
  }




  //Selector Tema

  var theme = $("#theme");

  $("#to-green").click(function(){
    theme.attr("href","css/green.css");
  });

  $("#to-red").click(function(){
    theme.attr("href","css/red.css");
  });

  $("#to-blue").click(function(){
    theme.attr("href","css/blue.css");
  });

  // Scroll

  $(".subir").click(function(e){
    e.preventDefault();

    $('html, body').animate({
      scrollTop: 0
    },600);

    return false;
  });

  // /login

  $("#login form").submit(function(){
    var form_name = $("#form_name").val();
    localStorage.setItem("form_name", form_name);
  });

  var form_name = localStorage.getItem("form_name");
  if (form_name != null && form_name != "undefined") {
    var about_parrafo = $("#about p");
    about_parrafo.html("<br><hr><strong>Bienvenido, " + form_name+"</strong> ");
    about_parrafo.append("<a href='#' id='logout'>Cerrar sesion</a>")
    $("#login").hide();


    $("#logout").click(function(){
      localStorage.clear();
      location.reload();
    });
  }


  // Acordeon
  if (window.location.href.indexOf('about') > -1){
    $("#acordeon").accordion();
  }

  //Reloj
  if (window.location.href.indexOf('reloj') > -1){
    setInterval(function(){
      var reloj = moment().format("hh:mm:ss");
      $("#reloj").html(reloj);
    },1000);
  }

  //validacion
  if (window.location.href.indexOf('contact') > -1){

    $("form input[name='date']").datepicker({
      dateFormat:'dd-mm-yy'
    });

    $.validate({
     lang: 'es'
    });
  }


});
