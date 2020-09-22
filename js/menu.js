$(function () {
	// deixa as divs do filtro com display flex (evita que as divs fiquem display none após a transição de mobile para desktop)
	if ($(window).width() > 767){
		document.getElementById("cores").style.display = "flex";
		document.getElementById("tamanhos").style.display = "flex";
		document.getElementById("precos").style.display = "flex";
	}
});

// funções para abrir e fechar os filtros

function dropdownCores() { /*abre e fecha menu de cores (apenas mobile)*/
	if ($(window).width() < 767) {
		var $this = $(this),
			flag = $this.data("clickflag");
		if (!flag) {
			document.getElementById("cores").style.display = "flex";
			document.getElementById("icone-cores").classList.remove("fa-plus");
			document.getElementById("icone-cores").classList.add("fa-minus");

		} else {
			document.getElementById("cores").style.display = "none";
			document.getElementById("icone-cores").classList.remove("fa-minus");
			document.getElementById("icone-cores").classList.add("fa-plus");
		}
		$this.data("clickflag", !flag);
	}
}

function dropdownTamanhos() { /*abre e fecha menu de tamanhos (apenas mobile)*/
	if ($(window).width() < 767) {
		var $this = $(this),
			flag = $this.data("clickflag2");
		if (!flag) {
			document.getElementById("tamanhos").style.display = "flex";
			document.getElementById("icone-tamanhos").classList.remove("fa-plus");
			document.getElementById("icone-tamanhos").classList.add("fa-minus");
		} else {
			document.getElementById("tamanhos").style.display = "none";
			document.getElementById("icone-tamanhos").classList.remove("fa-minus");
			document.getElementById("icone-tamanhos").classList.add("fa-plus");
		}
		$this.data("clickflag2", !flag);
	}
}

function dropdownPrecos() { /*abre e fecha menu de preços (apenas mobile)*/
	if ($(window).width() < 767) {
		var $this = $(this),
			flag = $this.data("clickflag3");
		if (!flag) {
			document.getElementById("precos").style.display = "flex";
			document.getElementById("icone-precos").classList.remove("fa-plus");
			document.getElementById("icone-precos").classList.add("fa-minus");
		} else {
			document.getElementById("precos").style.display = "none";
			document.getElementById("icone-precos").classList.remove("fa-minus");
			document.getElementById("icone-precos").classList.add("fa-plus");
		}
		$this.data("clickflag3", !flag);
	}
}

function abreFiltro() { /*abre menu de filtros (apenas mobile)*/
	if ($(window).width() < 767) {
		document.getElementById('menuFiltro').style.display = 'block';
		document.getElementById('menuOrdenar').style.display = 'none';
	}
}

function fechaFiltro() { /*fecha menu de filtros (apenas mobile)*/
	if ($(window).width() < 767) {
		document.getElementById('menuFiltro').style.display = 'none';
	}
}

function abreOrdenar() { /*abre menu de ordenar (apenas mobile)*/
	if ($(window).width() < 767) {
		document.getElementById('menuFiltro').style.display = 'none';
		document.getElementById('menuOrdenar').style.display = 'flex';
	}
}

function fechaOrdenar() { /*fecha menu de ordenar (apenas mobile)*/
	if ($(window).width() < 767) {
		document.getElementById('menuOrdenar').style.display = 'none';
	}
}

// Select personalizado

$(function() {
  
  $('.produtos-ordenar > .selecionado').on('click', function() {
    $(this).parent().toggleClass('open');
  });
  
  $('.produtos-ordenar > .lista > .item').on('click', function() {
    $('.produtos-ordenar > .lista > .item').removeClass('selected');
    $(this).addClass('selected').parent().parent().removeClass('open').children('.selecionado').text( $(this).text() );
  });
  
// fecha a aba de seleção ao apertar 'ESC'
  $(document).on('keyup', function(evt) {
    if ( (evt.keyCode || evt.which) === 27 ) {
      $('.produtos-ordenar').removeClass('open');
    }
  });
  
  $(document).on('click', function(evt) {
    if ( $(evt.target).closest(".produtos-ordenar > .selecionado").length === 0 ) {
      $('.produtos-ordenar').removeClass('open');
    }
  });
  
});

