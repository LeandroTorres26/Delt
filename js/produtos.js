const produtos = [
	{
		"nome": "suéter branco",
		"foto": "css/img/sueter-branco.png",
		"cor": "branco",
		"tamanho": "U",
		"preco": 509.99,
		"parcelamento": "até 8x de 63,70"
    },
	{
		"nome": "blusão azul",
		"foto": "css/img/blusao-azul.png",
		"cor": "azul",
		"tamanho": "G",
		"preco": 69.99,
		"parcelamento": "até 6x de 11,66"
    },
	{
		"nome": "moletom rosa",
		"foto": "css/img/moletom-rosa.png",
		"cor": "rosa",
		"tamanho": "M",
		"preco": 89.90,
		"parcelamento": "até 3x de 29,99"
    },
	{
		"nome": "vestido branco",
		"foto": "css/img/vestido-branco.png",
		"cor": "branco",
		"tamanho": "GG",
		"preco": 389.99,
		"parcelamento": "até 4x de 97,50"
    },
	{
		"nome": "suéter vermelho",
		"foto": "css/img/sueter-vermelho.png",
		"cor": "vermelho",
		"tamanho": "P",
		"preco": 119.90,
		"parcelamento": "até 2x de 59,50"
    },
	{
		"nome": "blusão amarelo",
		"foto": "css/img/blusao-amarelo.png",
		"cor": "amarelo",
		"tamanho": "M",
		"preco": 49.99,
		"parcelamento": "até 3x de 16,66"
    },
	{
		"nome": "blazer preto",
		"foto": "css/img/blazer-preto.png",
		"cor": "preto",
		"tamanho": "GG",
		"preco": 629.90,
		"parcelamento": "até 10x de 62,99"
    },
	{
		"nome": "cardigan cinza",
		"foto": "css/img/cardigan-cinza.png",
		"cor": "cinza",
		"tamanho": "P",
		"preco": 249.60,
		"parcelamento": "até 2x de 124,90"
    },
	{
		"nome": "blusa vinho",
		"foto": "css/img/blusa-vinho.png",
		"cor": "vinho",
		"tamanho": "M",
		"preco": 55.90,
		"parcelamento": "até 3x de 18,60"
    },
	{
		"nome": "parka verde",
		"foto": "css/img/parka-verde.png",
		"cor": "verde",
		"tamanho": "P",
		"preco": 39.90,
		"parcelamento": "até 2x de 19,95"
    },
	{
		"nome": "blusão laranja",
		"foto": "css/img/blusao-laranja.png",
		"cor": "laranja",
		"tamanho": "G",
		"preco": 45.90,
		"parcelamento": "até 2x de 22,95"
    },
	{
		"nome": "blusa rosa",
		"foto": "css/img/blusa-rosa.png",
		"cor": "rosa",
		"tamanho": "40",
		"preco": 25.50,
		"parcelamento": "até 2x de 12,75"
    },
	{
		"nome": "blusa preta",
		"foto": "css/img/blusa-preta.png",
		"cor": "preto",
		"tamanho": "38",
		"preco": 79.90,
		"parcelamento": "até 4x de 19,95"
    },
	{
		"nome": "regata cinza",
		"foto": "css/img/regata-cinza.png",
		"cor": "cinza",
		"tamanho": "36",
		"preco": 19.90,
		"parcelamento": "até 2x de 9,95"
    },
	{
		"nome": "camisa azul",
		"foto": "css/img/camisa-azul.png",
		"cor": "azul",
		"tamanho": "42",
		"preco": 230.00,
		"parcelamento": "até 3x de 76,66"
    },
	{
		"nome": "regata-amarela",
		"foto": "css/img/regata-amarela.png",
		"cor": "amarelo",
		"tamanho": "46",
		"preco": 149.00,
		"parcelamento": "até 3x de 49,66"
    },
	{
		"nome": "blusa verde",
		"foto": "css/img/blusa-verde.png",
		"cor": "verde",
		"tamanho": "44",
		"preco": 99.90,
		"parcelamento": "até 5x de 19,99"
    },
];

function produtoTemplate() {
	var container = document.getElementById("produtos-json");
	
	// criação do produto
	for (var i = 0; i < produtos.length; i++) {
		var produto = document.createElement("li");
		produto.classList.add("produto");
		produto.classList.add(produtos[i].cor + "Produto");
		produto.classList.add("tamanho" + produtos[i].tamanho);
		if (produtos[i].preco >= 0 && produtos[i].preco <= 50) {
			produto.classList.add("faixaPreco1");
		}
		if (produtos[i].preco >= 51 && produtos[i].preco <= 150) {
			produto.classList.add("faixaPreco2");
		}
		if (produtos[i].preco >= 151 && produtos[i].preco <= 300) {
			produto.classList.add("faixaPreco3");
		}
		if (produtos[i].preco >= 301 && produtos[i].preco <= 500) {
			produto.classList.add("faixaPreco4");
		}
		if (produtos[i].preco >= 501) {
			produto.classList.add("faixaPreco5");
		}
		container.appendChild(produto);

		var imgProduto = document.createElement("img");
		imgProduto.classList.add("produto-foto")
		imgProduto.src = produtos[i].foto;
		produto.appendChild(imgProduto);

		var nomeProduto = document.createElement("h1");
		nomeProduto.classList.add("produto-nome");
		nomeProduto.innerText = produtos[i].nome;
		produto.appendChild(nomeProduto);

		var precoProduto = document.createElement("p");
		precoProduto.classList.add("produto-preco");
		precoProduto.innerText = produtos[i].preco.toFixed(2).toString().replace(".", ",");
		produto.appendChild(precoProduto);

		var parcelamentoProduto = document.createElement("p");
		parcelamentoProduto.classList.add("produto-parcelamento");
		parcelamentoProduto.innerText = produtos[i].parcelamento;
		produto.appendChild(parcelamentoProduto);

		var comprarProduto = document.createElement("a");
		comprarProduto.classList.add("produto-comprar");
		comprarProduto.innerText = "Comprar";
		produto.appendChild(comprarProduto);
	}
}

$.fn.ordenaProdutoRecente = function () {
	return this.each(function () {
		var $this = $(this);
		$this.children().each(function () {
			$this.prepend(this);
		});
	});
};

function ordenaProdutoDec(parent, childSelector, keySelector) {
	var items = parent.children(childSelector).sort(function (a, b) {
		var vA = $(keySelector, a).text();
		var vB = $(keySelector, b).text();
		return parseFloat(vB) - parseFloat(vA);
	});
	parent.append(items);
}

function ordenaProdutoAsc(parent, childSelector, keySelector) {
	var items = parent.children(childSelector).sort(function (a, b) {
		var vA = $(keySelector, a).text();
		var vB = $(keySelector, b).text();
		return parseFloat(vA) - parseFloat(vB);
	});
	parent.append(items);
}

window.onload = function () {
	produtoTemplate();
	$(".produto").slice(0, 6).css("display", "flex");
	
	// Desabilita checkbox e radio button caso não exista um produto daquela categoria
	$(function () {
		if ($(".amareloProduto").length == 0) {$("#amarelo").prop('disabled', true);}

		if ($(".azulProduto").length == 0) {$("#azul").prop('disabled', true);}

		if ($(".brancoProduto").length == 0) {$("#branco").prop('disabled', true);}

		if ($(".cinzaProduto").length == 0) {$("#cinza").prop('disabled', true);}

		if ($(".laranjaProduto").length == 0) {$("#laranja").prop('disabled', true);}

		if ($(".verdeProduto").length == 0) {$("#verde").prop('disabled', true);}

		if ($(".vermelhoProduto").length == 0) {$("#vermelho").prop('disabled', true);}

		if ($(".pretoProduto").length == 0) {$("#preto").prop('disabled', true);}

		if ($(".rosaProduto").length == 0) {$("#rosa").prop('disabled', true);}

		if ($(".vinhoProduto").length == 0) {$("#vinho").prop('disabled', true);}

		if ($(".tamanhoP").length == 0) {$("#tamanho_1").prop('disabled', true);}

		if ($(".tamanhoM").length == 0) {$("#tamanho_2").prop('disabled', true);}

		if ($(".tamanhoG").length == 0) {$("#tamanho_3").prop('disabled', true);}

		if ($(".tamanhoGG").length == 0) {$("#tamanho_4").prop('disabled', true);}

		if ($(".tamanhoU").length == 0) {$("#tamanho_5").prop('disabled', true);}

		if ($(".tamanho36").length == 0) {$("#tamanho_6").prop('disabled', true);}

		if ($(".tamanho38").length == 0) {$("#tamanho_7").prop('disabled', true);}

		if ($(".tamanho40").length == 0) {$("#tamanho_8").prop('disabled', true);}

		if ($(".tamanho42").length == 0) {$("#tamanho_9").prop('disabled', true);}

		if ($(".tamanho44").length == 0) {$("#tamanho_10").prop('disabled', true);}

		if ($(".tamanho46").length == 0) {$("#tamanho_11").prop('disabled', true);}

		if ($(".faixaPreco1").length == 0) {$("#faixa_1").prop('disabled', true);}

		if ($(".faixaPreco2").length == 0) {$("#faixa_2").prop('disabled', true);}

		if ($(".faixaPreco3").length == 0) {$("#faixa_3").prop('disabled', true);}

		if ($(".faixaPreco4").length == 0) {$("#faixa_4").prop('disabled', true);}

		if ($(".faixaPreco5").length == 0) {$("#faixa_5").prop('disabled', true);}
	});
	
	// Adiciona produto ao carrinho
	var carrinho = $(".carrinho-quantidade");
	var i = 0;
	$(".produto-comprar").one("click", function () {
		i++
		carrinho.text(i);
		$(this).css("opacity", ".7");
	});
}

$(function () {

	// variaveis
	var container = document.getElementById("produtos-json");

	var amarelo = document.getElementById("amarelo");
	var azul = document.getElementById("azul");
	var branco = document.getElementById("branco");
	var cinza = document.getElementById("cinza");
	var laranja = document.getElementById("laranja");
	var verde = document.getElementById("verde");
	var vermelho = document.getElementById("vermelho");
	var preto = document.getElementById("preto");
	var rosa = document.getElementById("rosa");
	var vinho = document.getElementById("vinho");

	var tamanhoP = document.getElementById("tamanho_1");
	var tamanhoM = document.getElementById("tamanho_2");
	var tamanhoG = document.getElementById("tamanho_3");
	var tamanhoGG = document.getElementById("tamanho_4");
	var tamanhoU = document.getElementById("tamanho_5");
	var tamanho36 = document.getElementById("tamanho_6");
	var tamanho38 = document.getElementById("tamanho_7");
	var tamanho40 = document.getElementById("tamanho_8");
	var tamanho42 = document.getElementById("tamanho_9");
	var tamanho44 = document.getElementById("tamanho_10");
	var tamanho46 = document.getElementById("tamanho_11");

	var faixa1 = document.getElementById("faixa_1");
	var faixa2 = document.getElementById("faixa_2");
	var faixa3 = document.getElementById("faixa_3");
	var faixa4 = document.getElementById("faixa_4");
	var faixa5 = document.getElementById("faixa_5");

	// Filtro cores
	$(".filtrar-checkbox #amarelo").click(function () {
		if (amarelo.checked == true) {
			if (tamanhoP.checked == false && tamanhoM.checked == false && tamanhoG.checked == false && tamanhoGG.checked == false && tamanhoU.checked == false && tamanho36.checked == false && tamanho38.checked == false && tamanho40.checked == false && tamanho42.checked == false && tamanho44.checked == false && tamanho46.checked == false) {
				if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
					$(".amareloProduto").css("display", "flex");
				} else {
					if (faixa1.checked == true) {
						$(".faixaPreco1.amareloProduto").css("display", "flex");
					}
					if (faixa2.checked == true) {
						$(".faixaPreco2.amareloProduto").css("display", "flex");
					}
					if (faixa3.checked == true) {
						$(".faixaPreco3.amareloProduto").css("display", "flex");
					}
					if (faixa4.checked == true) {
						$(".faixaPreco4.amareloProduto").css("display", "flex");
					}
					if (faixa5.checked == true) {
						$(".faixaPreco5.amareloProduto").css("display", "flex");
					}
				}
			} else {
				if (tamanhoP.checked == true) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanhoP.amareloProduto").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanhoP.faixaPreco1.amareloProduto").css("display", "flex");
						}
						if (faixa2.checked == true) {
							$(".tamanhoP.faixaPreco2.amareloProduto").css("display", "flex");
						}
						if (faixa3.checked == true) {
							$(".tamanhoP.faixaPreco3.amareloProduto").css("display", "flex");
						}
						if (faixa4.checked == true) {
							$(".tamanhoP.faixaPreco4.amareloProduto").css("display", "flex");
						}
						if (faixa5.checked == true) {
							$(".tamanhoP.faixaPreco5.amareloProduto").css("display", "flex");
						}
					}
				}
				if (tamanhoM.checked == true) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanhoM.amareloProduto").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanhoM.faixaPreco1.amareloProduto").css("display", "flex");
						}
						if (faixa2.checked == true) {
							$(".tamanhoM.faixaPreco2.amareloProduto").css("display", "flex");
						}
						if (faixa3.checked == true) {
							$(".tamanhoM.faixaPreco3.amareloProduto").css("display", "flex");
						}
						if (faixa4.checked == true) {
							$(".tamanhoM.faixaPreco4.amareloProduto").css("display", "flex");
						}
						if (faixa5.checked == true) {
							$(".tamanhoM.faixaPreco5.amareloProduto").css("display", "flex");
						}
					}
				}
				if (tamanhoG.checked == true) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanhoG.azulProduto").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanhoG.faixaPreco1.amareloProduto").css("display", "flex");
						}
						if (faixa2.checked == true) {
							$(".tamanhoG.faixaPreco2.amareloProduto").css("display", "flex");
						}
						if (faixa3.checked == true) {
							$(".tamanhoG.faixaPreco3.amareloProduto").css("display", "flex");
						}
						if (faixa4.checked == true) {
							$(".tamanhoG.faixaPreco4.amareloProduto").css("display", "flex");
						}
						if (faixa5.checked == true) {
							$(".tamanhoG.faixaPreco5.amareloProduto").css("display", "flex");
						}
					}
				}
				if (tamanhoGG.checked == true) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanhoGG.amareloProduto").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanhoGG.faixaPreco1.amareloProduto").css("display", "flex");
						}
						if (faixa2.checked == true) {
							$(".tamanhoGG.faixaPreco2.amareloProduto").css("display", "flex");
						}
						if (faixa3.checked == true) {
							$(".tamanhoGG.faixaPreco3.amareloProduto").css("display", "flex");
						}
						if (faixa4.checked == true) {
							$(".tamanhoGG.faixaPreco4.amareloProduto").css("display", "flex");
						}
						if (faixa5.checked == true) {
							$(".tamanhoGG.faixaPreco5.amareloProduto").css("display", "flex");
						}
					}
				}
				if (tamanhoU.checked == true) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanhoU.amareloProduto").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanhoU.faixaPreco1.amareloProduto").css("display", "flex");
						}
						if (faixa2.checked == true) {
							$(".tamanhoU.faixaPreco2.amareloProduto").css("display", "flex");
						}
						if (faixa3.checked == true) {
							$(".tamanhoU.faixaPreco3.amareloProduto").css("display", "flex");
						}
						if (faixa4.checked == true) {
							$(".tamanhoU.faixaPreco4.amareloProduto").css("display", "flex");
						}
						if (faixa5.checked == true) {
							$(".tamanhoU.faixaPreco5.amareloProduto").css("display", "flex");
						}
					}
				}
				if (tamanho36.checked == true) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanho36.amareloProduto").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanho36.faixaPreco1.amareloProduto").css("display", "flex");
						}
						if (faixa2.checked == true) {
							$(".tamanho36.faixaPreco2.amareloProduto").css("display", "flex");
						}
						if (faixa3.checked == true) {
							$(".tamanho36.faixaPreco3.amareloProduto").css("display", "flex");
						}
						if (faixa4.checked == true) {
							$(".tamanho36.faixaPreco4.amareloProduto").css("display", "flex");
						}
						if (faixa5.checked == true) {
							$(".tamanho36.faixaPreco5.amareloProduto").css("display", "flex");
						}
					}
				}
				if (tamanho38.checked == true) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanho38.amareloProduto").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanho38.faixaPreco1.amareloProduto").css("display", "flex");
						}
						if (faixa2.checked == true) {
							$(".tamanho38.faixaPreco2.amareloProduto").css("display", "flex");
						}
						if (faixa3.checked == true) {
							$(".tamanho38.faixaPreco3.amareloProduto").css("display", "flex");
						}
						if (faixa4.checked == true) {
							$(".tamanho38.faixaPreco4.amareloProduto").css("display", "flex");
						}
						if (faixa5.checked == true) {
							$(".tamanho38.faixaPreco5.amareloProduto").css("display", "flex");
						}
					}
				}
				if (tamanho40.checked == true) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanho40.amareloProduto").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanho40.faixaPreco1.amareloProduto").css("display", "flex");
						}
						if (faixa2.checked == true) {
							$(".tamanho40.faixaPreco2.amareloProduto").css("display", "flex");
						}
						if (faixa3.checked == true) {
							$(".tamanho40.faixaPreco3.amareloProduto").css("display", "flex");
						}
						if (faixa4.checked == true) {
							$(".tamanho40.faixaPreco4.amareloProduto").css("display", "flex");
						}
						if (faixa5.checked == true) {
							$(".tamanho40.faixaPreco5.amareloProduto").css("display", "flex");
						}
					}
				}
				if (tamanho42.checked == true) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanho42.amareloProduto").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanho42.faixaPreco1.amareloProduto").css("display", "flex");
						}
						if (faixa2.checked == true) {
							$(".tamanho42.faixaPreco2.amareloProduto").css("display", "flex");
						}
						if (faixa3.checked == true) {
							$(".tamanho42.faixaPreco3.amareloProduto").css("display", "flex");
						}
						if (faixa4.checked == true) {
							$(".tamanho42.faixaPreco4.amareloProduto").css("display", "flex");
						}
						if (faixa5.checked == true) {
							$(".tamanho42.faixaPreco5.amareloProduto").css("display", "flex");
						}
					}
				}
				if (tamanho44.checked == true) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanho44.amareloProduto").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanho44.faixaPreco1.amareloProduto").css("display", "flex");
						}
						if (faixa2.checked == true) {
							$(".tamanho44.faixaPreco2.amareloProduto").css("display", "flex");
						}
						if (faixa3.checked == true) {
							$(".tamanho44.faixaPreco3.amareloProduto").css("display", "flex");
						}
						if (faixa4.checked == true) {
							$(".tamanho44.faixaPreco4.amareloProduto").css("display", "flex");
						}
						if (faixa5.checked == true) {
							$(".tamanho44.faixaPreco5.amareloProduto").css("display", "flex");
						}
					}
				}
				if (tamanho46.checked == true) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanho46.amareloProduto").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanho46.faixaPreco1.amareloProduto").css("display", "flex");
						}
						if (faixa2.checked == true) {
							$(".tamanho46.faixaPreco2.amareloProduto").css("display", "flex");
						}
						if (faixa3.checked == true) {
							$(".tamanho46.faixaPreco3.amareloProduto").css("display", "flex");
						}
						if (faixa4.checked == true) {
							$(".tamanho46.faixaPreco4.amareloProduto").css("display", "flex");
						}
						if (faixa5.checked == true) {
							$(".tamanho46.faixaPreco5.amareloProduto").css("display", "flex");
						}
					}
				}
			}
			if (azul.checked == false) {
				$(".azulProduto").hide();
			}
			if (branco.checked == false) {
				$(".brancoProduto").hide();
			}
			if (cinza.checked == false) {
				$(".cinzaProduto").hide();
			}
			if (laranja.checked == false) {
				$(".laranjaProduto").hide();
			}
			if (verde.checked == false) {
				$(".verdeProduto").hide();
			}
			if (vermelho.checked == false) {
				$(".vermelhoProduto").hide();
			}
			if (preto.checked == false) {
				$(".pretoProduto").hide();
			}
			if (rosa.checked == false) {
				$(".rosaProduto").hide();
			}
			if (vinho.checked == false) {
				$(".vinhoProduto").hide();
			}
		} else {
			$(".amareloProduto").hide();
			if (tamanhoP.checked == false && tamanhoM.checked == false && tamanhoG.checked == false && tamanhoGG.checked == false && tamanhoU.checked == false && tamanho36.checked == false && tamanho38.checked == false && tamanho40.checked == false && tamanho42.checked == false && tamanho44.checked == false && tamanho46.checked == false) {
				if (faixa1.checked == true) {
					if (faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".faixaPreco2").hide();
						$(".faixaPreco3").hide();
						$(".faixaPreco4").hide();
						$(".faixaPreco5").hide();
					}
					if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
						$(".faixaPreco1").css("display", "flex");
					}
					if (amarelo.checked == true) {
						$(".faixaPreco1.amareloProduto").css("display", "flex");
					}
					if (azul.checked == true) {
						$(".faixaPreco1.azulProduto").css("display", "flex");
					}
					if (branco.checked == true) {
						$(".faixaPreco1.brancoProduto").css("display", "flex");
					}
					if (cinza.checked == true) {
						$(".faixaPreco1.cinzaProduto").css("display", "flex");
					}
					if (laranja.checked == true) {
						$(".faixaPreco1.laranjaProduto").css("display", "flex");
					}
					if (verde.checked == true) {
						$(".faixaPreco1.verdeProduto").css("display", "flex");
					}
					if (vermelho.checked == true) {
						$(".faixaPreco1.vermelhoProduto").css("display", "flex");
					}
					if (preto.checked == true) {
						$(".faixaPreco1.pretoProduto").css("display", "flex");
					}
					if (rosa.checked == true) {
						$(".faixaPreco1.rosaProduto").css("display", "flex");
					}
					if (vinho.checked == true) {
						$(".faixaPreco1.vinhoProduto").css("display", "flex");
					}
				}
				if (faixa2.checked == true) {
					if (faixa1.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".faixaPreco1").hide();
						$(".faixaPreco3").hide();
						$(".faixaPreco4").hide();
						$(".faixaPreco5").hide();
					}
					if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
						$(".faixaPreco2").css("display", "flex");
					}
					if (amarelo.checked == true) {
						$(".faixaPreco2.amareloProduto").css("display", "flex");
					}
					if (azul.checked == true) {
						$(".faixaPreco2.azulProduto").css("display", "flex");
					}
					if (branco.checked == true) {
						$(".faixaPreco2.brancoProduto").css("display", "flex");
					}
					if (cinza.checked == true) {
						$(".faixaPreco2.cinzaProduto").css("display", "flex");
					}
					if (laranja.checked == true) {
						$(".faixaPreco2.laranjaProduto").css("display", "flex");
					}
					if (verde.checked == true) {
						$(".faixaPreco2.verdeProduto").css("display", "flex");
					}
					if (vermelho.checked == true) {
						$(".faixaPreco2.vermelhoProduto").css("display", "flex");
					}
					if (preto.checked == true) {
						$(".faixaPreco2.pretoProduto").css("display", "flex");
					}
					if (rosa.checked == true) {
						$(".faixaPreco2.rosaProduto").css("display", "flex");
					}
					if (vinho.checked == true) {
						$(".faixaPreco2.vinhoProduto").css("display", "flex");
					}
				}
				if (faixa3.checked == true) {
					if (faixa1.checked == false && faixa2.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".faixaPreco1").hide();
						$(".faixaPreco2").hide();
						$(".faixaPreco4").hide();
						$(".faixaPreco5").hide();
					}
					if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
						$(".faixaPreco3").css("display", "flex");
					}
					if (amarelo.checked == true) {
						$(".faixaPreco3.amareloProduto").css("display", "flex");
					}
					if (azul.checked == true) {
						$(".faixaPreco3.azulProduto").css("display", "flex");
					}
					if (branco.checked == true) {
						$(".faixaPreco3.brancoProduto").css("display", "flex");
					}
					if (cinza.checked == true) {
						$(".faixaPreco3.cinzaProduto").css("display", "flex");
					}
					if (laranja.checked == true) {
						$(".faixaPreco3.laranjaProduto").css("display", "flex");
					}
					if (verde.checked == true) {
						$(".faixaPreco3.verdeProduto").css("display", "flex");
					}
					if (vermelho.checked == true) {
						$(".faixaPreco3.vermelhoProduto").css("display", "flex");
					}
					if (preto.checked == true) {
						$(".faixaPreco3.pretoProduto").css("display", "flex");
					}
					if (rosa.checked == true) {
						$(".faixaPreco3.rosaProduto").css("display", "flex");
					}
					if (vinho.checked == true) {
						$(".faixaPreco3.vinhoProduto").css("display", "flex");
					}
				}
				if (faixa4.checked == true) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa5.checked == false) {
						$(".faixaPreco1").hide();
						$(".faixaPreco2").hide();
						$(".faixaPreco3").hide();
						$(".faixaPreco5").hide();
					}
					if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
						$(".faixaPreco4").css("display", "flex");
					}
					if (amarelo.checked == true) {
						$(".faixaPreco4.amareloProduto").css("display", "flex");
					}
					if (azul.checked == true) {
						$(".faixaPreco4.azulProduto").css("display", "flex");
					}
					if (branco.checked == true) {
						$(".faixaPreco4.brancoProduto").css("display", "flex");
					}
					if (cinza.checked == true) {
						$(".faixaPreco4.cinzaProduto").css("display", "flex");
					}
					if (laranja.checked == true) {
						$(".faixaPreco4.laranjaProduto").css("display", "flex");
					}
					if (verde.checked == true) {
						$(".faixaPreco4.verdeProduto").css("display", "flex");
					}
					if (vermelho.checked == true) {
						$(".faixaPreco4.vermelhoProduto").css("display", "flex");
					}
					if (preto.checked == true) {
						$(".faixaPreco4.pretoProduto").css("display", "flex");
					}
					if (rosa.checked == true) {
						$(".faixaPreco4.rosaProduto").css("display", "flex");
					}
					if (vinho.checked == true) {
						$(".faixaPreco4.vinhoProduto").css("display", "flex");
					}
				}
				if (faixa5.checked == true) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false) {
						$(".faixaPreco1").hide();
						$(".faixaPreco2").hide();
						$(".faixaPreco3").hide();
						$(".faixaPreco4").hide();
					}
					if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
						$(".faixaPreco5").css("display", "flex");
					}
					if (amarelo.checked == true) {
						$(".faixaPreco5.amareloProduto").css("display", "flex");
					}
					if (azul.checked == true) {
						$(".faixaPreco5.azulProduto").css("display", "flex");
					}
					if (branco.checked == true) {
						$(".faixaPreco5.brancoProduto").css("display", "flex");
					}
					if (cinza.checked == true) {
						$(".faixaPreco5.cinzaProduto").css("display", "flex");
					}
					if (laranja.checked == true) {
						$(".faixaPreco5.laranjaProduto").css("display", "flex");
					}
					if (verde.checked == true) {
						$(".faixaPreco5.verdeProduto").css("display", "flex");
					}
					if (vermelho.checked == true) {
						$(".faixaPreco5.vermelhoProduto").css("display", "flex");
					}
					if (preto.checked == true) {
						$(".faixaPreco5.pretoProduto").css("display", "flex");
					}
					if (rosa.checked == true) {
						$(".faixaPreco5.rosaProduto").css("display", "flex");
					}
					if (vinho.checked == true) {
						$(".faixaPreco5.vinhoProduto").css("display", "flex");
					}
				}
			}
			if (tamanhoP.checked == true) {
				$(".tamanhoM").hide();
				$(".tamanhoG").hide();
				$(".tamanhoGG").hide();
				$(".tamanhoU").hide();
				$(".tamanho36").hide();
				$(".tamanho38").hide();
				$(".tamanho40").hide();
				$(".tamanho42").hide();
				$(".tamanho44").hide();
				$(".tamanho46").hide();
				if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanhoP").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanhoP.faixaPreco1").css("display", "flex");
							if (faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa2.checked == true) {
							$(".tamanhoP.faixaPreco2").css("display", "flex");
							if (faixa1.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa3.checked == true) {
							$(".tamanhoP.faixaPreco3").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa4.checked == true) {
							$(".tamanhoP.faixaPreco4").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa5.checked == true) {
							$(".tamanhoP.faixaPreco5").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
							}
						}
					}
				}
				if (amarelo.checked == true) {
					$(".tamanhoP.amareloProduto").css("display", "flex");
				}
				if (azul.checked == true) {
					$(".tamanhoP.azulProduto").css("display", "flex");
				}
				if (branco.checked == true) {
					$(".tamanhoP.brancoProduto").css("display", "flex");
				}
				if (cinza.checked == true) {
					$(".tamanhoP.cinzaProduto").css("display", "flex");
				}
				if (laranja.checked == true) {
					$(".tamanhoP.laranjaProduto").css("display", "flex");
				}
				if (verde.checked == true) {
					$(".tamanhoP.verdeProduto").css("display", "flex");
				}
				if (vermelho.checked == true) {
					$(".tamanhoP.vermelhoProduto").css("display", "flex");
				}
				if (preto.checked == true) {
					$(".tamanhoP.pretoProduto").css("display", "flex");
				}
				if (rosa.checked == true) {
					$(".tamanhoP.rosaProduto").css("display", "flex");
				}
				if (vinho.checked == true) {
					$(".tamanhoP.vinhoProduto").css("display", "flex");
				}
			}
			if (tamanhoM.checked == true) {
				$(".tamanhoP").hide();
				$(".tamanhoG").hide();
				$(".tamanhoGG").hide();
				$(".tamanhoU").hide();
				$(".tamanho36").hide();
				$(".tamanho38").hide();
				$(".tamanho40").hide();
				$(".tamanho42").hide();
				$(".tamanho44").hide();
				$(".tamanho46").hide();
				if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanhoM").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanhoM.faixaPreco1").css("display", "flex");
							if (faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa2.checked == true) {
							$(".tamanhoM.faixaPreco2").css("display", "flex");
							if (faixa1.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa3.checked == true) {
							$(".tamanhoM.faixaPreco3").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa4.checked == true) {
							$(".tamanhoM.faixaPreco4").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa5.checked == true) {
							$(".tamanhoM.faixaPreco5").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
							}
						}
					}
				}
				if (amarelo.checked == true) {
					$(".tamanhoM.amareloProduto").css("display", "flex");
				}
				if (azul.checked == true) {
					$(".tamanhoM.azulProduto").css("display", "flex");
				}
				if (branco.checked == true) {
					$(".tamanhoM.brancoProduto").css("display", "flex");
				}
				if (cinza.checked == true) {
					$(".tamanhoM.cinzaProduto").css("display", "flex");
				}
				if (laranja.checked == true) {
					$(".tamanhoM.laranjaProduto").css("display", "flex");
				}
				if (verde.checked == true) {
					$(".tamanhoM.verdeProduto").css("display", "flex");
				}
				if (vermelho.checked == true) {
					$(".tamanhoM.vermelhoProduto").css("display", "flex");
				}
				if (preto.checked == true) {
					$(".tamanhoM.pretoProduto").css("display", "flex");
				}
				if (rosa.checked == true) {
					$(".tamanhoM.rosaProduto").css("display", "flex");
				}
				if (vinho.checked == true) {
					$(".tamanhoM.vinhoProduto").css("display", "flex");
				}
			}
			if (tamanhoG.checked == true) {
				$(".tamanhoP").hide();
				$(".tamanhoM").hide();
				$(".tamanhoGG").hide();
				$(".tamanhoU").hide();
				$(".tamanho36").hide();
				$(".tamanho38").hide();
				$(".tamanho40").hide();
				$(".tamanho42").hide();
				$(".tamanho44").hide();
				$(".tamanho46").hide();
				if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanhoG").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanhoG.faixaPreco1").css("display", "flex");
							if (faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa2.checked == true) {
							$(".tamanhoG.faixaPreco2").css("display", "flex");
							if (faixa1.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa3.checked == true) {
							$(".tamanhoG.faixaPreco3").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa4.checked == true) {
							$(".tamanhoG.faixaPreco4").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa5.checked == true) {
							$(".tamanhoG.faixaPreco5").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
							}
						}
					}
				}
				if (amarelo.checked == true) {
					$(".tamanhoG.amareloProduto").css("display", "flex");
				}
				if (azul.checked == true) {
					$(".tamanhoG.azulProduto").css("display", "flex");
				}
				if (branco.checked == true) {
					$(".tamanhoG.brancoProduto").css("display", "flex");
				}
				if (cinza.checked == true) {
					$(".tamanhoG.cinzaProduto").css("display", "flex");
				}
				if (laranja.checked == true) {
					$(".tamanhoG.laranjaProduto").css("display", "flex");
				}
				if (verde.checked == true) {
					$(".tamanhoG.verdeProduto").css("display", "flex");
				}
				if (vermelho.checked == true) {
					$(".tamanhoG.vermelhoProduto").css("display", "flex");
				}
				if (preto.checked == true) {
					$(".tamanhoG.pretoProduto").css("display", "flex");
				}
				if (rosa.checked == true) {
					$(".tamanhoG.rosaProduto").css("display", "flex");
				}
				if (vinho.checked == true) {
					$(".tamanhoG.vinhoProduto").css("display", "flex");
				}
			}
			if (tamanhoGG.checked == true) {
				$(".tamanhoP").hide();
				$(".tamanhoM").hide();
				$(".tamanhoG").hide();
				$(".tamanhoU").hide();
				$(".tamanho36").hide();
				$(".tamanho38").hide();
				$(".tamanho40").hide();
				$(".tamanho42").hide();
				$(".tamanho44").hide();
				$(".tamanho46").hide();
				if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanhoGG").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanhoGG.faixaPreco1").css("display", "flex");
							if (faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa2.checked == true) {
							$(".tamanhoGG.faixaPreco2").css("display", "flex");
							if (faixa1.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa3.checked == true) {
							$(".tamanhoGG.faixaPreco3").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa4.checked == true) {
							$(".tamanhoGG.faixaPreco4").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa5.checked == true) {
							$(".tamanhoGG.faixaPreco5").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
							}
						}
					}
				}
				if (amarelo.checked == true) {
					$(".tamanhoGG.amareloProduto").css("display", "flex");
				}
				if (azul.checked == true) {
					$(".tamanhoGG.azulProduto").css("display", "flex");
				}
				if (branco.checked == true) {
					$(".tamanhoGG.brancoProduto").css("display", "flex");
				}
				if (cinza.checked == true) {
					$(".tamanhoGG.cinzaProduto").css("display", "flex");
				}
				if (laranja.checked == true) {
					$(".tamanhoGG.laranjaProduto").css("display", "flex");
				}
				if (verde.checked == true) {
					$(".tamanhoGG.verdeProduto").css("display", "flex");
				}
				if (vermelho.checked == true) {
					$(".tamanhoGG.vermelhoProduto").css("display", "flex");
				}
				if (preto.checked == true) {
					$(".tamanhoGG.pretoProduto").css("display", "flex");
				}
				if (rosa.checked == true) {
					$(".tamanhoGG.rosaProduto").css("display", "flex");
				}
				if (vinho.checked == true) {
					$(".tamanhoGG.vinhoProduto").css("display", "flex");
				}
			}
			if (tamanhoU.checked == true) {
				$(".tamanhoP").hide();
				$(".tamanhoM").hide();
				$(".tamanhoG").hide();
				$(".tamanhoGG").hide();
				$(".tamanho36").hide();
				$(".tamanho38").hide();
				$(".tamanho40").hide();
				$(".tamanho42").hide();
				$(".tamanho44").hide();
				$(".tamanho46").hide();
				if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanhoU").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanhoU.faixaPreco1").css("display", "flex");
							if (faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa2.checked == true) {
							$(".tamanhoU.faixaPreco2").css("display", "flex");
							if (faixa1.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa3.checked == true) {
							$(".tamanhoU.faixaPreco3").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa4.checked == true) {
							$(".tamanhoU.faixaPreco4").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa5.checked == true) {
							$(".tamanhoU.faixaPreco5").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
							}
						}
					}
				}
				if (amarelo.checked == true) {
					$(".tamanhoU.amareloProduto").css("display", "flex");
				}
				if (azul.checked == true) {
					$(".tamanhoU.azulProduto").css("display", "flex");
				}
				if (branco.checked == true) {
					$(".tamanhoU.brancoProduto").css("display", "flex");
				}
				if (cinza.checked == true) {
					$(".tamanhoU.cinzaProduto").css("display", "flex");
				}
				if (laranja.checked == true) {
					$(".tamanhoU.laranjaProduto").css("display", "flex");
				}
				if (verde.checked == true) {
					$(".tamanhoU.verdeProduto").css("display", "flex");
				}
				if (vermelho.checked == true) {
					$(".tamanhoU.vermelhoProduto").css("display", "flex");
				}
				if (preto.checked == true) {
					$(".tamanhoU.pretoProduto").css("display", "flex");
				}
				if (rosa.checked == true) {
					$(".tamanhoU.rosaProduto").css("display", "flex");
				}
				if (vinho.checked == true) {
					$(".tamanhoU.vinhoProduto").css("display", "flex");
				}
			}
			if (tamanho36.checked == true) {
				$(".tamanhoP").hide();
				$(".tamanhoM").hide();
				$(".tamanhoG").hide();
				$(".tamanhoGG").hide();
				$(".tamanhoU").hide();
				$(".tamanho38").hide();
				$(".tamanho40").hide();
				$(".tamanho42").hide();
				$(".tamanho44").hide();
				$(".tamanho46").hide();
				if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanho36").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanho36.faixaPreco1").css("display", "flex");
							if (faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa2.checked == true) {
							$(".tamanho36.faixaPreco2").css("display", "flex");
							if (faixa1.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa3.checked == true) {
							$(".tamanho36.faixaPreco3").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa4.checked == true) {
							$(".tamanho36.faixaPreco4").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa5.checked == true) {
							$(".tamanho36.faixaPreco5").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
							}
						}
					}
				}
				if (amarelo.checked == true) {
					$(".tamanho36.amareloProduto").css("display", "flex");
				}
				if (azul.checked == true) {
					$(".tamanho36.azulProduto").css("display", "flex");
				}
				if (branco.checked == true) {
					$(".tamanho36.brancoProduto").css("display", "flex");
				}
				if (cinza.checked == true) {
					$(".tamanho36.cinzaProduto").css("display", "flex");
				}
				if (laranja.checked == true) {
					$(".tamanho36.laranjaProduto").css("display", "flex");
				}
				if (verde.checked == true) {
					$(".tamanho36.verdeProduto").css("display", "flex");
				}
				if (vermelho.checked == true) {
					$(".tamanho36.vermelhoProduto").css("display", "flex");
				}
				if (preto.checked == true) {
					$(".tamanho36.pretoProduto").css("display", "flex");
				}
				if (rosa.checked == true) {
					$(".tamanho36.rosaProduto").css("display", "flex");
				}
				if (vinho.checked == true) {
					$(".tamanho36.vinhoProduto").css("display", "flex");
				}
			}
			if (tamanho38.checked == true) {
				$(".tamanhoP").hide();
				$(".tamanhoM").hide();
				$(".tamanhoG").hide();
				$(".tamanhoGG").hide();
				$(".tamanhoU").hide();
				$(".tamanho36").hide();
				$(".tamanho40").hide();
				$(".tamanho42").hide();
				$(".tamanho44").hide();
				$(".tamanho46").hide();
				if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanho38").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanho38.faixaPreco1").css("display", "flex");
							if (faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa2.checked == true) {
							$(".tamanho38.faixaPreco2").css("display", "flex");
							if (faixa1.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa3.checked == true) {
							$(".tamanho38.faixaPreco3").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa4.checked == true) {
							$(".tamanho38.faixaPreco4").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa5.checked == true) {
							$(".tamanho38.faixaPreco5").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
							}
						}
					}
				}
				if (amarelo.checked == true) {
					$(".tamanho38.amareloProduto").css("display", "flex");
				}
				if (azul.checked == true) {
					$(".tamanho38.azulProduto").css("display", "flex");
				}
				if (branco.checked == true) {
					$(".tamanho38.brancoProduto").css("display", "flex");
				}
				if (cinza.checked == true) {
					$(".tamanho38.cinzaProduto").css("display", "flex");
				}
				if (laranja.checked == true) {
					$(".tamanho38.laranjaProduto").css("display", "flex");
				}
				if (verde.checked == true) {
					$(".tamanho38.verdeProduto").css("display", "flex");
				}
				if (vermelho.checked == true) {
					$(".tamanho38.vermelhoProduto").css("display", "flex");
				}
				if (preto.checked == true) {
					$(".tamanho38.pretoProduto").css("display", "flex");
				}
				if (rosa.checked == true) {
					$(".tamanho38.rosaProduto").css("display", "flex");
				}
				if (vinho.checked == true) {
					$(".tamanho38.vinhoProduto").css("display", "flex");
				}
			}
			if (tamanho40.checked == true) {
				$(".tamanhoP").hide();
				$(".tamanhoM").hide();
				$(".tamanhoG").hide();
				$(".tamanhoGG").hide();
				$(".tamanhoU").hide();
				$(".tamanho36").hide();
				$(".tamanho38").hide();
				$(".tamanho42").hide();
				$(".tamanho44").hide();
				$(".tamanho46").hide();
				if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanho40").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanho40.faixaPreco1").css("display", "flex");
							if (faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa2.checked == true) {
							$(".tamanho40.faixaPreco2").css("display", "flex");
							if (faixa1.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa3.checked == true) {
							$(".tamanho40.faixaPreco3").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa4.checked == true) {
							$(".tamanho40.faixaPreco4").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa5.checked == true) {
							$(".tamanho40.faixaPreco5").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
							}
						}
					}
				}
				if (amarelo.checked == true) {
					$(".tamanho40.amareloProduto").css("display", "flex");
				}
				if (azul.checked == true) {
					$(".tamanho40.azulProduto").css("display", "flex");
				}
				if (branco.checked == true) {
					$(".tamanho40.brancoProduto").css("display", "flex");
				}
				if (cinza.checked == true) {
					$(".tamanho40.cinzaProduto").css("display", "flex");
				}
				if (laranja.checked == true) {
					$(".tamanho40.laranjaProduto").css("display", "flex");
				}
				if (verde.checked == true) {
					$(".tamanho40.verdeProduto").css("display", "flex");
				}
				if (vermelho.checked == true) {
					$(".tamanho40.vermelhoProduto").css("display", "flex");
				}
				if (preto.checked == true) {
					$(".tamanho40.pretoProduto").css("display", "flex");
				}
				if (rosa.checked == true) {
					$(".tamanho40.rosaProduto").css("display", "flex");
				}
				if (vinho.checked == true) {
					$(".tamanho40.vinhoProduto").css("display", "flex");
				}
			}
			if (tamanho42.checked == true) {
				$(".tamanhoP").hide();
				$(".tamanhoM").hide();
				$(".tamanhoG").hide();
				$(".tamanhoGG").hide();
				$(".tamanhoU").hide();
				$(".tamanho36").hide();
				$(".tamanho38").hide();
				$(".tamanho40").hide();
				$(".tamanho44").hide();
				$(".tamanho46").hide();
				if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanho42").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanho42.faixaPreco1").css("display", "flex");
							if (faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa2.checked == true) {
							$(".tamanho42.faixaPreco2").css("display", "flex");
							if (faixa1.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa3.checked == true) {
							$(".tamanho42.faixaPreco3").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa4.checked == true) {
							$(".tamanho42.faixaPreco4").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa5.checked == true) {
							$(".tamanho42.faixaPreco5").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
							}
						}
					}
				}
				if (amarelo.checked == true) {
					$(".tamanho42.amareloProduto").css("display", "flex");
				}
				if (azul.checked == true) {
					$(".tamanho42.azulProduto").css("display", "flex");
				}
				if (branco.checked == true) {
					$(".tamanho42.brancoProduto").css("display", "flex");
				}
				if (cinza.checked == true) {
					$(".tamanho42.cinzaProduto").css("display", "flex");
				}
				if (laranja.checked == true) {
					$(".tamanho42.laranjaProduto").css("display", "flex");
				}
				if (verde.checked == true) {
					$(".tamanho42.verdeProduto").css("display", "flex");
				}
				if (vermelho.checked == true) {
					$(".tamanho42.vermelhoProduto").css("display", "flex");
				}
				if (preto.checked == true) {
					$(".tamanho42.pretoProduto").css("display", "flex");
				}
				if (rosa.checked == true) {
					$(".tamanho42.rosaProduto").css("display", "flex");
				}
				if (vinho.checked == true) {
					$(".tamanho42.vinhoProduto").css("display", "flex");
				}
			}
			if (tamanho44.checked == true) {
				$(".tamanhoP").hide();
				$(".tamanhoM").hide();
				$(".tamanhoG").hide();
				$(".tamanhoGG").hide();
				$(".tamanhoU").hide();
				$(".tamanho36").hide();
				$(".tamanho38").hide();
				$(".tamanho40").hide();
				$(".tamanho42").hide();
				$(".tamanho46").hide();
				if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanho44").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanho44.faixaPreco1").css("display", "flex");
							if (faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa2.checked == true) {
							$(".tamanho44.faixaPreco2").css("display", "flex");
							if (faixa1.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa3.checked == true) {
							$(".tamanho44.faixaPreco3").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa4.checked == true) {
							$(".tamanho44.faixaPreco4").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa5.checked == true) {
							$(".tamanho44.faixaPreco5").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
							}
						}
					}
				}
				if (amarelo.checked == true) {
					$(".tamanho44.amareloProduto").css("display", "flex");
				}
				if (azul.checked == true) {
					$(".tamanho44.azulProduto").css("display", "flex");
				}
				if (branco.checked == true) {
					$(".tamanho44.brancoProduto").css("display", "flex");
				}
				if (cinza.checked == true) {
					$(".tamanho44.cinzaProduto").css("display", "flex");
				}
				if (laranja.checked == true) {
					$(".tamanho44.laranjaProduto").css("display", "flex");
				}
				if (verde.checked == true) {
					$(".tamanho44.verdeProduto").css("display", "flex");
				}
				if (vermelho.checked == true) {
					$(".tamanho44.vermelhoProduto").css("display", "flex");
				}
				if (preto.checked == true) {
					$(".tamanho44.pretoProduto").css("display", "flex");
				}
				if (rosa.checked == true) {
					$(".tamanho44.rosaProduto").css("display", "flex");
				}
				if (vinho.checked == true) {
					$(".tamanho44.vinhoProduto").css("display", "flex");
				}
			}
			if (tamanho46.checked == true) {
				$(".tamanhoP").hide();
				$(".tamanhoM").hide();
				$(".tamanhoG").hide();
				$(".tamanhoGG").hide();
				$(".tamanhoU").hide();
				$(".tamanho36").hide();
				$(".tamanho38").hide();
				$(".tamanho40").hide();
				$(".tamanho42").hide();
				$(".tamanho44").hide();
				if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanho46").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanho46.faixaPreco1").css("display", "flex");
							if (faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa2.checked == true) {
							$(".tamanho46.faixaPreco2").css("display", "flex");
							if (faixa1.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa3.checked == true) {
							$(".tamanho46.faixaPreco3").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa4.checked == true) {
							$(".tamanho46.faixaPreco4").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa5.checked == true) {
							$(".tamanho46.faixaPreco5").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
							}
						}
					}
				}
				if (amarelo.checked == true) {
					$(".tamanho46.amareloProduto").css("display", "flex");
				}
				if (azul.checked == true) {
					$(".tamanho46.azulProduto").css("display", "flex");
				}
				if (branco.checked == true) {
					$(".tamanho46.brancoProduto").css("display", "flex");
				}
				if (cinza.checked == true) {
					$(".tamanho46.cinzaProduto").css("display", "flex");
				}
				if (laranja.checked == true) {
					$(".tamanho46.laranjaProduto").css("display", "flex");
				}
				if (verde.checked == true) {
					$(".tamanho46.verdeProduto").css("display", "flex");
				}
				if (vermelho.checked == true) {
					$(".tamanho46.vermelhoProduto").css("display", "flex");
				}
				if (preto.checked == true) {
					$(".tamanho46.pretoProduto").css("display", "flex");
				}
				if (rosa.checked == true) {
					$(".tamanho46.rosaProduto").css("display", "flex");
				}
				if (vinho.checked == true) {
					$(".tamanho46.vinhoProduto").css("display", "flex");
				}
			}
		}
	})

	$(".filtrar-checkbox #azul").click(function () {
		if (azul.checked == true) {
			if (tamanhoP.checked == false && tamanhoM.checked == false && tamanhoG.checked == false && tamanhoGG.checked == false && tamanhoU.checked == false && tamanho36.checked == false && tamanho38.checked == false && tamanho40.checked == false && tamanho42.checked == false && tamanho44.checked == false && tamanho46.checked == false) {
				if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
					$(".azulProduto").css("display", "flex");
				} else {
					if (faixa1.checked == true) {
						$(".faixaPreco1.azulProduto").css("display", "flex");
					}
					if (faixa2.checked == true) {
						$(".faixaPreco2.azulProduto").css("display", "flex");
					}
					if (faixa3.checked == true) {
						$(".faixaPreco3.azulProduto").css("display", "flex");
					}
					if (faixa4.checked == true) {
						$(".faixaPreco4.azulProduto").css("display", "flex");
					}
					if (faixa5.checked == true) {
						$(".faixaPreco5.azulProduto").css("display", "flex");
					}
				}
			} else {
				if (tamanhoP.checked == true) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanhoP.azulProduto").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanhoP.faixaPreco1.azulProduto").css("display", "flex");
						}
						if (faixa2.checked == true) {
							$(".tamanhoP.faixaPreco2.azulProduto").css("display", "flex");
						}
						if (faixa3.checked == true) {
							$(".tamanhoP.faixaPreco3.azulProduto").css("display", "flex");
						}
						if (faixa4.checked == true) {
							$(".tamanhoP.faixaPreco4.azulProduto").css("display", "flex");
						}
						if (faixa5.checked == true) {
							$(".tamanhoP.faixaPreco5.azulProduto").css("display", "flex");
						}
					}
				}
				if (tamanhoM.checked == true) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanhoM.azulProduto").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanhoM.faixaPreco1.azulProduto").css("display", "flex");
						}
						if (faixa2.checked == true) {
							$(".tamanhoM.faixaPreco2.azulProduto").css("display", "flex");
						}
						if (faixa3.checked == true) {
							$(".tamanhoM.faixaPreco3.azulProduto").css("display", "flex");
						}
						if (faixa4.checked == true) {
							$(".tamanhoM.faixaPreco4.azulProduto").css("display", "flex");
						}
						if (faixa5.checked == true) {
							$(".tamanhoM.faixaPreco5.azulProduto").css("display", "flex");
						}
					}
				}
				if (tamanhoG.checked == true) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanhoG.azulProduto").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanhoG.faixaPreco1.azulProduto").css("display", "flex");
						}
						if (faixa2.checked == true) {
							$(".tamanhoG.faixaPreco2.azulProduto").css("display", "flex");
						}
						if (faixa3.checked == true) {
							$(".tamanhoG.faixaPreco3.azulProduto").css("display", "flex");
						}
						if (faixa4.checked == true) {
							$(".tamanhoG.faixaPreco4.azulProduto").css("display", "flex");
						}
						if (faixa5.checked == true) {
							$(".tamanhoG.faixaPreco5.azulProduto").css("display", "flex");
						}
					}
				}
				if (tamanhoGG.checked == true) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanhoGG.azulProduto").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanhoGG.faixaPreco1.azulProduto").css("display", "flex");
						}
						if (faixa2.checked == true) {
							$(".tamanhoGG.faixaPreco2.azulProduto").css("display", "flex");
						}
						if (faixa3.checked == true) {
							$(".tamanhoGG.faixaPreco3.azulProduto").css("display", "flex");
						}
						if (faixa4.checked == true) {
							$(".tamanhoGG.faixaPreco4.azulProduto").css("display", "flex");
						}
						if (faixa5.checked == true) {
							$(".tamanhoGG.faixaPreco5.azulProduto").css("display", "flex");
						}
					}
				}
				if (tamanhoU.checked == true) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanhoU.azulProduto").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanhoU.faixaPreco1.azulProduto").css("display", "flex");
						}
						if (faixa2.checked == true) {
							$(".tamanhoU.faixaPreco2.azulProduto").css("display", "flex");
						}
						if (faixa3.checked == true) {
							$(".tamanhoU.faixaPreco3.azulProduto").css("display", "flex");
						}
						if (faixa4.checked == true) {
							$(".tamanhoU.faixaPreco4.azulProduto").css("display", "flex");
						}
						if (faixa5.checked == true) {
							$(".tamanhoU.faixaPreco5.azulProduto").css("display", "flex");
						}
					}
				}
				if (tamanho36.checked == true) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanho36.azulProduto").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanho36.faixaPreco1.azulProduto").css("display", "flex");
						}
						if (faixa2.checked == true) {
							$(".tamanho36.faixaPreco2.azulProduto").css("display", "flex");
						}
						if (faixa3.checked == true) {
							$(".tamanho36.faixaPreco3.azulProduto").css("display", "flex");
						}
						if (faixa4.checked == true) {
							$(".tamanho36.faixaPreco4.azulProduto").css("display", "flex");
						}
						if (faixa5.checked == true) {
							$(".tamanho36.faixaPreco5.azulProduto").css("display", "flex");
						}
					}
				}
				if (tamanho38.checked == true) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanho38.azulProduto").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanho38.faixaPreco1.azulProduto").css("display", "flex");
						}
						if (faixa2.checked == true) {
							$(".tamanho38.faixaPreco2.azulProduto").css("display", "flex");
						}
						if (faixa3.checked == true) {
							$(".tamanho38.faixaPreco3.azulProduto").css("display", "flex");
						}
						if (faixa4.checked == true) {
							$(".tamanho38.faixaPreco4.azulProduto").css("display", "flex");
						}
						if (faixa5.checked == true) {
							$(".tamanho38.faixaPreco5.azulProduto").css("display", "flex");
						}
					}
				}
				if (tamanho40.checked == true) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanho40.azulProduto").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanho40.faixaPreco1.azulProduto").css("display", "flex");
						}
						if (faixa2.checked == true) {
							$(".tamanho40.faixaPreco2.azulProduto").css("display", "flex");
						}
						if (faixa3.checked == true) {
							$(".tamanho40.faixaPreco3.azulProduto").css("display", "flex");
						}
						if (faixa4.checked == true) {
							$(".tamanho40.faixaPreco4.azulProduto").css("display", "flex");
						}
						if (faixa5.checked == true) {
							$(".tamanho40.faixaPreco5.azulProduto").css("display", "flex");
						}
					}
				}
				if (tamanho42.checked == true) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanho42.azulProduto").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanho42.faixaPreco1.azulProduto").css("display", "flex");
						}
						if (faixa2.checked == true) {
							$(".tamanho42.faixaPreco2.azulProduto").css("display", "flex");
						}
						if (faixa3.checked == true) {
							$(".tamanho42.faixaPreco3.azulProduto").css("display", "flex");
						}
						if (faixa4.checked == true) {
							$(".tamanho42.faixaPreco4.azulProduto").css("display", "flex");
						}
						if (faixa5.checked == true) {
							$(".tamanho42.faixaPreco5.azulProduto").css("display", "flex");
						}
					}
				}
				if (tamanho44.checked == true) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanho44.azulProduto").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanho44.faixaPreco1.azulProduto").css("display", "flex");
						}
						if (faixa2.checked == true) {
							$(".tamanho44.faixaPreco2.azulProduto").css("display", "flex");
						}
						if (faixa3.checked == true) {
							$(".tamanho44.faixaPreco3.azulProduto").css("display", "flex");
						}
						if (faixa4.checked == true) {
							$(".tamanho44.faixaPreco4.azulProduto").css("display", "flex");
						}
						if (faixa5.checked == true) {
							$(".tamanho44.faixaPreco5.azulProduto").css("display", "flex");
						}
					}
				}
				if (tamanho46.checked == true) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanho46.azulProduto").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanho46.faixaPreco1.azulProduto").css("display", "flex");
						}
						if (faixa2.checked == true) {
							$(".tamanho46.faixaPreco2.azulProduto").css("display", "flex");
						}
						if (faixa3.checked == true) {
							$(".tamanho46.faixaPreco3.azulProduto").css("display", "flex");
						}
						if (faixa4.checked == true) {
							$(".tamanho46.faixaPreco4.azulProduto").css("display", "flex");
						}
						if (faixa5.checked == true) {
							$(".tamanho46.faixaPreco5.azulProduto").css("display", "flex");
						}
					}
				}
			}
			if (amarelo.checked == false) {
				$(".amareloProduto").hide();
			}
			if (branco.checked == false) {
				$(".brancoProduto").hide();
			}
			if (cinza.checked == false) {
				$(".cinzaProduto").hide();
			}
			if (laranja.checked == false) {
				$(".laranjaProduto").hide();
			}
			if (verde.checked == false) {
				$(".verdeProduto").hide();
			}
			if (vermelho.checked == false) {
				$(".vermelhoProduto").hide();
			}
			if (preto.checked == false) {
				$(".pretoProduto").hide();
			}
			if (rosa.checked == false) {
				$(".rosaProduto").hide();
			}
			if (vinho.checked == false) {
				$(".vinhoProduto").hide();
			}
		} else {
			$(".azulProduto").hide();
			if (tamanhoP.checked == false && tamanhoM.checked == false && tamanhoG.checked == false && tamanhoGG.checked == false && tamanhoU.checked == false && tamanho36.checked == false && tamanho38.checked == false && tamanho40.checked == false && tamanho42.checked == false && tamanho44.checked == false && tamanho46.checked == false) {
				if (faixa1.checked == true) {
					if (faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".faixaPreco2").hide();
						$(".faixaPreco3").hide();
						$(".faixaPreco4").hide();
						$(".faixaPreco5").hide();
					}
					if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
						$(".faixaPreco1").css("display", "flex");
					}
					if (amarelo.checked == true) {
						$(".faixaPreco1.amareloProduto").css("display", "flex");
					}
					if (azul.checked == true) {
						$(".faixaPreco1.azulProduto").css("display", "flex");
					}
					if (branco.checked == true) {
						$(".faixaPreco1.brancoProduto").css("display", "flex");
					}
					if (cinza.checked == true) {
						$(".faixaPreco1.cinzaProduto").css("display", "flex");
					}
					if (laranja.checked == true) {
						$(".faixaPreco1.laranjaProduto").css("display", "flex");
					}
					if (verde.checked == true) {
						$(".faixaPreco1.verdeProduto").css("display", "flex");
					}
					if (vermelho.checked == true) {
						$(".faixaPreco1.vermelhoProduto").css("display", "flex");
					}
					if (preto.checked == true) {
						$(".faixaPreco1.pretoProduto").css("display", "flex");
					}
					if (rosa.checked == true) {
						$(".faixaPreco1.rosaProduto").css("display", "flex");
					}
					if (vinho.checked == true) {
						$(".faixaPreco1.vinhoProduto").css("display", "flex");
					}
				}
				if (faixa2.checked == true) {
					if (faixa1.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".faixaPreco1").hide();
						$(".faixaPreco3").hide();
						$(".faixaPreco4").hide();
						$(".faixaPreco5").hide();
					}
					if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
						$(".faixaPreco2").css("display", "flex");
					}
					if (amarelo.checked == true) {
						$(".faixaPreco2.amareloProduto").css("display", "flex");
					}
					if (azul.checked == true) {
						$(".faixaPreco2.azulProduto").css("display", "flex");
					}
					if (branco.checked == true) {
						$(".faixaPreco2.brancoProduto").css("display", "flex");
					}
					if (cinza.checked == true) {
						$(".faixaPreco2.cinzaProduto").css("display", "flex");
					}
					if (laranja.checked == true) {
						$(".faixaPreco2.laranjaProduto").css("display", "flex");
					}
					if (verde.checked == true) {
						$(".faixaPreco2.verdeProduto").css("display", "flex");
					}
					if (vermelho.checked == true) {
						$(".faixaPreco2.vermelhoProduto").css("display", "flex");
					}
					if (preto.checked == true) {
						$(".faixaPreco2.pretoProduto").css("display", "flex");
					}
					if (rosa.checked == true) {
						$(".faixaPreco2.rosaProduto").css("display", "flex");
					}
					if (vinho.checked == true) {
						$(".faixaPreco2.vinhoProduto").css("display", "flex");
					}
				}
				if (faixa3.checked == true) {
					if (faixa1.checked == false && faixa2.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".faixaPreco1").hide();
						$(".faixaPreco2").hide();
						$(".faixaPreco4").hide();
						$(".faixaPreco5").hide();
					}
					if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
						$(".faixaPreco3").css("display", "flex");
					}
					if (amarelo.checked == true) {
						$(".faixaPreco3.amareloProduto").css("display", "flex");
					}
					if (azul.checked == true) {
						$(".faixaPreco3.azulProduto").css("display", "flex");
					}
					if (branco.checked == true) {
						$(".faixaPreco3.brancoProduto").css("display", "flex");
					}
					if (cinza.checked == true) {
						$(".faixaPreco3.cinzaProduto").css("display", "flex");
					}
					if (laranja.checked == true) {
						$(".faixaPreco3.laranjaProduto").css("display", "flex");
					}
					if (verde.checked == true) {
						$(".faixaPreco3.verdeProduto").css("display", "flex");
					}
					if (vermelho.checked == true) {
						$(".faixaPreco3.vermelhoProduto").css("display", "flex");
					}
					if (preto.checked == true) {
						$(".faixaPreco3.pretoProduto").css("display", "flex");
					}
					if (rosa.checked == true) {
						$(".faixaPreco3.rosaProduto").css("display", "flex");
					}
					if (vinho.checked == true) {
						$(".faixaPreco3.vinhoProduto").css("display", "flex");
					}
				}
				if (faixa4.checked == true) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa5.checked == false) {
						$(".faixaPreco1").hide();
						$(".faixaPreco2").hide();
						$(".faixaPreco3").hide();
						$(".faixaPreco5").hide();
					}
					if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
						$(".faixaPreco4").css("display", "flex");
					}
					if (amarelo.checked == true) {
						$(".faixaPreco4.amareloProduto").css("display", "flex");
					}
					if (azul.checked == true) {
						$(".faixaPreco4.azulProduto").css("display", "flex");
					}
					if (branco.checked == true) {
						$(".faixaPreco4.brancoProduto").css("display", "flex");
					}
					if (cinza.checked == true) {
						$(".faixaPreco4.cinzaProduto").css("display", "flex");
					}
					if (laranja.checked == true) {
						$(".faixaPreco4.laranjaProduto").css("display", "flex");
					}
					if (verde.checked == true) {
						$(".faixaPreco4.verdeProduto").css("display", "flex");
					}
					if (vermelho.checked == true) {
						$(".faixaPreco4.vermelhoProduto").css("display", "flex");
					}
					if (preto.checked == true) {
						$(".faixaPreco4.pretoProduto").css("display", "flex");
					}
					if (rosa.checked == true) {
						$(".faixaPreco4.rosaProduto").css("display", "flex");
					}
					if (vinho.checked == true) {
						$(".faixaPreco4.vinhoProduto").css("display", "flex");
					}
				}
				if (faixa5.checked == true) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false) {
						$(".faixaPreco1").hide();
						$(".faixaPreco2").hide();
						$(".faixaPreco3").hide();
						$(".faixaPreco4").hide();
					}
					if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
						$(".faixaPreco5").css("display", "flex");
					}
					if (amarelo.checked == true) {
						$(".faixaPreco5.amareloProduto").css("display", "flex");
					}
					if (azul.checked == true) {
						$(".faixaPreco5.azulProduto").css("display", "flex");
					}
					if (branco.checked == true) {
						$(".faixaPreco5.brancoProduto").css("display", "flex");
					}
					if (cinza.checked == true) {
						$(".faixaPreco5.cinzaProduto").css("display", "flex");
					}
					if (laranja.checked == true) {
						$(".faixaPreco5.laranjaProduto").css("display", "flex");
					}
					if (verde.checked == true) {
						$(".faixaPreco5.verdeProduto").css("display", "flex");
					}
					if (vermelho.checked == true) {
						$(".faixaPreco5.vermelhoProduto").css("display", "flex");
					}
					if (preto.checked == true) {
						$(".faixaPreco5.pretoProduto").css("display", "flex");
					}
					if (rosa.checked == true) {
						$(".faixaPreco5.rosaProduto").css("display", "flex");
					}
					if (vinho.checked == true) {
						$(".faixaPreco5.vinhoProduto").css("display", "flex");
					}
				}
			}
			if (tamanhoP.checked == true) {
				$(".tamanhoM").hide();
				$(".tamanhoG").hide();
				$(".tamanhoGG").hide();
				$(".tamanhoU").hide();
				$(".tamanho36").hide();
				$(".tamanho38").hide();
				$(".tamanho40").hide();
				$(".tamanho42").hide();
				$(".tamanho44").hide();
				$(".tamanho46").hide();
				if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanhoP").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanhoP.faixaPreco1").css("display", "flex");
							if (faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa2.checked == true) {
							$(".tamanhoP.faixaPreco2").css("display", "flex");
							if (faixa1.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa3.checked == true) {
							$(".tamanhoP.faixaPreco3").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa4.checked == true) {
							$(".tamanhoP.faixaPreco4").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa5.checked == true) {
							$(".tamanhoP.faixaPreco5").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
							}
						}
					}
				}
				if (amarelo.checked == true) {
					$(".tamanhoP.amareloProduto").css("display", "flex");
				}
				if (azul.checked == true) {
					$(".tamanhoP.azulProduto").css("display", "flex");
				}
				if (branco.checked == true) {
					$(".tamanhoP.brancoProduto").css("display", "flex");
				}
				if (cinza.checked == true) {
					$(".tamanhoP.cinzaProduto").css("display", "flex");
				}
				if (laranja.checked == true) {
					$(".tamanhoP.laranjaProduto").css("display", "flex");
				}
				if (verde.checked == true) {
					$(".tamanhoP.verdeProduto").css("display", "flex");
				}
				if (vermelho.checked == true) {
					$(".tamanhoP.vermelhoProduto").css("display", "flex");
				}
				if (preto.checked == true) {
					$(".tamanhoP.pretoProduto").css("display", "flex");
				}
				if (rosa.checked == true) {
					$(".tamanhoP.rosaProduto").css("display", "flex");
				}
				if (vinho.checked == true) {
					$(".tamanhoP.vinhoProduto").css("display", "flex");
				}
			}
			if (tamanhoM.checked == true) {
				$(".tamanhoP").hide();
				$(".tamanhoG").hide();
				$(".tamanhoGG").hide();
				$(".tamanhoU").hide();
				$(".tamanho36").hide();
				$(".tamanho38").hide();
				$(".tamanho40").hide();
				$(".tamanho42").hide();
				$(".tamanho44").hide();
				$(".tamanho46").hide();
				if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanhoM").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanhoM.faixaPreco1").css("display", "flex");
							if (faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa2.checked == true) {
							$(".tamanhoM.faixaPreco2").css("display", "flex");
							if (faixa1.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa3.checked == true) {
							$(".tamanhoM.faixaPreco3").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa4.checked == true) {
							$(".tamanhoM.faixaPreco4").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa5.checked == true) {
							$(".tamanhoM.faixaPreco5").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
							}
						}
					}
				}
				if (amarelo.checked == true) {
					$(".tamanhoM.amareloProduto").css("display", "flex");
				}
				if (azul.checked == true) {
					$(".tamanhoM.azulProduto").css("display", "flex");
				}
				if (branco.checked == true) {
					$(".tamanhoM.brancoProduto").css("display", "flex");
				}
				if (cinza.checked == true) {
					$(".tamanhoM.cinzaProduto").css("display", "flex");
				}
				if (laranja.checked == true) {
					$(".tamanhoM.laranjaProduto").css("display", "flex");
				}
				if (verde.checked == true) {
					$(".tamanhoM.verdeProduto").css("display", "flex");
				}
				if (vermelho.checked == true) {
					$(".tamanhoM.vermelhoProduto").css("display", "flex");
				}
				if (preto.checked == true) {
					$(".tamanhoM.pretoProduto").css("display", "flex");
				}
				if (rosa.checked == true) {
					$(".tamanhoM.rosaProduto").css("display", "flex");
				}
				if (vinho.checked == true) {
					$(".tamanhoM.vinhoProduto").css("display", "flex");
				}
			}
			if (tamanhoG.checked == true) {
				$(".tamanhoP").hide();
				$(".tamanhoM").hide();
				$(".tamanhoGG").hide();
				$(".tamanhoU").hide();
				$(".tamanho36").hide();
				$(".tamanho38").hide();
				$(".tamanho40").hide();
				$(".tamanho42").hide();
				$(".tamanho44").hide();
				$(".tamanho46").hide();
				if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanhoG").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanhoG.faixaPreco1").css("display", "flex");
							if (faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa2.checked == true) {
							$(".tamanhoG.faixaPreco2").css("display", "flex");
							if (faixa1.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa3.checked == true) {
							$(".tamanhoG.faixaPreco3").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa4.checked == true) {
							$(".tamanhoG.faixaPreco4").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa5.checked == true) {
							$(".tamanhoG.faixaPreco5").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
							}
						}
					}
				}
				if (amarelo.checked == true) {
					$(".tamanhoG.amareloProduto").css("display", "flex");
				}
				if (azul.checked == true) {
					$(".tamanhoG.azulProduto").css("display", "flex");
				}
				if (branco.checked == true) {
					$(".tamanhoG.brancoProduto").css("display", "flex");
				}
				if (cinza.checked == true) {
					$(".tamanhoG.cinzaProduto").css("display", "flex");
				}
				if (laranja.checked == true) {
					$(".tamanhoG.laranjaProduto").css("display", "flex");
				}
				if (verde.checked == true) {
					$(".tamanhoG.verdeProduto").css("display", "flex");
				}
				if (vermelho.checked == true) {
					$(".tamanhoG.vermelhoProduto").css("display", "flex");
				}
				if (preto.checked == true) {
					$(".tamanhoG.pretoProduto").css("display", "flex");
				}
				if (rosa.checked == true) {
					$(".tamanhoG.rosaProduto").css("display", "flex");
				}
				if (vinho.checked == true) {
					$(".tamanhoG.vinhoProduto").css("display", "flex");
				}
			}
			if (tamanhoGG.checked == true) {
				$(".tamanhoP").hide();
				$(".tamanhoM").hide();
				$(".tamanhoG").hide();
				$(".tamanhoU").hide();
				$(".tamanho36").hide();
				$(".tamanho38").hide();
				$(".tamanho40").hide();
				$(".tamanho42").hide();
				$(".tamanho44").hide();
				$(".tamanho46").hide();
				if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanhoGG").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanhoGG.faixaPreco1").css("display", "flex");
							if (faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa2.checked == true) {
							$(".tamanhoGG.faixaPreco2").css("display", "flex");
							if (faixa1.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa3.checked == true) {
							$(".tamanhoGG.faixaPreco3").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa4.checked == true) {
							$(".tamanhoGG.faixaPreco4").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa5.checked == true) {
							$(".tamanhoGG.faixaPreco5").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
							}
						}
					}
				}
				if (amarelo.checked == true) {
					$(".tamanhoGG.amareloProduto").css("display", "flex");
				}
				if (azul.checked == true) {
					$(".tamanhoGG.azulProduto").css("display", "flex");
				}
				if (branco.checked == true) {
					$(".tamanhoGG.brancoProduto").css("display", "flex");
				}
				if (cinza.checked == true) {
					$(".tamanhoGG.cinzaProduto").css("display", "flex");
				}
				if (laranja.checked == true) {
					$(".tamanhoGG.laranjaProduto").css("display", "flex");
				}
				if (verde.checked == true) {
					$(".tamanhoGG.verdeProduto").css("display", "flex");
				}
				if (vermelho.checked == true) {
					$(".tamanhoGG.vermelhoProduto").css("display", "flex");
				}
				if (preto.checked == true) {
					$(".tamanhoGG.pretoProduto").css("display", "flex");
				}
				if (rosa.checked == true) {
					$(".tamanhoGG.rosaProduto").css("display", "flex");
				}
				if (vinho.checked == true) {
					$(".tamanhoGG.vinhoProduto").css("display", "flex");
				}
			}
			if (tamanhoU.checked == true) {
				$(".tamanhoP").hide();
				$(".tamanhoM").hide();
				$(".tamanhoG").hide();
				$(".tamanhoGG").hide();
				$(".tamanho36").hide();
				$(".tamanho38").hide();
				$(".tamanho40").hide();
				$(".tamanho42").hide();
				$(".tamanho44").hide();
				$(".tamanho46").hide();
				if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanhoU").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanhoU.faixaPreco1").css("display", "flex");
							if (faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa2.checked == true) {
							$(".tamanhoU.faixaPreco2").css("display", "flex");
							if (faixa1.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa3.checked == true) {
							$(".tamanhoU.faixaPreco3").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa4.checked == true) {
							$(".tamanhoU.faixaPreco4").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa5.checked == true) {
							$(".tamanhoU.faixaPreco5").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
							}
						}
					}
				}
				if (amarelo.checked == true) {
					$(".tamanhoU.amareloProduto").css("display", "flex");
				}
				if (azul.checked == true) {
					$(".tamanhoU.azulProduto").css("display", "flex");
				}
				if (branco.checked == true) {
					$(".tamanhoU.brancoProduto").css("display", "flex");
				}
				if (cinza.checked == true) {
					$(".tamanhoU.cinzaProduto").css("display", "flex");
				}
				if (laranja.checked == true) {
					$(".tamanhoU.laranjaProduto").css("display", "flex");
				}
				if (verde.checked == true) {
					$(".tamanhoU.verdeProduto").css("display", "flex");
				}
				if (vermelho.checked == true) {
					$(".tamanhoU.vermelhoProduto").css("display", "flex");
				}
				if (preto.checked == true) {
					$(".tamanhoU.pretoProduto").css("display", "flex");
				}
				if (rosa.checked == true) {
					$(".tamanhoU.rosaProduto").css("display", "flex");
				}
				if (vinho.checked == true) {
					$(".tamanhoU.vinhoProduto").css("display", "flex");
				}
			}
			if (tamanho36.checked == true) {
				$(".tamanhoP").hide();
				$(".tamanhoM").hide();
				$(".tamanhoG").hide();
				$(".tamanhoGG").hide();
				$(".tamanhoU").hide();
				$(".tamanho38").hide();
				$(".tamanho40").hide();
				$(".tamanho42").hide();
				$(".tamanho44").hide();
				$(".tamanho46").hide();
				if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanho36").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanho36.faixaPreco1").css("display", "flex");
							if (faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa2.checked == true) {
							$(".tamanho36.faixaPreco2").css("display", "flex");
							if (faixa1.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa3.checked == true) {
							$(".tamanho36.faixaPreco3").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa4.checked == true) {
							$(".tamanho36.faixaPreco4").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa5.checked == true) {
							$(".tamanho36.faixaPreco5").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
							}
						}
					}
				}
				if (amarelo.checked == true) {
					$(".tamanho36.amareloProduto").css("display", "flex");
				}
				if (azul.checked == true) {
					$(".tamanho36.azulProduto").css("display", "flex");
				}
				if (branco.checked == true) {
					$(".tamanho36.brancoProduto").css("display", "flex");
				}
				if (cinza.checked == true) {
					$(".tamanho36.cinzaProduto").css("display", "flex");
				}
				if (laranja.checked == true) {
					$(".tamanho36.laranjaProduto").css("display", "flex");
				}
				if (verde.checked == true) {
					$(".tamanho36.verdeProduto").css("display", "flex");
				}
				if (vermelho.checked == true) {
					$(".tamanho36.vermelhoProduto").css("display", "flex");
				}
				if (preto.checked == true) {
					$(".tamanho36.pretoProduto").css("display", "flex");
				}
				if (rosa.checked == true) {
					$(".tamanho36.rosaProduto").css("display", "flex");
				}
				if (vinho.checked == true) {
					$(".tamanho36.vinhoProduto").css("display", "flex");
				}
			}
			if (tamanho38.checked == true) {
				$(".tamanhoP").hide();
				$(".tamanhoM").hide();
				$(".tamanhoG").hide();
				$(".tamanhoGG").hide();
				$(".tamanhoU").hide();
				$(".tamanho36").hide();
				$(".tamanho40").hide();
				$(".tamanho42").hide();
				$(".tamanho44").hide();
				$(".tamanho46").hide();
				if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanho38").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanho38.faixaPreco1").css("display", "flex");
							if (faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa2.checked == true) {
							$(".tamanho38.faixaPreco2").css("display", "flex");
							if (faixa1.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa3.checked == true) {
							$(".tamanho38.faixaPreco3").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa4.checked == true) {
							$(".tamanho38.faixaPreco4").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa5.checked == true) {
							$(".tamanho38.faixaPreco5").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
							}
						}
					}
				}
				if (amarelo.checked == true) {
					$(".tamanho38.amareloProduto").css("display", "flex");
				}
				if (azul.checked == true) {
					$(".tamanho38.azulProduto").css("display", "flex");
				}
				if (branco.checked == true) {
					$(".tamanho38.brancoProduto").css("display", "flex");
				}
				if (cinza.checked == true) {
					$(".tamanho38.cinzaProduto").css("display", "flex");
				}
				if (laranja.checked == true) {
					$(".tamanho38.laranjaProduto").css("display", "flex");
				}
				if (verde.checked == true) {
					$(".tamanho38.verdeProduto").css("display", "flex");
				}
				if (vermelho.checked == true) {
					$(".tamanho38.vermelhoProduto").css("display", "flex");
				}
				if (preto.checked == true) {
					$(".tamanho38.pretoProduto").css("display", "flex");
				}
				if (rosa.checked == true) {
					$(".tamanho38.rosaProduto").css("display", "flex");
				}
				if (vinho.checked == true) {
					$(".tamanho38.vinhoProduto").css("display", "flex");
				}
			}
			if (tamanho40.checked == true) {
				$(".tamanhoP").hide();
				$(".tamanhoM").hide();
				$(".tamanhoG").hide();
				$(".tamanhoGG").hide();
				$(".tamanhoU").hide();
				$(".tamanho36").hide();
				$(".tamanho38").hide();
				$(".tamanho42").hide();
				$(".tamanho44").hide();
				$(".tamanho46").hide();
				if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanho40").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanho40.faixaPreco1").css("display", "flex");
							if (faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa2.checked == true) {
							$(".tamanho40.faixaPreco2").css("display", "flex");
							if (faixa1.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa3.checked == true) {
							$(".tamanho40.faixaPreco3").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa4.checked == true) {
							$(".tamanho40.faixaPreco4").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa5.checked == true) {
							$(".tamanho40.faixaPreco5").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
							}
						}
					}
				}
				if (amarelo.checked == true) {
					$(".tamanho40.amareloProduto").css("display", "flex");
				}
				if (azul.checked == true) {
					$(".tamanho40.azulProduto").css("display", "flex");
				}
				if (branco.checked == true) {
					$(".tamanho40.brancoProduto").css("display", "flex");
				}
				if (cinza.checked == true) {
					$(".tamanho40.cinzaProduto").css("display", "flex");
				}
				if (laranja.checked == true) {
					$(".tamanho40.laranjaProduto").css("display", "flex");
				}
				if (verde.checked == true) {
					$(".tamanho40.verdeProduto").css("display", "flex");
				}
				if (vermelho.checked == true) {
					$(".tamanho40.vermelhoProduto").css("display", "flex");
				}
				if (preto.checked == true) {
					$(".tamanho40.pretoProduto").css("display", "flex");
				}
				if (rosa.checked == true) {
					$(".tamanho40.rosaProduto").css("display", "flex");
				}
				if (vinho.checked == true) {
					$(".tamanho40.vinhoProduto").css("display", "flex");
				}
			}
			if (tamanho42.checked == true) {
				$(".tamanhoP").hide();
				$(".tamanhoM").hide();
				$(".tamanhoG").hide();
				$(".tamanhoGG").hide();
				$(".tamanhoU").hide();
				$(".tamanho36").hide();
				$(".tamanho38").hide();
				$(".tamanho40").hide();
				$(".tamanho44").hide();
				$(".tamanho46").hide();
				if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanho42").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanho42.faixaPreco1").css("display", "flex");
							if (faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa2.checked == true) {
							$(".tamanho42.faixaPreco2").css("display", "flex");
							if (faixa1.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa3.checked == true) {
							$(".tamanho42.faixaPreco3").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa4.checked == true) {
							$(".tamanho42.faixaPreco4").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa5.checked == true) {
							$(".tamanho42.faixaPreco5").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
							}
						}
					}
				}
				if (amarelo.checked == true) {
					$(".tamanho42.amareloProduto").css("display", "flex");
				}
				if (azul.checked == true) {
					$(".tamanho42.azulProduto").css("display", "flex");
				}
				if (branco.checked == true) {
					$(".tamanho42.brancoProduto").css("display", "flex");
				}
				if (cinza.checked == true) {
					$(".tamanho42.cinzaProduto").css("display", "flex");
				}
				if (laranja.checked == true) {
					$(".tamanho42.laranjaProduto").css("display", "flex");
				}
				if (verde.checked == true) {
					$(".tamanho42.verdeProduto").css("display", "flex");
				}
				if (vermelho.checked == true) {
					$(".tamanho42.vermelhoProduto").css("display", "flex");
				}
				if (preto.checked == true) {
					$(".tamanho42.pretoProduto").css("display", "flex");
				}
				if (rosa.checked == true) {
					$(".tamanho42.rosaProduto").css("display", "flex");
				}
				if (vinho.checked == true) {
					$(".tamanho42.vinhoProduto").css("display", "flex");
				}
			}
			if (tamanho44.checked == true) {
				$(".tamanhoP").hide();
				$(".tamanhoM").hide();
				$(".tamanhoG").hide();
				$(".tamanhoGG").hide();
				$(".tamanhoU").hide();
				$(".tamanho36").hide();
				$(".tamanho38").hide();
				$(".tamanho40").hide();
				$(".tamanho42").hide();
				$(".tamanho46").hide();
				if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanho44").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanho44.faixaPreco1").css("display", "flex");
							if (faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa2.checked == true) {
							$(".tamanho44.faixaPreco2").css("display", "flex");
							if (faixa1.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa3.checked == true) {
							$(".tamanho44.faixaPreco3").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa4.checked == true) {
							$(".tamanho44.faixaPreco4").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa5.checked == true) {
							$(".tamanho44.faixaPreco5").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
							}
						}
					}
				}
				if (amarelo.checked == true) {
					$(".tamanho44.amareloProduto").css("display", "flex");
				}
				if (azul.checked == true) {
					$(".tamanho44.azulProduto").css("display", "flex");
				}
				if (branco.checked == true) {
					$(".tamanho44.brancoProduto").css("display", "flex");
				}
				if (cinza.checked == true) {
					$(".tamanho44.cinzaProduto").css("display", "flex");
				}
				if (laranja.checked == true) {
					$(".tamanho44.laranjaProduto").css("display", "flex");
				}
				if (verde.checked == true) {
					$(".tamanho44.verdeProduto").css("display", "flex");
				}
				if (vermelho.checked == true) {
					$(".tamanho44.vermelhoProduto").css("display", "flex");
				}
				if (preto.checked == true) {
					$(".tamanho44.pretoProduto").css("display", "flex");
				}
				if (rosa.checked == true) {
					$(".tamanho44.rosaProduto").css("display", "flex");
				}
				if (vinho.checked == true) {
					$(".tamanho44.vinhoProduto").css("display", "flex");
				}
			}
			if (tamanho46.checked == true) {
				$(".tamanhoP").hide();
				$(".tamanhoM").hide();
				$(".tamanhoG").hide();
				$(".tamanhoGG").hide();
				$(".tamanhoU").hide();
				$(".tamanho36").hide();
				$(".tamanho38").hide();
				$(".tamanho40").hide();
				$(".tamanho42").hide();
				$(".tamanho44").hide();
				if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanho46").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanho46.faixaPreco1").css("display", "flex");
							if (faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa2.checked == true) {
							$(".tamanho46.faixaPreco2").css("display", "flex");
							if (faixa1.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa3.checked == true) {
							$(".tamanho46.faixaPreco3").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa4.checked == true) {
							$(".tamanho46.faixaPreco4").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa5.checked == true) {
							$(".tamanho46.faixaPreco5").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
							}
						}
					}
				}
				if (amarelo.checked == true) {
					$(".tamanho46.amareloProduto").css("display", "flex");
				}
				if (azul.checked == true) {
					$(".tamanho46.azulProduto").css("display", "flex");
				}
				if (branco.checked == true) {
					$(".tamanho46.brancoProduto").css("display", "flex");
				}
				if (cinza.checked == true) {
					$(".tamanho46.cinzaProduto").css("display", "flex");
				}
				if (laranja.checked == true) {
					$(".tamanho46.laranjaProduto").css("display", "flex");
				}
				if (verde.checked == true) {
					$(".tamanho46.verdeProduto").css("display", "flex");
				}
				if (vermelho.checked == true) {
					$(".tamanho46.vermelhoProduto").css("display", "flex");
				}
				if (preto.checked == true) {
					$(".tamanho46.pretoProduto").css("display", "flex");
				}
				if (rosa.checked == true) {
					$(".tamanho46.rosaProduto").css("display", "flex");
				}
				if (vinho.checked == true) {
					$(".tamanho46.vinhoProduto").css("display", "flex");
				}
			}
		}
	})

	$(".filtrar-checkbox #branco").click(function () {
		if (branco.checked == true) {
			if (tamanhoP.checked == false && tamanhoM.checked == false && tamanhoG.checked == false && tamanhoGG.checked == false && tamanhoU.checked == false && tamanho36.checked == false && tamanho38.checked == false && tamanho40.checked == false && tamanho42.checked == false && tamanho44.checked == false && tamanho46.checked == false) {
				if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
					$(".brancoProduto").css("display", "flex");
				} else {
					if (faixa1.checked == true) {
						$(".faixaPreco1.brancoProduto").css("display", "flex");
					}
					if (faixa2.checked == true) {
						$(".faixaPreco2.brancoProduto").css("display", "flex");
					}
					if (faixa3.checked == true) {
						$(".faixaPreco3.brancoProduto").css("display", "flex");
					}
					if (faixa4.checked == true) {
						$(".faixaPreco4.brancoProduto").css("display", "flex");
					}
					if (faixa5.checked == true) {
						$(".faixaPreco5.brancoProduto").css("display", "flex");
					}
				}
			} else {
				if (tamanhoP.checked == true) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanhoP.brancoProduto").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanhoP.faixaPreco1.brancoProduto").css("display", "flex");
						}
						if (faixa2.checked == true) {
							$(".tamanhoP.faixaPreco2.brancoProduto").css("display", "flex");
						}
						if (faixa3.checked == true) {
							$(".tamanhoP.faixaPreco3.brancoProduto").css("display", "flex");
						}
						if (faixa4.checked == true) {
							$(".tamanhoP.faixaPreco4.brancoProduto").css("display", "flex");
						}
						if (faixa5.checked == true) {
							$(".tamanhoP.faixaPreco5.brancoProduto").css("display", "flex");
						}
					}
				}
				if (tamanhoM.checked == true) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanhoM.brancoProduto").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanhoM.faixaPreco1.brancoProduto").css("display", "flex");
						}
						if (faixa2.checked == true) {
							$(".tamanhoM.faixaPreco2.brancoProduto").css("display", "flex");
						}
						if (faixa3.checked == true) {
							$(".tamanhoM.faixaPreco3.brancoProduto").css("display", "flex");
						}
						if (faixa4.checked == true) {
							$(".tamanhoM.faixaPreco4.brancoProduto").css("display", "flex");
						}
						if (faixa5.checked == true) {
							$(".tamanhoM.faixaPreco5.brancoProduto").css("display", "flex");
						}
					}
				}
				if (tamanhoG.checked == true) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanhoG.brancoProduto").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanhoG.faixaPreco1.brancoProduto").css("display", "flex");
						}
						if (faixa2.checked == true) {
							$(".tamanhoG.faixaPreco2.brancoProduto").css("display", "flex");
						}
						if (faixa3.checked == true) {
							$(".tamanhoG.faixaPreco3.brancoProduto").css("display", "flex");
						}
						if (faixa4.checked == true) {
							$(".tamanhoG.faixaPreco4.brancoProduto").css("display", "flex");
						}
						if (faixa5.checked == true) {
							$(".tamanhoG.faixaPreco5.brancoProduto").css("display", "flex");
						}
					}
				}
				if (tamanhoGG.checked == true) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanhoGG.brancoroduto").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanhoGG.faixaPreco1.brancoroduto.").css("display", "flex");
						}
						if (faixa2.checked == true) {
							$(".tamanhoGG.faixaPreco2.brancoroduto").css("display", "flex");
						}
						if (faixa3.checked == true) {
							$(".tamanhoGG.faixaPreco3.brancoroduto").css("display", "flex");
						}
						if (faixa4.checked == true) {
							$(".tamanhoGG.faixaPreco4.brancoroduto").css("display", "flex");
						}
						if (faixa5.checked == true) {
							$(".tamanhoGG.faixaPreco5.brancoroduto").css("display", "flex");
						}
					}
				}
				if (tamanhoU.checked == true) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanhoU.brancoProduto").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanhoU.faixaPreco1.brancoProduto").css("display", "flex");
						}
						if (faixa2.checked == true) {
							$(".tamanhoU.faixaPreco2.brancoProduto").css("display", "flex");
						}
						if (faixa3.checked == true) {
							$(".tamanhoU.faixaPreco3.brancoProduto").css("display", "flex");
						}
						if (faixa4.checked == true) {
							$(".tamanhoU.faixaPreco4.brancoProduto").css("display", "flex");
						}
						if (faixa5.checked == true) {
							$(".tamanhoU.faixaPreco5.brancoProduto").css("display", "flex");
						}
					}
				}
				if (tamanho36.checked == true) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanho36.brancoProduto").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanho36.faixaPreco1.brancoProduto").css("display", "flex");
						}
						if (faixa2.checked == true) {
							$(".tamanho36.faixaPreco2.brancoProduto").css("display", "flex");
						}
						if (faixa3.checked == true) {
							$(".tamanho36.faixaPreco3.brancoProduto").css("display", "flex");
						}
						if (faixa4.checked == true) {
							$(".tamanho36.faixaPreco4.brancoProduto").css("display", "flex");
						}
						if (faixa5.checked == true) {
							$(".tamanho36.faixaPreco5.brancoProduto").css("display", "flex");
						}
					}
				}
				if (tamanho38.checked == true) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanho38.brancoProduto").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanho38.faixaPreco1.brancoProduto").css("display", "flex");
						}
						if (faixa2.checked == true) {
							$(".tamanho38.faixaPreco2.brancoProduto").css("display", "flex");
						}
						if (faixa3.checked == true) {
							$(".tamanho38.faixaPreco3.brancoProduto").css("display", "flex");
						}
						if (faixa4.checked == true) {
							$(".tamanho38.faixaPreco4.brancoProduto").css("display", "flex");
						}
						if (faixa5.checked == true) {
							$(".tamanho38.faixaPreco5.brancoProduto").css("display", "flex");
						}
					}
				}
				if (tamanho40.checked == true) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanho40.brancoProduto").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanho40.faixaPreco1.brancoProduto").css("display", "flex");
						}
						if (faixa2.checked == true) {
							$(".tamanho40.faixaPreco2.brancoProduto").css("display", "flex");
						}
						if (faixa3.checked == true) {
							$(".tamanho40.faixaPreco3.brancoProduto").css("display", "flex");
						}
						if (faixa4.checked == true) {
							$(".tamanho40.faixaPreco4.brancoProduto").css("display", "flex");
						}
						if (faixa5.checked == true) {
							$(".tamanho40.faixaPreco5.brancoProduto").css("display", "flex");
						}
					}
				}
				if (tamanho42.checked == true) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanho42.brancoProduto").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanho42.faixaPreco1.brancoProduto").css("display", "flex");
						}
						if (faixa2.checked == true) {
							$(".tamanho42.faixaPreco2.brancoProduto").css("display", "flex");
						}
						if (faixa3.checked == true) {
							$(".tamanho42.faixaPreco3.brancoProduto").css("display", "flex");
						}
						if (faixa4.checked == true) {
							$(".tamanho42.faixaPreco4.brancoProduto").css("display", "flex");
						}
						if (faixa5.checked == true) {
							$(".tamanho42.faixaPreco5.brancoProduto").css("display", "flex");
						}
					}
				}
				if (tamanho44.checked == true) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanho44.brancoProduto").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanho44.faixaPreco1.brancoProduto").css("display", "flex");
						}
						if (faixa2.checked == true) {
							$(".tamanho44.faixaPreco2.brancoProduto").css("display", "flex");
						}
						if (faixa3.checked == true) {
							$(".tamanho44.faixaPreco3.brancoProduto").css("display", "flex");
						}
						if (faixa4.checked == true) {
							$(".tamanho44.faixaPreco4.brancoProduto").css("display", "flex");
						}
						if (faixa5.checked == true) {
							$(".tamanho44.faixaPreco5.brancoProduto").css("display", "flex");
						}
					}
				}
				if (tamanho46.checked == true) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanho46.brancoProduto").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanho46.faixaPreco1.brancoProduto").css("display", "flex");
						}
						if (faixa2.checked == true) {
							$(".tamanho46.faixaPreco2.brancoProduto").css("display", "flex");
						}
						if (faixa3.checked == true) {
							$(".tamanho46.faixaPreco3.brancoProduto").css("display", "flex");
						}
						if (faixa4.checked == true) {
							$(".tamanho46.faixaPreco4.brancoProduto").css("display", "flex");
						}
						if (faixa5.checked == true) {
							$(".tamanho46.faixaPreco5.brancoProduto").css("display", "flex");
						}
					}
				}
			}
			if (amarelo.checked == false) {
				$(".amareloProduto").hide();
			}
			if (azul.checked == false) {
				$(".azulProduto").hide();
			}
			if (cinza.checked == false) {
				$(".cinzaProduto").hide();
			}
			if (laranja.checked == false) {
				$(".laranjaProduto").hide();
			}
			if (verde.checked == false) {
				$(".verdeProduto").hide();
			}
			if (vermelho.checked == false) {
				$(".vermelhoProduto").hide();
			}
			if (preto.checked == false) {
				$(".pretoProduto").hide();
			}
			if (rosa.checked == false) {
				$(".rosaProduto").hide();
			}
			if (vinho.checked == false) {
				$(".vinhoProduto").hide();
			}
		} else {
			$(".brancoProduto").hide();
			if (tamanhoP.checked == false && tamanhoM.checked == false && tamanhoG.checked == false && tamanhoGG.checked == false && tamanhoU.checked == false && tamanho36.checked == false && tamanho38.checked == false && tamanho40.checked == false && tamanho42.checked == false && tamanho44.checked == false && tamanho46.checked == false) {
				if (faixa1.checked == true) {
					if (faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".faixaPreco2").hide();
						$(".faixaPreco3").hide();
						$(".faixaPreco4").hide();
						$(".faixaPreco5").hide();
					}
					if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
						$(".faixaPreco1").css("display", "flex");
					}
					if (amarelo.checked == true) {
						$(".faixaPreco1.amareloProduto").css("display", "flex");
					}
					if (azul.checked == true) {
						$(".faixaPreco1.azulProduto").css("display", "flex");
					}
					if (branco.checked == true) {
						$(".faixaPreco1.brancoProduto").css("display", "flex");
					}
					if (cinza.checked == true) {
						$(".faixaPreco1.cinzaProduto").css("display", "flex");
					}
					if (laranja.checked == true) {
						$(".faixaPreco1.laranjaProduto").css("display", "flex");
					}
					if (verde.checked == true) {
						$(".faixaPreco1.verdeProduto").css("display", "flex");
					}
					if (vermelho.checked == true) {
						$(".faixaPreco1.vermelhoProduto").css("display", "flex");
					}
					if (preto.checked == true) {
						$(".faixaPreco1.pretoProduto").css("display", "flex");
					}
					if (rosa.checked == true) {
						$(".faixaPreco1.rosaProduto").css("display", "flex");
					}
					if (vinho.checked == true) {
						$(".faixaPreco1.vinhoProduto").css("display", "flex");
					}
				}
				if (faixa2.checked == true) {
					if (faixa1.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".faixaPreco1").hide();
						$(".faixaPreco3").hide();
						$(".faixaPreco4").hide();
						$(".faixaPreco5").hide();
					}
					if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
						$(".faixaPreco2").css("display", "flex");
					}
					if (amarelo.checked == true) {
						$(".faixaPreco2.amareloProduto").css("display", "flex");
					}
					if (azul.checked == true) {
						$(".faixaPreco2.azulProduto").css("display", "flex");
					}
					if (branco.checked == true) {
						$(".faixaPreco2.brancoProduto").css("display", "flex");
					}
					if (cinza.checked == true) {
						$(".faixaPreco2.cinzaProduto").css("display", "flex");
					}
					if (laranja.checked == true) {
						$(".faixaPreco2.laranjaProduto").css("display", "flex");
					}
					if (verde.checked == true) {
						$(".faixaPreco2.verdeProduto").css("display", "flex");
					}
					if (vermelho.checked == true) {
						$(".faixaPreco2.vermelhoProduto").css("display", "flex");
					}
					if (preto.checked == true) {
						$(".faixaPreco2.pretoProduto").css("display", "flex");
					}
					if (rosa.checked == true) {
						$(".faixaPreco2.rosaProduto").css("display", "flex");
					}
					if (vinho.checked == true) {
						$(".faixaPreco2.vinhoProduto").css("display", "flex");
					}
				}
				if (faixa3.checked == true) {
					if (faixa1.checked == false && faixa2.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".faixaPreco1").hide();
						$(".faixaPreco2").hide();
						$(".faixaPreco4").hide();
						$(".faixaPreco5").hide();
					}
					if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
						$(".faixaPreco3").css("display", "flex");
					}
					if (amarelo.checked == true) {
						$(".faixaPreco3.amareloProduto").css("display", "flex");
					}
					if (azul.checked == true) {
						$(".faixaPreco3.azulProduto").css("display", "flex");
					}
					if (branco.checked == true) {
						$(".faixaPreco3.brancoProduto").css("display", "flex");
					}
					if (cinza.checked == true) {
						$(".faixaPreco3.cinzaProduto").css("display", "flex");
					}
					if (laranja.checked == true) {
						$(".faixaPreco3.laranjaProduto").css("display", "flex");
					}
					if (verde.checked == true) {
						$(".faixaPreco3.verdeProduto").css("display", "flex");
					}
					if (vermelho.checked == true) {
						$(".faixaPreco3.vermelhoProduto").css("display", "flex");
					}
					if (preto.checked == true) {
						$(".faixaPreco3.pretoProduto").css("display", "flex");
					}
					if (rosa.checked == true) {
						$(".faixaPreco3.rosaProduto").css("display", "flex");
					}
					if (vinho.checked == true) {
						$(".faixaPreco3.vinhoProduto").css("display", "flex");
					}
				}
				if (faixa4.checked == true) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa5.checked == false) {
						$(".faixaPreco1").hide();
						$(".faixaPreco2").hide();
						$(".faixaPreco3").hide();
						$(".faixaPreco5").hide();
					}
					if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
						$(".faixaPreco4").css("display", "flex");
					}
					if (amarelo.checked == true) {
						$(".faixaPreco4.amareloProduto").css("display", "flex");
					}
					if (azul.checked == true) {
						$(".faixaPreco4.azulProduto").css("display", "flex");
					}
					if (branco.checked == true) {
						$(".faixaPreco4.brancoProduto").css("display", "flex");
					}
					if (cinza.checked == true) {
						$(".faixaPreco4.cinzaProduto").css("display", "flex");
					}
					if (laranja.checked == true) {
						$(".faixaPreco4.laranjaProduto").css("display", "flex");
					}
					if (verde.checked == true) {
						$(".faixaPreco4.verdeProduto").css("display", "flex");
					}
					if (vermelho.checked == true) {
						$(".faixaPreco4.vermelhoProduto").css("display", "flex");
					}
					if (preto.checked == true) {
						$(".faixaPreco4.pretoProduto").css("display", "flex");
					}
					if (rosa.checked == true) {
						$(".faixaPreco4.rosaProduto").css("display", "flex");
					}
					if (vinho.checked == true) {
						$(".faixaPreco4.vinhoProduto").css("display", "flex");
					}
				}
				if (faixa5.checked == true) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false) {
						$(".faixaPreco1").hide();
						$(".faixaPreco2").hide();
						$(".faixaPreco3").hide();
						$(".faixaPreco4").hide();
					}
					if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
						$(".faixaPreco5").css("display", "flex");
					}
					if (amarelo.checked == true) {
						$(".faixaPreco5.amareloProduto").css("display", "flex");
					}
					if (azul.checked == true) {
						$(".faixaPreco5.azulProduto").css("display", "flex");
					}
					if (branco.checked == true) {
						$(".faixaPreco5.brancoProduto").css("display", "flex");
					}
					if (cinza.checked == true) {
						$(".faixaPreco5.cinzaProduto").css("display", "flex");
					}
					if (laranja.checked == true) {
						$(".faixaPreco5.laranjaProduto").css("display", "flex");
					}
					if (verde.checked == true) {
						$(".faixaPreco5.verdeProduto").css("display", "flex");
					}
					if (vermelho.checked == true) {
						$(".faixaPreco5.vermelhoProduto").css("display", "flex");
					}
					if (preto.checked == true) {
						$(".faixaPreco5.pretoProduto").css("display", "flex");
					}
					if (rosa.checked == true) {
						$(".faixaPreco5.rosaProduto").css("display", "flex");
					}
					if (vinho.checked == true) {
						$(".faixaPreco5.vinhoProduto").css("display", "flex");
					}
				}
			}
			if (tamanhoP.checked == true) {
				$(".tamanhoM").hide();
				$(".tamanhoG").hide();
				$(".tamanhoGG").hide();
				$(".tamanhoU").hide();
				$(".tamanho36").hide();
				$(".tamanho38").hide();
				$(".tamanho40").hide();
				$(".tamanho42").hide();
				$(".tamanho44").hide();
				$(".tamanho46").hide();
				if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanhoP").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanhoP.faixaPreco1").css("display", "flex");
							if (faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa2.checked == true) {
							$(".tamanhoP.faixaPreco2").css("display", "flex");
							if (faixa1.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa3.checked == true) {
							$(".tamanhoP.faixaPreco3").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa4.checked == true) {
							$(".tamanhoP.faixaPreco4").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa5.checked == true) {
							$(".tamanhoP.faixaPreco5").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
							}
						}
					}
				}
				if (amarelo.checked == true) {
					$(".tamanhoP.amareloProduto").css("display", "flex");
				}
				if (azul.checked == true) {
					$(".tamanhoP.azulProduto").css("display", "flex");
				}
				if (branco.checked == true) {
					$(".tamanhoP.brancoProduto").css("display", "flex");
				}
				if (cinza.checked == true) {
					$(".tamanhoP.cinzaProduto").css("display", "flex");
				}
				if (laranja.checked == true) {
					$(".tamanhoP.laranjaProduto").css("display", "flex");
				}
				if (verde.checked == true) {
					$(".tamanhoP.verdeProduto").css("display", "flex");
				}
				if (vermelho.checked == true) {
					$(".tamanhoP.vermelhoProduto").css("display", "flex");
				}
				if (preto.checked == true) {
					$(".tamanhoP.pretoProduto").css("display", "flex");
				}
				if (rosa.checked == true) {
					$(".tamanhoP.rosaProduto").css("display", "flex");
				}
				if (vinho.checked == true) {
					$(".tamanhoP.vinhoProduto").css("display", "flex");
				}
			}
			if (tamanhoM.checked == true) {
				$(".tamanhoP").hide();
				$(".tamanhoG").hide();
				$(".tamanhoGG").hide();
				$(".tamanhoU").hide();
				$(".tamanho36").hide();
				$(".tamanho38").hide();
				$(".tamanho40").hide();
				$(".tamanho42").hide();
				$(".tamanho44").hide();
				$(".tamanho46").hide();
				if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanhoM").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanhoM.faixaPreco1").css("display", "flex");
							if (faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa2.checked == true) {
							$(".tamanhoM.faixaPreco2").css("display", "flex");
							if (faixa1.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa3.checked == true) {
							$(".tamanhoM.faixaPreco3").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa4.checked == true) {
							$(".tamanhoM.faixaPreco4").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa5.checked == true) {
							$(".tamanhoM.faixaPreco5").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
							}
						}
					}
				}
				if (amarelo.checked == true) {
					$(".tamanhoM.amareloProduto").css("display", "flex");
				}
				if (azul.checked == true) {
					$(".tamanhoM.azulProduto").css("display", "flex");
				}
				if (branco.checked == true) {
					$(".tamanhoM.brancoProduto").css("display", "flex");
				}
				if (cinza.checked == true) {
					$(".tamanhoM.cinzaProduto").css("display", "flex");
				}
				if (laranja.checked == true) {
					$(".tamanhoM.laranjaProduto").css("display", "flex");
				}
				if (verde.checked == true) {
					$(".tamanhoM.verdeProduto").css("display", "flex");
				}
				if (vermelho.checked == true) {
					$(".tamanhoM.vermelhoProduto").css("display", "flex");
				}
				if (preto.checked == true) {
					$(".tamanhoM.pretoProduto").css("display", "flex");
				}
				if (rosa.checked == true) {
					$(".tamanhoM.rosaProduto").css("display", "flex");
				}
				if (vinho.checked == true) {
					$(".tamanhoM.vinhoProduto").css("display", "flex");
				}
			}
			if (tamanhoG.checked == true) {
				$(".tamanhoP").hide();
				$(".tamanhoM").hide();
				$(".tamanhoGG").hide();
				$(".tamanhoU").hide();
				$(".tamanho36").hide();
				$(".tamanho38").hide();
				$(".tamanho40").hide();
				$(".tamanho42").hide();
				$(".tamanho44").hide();
				$(".tamanho46").hide();
				if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanhoG").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanhoG.faixaPreco1").css("display", "flex");
							if (faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa2.checked == true) {
							$(".tamanhoG.faixaPreco2").css("display", "flex");
							if (faixa1.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa3.checked == true) {
							$(".tamanhoG.faixaPreco3").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa4.checked == true) {
							$(".tamanhoG.faixaPreco4").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa5.checked == true) {
							$(".tamanhoG.faixaPreco5").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
							}
						}
					}
				}
				if (amarelo.checked == true) {
					$(".tamanhoG.amareloProduto").css("display", "flex");
				}
				if (azul.checked == true) {
					$(".tamanhoG.azulProduto").css("display", "flex");
				}
				if (branco.checked == true) {
					$(".tamanhoG.brancoProduto").css("display", "flex");
				}
				if (cinza.checked == true) {
					$(".tamanhoG.cinzaProduto").css("display", "flex");
				}
				if (laranja.checked == true) {
					$(".tamanhoG.laranjaProduto").css("display", "flex");
				}
				if (verde.checked == true) {
					$(".tamanhoG.verdeProduto").css("display", "flex");
				}
				if (vermelho.checked == true) {
					$(".tamanhoG.vermelhoProduto").css("display", "flex");
				}
				if (preto.checked == true) {
					$(".tamanhoG.pretoProduto").css("display", "flex");
				}
				if (rosa.checked == true) {
					$(".tamanhoG.rosaProduto").css("display", "flex");
				}
				if (vinho.checked == true) {
					$(".tamanhoG.vinhoProduto").css("display", "flex");
				}
			}
			if (tamanhoGG.checked == true) {
				$(".tamanhoP").hide();
				$(".tamanhoM").hide();
				$(".tamanhoG").hide();
				$(".tamanhoU").hide();
				$(".tamanho36").hide();
				$(".tamanho38").hide();
				$(".tamanho40").hide();
				$(".tamanho42").hide();
				$(".tamanho44").hide();
				$(".tamanho46").hide();
				if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanhoGG").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanhoGG.faixaPreco1").css("display", "flex");
							if (faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa2.checked == true) {
							$(".tamanhoGG.faixaPreco2").css("display", "flex");
							if (faixa1.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa3.checked == true) {
							$(".tamanhoGG.faixaPreco3").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa4.checked == true) {
							$(".tamanhoGG.faixaPreco4").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa5.checked == true) {
							$(".tamanhoGG.faixaPreco5").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
							}
						}
					}
				}
				if (amarelo.checked == true) {
					$(".tamanhoGG.amareloProduto").css("display", "flex");
				}
				if (azul.checked == true) {
					$(".tamanhoGG.azulProduto").css("display", "flex");
				}
				if (branco.checked == true) {
					$(".tamanhoGG.brancoProduto").css("display", "flex");
				}
				if (cinza.checked == true) {
					$(".tamanhoGG.cinzaProduto").css("display", "flex");
				}
				if (laranja.checked == true) {
					$(".tamanhoGG.laranjaProduto").css("display", "flex");
				}
				if (verde.checked == true) {
					$(".tamanhoGG.verdeProduto").css("display", "flex");
				}
				if (vermelho.checked == true) {
					$(".tamanhoGG.vermelhoProduto").css("display", "flex");
				}
				if (preto.checked == true) {
					$(".tamanhoGG.pretoProduto").css("display", "flex");
				}
				if (rosa.checked == true) {
					$(".tamanhoGG.rosaProduto").css("display", "flex");
				}
				if (vinho.checked == true) {
					$(".tamanhoGG.vinhoProduto").css("display", "flex");
				}
			}
			if (tamanhoU.checked == true) {
				$(".tamanhoP").hide();
				$(".tamanhoM").hide();
				$(".tamanhoG").hide();
				$(".tamanhoGG").hide();
				$(".tamanho36").hide();
				$(".tamanho38").hide();
				$(".tamanho40").hide();
				$(".tamanho42").hide();
				$(".tamanho44").hide();
				$(".tamanho46").hide();
				if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanhoU").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanhoU.faixaPreco1").css("display", "flex");
							if (faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa2.checked == true) {
							$(".tamanhoU.faixaPreco2").css("display", "flex");
							if (faixa1.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa3.checked == true) {
							$(".tamanhoU.faixaPreco3").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa4.checked == true) {
							$(".tamanhoU.faixaPreco4").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa5.checked == true) {
							$(".tamanhoU.faixaPreco5").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
							}
						}
					}
				}
				if (amarelo.checked == true) {
					$(".tamanhoU.amareloProduto").css("display", "flex");
				}
				if (azul.checked == true) {
					$(".tamanhoU.azulProduto").css("display", "flex");
				}
				if (branco.checked == true) {
					$(".tamanhoU.brancoProduto").css("display", "flex");
				}
				if (cinza.checked == true) {
					$(".tamanhoU.cinzaProduto").css("display", "flex");
				}
				if (laranja.checked == true) {
					$(".tamanhoU.laranjaProduto").css("display", "flex");
				}
				if (verde.checked == true) {
					$(".tamanhoU.verdeProduto").css("display", "flex");
				}
				if (vermelho.checked == true) {
					$(".tamanhoU.vermelhoProduto").css("display", "flex");
				}
				if (preto.checked == true) {
					$(".tamanhoU.pretoProduto").css("display", "flex");
				}
				if (rosa.checked == true) {
					$(".tamanhoU.rosaProduto").css("display", "flex");
				}
				if (vinho.checked == true) {
					$(".tamanhoU.vinhoProduto").css("display", "flex");
				}
			}
			if (tamanho36.checked == true) {
				$(".tamanhoP").hide();
				$(".tamanhoM").hide();
				$(".tamanhoG").hide();
				$(".tamanhoGG").hide();
				$(".tamanhoU").hide();
				$(".tamanho38").hide();
				$(".tamanho40").hide();
				$(".tamanho42").hide();
				$(".tamanho44").hide();
				$(".tamanho46").hide();
				if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanho36").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanho36.faixaPreco1").css("display", "flex");
							if (faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa2.checked == true) {
							$(".tamanho36.faixaPreco2").css("display", "flex");
							if (faixa1.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa3.checked == true) {
							$(".tamanho36.faixaPreco3").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa4.checked == true) {
							$(".tamanho36.faixaPreco4").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa5.checked == true) {
							$(".tamanho36.faixaPreco5").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
							}
						}
					}
				}
				if (amarelo.checked == true) {
					$(".tamanho36.amareloProduto").css("display", "flex");
				}
				if (azul.checked == true) {
					$(".tamanho36.azulProduto").css("display", "flex");
				}
				if (branco.checked == true) {
					$(".tamanho36.brancoProduto").css("display", "flex");
				}
				if (cinza.checked == true) {
					$(".tamanho36.cinzaProduto").css("display", "flex");
				}
				if (laranja.checked == true) {
					$(".tamanho36.laranjaProduto").css("display", "flex");
				}
				if (verde.checked == true) {
					$(".tamanho36.verdeProduto").css("display", "flex");
				}
				if (vermelho.checked == true) {
					$(".tamanho36.vermelhoProduto").css("display", "flex");
				}
				if (preto.checked == true) {
					$(".tamanho36.pretoProduto").css("display", "flex");
				}
				if (rosa.checked == true) {
					$(".tamanho36.rosaProduto").css("display", "flex");
				}
				if (vinho.checked == true) {
					$(".tamanho36.vinhoProduto").css("display", "flex");
				}
			}
			if (tamanho38.checked == true) {
				$(".tamanhoP").hide();
				$(".tamanhoM").hide();
				$(".tamanhoG").hide();
				$(".tamanhoGG").hide();
				$(".tamanhoU").hide();
				$(".tamanho36").hide();
				$(".tamanho40").hide();
				$(".tamanho42").hide();
				$(".tamanho44").hide();
				$(".tamanho46").hide();
				if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanho38").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanho38.faixaPreco1").css("display", "flex");
							if (faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa2.checked == true) {
							$(".tamanho38.faixaPreco2").css("display", "flex");
							if (faixa1.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa3.checked == true) {
							$(".tamanho38.faixaPreco3").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa4.checked == true) {
							$(".tamanho38.faixaPreco4").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa5.checked == true) {
							$(".tamanho38.faixaPreco5").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
							}
						}
					}
				}
				if (amarelo.checked == true) {
					$(".tamanho38.amareloProduto").css("display", "flex");
				}
				if (azul.checked == true) {
					$(".tamanho38.azulProduto").css("display", "flex");
				}
				if (branco.checked == true) {
					$(".tamanho38.brancoProduto").css("display", "flex");
				}
				if (cinza.checked == true) {
					$(".tamanho38.cinzaProduto").css("display", "flex");
				}
				if (laranja.checked == true) {
					$(".tamanho38.laranjaProduto").css("display", "flex");
				}
				if (verde.checked == true) {
					$(".tamanho38.verdeProduto").css("display", "flex");
				}
				if (vermelho.checked == true) {
					$(".tamanho38.vermelhoProduto").css("display", "flex");
				}
				if (preto.checked == true) {
					$(".tamanho38.pretoProduto").css("display", "flex");
				}
				if (rosa.checked == true) {
					$(".tamanho38.rosaProduto").css("display", "flex");
				}
				if (vinho.checked == true) {
					$(".tamanho38.vinhoProduto").css("display", "flex");
				}
			}
			if (tamanho40.checked == true) {
				$(".tamanhoP").hide();
				$(".tamanhoM").hide();
				$(".tamanhoG").hide();
				$(".tamanhoGG").hide();
				$(".tamanhoU").hide();
				$(".tamanho36").hide();
				$(".tamanho38").hide();
				$(".tamanho42").hide();
				$(".tamanho44").hide();
				$(".tamanho46").hide();
				if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanho40").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanho40.faixaPreco1").css("display", "flex");
							if (faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa2.checked == true) {
							$(".tamanho40.faixaPreco2").css("display", "flex");
							if (faixa1.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa3.checked == true) {
							$(".tamanho40.faixaPreco3").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa4.checked == true) {
							$(".tamanho40.faixaPreco4").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa5.checked == true) {
							$(".tamanho40.faixaPreco5").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
							}
						}
					}
				}
				if (amarelo.checked == true) {
					$(".tamanho40.amareloProduto").css("display", "flex");
				}
				if (azul.checked == true) {
					$(".tamanho40.azulProduto").css("display", "flex");
				}
				if (branco.checked == true) {
					$(".tamanho40.brancoProduto").css("display", "flex");
				}
				if (cinza.checked == true) {
					$(".tamanho40.cinzaProduto").css("display", "flex");
				}
				if (laranja.checked == true) {
					$(".tamanho40.laranjaProduto").css("display", "flex");
				}
				if (verde.checked == true) {
					$(".tamanho40.verdeProduto").css("display", "flex");
				}
				if (vermelho.checked == true) {
					$(".tamanho40.vermelhoProduto").css("display", "flex");
				}
				if (preto.checked == true) {
					$(".tamanho40.pretoProduto").css("display", "flex");
				}
				if (rosa.checked == true) {
					$(".tamanho40.rosaProduto").css("display", "flex");
				}
				if (vinho.checked == true) {
					$(".tamanho40.vinhoProduto").css("display", "flex");
				}
			}
			if (tamanho42.checked == true) {
				$(".tamanhoP").hide();
				$(".tamanhoM").hide();
				$(".tamanhoG").hide();
				$(".tamanhoGG").hide();
				$(".tamanhoU").hide();
				$(".tamanho36").hide();
				$(".tamanho38").hide();
				$(".tamanho40").hide();
				$(".tamanho44").hide();
				$(".tamanho46").hide();
				if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanho42").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanho42.faixaPreco1").css("display", "flex");
							if (faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa2.checked == true) {
							$(".tamanho42.faixaPreco2").css("display", "flex");
							if (faixa1.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa3.checked == true) {
							$(".tamanho42.faixaPreco3").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa4.checked == true) {
							$(".tamanho42.faixaPreco4").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa5.checked == true) {
							$(".tamanho42.faixaPreco5").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
							}
						}
					}
				}
				if (amarelo.checked == true) {
					$(".tamanho42.amareloProduto").css("display", "flex");
				}
				if (azul.checked == true) {
					$(".tamanho42.azulProduto").css("display", "flex");
				}
				if (branco.checked == true) {
					$(".tamanho42.brancoProduto").css("display", "flex");
				}
				if (cinza.checked == true) {
					$(".tamanho42.cinzaProduto").css("display", "flex");
				}
				if (laranja.checked == true) {
					$(".tamanho42.laranjaProduto").css("display", "flex");
				}
				if (verde.checked == true) {
					$(".tamanho42.verdeProduto").css("display", "flex");
				}
				if (vermelho.checked == true) {
					$(".tamanho42.vermelhoProduto").css("display", "flex");
				}
				if (preto.checked == true) {
					$(".tamanho42.pretoProduto").css("display", "flex");
				}
				if (rosa.checked == true) {
					$(".tamanho42.rosaProduto").css("display", "flex");
				}
				if (vinho.checked == true) {
					$(".tamanho42.vinhoProduto").css("display", "flex");
				}
			}
			if (tamanho44.checked == true) {
				$(".tamanhoP").hide();
				$(".tamanhoM").hide();
				$(".tamanhoG").hide();
				$(".tamanhoGG").hide();
				$(".tamanhoU").hide();
				$(".tamanho36").hide();
				$(".tamanho38").hide();
				$(".tamanho40").hide();
				$(".tamanho42").hide();
				$(".tamanho46").hide();
				if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanho44").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanho44.faixaPreco1").css("display", "flex");
							if (faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa2.checked == true) {
							$(".tamanho44.faixaPreco2").css("display", "flex");
							if (faixa1.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa3.checked == true) {
							$(".tamanho44.faixaPreco3").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa4.checked == true) {
							$(".tamanho44.faixaPreco4").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa5.checked == true) {
							$(".tamanho44.faixaPreco5").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
							}
						}
					}
				}
				if (amarelo.checked == true) {
					$(".tamanho44.amareloProduto").css("display", "flex");
				}
				if (azul.checked == true) {
					$(".tamanho44.azulProduto").css("display", "flex");
				}
				if (branco.checked == true) {
					$(".tamanho44.brancoProduto").css("display", "flex");
				}
				if (cinza.checked == true) {
					$(".tamanho44.cinzaProduto").css("display", "flex");
				}
				if (laranja.checked == true) {
					$(".tamanho44.laranjaProduto").css("display", "flex");
				}
				if (verde.checked == true) {
					$(".tamanho44.verdeProduto").css("display", "flex");
				}
				if (vermelho.checked == true) {
					$(".tamanho44.vermelhoProduto").css("display", "flex");
				}
				if (preto.checked == true) {
					$(".tamanho44.pretoProduto").css("display", "flex");
				}
				if (rosa.checked == true) {
					$(".tamanho44.rosaProduto").css("display", "flex");
				}
				if (vinho.checked == true) {
					$(".tamanho44.vinhoProduto").css("display", "flex");
				}
			}
			if (tamanho46.checked == true) {
				$(".tamanhoP").hide();
				$(".tamanhoM").hide();
				$(".tamanhoG").hide();
				$(".tamanhoGG").hide();
				$(".tamanhoU").hide();
				$(".tamanho36").hide();
				$(".tamanho38").hide();
				$(".tamanho40").hide();
				$(".tamanho42").hide();
				$(".tamanho44").hide();
				if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanho46").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanho46.faixaPreco1").css("display", "flex");
							if (faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa2.checked == true) {
							$(".tamanho46.faixaPreco2").css("display", "flex");
							if (faixa1.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa3.checked == true) {
							$(".tamanho46.faixaPreco3").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa4.checked == true) {
							$(".tamanho46.faixaPreco4").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa5.checked == true) {
							$(".tamanho46.faixaPreco5").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
							}
						}
					}
				}
				if (amarelo.checked == true) {
					$(".tamanho46.amareloProduto").css("display", "flex");
				}
				if (azul.checked == true) {
					$(".tamanho46.azulProduto").css("display", "flex");
				}
				if (branco.checked == true) {
					$(".tamanho46.brancoProduto").css("display", "flex");
				}
				if (cinza.checked == true) {
					$(".tamanho46.cinzaProduto").css("display", "flex");
				}
				if (laranja.checked == true) {
					$(".tamanho46.laranjaProduto").css("display", "flex");
				}
				if (verde.checked == true) {
					$(".tamanho46.verdeProduto").css("display", "flex");
				}
				if (vermelho.checked == true) {
					$(".tamanho46.vermelhoProduto").css("display", "flex");
				}
				if (preto.checked == true) {
					$(".tamanho46.pretoProduto").css("display", "flex");
				}
				if (rosa.checked == true) {
					$(".tamanho46.rosaProduto").css("display", "flex");
				}
				if (vinho.checked == true) {
					$(".tamanho46.vinhoProduto").css("display", "flex");
				}
			}
		}
	})

	$(".filtrar-checkbox #cinza").click(function () {
		if (cinza.checked == true) {
			if (tamanhoP.checked == false && tamanhoM.checked == false && tamanhoG.checked == false && tamanhoGG.checked == false && tamanhoU.checked == false && tamanho36.checked == false && tamanho38.checked == false && tamanho40.checked == false && tamanho42.checked == false && tamanho44.checked == false && tamanho46.checked == false) {
				if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
					$(".cinzaProduto").css("display", "flex");
				} else {
					if (faixa1.checked == true) {
						$(".faixaPreco1.cinzaProduto").css("display", "flex");
					}
					if (faixa2.checked == true) {
						$(".faixaPreco2.cinzaProduto").css("display", "flex");
					}
					if (faixa3.checked == true) {
						$(".faixaPreco3.cinzaProduto").css("display", "flex");
					}
					if (faixa4.checked == true) {
						$(".faixaPreco4.cinzaProduto").css("display", "flex");
					}
					if (faixa5.checked == true) {
						$(".faixaPreco5.cinzaProduto").css("display", "flex");
					}
				}
			} else {
				if (tamanhoP.checked == true) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanhoP.cinzaProduto").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanhoP.faixaPreco1.cinzaProduto").css("display", "flex");
						}
						if (faixa2.checked == true) {
							$(".tamanhoP.faixaPreco2.cinzaProduto").css("display", "flex");
						}
						if (faixa3.checked == true) {
							$(".tamanhoP.faixaPreco3.cinzaProduto").css("display", "flex");
						}
						if (faixa4.checked == true) {
							$(".tamanhoP.faixaPreco4.cinzaProduto").css("display", "flex");
						}
						if (faixa5.checked == true) {
							$(".tamanhoP.faixaPreco5.cinzaProduto").css("display", "flex");
						}
					}
				}
				if (tamanhoM.checked == true) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanhoM.cinzaProduto").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanhoM.faixaPreco1.cinzaProduto").css("display", "flex");
						}
						if (faixa2.checked == true) {
							$(".tamanhoM.faixaPreco2.cinzaProduto").css("display", "flex");
						}
						if (faixa3.checked == true) {
							$(".tamanhoM.faixaPreco3.cinzaProduto").css("display", "flex");
						}
						if (faixa4.checked == true) {
							$(".tamanhoM.faixaPreco4.cinzaProduto").css("display", "flex");
						}
						if (faixa5.checked == true) {
							$(".tamanhoM.faixaPreco5.cinzaProduto").css("display", "flex");
						}
					}
				}
				if (tamanhoG.checked == true) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanhoG.cinzaProduto").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanhoG.faixaPreco1.cinzaProduto").css("display", "flex");
						}
						if (faixa2.checked == true) {
							$(".tamanhoG.faixaPreco2.cinzaProduto").css("display", "flex");
						}
						if (faixa3.checked == true) {
							$(".tamanhoG.faixaPreco3.cinzaProduto").css("display", "flex");
						}
						if (faixa4.checked == true) {
							$(".tamanhoG.faixaPreco4.cinzaProduto").css("display", "flex");
						}
						if (faixa5.checked == true) {
							$(".tamanhoG.faixaPreco5.cinzaProduto").css("display", "flex");
						}
					}
				}
				if (tamanhoGG.checked == true) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanhoGG.cinzaProduto").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanhoGG.faixaPreco1.cinzaProduto").css("display", "flex");
						}
						if (faixa2.checked == true) {
							$(".tamanhoGG.faixaPreco2.cinzaProduto").css("display", "flex");
						}
						if (faixa3.checked == true) {
							$(".tamanhoGG.faixaPreco3.cinzaProduto").css("display", "flex");
						}
						if (faixa4.checked == true) {
							$(".tamanhoGG.faixaPreco4.cinzaProduto").css("display", "flex");
						}
						if (faixa5.checked == true) {
							$(".tamanhoGG.faixaPreco5.cinzaProduto").css("display", "flex");
						}
					}
				}
				if (tamanhoU.checked == true) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanhoU.cinzaProduto").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanhoU.faixaPreco1.cinzaProduto").css("display", "flex");
						}
						if (faixa2.checked == true) {
							$(".tamanhoU.faixaPreco2.cinzaProduto").css("display", "flex");
						}
						if (faixa3.checked == true) {
							$(".tamanhoU.faixaPreco3.cinzaProduto").css("display", "flex");
						}
						if (faixa4.checked == true) {
							$(".tamanhoU.faixaPreco4.cinzaProduto").css("display", "flex");
						}
						if (faixa5.checked == true) {
							$(".tamanhoU.faixaPreco5.cinzaProduto").css("display", "flex");
						}
					}
				}
				if (tamanho36.checked == true) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanho36.cinzaProduto").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanho36.faixaPreco1.cinzaProduto").css("display", "flex");
						}
						if (faixa2.checked == true) {
							$(".tamanho36.faixaPreco2.cinzaProduto").css("display", "flex");
						}
						if (faixa3.checked == true) {
							$(".tamanho36.faixaPreco3.cinzaProduto").css("display", "flex");
						}
						if (faixa4.checked == true) {
							$(".tamanho36.faixaPreco4.cinzaProduto").css("display", "flex");
						}
						if (faixa5.checked == true) {
							$(".tamanho36.faixaPreco5.cinzaProduto").css("display", "flex");
						}
					}
				}
				if (tamanho38.checked == true) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanho38.cinzaProduto").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanho38.faixaPreco1.cinzaProduto").css("display", "flex");
						}
						if (faixa2.checked == true) {
							$(".tamanho38.faixaPreco2.cinzaProduto").css("display", "flex");
						}
						if (faixa3.checked == true) {
							$(".tamanho38.faixaPreco3.cinzaProduto").css("display", "flex");
						}
						if (faixa4.checked == true) {
							$(".tamanho38.faixaPreco4.cinzaProduto").css("display", "flex");
						}
						if (faixa5.checked == true) {
							$(".tamanho38.faixaPreco5.cinzaProduto").css("display", "flex");
						}
					}
				}
				if (tamanho40.checked == true) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanho40.cinzaProduto").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanho40.faixaPreco1.cinzaProduto").css("display", "flex");
						}
						if (faixa2.checked == true) {
							$(".tamanho40.faixaPreco2.cinzaProduto").css("display", "flex");
						}
						if (faixa3.checked == true) {
							$(".tamanho40.faixaPreco3.cinzaProduto").css("display", "flex");
						}
						if (faixa4.checked == true) {
							$(".tamanho40.faixaPreco4.cinzaProduto").css("display", "flex");
						}
						if (faixa5.checked == true) {
							$(".tamanho40.faixaPreco5.cinzaProduto").css("display", "flex");
						}
					}
				}
				if (tamanho42.checked == true) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanho42.cinzaProduto").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanho42.faixaPreco1.cinzaProduto").css("display", "flex");
						}
						if (faixa2.checked == true) {
							$(".tamanho42.faixaPreco2.cinzaProduto").css("display", "flex");
						}
						if (faixa3.checked == true) {
							$(".tamanho42.faixaPreco3.cinzaProduto").css("display", "flex");
						}
						if (faixa4.checked == true) {
							$(".tamanho42.faixaPreco4.cinzaProduto").css("display", "flex");
						}
						if (faixa5.checked == true) {
							$(".tamanho42.faixaPreco5.cinzaProduto").css("display", "flex");
						}
					}
				}
				if (tamanho44.checked == true) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanho44.cinzaProduto").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanho44.faixaPreco1.cinzaProduto").css("display", "flex");
						}
						if (faixa2.checked == true) {
							$(".tamanho44.faixaPreco2.cinzaProduto").css("display", "flex");
						}
						if (faixa3.checked == true) {
							$(".tamanho44.faixaPreco3.cinzaProduto").css("display", "flex");
						}
						if (faixa4.checked == true) {
							$(".tamanho44.faixaPreco4.cinzaProduto").css("display", "flex");
						}
						if (faixa5.checked == true) {
							$(".tamanho44.faixaPreco5.cinzaProduto").css("display", "flex");
						}
					}
				}
				if (tamanho46.checked == true) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanho46.cinzaProduto").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanho46.faixaPreco1.cinzaProduto").css("display", "flex");
						}
						if (faixa2.checked == true) {
							$(".tamanho46.faixaPreco2.cinzaProduto").css("display", "flex");
						}
						if (faixa3.checked == true) {
							$(".tamanho46.faixaPreco3.cinzaProduto").css("display", "flex");
						}
						if (faixa4.checked == true) {
							$(".tamanho46.faixaPreco4.cinzaProduto").css("display", "flex");
						}
						if (faixa5.checked == true) {
							$(".tamanho46.faixaPreco5.cinzaProduto").css("display", "flex");
						}
					}
				}
			}
			if (amarelo.checked == false) {
				$(".amareloProduto").hide();
			}
			if (azul.checked == false) {
				$(".azulProduto").hide();
			}
			if (branco.checked == false) {
				$(".brancoProduto").hide();
			}
			if (laranja.checked == false) {
				$(".laranjaProduto").hide();
			}
			if (verde.checked == false) {
				$(".verdeProduto").hide();
			}
			if (vermelho.checked == false) {
				$(".vermelhoProduto").hide();
			}
			if (preto.checked == false) {
				$(".pretoProduto").hide();
			}
			if (rosa.checked == false) {
				$(".rosaProduto").hide();
			}
			if (vinho.checked == false) {
				$(".vinhoProduto").hide();
			}
		} else {
			$(".cinzaProduto").hide();
			if (tamanhoP.checked == false && tamanhoM.checked == false && tamanhoG.checked == false && tamanhoGG.checked == false && tamanhoU.checked == false && tamanho36.checked == false && tamanho38.checked == false && tamanho40.checked == false && tamanho42.checked == false && tamanho44.checked == false && tamanho46.checked == false) {
				if (faixa1.checked == true) {
					if (faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".faixaPreco2").hide();
						$(".faixaPreco3").hide();
						$(".faixaPreco4").hide();
						$(".faixaPreco5").hide();
					}
					if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
						$(".faixaPreco1").css("display", "flex");
					}
					if (amarelo.checked == true) {
						$(".faixaPreco1.amareloProduto").css("display", "flex");
					}
					if (azul.checked == true) {
						$(".faixaPreco1.azulProduto").css("display", "flex");
					}
					if (branco.checked == true) {
						$(".faixaPreco1.brancoProduto").css("display", "flex");
					}
					if (cinza.checked == true) {
						$(".faixaPreco1.cinzaProduto").css("display", "flex");
					}
					if (laranja.checked == true) {
						$(".faixaPreco1.laranjaProduto").css("display", "flex");
					}
					if (verde.checked == true) {
						$(".faixaPreco1.verdeProduto").css("display", "flex");
					}
					if (vermelho.checked == true) {
						$(".faixaPreco1.vermelhoProduto").css("display", "flex");
					}
					if (preto.checked == true) {
						$(".faixaPreco1.pretoProduto").css("display", "flex");
					}
					if (rosa.checked == true) {
						$(".faixaPreco1.rosaProduto").css("display", "flex");
					}
					if (vinho.checked == true) {
						$(".faixaPreco1.vinhoProduto").css("display", "flex");
					}
				}
				if (faixa2.checked == true) {
					if (faixa1.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".faixaPreco1").hide();
						$(".faixaPreco3").hide();
						$(".faixaPreco4").hide();
						$(".faixaPreco5").hide();
					}
					if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
						$(".faixaPreco2").css("display", "flex");
					}
					if (amarelo.checked == true) {
						$(".faixaPreco2.amareloProduto").css("display", "flex");
					}
					if (azul.checked == true) {
						$(".faixaPreco2.azulProduto").css("display", "flex");
					}
					if (branco.checked == true) {
						$(".faixaPreco2.brancoProduto").css("display", "flex");
					}
					if (cinza.checked == true) {
						$(".faixaPreco2.cinzaProduto").css("display", "flex");
					}
					if (laranja.checked == true) {
						$(".faixaPreco2.laranjaProduto").css("display", "flex");
					}
					if (verde.checked == true) {
						$(".faixaPreco2.verdeProduto").css("display", "flex");
					}
					if (vermelho.checked == true) {
						$(".faixaPreco2.vermelhoProduto").css("display", "flex");
					}
					if (preto.checked == true) {
						$(".faixaPreco2.pretoProduto").css("display", "flex");
					}
					if (rosa.checked == true) {
						$(".faixaPreco2.rosaProduto").css("display", "flex");
					}
					if (vinho.checked == true) {
						$(".faixaPreco2.vinhoProduto").css("display", "flex");
					}
				}
				if (faixa3.checked == true) {
					if (faixa1.checked == false && faixa2.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".faixaPreco1").hide();
						$(".faixaPreco2").hide();
						$(".faixaPreco4").hide();
						$(".faixaPreco5").hide();
					}
					if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
						$(".faixaPreco3").css("display", "flex");
					}
					if (amarelo.checked == true) {
						$(".faixaPreco3.amareloProduto").css("display", "flex");
					}
					if (azul.checked == true) {
						$(".faixaPreco3.azulProduto").css("display", "flex");
					}
					if (branco.checked == true) {
						$(".faixaPreco3.brancoProduto").css("display", "flex");
					}
					if (cinza.checked == true) {
						$(".faixaPreco3.cinzaProduto").css("display", "flex");
					}
					if (laranja.checked == true) {
						$(".faixaPreco3.laranjaProduto").css("display", "flex");
					}
					if (verde.checked == true) {
						$(".faixaPreco3.verdeProduto").css("display", "flex");
					}
					if (vermelho.checked == true) {
						$(".faixaPreco3.vermelhoProduto").css("display", "flex");
					}
					if (preto.checked == true) {
						$(".faixaPreco3.pretoProduto").css("display", "flex");
					}
					if (rosa.checked == true) {
						$(".faixaPreco3.rosaProduto").css("display", "flex");
					}
					if (vinho.checked == true) {
						$(".faixaPreco3.vinhoProduto").css("display", "flex");
					}
				}
				if (faixa4.checked == true) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa5.checked == false) {
						$(".faixaPreco1").hide();
						$(".faixaPreco2").hide();
						$(".faixaPreco3").hide();
						$(".faixaPreco5").hide();
					}
					if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
						$(".faixaPreco4").css("display", "flex");
					}
					if (amarelo.checked == true) {
						$(".faixaPreco4.amareloProduto").css("display", "flex");
					}
					if (azul.checked == true) {
						$(".faixaPreco4.azulProduto").css("display", "flex");
					}
					if (branco.checked == true) {
						$(".faixaPreco4.brancoProduto").css("display", "flex");
					}
					if (cinza.checked == true) {
						$(".faixaPreco4.cinzaProduto").css("display", "flex");
					}
					if (laranja.checked == true) {
						$(".faixaPreco4.laranjaProduto").css("display", "flex");
					}
					if (verde.checked == true) {
						$(".faixaPreco4.verdeProduto").css("display", "flex");
					}
					if (vermelho.checked == true) {
						$(".faixaPreco4.vermelhoProduto").css("display", "flex");
					}
					if (preto.checked == true) {
						$(".faixaPreco4.pretoProduto").css("display", "flex");
					}
					if (rosa.checked == true) {
						$(".faixaPreco4.rosaProduto").css("display", "flex");
					}
					if (vinho.checked == true) {
						$(".faixaPreco4.vinhoProduto").css("display", "flex");
					}
				}
				if (faixa5.checked == true) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false) {
						$(".faixaPreco1").hide();
						$(".faixaPreco2").hide();
						$(".faixaPreco3").hide();
						$(".faixaPreco4").hide();
					}
					if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
						$(".faixaPreco5").css("display", "flex");
					}
					if (amarelo.checked == true) {
						$(".faixaPreco5.amareloProduto").css("display", "flex");
					}
					if (azul.checked == true) {
						$(".faixaPreco5.azulProduto").css("display", "flex");
					}
					if (branco.checked == true) {
						$(".faixaPreco5.brancoProduto").css("display", "flex");
					}
					if (cinza.checked == true) {
						$(".faixaPreco5.cinzaProduto").css("display", "flex");
					}
					if (laranja.checked == true) {
						$(".faixaPreco5.laranjaProduto").css("display", "flex");
					}
					if (verde.checked == true) {
						$(".faixaPreco5.verdeProduto").css("display", "flex");
					}
					if (vermelho.checked == true) {
						$(".faixaPreco5.vermelhoProduto").css("display", "flex");
					}
					if (preto.checked == true) {
						$(".faixaPreco5.pretoProduto").css("display", "flex");
					}
					if (rosa.checked == true) {
						$(".faixaPreco5.rosaProduto").css("display", "flex");
					}
					if (vinho.checked == true) {
						$(".faixaPreco5.vinhoProduto").css("display", "flex");
					}
				}
			}
			if (tamanhoP.checked == true) {
				$(".tamanhoM").hide();
				$(".tamanhoG").hide();
				$(".tamanhoGG").hide();
				$(".tamanhoU").hide();
				$(".tamanho36").hide();
				$(".tamanho38").hide();
				$(".tamanho40").hide();
				$(".tamanho42").hide();
				$(".tamanho44").hide();
				$(".tamanho46").hide();
				if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanhoP").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanhoP.faixaPreco1").css("display", "flex");
							if (faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa2.checked == true) {
							$(".tamanhoP.faixaPreco2").css("display", "flex");
							if (faixa1.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa3.checked == true) {
							$(".tamanhoP.faixaPreco3").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa4.checked == true) {
							$(".tamanhoP.faixaPreco4").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa5.checked == true) {
							$(".tamanhoP.faixaPreco5").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
							}
						}
					}
				}
				if (amarelo.checked == true) {
					$(".tamanhoP.amareloProduto").css("display", "flex");
				}
				if (azul.checked == true) {
					$(".tamanhoP.azulProduto").css("display", "flex");
				}
				if (branco.checked == true) {
					$(".tamanhoP.brancoProduto").css("display", "flex");
				}
				if (cinza.checked == true) {
					$(".tamanhoP.cinzaProduto").css("display", "flex");
				}
				if (laranja.checked == true) {
					$(".tamanhoP.laranjaProduto").css("display", "flex");
				}
				if (verde.checked == true) {
					$(".tamanhoP.verdeProduto").css("display", "flex");
				}
				if (vermelho.checked == true) {
					$(".tamanhoP.vermelhoProduto").css("display", "flex");
				}
				if (preto.checked == true) {
					$(".tamanhoP.pretoProduto").css("display", "flex");
				}
				if (rosa.checked == true) {
					$(".tamanhoP.rosaProduto").css("display", "flex");
				}
				if (vinho.checked == true) {
					$(".tamanhoP.vinhoProduto").css("display", "flex");
				}
			}
			if (tamanhoM.checked == true) {
				$(".tamanhoP").hide();
				$(".tamanhoG").hide();
				$(".tamanhoGG").hide();
				$(".tamanhoU").hide();
				$(".tamanho36").hide();
				$(".tamanho38").hide();
				$(".tamanho40").hide();
				$(".tamanho42").hide();
				$(".tamanho44").hide();
				$(".tamanho46").hide();
				if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanhoM").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanhoM.faixaPreco1").css("display", "flex");
							if (faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa2.checked == true) {
							$(".tamanhoM.faixaPreco2").css("display", "flex");
							if (faixa1.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa3.checked == true) {
							$(".tamanhoM.faixaPreco3").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa4.checked == true) {
							$(".tamanhoM.faixaPreco4").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa5.checked == true) {
							$(".tamanhoM.faixaPreco5").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
							}
						}
					}
				}
				if (amarelo.checked == true) {
					$(".tamanhoM.amareloProduto").css("display", "flex");
				}
				if (azul.checked == true) {
					$(".tamanhoM.azulProduto").css("display", "flex");
				}
				if (branco.checked == true) {
					$(".tamanhoM.brancoProduto").css("display", "flex");
				}
				if (cinza.checked == true) {
					$(".tamanhoM.cinzaProduto").css("display", "flex");
				}
				if (laranja.checked == true) {
					$(".tamanhoM.laranjaProduto").css("display", "flex");
				}
				if (verde.checked == true) {
					$(".tamanhoM.verdeProduto").css("display", "flex");
				}
				if (vermelho.checked == true) {
					$(".tamanhoM.vermelhoProduto").css("display", "flex");
				}
				if (preto.checked == true) {
					$(".tamanhoM.pretoProduto").css("display", "flex");
				}
				if (rosa.checked == true) {
					$(".tamanhoM.rosaProduto").css("display", "flex");
				}
				if (vinho.checked == true) {
					$(".tamanhoM.vinhoProduto").css("display", "flex");
				}
			}
			if (tamanhoG.checked == true) {
				$(".tamanhoP").hide();
				$(".tamanhoM").hide();
				$(".tamanhoGG").hide();
				$(".tamanhoU").hide();
				$(".tamanho36").hide();
				$(".tamanho38").hide();
				$(".tamanho40").hide();
				$(".tamanho42").hide();
				$(".tamanho44").hide();
				$(".tamanho46").hide();
				if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanhoG").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanhoG.faixaPreco1").css("display", "flex");
							if (faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa2.checked == true) {
							$(".tamanhoG.faixaPreco2").css("display", "flex");
							if (faixa1.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa3.checked == true) {
							$(".tamanhoG.faixaPreco3").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa4.checked == true) {
							$(".tamanhoG.faixaPreco4").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa5.checked == true) {
							$(".tamanhoG.faixaPreco5").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
							}
						}
					}
				}
				if (amarelo.checked == true) {
					$(".tamanhoG.amareloProduto").css("display", "flex");
				}
				if (azul.checked == true) {
					$(".tamanhoG.azulProduto").css("display", "flex");
				}
				if (branco.checked == true) {
					$(".tamanhoG.brancoProduto").css("display", "flex");
				}
				if (cinza.checked == true) {
					$(".tamanhoG.cinzaProduto").css("display", "flex");
				}
				if (laranja.checked == true) {
					$(".tamanhoG.laranjaProduto").css("display", "flex");
				}
				if (verde.checked == true) {
					$(".tamanhoG.verdeProduto").css("display", "flex");
				}
				if (vermelho.checked == true) {
					$(".tamanhoG.vermelhoProduto").css("display", "flex");
				}
				if (preto.checked == true) {
					$(".tamanhoG.pretoProduto").css("display", "flex");
				}
				if (rosa.checked == true) {
					$(".tamanhoG.rosaProduto").css("display", "flex");
				}
				if (vinho.checked == true) {
					$(".tamanhoG.vinhoProduto").css("display", "flex");
				}
			}
			if (tamanhoGG.checked == true) {
				$(".tamanhoP").hide();
				$(".tamanhoM").hide();
				$(".tamanhoG").hide();
				$(".tamanhoU").hide();
				$(".tamanho36").hide();
				$(".tamanho38").hide();
				$(".tamanho40").hide();
				$(".tamanho42").hide();
				$(".tamanho44").hide();
				$(".tamanho46").hide();
				if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanhoGG").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanhoGG.faixaPreco1").css("display", "flex");
							if (faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa2.checked == true) {
							$(".tamanhoGG.faixaPreco2").css("display", "flex");
							if (faixa1.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa3.checked == true) {
							$(".tamanhoGG.faixaPreco3").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa4.checked == true) {
							$(".tamanhoGG.faixaPreco4").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa5.checked == true) {
							$(".tamanhoGG.faixaPreco5").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
							}
						}
					}
				}
				if (amarelo.checked == true) {
					$(".tamanhoGG.amareloProduto").css("display", "flex");
				}
				if (azul.checked == true) {
					$(".tamanhoGG.azulProduto").css("display", "flex");
				}
				if (branco.checked == true) {
					$(".tamanhoGG.brancoProduto").css("display", "flex");
				}
				if (cinza.checked == true) {
					$(".tamanhoGG.cinzaProduto").css("display", "flex");
				}
				if (laranja.checked == true) {
					$(".tamanhoGG.laranjaProduto").css("display", "flex");
				}
				if (verde.checked == true) {
					$(".tamanhoGG.verdeProduto").css("display", "flex");
				}
				if (vermelho.checked == true) {
					$(".tamanhoGG.vermelhoProduto").css("display", "flex");
				}
				if (preto.checked == true) {
					$(".tamanhoGG.pretoProduto").css("display", "flex");
				}
				if (rosa.checked == true) {
					$(".tamanhoGG.rosaProduto").css("display", "flex");
				}
				if (vinho.checked == true) {
					$(".tamanhoGG.vinhoProduto").css("display", "flex");
				}
			}
			if (tamanhoU.checked == true) {
				$(".tamanhoP").hide();
				$(".tamanhoM").hide();
				$(".tamanhoG").hide();
				$(".tamanhoGG").hide();
				$(".tamanho36").hide();
				$(".tamanho38").hide();
				$(".tamanho40").hide();
				$(".tamanho42").hide();
				$(".tamanho44").hide();
				$(".tamanho46").hide();
				if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanhoU").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanhoU.faixaPreco1").css("display", "flex");
							if (faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa2.checked == true) {
							$(".tamanhoU.faixaPreco2").css("display", "flex");
							if (faixa1.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa3.checked == true) {
							$(".tamanhoU.faixaPreco3").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa4.checked == true) {
							$(".tamanhoU.faixaPreco4").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa5.checked == true) {
							$(".tamanhoU.faixaPreco5").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
							}
						}
					}
				}
				if (amarelo.checked == true) {
					$(".tamanhoU.amareloProduto").css("display", "flex");
				}
				if (azul.checked == true) {
					$(".tamanhoU.azulProduto").css("display", "flex");
				}
				if (branco.checked == true) {
					$(".tamanhoU.brancoProduto").css("display", "flex");
				}
				if (cinza.checked == true) {
					$(".tamanhoU.cinzaProduto").css("display", "flex");
				}
				if (laranja.checked == true) {
					$(".tamanhoU.laranjaProduto").css("display", "flex");
				}
				if (verde.checked == true) {
					$(".tamanhoU.verdeProduto").css("display", "flex");
				}
				if (vermelho.checked == true) {
					$(".tamanhoU.vermelhoProduto").css("display", "flex");
				}
				if (preto.checked == true) {
					$(".tamanhoU.pretoProduto").css("display", "flex");
				}
				if (rosa.checked == true) {
					$(".tamanhoU.rosaProduto").css("display", "flex");
				}
				if (vinho.checked == true) {
					$(".tamanhoU.vinhoProduto").css("display", "flex");
				}
			}
			if (tamanho36.checked == true) {
				$(".tamanhoP").hide();
				$(".tamanhoM").hide();
				$(".tamanhoG").hide();
				$(".tamanhoGG").hide();
				$(".tamanhoU").hide();
				$(".tamanho38").hide();
				$(".tamanho40").hide();
				$(".tamanho42").hide();
				$(".tamanho44").hide();
				$(".tamanho46").hide();
				if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanho36").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanho36.faixaPreco1").css("display", "flex");
							if (faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa2.checked == true) {
							$(".tamanho36.faixaPreco2").css("display", "flex");
							if (faixa1.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa3.checked == true) {
							$(".tamanho36.faixaPreco3").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa4.checked == true) {
							$(".tamanho36.faixaPreco4").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa5.checked == true) {
							$(".tamanho36.faixaPreco5").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
							}
						}
					}
				}
				if (amarelo.checked == true) {
					$(".tamanho36.amareloProduto").css("display", "flex");
				}
				if (azul.checked == true) {
					$(".tamanho36.azulProduto").css("display", "flex");
				}
				if (branco.checked == true) {
					$(".tamanho36.brancoProduto").css("display", "flex");
				}
				if (cinza.checked == true) {
					$(".tamanho36.cinzaProduto").css("display", "flex");
				}
				if (laranja.checked == true) {
					$(".tamanho36.laranjaProduto").css("display", "flex");
				}
				if (verde.checked == true) {
					$(".tamanho36.verdeProduto").css("display", "flex");
				}
				if (vermelho.checked == true) {
					$(".tamanho36.vermelhoProduto").css("display", "flex");
				}
				if (preto.checked == true) {
					$(".tamanho36.pretoProduto").css("display", "flex");
				}
				if (rosa.checked == true) {
					$(".tamanho36.rosaProduto").css("display", "flex");
				}
				if (vinho.checked == true) {
					$(".tamanho36.vinhoProduto").css("display", "flex");
				}
			}
			if (tamanho38.checked == true) {
				$(".tamanhoP").hide();
				$(".tamanhoM").hide();
				$(".tamanhoG").hide();
				$(".tamanhoGG").hide();
				$(".tamanhoU").hide();
				$(".tamanho36").hide();
				$(".tamanho40").hide();
				$(".tamanho42").hide();
				$(".tamanho44").hide();
				$(".tamanho46").hide();
				if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanho38").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanho38.faixaPreco1").css("display", "flex");
							if (faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa2.checked == true) {
							$(".tamanho38.faixaPreco2").css("display", "flex");
							if (faixa1.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa3.checked == true) {
							$(".tamanho38.faixaPreco3").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa4.checked == true) {
							$(".tamanho38.faixaPreco4").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa5.checked == true) {
							$(".tamanho38.faixaPreco5").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
							}
						}
					}
				}
				if (amarelo.checked == true) {
					$(".tamanho38.amareloProduto").css("display", "flex");
				}
				if (azul.checked == true) {
					$(".tamanho38.azulProduto").css("display", "flex");
				}
				if (branco.checked == true) {
					$(".tamanho38.brancoProduto").css("display", "flex");
				}
				if (cinza.checked == true) {
					$(".tamanho38.cinzaProduto").css("display", "flex");
				}
				if (laranja.checked == true) {
					$(".tamanho38.laranjaProduto").css("display", "flex");
				}
				if (verde.checked == true) {
					$(".tamanho38.verdeProduto").css("display", "flex");
				}
				if (vermelho.checked == true) {
					$(".tamanho38.vermelhoProduto").css("display", "flex");
				}
				if (preto.checked == true) {
					$(".tamanho38.pretoProduto").css("display", "flex");
				}
				if (rosa.checked == true) {
					$(".tamanho38.rosaProduto").css("display", "flex");
				}
				if (vinho.checked == true) {
					$(".tamanho38.vinhoProduto").css("display", "flex");
				}
			}
			if (tamanho40.checked == true) {
				$(".tamanhoP").hide();
				$(".tamanhoM").hide();
				$(".tamanhoG").hide();
				$(".tamanhoGG").hide();
				$(".tamanhoU").hide();
				$(".tamanho36").hide();
				$(".tamanho38").hide();
				$(".tamanho42").hide();
				$(".tamanho44").hide();
				$(".tamanho46").hide();
				if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanho40").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanho40.faixaPreco1").css("display", "flex");
							if (faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa2.checked == true) {
							$(".tamanho40.faixaPreco2").css("display", "flex");
							if (faixa1.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa3.checked == true) {
							$(".tamanho40.faixaPreco3").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa4.checked == true) {
							$(".tamanho40.faixaPreco4").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa5.checked == true) {
							$(".tamanho40.faixaPreco5").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
							}
						}
					}
				}
				if (amarelo.checked == true) {
					$(".tamanho40.amareloProduto").css("display", "flex");
				}
				if (azul.checked == true) {
					$(".tamanho40.azulProduto").css("display", "flex");
				}
				if (branco.checked == true) {
					$(".tamanho40.brancoProduto").css("display", "flex");
				}
				if (cinza.checked == true) {
					$(".tamanho40.cinzaProduto").css("display", "flex");
				}
				if (laranja.checked == true) {
					$(".tamanho40.laranjaProduto").css("display", "flex");
				}
				if (verde.checked == true) {
					$(".tamanho40.verdeProduto").css("display", "flex");
				}
				if (vermelho.checked == true) {
					$(".tamanho40.vermelhoProduto").css("display", "flex");
				}
				if (preto.checked == true) {
					$(".tamanho40.pretoProduto").css("display", "flex");
				}
				if (rosa.checked == true) {
					$(".tamanho40.rosaProduto").css("display", "flex");
				}
				if (vinho.checked == true) {
					$(".tamanho40.vinhoProduto").css("display", "flex");
				}
			}
			if (tamanho42.checked == true) {
				$(".tamanhoP").hide();
				$(".tamanhoM").hide();
				$(".tamanhoG").hide();
				$(".tamanhoGG").hide();
				$(".tamanhoU").hide();
				$(".tamanho36").hide();
				$(".tamanho38").hide();
				$(".tamanho40").hide();
				$(".tamanho44").hide();
				$(".tamanho46").hide();
				if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanho42").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanho42.faixaPreco1").css("display", "flex");
							if (faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa2.checked == true) {
							$(".tamanho42.faixaPreco2").css("display", "flex");
							if (faixa1.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa3.checked == true) {
							$(".tamanho42.faixaPreco3").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa4.checked == true) {
							$(".tamanho42.faixaPreco4").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa5.checked == true) {
							$(".tamanho42.faixaPreco5").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
							}
						}
					}
				}
				if (amarelo.checked == true) {
					$(".tamanho42.amareloProduto").css("display", "flex");
				}
				if (azul.checked == true) {
					$(".tamanho42.azulProduto").css("display", "flex");
				}
				if (branco.checked == true) {
					$(".tamanho42.brancoProduto").css("display", "flex");
				}
				if (cinza.checked == true) {
					$(".tamanho42.cinzaProduto").css("display", "flex");
				}
				if (laranja.checked == true) {
					$(".tamanho42.laranjaProduto").css("display", "flex");
				}
				if (verde.checked == true) {
					$(".tamanho42.verdeProduto").css("display", "flex");
				}
				if (vermelho.checked == true) {
					$(".tamanho42.vermelhoProduto").css("display", "flex");
				}
				if (preto.checked == true) {
					$(".tamanho42.pretoProduto").css("display", "flex");
				}
				if (rosa.checked == true) {
					$(".tamanho42.rosaProduto").css("display", "flex");
				}
				if (vinho.checked == true) {
					$(".tamanho42.vinhoProduto").css("display", "flex");
				}
			}
			if (tamanho44.checked == true) {
				$(".tamanhoP").hide();
				$(".tamanhoM").hide();
				$(".tamanhoG").hide();
				$(".tamanhoGG").hide();
				$(".tamanhoU").hide();
				$(".tamanho36").hide();
				$(".tamanho38").hide();
				$(".tamanho40").hide();
				$(".tamanho42").hide();
				$(".tamanho46").hide();
				if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanho44").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanho44.faixaPreco1").css("display", "flex");
							if (faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa2.checked == true) {
							$(".tamanho44.faixaPreco2").css("display", "flex");
							if (faixa1.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa3.checked == true) {
							$(".tamanho44.faixaPreco3").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa4.checked == true) {
							$(".tamanho44.faixaPreco4").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa5.checked == true) {
							$(".tamanho44.faixaPreco5").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
							}
						}
					}
				}
				if (amarelo.checked == true) {
					$(".tamanho44.amareloProduto").css("display", "flex");
				}
				if (azul.checked == true) {
					$(".tamanho44.azulProduto").css("display", "flex");
				}
				if (branco.checked == true) {
					$(".tamanho44.brancoProduto").css("display", "flex");
				}
				if (cinza.checked == true) {
					$(".tamanho44.cinzaProduto").css("display", "flex");
				}
				if (laranja.checked == true) {
					$(".tamanho44.laranjaProduto").css("display", "flex");
				}
				if (verde.checked == true) {
					$(".tamanho44.verdeProduto").css("display", "flex");
				}
				if (vermelho.checked == true) {
					$(".tamanho44.vermelhoProduto").css("display", "flex");
				}
				if (preto.checked == true) {
					$(".tamanho44.pretoProduto").css("display", "flex");
				}
				if (rosa.checked == true) {
					$(".tamanho44.rosaProduto").css("display", "flex");
				}
				if (vinho.checked == true) {
					$(".tamanho44.vinhoProduto").css("display", "flex");
				}
			}
			if (tamanho46.checked == true) {
				$(".tamanhoP").hide();
				$(".tamanhoM").hide();
				$(".tamanhoG").hide();
				$(".tamanhoGG").hide();
				$(".tamanhoU").hide();
				$(".tamanho36").hide();
				$(".tamanho38").hide();
				$(".tamanho40").hide();
				$(".tamanho42").hide();
				$(".tamanho44").hide();
				if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanho46").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanho46.faixaPreco1").css("display", "flex");
							if (faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa2.checked == true) {
							$(".tamanho46.faixaPreco2").css("display", "flex");
							if (faixa1.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa3.checked == true) {
							$(".tamanho46.faixaPreco3").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa4.checked == true) {
							$(".tamanho46.faixaPreco4").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa5.checked == true) {
							$(".tamanho46.faixaPreco5").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
							}
						}
					}
				}
				if (amarelo.checked == true) {
					$(".tamanho46.amareloProduto").css("display", "flex");
				}
				if (azul.checked == true) {
					$(".tamanho46.azulProduto").css("display", "flex");
				}
				if (branco.checked == true) {
					$(".tamanho46.brancoProduto").css("display", "flex");
				}
				if (cinza.checked == true) {
					$(".tamanho46.cinzaProduto").css("display", "flex");
				}
				if (laranja.checked == true) {
					$(".tamanho46.laranjaProduto").css("display", "flex");
				}
				if (verde.checked == true) {
					$(".tamanho46.verdeProduto").css("display", "flex");
				}
				if (vermelho.checked == true) {
					$(".tamanho46.vermelhoProduto").css("display", "flex");
				}
				if (preto.checked == true) {
					$(".tamanho46.pretoProduto").css("display", "flex");
				}
				if (rosa.checked == true) {
					$(".tamanho46.rosaProduto").css("display", "flex");
				}
				if (vinho.checked == true) {
					$(".tamanho46.vinhoProduto").css("display", "flex");
				}
			}
		}
	})

	$(".filtrar-checkbox #laranja").click(function () {
		if (laranja.checked == true) {
			if (tamanhoP.checked == false && tamanhoM.checked == false && tamanhoG.checked == false && tamanhoGG.checked == false && tamanhoU.checked == false && tamanho36.checked == false && tamanho38.checked == false && tamanho40.checked == false && tamanho42.checked == false && tamanho44.checked == false && tamanho46.checked == false) {
				if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
					$(".laranjaProduto").css("display", "flex");
				} else {
					if (faixa1.checked == true) {
						$(".faixaPreco1.laranjaProduto").css("display", "flex");
					}
					if (faixa2.checked == true) {
						$(".faixaPreco2.laranjaProduto").css("display", "flex");
					}
					if (faixa3.checked == true) {
						$(".faixaPreco3.laranjaProduto").css("display", "flex");
					}
					if (faixa4.checked == true) {
						$(".faixaPreco4.laranjaProduto").css("display", "flex");
					}
					if (faixa5.checked == true) {
						$(".faixaPreco5.laranjaProduto").css("display", "flex");
					}
				}
			} else {
				if (tamanhoP.checked == true) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanhoP.laranjaProduto").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanhoP.faixaPreco1.laranjaProduto").css("display", "flex");
						}
						if (faixa2.checked == true) {
							$(".tamanhoP.faixaPreco2.laranjaProduto").css("display", "flex");
						}
						if (faixa3.checked == true) {
							$(".tamanhoP.faixaPreco3.laranjaProduto").css("display", "flex");
						}
						if (faixa4.checked == true) {
							$(".tamanhoP.faixaPreco4.laranjaProduto").css("display", "flex");
						}
						if (faixa5.checked == true) {
							$(".tamanhoP.faixaPreco5.laranjaProduto").css("display", "flex");
						}
					}
				}
				if (tamanhoM.checked == true) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanhoM.laranjaProduto").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanhoM.faixaPreco1.laranjaProduto").css("display", "flex");
						}
						if (faixa2.checked == true) {
							$(".tamanhoM.faixaPreco2.laranjaProduto").css("display", "flex");
						}
						if (faixa3.checked == true) {
							$(".tamanhoM.faixaPreco3.laranjaProduto").css("display", "flex");
						}
						if (faixa4.checked == true) {
							$(".tamanhoM.faixaPreco4.laranjaProduto").css("display", "flex");
						}
						if (faixa5.checked == true) {
							$(".tamanhoM.faixaPreco5.laranjaProduto").css("display", "flex");
						}
					}
				}
				if (tamanhoG.checked == true) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanhoG.laranjaProduto").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanhoG.faixa1Preco.laranjaProduto").css("display", "flex");
						}
						if (faixa2.checked == true) {
							$(".tamanhoG.faixa2Preco.laranjaProduto").css("display", "flex");
						}
						if (faixa3.checked == true) {
							$(".tamanhoG.faixa3Preco.laranjaProduto").css("display", "flex");
						}
						if (faixa4.checked == true) {
							$(".tamanhoG.faixa4Preco.laranjaProduto").css("display", "flex");
						}
						if (faixa5.checked == true) {
							$(".tamanhoG.faixa5Preco.laranjaProduto").css("display", "flex");
						}
					}
				}
				if (tamanhoGG.checked == true) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanhoGG.laranjaProduto").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanhoGG.faixaPreco1.laranjaProduto").css("display", "flex");
						}
						if (faixa2.checked == true) {
							$(".tamanhoGG.faixaPreco2.laranjaProduto").css("display", "flex");
						}
						if (faixa3.checked == true) {
							$(".tamanhoGG.faixaPreco3.laranjaProduto").css("display", "flex");
						}
						if (faixa4.checked == true) {
							$(".tamanhoGG.faixaPreco4.laranjaProduto").css("display", "flex");
						}
						if (faixa5.checked == true) {
							$(".tamanhoGG.faixaPreco5.laranjaProduto").css("display", "flex");
						}
					}
				}
				if (tamanhoU.checked == true) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanhoU.laranjaProduto").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanhoU.faixaPreco1.laranjaProduto").css("display", "flex");
						}
						if (faixa2.checked == true) {
							$(".tamanhoU.faixaPreco2.laranjaProduto").css("display", "flex");
						}
						if (faixa3.checked == true) {
							$(".tamanhoU.faixaPreco3.laranjaProduto").css("display", "flex");
						}
						if (faixa4.checked == true) {
							$(".tamanhoU.faixaPreco4.laranjaProduto").css("display", "flex");
						}
						if (faixa5.checked == true) {
							$(".tamanhoU.faixaPreco5.laranjaProduto").css("display", "flex");
						}
					}
				}
				if (tamanho36.checked == true) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanho36.laranjaProduto").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanho36.faixaPreco1.laranjaProduto").css("display", "flex");
						}
						if (faixa2.checked == true) {
							$(".tamanho36.faixaPreco2.laranjaProduto").css("display", "flex");
						}
						if (faixa3.checked == true) {
							$(".tamanho36.faixaPreco3.laranjaProduto").css("display", "flex");
						}
						if (faixa4.checked == true) {
							$(".tamanho36.faixaPreco4.laranjaProduto").css("display", "flex");
						}
						if (faixa5.checked == true) {
							$(".tamanho36.faixaPreco5.laranjaProduto").css("display", "flex");
						}
					}
				}
				if (tamanho38.checked == true) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanho38.laranjaProduto").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanho38.faixaPreco1.laranjaProduto").css("display", "flex");
						}
						if (faixa2.checked == true) {
							$(".tamanho38.faixaPreco2.laranjaProduto").css("display", "flex");
						}
						if (faixa3.checked == true) {
							$(".tamanho38.faixaPreco3.laranjaProduto").css("display", "flex");
						}
						if (faixa4.checked == true) {
							$(".tamanho38.faixaPreco4.laranjaProduto").css("display", "flex");
						}
						if (faixa5.checked == true) {
							$(".tamanho38.faixaPreco5.laranjaProduto").css("display", "flex");
						}
					}
				}
				if (tamanho40.checked == true) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanho40.laranjaProduto").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanho40.faixaPreco1.laranjaProduto").css("display", "flex");
						}
						if (faixa2.checked == true) {
							$(".tamanho40.faixaPreco2.laranjaProduto").css("display", "flex");
						}
						if (faixa3.checked == true) {
							$(".tamanho40.faixaPreco3.laranjaProduto").css("display", "flex");
						}
						if (faixa4.checked == true) {
							$(".tamanho40.faixaPreco4.laranjaProduto").css("display", "flex");
						}
						if (faixa5.checked == true) {
							$(".tamanho40.faixaPreco5.laranjaProduto").css("display", "flex");
						}
					}
				}
				if (tamanho42.checked == true) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanho42.laranjaProduto").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanho42.faixaPreco1.rosaProduto").css("display", "flex");
						}
						if (faixa2.checked == true) {
							$(".tamanho42.faixaPreco2.rosaProduto").css("display", "flex");
						}
						if (faixa3.checked == true) {
							$(".tamanho42.faixaPreco3.rosaProduto").css("display", "flex");
						}
						if (faixa4.checked == true) {
							$(".tamanho42.faixaPreco4.rosaProduto").css("display", "flex");
						}
						if (faixa5.checked == true) {
							$(".tamanho42.faixaPreco5.rosaProduto").css("display", "flex");
						}
					}
				}
				if (tamanho44.checked == true) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanho44.laranjaProduto").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanho44.faixaPreco1.rosaProduto").css("display", "flex");
						}
						if (faixa2.checked == true) {
							$(".tamanho44.faixaPreco2.rosaProduto").css("display", "flex");
						}
						if (faixa3.checked == true) {
							$(".tamanho44.faixaPreco3.rosaProduto").css("display", "flex");
						}
						if (faixa4.checked == true) {
							$(".tamanho44.faixaPreco4.rosaProduto").css("display", "flex");
						}
						if (faixa5.checked == true) {
							$(".tamanho44.faixaPreco5.rosaProduto").css("display", "flex");
						}
					}
				}
				if (tamanho46.checked == true) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanho46.laranjaProduto").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanho46.faixaPreco1.rosaProduto").css("display", "flex");
						}
						if (faixa2.checked == true) {
							$(".tamanho46.faixaPreco2.rosaProduto").css("display", "flex");
						}
						if (faixa3.checked == true) {
							$(".tamanho46.faixaPreco3.rosaProduto").css("display", "flex");
						}
						if (faixa4.checked == true) {
							$(".tamanho46.faixaPreco4.rosaProduto").css("display", "flex");
						}
						if (faixa5.checked == true) {
							$(".tamanho46.faixaPreco5.rosaProduto").css("display", "flex");
						}
					}
				}
			}
			if (amarelo.checked == false) {
				$(".amareloProduto").hide();
			}
			if (azul.checked == false) {
				$(".azulProduto").hide();
			}
			if (branco.checked == false) {
				$(".brancoProduto").hide();
			}
			if (cinza.checked == false) {
				$(".cinzaProduto").hide();
			}
			if (verde.checked == false) {
				$(".verdeProduto").hide();
			}
			if (vermelho.checked == false) {
				$(".vermelhoProduto").hide();
			}
			if (preto.checked == false) {
				$(".pretoProduto").hide();
			}
			if (rosa.checked == false) {
				$(".rosaProduto").hide();
			}
			if (vinho.checked == false) {
				$(".vinhoProduto").hide();
			}
		} else {
			$(".laranjaProduto").hide();
			if (tamanhoP.checked == false && tamanhoM.checked == false && tamanhoG.checked == false && tamanhoGG.checked == false && tamanhoU.checked == false && tamanho36.checked == false && tamanho38.checked == false && tamanho40.checked == false && tamanho42.checked == false && tamanho44.checked == false && tamanho46.checked == false) {
				if (faixa1.checked == true) {
					if (faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".faixaPreco2").hide();
						$(".faixaPreco3").hide();
						$(".faixaPreco4").hide();
						$(".faixaPreco5").hide();
					}
					if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
						$(".faixaPreco1").css("display", "flex");
					}
					if (amarelo.checked == true) {
						$(".faixaPreco1.amareloProduto").css("display", "flex");
					}
					if (azul.checked == true) {
						$(".faixaPreco1.azulProduto").css("display", "flex");
					}
					if (branco.checked == true) {
						$(".faixaPreco1.brancoProduto").css("display", "flex");
					}
					if (cinza.checked == true) {
						$(".faixaPreco1.cinzaProduto").css("display", "flex");
					}
					if (laranja.checked == true) {
						$(".faixaPreco1.laranjaProduto").css("display", "flex");
					}
					if (verde.checked == true) {
						$(".faixaPreco1.verdeProduto").css("display", "flex");
					}
					if (vermelho.checked == true) {
						$(".faixaPreco1.vermelhoProduto").css("display", "flex");
					}
					if (preto.checked == true) {
						$(".faixaPreco1.pretoProduto").css("display", "flex");
					}
					if (rosa.checked == true) {
						$(".faixaPreco1.rosaProduto").css("display", "flex");
					}
					if (vinho.checked == true) {
						$(".faixaPreco1.vinhoProduto").css("display", "flex");
					}
				}
				if (faixa2.checked == true) {
					if (faixa1.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".faixaPreco1").hide();
						$(".faixaPreco3").hide();
						$(".faixaPreco4").hide();
						$(".faixaPreco5").hide();
					}
					if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
						$(".faixaPreco2").css("display", "flex");
					}
					if (amarelo.checked == true) {
						$(".faixaPreco2.amareloProduto").css("display", "flex");
					}
					if (azul.checked == true) {
						$(".faixaPreco2.azulProduto").css("display", "flex");
					}
					if (branco.checked == true) {
						$(".faixaPreco2.brancoProduto").css("display", "flex");
					}
					if (cinza.checked == true) {
						$(".faixaPreco2.cinzaProduto").css("display", "flex");
					}
					if (laranja.checked == true) {
						$(".faixaPreco2.laranjaProduto").css("display", "flex");
					}
					if (verde.checked == true) {
						$(".faixaPreco2.verdeProduto").css("display", "flex");
					}
					if (vermelho.checked == true) {
						$(".faixaPreco2.vermelhoProduto").css("display", "flex");
					}
					if (preto.checked == true) {
						$(".faixaPreco2.pretoProduto").css("display", "flex");
					}
					if (rosa.checked == true) {
						$(".faixaPreco2.rosaProduto").css("display", "flex");
					}
					if (vinho.checked == true) {
						$(".faixaPreco2.vinhoProduto").css("display", "flex");
					}
				}
				if (faixa3.checked == true) {
					if (faixa1.checked == false && faixa2.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".faixaPreco1").hide();
						$(".faixaPreco2").hide();
						$(".faixaPreco4").hide();
						$(".faixaPreco5").hide();
					}
					if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
						$(".faixaPreco3").css("display", "flex");
					}
					if (amarelo.checked == true) {
						$(".faixaPreco3.amareloProduto").css("display", "flex");
					}
					if (azul.checked == true) {
						$(".faixaPreco3.azulProduto").css("display", "flex");
					}
					if (branco.checked == true) {
						$(".faixaPreco3.brancoProduto").css("display", "flex");
					}
					if (cinza.checked == true) {
						$(".faixaPreco3.cinzaProduto").css("display", "flex");
					}
					if (laranja.checked == true) {
						$(".faixaPreco3.laranjaProduto").css("display", "flex");
					}
					if (verde.checked == true) {
						$(".faixaPreco3.verdeProduto").css("display", "flex");
					}
					if (vermelho.checked == true) {
						$(".faixaPreco3.vermelhoProduto").css("display", "flex");
					}
					if (preto.checked == true) {
						$(".faixaPreco3.pretoProduto").css("display", "flex");
					}
					if (rosa.checked == true) {
						$(".faixaPreco3.rosaProduto").css("display", "flex");
					}
					if (vinho.checked == true) {
						$(".faixaPreco3.vinhoProduto").css("display", "flex");
					}
				}
				if (faixa4.checked == true) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa5.checked == false) {
						$(".faixaPreco1").hide();
						$(".faixaPreco2").hide();
						$(".faixaPreco3").hide();
						$(".faixaPreco5").hide();
					}
					if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
						$(".faixaPreco4").css("display", "flex");
					}
					if (amarelo.checked == true) {
						$(".faixaPreco4.amareloProduto").css("display", "flex");
					}
					if (azul.checked == true) {
						$(".faixaPreco4.azulProduto").css("display", "flex");
					}
					if (branco.checked == true) {
						$(".faixaPreco4.brancoProduto").css("display", "flex");
					}
					if (cinza.checked == true) {
						$(".faixaPreco4.cinzaProduto").css("display", "flex");
					}
					if (laranja.checked == true) {
						$(".faixaPreco4.laranjaProduto").css("display", "flex");
					}
					if (verde.checked == true) {
						$(".faixaPreco4.verdeProduto").css("display", "flex");
					}
					if (vermelho.checked == true) {
						$(".faixaPreco4.vermelhoProduto").css("display", "flex");
					}
					if (preto.checked == true) {
						$(".faixaPreco4.pretoProduto").css("display", "flex");
					}
					if (rosa.checked == true) {
						$(".faixaPreco4.rosaProduto").css("display", "flex");
					}
					if (vinho.checked == true) {
						$(".faixaPreco4.vinhoProduto").css("display", "flex");
					}
				}
				if (faixa5.checked == true) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false) {
						$(".faixaPreco1").hide();
						$(".faixaPreco2").hide();
						$(".faixaPreco3").hide();
						$(".faixaPreco4").hide();
					}
					if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
						$(".faixaPreco5").css("display", "flex");
					}
					if (amarelo.checked == true) {
						$(".faixaPreco5.amareloProduto").css("display", "flex");
					}
					if (azul.checked == true) {
						$(".faixaPreco5.azulProduto").css("display", "flex");
					}
					if (branco.checked == true) {
						$(".faixaPreco5.brancoProduto").css("display", "flex");
					}
					if (cinza.checked == true) {
						$(".faixaPreco5.cinzaProduto").css("display", "flex");
					}
					if (laranja.checked == true) {
						$(".faixaPreco5.laranjaProduto").css("display", "flex");
					}
					if (verde.checked == true) {
						$(".faixaPreco5.verdeProduto").css("display", "flex");
					}
					if (vermelho.checked == true) {
						$(".faixaPreco5.vermelhoProduto").css("display", "flex");
					}
					if (preto.checked == true) {
						$(".faixaPreco5.pretoProduto").css("display", "flex");
					}
					if (rosa.checked == true) {
						$(".faixaPreco5.rosaProduto").css("display", "flex");
					}
					if (vinho.checked == true) {
						$(".faixaPreco5.vinhoProduto").css("display", "flex");
					}
				}
			}
			if (tamanhoP.checked == true) {
				$(".tamanhoM").hide();
				$(".tamanhoG").hide();
				$(".tamanhoGG").hide();
				$(".tamanhoU").hide();
				$(".tamanho36").hide();
				$(".tamanho38").hide();
				$(".tamanho40").hide();
				$(".tamanho42").hide();
				$(".tamanho44").hide();
				$(".tamanho46").hide();
				if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanhoP").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanhoP.faixaPreco1").css("display", "flex");
							if (faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa2.checked == true) {
							$(".tamanhoP.faixaPreco2").css("display", "flex");
							if (faixa1.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa3.checked == true) {
							$(".tamanhoP.faixaPreco3").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa4.checked == true) {
							$(".tamanhoP.faixaPreco4").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa5.checked == true) {
							$(".tamanhoP.faixaPreco5").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
							}
						}
					}
				}
				if (amarelo.checked == true) {
					$(".tamanhoP.amareloProduto").css("display", "flex");
				}
				if (azul.checked == true) {
					$(".tamanhoP.azulProduto").css("display", "flex");
				}
				if (branco.checked == true) {
					$(".tamanhoP.brancoProduto").css("display", "flex");
				}
				if (cinza.checked == true) {
					$(".tamanhoP.cinzaProduto").css("display", "flex");
				}
				if (laranja.checked == true) {
					$(".tamanhoP.laranjaProduto").css("display", "flex");
				}
				if (verde.checked == true) {
					$(".tamanhoP.verdeProduto").css("display", "flex");
				}
				if (vermelho.checked == true) {
					$(".tamanhoP.vermelhoProduto").css("display", "flex");
				}
				if (preto.checked == true) {
					$(".tamanhoP.pretoProduto").css("display", "flex");
				}
				if (rosa.checked == true) {
					$(".tamanhoP.rosaProduto").css("display", "flex");
				}
				if (vinho.checked == true) {
					$(".tamanhoP.vinhoProduto").css("display", "flex");
				}
			}
			if (tamanhoM.checked == true) {
				$(".tamanhoP").hide();
				$(".tamanhoG").hide();
				$(".tamanhoGG").hide();
				$(".tamanhoU").hide();
				$(".tamanho36").hide();
				$(".tamanho38").hide();
				$(".tamanho40").hide();
				$(".tamanho42").hide();
				$(".tamanho44").hide();
				$(".tamanho46").hide();
				if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanhoM").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanhoM.faixaPreco1").css("display", "flex");
							if (faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa2.checked == true) {
							$(".tamanhoM.faixaPreco2").css("display", "flex");
							if (faixa1.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa3.checked == true) {
							$(".tamanhoM.faixaPreco3").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa4.checked == true) {
							$(".tamanhoM.faixaPreco4").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa5.checked == true) {
							$(".tamanhoM.faixaPreco5").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
							}
						}
					}
				}
				if (amarelo.checked == true) {
					$(".tamanhoM.amareloProduto").css("display", "flex");
				}
				if (azul.checked == true) {
					$(".tamanhoM.azulProduto").css("display", "flex");
				}
				if (branco.checked == true) {
					$(".tamanhoM.brancoProduto").css("display", "flex");
				}
				if (cinza.checked == true) {
					$(".tamanhoM.cinzaProduto").css("display", "flex");
				}
				if (laranja.checked == true) {
					$(".tamanhoM.laranjaProduto").css("display", "flex");
				}
				if (verde.checked == true) {
					$(".tamanhoM.verdeProduto").css("display", "flex");
				}
				if (vermelho.checked == true) {
					$(".tamanhoM.vermelhoProduto").css("display", "flex");
				}
				if (preto.checked == true) {
					$(".tamanhoM.pretoProduto").css("display", "flex");
				}
				if (rosa.checked == true) {
					$(".tamanhoM.rosaProduto").css("display", "flex");
				}
				if (vinho.checked == true) {
					$(".tamanhoM.vinhoProduto").css("display", "flex");
				}
			}
			if (tamanhoG.checked == true) {
				$(".tamanhoP").hide();
				$(".tamanhoM").hide();
				$(".tamanhoGG").hide();
				$(".tamanhoU").hide();
				$(".tamanho36").hide();
				$(".tamanho38").hide();
				$(".tamanho40").hide();
				$(".tamanho42").hide();
				$(".tamanho44").hide();
				$(".tamanho46").hide();
				if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanhoG").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanhoG.faixaPreco1").css("display", "flex");
							if (faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa2.checked == true) {
							$(".tamanhoG.faixaPreco2").css("display", "flex");
							if (faixa1.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa3.checked == true) {
							$(".tamanhoG.faixaPreco3").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa4.checked == true) {
							$(".tamanhoG.faixaPreco4").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa5.checked == true) {
							$(".tamanhoG.faixaPreco5").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
							}
						}
					}
				}
				if (amarelo.checked == true) {
					$(".tamanhoG.amareloProduto").css("display", "flex");
				}
				if (azul.checked == true) {
					$(".tamanhoG.azulProduto").css("display", "flex");
				}
				if (branco.checked == true) {
					$(".tamanhoG.brancoProduto").css("display", "flex");
				}
				if (cinza.checked == true) {
					$(".tamanhoG.cinzaProduto").css("display", "flex");
				}
				if (laranja.checked == true) {
					$(".tamanhoG.laranjaProduto").css("display", "flex");
				}
				if (verde.checked == true) {
					$(".tamanhoG.verdeProduto").css("display", "flex");
				}
				if (vermelho.checked == true) {
					$(".tamanhoG.vermelhoProduto").css("display", "flex");
				}
				if (preto.checked == true) {
					$(".tamanhoG.pretoProduto").css("display", "flex");
				}
				if (rosa.checked == true) {
					$(".tamanhoG.rosaProduto").css("display", "flex");
				}
				if (vinho.checked == true) {
					$(".tamanhoG.vinhoProduto").css("display", "flex");
				}
			}
			if (tamanhoGG.checked == true) {
				$(".tamanhoP").hide();
				$(".tamanhoM").hide();
				$(".tamanhoG").hide();
				$(".tamanhoU").hide();
				$(".tamanho36").hide();
				$(".tamanho38").hide();
				$(".tamanho40").hide();
				$(".tamanho42").hide();
				$(".tamanho44").hide();
				$(".tamanho46").hide();
				if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanhoGG").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanhoGG.faixaPreco1").css("display", "flex");
							if (faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa2.checked == true) {
							$(".tamanhoGG.faixaPreco2").css("display", "flex");
							if (faixa1.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa3.checked == true) {
							$(".tamanhoGG.faixaPreco3").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa4.checked == true) {
							$(".tamanhoGG.faixaPreco4").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa5.checked == true) {
							$(".tamanhoGG.faixaPreco5").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
							}
						}
					}
				}
				if (amarelo.checked == true) {
					$(".tamanhoGG.amareloProduto").css("display", "flex");
				}
				if (azul.checked == true) {
					$(".tamanhoGG.azulProduto").css("display", "flex");
				}
				if (branco.checked == true) {
					$(".tamanhoGG.brancoProduto").css("display", "flex");
				}
				if (cinza.checked == true) {
					$(".tamanhoGG.cinzaProduto").css("display", "flex");
				}
				if (laranja.checked == true) {
					$(".tamanhoGG.laranjaProduto").css("display", "flex");
				}
				if (verde.checked == true) {
					$(".tamanhoGG.verdeProduto").css("display", "flex");
				}
				if (vermelho.checked == true) {
					$(".tamanhoGG.vermelhoProduto").css("display", "flex");
				}
				if (preto.checked == true) {
					$(".tamanhoGG.pretoProduto").css("display", "flex");
				}
				if (rosa.checked == true) {
					$(".tamanhoGG.rosaProduto").css("display", "flex");
				}
				if (vinho.checked == true) {
					$(".tamanhoGG.vinhoProduto").css("display", "flex");
				}
			}
			if (tamanhoU.checked == true) {
				$(".tamanhoP").hide();
				$(".tamanhoM").hide();
				$(".tamanhoG").hide();
				$(".tamanhoGG").hide();
				$(".tamanho36").hide();
				$(".tamanho38").hide();
				$(".tamanho40").hide();
				$(".tamanho42").hide();
				$(".tamanho44").hide();
				$(".tamanho46").hide();
				if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanhoU").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanhoU.faixaPreco1").css("display", "flex");
							if (faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa2.checked == true) {
							$(".tamanhoU.faixaPreco2").css("display", "flex");
							if (faixa1.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa3.checked == true) {
							$(".tamanhoU.faixaPreco3").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa4.checked == true) {
							$(".tamanhoU.faixaPreco4").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa5.checked == true) {
							$(".tamanhoU.faixaPreco5").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
							}
						}
					}
				}
				if (amarelo.checked == true) {
					$(".tamanhoU.amareloProduto").css("display", "flex");
				}
				if (azul.checked == true) {
					$(".tamanhoU.azulProduto").css("display", "flex");
				}
				if (branco.checked == true) {
					$(".tamanhoU.brancoProduto").css("display", "flex");
				}
				if (cinza.checked == true) {
					$(".tamanhoU.cinzaProduto").css("display", "flex");
				}
				if (laranja.checked == true) {
					$(".tamanhoU.laranjaProduto").css("display", "flex");
				}
				if (verde.checked == true) {
					$(".tamanhoU.verdeProduto").css("display", "flex");
				}
				if (vermelho.checked == true) {
					$(".tamanhoU.vermelhoProduto").css("display", "flex");
				}
				if (preto.checked == true) {
					$(".tamanhoU.pretoProduto").css("display", "flex");
				}
				if (rosa.checked == true) {
					$(".tamanhoU.rosaProduto").css("display", "flex");
				}
				if (vinho.checked == true) {
					$(".tamanhoU.vinhoProduto").css("display", "flex");
				}
			}
			if (tamanho36.checked == true) {
				$(".tamanhoP").hide();
				$(".tamanhoM").hide();
				$(".tamanhoG").hide();
				$(".tamanhoGG").hide();
				$(".tamanhoU").hide();
				$(".tamanho38").hide();
				$(".tamanho40").hide();
				$(".tamanho42").hide();
				$(".tamanho44").hide();
				$(".tamanho46").hide();
				if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanho36").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanho36.faixaPreco1").css("display", "flex");
							if (faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa2.checked == true) {
							$(".tamanho36.faixaPreco2").css("display", "flex");
							if (faixa1.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa3.checked == true) {
							$(".tamanho36.faixaPreco3").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa4.checked == true) {
							$(".tamanho36.faixaPreco4").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa5.checked == true) {
							$(".tamanho36.faixaPreco5").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
							}
						}
					}
				}
				if (amarelo.checked == true) {
					$(".tamanho36.amareloProduto").css("display", "flex");
				}
				if (azul.checked == true) {
					$(".tamanho36.azulProduto").css("display", "flex");
				}
				if (branco.checked == true) {
					$(".tamanho36.brancoProduto").css("display", "flex");
				}
				if (cinza.checked == true) {
					$(".tamanho36.cinzaProduto").css("display", "flex");
				}
				if (laranja.checked == true) {
					$(".tamanho36.laranjaProduto").css("display", "flex");
				}
				if (verde.checked == true) {
					$(".tamanho36.verdeProduto").css("display", "flex");
				}
				if (vermelho.checked == true) {
					$(".tamanho36.vermelhoProduto").css("display", "flex");
				}
				if (preto.checked == true) {
					$(".tamanho36.pretoProduto").css("display", "flex");
				}
				if (rosa.checked == true) {
					$(".tamanho36.rosaProduto").css("display", "flex");
				}
				if (vinho.checked == true) {
					$(".tamanho36.vinhoProduto").css("display", "flex");
				}
			}
			if (tamanho38.checked == true) {
				$(".tamanhoP").hide();
				$(".tamanhoM").hide();
				$(".tamanhoG").hide();
				$(".tamanhoGG").hide();
				$(".tamanhoU").hide();
				$(".tamanho36").hide();
				$(".tamanho40").hide();
				$(".tamanho42").hide();
				$(".tamanho44").hide();
				$(".tamanho46").hide();
				if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanho38").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanho38.faixaPreco1").css("display", "flex");
							if (faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa2.checked == true) {
							$(".tamanho38.faixaPreco2").css("display", "flex");
							if (faixa1.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa3.checked == true) {
							$(".tamanho38.faixaPreco3").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa4.checked == true) {
							$(".tamanho38.faixaPreco4").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa5.checked == true) {
							$(".tamanho38.faixaPreco5").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
							}
						}
					}
				}
				if (amarelo.checked == true) {
					$(".tamanho38.amareloProduto").css("display", "flex");
				}
				if (azul.checked == true) {
					$(".tamanho38.azulProduto").css("display", "flex");
				}
				if (branco.checked == true) {
					$(".tamanho38.brancoProduto").css("display", "flex");
				}
				if (cinza.checked == true) {
					$(".tamanho38.cinzaProduto").css("display", "flex");
				}
				if (laranja.checked == true) {
					$(".tamanho38.laranjaProduto").css("display", "flex");
				}
				if (verde.checked == true) {
					$(".tamanho38.verdeProduto").css("display", "flex");
				}
				if (vermelho.checked == true) {
					$(".tamanho38.vermelhoProduto").css("display", "flex");
				}
				if (preto.checked == true) {
					$(".tamanho38.pretoProduto").css("display", "flex");
				}
				if (rosa.checked == true) {
					$(".tamanho38.rosaProduto").css("display", "flex");
				}
				if (vinho.checked == true) {
					$(".tamanho38.vinhoProduto").css("display", "flex");
				}
			}
			if (tamanho40.checked == true) {
				$(".tamanhoP").hide();
				$(".tamanhoM").hide();
				$(".tamanhoG").hide();
				$(".tamanhoGG").hide();
				$(".tamanhoU").hide();
				$(".tamanho36").hide();
				$(".tamanho38").hide();
				$(".tamanho42").hide();
				$(".tamanho44").hide();
				$(".tamanho46").hide();
				if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanho40").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanho40.faixaPreco1").css("display", "flex");
							if (faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa2.checked == true) {
							$(".tamanho40.faixaPreco2").css("display", "flex");
							if (faixa1.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa3.checked == true) {
							$(".tamanho40.faixaPreco3").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa4.checked == true) {
							$(".tamanho40.faixaPreco4").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa5.checked == true) {
							$(".tamanho40.faixaPreco5").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
							}
						}
					}
				}
				if (amarelo.checked == true) {
					$(".tamanho40.amareloProduto").css("display", "flex");
				}
				if (azul.checked == true) {
					$(".tamanho40.azulProduto").css("display", "flex");
				}
				if (branco.checked == true) {
					$(".tamanho40.brancoProduto").css("display", "flex");
				}
				if (cinza.checked == true) {
					$(".tamanho40.cinzaProduto").css("display", "flex");
				}
				if (laranja.checked == true) {
					$(".tamanho40.laranjaProduto").css("display", "flex");
				}
				if (verde.checked == true) {
					$(".tamanho40.verdeProduto").css("display", "flex");
				}
				if (vermelho.checked == true) {
					$(".tamanho40.vermelhoProduto").css("display", "flex");
				}
				if (preto.checked == true) {
					$(".tamanho40.pretoProduto").css("display", "flex");
				}
				if (rosa.checked == true) {
					$(".tamanho40.rosaProduto").css("display", "flex");
				}
				if (vinho.checked == true) {
					$(".tamanho40.vinhoProduto").css("display", "flex");
				}
			}
			if (tamanho42.checked == true) {
				$(".tamanhoP").hide();
				$(".tamanhoM").hide();
				$(".tamanhoG").hide();
				$(".tamanhoGG").hide();
				$(".tamanhoU").hide();
				$(".tamanho36").hide();
				$(".tamanho38").hide();
				$(".tamanho40").hide();
				$(".tamanho44").hide();
				$(".tamanho46").hide();
				if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanho42").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanho42.faixaPreco1").css("display", "flex");
							if (faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa2.checked == true) {
							$(".tamanho42.faixaPreco2").css("display", "flex");
							if (faixa1.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa3.checked == true) {
							$(".tamanho42.faixaPreco3").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa4.checked == true) {
							$(".tamanho42.faixaPreco4").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa5.checked == true) {
							$(".tamanho42.faixaPreco5").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
							}
						}
					}
				}
				if (amarelo.checked == true) {
					$(".tamanho42.amareloProduto").css("display", "flex");
				}
				if (azul.checked == true) {
					$(".tamanho42.azulProduto").css("display", "flex");
				}
				if (branco.checked == true) {
					$(".tamanho42.brancoProduto").css("display", "flex");
				}
				if (cinza.checked == true) {
					$(".tamanho42.cinzaProduto").css("display", "flex");
				}
				if (laranja.checked == true) {
					$(".tamanho42.laranjaProduto").css("display", "flex");
				}
				if (verde.checked == true) {
					$(".tamanho42.verdeProduto").css("display", "flex");
				}
				if (vermelho.checked == true) {
					$(".tamanho42.vermelhoProduto").css("display", "flex");
				}
				if (preto.checked == true) {
					$(".tamanho42.pretoProduto").css("display", "flex");
				}
				if (rosa.checked == true) {
					$(".tamanho42.rosaProduto").css("display", "flex");
				}
				if (vinho.checked == true) {
					$(".tamanho42.vinhoProduto").css("display", "flex");
				}
			}
			if (tamanho44.checked == true) {
				$(".tamanhoP").hide();
				$(".tamanhoM").hide();
				$(".tamanhoG").hide();
				$(".tamanhoGG").hide();
				$(".tamanhoU").hide();
				$(".tamanho36").hide();
				$(".tamanho38").hide();
				$(".tamanho40").hide();
				$(".tamanho42").hide();
				$(".tamanho46").hide();
				if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanho44").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanho44.faixaPreco1").css("display", "flex");
							if (faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa2.checked == true) {
							$(".tamanho44.faixaPreco2").css("display", "flex");
							if (faixa1.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa3.checked == true) {
							$(".tamanho44.faixaPreco3").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa4.checked == true) {
							$(".tamanho44.faixaPreco4").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa5.checked == true) {
							$(".tamanho44.faixaPreco5").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
							}
						}
					}
				}
				if (amarelo.checked == true) {
					$(".tamanho44.amareloProduto").css("display", "flex");
				}
				if (azul.checked == true) {
					$(".tamanho44.azulProduto").css("display", "flex");
				}
				if (branco.checked == true) {
					$(".tamanho44.brancoProduto").css("display", "flex");
				}
				if (cinza.checked == true) {
					$(".tamanho44.cinzaProduto").css("display", "flex");
				}
				if (laranja.checked == true) {
					$(".tamanho44.laranjaProduto").css("display", "flex");
				}
				if (verde.checked == true) {
					$(".tamanho44.verdeProduto").css("display", "flex");
				}
				if (vermelho.checked == true) {
					$(".tamanho44.vermelhoProduto").css("display", "flex");
				}
				if (preto.checked == true) {
					$(".tamanho44.pretoProduto").css("display", "flex");
				}
				if (rosa.checked == true) {
					$(".tamanho44.rosaProduto").css("display", "flex");
				}
				if (vinho.checked == true) {
					$(".tamanho44.vinhoProduto").css("display", "flex");
				}
			}
			if (tamanho46.checked == true) {
				$(".tamanhoP").hide();
				$(".tamanhoM").hide();
				$(".tamanhoG").hide();
				$(".tamanhoGG").hide();
				$(".tamanhoU").hide();
				$(".tamanho36").hide();
				$(".tamanho38").hide();
				$(".tamanho40").hide();
				$(".tamanho42").hide();
				$(".tamanho44").hide();
				if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanho46").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanho46.faixaPreco1").css("display", "flex");
							if (faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa2.checked == true) {
							$(".tamanho46.faixaPreco2").css("display", "flex");
							if (faixa1.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa3.checked == true) {
							$(".tamanho46.faixaPreco3").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa4.checked == true) {
							$(".tamanho46.faixaPreco4").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa5.checked == true) {
							$(".tamanho46.faixaPreco5").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
							}
						}
					}
				}
				if (amarelo.checked == true) {
					$(".tamanho46.amareloProduto").css("display", "flex");
				}
				if (azul.checked == true) {
					$(".tamanho46.azulProduto").css("display", "flex");
				}
				if (branco.checked == true) {
					$(".tamanho46.brancoProduto").css("display", "flex");
				}
				if (cinza.checked == true) {
					$(".tamanho46.cinzaProduto").css("display", "flex");
				}
				if (laranja.checked == true) {
					$(".tamanho46.laranjaProduto").css("display", "flex");
				}
				if (verde.checked == true) {
					$(".tamanho46.verdeProduto").css("display", "flex");
				}
				if (vermelho.checked == true) {
					$(".tamanho46.vermelhoProduto").css("display", "flex");
				}
				if (preto.checked == true) {
					$(".tamanho46.pretoProduto").css("display", "flex");
				}
				if (rosa.checked == true) {
					$(".tamanho46.rosaProduto").css("display", "flex");
				}
				if (vinho.checked == true) {
					$(".tamanho46.vinhoProduto").css("display", "flex");
				}
			}
		}
	})

	$(".filtrar-checkbox #verde").click(function () {
		if (verde.checked == true) {
			if (tamanhoP.checked == false && tamanhoM.checked == false && tamanhoG.checked == false && tamanhoGG.checked == false && tamanhoU.checked == false && tamanho36.checked == false && tamanho38.checked == false && tamanho40.checked == false && tamanho42.checked == false && tamanho44.checked == false && tamanho46.checked == false) {
				if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
					$(".verdeProduto").css("display", "flex");
				} else {
					if (faixa1.checked == true) {
						$(".faixaPreco1.verdeProduto").css("display", "flex");
					}
					if (faixa2.checked == true) {
						$(".faixaPreco2.verdeProduto").css("display", "flex");
					}
					if (faixa3.checked == true) {
						$(".faixaPreco3.verdeProduto").css("display", "flex");
					}
					if (faixa4.checked == true) {
						$(".faixaPreco4.verdeProduto").css("display", "flex");
					}
					if (faixa5.checked == true) {
						$(".faixaPreco5.verdeProduto").css("display", "flex");
					}
				}
			} else {
				if (tamanhoP.checked == true) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanhoP.verdeProduto").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanhoP.faixaPreco1.verdeProduto").css("display", "flex");
						}
						if (faixa2.checked == true) {
							$(".tamanhoP.faixaPreco2.verdeProduto").css("display", "flex");
						}
						if (faixa3.checked == true) {
							$(".tamanhoP.faixaPreco3.verdeProduto").css("display", "flex");
						}
						if (faixa4.checked == true) {
							$(".tamanhoP.faixaPreco4.verdeProduto").css("display", "flex");
						}
						if (faixa5.checked == true) {
							$(".tamanhoP.faixaPreco5.verdeProduto").css("display", "flex");
						}
					}
				}
				if (tamanhoM.checked == true) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanhoM.verdeProduto").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanhoM.faixaPreco1.verdeProduto").css("display", "flex");
						}
						if (faixa2.checked == true) {
							$(".tamanhoM.faixaPreco2.verdeProduto").css("display", "flex");
						}
						if (faixa3.checked == true) {
							$(".tamanhoM.faixaPreco3.verdeProduto").css("display", "flex");
						}
						if (faixa4.checked == true) {
							$(".tamanhoM.faixaPreco4.verdeProduto").css("display", "flex");
						}
						if (faixa5.checked == true) {
							$(".tamanhoM.faixaPreco5.verdeProduto").css("display", "flex");
						}
					}
				}
				if (tamanhoG.checked == true) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanhoG.verdeProduto").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanhoG.faixaPreco1.verdeProduto").css("display", "flex");
						}
						if (faixa2.checked == true) {
							$(".tamanhoG.faixaPreco2.verdeProduto").css("display", "flex");
						}
						if (faixa3.checked == true) {
							$(".tamanhoG.faixaPreco3.verdeProduto").css("display", "flex");
						}
						if (faixa4.checked == true) {
							$(".tamanhoG.faixaPreco4.verdeProduto").css("display", "flex");
						}
						if (faixa5.checked == true) {
							$(".tamanhoG.faixaPreco5.verdeProduto").css("display", "flex");
						}
					}
				}
				if (tamanhoGG.checked == true) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanhoGG.verdeProduto").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanhoGG.faixaPreco1.verdeProduto").css("display", "flex");
						}
						if (faixa2.checked == true) {
							$(".tamanhoGG.faixaPreco2.verdeProduto").css("display", "flex");
						}
						if (faixa3.checked == true) {
							$(".tamanhoGG.faixaPreco3.verdeProduto").css("display", "flex");
						}
						if (faixa4.checked == true) {
							$(".tamanhoGG.faixaPreco4.verdeProduto").css("display", "flex");
						}
						if (faixa5.checked == true) {
							$(".tamanhoGG.faixaPreco5.verdeProduto").css("display", "flex");
						}
					}
				}
				if (tamanhoU.checked == true) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanhoU.verdeProduto").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanhoU.faixaPreco1.verdeProduto").css("display", "flex");
						}
						if (faixa2.checked == true) {
							$(".tamanhoU.faixaPreco2.verdeProduto").css("display", "flex");
						}
						if (faixa3.checked == true) {
							$(".tamanhoU.faixaPreco3.verdeProduto").css("display", "flex");
						}
						if (faixa4.checked == true) {
							$(".tamanhoU.faixaPreco4.verdeProduto").css("display", "flex");
						}
						if (faixa5.checked == true) {
							$(".tamanhoU.faixaPreco5.verdeProduto").css("display", "flex");
						}
					}
				}
				if (tamanho36.checked == true) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanho36.verdeProduto").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanho36.faixaPreco1.verdeProduto").css("display", "flex");
						}
						if (faixa2.checked == true) {
							$(".tamanho36.faixaPreco2.verdeProduto").css("display", "flex");
						}
						if (faixa3.checked == true) {
							$(".tamanho36.faixaPreco3.verdeProduto").css("display", "flex");
						}
						if (faixa4.checked == true) {
							$(".tamanho36.faixaPreco4.verdeProduto").css("display", "flex");
						}
						if (faixa5.checked == true) {
							$(".tamanho36.faixaPreco5.verdeProduto").css("display", "flex");
						}
					}
				}
				if (tamanho38.checked == true) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanho38.verdeProduto").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanho38.faixaPreco1.verdeProduto").css("display", "flex");
						}
						if (faixa2.checked == true) {
							$(".tamanho38.faixaPreco2.verdeProduto").css("display", "flex");
						}
						if (faixa3.checked == true) {
							$(".tamanho38.faixaPreco3.verdeProduto").css("display", "flex");
						}
						if (faixa4.checked == true) {
							$(".tamanho38.faixaPreco4.verdeProduto").css("display", "flex");
						}
						if (faixa5.checked == true) {
							$(".tamanho38.faixaPreco5.verdeProduto").css("display", "flex");
						}
					}
				}
				if (tamanho40.checked == true) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanho40.verdeProduto").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanho40.faixaPreco1.verdeProduto").css("display", "flex");
						}
						if (faixa2.checked == true) {
							$(".tamanho40.faixaPreco2.verdeProduto").css("display", "flex");
						}
						if (faixa3.checked == true) {
							$(".tamanho40.faixaPreco3.verdeProduto").css("display", "flex");
						}
						if (faixa4.checked == true) {
							$(".tamanho40.faixaPreco4.verdeProduto").css("display", "flex");
						}
						if (faixa5.checked == true) {
							$(".tamanho40.faixaPreco5.verdeProduto").css("display", "flex");
						}
					}
				}
				if (tamanho42.checked == true) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanho42.verdeProduto").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanho42.faixaPreco1.verdeProduto").css("display", "flex");
						}
						if (faixa2.checked == true) {
							$(".tamanho42.faixaPreco2.verdeProduto").css("display", "flex");
						}
						if (faixa3.checked == true) {
							$(".tamanho42.faixaPreco3.verdeProduto").css("display", "flex");
						}
						if (faixa4.checked == true) {
							$(".tamanho42.faixaPreco4.verdeProduto").css("display", "flex");
						}
						if (faixa5.checked == true) {
							$(".tamanho42.faixaPreco5.verdeProduto").css("display", "flex");
						}
					}
				}
				if (tamanho44.checked == true) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanho44.verdeProduto").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanho44.faixaPreco1.verdeProduto").css("display", "flex");
						}
						if (faixa2.checked == true) {
							$(".tamanho44.faixaPreco2.verdeProduto").css("display", "flex");
						}
						if (faixa3.checked == true) {
							$(".tamanho44.faixaPreco3.verdeProduto").css("display", "flex");
						}
						if (faixa4.checked == true) {
							$(".tamanho44.faixaPreco4.verdeProduto").css("display", "flex");
						}
						if (faixa5.checked == true) {
							$(".tamanho44.faixaPreco5.verdeProduto").css("display", "flex");
						}
					}
				}
				if (tamanho46.checked == true) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanho46.verdeProduto").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanho46.faixaPreco1.verdeProduto").css("display", "flex");
						}
						if (faixa2.checked == true) {
							$(".tamanho46.faixaPreco2.verdeProduto").css("display", "flex");
						}
						if (faixa3.checked == true) {
							$(".tamanho46.faixaPreco3.verdeProduto").css("display", "flex");
						}
						if (faixa4.checked == true) {
							$(".tamanho46.faixaPreco4.verdeProduto").css("display", "flex");
						}
						if (faixa5.checked == true) {
							$(".tamanho46.faixaPreco5.verdeProduto").css("display", "flex");
						}
					}
				}
			}
			if (amarelo.checked == false) {
				$(".amareloProduto").hide();
			}
			if (azul.checked == false) {
				$(".azulProduto").hide();
			}
			if (branco.checked == false) {
				$(".brancoProduto").hide();
			}
			if (cinza.checked == false) {
				$(".cinzaProduto").hide();
			}
			if (laranja.checked == false) {
				$(".laranjaProduto").hide();
			}
			if (vermelho.checked == false) {
				$(".vermelhoProduto").hide();
			}
			if (preto.checked == false) {
				$(".pretoProduto").hide();
			}
			if (rosa.checked == false) {
				$(".rosaProduto").hide();
			}
			if (vinho.checked == false) {
				$(".vinhoProduto").hide();
			}
		} else {
			$(".verdeProduto").hide();
			if (tamanhoP.checked == false && tamanhoM.checked == false && tamanhoG.checked == false && tamanhoGG.checked == false && tamanhoU.checked == false && tamanho36.checked == false && tamanho38.checked == false && tamanho40.checked == false && tamanho42.checked == false && tamanho44.checked == false && tamanho46.checked == false) {
				if (faixa1.checked == true) {
					if (faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".faixaPreco2").hide();
						$(".faixaPreco3").hide();
						$(".faixaPreco4").hide();
						$(".faixaPreco5").hide();
					}
					if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
						$(".faixaPreco1").css("display", "flex");
					}
					if (amarelo.checked == true) {
						$(".faixaPreco1.amareloProduto").css("display", "flex");
					}
					if (azul.checked == true) {
						$(".faixaPreco1.azulProduto").css("display", "flex");
					}
					if (branco.checked == true) {
						$(".faixaPreco1.brancoProduto").css("display", "flex");
					}
					if (cinza.checked == true) {
						$(".faixaPreco1.cinzaProduto").css("display", "flex");
					}
					if (laranja.checked == true) {
						$(".faixaPreco1.laranjaProduto").css("display", "flex");
					}
					if (verde.checked == true) {
						$(".faixaPreco1.verdeProduto").css("display", "flex");
					}
					if (vermelho.checked == true) {
						$(".faixaPreco1.vermelhoProduto").css("display", "flex");
					}
					if (preto.checked == true) {
						$(".faixaPreco1.pretoProduto").css("display", "flex");
					}
					if (rosa.checked == true) {
						$(".faixaPreco1.rosaProduto").css("display", "flex");
					}
					if (vinho.checked == true) {
						$(".faixaPreco1.vinhoProduto").css("display", "flex");
					}
				}
				if (faixa2.checked == true) {
					if (faixa1.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".faixaPreco1").hide();
						$(".faixaPreco3").hide();
						$(".faixaPreco4").hide();
						$(".faixaPreco5").hide();
					}
					if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
						$(".faixaPreco2").css("display", "flex");
					}
					if (amarelo.checked == true) {
						$(".faixaPreco2.amareloProduto").css("display", "flex");
					}
					if (azul.checked == true) {
						$(".faixaPreco2.azulProduto").css("display", "flex");
					}
					if (branco.checked == true) {
						$(".faixaPreco2.brancoProduto").css("display", "flex");
					}
					if (cinza.checked == true) {
						$(".faixaPreco2.cinzaProduto").css("display", "flex");
					}
					if (laranja.checked == true) {
						$(".faixaPreco2.laranjaProduto").css("display", "flex");
					}
					if (verde.checked == true) {
						$(".faixaPreco2.verdeProduto").css("display", "flex");
					}
					if (vermelho.checked == true) {
						$(".faixaPreco2.vermelhoProduto").css("display", "flex");
					}
					if (preto.checked == true) {
						$(".faixaPreco2.pretoProduto").css("display", "flex");
					}
					if (rosa.checked == true) {
						$(".faixaPreco2.rosaProduto").css("display", "flex");
					}
					if (vinho.checked == true) {
						$(".faixaPreco2.vinhoProduto").css("display", "flex");
					}
				}
				if (faixa3.checked == true) {
					if (faixa1.checked == false && faixa2.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".faixaPreco1").hide();
						$(".faixaPreco2").hide();
						$(".faixaPreco4").hide();
						$(".faixaPreco5").hide();
					}
					if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
						$(".faixaPreco3").css("display", "flex");
					}
					if (amarelo.checked == true) {
						$(".faixaPreco3.amareloProduto").css("display", "flex");
					}
					if (azul.checked == true) {
						$(".faixaPreco3.azulProduto").css("display", "flex");
					}
					if (branco.checked == true) {
						$(".faixaPreco3.brancoProduto").css("display", "flex");
					}
					if (cinza.checked == true) {
						$(".faixaPreco3.cinzaProduto").css("display", "flex");
					}
					if (laranja.checked == true) {
						$(".faixaPreco3.laranjaProduto").css("display", "flex");
					}
					if (verde.checked == true) {
						$(".faixaPreco3.verdeProduto").css("display", "flex");
					}
					if (vermelho.checked == true) {
						$(".faixaPreco3.vermelhoProduto").css("display", "flex");
					}
					if (preto.checked == true) {
						$(".faixaPreco3.pretoProduto").css("display", "flex");
					}
					if (rosa.checked == true) {
						$(".faixaPreco3.rosaProduto").css("display", "flex");
					}
					if (vinho.checked == true) {
						$(".faixaPreco3.vinhoProduto").css("display", "flex");
					}
				}
				if (faixa4.checked == true) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa5.checked == false) {
						$(".faixaPreco1").hide();
						$(".faixaPreco2").hide();
						$(".faixaPreco3").hide();
						$(".faixaPreco5").hide();
					}
					if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
						$(".faixaPreco4").css("display", "flex");
					}
					if (amarelo.checked == true) {
						$(".faixaPreco4.amareloProduto").css("display", "flex");
					}
					if (azul.checked == true) {
						$(".faixaPreco4.azulProduto").css("display", "flex");
					}
					if (branco.checked == true) {
						$(".faixaPreco4.brancoProduto").css("display", "flex");
					}
					if (cinza.checked == true) {
						$(".faixaPreco4.cinzaProduto").css("display", "flex");
					}
					if (laranja.checked == true) {
						$(".faixaPreco4.laranjaProduto").css("display", "flex");
					}
					if (verde.checked == true) {
						$(".faixaPreco4.verdeProduto").css("display", "flex");
					}
					if (vermelho.checked == true) {
						$(".faixaPreco4.vermelhoProduto").css("display", "flex");
					}
					if (preto.checked == true) {
						$(".faixaPreco4.pretoProduto").css("display", "flex");
					}
					if (rosa.checked == true) {
						$(".faixaPreco4.rosaProduto").css("display", "flex");
					}
					if (vinho.checked == true) {
						$(".faixaPreco4.vinhoProduto").css("display", "flex");
					}
				}
				if (faixa5.checked == true) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false) {
						$(".faixaPreco1").hide();
						$(".faixaPreco2").hide();
						$(".faixaPreco3").hide();
						$(".faixaPreco4").hide();
					}
					if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
						$(".faixaPreco5").css("display", "flex");
					}
					if (amarelo.checked == true) {
						$(".faixaPreco5.amareloProduto").css("display", "flex");
					}
					if (azul.checked == true) {
						$(".faixaPreco5.azulProduto").css("display", "flex");
					}
					if (branco.checked == true) {
						$(".faixaPreco5.brancoProduto").css("display", "flex");
					}
					if (cinza.checked == true) {
						$(".faixaPreco5.cinzaProduto").css("display", "flex");
					}
					if (laranja.checked == true) {
						$(".faixaPreco5.laranjaProduto").css("display", "flex");
					}
					if (verde.checked == true) {
						$(".faixaPreco5.verdeProduto").css("display", "flex");
					}
					if (vermelho.checked == true) {
						$(".faixaPreco5.vermelhoProduto").css("display", "flex");
					}
					if (preto.checked == true) {
						$(".faixaPreco5.pretoProduto").css("display", "flex");
					}
					if (rosa.checked == true) {
						$(".faixaPreco5.rosaProduto").css("display", "flex");
					}
					if (vinho.checked == true) {
						$(".faixaPreco5.vinhoProduto").css("display", "flex");
					}
				}
			}
			if (tamanhoP.checked == true) {
				$(".tamanhoM").hide();
				$(".tamanhoG").hide();
				$(".tamanhoGG").hide();
				$(".tamanhoU").hide();
				$(".tamanho36").hide();
				$(".tamanho38").hide();
				$(".tamanho40").hide();
				$(".tamanho42").hide();
				$(".tamanho44").hide();
				$(".tamanho46").hide();
				if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanhoP").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanhoP.faixaPreco1").css("display", "flex");
							if (faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa2.checked == true) {
							$(".tamanhoP.faixaPreco2").css("display", "flex");
							if (faixa1.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa3.checked == true) {
							$(".tamanhoP.faixaPreco3").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa4.checked == true) {
							$(".tamanhoP.faixaPreco4").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa5.checked == true) {
							$(".tamanhoP.faixaPreco5").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
							}
						}
					}
				}
				if (amarelo.checked == true) {
					$(".tamanhoP.amareloProduto").css("display", "flex");
				}
				if (azul.checked == true) {
					$(".tamanhoP.azulProduto").css("display", "flex");
				}
				if (branco.checked == true) {
					$(".tamanhoP.brancoProduto").css("display", "flex");
				}
				if (cinza.checked == true) {
					$(".tamanhoP.cinzaProduto").css("display", "flex");
				}
				if (laranja.checked == true) {
					$(".tamanhoP.laranjaProduto").css("display", "flex");
				}
				if (verde.checked == true) {
					$(".tamanhoP.verdeProduto").css("display", "flex");
				}
				if (vermelho.checked == true) {
					$(".tamanhoP.vermelhoProduto").css("display", "flex");
				}
				if (preto.checked == true) {
					$(".tamanhoP.pretoProduto").css("display", "flex");
				}
				if (rosa.checked == true) {
					$(".tamanhoP.rosaProduto").css("display", "flex");
				}
				if (vinho.checked == true) {
					$(".tamanhoP.vinhoProduto").css("display", "flex");
				}
			}
			if (tamanhoM.checked == true) {
				$(".tamanhoP").hide();
				$(".tamanhoG").hide();
				$(".tamanhoGG").hide();
				$(".tamanhoU").hide();
				$(".tamanho36").hide();
				$(".tamanho38").hide();
				$(".tamanho40").hide();
				$(".tamanho42").hide();
				$(".tamanho44").hide();
				$(".tamanho46").hide();
				if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanhoM").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanhoM.faixaPreco1").css("display", "flex");
							if (faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa2.checked == true) {
							$(".tamanhoM.faixaPreco2").css("display", "flex");
							if (faixa1.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa3.checked == true) {
							$(".tamanhoM.faixaPreco3").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa4.checked == true) {
							$(".tamanhoM.faixaPreco4").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa5.checked == true) {
							$(".tamanhoM.faixaPreco5").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
							}
						}
					}
				}
				if (amarelo.checked == true) {
					$(".tamanhoM.amareloProduto").css("display", "flex");
				}
				if (azul.checked == true) {
					$(".tamanhoM.azulProduto").css("display", "flex");
				}
				if (branco.checked == true) {
					$(".tamanhoM.brancoProduto").css("display", "flex");
				}
				if (cinza.checked == true) {
					$(".tamanhoM.cinzaProduto").css("display", "flex");
				}
				if (laranja.checked == true) {
					$(".tamanhoM.laranjaProduto").css("display", "flex");
				}
				if (verde.checked == true) {
					$(".tamanhoM.verdeProduto").css("display", "flex");
				}
				if (vermelho.checked == true) {
					$(".tamanhoM.vermelhoProduto").css("display", "flex");
				}
				if (preto.checked == true) {
					$(".tamanhoM.pretoProduto").css("display", "flex");
				}
				if (rosa.checked == true) {
					$(".tamanhoM.rosaProduto").css("display", "flex");
				}
				if (vinho.checked == true) {
					$(".tamanhoM.vinhoProduto").css("display", "flex");
				}
			}
			if (tamanhoG.checked == true) {
				$(".tamanhoP").hide();
				$(".tamanhoM").hide();
				$(".tamanhoGG").hide();
				$(".tamanhoU").hide();
				$(".tamanho36").hide();
				$(".tamanho38").hide();
				$(".tamanho40").hide();
				$(".tamanho42").hide();
				$(".tamanho44").hide();
				$(".tamanho46").hide();
				if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanhoG").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanhoG.faixaPreco1").css("display", "flex");
							if (faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa2.checked == true) {
							$(".tamanhoG.faixaPreco2").css("display", "flex");
							if (faixa1.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa3.checked == true) {
							$(".tamanhoG.faixaPreco3").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa4.checked == true) {
							$(".tamanhoG.faixaPreco4").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa5.checked == true) {
							$(".tamanhoG.faixaPreco5").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
							}
						}
					}
				}
				if (amarelo.checked == true) {
					$(".tamanhoG.amareloProduto").css("display", "flex");
				}
				if (azul.checked == true) {
					$(".tamanhoG.azulProduto").css("display", "flex");
				}
				if (branco.checked == true) {
					$(".tamanhoG.brancoProduto").css("display", "flex");
				}
				if (cinza.checked == true) {
					$(".tamanhoG.cinzaProduto").css("display", "flex");
				}
				if (laranja.checked == true) {
					$(".tamanhoG.laranjaProduto").css("display", "flex");
				}
				if (verde.checked == true) {
					$(".tamanhoG.verdeProduto").css("display", "flex");
				}
				if (vermelho.checked == true) {
					$(".tamanhoG.vermelhoProduto").css("display", "flex");
				}
				if (preto.checked == true) {
					$(".tamanhoG.pretoProduto").css("display", "flex");
				}
				if (rosa.checked == true) {
					$(".tamanhoG.rosaProduto").css("display", "flex");
				}
				if (vinho.checked == true) {
					$(".tamanhoG.vinhoProduto").css("display", "flex");
				}
			}
			if (tamanhoGG.checked == true) {
				$(".tamanhoP").hide();
				$(".tamanhoM").hide();
				$(".tamanhoG").hide();
				$(".tamanhoU").hide();
				$(".tamanho36").hide();
				$(".tamanho38").hide();
				$(".tamanho40").hide();
				$(".tamanho42").hide();
				$(".tamanho44").hide();
				$(".tamanho46").hide();
				if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanhoGG").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanhoGG.faixaPreco1").css("display", "flex");
							if (faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa2.checked == true) {
							$(".tamanhoGG.faixaPreco2").css("display", "flex");
							if (faixa1.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa3.checked == true) {
							$(".tamanhoGG.faixaPreco3").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa4.checked == true) {
							$(".tamanhoGG.faixaPreco4").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa5.checked == true) {
							$(".tamanhoGG.faixaPreco5").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
							}
						}
					}
				}
				if (amarelo.checked == true) {
					$(".tamanhoGG.amareloProduto").css("display", "flex");
				}
				if (azul.checked == true) {
					$(".tamanhoGG.azulProduto").css("display", "flex");
				}
				if (branco.checked == true) {
					$(".tamanhoGG.brancoProduto").css("display", "flex");
				}
				if (cinza.checked == true) {
					$(".tamanhoGG.cinzaProduto").css("display", "flex");
				}
				if (laranja.checked == true) {
					$(".tamanhoGG.laranjaProduto").css("display", "flex");
				}
				if (verde.checked == true) {
					$(".tamanhoGG.verdeProduto").css("display", "flex");
				}
				if (vermelho.checked == true) {
					$(".tamanhoGG.vermelhoProduto").css("display", "flex");
				}
				if (preto.checked == true) {
					$(".tamanhoGG.pretoProduto").css("display", "flex");
				}
				if (rosa.checked == true) {
					$(".tamanhoGG.rosaProduto").css("display", "flex");
				}
				if (vinho.checked == true) {
					$(".tamanhoGG.vinhoProduto").css("display", "flex");
				}
			}
			if (tamanhoU.checked == true) {
				$(".tamanhoP").hide();
				$(".tamanhoM").hide();
				$(".tamanhoG").hide();
				$(".tamanhoGG").hide();
				$(".tamanho36").hide();
				$(".tamanho38").hide();
				$(".tamanho40").hide();
				$(".tamanho42").hide();
				$(".tamanho44").hide();
				$(".tamanho46").hide();
				if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanhoU").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanhoU.faixaPreco1").css("display", "flex");
							if (faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa2.checked == true) {
							$(".tamanhoU.faixaPreco2").css("display", "flex");
							if (faixa1.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa3.checked == true) {
							$(".tamanhoU.faixaPreco3").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa4.checked == true) {
							$(".tamanhoU.faixaPreco4").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa5.checked == true) {
							$(".tamanhoU.faixaPreco5").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
							}
						}
					}
				}
				if (amarelo.checked == true) {
					$(".tamanhoU.amareloProduto").css("display", "flex");
				}
				if (azul.checked == true) {
					$(".tamanhoU.azulProduto").css("display", "flex");
				}
				if (branco.checked == true) {
					$(".tamanhoU.brancoProduto").css("display", "flex");
				}
				if (cinza.checked == true) {
					$(".tamanhoU.cinzaProduto").css("display", "flex");
				}
				if (laranja.checked == true) {
					$(".tamanhoU.laranjaProduto").css("display", "flex");
				}
				if (verde.checked == true) {
					$(".tamanhoU.verdeProduto").css("display", "flex");
				}
				if (vermelho.checked == true) {
					$(".tamanhoU.vermelhoProduto").css("display", "flex");
				}
				if (preto.checked == true) {
					$(".tamanhoU.pretoProduto").css("display", "flex");
				}
				if (rosa.checked == true) {
					$(".tamanhoU.rosaProduto").css("display", "flex");
				}
				if (vinho.checked == true) {
					$(".tamanhoU.vinhoProduto").css("display", "flex");
				}
			}
			if (tamanho36.checked == true) {
				$(".tamanhoP").hide();
				$(".tamanhoM").hide();
				$(".tamanhoG").hide();
				$(".tamanhoGG").hide();
				$(".tamanhoU").hide();
				$(".tamanho38").hide();
				$(".tamanho40").hide();
				$(".tamanho42").hide();
				$(".tamanho44").hide();
				$(".tamanho46").hide();
				if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanho36").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanho36.faixaPreco1").css("display", "flex");
							if (faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa2.checked == true) {
							$(".tamanho36.faixaPreco2").css("display", "flex");
							if (faixa1.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa3.checked == true) {
							$(".tamanho36.faixaPreco3").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa4.checked == true) {
							$(".tamanho36.faixaPreco4").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa5.checked == true) {
							$(".tamanho36.faixaPreco5").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
							}
						}
					}
				}
				if (amarelo.checked == true) {
					$(".tamanho36.amareloProduto").css("display", "flex");
				}
				if (azul.checked == true) {
					$(".tamanho36.azulProduto").css("display", "flex");
				}
				if (branco.checked == true) {
					$(".tamanho36.brancoProduto").css("display", "flex");
				}
				if (cinza.checked == true) {
					$(".tamanho36.cinzaProduto").css("display", "flex");
				}
				if (laranja.checked == true) {
					$(".tamanho36.laranjaProduto").css("display", "flex");
				}
				if (verde.checked == true) {
					$(".tamanho36.verdeProduto").css("display", "flex");
				}
				if (vermelho.checked == true) {
					$(".tamanho36.vermelhoProduto").css("display", "flex");
				}
				if (preto.checked == true) {
					$(".tamanho36.pretoProduto").css("display", "flex");
				}
				if (rosa.checked == true) {
					$(".tamanho36.rosaProduto").css("display", "flex");
				}
				if (vinho.checked == true) {
					$(".tamanho36.vinhoProduto").css("display", "flex");
				}
			}
			if (tamanho38.checked == true) {
				$(".tamanhoP").hide();
				$(".tamanhoM").hide();
				$(".tamanhoG").hide();
				$(".tamanhoGG").hide();
				$(".tamanhoU").hide();
				$(".tamanho36").hide();
				$(".tamanho40").hide();
				$(".tamanho42").hide();
				$(".tamanho44").hide();
				$(".tamanho46").hide();
				if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanho38").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanho38.faixaPreco1").css("display", "flex");
							if (faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa2.checked == true) {
							$(".tamanho38.faixaPreco2").css("display", "flex");
							if (faixa1.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa3.checked == true) {
							$(".tamanho38.faixaPreco3").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa4.checked == true) {
							$(".tamanho38.faixaPreco4").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa5.checked == true) {
							$(".tamanho38.faixaPreco5").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
							}
						}
					}
				}
				if (amarelo.checked == true) {
					$(".tamanho38.amareloProduto").css("display", "flex");
				}
				if (azul.checked == true) {
					$(".tamanho38.azulProduto").css("display", "flex");
				}
				if (branco.checked == true) {
					$(".tamanho38.brancoProduto").css("display", "flex");
				}
				if (cinza.checked == true) {
					$(".tamanho38.cinzaProduto").css("display", "flex");
				}
				if (laranja.checked == true) {
					$(".tamanho38.laranjaProduto").css("display", "flex");
				}
				if (verde.checked == true) {
					$(".tamanho38.verdeProduto").css("display", "flex");
				}
				if (vermelho.checked == true) {
					$(".tamanho38.vermelhoProduto").css("display", "flex");
				}
				if (preto.checked == true) {
					$(".tamanho38.pretoProduto").css("display", "flex");
				}
				if (rosa.checked == true) {
					$(".tamanho38.rosaProduto").css("display", "flex");
				}
				if (vinho.checked == true) {
					$(".tamanho38.vinhoProduto").css("display", "flex");
				}
			}
			if (tamanho40.checked == true) {
				$(".tamanhoP").hide();
				$(".tamanhoM").hide();
				$(".tamanhoG").hide();
				$(".tamanhoGG").hide();
				$(".tamanhoU").hide();
				$(".tamanho36").hide();
				$(".tamanho38").hide();
				$(".tamanho42").hide();
				$(".tamanho44").hide();
				$(".tamanho46").hide();
				if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanho40").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanho40.faixaPreco1").css("display", "flex");
							if (faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa2.checked == true) {
							$(".tamanho40.faixaPreco2").css("display", "flex");
							if (faixa1.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa3.checked == true) {
							$(".tamanho40.faixaPreco3").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa4.checked == true) {
							$(".tamanho40.faixaPreco4").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa5.checked == true) {
							$(".tamanho40.faixaPreco5").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
							}
						}
					}
				}
				if (amarelo.checked == true) {
					$(".tamanho40.amareloProduto").css("display", "flex");
				}
				if (azul.checked == true) {
					$(".tamanho40.azulProduto").css("display", "flex");
				}
				if (branco.checked == true) {
					$(".tamanho40.brancoProduto").css("display", "flex");
				}
				if (cinza.checked == true) {
					$(".tamanho40.cinzaProduto").css("display", "flex");
				}
				if (laranja.checked == true) {
					$(".tamanho40.laranjaProduto").css("display", "flex");
				}
				if (verde.checked == true) {
					$(".tamanho40.verdeProduto").css("display", "flex");
				}
				if (vermelho.checked == true) {
					$(".tamanho40.vermelhoProduto").css("display", "flex");
				}
				if (preto.checked == true) {
					$(".tamanho40.pretoProduto").css("display", "flex");
				}
				if (rosa.checked == true) {
					$(".tamanho40.rosaProduto").css("display", "flex");
				}
				if (vinho.checked == true) {
					$(".tamanho40.vinhoProduto").css("display", "flex");
				}
			}
			if (tamanho42.checked == true) {
				$(".tamanhoP").hide();
				$(".tamanhoM").hide();
				$(".tamanhoG").hide();
				$(".tamanhoGG").hide();
				$(".tamanhoU").hide();
				$(".tamanho36").hide();
				$(".tamanho38").hide();
				$(".tamanho40").hide();
				$(".tamanho44").hide();
				$(".tamanho46").hide();
				if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanho42").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanho42.faixaPreco1").css("display", "flex");
							if (faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa2.checked == true) {
							$(".tamanho42.faixaPreco2").css("display", "flex");
							if (faixa1.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa3.checked == true) {
							$(".tamanho42.faixaPreco3").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa4.checked == true) {
							$(".tamanho42.faixaPreco4").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa5.checked == true) {
							$(".tamanho42.faixaPreco5").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
							}
						}
					}
				}
				if (amarelo.checked == true) {
					$(".tamanho42.amareloProduto").css("display", "flex");
				}
				if (azul.checked == true) {
					$(".tamanho42.azulProduto").css("display", "flex");
				}
				if (branco.checked == true) {
					$(".tamanho42.brancoProduto").css("display", "flex");
				}
				if (cinza.checked == true) {
					$(".tamanho42.cinzaProduto").css("display", "flex");
				}
				if (laranja.checked == true) {
					$(".tamanho42.laranjaProduto").css("display", "flex");
				}
				if (verde.checked == true) {
					$(".tamanho42.verdeProduto").css("display", "flex");
				}
				if (vermelho.checked == true) {
					$(".tamanho42.vermelhoProduto").css("display", "flex");
				}
				if (preto.checked == true) {
					$(".tamanho42.pretoProduto").css("display", "flex");
				}
				if (rosa.checked == true) {
					$(".tamanho42.rosaProduto").css("display", "flex");
				}
				if (vinho.checked == true) {
					$(".tamanho42.vinhoProduto").css("display", "flex");
				}
			}
			if (tamanho44.checked == true) {
				$(".tamanhoP").hide();
				$(".tamanhoM").hide();
				$(".tamanhoG").hide();
				$(".tamanhoGG").hide();
				$(".tamanhoU").hide();
				$(".tamanho36").hide();
				$(".tamanho38").hide();
				$(".tamanho40").hide();
				$(".tamanho42").hide();
				$(".tamanho46").hide();
				if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanho44").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanho44.faixaPreco1").css("display", "flex");
							if (faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa2.checked == true) {
							$(".tamanho44.faixaPreco2").css("display", "flex");
							if (faixa1.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa3.checked == true) {
							$(".tamanho44.faixaPreco3").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa4.checked == true) {
							$(".tamanho44.faixaPreco4").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa5.checked == true) {
							$(".tamanho44.faixaPreco5").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
							}
						}
					}
				}
				if (amarelo.checked == true) {
					$(".tamanho44.amareloProduto").css("display", "flex");
				}
				if (azul.checked == true) {
					$(".tamanho44.azulProduto").css("display", "flex");
				}
				if (branco.checked == true) {
					$(".tamanho44.brancoProduto").css("display", "flex");
				}
				if (cinza.checked == true) {
					$(".tamanho44.cinzaProduto").css("display", "flex");
				}
				if (laranja.checked == true) {
					$(".tamanho44.laranjaProduto").css("display", "flex");
				}
				if (verde.checked == true) {
					$(".tamanho44.verdeProduto").css("display", "flex");
				}
				if (vermelho.checked == true) {
					$(".tamanho44.vermelhoProduto").css("display", "flex");
				}
				if (preto.checked == true) {
					$(".tamanho44.pretoProduto").css("display", "flex");
				}
				if (rosa.checked == true) {
					$(".tamanho44.rosaProduto").css("display", "flex");
				}
				if (vinho.checked == true) {
					$(".tamanho44.vinhoProduto").css("display", "flex");
				}
			}
			if (tamanho46.checked == true) {
				$(".tamanhoP").hide();
				$(".tamanhoM").hide();
				$(".tamanhoG").hide();
				$(".tamanhoGG").hide();
				$(".tamanhoU").hide();
				$(".tamanho36").hide();
				$(".tamanho38").hide();
				$(".tamanho40").hide();
				$(".tamanho42").hide();
				$(".tamanho44").hide();
				if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanho46").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanho46.faixaPreco1").css("display", "flex");
							if (faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa2.checked == true) {
							$(".tamanho46.faixaPreco2").css("display", "flex");
							if (faixa1.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa3.checked == true) {
							$(".tamanho46.faixaPreco3").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa4.checked == true) {
							$(".tamanho46.faixaPreco4").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa5.checked == true) {
							$(".tamanho46.faixaPreco5").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
							}
						}
					}
				}
				if (amarelo.checked == true) {
					$(".tamanho46.amareloProduto").css("display", "flex");
				}
				if (azul.checked == true) {
					$(".tamanho46.azulProduto").css("display", "flex");
				}
				if (branco.checked == true) {
					$(".tamanho46.brancoProduto").css("display", "flex");
				}
				if (cinza.checked == true) {
					$(".tamanho46.cinzaProduto").css("display", "flex");
				}
				if (laranja.checked == true) {
					$(".tamanho46.laranjaProduto").css("display", "flex");
				}
				if (verde.checked == true) {
					$(".tamanho46.verdeProduto").css("display", "flex");
				}
				if (vermelho.checked == true) {
					$(".tamanho46.vermelhoProduto").css("display", "flex");
				}
				if (preto.checked == true) {
					$(".tamanho46.pretoProduto").css("display", "flex");
				}
				if (rosa.checked == true) {
					$(".tamanho46.rosaProduto").css("display", "flex");
				}
				if (vinho.checked == true) {
					$(".tamanho46.vinhoProduto").css("display", "flex");
				}
			}
		}
	})

	$(".filtrar-checkbox #vermelho").click(function () {
		if (vermelho.checked == true) {
			if (tamanhoP.checked == false && tamanhoM.checked == false && tamanhoG.checked == false && tamanhoGG.checked == false && tamanhoU.checked == false && tamanho36.checked == false && tamanho38.checked == false && tamanho40.checked == false && tamanho42.checked == false && tamanho44.checked == false && tamanho46.checked == false) {
				if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
					$(".vermelhoProduto").css("display", "flex");
				} else {
					if (faixa1.checked == true) {
						$(".faixaPreco1.vermelhoProduto").css("display", "flex");
					}
					if (faixa2.checked == true) {
						$(".faixaPreco2.vermelhoProduto").css("display", "flex");
					}
					if (faixa3.checked == true) {
						$(".faixaPreco3.vermelhoProduto").css("display", "flex");
					}
					if (faixa4.checked == true) {
						$(".faixaPreco4.vermelhoProduto").css("display", "flex");
					}
					if (faixa5.checked == true) {
						$(".faixaPreco5.vermelhoProduto").css("display", "flex");
					}
				}
			} else {
				if (tamanhoP.checked == true) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanhoP.vermelhoProduto").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanhoP.faixaPreco1.vermelhoProduto").css("display", "flex");
						}
						if (faixa2.checked == true) {
							$(".tamanhoP.faixaPreco2.vermelhoProduto").css("display", "flex");
						}
						if (faixa3.checked == true) {
							$(".tamanhoP.faixaPreco3.vermelhoProduto").css("display", "flex");
						}
						if (faixa4.checked == true) {
							$(".tamanhoP.faixaPreco4.vermelhoProduto").css("display", "flex");
						}
						if (faixa5.checked == true) {
							$(".tamanhoP.faixaPreco5.vermelhoProduto").css("display", "flex");
						}
					}
				}
				if (tamanhoM.checked == true) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanhoM.vermelhoProduto").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanhoM.faixaPreco1.vermelhoProduto").css("display", "flex");
						}
						if (faixa2.checked == true) {
							$(".tamanhoM.faixaPreco2.vermelhoProduto").css("display", "flex");
						}
						if (faixa3.checked == true) {
							$(".tamanhoM.faixaPreco3.vermelhoProduto").css("display", "flex");
						}
						if (faixa4.checked == true) {
							$(".tamanhoM.faixaPreco4.vermelhoProduto").css("display", "flex");
						}
						if (faixa5.checked == true) {
							$(".tamanhoM.faixaPreco5.vermelhoProduto").css("display", "flex");
						}
					}
				}
				if (tamanhoG.checked == true) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanhoG.vermelhoProduto").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanhoG.faixaPreco1.vermelhoProduto").css("display", "flex");
						}
						if (faixa2.checked == true) {
							$(".tamanhoG.faixaPreco2.vermelhoProduto").css("display", "flex");
						}
						if (faixa3.checked == true) {
							$(".tamanhoG.faixaPreco3.vermelhoProduto").css("display", "flex");
						}
						if (faixa4.checked == true) {
							$(".tamanhoG.faixaPreco4.vermelhoProduto").css("display", "flex");
						}
						if (faixa5.checked == true) {
							$(".tamanhoG.faixaPreco5.vermelhoProduto").css("display", "flex");
						}
					}
				}
				if (tamanhoGG.checked == true) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanhoGG.vermelhoProduto").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanhoGG.faixaPreco1.vermelhoProduto").css("display", "flex");
						}
						if (faixa2.checked == true) {
							$(".tamanhoGG.faixaPreco2.vermelhoProduto").css("display", "flex");
						}
						if (faixa3.checked == true) {
							$(".tamanhoGG.faixaPreco3.vermelhoProduto").css("display", "flex");
						}
						if (faixa4.checked == true) {
							$(".tamanhoGG.faixaPreco4.vermelhoProduto").css("display", "flex");
						}
						if (faixa5.checked == true) {
							$(".tamanhoGG.faixaPreco5.vermelhoProduto").css("display", "flex");
						}
					}
				}
				if (tamanhoU.checked == true) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanhoU.vermelhoProduto").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanhoU.faixaPreco1.vermelhoProduto").css("display", "flex");
						}
						if (faixa2.checked == true) {
							$(".tamanhoU.faixaPreco2.vermelhoProduto").css("display", "flex");
						}
						if (faixa3.checked == true) {
							$(".tamanhoU.faixaPreco3.vermelhoProduto").css("display", "flex");
						}
						if (faixa4.checked == true) {
							$(".tamanhoU.faixaPreco4.vermelhoProduto").css("display", "flex");
						}
						if (faixa5.checked == true) {
							$(".tamanhoU.faixaPreco5.vermelhoProduto").css("display", "flex");
						}
					}
				}
				if (tamanho36.checked == true) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanho36.vermelhoProduto").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanho36.faixaPreco1.vermelhoProduto").css("display", "flex");
						}
						if (faixa2.checked == true) {
							$(".tamanho36.faixaPreco2.vermelhoProduto").css("display", "flex");
						}
						if (faixa3.checked == true) {
							$(".tamanho36.faixaPreco3.vermelhoProduto").css("display", "flex");
						}
						if (faixa4.checked == true) {
							$(".tamanho36.faixaPreco4.vermelhoProduto").css("display", "flex");
						}
						if (faixa5.checked == true) {
							$(".tamanho36.faixaPreco5.vermelhoProduto").css("display", "flex");
						}
					}
				}
				if (tamanho38.checked == true) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanho38.vermelhoProduto").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanho38.faixaPreco1.vermelhoProduto").css("display", "flex");
						}
						if (faixa2.checked == true) {
							$(".tamanho38.faixaPreco2.vermelhoProduto").css("display", "flex");
						}
						if (faixa3.checked == true) {
							$(".tamanho38.faixaPreco3.vermelhoProduto").css("display", "flex");
						}
						if (faixa4.checked == true) {
							$(".tamanho38.faixaPreco4.vermelhoProduto").css("display", "flex");
						}
						if (faixa5.checked == true) {
							$(".tamanho38.faixaPreco5.vermelhoProduto").css("display", "flex");
						}
					}
				}
				if (tamanho40.checked == true) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanho40.vermelhoProduto").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanho40.faixaPreco1.vermelhoProduto").css("display", "flex");
						}
						if (faixa2.checked == true) {
							$(".tamanho40.faixaPreco2.vermelhoProduto").css("display", "flex");
						}
						if (faixa3.checked == true) {
							$(".tamanho40.faixaPreco3.vermelhoProduto").css("display", "flex");
						}
						if (faixa4.checked == true) {
							$(".tamanho40.faixaPreco4.vermelhoProduto").css("display", "flex");
						}
						if (faixa5.checked == true) {
							$(".tamanho40.faixaPreco5.vermelhoProduto").css("display", "flex");
						}
					}
				}
				if (tamanho42.checked == true) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanho42.vermelhoProduto").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanho42.faixaPreco1.vermelhoProduto").css("display", "flex");
						}
						if (faixa2.checked == true) {
							$(".tamanho42.faixaPreco2.vermelhoProduto").css("display", "flex");
						}
						if (faixa3.checked == true) {
							$(".tamanho42.faixaPreco3.vermelhoProduto").css("display", "flex");
						}
						if (faixa4.checked == true) {
							$(".tamanho42.faixaPreco4.vermelhoProduto").css("display", "flex");
						}
						if (faixa5.checked == true) {
							$(".tamanho42.faixaPreco5.vermelhoProduto").css("display", "flex");
						}
					}
				}
				if (tamanho44.checked == true) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanho44.vermelhoProduto").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanho44.faixaPreco1.vermelhoProduto").css("display", "flex");
						}
						if (faixa2.checked == true) {
							$(".tamanho44.faixaPreco2.vermelhoProduto").css("display", "flex");
						}
						if (faixa3.checked == true) {
							$(".tamanho44.faixaPreco3.vermelhoProduto").css("display", "flex");
						}
						if (faixa4.checked == true) {
							$(".tamanho44.faixaPreco4.vermelhoProduto").css("display", "flex");
						}
						if (faixa5.checked == true) {
							$(".tamanho44.faixaPreco5.vermelhoProduto").css("display", "flex");
						}
					}
				}
				if (tamanho46.checked == true) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanho46.vermelhoProduto").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanho46.faixaPreco1.vermelhoProduto").css("display", "flex");
						}
						if (faixa2.checked == true) {
							$(".tamanho46.faixaPreco2.vermelhoProduto").css("display", "flex");
						}
						if (faixa3.checked == true) {
							$(".tamanho46.faixaPreco3.vermelhoProduto").css("display", "flex");
						}
						if (faixa4.checked == true) {
							$(".tamanho46.faixaPreco4.vermelhoProduto").css("display", "flex");
						}
						if (faixa5.checked == true) {
							$(".tamanho46.faixaPreco5.vermelhoProduto").css("display", "flex");
						}
					}
				}
			}
			if (amarelo.checked == false) {
				$(".amareloProduto").hide();
			}
			if (azul.checked == false) {
				$(".azulProduto").hide();
			}
			if (branco.checked == false) {
				$(".brancoProduto").hide();
			}
			if (cinza.checked == false) {
				$(".cinzaProduto").hide();
			}
			if (laranja.checked == false) {
				$(".laranjaProduto").hide();
			}
			if (verde.checked == false) {
				$(".verdeProduto").hide();
			}
			if (preto.checked == false) {
				$(".pretoProduto").hide();
			}
			if (rosa.checked == false) {
				$(".rosaProduto").hide();
			}
			if (vinho.checked == false) {
				$(".vinhoProduto").hide();
			}
		} else {
			$(".vermelhoProduto").hide();
			if (tamanhoP.checked == false && tamanhoM.checked == false && tamanhoG.checked == false && tamanhoGG.checked == false && tamanhoU.checked == false && tamanho36.checked == false && tamanho38.checked == false && tamanho40.checked == false && tamanho42.checked == false && tamanho44.checked == false && tamanho46.checked == false) {
				if (faixa1.checked == true) {
					if (faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".faixaPreco2").hide();
						$(".faixaPreco3").hide();
						$(".faixaPreco4").hide();
						$(".faixaPreco5").hide();
					}
					if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
						$(".faixaPreco1").css("display", "flex");
					}
					if (amarelo.checked == true) {
						$(".faixaPreco1.amareloProduto").css("display", "flex");
					}
					if (azul.checked == true) {
						$(".faixaPreco1.azulProduto").css("display", "flex");
					}
					if (branco.checked == true) {
						$(".faixaPreco1.brancoProduto").css("display", "flex");
					}
					if (cinza.checked == true) {
						$(".faixaPreco1.cinzaProduto").css("display", "flex");
					}
					if (laranja.checked == true) {
						$(".faixaPreco1.laranjaProduto").css("display", "flex");
					}
					if (verde.checked == true) {
						$(".faixaPreco1.verdeProduto").css("display", "flex");
					}
					if (vermelho.checked == true) {
						$(".faixaPreco1.vermelhoProduto").css("display", "flex");
					}
					if (preto.checked == true) {
						$(".faixaPreco1.pretoProduto").css("display", "flex");
					}
					if (rosa.checked == true) {
						$(".faixaPreco1.rosaProduto").css("display", "flex");
					}
					if (vinho.checked == true) {
						$(".faixaPreco1.vinhoProduto").css("display", "flex");
					}
				}
				if (faixa2.checked == true) {
					if (faixa1.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".faixaPreco1").hide();
						$(".faixaPreco3").hide();
						$(".faixaPreco4").hide();
						$(".faixaPreco5").hide();
					}
					if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
						$(".faixaPreco2").css("display", "flex");
					}
					if (amarelo.checked == true) {
						$(".faixaPreco2.amareloProduto").css("display", "flex");
					}
					if (azul.checked == true) {
						$(".faixaPreco2.azulProduto").css("display", "flex");
					}
					if (branco.checked == true) {
						$(".faixaPreco2.brancoProduto").css("display", "flex");
					}
					if (cinza.checked == true) {
						$(".faixaPreco2.cinzaProduto").css("display", "flex");
					}
					if (laranja.checked == true) {
						$(".faixaPreco2.laranjaProduto").css("display", "flex");
					}
					if (verde.checked == true) {
						$(".faixaPreco2.verdeProduto").css("display", "flex");
					}
					if (vermelho.checked == true) {
						$(".faixaPreco2.vermelhoProduto").css("display", "flex");
					}
					if (preto.checked == true) {
						$(".faixaPreco2.pretoProduto").css("display", "flex");
					}
					if (rosa.checked == true) {
						$(".faixaPreco2.rosaProduto").css("display", "flex");
					}
					if (vinho.checked == true) {
						$(".faixaPreco2.vinhoProduto").css("display", "flex");
					}
				}
				if (faixa3.checked == true) {
					if (faixa1.checked == false && faixa2.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".faixaPreco1").hide();
						$(".faixaPreco2").hide();
						$(".faixaPreco4").hide();
						$(".faixaPreco5").hide();
					}
					if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
						$(".faixaPreco3").css("display", "flex");
					}
					if (amarelo.checked == true) {
						$(".faixaPreco3.amareloProduto").css("display", "flex");
					}
					if (azul.checked == true) {
						$(".faixaPreco3.azulProduto").css("display", "flex");
					}
					if (branco.checked == true) {
						$(".faixaPreco3.brancoProduto").css("display", "flex");
					}
					if (cinza.checked == true) {
						$(".faixaPreco3.cinzaProduto").css("display", "flex");
					}
					if (laranja.checked == true) {
						$(".faixaPreco3.laranjaProduto").css("display", "flex");
					}
					if (verde.checked == true) {
						$(".faixaPreco3.verdeProduto").css("display", "flex");
					}
					if (vermelho.checked == true) {
						$(".faixaPreco3.vermelhoProduto").css("display", "flex");
					}
					if (preto.checked == true) {
						$(".faixaPreco3.pretoProduto").css("display", "flex");
					}
					if (rosa.checked == true) {
						$(".faixaPreco3.rosaProduto").css("display", "flex");
					}
					if (vinho.checked == true) {
						$(".faixaPreco3.vinhoProduto").css("display", "flex");
					}
				}
				if (faixa4.checked == true) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa5.checked == false) {
						$(".faixaPreco1").hide();
						$(".faixaPreco2").hide();
						$(".faixaPreco3").hide();
						$(".faixaPreco5").hide();
					}
					if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
						$(".faixaPreco4").css("display", "flex");
					}
					if (amarelo.checked == true) {
						$(".faixaPreco4.amareloProduto").css("display", "flex");
					}
					if (azul.checked == true) {
						$(".faixaPreco4.azulProduto").css("display", "flex");
					}
					if (branco.checked == true) {
						$(".faixaPreco4.brancoProduto").css("display", "flex");
					}
					if (cinza.checked == true) {
						$(".faixaPreco4.cinzaProduto").css("display", "flex");
					}
					if (laranja.checked == true) {
						$(".faixaPreco4.laranjaProduto").css("display", "flex");
					}
					if (verde.checked == true) {
						$(".faixaPreco4.verdeProduto").css("display", "flex");
					}
					if (vermelho.checked == true) {
						$(".faixaPreco4.vermelhoProduto").css("display", "flex");
					}
					if (preto.checked == true) {
						$(".faixaPreco4.pretoProduto").css("display", "flex");
					}
					if (rosa.checked == true) {
						$(".faixaPreco4.rosaProduto").css("display", "flex");
					}
					if (vinho.checked == true) {
						$(".faixaPreco4.vinhoProduto").css("display", "flex");
					}
				}
				if (faixa5.checked == true) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false) {
						$(".faixaPreco1").hide();
						$(".faixaPreco2").hide();
						$(".faixaPreco3").hide();
						$(".faixaPreco4").hide();
					}
					if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
						$(".faixaPreco5").css("display", "flex");
					}
					if (amarelo.checked == true) {
						$(".faixaPreco5.amareloProduto").css("display", "flex");
					}
					if (azul.checked == true) {
						$(".faixaPreco5.azulProduto").css("display", "flex");
					}
					if (branco.checked == true) {
						$(".faixaPreco5.brancoProduto").css("display", "flex");
					}
					if (cinza.checked == true) {
						$(".faixaPreco5.cinzaProduto").css("display", "flex");
					}
					if (laranja.checked == true) {
						$(".faixaPreco5.laranjaProduto").css("display", "flex");
					}
					if (verde.checked == true) {
						$(".faixaPreco5.verdeProduto").css("display", "flex");
					}
					if (vermelho.checked == true) {
						$(".faixaPreco5.vermelhoProduto").css("display", "flex");
					}
					if (preto.checked == true) {
						$(".faixaPreco5.pretoProduto").css("display", "flex");
					}
					if (rosa.checked == true) {
						$(".faixaPreco5.rosaProduto").css("display", "flex");
					}
					if (vinho.checked == true) {
						$(".faixaPreco5.vinhoProduto").css("display", "flex");
					}
				}
			}
			if (tamanhoP.checked == true) {
				$(".tamanhoM").hide();
				$(".tamanhoG").hide();
				$(".tamanhoGG").hide();
				$(".tamanhoU").hide();
				$(".tamanho36").hide();
				$(".tamanho38").hide();
				$(".tamanho40").hide();
				$(".tamanho42").hide();
				$(".tamanho44").hide();
				$(".tamanho46").hide();
				if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanhoP").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanhoP.faixaPreco1").css("display", "flex");
							if (faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa2.checked == true) {
							$(".tamanhoP.faixaPreco2").css("display", "flex");
							if (faixa1.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa3.checked == true) {
							$(".tamanhoP.faixaPreco3").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa4.checked == true) {
							$(".tamanhoP.faixaPreco4").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa5.checked == true) {
							$(".tamanhoP.faixaPreco5").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
							}
						}
					}
				}
				if (amarelo.checked == true) {
					$(".tamanhoP.amareloProduto").css("display", "flex");
				}
				if (azul.checked == true) {
					$(".tamanhoP.azulProduto").css("display", "flex");
				}
				if (branco.checked == true) {
					$(".tamanhoP.brancoProduto").css("display", "flex");
				}
				if (cinza.checked == true) {
					$(".tamanhoP.cinzaProduto").css("display", "flex");
				}
				if (laranja.checked == true) {
					$(".tamanhoP.laranjaProduto").css("display", "flex");
				}
				if (verde.checked == true) {
					$(".tamanhoP.verdeProduto").css("display", "flex");
				}
				if (vermelho.checked == true) {
					$(".tamanhoP.vermelhoProduto").css("display", "flex");
				}
				if (preto.checked == true) {
					$(".tamanhoP.pretoProduto").css("display", "flex");
				}
				if (rosa.checked == true) {
					$(".tamanhoP.rosaProduto").css("display", "flex");
				}
				if (vinho.checked == true) {
					$(".tamanhoP.vinhoProduto").css("display", "flex");
				}
			}
			if (tamanhoM.checked == true) {
				$(".tamanhoP").hide();
				$(".tamanhoG").hide();
				$(".tamanhoGG").hide();
				$(".tamanhoU").hide();
				$(".tamanho36").hide();
				$(".tamanho38").hide();
				$(".tamanho40").hide();
				$(".tamanho42").hide();
				$(".tamanho44").hide();
				$(".tamanho46").hide();
				if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanhoM").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanhoM.faixaPreco1").css("display", "flex");
							if (faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa2.checked == true) {
							$(".tamanhoM.faixaPreco2").css("display", "flex");
							if (faixa1.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa3.checked == true) {
							$(".tamanhoM.faixaPreco3").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa4.checked == true) {
							$(".tamanhoM.faixaPreco4").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa5.checked == true) {
							$(".tamanhoM.faixaPreco5").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
							}
						}
					}
				}
				if (amarelo.checked == true) {
					$(".tamanhoM.amareloProduto").css("display", "flex");
				}
				if (azul.checked == true) {
					$(".tamanhoM.azulProduto").css("display", "flex");
				}
				if (branco.checked == true) {
					$(".tamanhoM.brancoProduto").css("display", "flex");
				}
				if (cinza.checked == true) {
					$(".tamanhoM.cinzaProduto").css("display", "flex");
				}
				if (laranja.checked == true) {
					$(".tamanhoM.laranjaProduto").css("display", "flex");
				}
				if (verde.checked == true) {
					$(".tamanhoM.verdeProduto").css("display", "flex");
				}
				if (vermelho.checked == true) {
					$(".tamanhoM.vermelhoProduto").css("display", "flex");
				}
				if (preto.checked == true) {
					$(".tamanhoM.pretoProduto").css("display", "flex");
				}
				if (rosa.checked == true) {
					$(".tamanhoM.rosaProduto").css("display", "flex");
				}
				if (vinho.checked == true) {
					$(".tamanhoM.vinhoProduto").css("display", "flex");
				}
			}
			if (tamanhoG.checked == true) {
				$(".tamanhoP").hide();
				$(".tamanhoM").hide();
				$(".tamanhoGG").hide();
				$(".tamanhoU").hide();
				$(".tamanho36").hide();
				$(".tamanho38").hide();
				$(".tamanho40").hide();
				$(".tamanho42").hide();
				$(".tamanho44").hide();
				$(".tamanho46").hide();
				if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanhoG").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanhoG.faixaPreco1").css("display", "flex");
							if (faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa2.checked == true) {
							$(".tamanhoG.faixaPreco2").css("display", "flex");
							if (faixa1.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa3.checked == true) {
							$(".tamanhoG.faixaPreco3").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa4.checked == true) {
							$(".tamanhoG.faixaPreco4").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa5.checked == true) {
							$(".tamanhoG.faixaPreco5").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
							}
						}
					}
				}
				if (amarelo.checked == true) {
					$(".tamanhoG.amareloProduto").css("display", "flex");
				}
				if (azul.checked == true) {
					$(".tamanhoG.azulProduto").css("display", "flex");
				}
				if (branco.checked == true) {
					$(".tamanhoG.brancoProduto").css("display", "flex");
				}
				if (cinza.checked == true) {
					$(".tamanhoG.cinzaProduto").css("display", "flex");
				}
				if (laranja.checked == true) {
					$(".tamanhoG.laranjaProduto").css("display", "flex");
				}
				if (verde.checked == true) {
					$(".tamanhoG.verdeProduto").css("display", "flex");
				}
				if (vermelho.checked == true) {
					$(".tamanhoG.vermelhoProduto").css("display", "flex");
				}
				if (preto.checked == true) {
					$(".tamanhoG.pretoProduto").css("display", "flex");
				}
				if (rosa.checked == true) {
					$(".tamanhoG.rosaProduto").css("display", "flex");
				}
				if (vinho.checked == true) {
					$(".tamanhoG.vinhoProduto").css("display", "flex");
				}
			}
			if (tamanhoGG.checked == true) {
				$(".tamanhoP").hide();
				$(".tamanhoM").hide();
				$(".tamanhoG").hide();
				$(".tamanhoU").hide();
				$(".tamanho36").hide();
				$(".tamanho38").hide();
				$(".tamanho40").hide();
				$(".tamanho42").hide();
				$(".tamanho44").hide();
				$(".tamanho46").hide();
				if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanhoGG").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanhoGG.faixaPreco1").css("display", "flex");
							if (faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa2.checked == true) {
							$(".tamanhoGG.faixaPreco2").css("display", "flex");
							if (faixa1.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa3.checked == true) {
							$(".tamanhoGG.faixaPreco3").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa4.checked == true) {
							$(".tamanhoGG.faixaPreco4").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa5.checked == true) {
							$(".tamanhoGG.faixaPreco5").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
							}
						}
					}
				}
				if (amarelo.checked == true) {
					$(".tamanhoGG.amareloProduto").css("display", "flex");
				}
				if (azul.checked == true) {
					$(".tamanhoGG.azulProduto").css("display", "flex");
				}
				if (branco.checked == true) {
					$(".tamanhoGG.brancoProduto").css("display", "flex");
				}
				if (cinza.checked == true) {
					$(".tamanhoGG.cinzaProduto").css("display", "flex");
				}
				if (laranja.checked == true) {
					$(".tamanhoGG.laranjaProduto").css("display", "flex");
				}
				if (verde.checked == true) {
					$(".tamanhoGG.verdeProduto").css("display", "flex");
				}
				if (vermelho.checked == true) {
					$(".tamanhoGG.vermelhoProduto").css("display", "flex");
				}
				if (preto.checked == true) {
					$(".tamanhoGG.pretoProduto").css("display", "flex");
				}
				if (rosa.checked == true) {
					$(".tamanhoGG.rosaProduto").css("display", "flex");
				}
				if (vinho.checked == true) {
					$(".tamanhoGG.vinhoProduto").css("display", "flex");
				}
			}
			if (tamanhoU.checked == true) {
				$(".tamanhoP").hide();
				$(".tamanhoM").hide();
				$(".tamanhoG").hide();
				$(".tamanhoGG").hide();
				$(".tamanho36").hide();
				$(".tamanho38").hide();
				$(".tamanho40").hide();
				$(".tamanho42").hide();
				$(".tamanho44").hide();
				$(".tamanho46").hide();
				if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanhoU").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanhoU.faixaPreco1").css("display", "flex");
							if (faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa2.checked == true) {
							$(".tamanhoU.faixaPreco2").css("display", "flex");
							if (faixa1.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa3.checked == true) {
							$(".tamanhoU.faixaPreco3").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa4.checked == true) {
							$(".tamanhoU.faixaPreco4").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa5.checked == true) {
							$(".tamanhoU.faixaPreco5").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
							}
						}
					}
				}
				if (amarelo.checked == true) {
					$(".tamanhoU.amareloProduto").css("display", "flex");
				}
				if (azul.checked == true) {
					$(".tamanhoU.azulProduto").css("display", "flex");
				}
				if (branco.checked == true) {
					$(".tamanhoU.brancoProduto").css("display", "flex");
				}
				if (cinza.checked == true) {
					$(".tamanhoU.cinzaProduto").css("display", "flex");
				}
				if (laranja.checked == true) {
					$(".tamanhoU.laranjaProduto").css("display", "flex");
				}
				if (verde.checked == true) {
					$(".tamanhoU.verdeProduto").css("display", "flex");
				}
				if (vermelho.checked == true) {
					$(".tamanhoU.vermelhoProduto").css("display", "flex");
				}
				if (preto.checked == true) {
					$(".tamanhoU.pretoProduto").css("display", "flex");
				}
				if (rosa.checked == true) {
					$(".tamanhoU.rosaProduto").css("display", "flex");
				}
				if (vinho.checked == true) {
					$(".tamanhoU.vinhoProduto").css("display", "flex");
				}
			}
			if (tamanho36.checked == true) {
				$(".tamanhoP").hide();
				$(".tamanhoM").hide();
				$(".tamanhoG").hide();
				$(".tamanhoGG").hide();
				$(".tamanhoU").hide();
				$(".tamanho38").hide();
				$(".tamanho40").hide();
				$(".tamanho42").hide();
				$(".tamanho44").hide();
				$(".tamanho46").hide();
				if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanho36").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanho36.faixaPreco1").css("display", "flex");
							if (faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa2.checked == true) {
							$(".tamanho36.faixaPreco2").css("display", "flex");
							if (faixa1.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa3.checked == true) {
							$(".tamanho36.faixaPreco3").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa4.checked == true) {
							$(".tamanho36.faixaPreco4").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa5.checked == true) {
							$(".tamanho36.faixaPreco5").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
							}
						}
					}
				}
				if (amarelo.checked == true) {
					$(".tamanho36.amareloProduto").css("display", "flex");
				}
				if (azul.checked == true) {
					$(".tamanho36.azulProduto").css("display", "flex");
				}
				if (branco.checked == true) {
					$(".tamanho36.brancoProduto").css("display", "flex");
				}
				if (cinza.checked == true) {
					$(".tamanho36.cinzaProduto").css("display", "flex");
				}
				if (laranja.checked == true) {
					$(".tamanho36.laranjaProduto").css("display", "flex");
				}
				if (verde.checked == true) {
					$(".tamanho36.verdeProduto").css("display", "flex");
				}
				if (vermelho.checked == true) {
					$(".tamanho36.vermelhoProduto").css("display", "flex");
				}
				if (preto.checked == true) {
					$(".tamanho36.pretoProduto").css("display", "flex");
				}
				if (rosa.checked == true) {
					$(".tamanho36.rosaProduto").css("display", "flex");
				}
				if (vinho.checked == true) {
					$(".tamanho36.vinhoProduto").css("display", "flex");
				}
			}
			if (tamanho38.checked == true) {
				$(".tamanhoP").hide();
				$(".tamanhoM").hide();
				$(".tamanhoG").hide();
				$(".tamanhoGG").hide();
				$(".tamanhoU").hide();
				$(".tamanho36").hide();
				$(".tamanho40").hide();
				$(".tamanho42").hide();
				$(".tamanho44").hide();
				$(".tamanho46").hide();
				if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanho38").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanho38.faixaPreco1").css("display", "flex");
							if (faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa2.checked == true) {
							$(".tamanho38.faixaPreco2").css("display", "flex");
							if (faixa1.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa3.checked == true) {
							$(".tamanho38.faixaPreco3").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa4.checked == true) {
							$(".tamanho38.faixaPreco4").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa5.checked == true) {
							$(".tamanho38.faixaPreco5").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
							}
						}
					}
				}
				if (amarelo.checked == true) {
					$(".tamanho38.amareloProduto").css("display", "flex");
				}
				if (azul.checked == true) {
					$(".tamanho38.azulProduto").css("display", "flex");
				}
				if (branco.checked == true) {
					$(".tamanho38.brancoProduto").css("display", "flex");
				}
				if (cinza.checked == true) {
					$(".tamanho38.cinzaProduto").css("display", "flex");
				}
				if (laranja.checked == true) {
					$(".tamanho38.laranjaProduto").css("display", "flex");
				}
				if (verde.checked == true) {
					$(".tamanho38.verdeProduto").css("display", "flex");
				}
				if (vermelho.checked == true) {
					$(".tamanho38.vermelhoProduto").css("display", "flex");
				}
				if (preto.checked == true) {
					$(".tamanho38.pretoProduto").css("display", "flex");
				}
				if (rosa.checked == true) {
					$(".tamanho38.rosaProduto").css("display", "flex");
				}
				if (vinho.checked == true) {
					$(".tamanho38.vinhoProduto").css("display", "flex");
				}
			}
			if (tamanho40.checked == true) {
				$(".tamanhoP").hide();
				$(".tamanhoM").hide();
				$(".tamanhoG").hide();
				$(".tamanhoGG").hide();
				$(".tamanhoU").hide();
				$(".tamanho36").hide();
				$(".tamanho38").hide();
				$(".tamanho42").hide();
				$(".tamanho44").hide();
				$(".tamanho46").hide();
				if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanho40").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanho40.faixaPreco1").css("display", "flex");
							if (faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa2.checked == true) {
							$(".tamanho40.faixaPreco2").css("display", "flex");
							if (faixa1.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa3.checked == true) {
							$(".tamanho40.faixaPreco3").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa4.checked == true) {
							$(".tamanho40.faixaPreco4").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa5.checked == true) {
							$(".tamanho40.faixaPreco5").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
							}
						}
					}
				}
				if (amarelo.checked == true) {
					$(".tamanho40.amareloProduto").css("display", "flex");
				}
				if (azul.checked == true) {
					$(".tamanho40.azulProduto").css("display", "flex");
				}
				if (branco.checked == true) {
					$(".tamanho40.brancoProduto").css("display", "flex");
				}
				if (cinza.checked == true) {
					$(".tamanho40.cinzaProduto").css("display", "flex");
				}
				if (laranja.checked == true) {
					$(".tamanho40.laranjaProduto").css("display", "flex");
				}
				if (verde.checked == true) {
					$(".tamanho40.verdeProduto").css("display", "flex");
				}
				if (vermelho.checked == true) {
					$(".tamanho40.vermelhoProduto").css("display", "flex");
				}
				if (preto.checked == true) {
					$(".tamanho40.pretoProduto").css("display", "flex");
				}
				if (rosa.checked == true) {
					$(".tamanho40.rosaProduto").css("display", "flex");
				}
				if (vinho.checked == true) {
					$(".tamanho40.vinhoProduto").css("display", "flex");
				}
			}
			if (tamanho42.checked == true) {
				$(".tamanhoP").hide();
				$(".tamanhoM").hide();
				$(".tamanhoG").hide();
				$(".tamanhoGG").hide();
				$(".tamanhoU").hide();
				$(".tamanho36").hide();
				$(".tamanho38").hide();
				$(".tamanho40").hide();
				$(".tamanho44").hide();
				$(".tamanho46").hide();
				if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanho42").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanho42.faixaPreco1").css("display", "flex");
							if (faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa2.checked == true) {
							$(".tamanho42.faixaPreco2").css("display", "flex");
							if (faixa1.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa3.checked == true) {
							$(".tamanho42.faixaPreco3").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa4.checked == true) {
							$(".tamanho42.faixaPreco4").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa5.checked == true) {
							$(".tamanho42.faixaPreco5").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
							}
						}
					}
				}
				if (amarelo.checked == true) {
					$(".tamanho42.amareloProduto").css("display", "flex");
				}
				if (azul.checked == true) {
					$(".tamanho42.azulProduto").css("display", "flex");
				}
				if (branco.checked == true) {
					$(".tamanho42.brancoProduto").css("display", "flex");
				}
				if (cinza.checked == true) {
					$(".tamanho42.cinzaProduto").css("display", "flex");
				}
				if (laranja.checked == true) {
					$(".tamanho42.laranjaProduto").css("display", "flex");
				}
				if (verde.checked == true) {
					$(".tamanho42.verdeProduto").css("display", "flex");
				}
				if (vermelho.checked == true) {
					$(".tamanho42.vermelhoProduto").css("display", "flex");
				}
				if (preto.checked == true) {
					$(".tamanho42.pretoProduto").css("display", "flex");
				}
				if (rosa.checked == true) {
					$(".tamanho42.rosaProduto").css("display", "flex");
				}
				if (vinho.checked == true) {
					$(".tamanho42.vinhoProduto").css("display", "flex");
				}
			}
			if (tamanho44.checked == true) {
				$(".tamanhoP").hide();
				$(".tamanhoM").hide();
				$(".tamanhoG").hide();
				$(".tamanhoGG").hide();
				$(".tamanhoU").hide();
				$(".tamanho36").hide();
				$(".tamanho38").hide();
				$(".tamanho40").hide();
				$(".tamanho42").hide();
				$(".tamanho46").hide();
				if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanho44").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanho44.faixaPreco1").css("display", "flex");
							if (faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa2.checked == true) {
							$(".tamanho44.faixaPreco2").css("display", "flex");
							if (faixa1.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa3.checked == true) {
							$(".tamanho44.faixaPreco3").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa4.checked == true) {
							$(".tamanho44.faixaPreco4").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa5.checked == true) {
							$(".tamanho44.faixaPreco5").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
							}
						}
					}
				}
				if (amarelo.checked == true) {
					$(".tamanho44.amareloProduto").css("display", "flex");
				}
				if (azul.checked == true) {
					$(".tamanho44.azulProduto").css("display", "flex");
				}
				if (branco.checked == true) {
					$(".tamanho44.brancoProduto").css("display", "flex");
				}
				if (cinza.checked == true) {
					$(".tamanho44.cinzaProduto").css("display", "flex");
				}
				if (laranja.checked == true) {
					$(".tamanho44.laranjaProduto").css("display", "flex");
				}
				if (verde.checked == true) {
					$(".tamanho44.verdeProduto").css("display", "flex");
				}
				if (vermelho.checked == true) {
					$(".tamanho44.vermelhoProduto").css("display", "flex");
				}
				if (preto.checked == true) {
					$(".tamanho44.pretoProduto").css("display", "flex");
				}
				if (rosa.checked == true) {
					$(".tamanho44.rosaProduto").css("display", "flex");
				}
				if (vinho.checked == true) {
					$(".tamanho44.vinhoProduto").css("display", "flex");
				}
			}
			if (tamanho46.checked == true) {
				$(".tamanhoP").hide();
				$(".tamanhoM").hide();
				$(".tamanhoG").hide();
				$(".tamanhoGG").hide();
				$(".tamanhoU").hide();
				$(".tamanho36").hide();
				$(".tamanho38").hide();
				$(".tamanho40").hide();
				$(".tamanho42").hide();
				$(".tamanho44").hide();
				if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanho46").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanho46.faixaPreco1").css("display", "flex");
							if (faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa2.checked == true) {
							$(".tamanho46.faixaPreco2").css("display", "flex");
							if (faixa1.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa3.checked == true) {
							$(".tamanho46.faixaPreco3").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa4.checked == true) {
							$(".tamanho46.faixaPreco4").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa5.checked == true) {
							$(".tamanho46.faixaPreco5").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
							}
						}
					}
				}
				if (amarelo.checked == true) {
					$(".tamanho46.amareloProduto").css("display", "flex");
				}
				if (azul.checked == true) {
					$(".tamanho46.azulProduto").css("display", "flex");
				}
				if (branco.checked == true) {
					$(".tamanho46.brancoProduto").css("display", "flex");
				}
				if (cinza.checked == true) {
					$(".tamanho46.cinzaProduto").css("display", "flex");
				}
				if (laranja.checked == true) {
					$(".tamanho46.laranjaProduto").css("display", "flex");
				}
				if (verde.checked == true) {
					$(".tamanho46.verdeProduto").css("display", "flex");
				}
				if (vermelho.checked == true) {
					$(".tamanho46.vermelhoProduto").css("display", "flex");
				}
				if (preto.checked == true) {
					$(".tamanho46.pretoProduto").css("display", "flex");
				}
				if (rosa.checked == true) {
					$(".tamanho46.rosaProduto").css("display", "flex");
				}
				if (vinho.checked == true) {
					$(".tamanho46.vinhoProduto").css("display", "flex");
				}
			}
		}
	})

	$(".filtrar-checkbox #preto").click(function () {
		if (preto.checked == true) {
			if (tamanhoP.checked == false && tamanhoM.checked == false && tamanhoG.checked == false && tamanhoGG.checked == false && tamanhoU.checked == false && tamanho36.checked == false && tamanho38.checked == false && tamanho40.checked == false && tamanho42.checked == false && tamanho44.checked == false && tamanho46.checked == false) {
				if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
					$(".pretoProduto").css("display", "flex");
				} else {
					if (faixa1.checked == true) {
						$(".faixaPreco1.pretoProduto").css("display", "flex");
					}
					if (faixa2.checked == true) {
						$(".faixaPreco2.pretoProduto").css("display", "flex");
					}
					if (faixa3.checked == true) {
						$(".faixaPreco3.pretoProduto").css("display", "flex");
					}
					if (faixa4.checked == true) {
						$(".faixaPreco4.pretoProduto").css("display", "flex");
					}
					if (faixa5.checked == true) {
						$(".faixaPreco5.pretoProduto").css("display", "flex");
					}
				}
			} else {
				if (tamanhoP.checked == true) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanhoP.pretoProduto").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanhoP.faixaPreco1.pretoProduto").css("display", "flex");
						}
						if (faixa2.checked == true) {
							$(".tamanhoP.faixaPreco2.pretoProduto").css("display", "flex");
						}
						if (faixa3.checked == true) {
							$(".tamanhoP.faixaPreco3.pretoProduto").css("display", "flex");
						}
						if (faixa4.checked == true) {
							$(".tamanhoP.faixaPreco4.pretoProduto").css("display", "flex");
						}
						if (faixa5.checked == true) {
							$(".tamanhoP.faixaPreco5.pretoProduto").css("display", "flex");
						}
					}
				}
				if (tamanhoM.checked == true) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanhoM.pretoProduto").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanhoM.faixaPreco1.pretoProduto").css("display", "flex");
						}
						if (faixa2.checked == true) {
							$(".tamanhoM.faixaPreco2.pretoProduto").css("display", "flex");
						}
						if (faixa3.checked == true) {
							$(".tamanhoM.faixaPreco3.pretoProduto").css("display", "flex");
						}
						if (faixa4.checked == true) {
							$(".tamanhoM.faixaPreco4.pretoProduto").css("display", "flex");
						}
						if (faixa5.checked == true) {
							$(".tamanhoM.faixaPreco5.pretoProduto").css("display", "flex");
						}
					}
				}
				if (tamanhoG.checked == true) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanhoG.pretoProduto").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanhoG.faixaPreco1.pretoProduto").css("display", "flex");
						}
						if (faixa2.checked == true) {
							$(".tamanhoG.faixaPreco2.pretoProduto").css("display", "flex");
						}
						if (faixa3.checked == true) {
							$(".tamanhoG.faixaPreco3.pretoProduto").css("display", "flex");
						}
						if (faixa4.checked == true) {
							$(".tamanhoG.faixaPreco4.pretoProduto").css("display", "flex");
						}
						if (faixa5.checked == true) {
							$(".tamanhoG.faixaPreco5.pretoProduto").css("display", "flex");
						}
					}
				}
				if (tamanhoGG.checked == true) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanhoGG.pretoProduto").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanhoGG.faixaPreco1.pretoProduto").css("display", "flex");
						}
						if (faixa2.checked == true) {
							$(".tamanhoGG.faixaPreco2.pretoProduto").css("display", "flex");
						}
						if (faixa3.checked == true) {
							$(".tamanhoGG.faixaPreco3.pretoProduto").css("display", "flex");
						}
						if (faixa4.checked == true) {
							$(".tamanhoGG.faixaPreco4.pretoProduto").css("display", "flex");
						}
						if (faixa5.checked == true) {
							$(".tamanhoGG.faixaPreco5.pretoProduto").css("display", "flex");
						}
					}
				}
				if (tamanhoU.checked == true) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanhoU.pretoProduto").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanhoU.faixaPreco1.pretoProduto").css("display", "flex");
						}
						if (faixa2.checked == true) {
							$(".tamanhoU.faixaPreco2.pretoProduto").css("display", "flex");
						}
						if (faixa3.checked == true) {
							$(".tamanhoU.faixaPreco3.pretoProduto").css("display", "flex");
						}
						if (faixa4.checked == true) {
							$(".tamanhoU.faixaPreco4.pretoProduto").css("display", "flex");
						}
						if (faixa5.checked == true) {
							$(".tamanhoU.faixaPreco5.pretoProduto").css("display", "flex");
						}
					}
				}
				if (tamanho36.checked == true) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanho36.pretoProduto").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanho36.faixaPreco1.pretoProduto").css("display", "flex");
						}
						if (faixa2.checked == true) {
							$(".tamanho36.faixaPreco2.pretoProduto").css("display", "flex");
						}
						if (faixa3.checked == true) {
							$(".tamanho36.faixaPreco3.pretoProduto").css("display", "flex");
						}
						if (faixa4.checked == true) {
							$(".tamanho36.faixaPreco4.pretoProduto").css("display", "flex");
						}
						if (faixa5.checked == true) {
							$(".tamanho36.faixaPreco5.pretoProduto").css("display", "flex");
						}
					}
				}
				if (tamanho38.checked == true) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanho38.pretoProduto").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanho38.faixaPreco1.pretoProduto").css("display", "flex");
						}
						if (faixa2.checked == true) {
							$(".tamanho38.faixaPreco2.pretoProduto").css("display", "flex");
						}
						if (faixa3.checked == true) {
							$(".tamanho38.faixaPreco3.pretoProduto").css("display", "flex");
						}
						if (faixa4.checked == true) {
							$(".tamanho38.faixaPreco4.pretoProduto").css("display", "flex");
						}
						if (faixa5.checked == true) {
							$(".tamanho38.faixaPreco5.pretoProduto").css("display", "flex");
						}
					}
				}
				if (tamanho40.checked == true) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanho40.pretoProduto").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanho40.faixaPreco1.pretoProduto").css("display", "flex");
						}
						if (faixa2.checked == true) {
							$(".tamanho40.faixaPreco2.pretoProduto").css("display", "flex");
						}
						if (faixa3.checked == true) {
							$(".tamanho40.faixaPreco3.pretoProduto").css("display", "flex");
						}
						if (faixa4.checked == true) {
							$(".tamanho40.faixaPreco4.pretoProduto").css("display", "flex");
						}
						if (faixa5.checked == true) {
							$(".tamanho40.faixaPreco5.pretoProduto").css("display", "flex");
						}
					}
				}
				if (tamanho42.checked == true) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanho42.pretoProduto").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanho42.faixaPreco1.pretoProduto").css("display", "flex");
						}
						if (faixa2.checked == true) {
							$(".tamanho42.faixaPreco2.pretoProduto").css("display", "flex");
						}
						if (faixa3.checked == true) {
							$(".tamanho42.faixaPreco3.pretoProduto").css("display", "flex");
						}
						if (faixa4.checked == true) {
							$(".tamanho42.faixaPreco4.pretoProduto").css("display", "flex");
						}
						if (faixa5.checked == true) {
							$(".tamanho42.faixaPreco5.pretoProduto").css("display", "flex");
						}
					}
				}
				if (tamanho44.checked == true) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanho44.pretoProduto").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanho44.faixaPreco1.pretoProduto").css("display", "flex");
						}
						if (faixa2.checked == true) {
							$(".tamanho44.faixaPreco2.pretoProduto").css("display", "flex");
						}
						if (faixa3.checked == true) {
							$(".tamanho44.faixaPreco3.pretoProduto").css("display", "flex");
						}
						if (faixa4.checked == true) {
							$(".tamanho44.faixaPreco4.pretoProduto").css("display", "flex");
						}
						if (faixa5.checked == true) {
							$(".tamanho44.faixaPreco5.pretoProduto").css("display", "flex");
						}
					}
				}
				if (tamanho46.checked == true) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanho46.pretoProduto").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanho46.faixaPreco1.pretoProduto").css("display", "flex");
						}
						if (faixa2.checked == true) {
							$(".tamanho46.faixaPreco2.pretoProduto").css("display", "flex");
						}
						if (faixa3.checked == true) {
							$(".tamanho46.faixaPreco3.pretoProduto").css("display", "flex");
						}
						if (faixa4.checked == true) {
							$(".tamanho46.faixaPreco4.pretoProduto").css("display", "flex");
						}
						if (faixa5.checked == true) {
							$(".tamanho46.faixaPreco5.pretoProduto").css("display", "flex");
						}
					}
				}
			}
			if (amarelo.checked == false) {
				$(".amareloProduto").hide();
			}
			if (azul.checked == false) {
				$(".azulProduto").hide();
			}
			if (branco.checked == false) {
				$(".brancoProduto").hide();
			}
			if (cinza.checked == false) {
				$(".cinzaProduto").hide();
			}
			if (laranja.checked == false) {
				$(".laranjaProduto").hide();
			}
			if (verde.checked == false) {
				$(".verdeProduto").hide();
			}
			if (vermelho.checked == false) {
				$(".vermelhoProduto").hide();
			}
			if (rosa.checked == false) {
				$(".rosaProduto").hide();
			}
			if (vinho.checked == false) {
				$(".vinhoProduto").hide();
			}
		} else {
			$(".pretoProduto").hide();
			if (tamanhoP.checked == false && tamanhoM.checked == false && tamanhoG.checked == false && tamanhoGG.checked == false && tamanhoU.checked == false && tamanho36.checked == false && tamanho38.checked == false && tamanho40.checked == false && tamanho42.checked == false && tamanho44.checked == false && tamanho46.checked == false) {
				if (faixa1.checked == true) {
					if (faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".faixaPreco2").hide();
						$(".faixaPreco3").hide();
						$(".faixaPreco4").hide();
						$(".faixaPreco5").hide();
					}
					if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
						$(".faixaPreco1").css("display", "flex");
					}
					if (amarelo.checked == true) {
						$(".faixaPreco1.amareloProduto").css("display", "flex");
					}
					if (azul.checked == true) {
						$(".faixaPreco1.azulProduto").css("display", "flex");
					}
					if (branco.checked == true) {
						$(".faixaPreco1.brancoProduto").css("display", "flex");
					}
					if (cinza.checked == true) {
						$(".faixaPreco1.cinzaProduto").css("display", "flex");
					}
					if (laranja.checked == true) {
						$(".faixaPreco1.laranjaProduto").css("display", "flex");
					}
					if (verde.checked == true) {
						$(".faixaPreco1.verdeProduto").css("display", "flex");
					}
					if (vermelho.checked == true) {
						$(".faixaPreco1.vermelhoProduto").css("display", "flex");
					}
					if (preto.checked == true) {
						$(".faixaPreco1.pretoProduto").css("display", "flex");
					}
					if (rosa.checked == true) {
						$(".faixaPreco1.rosaProduto").css("display", "flex");
					}
					if (vinho.checked == true) {
						$(".faixaPreco1.vinhoProduto").css("display", "flex");
					}
				}
				if (faixa2.checked == true) {
					if (faixa1.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".faixaPreco1").hide();
						$(".faixaPreco3").hide();
						$(".faixaPreco4").hide();
						$(".faixaPreco5").hide();
					}
					if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
						$(".faixaPreco2").css("display", "flex");
					}
					if (amarelo.checked == true) {
						$(".faixaPreco2.amareloProduto").css("display", "flex");
					}
					if (azul.checked == true) {
						$(".faixaPreco2.azulProduto").css("display", "flex");
					}
					if (branco.checked == true) {
						$(".faixaPreco2.brancoProduto").css("display", "flex");
					}
					if (cinza.checked == true) {
						$(".faixaPreco2.cinzaProduto").css("display", "flex");
					}
					if (laranja.checked == true) {
						$(".faixaPreco2.laranjaProduto").css("display", "flex");
					}
					if (verde.checked == true) {
						$(".faixaPreco2.verdeProduto").css("display", "flex");
					}
					if (vermelho.checked == true) {
						$(".faixaPreco2.vermelhoProduto").css("display", "flex");
					}
					if (preto.checked == true) {
						$(".faixaPreco2.pretoProduto").css("display", "flex");
					}
					if (rosa.checked == true) {
						$(".faixaPreco2.rosaProduto").css("display", "flex");
					}
					if (vinho.checked == true) {
						$(".faixaPreco2.vinhoProduto").css("display", "flex");
					}
				}
				if (faixa3.checked == true) {
					if (faixa1.checked == false && faixa2.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".faixaPreco1").hide();
						$(".faixaPreco2").hide();
						$(".faixaPreco4").hide();
						$(".faixaPreco5").hide();
					}
					if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
						$(".faixaPreco3").css("display", "flex");
					}
					if (amarelo.checked == true) {
						$(".faixaPreco3.amareloProduto").css("display", "flex");
					}
					if (azul.checked == true) {
						$(".faixaPreco3.azulProduto").css("display", "flex");
					}
					if (branco.checked == true) {
						$(".faixaPreco3.brancoProduto").css("display", "flex");
					}
					if (cinza.checked == true) {
						$(".faixaPreco3.cinzaProduto").css("display", "flex");
					}
					if (laranja.checked == true) {
						$(".faixaPreco3.laranjaProduto").css("display", "flex");
					}
					if (verde.checked == true) {
						$(".faixaPreco3.verdeProduto").css("display", "flex");
					}
					if (vermelho.checked == true) {
						$(".faixaPreco3.vermelhoProduto").css("display", "flex");
					}
					if (preto.checked == true) {
						$(".faixaPreco3.pretoProduto").css("display", "flex");
					}
					if (rosa.checked == true) {
						$(".faixaPreco3.rosaProduto").css("display", "flex");
					}
					if (vinho.checked == true) {
						$(".faixaPreco3.vinhoProduto").css("display", "flex");
					}
				}
				if (faixa4.checked == true) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa5.checked == false) {
						$(".faixaPreco1").hide();
						$(".faixaPreco2").hide();
						$(".faixaPreco3").hide();
						$(".faixaPreco5").hide();
					}
					if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
						$(".faixaPreco4").css("display", "flex");
					}
					if (amarelo.checked == true) {
						$(".faixaPreco4.amareloProduto").css("display", "flex");
					}
					if (azul.checked == true) {
						$(".faixaPreco4.azulProduto").css("display", "flex");
					}
					if (branco.checked == true) {
						$(".faixaPreco4.brancoProduto").css("display", "flex");
					}
					if (cinza.checked == true) {
						$(".faixaPreco4.cinzaProduto").css("display", "flex");
					}
					if (laranja.checked == true) {
						$(".faixaPreco4.laranjaProduto").css("display", "flex");
					}
					if (verde.checked == true) {
						$(".faixaPreco4.verdeProduto").css("display", "flex");
					}
					if (vermelho.checked == true) {
						$(".faixaPreco4.vermelhoProduto").css("display", "flex");
					}
					if (preto.checked == true) {
						$(".faixaPreco4.pretoProduto").css("display", "flex");
					}
					if (rosa.checked == true) {
						$(".faixaPreco4.rosaProduto").css("display", "flex");
					}
					if (vinho.checked == true) {
						$(".faixaPreco4.vinhoProduto").css("display", "flex");
					}
				}
				if (faixa5.checked == true) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false) {
						$(".faixaPreco1").hide();
						$(".faixaPreco2").hide();
						$(".faixaPreco3").hide();
						$(".faixaPreco4").hide();
					}
					if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
						$(".faixaPreco5").css("display", "flex");
					}
					if (amarelo.checked == true) {
						$(".faixaPreco5.amareloProduto").css("display", "flex");
					}
					if (azul.checked == true) {
						$(".faixaPreco5.azulProduto").css("display", "flex");
					}
					if (branco.checked == true) {
						$(".faixaPreco5.brancoProduto").css("display", "flex");
					}
					if (cinza.checked == true) {
						$(".faixaPreco5.cinzaProduto").css("display", "flex");
					}
					if (laranja.checked == true) {
						$(".faixaPreco5.laranjaProduto").css("display", "flex");
					}
					if (verde.checked == true) {
						$(".faixaPreco5.verdeProduto").css("display", "flex");
					}
					if (vermelho.checked == true) {
						$(".faixaPreco5.vermelhoProduto").css("display", "flex");
					}
					if (preto.checked == true) {
						$(".faixaPreco5.pretoProduto").css("display", "flex");
					}
					if (rosa.checked == true) {
						$(".faixaPreco5.rosaProduto").css("display", "flex");
					}
					if (vinho.checked == true) {
						$(".faixaPreco5.vinhoProduto").css("display", "flex");
					}
				}
			}
			if (tamanhoP.checked == true) {
				$(".tamanhoM").hide();
				$(".tamanhoG").hide();
				$(".tamanhoGG").hide();
				$(".tamanhoU").hide();
				$(".tamanho36").hide();
				$(".tamanho38").hide();
				$(".tamanho40").hide();
				$(".tamanho42").hide();
				$(".tamanho44").hide();
				$(".tamanho46").hide();
				if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanhoP").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanhoP.faixaPreco1").css("display", "flex");
							if (faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa2.checked == true) {
							$(".tamanhoP.faixaPreco2").css("display", "flex");
							if (faixa1.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa3.checked == true) {
							$(".tamanhoP.faixaPreco3").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa4.checked == true) {
							$(".tamanhoP.faixaPreco4").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa5.checked == true) {
							$(".tamanhoP.faixaPreco5").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
							}
						}
					}
				}
				if (amarelo.checked == true) {
					$(".tamanhoP.amareloProduto").css("display", "flex");
				}
				if (azul.checked == true) {
					$(".tamanhoP.azulProduto").css("display", "flex");
				}
				if (branco.checked == true) {
					$(".tamanhoP.brancoProduto").css("display", "flex");
				}
				if (cinza.checked == true) {
					$(".tamanhoP.cinzaProduto").css("display", "flex");
				}
				if (laranja.checked == true) {
					$(".tamanhoP.laranjaProduto").css("display", "flex");
				}
				if (verde.checked == true) {
					$(".tamanhoP.verdeProduto").css("display", "flex");
				}
				if (vermelho.checked == true) {
					$(".tamanhoP.vermelhoProduto").css("display", "flex");
				}
				if (preto.checked == true) {
					$(".tamanhoP.pretoProduto").css("display", "flex");
				}
				if (rosa.checked == true) {
					$(".tamanhoP.rosaProduto").css("display", "flex");
				}
				if (vinho.checked == true) {
					$(".tamanhoP.vinhoProduto").css("display", "flex");
				}
			}
			if (tamanhoM.checked == true) {
				$(".tamanhoP").hide();
				$(".tamanhoG").hide();
				$(".tamanhoGG").hide();
				$(".tamanhoU").hide();
				$(".tamanho36").hide();
				$(".tamanho38").hide();
				$(".tamanho40").hide();
				$(".tamanho42").hide();
				$(".tamanho44").hide();
				$(".tamanho46").hide();
				if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanhoM").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanhoM.faixaPreco1").css("display", "flex");
							if (faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa2.checked == true) {
							$(".tamanhoM.faixaPreco2").css("display", "flex");
							if (faixa1.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa3.checked == true) {
							$(".tamanhoM.faixaPreco3").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa4.checked == true) {
							$(".tamanhoM.faixaPreco4").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa5.checked == true) {
							$(".tamanhoM.faixaPreco5").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
							}
						}
					}
				}
				if (amarelo.checked == true) {
					$(".tamanhoM.amareloProduto").css("display", "flex");
				}
				if (azul.checked == true) {
					$(".tamanhoM.azulProduto").css("display", "flex");
				}
				if (branco.checked == true) {
					$(".tamanhoM.brancoProduto").css("display", "flex");
				}
				if (cinza.checked == true) {
					$(".tamanhoM.cinzaProduto").css("display", "flex");
				}
				if (laranja.checked == true) {
					$(".tamanhoM.laranjaProduto").css("display", "flex");
				}
				if (verde.checked == true) {
					$(".tamanhoM.verdeProduto").css("display", "flex");
				}
				if (vermelho.checked == true) {
					$(".tamanhoM.vermelhoProduto").css("display", "flex");
				}
				if (preto.checked == true) {
					$(".tamanhoM.pretoProduto").css("display", "flex");
				}
				if (rosa.checked == true) {
					$(".tamanhoM.rosaProduto").css("display", "flex");
				}
				if (vinho.checked == true) {
					$(".tamanhoM.vinhoProduto").css("display", "flex");
				}
			}
			if (tamanhoG.checked == true) {
				$(".tamanhoP").hide();
				$(".tamanhoM").hide();
				$(".tamanhoGG").hide();
				$(".tamanhoU").hide();
				$(".tamanho36").hide();
				$(".tamanho38").hide();
				$(".tamanho40").hide();
				$(".tamanho42").hide();
				$(".tamanho44").hide();
				$(".tamanho46").hide();
				if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanhoG").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanhoG.faixaPreco1").css("display", "flex");
							if (faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa2.checked == true) {
							$(".tamanhoG.faixaPreco2").css("display", "flex");
							if (faixa1.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa3.checked == true) {
							$(".tamanhoG.faixaPreco3").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa4.checked == true) {
							$(".tamanhoG.faixaPreco4").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa5.checked == true) {
							$(".tamanhoG.faixaPreco5").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
							}
						}
					}
				}
				if (amarelo.checked == true) {
					$(".tamanhoG.amareloProduto").css("display", "flex");
				}
				if (azul.checked == true) {
					$(".tamanhoG.azulProduto").css("display", "flex");
				}
				if (branco.checked == true) {
					$(".tamanhoG.brancoProduto").css("display", "flex");
				}
				if (cinza.checked == true) {
					$(".tamanhoG.cinzaProduto").css("display", "flex");
				}
				if (laranja.checked == true) {
					$(".tamanhoG.laranjaProduto").css("display", "flex");
				}
				if (verde.checked == true) {
					$(".tamanhoG.verdeProduto").css("display", "flex");
				}
				if (vermelho.checked == true) {
					$(".tamanhoG.vermelhoProduto").css("display", "flex");
				}
				if (preto.checked == true) {
					$(".tamanhoG.pretoProduto").css("display", "flex");
				}
				if (rosa.checked == true) {
					$(".tamanhoG.rosaProduto").css("display", "flex");
				}
				if (vinho.checked == true) {
					$(".tamanhoG.vinhoProduto").css("display", "flex");
				}
			}
			if (tamanhoGG.checked == true) {
				$(".tamanhoP").hide();
				$(".tamanhoM").hide();
				$(".tamanhoG").hide();
				$(".tamanhoU").hide();
				$(".tamanho36").hide();
				$(".tamanho38").hide();
				$(".tamanho40").hide();
				$(".tamanho42").hide();
				$(".tamanho44").hide();
				$(".tamanho46").hide();
				if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanhoGG").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanhoGG.faixaPreco1").css("display", "flex");
							if (faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa2.checked == true) {
							$(".tamanhoGG.faixaPreco2").css("display", "flex");
							if (faixa1.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa3.checked == true) {
							$(".tamanhoGG.faixaPreco3").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa4.checked == true) {
							$(".tamanhoGG.faixaPreco4").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa5.checked == true) {
							$(".tamanhoGG.faixaPreco5").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
							}
						}
					}
				}
				if (amarelo.checked == true) {
					$(".tamanhoGG.amareloProduto").css("display", "flex");
				}
				if (azul.checked == true) {
					$(".tamanhoGG.azulProduto").css("display", "flex");
				}
				if (branco.checked == true) {
					$(".tamanhoGG.brancoProduto").css("display", "flex");
				}
				if (cinza.checked == true) {
					$(".tamanhoGG.cinzaProduto").css("display", "flex");
				}
				if (laranja.checked == true) {
					$(".tamanhoGG.laranjaProduto").css("display", "flex");
				}
				if (verde.checked == true) {
					$(".tamanhoGG.verdeProduto").css("display", "flex");
				}
				if (vermelho.checked == true) {
					$(".tamanhoGG.vermelhoProduto").css("display", "flex");
				}
				if (preto.checked == true) {
					$(".tamanhoGG.pretoProduto").css("display", "flex");
				}
				if (rosa.checked == true) {
					$(".tamanhoGG.rosaProduto").css("display", "flex");
				}
				if (vinho.checked == true) {
					$(".tamanhoGG.vinhoProduto").css("display", "flex");
				}
			}
			if (tamanhoU.checked == true) {
				$(".tamanhoP").hide();
				$(".tamanhoM").hide();
				$(".tamanhoG").hide();
				$(".tamanhoGG").hide();
				$(".tamanho36").hide();
				$(".tamanho38").hide();
				$(".tamanho40").hide();
				$(".tamanho42").hide();
				$(".tamanho44").hide();
				$(".tamanho46").hide();
				if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanhoU").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanhoU.faixaPreco1").css("display", "flex");
							if (faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa2.checked == true) {
							$(".tamanhoU.faixaPreco2").css("display", "flex");
							if (faixa1.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa3.checked == true) {
							$(".tamanhoU.faixaPreco3").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa4.checked == true) {
							$(".tamanhoU.faixaPreco4").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa5.checked == true) {
							$(".tamanhoU.faixaPreco5").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
							}
						}
					}
				}
				if (amarelo.checked == true) {
					$(".tamanhoU.amareloProduto").css("display", "flex");
				}
				if (azul.checked == true) {
					$(".tamanhoU.azulProduto").css("display", "flex");
				}
				if (branco.checked == true) {
					$(".tamanhoU.brancoProduto").css("display", "flex");
				}
				if (cinza.checked == true) {
					$(".tamanhoU.cinzaProduto").css("display", "flex");
				}
				if (laranja.checked == true) {
					$(".tamanhoU.laranjaProduto").css("display", "flex");
				}
				if (verde.checked == true) {
					$(".tamanhoU.verdeProduto").css("display", "flex");
				}
				if (vermelho.checked == true) {
					$(".tamanhoU.vermelhoProduto").css("display", "flex");
				}
				if (preto.checked == true) {
					$(".tamanhoU.pretoProduto").css("display", "flex");
				}
				if (rosa.checked == true) {
					$(".tamanhoU.rosaProduto").css("display", "flex");
				}
				if (vinho.checked == true) {
					$(".tamanhoU.vinhoProduto").css("display", "flex");
				}
			}
			if (tamanho36.checked == true) {
				$(".tamanhoP").hide();
				$(".tamanhoM").hide();
				$(".tamanhoG").hide();
				$(".tamanhoGG").hide();
				$(".tamanhoU").hide();
				$(".tamanho38").hide();
				$(".tamanho40").hide();
				$(".tamanho42").hide();
				$(".tamanho44").hide();
				$(".tamanho46").hide();
				if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanho36").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanho36.faixaPreco1").css("display", "flex");
							if (faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa2.checked == true) {
							$(".tamanho36.faixaPreco2").css("display", "flex");
							if (faixa1.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa3.checked == true) {
							$(".tamanho36.faixaPreco3").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa4.checked == true) {
							$(".tamanho36.faixaPreco4").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa5.checked == true) {
							$(".tamanho36.faixaPreco5").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
							}
						}
					}
				}
				if (amarelo.checked == true) {
					$(".tamanho36.amareloProduto").css("display", "flex");
				}
				if (azul.checked == true) {
					$(".tamanho36.azulProduto").css("display", "flex");
				}
				if (branco.checked == true) {
					$(".tamanho36.brancoProduto").css("display", "flex");
				}
				if (cinza.checked == true) {
					$(".tamanho36.cinzaProduto").css("display", "flex");
				}
				if (laranja.checked == true) {
					$(".tamanho36.laranjaProduto").css("display", "flex");
				}
				if (verde.checked == true) {
					$(".tamanho36.verdeProduto").css("display", "flex");
				}
				if (vermelho.checked == true) {
					$(".tamanho36.vermelhoProduto").css("display", "flex");
				}
				if (preto.checked == true) {
					$(".tamanho36.pretoProduto").css("display", "flex");
				}
				if (rosa.checked == true) {
					$(".tamanho36.rosaProduto").css("display", "flex");
				}
				if (vinho.checked == true) {
					$(".tamanho36.vinhoProduto").css("display", "flex");
				}
			}
			if (tamanho38.checked == true) {
				$(".tamanhoP").hide();
				$(".tamanhoM").hide();
				$(".tamanhoG").hide();
				$(".tamanhoGG").hide();
				$(".tamanhoU").hide();
				$(".tamanho36").hide();
				$(".tamanho40").hide();
				$(".tamanho42").hide();
				$(".tamanho44").hide();
				$(".tamanho46").hide();
				if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanho38").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanho38.faixaPreco1").css("display", "flex");
							if (faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa2.checked == true) {
							$(".tamanho38.faixaPreco2").css("display", "flex");
							if (faixa1.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa3.checked == true) {
							$(".tamanho38.faixaPreco3").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa4.checked == true) {
							$(".tamanho38.faixaPreco4").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa5.checked == true) {
							$(".tamanho38.faixaPreco5").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
							}
						}
					}
				}
				if (amarelo.checked == true) {
					$(".tamanho38.amareloProduto").css("display", "flex");
				}
				if (azul.checked == true) {
					$(".tamanho38.azulProduto").css("display", "flex");
				}
				if (branco.checked == true) {
					$(".tamanho38.brancoProduto").css("display", "flex");
				}
				if (cinza.checked == true) {
					$(".tamanho38.cinzaProduto").css("display", "flex");
				}
				if (laranja.checked == true) {
					$(".tamanho38.laranjaProduto").css("display", "flex");
				}
				if (verde.checked == true) {
					$(".tamanho38.verdeProduto").css("display", "flex");
				}
				if (vermelho.checked == true) {
					$(".tamanho38.vermelhoProduto").css("display", "flex");
				}
				if (preto.checked == true) {
					$(".tamanho38.pretoProduto").css("display", "flex");
				}
				if (rosa.checked == true) {
					$(".tamanho38.rosaProduto").css("display", "flex");
				}
				if (vinho.checked == true) {
					$(".tamanho38.vinhoProduto").css("display", "flex");
				}
			}
			if (tamanho40.checked == true) {
				$(".tamanhoP").hide();
				$(".tamanhoM").hide();
				$(".tamanhoG").hide();
				$(".tamanhoGG").hide();
				$(".tamanhoU").hide();
				$(".tamanho36").hide();
				$(".tamanho38").hide();
				$(".tamanho42").hide();
				$(".tamanho44").hide();
				$(".tamanho46").hide();
				if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanho40").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanho40.faixaPreco1").css("display", "flex");
							if (faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa2.checked == true) {
							$(".tamanho40.faixaPreco2").css("display", "flex");
							if (faixa1.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa3.checked == true) {
							$(".tamanho40.faixaPreco3").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa4.checked == true) {
							$(".tamanho40.faixaPreco4").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa5.checked == true) {
							$(".tamanho40.faixaPreco5").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
							}
						}
					}
				}
				if (amarelo.checked == true) {
					$(".tamanho40.amareloProduto").css("display", "flex");
				}
				if (azul.checked == true) {
					$(".tamanho40.azulProduto").css("display", "flex");
				}
				if (branco.checked == true) {
					$(".tamanho40.brancoProduto").css("display", "flex");
				}
				if (cinza.checked == true) {
					$(".tamanho40.cinzaProduto").css("display", "flex");
				}
				if (laranja.checked == true) {
					$(".tamanho40.laranjaProduto").css("display", "flex");
				}
				if (verde.checked == true) {
					$(".tamanho40.verdeProduto").css("display", "flex");
				}
				if (vermelho.checked == true) {
					$(".tamanho40.vermelhoProduto").css("display", "flex");
				}
				if (preto.checked == true) {
					$(".tamanho40.pretoProduto").css("display", "flex");
				}
				if (rosa.checked == true) {
					$(".tamanho40.rosaProduto").css("display", "flex");
				}
				if (vinho.checked == true) {
					$(".tamanho40.vinhoProduto").css("display", "flex");
				}
			}
			if (tamanho42.checked == true) {
				$(".tamanhoP").hide();
				$(".tamanhoM").hide();
				$(".tamanhoG").hide();
				$(".tamanhoGG").hide();
				$(".tamanhoU").hide();
				$(".tamanho36").hide();
				$(".tamanho38").hide();
				$(".tamanho40").hide();
				$(".tamanho44").hide();
				$(".tamanho46").hide();
				if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanho42").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanho42.faixaPreco1").css("display", "flex");
							if (faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa2.checked == true) {
							$(".tamanho42.faixaPreco2").css("display", "flex");
							if (faixa1.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa3.checked == true) {
							$(".tamanho42.faixaPreco3").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa4.checked == true) {
							$(".tamanho42.faixaPreco4").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa5.checked == true) {
							$(".tamanho42.faixaPreco5").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
							}
						}
					}
				}
				if (amarelo.checked == true) {
					$(".tamanho42.amareloProduto").css("display", "flex");
				}
				if (azul.checked == true) {
					$(".tamanho42.azulProduto").css("display", "flex");
				}
				if (branco.checked == true) {
					$(".tamanho42.brancoProduto").css("display", "flex");
				}
				if (cinza.checked == true) {
					$(".tamanho42.cinzaProduto").css("display", "flex");
				}
				if (laranja.checked == true) {
					$(".tamanho42.laranjaProduto").css("display", "flex");
				}
				if (verde.checked == true) {
					$(".tamanho42.verdeProduto").css("display", "flex");
				}
				if (vermelho.checked == true) {
					$(".tamanho42.vermelhoProduto").css("display", "flex");
				}
				if (preto.checked == true) {
					$(".tamanho42.pretoProduto").css("display", "flex");
				}
				if (rosa.checked == true) {
					$(".tamanho42.rosaProduto").css("display", "flex");
				}
				if (vinho.checked == true) {
					$(".tamanho42.vinhoProduto").css("display", "flex");
				}
			}
			if (tamanho44.checked == true) {
				$(".tamanhoP").hide();
				$(".tamanhoM").hide();
				$(".tamanhoG").hide();
				$(".tamanhoGG").hide();
				$(".tamanhoU").hide();
				$(".tamanho36").hide();
				$(".tamanho38").hide();
				$(".tamanho40").hide();
				$(".tamanho42").hide();
				$(".tamanho46").hide();
				if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanho44").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanho44.faixaPreco1").css("display", "flex");
							if (faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa2.checked == true) {
							$(".tamanho44.faixaPreco2").css("display", "flex");
							if (faixa1.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa3.checked == true) {
							$(".tamanho44.faixaPreco3").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa4.checked == true) {
							$(".tamanho44.faixaPreco4").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa5.checked == true) {
							$(".tamanho44.faixaPreco5").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
							}
						}
					}
				}
				if (amarelo.checked == true) {
					$(".tamanho44.amareloProduto").css("display", "flex");
				}
				if (azul.checked == true) {
					$(".tamanho44.azulProduto").css("display", "flex");
				}
				if (branco.checked == true) {
					$(".tamanho44.brancoProduto").css("display", "flex");
				}
				if (cinza.checked == true) {
					$(".tamanho44.cinzaProduto").css("display", "flex");
				}
				if (laranja.checked == true) {
					$(".tamanho44.laranjaProduto").css("display", "flex");
				}
				if (verde.checked == true) {
					$(".tamanho44.verdeProduto").css("display", "flex");
				}
				if (vermelho.checked == true) {
					$(".tamanho44.vermelhoProduto").css("display", "flex");
				}
				if (preto.checked == true) {
					$(".tamanho44.pretoProduto").css("display", "flex");
				}
				if (rosa.checked == true) {
					$(".tamanho44.rosaProduto").css("display", "flex");
				}
				if (vinho.checked == true) {
					$(".tamanho44.vinhoProduto").css("display", "flex");
				}
			}
			if (tamanho46.checked == true) {
				$(".tamanhoP").hide();
				$(".tamanhoM").hide();
				$(".tamanhoG").hide();
				$(".tamanhoGG").hide();
				$(".tamanhoU").hide();
				$(".tamanho36").hide();
				$(".tamanho38").hide();
				$(".tamanho40").hide();
				$(".tamanho42").hide();
				$(".tamanho44").hide();
				if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanho46").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanho46.faixaPreco1").css("display", "flex");
							if (faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa2.checked == true) {
							$(".tamanho46.faixaPreco2").css("display", "flex");
							if (faixa1.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa3.checked == true) {
							$(".tamanho46.faixaPreco3").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa4.checked == true) {
							$(".tamanho46.faixaPreco4").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa5.checked == true) {
							$(".tamanho46.faixaPreco5").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
							}
						}
					}
				}
				if (amarelo.checked == true) {
					$(".tamanho46.amareloProduto").css("display", "flex");
				}
				if (azul.checked == true) {
					$(".tamanho46.azulProduto").css("display", "flex");
				}
				if (branco.checked == true) {
					$(".tamanho46.brancoProduto").css("display", "flex");
				}
				if (cinza.checked == true) {
					$(".tamanho46.cinzaProduto").css("display", "flex");
				}
				if (laranja.checked == true) {
					$(".tamanho46.laranjaProduto").css("display", "flex");
				}
				if (verde.checked == true) {
					$(".tamanho46.verdeProduto").css("display", "flex");
				}
				if (vermelho.checked == true) {
					$(".tamanho46.vermelhoProduto").css("display", "flex");
				}
				if (preto.checked == true) {
					$(".tamanho46.pretoProduto").css("display", "flex");
				}
				if (rosa.checked == true) {
					$(".tamanho46.rosaProduto").css("display", "flex");
				}
				if (vinho.checked == true) {
					$(".tamanho46.vinhoProduto").css("display", "flex");
				}
			}
		}
	})

	$(".filtrar-checkbox #rosa").click(function () {
		if (rosa.checked == true) {
			if (tamanhoP.checked == false && tamanhoM.checked == false && tamanhoG.checked == false && tamanhoGG.checked == false && tamanhoU.checked == false && tamanho36.checked == false && tamanho38.checked == false && tamanho40.checked == false && tamanho42.checked == false && tamanho44.checked == false && tamanho46.checked == false) {
				if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
					$(".rosaProduto").css("display", "flex");
				} else {
					if (faixa1.checked == true) {
						$(".faixaPreco1.rosaProduto").css("display", "flex");
					}
					if (faixa2.checked == true) {
						$(".faixaPreco2.rosaProduto").css("display", "flex");
					}
					if (faixa3.checked == true) {
						$(".faixaPreco3.rosaProduto").css("display", "flex");
					}
					if (faixa4.checked == true) {
						$(".faixaPreco4.rosaProduto").css("display", "flex");
					}
					if (faixa5.checked == true) {
						$(".faixaPreco5.rosaProduto").css("display", "flex");
					}
				}
			} else {
				if (tamanhoP.checked == true) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanhoP.rosaProduto").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanhoP.faixaPreco1.rosaProduto").css("display", "flex");
						}
						if (faixa2.checked == true) {
							$(".tamanhoP.faixaPreco2.rosaProduto").css("display", "flex");
						}
						if (faixa3.checked == true) {
							$(".tamanhoP.faixaPreco3.rosaProduto").css("display", "flex");
						}
						if (faixa4.checked == true) {
							$(".tamanhoP.faixaPreco4.rosaProduto").css("display", "flex");
						}
						if (faixa5.checked == true) {
							$(".tamanhoP.faixaPreco5.rosaProduto").css("display", "flex");
						}
					}
				}
				if (tamanhoM.checked == true) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanhoM.rosaProduto").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanhoM.faixaPreco1.rosaProduto").css("display", "flex");
						}
						if (faixa2.checked == true) {
							$(".tamanhoM.faixaPreco2.rosaProduto").css("display", "flex");
						}
						if (faixa3.checked == true) {
							$(".tamanhoM.faixaPreco3.rosaProduto").css("display", "flex");
						}
						if (faixa4.checked == true) {
							$(".tamanhoM.faixaPreco4.rosaProduto").css("display", "flex");
						}
						if (faixa5.checked == true) {
							$(".tamanhoM.faixaPreco5.rosaProduto").css("display", "flex");
						}
					}
				}
				if (tamanhoG.checked == true) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanhoG.rosaProduto").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanhoG.faixaPreco1.rosaProduto").css("display", "flex");
						}
						if (faixa2.checked == true) {
							$(".tamanhoG.faixaPreco2.rosaProduto").css("display", "flex");
						}
						if (faixa3.checked == true) {
							$(".tamanhoG.faixaPreco3.rosaProduto").css("display", "flex");
						}
						if (faixa4.checked == true) {
							$(".tamanhoG.faixaPreco4.rosaProduto").css("display", "flex");
						}
						if (faixa5.checked == true) {
							$(".tamanhoG.faixaPreco5.rosaProduto").css("display", "flex");
						}
					}
				}
				if (tamanhoGG.checked == true) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanhoGG.rosaProduto").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanhoGG.faixaPreco1.rosaProduto").css("display", "flex");
						}
						if (faixa2.checked == true) {
							$(".tamanhoGG.faixaPreco2.rosaProduto").css("display", "flex");
						}
						if (faixa3.checked == true) {
							$(".tamanhoGG.faixaPreco3.rosaProduto").css("display", "flex");
						}
						if (faixa4.checked == true) {
							$(".tamanhoGG.faixaPreco4.rosaProduto").css("display", "flex");
						}
						if (faixa5.checked == true) {
							$(".tamanhoGG.faixaPreco5.rosaProduto").css("display", "flex");
						}
					}
				}
				if (tamanhoU.checked == true) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanhoU.rosaProduto").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanhoU.faixaPreco1.rosaProduto").css("display", "flex");
						}
						if (faixa2.checked == true) {
							$(".tamanhoU.faixaPreco2.rosaProduto").css("display", "flex");
						}
						if (faixa3.checked == true) {
							$(".tamanhoU.faixaPreco3.rosaProduto").css("display", "flex");
						}
						if (faixa4.checked == true) {
							$(".tamanhoU.faixaPreco4.rosaProduto").css("display", "flex");
						}
						if (faixa5.checked == true) {
							$(".tamanhoU.faixaPreco5.rosaProduto").css("display", "flex");
						}
					}
				}
				if (tamanho36.checked == true) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanho36.rosaProduto").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanho36.faixaPreco1.rosaProduto").css("display", "flex");
						}
						if (faixa2.checked == true) {
							$(".tamanho36.faixaPreco2.rosaProduto").css("display", "flex");
						}
						if (faixa3.checked == true) {
							$(".tamanho36.faixaPreco3.rosaProduto").css("display", "flex");
						}
						if (faixa4.checked == true) {
							$(".tamanho36.faixaPreco4.rosaProduto").css("display", "flex");
						}
						if (faixa5.checked == true) {
							$(".tamanho36.faixaPreco5.rosaProduto").css("display", "flex");
						}
					}
				}
				if (tamanho38.checked == true) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanho38.rosaProduto").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanho38.faixaPreco1.rosaProduto").css("display", "flex");
						}
						if (faixa2.checked == true) {
							$(".tamanho38.faixaPreco2.rosaProduto").css("display", "flex");
						}
						if (faixa3.checked == true) {
							$(".tamanho38.faixaPreco3.rosaProduto").css("display", "flex");
						}
						if (faixa4.checked == true) {
							$(".tamanho38.faixaPreco4.rosaProduto").css("display", "flex");
						}
						if (faixa5.checked == true) {
							$(".tamanho38.faixaPreco5.rosaProduto").css("display", "flex");
						}
					}
				}
				if (tamanho40.checked == true) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanho40.rosaProduto").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanho40.faixaPreco1.rosaProduto").css("display", "flex");
						}
						if (faixa2.checked == true) {
							$(".tamanho40.faixaPreco2.rosaProduto").css("display", "flex");
						}
						if (faixa3.checked == true) {
							$(".tamanho40.faixaPreco3.rosaProduto").css("display", "flex");
						}
						if (faixa4.checked == true) {
							$(".tamanho40.faixaPreco4.rosaProduto").css("display", "flex");
						}
						if (faixa5.checked == true) {
							$(".tamanho40.faixaPreco5.rosaProduto").css("display", "flex");
						}
					}
				}
				if (tamanho42.checked == true) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanho42.rosaProduto").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanho42.faixaPreco1.rosaProduto").css("display", "flex");
						}
						if (faixa2.checked == true) {
							$(".tamanho42.faixaPreco2.rosaProduto").css("display", "flex");
						}
						if (faixa3.checked == true) {
							$(".tamanho42.faixaPreco3.rosaProduto").css("display", "flex");
						}
						if (faixa4.checked == true) {
							$(".tamanho42.faixaPreco4.rosaProduto").css("display", "flex");
						}
						if (faixa5.checked == true) {
							$(".tamanho42.faixaPreco5.rosaProduto").css("display", "flex");
						}
					}
				}
				if (tamanho44.checked == true) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanho44.rosaProduto").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanho44.faixaPreco1.rosaProduto").css("display", "flex");
						}
						if (faixa2.checked == true) {
							$(".tamanho44.faixaPreco2.rosaProduto").css("display", "flex");
						}
						if (faixa3.checked == true) {
							$(".tamanho44.faixaPreco3.rosaProduto").css("display", "flex");
						}
						if (faixa4.checked == true) {
							$(".tamanho44.faixaPreco4.rosaProduto").css("display", "flex");
						}
						if (faixa5.checked == true) {
							$(".tamanho44.faixaPreco5.rosaProduto").css("display", "flex");
						}
					}
				}
				if (tamanho46.checked == true) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanho46.vinhoProduto").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanho46.faixaPreco1.rosaProduto").css("display", "flex");
						}
						if (faixa2.checked == true) {
							$(".tamanho46.faixaPreco2.rosaProduto").css("display", "flex");
						}
						if (faixa3.checked == true) {
							$(".tamanho46.faixaPreco3.rosaProduto").css("display", "flex");
						}
						if (faixa4.checked == true) {
							$(".tamanho46.faixaPreco4.rosaProduto").css("display", "flex");
						}
						if (faixa5.checked == true) {
							$(".tamanho46.faixaPreco5.rosaProduto").css("display", "flex");
						}
					}
				}
			}
			if (amarelo.checked == false) {
				$(".amareloProduto").hide();
			}
			if (azul.checked == false) {
				$(".azulProduto").hide();
			}
			if (branco.checked == false) {
				$(".brancoProduto").hide();
			}
			if (cinza.checked == false) {
				$(".cinzaProduto").hide();
			}
			if (laranja.checked == false) {
				$(".laranjaProduto").hide();
			}
			if (verde.checked == false) {
				$(".verdeProduto").hide();
			}
			if (vermelho.checked == false) {
				$(".vermelhoProduto").hide();
			}
			if (preto.checked == false) {
				$(".pretoProduto").hide();
			}
			vinho
			if (vinho.checked == false) {
				$(".vinhoProduto").hide();
			}
		} else {
			$(".rosaProduto").hide();
			if (tamanhoP.checked == false && tamanhoM.checked == false && tamanhoG.checked == false && tamanhoGG.checked == false && tamanhoU.checked == false && tamanho36.checked == false && tamanho38.checked == false && tamanho40.checked == false && tamanho42.checked == false && tamanho44.checked == false && tamanho46.checked == false) {
				if (faixa1.checked == true) {
					if (faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".faixaPreco2").hide();
						$(".faixaPreco3").hide();
						$(".faixaPreco4").hide();
						$(".faixaPreco5").hide();
					}
					if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
						$(".faixaPreco1").css("display", "flex");
					}
					if (amarelo.checked == true) {
						$(".faixaPreco1.amareloProduto").css("display", "flex");
					}
					if (azul.checked == true) {
						$(".faixaPreco1.azulProduto").css("display", "flex");
					}
					if (branco.checked == true) {
						$(".faixaPreco1.brancoProduto").css("display", "flex");
					}
					if (cinza.checked == true) {
						$(".faixaPreco1.cinzaProduto").css("display", "flex");
					}
					if (laranja.checked == true) {
						$(".faixaPreco1.laranjaProduto").css("display", "flex");
					}
					if (verde.checked == true) {
						$(".faixaPreco1.verdeProduto").css("display", "flex");
					}
					if (vermelho.checked == true) {
						$(".faixaPreco1.vermelhoProduto").css("display", "flex");
					}
					if (preto.checked == true) {
						$(".faixaPreco1.pretoProduto").css("display", "flex");
					}
					if (rosa.checked == true) {
						$(".faixaPreco1.rosaProduto").css("display", "flex");
					}
					if (vinho.checked == true) {
						$(".faixaPreco1.vinhoProduto").css("display", "flex");
					}
				}
				if (faixa2.checked == true) {
					if (faixa1.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".faixaPreco1").hide();
						$(".faixaPreco3").hide();
						$(".faixaPreco4").hide();
						$(".faixaPreco5").hide();
					}
					if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
						$(".faixaPreco2").css("display", "flex");
					}
					if (amarelo.checked == true) {
						$(".faixaPreco2.amareloProduto").css("display", "flex");
					}
					if (azul.checked == true) {
						$(".faixaPreco2.azulProduto").css("display", "flex");
					}
					if (branco.checked == true) {
						$(".faixaPreco2.brancoProduto").css("display", "flex");
					}
					if (cinza.checked == true) {
						$(".faixaPreco2.cinzaProduto").css("display", "flex");
					}
					if (laranja.checked == true) {
						$(".faixaPreco2.laranjaProduto").css("display", "flex");
					}
					if (verde.checked == true) {
						$(".faixaPreco2.verdeProduto").css("display", "flex");
					}
					if (vermelho.checked == true) {
						$(".faixaPreco2.vermelhoProduto").css("display", "flex");
					}
					if (preto.checked == true) {
						$(".faixaPreco2.pretoProduto").css("display", "flex");
					}
					if (rosa.checked == true) {
						$(".faixaPreco2.rosaProduto").css("display", "flex");
					}
					if (vinho.checked == true) {
						$(".faixaPreco2.vinhoProduto").css("display", "flex");
					}
				}
				if (faixa3.checked == true) {
					if (faixa1.checked == false && faixa2.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".faixaPreco1").hide();
						$(".faixaPreco2").hide();
						$(".faixaPreco4").hide();
						$(".faixaPreco5").hide();
					}
					if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
						$(".faixaPreco3").css("display", "flex");
					}
					if (amarelo.checked == true) {
						$(".faixaPreco3.amareloProduto").css("display", "flex");
					}
					if (azul.checked == true) {
						$(".faixaPreco3.azulProduto").css("display", "flex");
					}
					if (branco.checked == true) {
						$(".faixaPreco3.brancoProduto").css("display", "flex");
					}
					if (cinza.checked == true) {
						$(".faixaPreco3.cinzaProduto").css("display", "flex");
					}
					if (laranja.checked == true) {
						$(".faixaPreco3.laranjaProduto").css("display", "flex");
					}
					if (verde.checked == true) {
						$(".faixaPreco3.verdeProduto").css("display", "flex");
					}
					if (vermelho.checked == true) {
						$(".faixaPreco3.vermelhoProduto").css("display", "flex");
					}
					if (preto.checked == true) {
						$(".faixaPreco3.pretoProduto").css("display", "flex");
					}
					if (rosa.checked == true) {
						$(".faixaPreco3.rosaProduto").css("display", "flex");
					}
					if (vinho.checked == true) {
						$(".faixaPreco3.vinhoProduto").css("display", "flex");
					}
				}
				if (faixa4.checked == true) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa5.checked == false) {
						$(".faixaPreco1").hide();
						$(".faixaPreco2").hide();
						$(".faixaPreco3").hide();
						$(".faixaPreco5").hide();
					}
					if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
						$(".faixaPreco4").css("display", "flex");
					}
					if (amarelo.checked == true) {
						$(".faixaPreco4.amareloProduto").css("display", "flex");
					}
					if (azul.checked == true) {
						$(".faixaPreco4.azulProduto").css("display", "flex");
					}
					if (branco.checked == true) {
						$(".faixaPreco4.brancoProduto").css("display", "flex");
					}
					if (cinza.checked == true) {
						$(".faixaPreco4.cinzaProduto").css("display", "flex");
					}
					if (laranja.checked == true) {
						$(".faixaPreco4.laranjaProduto").css("display", "flex");
					}
					if (verde.checked == true) {
						$(".faixaPreco4.verdeProduto").css("display", "flex");
					}
					if (vermelho.checked == true) {
						$(".faixaPreco4.vermelhoProduto").css("display", "flex");
					}
					if (preto.checked == true) {
						$(".faixaPreco4.pretoProduto").css("display", "flex");
					}
					if (rosa.checked == true) {
						$(".faixaPreco4.rosaProduto").css("display", "flex");
					}
					if (vinho.checked == true) {
						$(".faixaPreco4.vinhoProduto").css("display", "flex");
					}
				}
				if (faixa5.checked == true) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false) {
						$(".faixaPreco1").hide();
						$(".faixaPreco2").hide();
						$(".faixaPreco3").hide();
						$(".faixaPreco4").hide();
					}
					if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
						$(".faixaPreco5").css("display", "flex");
					}
					if (amarelo.checked == true) {
						$(".faixaPreco5.amareloProduto").css("display", "flex");
					}
					if (azul.checked == true) {
						$(".faixaPreco5.azulProduto").css("display", "flex");
					}
					if (branco.checked == true) {
						$(".faixaPreco5.brancoProduto").css("display", "flex");
					}
					if (cinza.checked == true) {
						$(".faixaPreco5.cinzaProduto").css("display", "flex");
					}
					if (laranja.checked == true) {
						$(".faixaPreco5.laranjaProduto").css("display", "flex");
					}
					if (verde.checked == true) {
						$(".faixaPreco5.verdeProduto").css("display", "flex");
					}
					if (vermelho.checked == true) {
						$(".faixaPreco5.vermelhoProduto").css("display", "flex");
					}
					if (preto.checked == true) {
						$(".faixaPreco5.pretoProduto").css("display", "flex");
					}
					if (rosa.checked == true) {
						$(".faixaPreco5.rosaProduto").css("display", "flex");
					}
					if (vinho.checked == true) {
						$(".faixaPreco5.vinhoProduto").css("display", "flex");
					}
				}
			}
			if (tamanhoP.checked == true) {
				$(".tamanhoM").hide();
				$(".tamanhoG").hide();
				$(".tamanhoGG").hide();
				$(".tamanhoU").hide();
				$(".tamanho36").hide();
				$(".tamanho38").hide();
				$(".tamanho40").hide();
				$(".tamanho42").hide();
				$(".tamanho44").hide();
				$(".tamanho46").hide();
				if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanhoP").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanhoP.faixaPreco1").css("display", "flex");
							if (faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa2.checked == true) {
							$(".tamanhoP.faixaPreco2").css("display", "flex");
							if (faixa1.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa3.checked == true) {
							$(".tamanhoP.faixaPreco3").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa4.checked == true) {
							$(".tamanhoP.faixaPreco4").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa5.checked == true) {
							$(".tamanhoP.faixaPreco5").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
							}
						}
					}
				}
				if (amarelo.checked == true) {
					$(".tamanhoP.amareloProduto").css("display", "flex");
				}
				if (azul.checked == true) {
					$(".tamanhoP.azulProduto").css("display", "flex");
				}
				if (branco.checked == true) {
					$(".tamanhoP.brancoProduto").css("display", "flex");
				}
				if (cinza.checked == true) {
					$(".tamanhoP.cinzaProduto").css("display", "flex");
				}
				if (laranja.checked == true) {
					$(".tamanhoP.laranjaProduto").css("display", "flex");
				}
				if (verde.checked == true) {
					$(".tamanhoP.verdeProduto").css("display", "flex");
				}
				if (vermelho.checked == true) {
					$(".tamanhoP.vermelhoProduto").css("display", "flex");
				}
				if (preto.checked == true) {
					$(".tamanhoP.pretoProduto").css("display", "flex");
				}
				if (rosa.checked == true) {
					$(".tamanhoP.rosaProduto").css("display", "flex");
				}
				if (vinho.checked == true) {
					$(".tamanhoP.vinhoProduto").css("display", "flex");
				}
			}
			if (tamanhoM.checked == true) {
				$(".tamanhoP").hide();
				$(".tamanhoG").hide();
				$(".tamanhoGG").hide();
				$(".tamanhoU").hide();
				$(".tamanho36").hide();
				$(".tamanho38").hide();
				$(".tamanho40").hide();
				$(".tamanho42").hide();
				$(".tamanho44").hide();
				$(".tamanho46").hide();
				if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanhoM").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanhoM.faixaPreco1").css("display", "flex");
							if (faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa2.checked == true) {
							$(".tamanhoM.faixaPreco2").css("display", "flex");
							if (faixa1.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa3.checked == true) {
							$(".tamanhoM.faixaPreco3").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa4.checked == true) {
							$(".tamanhoM.faixaPreco4").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa5.checked == true) {
							$(".tamanhoM.faixaPreco5").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
							}
						}
					}
				}
				if (amarelo.checked == true) {
					$(".tamanhoM.amareloProduto").css("display", "flex");
				}
				if (azul.checked == true) {
					$(".tamanhoM.azulProduto").css("display", "flex");
				}
				if (branco.checked == true) {
					$(".tamanhoM.brancoProduto").css("display", "flex");
				}
				if (cinza.checked == true) {
					$(".tamanhoM.cinzaProduto").css("display", "flex");
				}
				if (laranja.checked == true) {
					$(".tamanhoM.laranjaProduto").css("display", "flex");
				}
				if (verde.checked == true) {
					$(".tamanhoM.verdeProduto").css("display", "flex");
				}
				if (vermelho.checked == true) {
					$(".tamanhoM.vermelhoProduto").css("display", "flex");
				}
				if (preto.checked == true) {
					$(".tamanhoM.pretoProduto").css("display", "flex");
				}
				if (rosa.checked == true) {
					$(".tamanhoM.rosaProduto").css("display", "flex");
				}
				if (vinho.checked == true) {
					$(".tamanhoM.vinhoProduto").css("display", "flex");
				}
			}
			if (tamanhoG.checked == true) {
				$(".tamanhoP").hide();
				$(".tamanhoM").hide();
				$(".tamanhoGG").hide();
				$(".tamanhoU").hide();
				$(".tamanho36").hide();
				$(".tamanho38").hide();
				$(".tamanho40").hide();
				$(".tamanho42").hide();
				$(".tamanho44").hide();
				$(".tamanho46").hide();
				if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanhoG").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanhoG.faixaPreco1").css("display", "flex");
							if (faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa2.checked == true) {
							$(".tamanhoG.faixaPreco2").css("display", "flex");
							if (faixa1.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa3.checked == true) {
							$(".tamanhoG.faixaPreco3").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa4.checked == true) {
							$(".tamanhoG.faixaPreco4").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa5.checked == true) {
							$(".tamanhoG.faixaPreco5").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
							}
						}
					}
				}
				if (amarelo.checked == true) {
					$(".tamanhoG.amareloProduto").css("display", "flex");
				}
				if (azul.checked == true) {
					$(".tamanhoG.azulProduto").css("display", "flex");
				}
				if (branco.checked == true) {
					$(".tamanhoG.brancoProduto").css("display", "flex");
				}
				if (cinza.checked == true) {
					$(".tamanhoG.cinzaProduto").css("display", "flex");
				}
				if (laranja.checked == true) {
					$(".tamanhoG.laranjaProduto").css("display", "flex");
				}
				if (verde.checked == true) {
					$(".tamanhoG.verdeProduto").css("display", "flex");
				}
				if (vermelho.checked == true) {
					$(".tamanhoG.vermelhoProduto").css("display", "flex");
				}
				if (preto.checked == true) {
					$(".tamanhoG.pretoProduto").css("display", "flex");
				}
				if (rosa.checked == true) {
					$(".tamanhoG.rosaProduto").css("display", "flex");
				}
				if (vinho.checked == true) {
					$(".tamanhoG.vinhoProduto").css("display", "flex");
				}
			}
			if (tamanhoGG.checked == true) {
				$(".tamanhoP").hide();
				$(".tamanhoM").hide();
				$(".tamanhoG").hide();
				$(".tamanhoU").hide();
				$(".tamanho36").hide();
				$(".tamanho38").hide();
				$(".tamanho40").hide();
				$(".tamanho42").hide();
				$(".tamanho44").hide();
				$(".tamanho46").hide();
				if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanhoGG").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanhoGG.faixaPreco1").css("display", "flex");
							if (faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa2.checked == true) {
							$(".tamanhoGG.faixaPreco2").css("display", "flex");
							if (faixa1.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa3.checked == true) {
							$(".tamanhoGG.faixaPreco3").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa4.checked == true) {
							$(".tamanhoGG.faixaPreco4").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa5.checked == true) {
							$(".tamanhoGG.faixaPreco5").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
							}
						}
					}
				}
				if (amarelo.checked == true) {
					$(".tamanhoGG.amareloProduto").css("display", "flex");
				}
				if (azul.checked == true) {
					$(".tamanhoGG.azulProduto").css("display", "flex");
				}
				if (branco.checked == true) {
					$(".tamanhoGG.brancoProduto").css("display", "flex");
				}
				if (cinza.checked == true) {
					$(".tamanhoGG.cinzaProduto").css("display", "flex");
				}
				if (laranja.checked == true) {
					$(".tamanhoGG.laranjaProduto").css("display", "flex");
				}
				if (verde.checked == true) {
					$(".tamanhoGG.verdeProduto").css("display", "flex");
				}
				if (vermelho.checked == true) {
					$(".tamanhoGG.vermelhoProduto").css("display", "flex");
				}
				if (preto.checked == true) {
					$(".tamanhoGG.pretoProduto").css("display", "flex");
				}
				if (rosa.checked == true) {
					$(".tamanhoGG.rosaProduto").css("display", "flex");
				}
				if (vinho.checked == true) {
					$(".tamanhoGG.vinhoProduto").css("display", "flex");
				}
			}
			if (tamanhoU.checked == true) {
				$(".tamanhoP").hide();
				$(".tamanhoM").hide();
				$(".tamanhoG").hide();
				$(".tamanhoGG").hide();
				$(".tamanho36").hide();
				$(".tamanho38").hide();
				$(".tamanho40").hide();
				$(".tamanho42").hide();
				$(".tamanho44").hide();
				$(".tamanho46").hide();
				if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanhoU").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanhoU.faixaPreco1").css("display", "flex");
							if (faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa2.checked == true) {
							$(".tamanhoU.faixaPreco2").css("display", "flex");
							if (faixa1.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa3.checked == true) {
							$(".tamanhoU.faixaPreco3").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa4.checked == true) {
							$(".tamanhoU.faixaPreco4").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa5.checked == true) {
							$(".tamanhoU.faixaPreco5").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
							}
						}
					}
				}
				if (amarelo.checked == true) {
					$(".tamanhoU.amareloProduto").css("display", "flex");
				}
				if (azul.checked == true) {
					$(".tamanhoU.azulProduto").css("display", "flex");
				}
				if (branco.checked == true) {
					$(".tamanhoU.brancoProduto").css("display", "flex");
				}
				if (cinza.checked == true) {
					$(".tamanhoU.cinzaProduto").css("display", "flex");
				}
				if (laranja.checked == true) {
					$(".tamanhoU.laranjaProduto").css("display", "flex");
				}
				if (verde.checked == true) {
					$(".tamanhoU.verdeProduto").css("display", "flex");
				}
				if (vermelho.checked == true) {
					$(".tamanhoU.vermelhoProduto").css("display", "flex");
				}
				if (preto.checked == true) {
					$(".tamanhoU.pretoProduto").css("display", "flex");
				}
				if (rosa.checked == true) {
					$(".tamanhoU.rosaProduto").css("display", "flex");
				}
				if (vinho.checked == true) {
					$(".tamanhoU.vinhoProduto").css("display", "flex");
				}
			}
			if (tamanho36.checked == true) {
				$(".tamanhoP").hide();
				$(".tamanhoM").hide();
				$(".tamanhoG").hide();
				$(".tamanhoGG").hide();
				$(".tamanhoU").hide();
				$(".tamanho38").hide();
				$(".tamanho40").hide();
				$(".tamanho42").hide();
				$(".tamanho44").hide();
				$(".tamanho46").hide();
				if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanho36").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanho36.faixaPreco1").css("display", "flex");
							if (faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa2.checked == true) {
							$(".tamanho36.faixaPreco2").css("display", "flex");
							if (faixa1.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa3.checked == true) {
							$(".tamanho36.faixaPreco3").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa4.checked == true) {
							$(".tamanho36.faixaPreco4").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa5.checked == true) {
							$(".tamanho36.faixaPreco5").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
							}
						}
					}
				}
				if (amarelo.checked == true) {
					$(".tamanho36.amareloProduto").css("display", "flex");
				}
				if (azul.checked == true) {
					$(".tamanho36.azulProduto").css("display", "flex");
				}
				if (branco.checked == true) {
					$(".tamanho36.brancoProduto").css("display", "flex");
				}
				if (cinza.checked == true) {
					$(".tamanho36.cinzaProduto").css("display", "flex");
				}
				if (laranja.checked == true) {
					$(".tamanho36.laranjaProduto").css("display", "flex");
				}
				if (verde.checked == true) {
					$(".tamanho36.verdeProduto").css("display", "flex");
				}
				if (vermelho.checked == true) {
					$(".tamanho36.vermelhoProduto").css("display", "flex");
				}
				if (preto.checked == true) {
					$(".tamanho36.pretoProduto").css("display", "flex");
				}
				if (rosa.checked == true) {
					$(".tamanho36.rosaProduto").css("display", "flex");
				}
				if (vinho.checked == true) {
					$(".tamanho36.vinhoProduto").css("display", "flex");
				}
			}
			if (tamanho38.checked == true) {
				$(".tamanhoP").hide();
				$(".tamanhoM").hide();
				$(".tamanhoG").hide();
				$(".tamanhoGG").hide();
				$(".tamanhoU").hide();
				$(".tamanho36").hide();
				$(".tamanho40").hide();
				$(".tamanho42").hide();
				$(".tamanho44").hide();
				$(".tamanho46").hide();
				if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanho38").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanho38.faixaPreco1").css("display", "flex");
							if (faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa2.checked == true) {
							$(".tamanho38.faixaPreco2").css("display", "flex");
							if (faixa1.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa3.checked == true) {
							$(".tamanho38.faixaPreco3").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa4.checked == true) {
							$(".tamanho38.faixaPreco4").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa5.checked == true) {
							$(".tamanho38.faixaPreco5").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
							}
						}
					}
				}
				if (amarelo.checked == true) {
					$(".tamanho38.amareloProduto").css("display", "flex");
				}
				if (azul.checked == true) {
					$(".tamanho38.azulProduto").css("display", "flex");
				}
				if (branco.checked == true) {
					$(".tamanho38.brancoProduto").css("display", "flex");
				}
				if (cinza.checked == true) {
					$(".tamanho38.cinzaProduto").css("display", "flex");
				}
				if (laranja.checked == true) {
					$(".tamanho38.laranjaProduto").css("display", "flex");
				}
				if (verde.checked == true) {
					$(".tamanho38.verdeProduto").css("display", "flex");
				}
				if (vermelho.checked == true) {
					$(".tamanho38.vermelhoProduto").css("display", "flex");
				}
				if (preto.checked == true) {
					$(".tamanho38.pretoProduto").css("display", "flex");
				}
				if (rosa.checked == true) {
					$(".tamanho38.rosaProduto").css("display", "flex");
				}
				if (vinho.checked == true) {
					$(".tamanho38.vinhoProduto").css("display", "flex");
				}
			}
			if (tamanho40.checked == true) {
				$(".tamanhoP").hide();
				$(".tamanhoM").hide();
				$(".tamanhoG").hide();
				$(".tamanhoGG").hide();
				$(".tamanhoU").hide();
				$(".tamanho36").hide();
				$(".tamanho38").hide();
				$(".tamanho42").hide();
				$(".tamanho44").hide();
				$(".tamanho46").hide();
				if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanho40").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanho40.faixaPreco1").css("display", "flex");
							if (faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa2.checked == true) {
							$(".tamanho40.faixaPreco2").css("display", "flex");
							if (faixa1.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa3.checked == true) {
							$(".tamanho40.faixaPreco3").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa4.checked == true) {
							$(".tamanho40.faixaPreco4").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa5.checked == true) {
							$(".tamanho40.faixaPreco5").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
							}
						}
					}
				}
				if (amarelo.checked == true) {
					$(".tamanho40.amareloProduto").css("display", "flex");
				}
				if (azul.checked == true) {
					$(".tamanho40.azulProduto").css("display", "flex");
				}
				if (branco.checked == true) {
					$(".tamanho40.brancoProduto").css("display", "flex");
				}
				if (cinza.checked == true) {
					$(".tamanho40.cinzaProduto").css("display", "flex");
				}
				if (laranja.checked == true) {
					$(".tamanho40.laranjaProduto").css("display", "flex");
				}
				if (verde.checked == true) {
					$(".tamanho40.verdeProduto").css("display", "flex");
				}
				if (vermelho.checked == true) {
					$(".tamanho40.vermelhoProduto").css("display", "flex");
				}
				if (preto.checked == true) {
					$(".tamanho40.pretoProduto").css("display", "flex");
				}
				if (rosa.checked == true) {
					$(".tamanho40.rosaProduto").css("display", "flex");
				}
				if (vinho.checked == true) {
					$(".tamanho40.vinhoProduto").css("display", "flex");
				}
			}
			if (tamanho42.checked == true) {
				$(".tamanhoP").hide();
				$(".tamanhoM").hide();
				$(".tamanhoG").hide();
				$(".tamanhoGG").hide();
				$(".tamanhoU").hide();
				$(".tamanho36").hide();
				$(".tamanho38").hide();
				$(".tamanho40").hide();
				$(".tamanho44").hide();
				$(".tamanho46").hide();
				if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanho42").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanho42.faixaPreco1").css("display", "flex");
							if (faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa2.checked == true) {
							$(".tamanho42.faixaPreco2").css("display", "flex");
							if (faixa1.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa3.checked == true) {
							$(".tamanho42.faixaPreco3").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa4.checked == true) {
							$(".tamanho42.faixaPreco4").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa5.checked == true) {
							$(".tamanho42.faixaPreco5").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
							}
						}
					}
				}
				if (amarelo.checked == true) {
					$(".tamanho42.amareloProduto").css("display", "flex");
				}
				if (azul.checked == true) {
					$(".tamanho42.azulProduto").css("display", "flex");
				}
				if (branco.checked == true) {
					$(".tamanho42.brancoProduto").css("display", "flex");
				}
				if (cinza.checked == true) {
					$(".tamanho42.cinzaProduto").css("display", "flex");
				}
				if (laranja.checked == true) {
					$(".tamanho42.laranjaProduto").css("display", "flex");
				}
				if (verde.checked == true) {
					$(".tamanho42.verdeProduto").css("display", "flex");
				}
				if (vermelho.checked == true) {
					$(".tamanho42.vermelhoProduto").css("display", "flex");
				}
				if (preto.checked == true) {
					$(".tamanho42.pretoProduto").css("display", "flex");
				}
				if (rosa.checked == true) {
					$(".tamanho42.rosaProduto").css("display", "flex");
				}
				if (vinho.checked == true) {
					$(".tamanho42.vinhoProduto").css("display", "flex");
				}
			}
			if (tamanho44.checked == true) {
				$(".tamanhoP").hide();
				$(".tamanhoM").hide();
				$(".tamanhoG").hide();
				$(".tamanhoGG").hide();
				$(".tamanhoU").hide();
				$(".tamanho36").hide();
				$(".tamanho38").hide();
				$(".tamanho40").hide();
				$(".tamanho42").hide();
				$(".tamanho46").hide();
				if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanho44").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanho44.faixaPreco1").css("display", "flex");
							if (faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa2.checked == true) {
							$(".tamanho44.faixaPreco2").css("display", "flex");
							if (faixa1.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa3.checked == true) {
							$(".tamanho44.faixaPreco3").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa4.checked == true) {
							$(".tamanho44.faixaPreco4").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa5.checked == true) {
							$(".tamanho44.faixaPreco5").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
							}
						}
					}
				}
				if (amarelo.checked == true) {
					$(".tamanho44.amareloProduto").css("display", "flex");
				}
				if (azul.checked == true) {
					$(".tamanho44.azulProduto").css("display", "flex");
				}
				if (branco.checked == true) {
					$(".tamanho44.brancoProduto").css("display", "flex");
				}
				if (cinza.checked == true) {
					$(".tamanho44.cinzaProduto").css("display", "flex");
				}
				if (laranja.checked == true) {
					$(".tamanho44.laranjaProduto").css("display", "flex");
				}
				if (verde.checked == true) {
					$(".tamanho44.verdeProduto").css("display", "flex");
				}
				if (vermelho.checked == true) {
					$(".tamanho44.vermelhoProduto").css("display", "flex");
				}
				if (preto.checked == true) {
					$(".tamanho44.pretoProduto").css("display", "flex");
				}
				if (rosa.checked == true) {
					$(".tamanho44.rosaProduto").css("display", "flex");
				}
				if (vinho.checked == true) {
					$(".tamanho44.vinhoProduto").css("display", "flex");
				}
			}
			if (tamanho46.checked == true) {
				$(".tamanhoP").hide();
				$(".tamanhoM").hide();
				$(".tamanhoG").hide();
				$(".tamanhoGG").hide();
				$(".tamanhoU").hide();
				$(".tamanho36").hide();
				$(".tamanho38").hide();
				$(".tamanho40").hide();
				$(".tamanho42").hide();
				$(".tamanho44").hide();
				if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanho46").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanho46.faixaPreco1").css("display", "flex");
							if (faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa2.checked == true) {
							$(".tamanho46.faixaPreco2").css("display", "flex");
							if (faixa1.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa3.checked == true) {
							$(".tamanho46.faixaPreco3").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa4.checked == true) {
							$(".tamanho46.faixaPreco4").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa5.checked == true) {
							$(".tamanho46.faixaPreco5").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
							}
						}
					}
				}
				if (amarelo.checked == true) {
					$(".tamanho46.amareloProduto").css("display", "flex");
				}
				if (azul.checked == true) {
					$(".tamanho46.azulProduto").css("display", "flex");
				}
				if (branco.checked == true) {
					$(".tamanho46.brancoProduto").css("display", "flex");
				}
				if (cinza.checked == true) {
					$(".tamanho46.cinzaProduto").css("display", "flex");
				}
				if (laranja.checked == true) {
					$(".tamanho46.laranjaProduto").css("display", "flex");
				}
				if (verde.checked == true) {
					$(".tamanho46.verdeProduto").css("display", "flex");
				}
				if (vermelho.checked == true) {
					$(".tamanho46.vermelhoProduto").css("display", "flex");
				}
				if (preto.checked == true) {
					$(".tamanho46.pretoProduto").css("display", "flex");
				}
				if (rosa.checked == true) {
					$(".tamanho46.rosaProduto").css("display", "flex");
				}
				if (vinho.checked == true) {
					$(".tamanho46.vinhoProduto").css("display", "flex");
				}
			}
		}
	})

	$(".filtrar-checkbox #vinho").click(function () {
		if (vinho.checked == true) {
			if (tamanhoP.checked == false && tamanhoM.checked == false && tamanhoG.checked == false && tamanhoGG.checked == false && tamanhoU.checked == false && tamanho36.checked == false && tamanho38.checked == false && tamanho40.checked == false && tamanho42.checked == false && tamanho44.checked == false && tamanho46.checked == false) {
				if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
					$(".vinhoProduto").css("display", "flex");
				} else {
					if (faixa1.checked == true) {
						$(".faixaPreco1.vinhoProduto").css("display", "flex");
					}
					if (faixa2.checked == true) {
						$(".faixaPreco2.vinhoProduto").css("display", "flex");
					}
					if (faixa3.checked == true) {
						$(".faixaPreco3.vinhoProduto").css("display", "flex");
					}
					if (faixa4.checked == true) {
						$(".faixaPreco4.vinhoProduto").css("display", "flex");
					}
					if (faixa5.checked == true) {
						$(".faixaPreco5.vinhoProduto").css("display", "flex");
					}
				}
			} else {
				if (tamanhoP.checked == true) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanhoP.vinhoProduto").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanhoP.faixaPreco1.vinhoProduto").css("display", "flex");
						}
						if (faixa2.checked == true) {
							$(".tamanhoP.faixaPreco2.vinhoProduto").css("display", "flex");
						}
						if (faixa3.checked == true) {
							$(".tamanhoP.faixaPreco3.vinhoProduto").css("display", "flex");
						}
						if (faixa4.checked == true) {
							$(".tamanhoP.faixaPreco4.vinhoProduto").css("display", "flex");
						}
						if (faixa5.checked == true) {
							$(".tamanhoP.faixaPreco5.vinhoProduto").css("display", "flex");
						}
					}
				}
				if (tamanhoM.checked == true) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanhoM.vinhoProduto").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanhoM.faixaPreco1.vinhoProduto").css("display", "flex");
						}
						if (faixa2.checked == true) {
							$(".tamanhoM.faixaPreco2.vinhoProduto").css("display", "flex");
						}
						if (faixa3.checked == true) {
							$(".tamanhoM.faixaPreco3.vinhoProduto").css("display", "flex");
						}
						if (faixa4.checked == true) {
							$(".tamanhoM.faixaPreco4.vinhoProduto").css("display", "flex");
						}
						if (faixa5.checked == true) {
							$(".tamanhoM.faixaPreco5.vinhoProduto").css("display", "flex");
						}
					}
				}
				if (tamanhoG.checked == true) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanhoG.vinhoProduto").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanhoG.faixaPreco1.vinhoProduto").css("display", "flex");
						}
						if (faixa2.checked == true) {
							$(".tamanhoG.faixaPreco2.vinhoProduto").css("display", "flex");
						}
						if (faixa3.checked == true) {
							$(".tamanhoG.faixaPreco3.vinhoProduto").css("display", "flex");
						}
						if (faixa4.checked == true) {
							$(".tamanhoG.faixaPreco4.vinhoProduto").css("display", "flex");
						}
						if (faixa5.checked == true) {
							$(".tamanhoG.faixaPreco5.vinhoProduto").css("display", "flex");
						}
					}
				}
				if (tamanhoGG.checked == true) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanhoGG.vinhoProduto").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanhoGG.faixaPreco1.vinhoProduto").css("display", "flex");
						}
						if (faixa2.checked == true) {
							$(".tamanhoGG.faixaPreco2.vinhoProduto").css("display", "flex");
						}
						if (faixa3.checked == true) {
							$(".tamanhoGG.faixaPreco3.vinhoProduto").css("display", "flex");
						}
						if (faixa4.checked == true) {
							$(".tamanhoGG.faixaPreco4.vinhoProduto").css("display", "flex");
						}
						if (faixa5.checked == true) {
							$(".tamanhoGG.faixaPreco5.vinhoProduto").css("display", "flex");
						}
					}
				}
				if (tamanhoU.checked == true) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanhoU.vinhoProduto").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanhoU.faixaPreco1.vinhoProduto").css("display", "flex");
						}
						if (faixa2.checked == true) {
							$(".tamanhoU.faixaPreco2.vinhoProduto").css("display", "flex");
						}
						if (faixa3.checked == true) {
							$(".tamanhoU.faixaPreco3.vinhoProduto").css("display", "flex");
						}
						if (faixa4.checked == true) {
							$(".tamanhoU.faixaPreco4.vinhoProduto").css("display", "flex");
						}
						if (faixa5.checked == true) {
							$(".tamanhoU.faixaPreco5.vinhoProduto").css("display", "flex");
						}
					}
				}
				if (tamanho36.checked == true) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanho36.vinhoProduto").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanho36.faixaPreco1.vinhoProduto").css("display", "flex");
						}
						if (faixa2.checked == true) {
							$(".tamanho36.faixaPreco2.vinhoProduto").css("display", "flex");
						}
						if (faixa3.checked == true) {
							$(".tamanho36.faixaPreco3.vinhoProduto").css("display", "flex");
						}
						if (faixa4.checked == true) {
							$(".tamanho36.faixaPreco4.vinhoProduto").css("display", "flex");
						}
						if (faixa5.checked == true) {
							$(".tamanho36.faixaPreco5.vinhoProduto").css("display", "flex");
						}
					}
				}
				if (tamanho38.checked == true) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanho38.vinhoProduto").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanho38.faixaPreco1.vinhoProduto").css("display", "flex");
						}
						if (faixa2.checked == true) {
							$(".tamanho38.faixaPreco2.vinhoProduto").css("display", "flex");
						}
						if (faixa3.checked == true) {
							$(".tamanho38.faixaPreco3.vinhoProduto").css("display", "flex");
						}
						if (faixa4.checked == true) {
							$(".tamanho38.faixaPreco4.vinhoProduto").css("display", "flex");
						}
						if (faixa5.checked == true) {
							$(".tamanho38.faixaPreco5.vinhoProduto").css("display", "flex");
						}
					}
				}
				if (tamanho40.checked == true) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanho40.vinhoProduto").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanho40.faixaPreco1.vinhoProduto").css("display", "flex");
						}
						if (faixa2.checked == true) {
							$(".tamanho40.faixaPreco2.vinhoProduto").css("display", "flex");
						}
						if (faixa3.checked == true) {
							$(".tamanho40.faixaPreco3.vinhoProduto").css("display", "flex");
						}
						if (faixa4.checked == true) {
							$(".tamanho40.faixaPreco4.vinhoProduto").css("display", "flex");
						}
						if (faixa5.checked == true) {
							$(".tamanho40.faixaPreco5.vinhoProduto").css("display", "flex");
						}
					}
				}
				if (tamanho42.checked == true) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanho42.vinhoProduto").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanho42.faixaPreco1.vinhoProduto").css("display", "flex");
						}
						if (faixa2.checked == true) {
							$(".tamanho42.faixaPreco2.vinhoProduto").css("display", "flex");
						}
						if (faixa3.checked == true) {
							$(".tamanho42.faixaPreco3.vinhoProduto").css("display", "flex");
						}
						if (faixa4.checked == true) {
							$(".tamanho42.faixaPreco4.vinhoProduto").css("display", "flex");
						}
						if (faixa5.checked == true) {
							$(".tamanho42.faixaPreco5.vinhoProduto").css("display", "flex");
						}
					}
				}
				if (tamanho44.checked == true) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanho44.vinhoProduto").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanho44.faixaPreco1.vinhoProduto").css("display", "flex");
						}
						if (faixa2.checked == true) {
							$(".tamanho44.faixaPreco2.vinhoProduto").css("display", "flex");
						}
						if (faixa3.checked == true) {
							$(".tamanho44.faixaPreco3.vinhoProduto").css("display", "flex");
						}
						if (faixa4.checked == true) {
							$(".tamanho44.faixaPreco4.vinhoProduto").css("display", "flex");
						}
						if (faixa5.checked == true) {
							$(".tamanho44.faixaPreco5.vinhoProduto").css("display", "flex");
						}
					}
				}
				if (tamanho46.checked == true) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanho46.vinhoProduto").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanho46.faixaPreco1.vinhoProduto").css("display", "flex");
						}
						if (faixa2.checked == true) {
							$(".tamanho46.faixaPreco2.vinhoProduto").css("display", "flex");
						}
						if (faixa3.checked == true) {
							$(".tamanho46.faixaPreco3.vinhoProduto").css("display", "flex");
						}
						if (faixa4.checked == true) {
							$(".tamanho46.faixaPreco4.vinhoProduto").css("display", "flex");
						}
						if (faixa5.checked == true) {
							$(".tamanho46.faixaPreco5.vinhoProduto").css("display", "flex");
						}
					}
				}
			}
			if (amarelo.checked == false) {
				$(".amareloProduto").hide();
			}
			if (azul.checked == false) {
				$(".azulProduto").hide();
			}
			if (branco.checked == false) {
				$(".brancoProduto").hide();
			}
			if (cinza.checked == false) {
				$(".cinzaProduto").hide();
			}
			if (laranja.checked == false) {
				$(".laranjaProduto").hide();
			}
			if (verde.checked == false) {
				$(".verdeProduto").hide();
			}
			if (vermelho.checked == false) {
				$(".vermelhoProduto").hide();
			}
			if (preto.checked == false) {
				$(".pretoProduto").hide();
			}
			if (rosa.checked == false) {
				$(".rosaProduto").hide();
			}
		} else {
			$(".vinhoProduto").hide();
			if (tamanhoP.checked == false && tamanhoM.checked == false && tamanhoG.checked == false && tamanhoGG.checked == false && tamanhoU.checked == false && tamanho36.checked == false && tamanho38.checked == false && tamanho40.checked == false && tamanho42.checked == false && tamanho44.checked == false && tamanho46.checked == false) {
				if (faixa1.checked == true) {
					if (faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".faixaPreco2").hide();
						$(".faixaPreco3").hide();
						$(".faixaPreco4").hide();
						$(".faixaPreco5").hide();
					}
					if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
						$(".faixaPreco1").css("display", "flex");
					}
					if (amarelo.checked == true) {
						$(".faixaPreco1.amareloProduto").css("display", "flex");
					}
					if (azul.checked == true) {
						$(".faixaPreco1.azulProduto").css("display", "flex");
					}
					if (branco.checked == true) {
						$(".faixaPreco1.brancoProduto").css("display", "flex");
					}
					if (cinza.checked == true) {
						$(".faixaPreco1.cinzaProduto").css("display", "flex");
					}
					if (laranja.checked == true) {
						$(".faixaPreco1.laranjaProduto").css("display", "flex");
					}
					if (verde.checked == true) {
						$(".faixaPreco1.verdeProduto").css("display", "flex");
					}
					if (vermelho.checked == true) {
						$(".faixaPreco1.vermelhoProduto").css("display", "flex");
					}
					if (preto.checked == true) {
						$(".faixaPreco1.pretoProduto").css("display", "flex");
					}
					if (rosa.checked == true) {
						$(".faixaPreco1.rosaProduto").css("display", "flex");
					}
					if (vinho.checked == true) {
						$(".faixaPreco1.vinhoProduto").css("display", "flex");
					}
				}
				if (faixa2.checked == true) {
					if (faixa1.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".faixaPreco1").hide();
						$(".faixaPreco3").hide();
						$(".faixaPreco4").hide();
						$(".faixaPreco5").hide();
					}
					if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
						$(".faixaPreco2").css("display", "flex");
					}
					if (amarelo.checked == true) {
						$(".faixaPreco2.amareloProduto").css("display", "flex");
					}
					if (azul.checked == true) {
						$(".faixaPreco2.azulProduto").css("display", "flex");
					}
					if (branco.checked == true) {
						$(".faixaPreco2.brancoProduto").css("display", "flex");
					}
					if (cinza.checked == true) {
						$(".faixaPreco2.cinzaProduto").css("display", "flex");
					}
					if (laranja.checked == true) {
						$(".faixaPreco2.laranjaProduto").css("display", "flex");
					}
					if (verde.checked == true) {
						$(".faixaPreco2.verdeProduto").css("display", "flex");
					}
					if (vermelho.checked == true) {
						$(".faixaPreco2.vermelhoProduto").css("display", "flex");
					}
					if (preto.checked == true) {
						$(".faixaPreco2.pretoProduto").css("display", "flex");
					}
					if (rosa.checked == true) {
						$(".faixaPreco2.rosaProduto").css("display", "flex");
					}
					if (vinho.checked == true) {
						$(".faixaPreco2.vinhoProduto").css("display", "flex");
					}
				}
				if (faixa3.checked == true) {
					if (faixa1.checked == false && faixa2.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".faixaPreco1").hide();
						$(".faixaPreco2").hide();
						$(".faixaPreco4").hide();
						$(".faixaPreco5").hide();
					}
					if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
						$(".faixaPreco3").css("display", "flex");
					}
					if (amarelo.checked == true) {
						$(".faixaPreco3.amareloProduto").css("display", "flex");
					}
					if (azul.checked == true) {
						$(".faixaPreco3.azulProduto").css("display", "flex");
					}
					if (branco.checked == true) {
						$(".faixaPreco3.brancoProduto").css("display", "flex");
					}
					if (cinza.checked == true) {
						$(".faixaPreco3.cinzaProduto").css("display", "flex");
					}
					if (laranja.checked == true) {
						$(".faixaPreco3.laranjaProduto").css("display", "flex");
					}
					if (verde.checked == true) {
						$(".faixaPreco3.verdeProduto").css("display", "flex");
					}
					if (vermelho.checked == true) {
						$(".faixaPreco3.vermelhoProduto").css("display", "flex");
					}
					if (preto.checked == true) {
						$(".faixaPreco3.pretoProduto").css("display", "flex");
					}
					if (rosa.checked == true) {
						$(".faixaPreco3.rosaProduto").css("display", "flex");
					}
					if (vinho.checked == true) {
						$(".faixaPreco3.vinhoProduto").css("display", "flex");
					}
				}
				if (faixa4.checked == true) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa5.checked == false) {
						$(".faixaPreco1").hide();
						$(".faixaPreco2").hide();
						$(".faixaPreco3").hide();
						$(".faixaPreco5").hide();
					}
					if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
						$(".faixaPreco4").css("display", "flex");
					}
					if (amarelo.checked == true) {
						$(".faixaPreco4.amareloProduto").css("display", "flex");
					}
					if (azul.checked == true) {
						$(".faixaPreco4.azulProduto").css("display", "flex");
					}
					if (branco.checked == true) {
						$(".faixaPreco4.brancoProduto").css("display", "flex");
					}
					if (cinza.checked == true) {
						$(".faixaPreco4.cinzaProduto").css("display", "flex");
					}
					if (laranja.checked == true) {
						$(".faixaPreco4.laranjaProduto").css("display", "flex");
					}
					if (verde.checked == true) {
						$(".faixaPreco4.verdeProduto").css("display", "flex");
					}
					if (vermelho.checked == true) {
						$(".faixaPreco4.vermelhoProduto").css("display", "flex");
					}
					if (preto.checked == true) {
						$(".faixaPreco4.pretoProduto").css("display", "flex");
					}
					if (rosa.checked == true) {
						$(".faixaPreco4.rosaProduto").css("display", "flex");
					}
					if (vinho.checked == true) {
						$(".faixaPreco4.vinhoProduto").css("display", "flex");
					}
				}
				if (faixa5.checked == true) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false) {
						$(".faixaPreco1").hide();
						$(".faixaPreco2").hide();
						$(".faixaPreco3").hide();
						$(".faixaPreco4").hide();
					}
					if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
						$(".faixaPreco5").css("display", "flex");
					}
					if (amarelo.checked == true) {
						$(".faixaPreco5.amareloProduto").css("display", "flex");
					}
					if (azul.checked == true) {
						$(".faixaPreco5.azulProduto").css("display", "flex");
					}
					if (branco.checked == true) {
						$(".faixaPreco5.brancoProduto").css("display", "flex");
					}
					if (cinza.checked == true) {
						$(".faixaPreco5.cinzaProduto").css("display", "flex");
					}
					if (laranja.checked == true) {
						$(".faixaPreco5.laranjaProduto").css("display", "flex");
					}
					if (verde.checked == true) {
						$(".faixaPreco5.verdeProduto").css("display", "flex");
					}
					if (vermelho.checked == true) {
						$(".faixaPreco5.vermelhoProduto").css("display", "flex");
					}
					if (preto.checked == true) {
						$(".faixaPreco5.pretoProduto").css("display", "flex");
					}
					if (rosa.checked == true) {
						$(".faixaPreco5.rosaProduto").css("display", "flex");
					}
					if (vinho.checked == true) {
						$(".faixaPreco5.vinhoProduto").css("display", "flex");
					}
				}
			}
			if (tamanhoP.checked == true) {
				$(".tamanhoM").hide();
				$(".tamanhoG").hide();
				$(".tamanhoGG").hide();
				$(".tamanhoU").hide();
				$(".tamanho36").hide();
				$(".tamanho38").hide();
				$(".tamanho40").hide();
				$(".tamanho42").hide();
				$(".tamanho44").hide();
				$(".tamanho46").hide();
				if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanhoP").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanhoP.faixaPreco1").css("display", "flex");
							if (faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa2.checked == true) {
							$(".tamanhoP.faixaPreco2").css("display", "flex");
							if (faixa1.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa3.checked == true) {
							$(".tamanhoP.faixaPreco3").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa4.checked == true) {
							$(".tamanhoP.faixaPreco4").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa5.checked == true) {
							$(".tamanhoP.faixaPreco5").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
							}
						}
					}
				}
				if (amarelo.checked == true) {
					$(".tamanhoP.amareloProduto").css("display", "flex");
				}
				if (azul.checked == true) {
					$(".tamanhoP.azulProduto").css("display", "flex");
				}
				if (branco.checked == true) {
					$(".tamanhoP.brancoProduto").css("display", "flex");
				}
				if (cinza.checked == true) {
					$(".tamanhoP.cinzaProduto").css("display", "flex");
				}
				if (laranja.checked == true) {
					$(".tamanhoP.laranjaProduto").css("display", "flex");
				}
				if (verde.checked == true) {
					$(".tamanhoP.verdeProduto").css("display", "flex");
				}
				if (vermelho.checked == true) {
					$(".tamanhoP.vermelhoProduto").css("display", "flex");
				}
				if (preto.checked == true) {
					$(".tamanhoP.pretoProduto").css("display", "flex");
				}
				if (rosa.checked == true) {
					$(".tamanhoP.rosaProduto").css("display", "flex");
				}
				if (vinho.checked == true) {
					$(".tamanhoP.vinhoProduto").css("display", "flex");
				}
			}
			if (tamanhoM.checked == true) {
				$(".tamanhoP").hide();
				$(".tamanhoG").hide();
				$(".tamanhoGG").hide();
				$(".tamanhoU").hide();
				$(".tamanho36").hide();
				$(".tamanho38").hide();
				$(".tamanho40").hide();
				$(".tamanho42").hide();
				$(".tamanho44").hide();
				$(".tamanho46").hide();
				if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanhoM").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanhoM.faixaPreco1").css("display", "flex");
							if (faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa2.checked == true) {
							$(".tamanhoM.faixaPreco2").css("display", "flex");
							if (faixa1.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa3.checked == true) {
							$(".tamanhoM.faixaPreco3").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa4.checked == true) {
							$(".tamanhoM.faixaPreco4").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa5.checked == true) {
							$(".tamanhoM.faixaPreco5").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
							}
						}
					}
				}
				if (amarelo.checked == true) {
					$(".tamanhoM.amareloProduto").css("display", "flex");
				}
				if (azul.checked == true) {
					$(".tamanhoM.azulProduto").css("display", "flex");
				}
				if (branco.checked == true) {
					$(".tamanhoM.brancoProduto").css("display", "flex");
				}
				if (cinza.checked == true) {
					$(".tamanhoM.cinzaProduto").css("display", "flex");
				}
				if (laranja.checked == true) {
					$(".tamanhoM.laranjaProduto").css("display", "flex");
				}
				if (verde.checked == true) {
					$(".tamanhoM.verdeProduto").css("display", "flex");
				}
				if (vermelho.checked == true) {
					$(".tamanhoM.vermelhoProduto").css("display", "flex");
				}
				if (preto.checked == true) {
					$(".tamanhoM.pretoProduto").css("display", "flex");
				}
				if (rosa.checked == true) {
					$(".tamanhoM.rosaProduto").css("display", "flex");
				}
				if (vinho.checked == true) {
					$(".tamanhoM.vinhoProduto").css("display", "flex");
				}
			}
			if (tamanhoG.checked == true) {
				$(".tamanhoP").hide();
				$(".tamanhoM").hide();
				$(".tamanhoGG").hide();
				$(".tamanhoU").hide();
				$(".tamanho36").hide();
				$(".tamanho38").hide();
				$(".tamanho40").hide();
				$(".tamanho42").hide();
				$(".tamanho44").hide();
				$(".tamanho46").hide();
				if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanhoG").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanhoG.faixaPreco1").css("display", "flex");
							if (faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa2.checked == true) {
							$(".tamanhoG.faixaPreco2").css("display", "flex");
							if (faixa1.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa3.checked == true) {
							$(".tamanhoG.faixaPreco3").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa4.checked == true) {
							$(".tamanhoG.faixaPreco4").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa5.checked == true) {
							$(".tamanhoG.faixaPreco5").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
							}
						}
					}
				}
				if (amarelo.checked == true) {
					$(".tamanhoG.amareloProduto").css("display", "flex");
				}
				if (azul.checked == true) {
					$(".tamanhoG.azulProduto").css("display", "flex");
				}
				if (branco.checked == true) {
					$(".tamanhoG.brancoProduto").css("display", "flex");
				}
				if (cinza.checked == true) {
					$(".tamanhoG.cinzaProduto").css("display", "flex");
				}
				if (laranja.checked == true) {
					$(".tamanhoG.laranjaProduto").css("display", "flex");
				}
				if (verde.checked == true) {
					$(".tamanhoG.verdeProduto").css("display", "flex");
				}
				if (vermelho.checked == true) {
					$(".tamanhoG.vermelhoProduto").css("display", "flex");
				}
				if (preto.checked == true) {
					$(".tamanhoG.pretoProduto").css("display", "flex");
				}
				if (rosa.checked == true) {
					$(".tamanhoG.rosaProduto").css("display", "flex");
				}
				if (vinho.checked == true) {
					$(".tamanhoG.vinhoProduto").css("display", "flex");
				}
			}
			if (tamanhoGG.checked == true) {
				$(".tamanhoP").hide();
				$(".tamanhoM").hide();
				$(".tamanhoG").hide();
				$(".tamanhoU").hide();
				$(".tamanho36").hide();
				$(".tamanho38").hide();
				$(".tamanho40").hide();
				$(".tamanho42").hide();
				$(".tamanho44").hide();
				$(".tamanho46").hide();
				if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanhoGG").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanhoGG.faixaPreco1").css("display", "flex");
							if (faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa2.checked == true) {
							$(".tamanhoGG.faixaPreco2").css("display", "flex");
							if (faixa1.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa3.checked == true) {
							$(".tamanhoGG.faixaPreco3").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa4.checked == true) {
							$(".tamanhoGG.faixaPreco4").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa5.checked == true) {
							$(".tamanhoGG.faixaPreco5").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
							}
						}
					}
				}
				if (amarelo.checked == true) {
					$(".tamanhoGG.amareloProduto").css("display", "flex");
				}
				if (azul.checked == true) {
					$(".tamanhoGG.azulProduto").css("display", "flex");
				}
				if (branco.checked == true) {
					$(".tamanhoGG.brancoProduto").css("display", "flex");
				}
				if (cinza.checked == true) {
					$(".tamanhoGG.cinzaProduto").css("display", "flex");
				}
				if (laranja.checked == true) {
					$(".tamanhoGG.laranjaProduto").css("display", "flex");
				}
				if (verde.checked == true) {
					$(".tamanhoGG.verdeProduto").css("display", "flex");
				}
				if (vermelho.checked == true) {
					$(".tamanhoGG.vermelhoProduto").css("display", "flex");
				}
				if (preto.checked == true) {
					$(".tamanhoGG.pretoProduto").css("display", "flex");
				}
				if (rosa.checked == true) {
					$(".tamanhoGG.rosaProduto").css("display", "flex");
				}
				if (vinho.checked == true) {
					$(".tamanhoGG.vinhoProduto").css("display", "flex");
				}
			}
			if (tamanhoU.checked == true) {
				$(".tamanhoP").hide();
				$(".tamanhoM").hide();
				$(".tamanhoG").hide();
				$(".tamanhoGG").hide();
				$(".tamanho36").hide();
				$(".tamanho38").hide();
				$(".tamanho40").hide();
				$(".tamanho42").hide();
				$(".tamanho44").hide();
				$(".tamanho46").hide();
				if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanhoU").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanhoU.faixaPreco1").css("display", "flex");
							if (faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa2.checked == true) {
							$(".tamanhoU.faixaPreco2").css("display", "flex");
							if (faixa1.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa3.checked == true) {
							$(".tamanhoU.faixaPreco3").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa4.checked == true) {
							$(".tamanhoU.faixaPreco4").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa5.checked == true) {
							$(".tamanhoU.faixaPreco5").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
							}
						}
					}
				}
				if (amarelo.checked == true) {
					$(".tamanhoU.amareloProduto").css("display", "flex");
				}
				if (azul.checked == true) {
					$(".tamanhoU.azulProduto").css("display", "flex");
				}
				if (branco.checked == true) {
					$(".tamanhoU.brancoProduto").css("display", "flex");
				}
				if (cinza.checked == true) {
					$(".tamanhoU.cinzaProduto").css("display", "flex");
				}
				if (laranja.checked == true) {
					$(".tamanhoU.laranjaProduto").css("display", "flex");
				}
				if (verde.checked == true) {
					$(".tamanhoU.verdeProduto").css("display", "flex");
				}
				if (vermelho.checked == true) {
					$(".tamanhoU.vermelhoProduto").css("display", "flex");
				}
				if (preto.checked == true) {
					$(".tamanhoU.pretoProduto").css("display", "flex");
				}
				if (rosa.checked == true) {
					$(".tamanhoU.rosaProduto").css("display", "flex");
				}
				if (vinho.checked == true) {
					$(".tamanhoU.vinhoProduto").css("display", "flex");
				}
			}
			if (tamanho36.checked == true) {
				$(".tamanhoP").hide();
				$(".tamanhoM").hide();
				$(".tamanhoG").hide();
				$(".tamanhoGG").hide();
				$(".tamanhoU").hide();
				$(".tamanho38").hide();
				$(".tamanho40").hide();
				$(".tamanho42").hide();
				$(".tamanho44").hide();
				$(".tamanho46").hide();
				if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanho36").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanho36.faixaPreco1").css("display", "flex");
							if (faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa2.checked == true) {
							$(".tamanho36.faixaPreco2").css("display", "flex");
							if (faixa1.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa3.checked == true) {
							$(".tamanho36.faixaPreco3").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa4.checked == true) {
							$(".tamanho36.faixaPreco4").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa5.checked == true) {
							$(".tamanho36.faixaPreco5").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
							}
						}
					}
				}
				if (amarelo.checked == true) {
					$(".tamanho36.amareloProduto").css("display", "flex");
				}
				if (azul.checked == true) {
					$(".tamanho36.azulProduto").css("display", "flex");
				}
				if (branco.checked == true) {
					$(".tamanho36.brancoProduto").css("display", "flex");
				}
				if (cinza.checked == true) {
					$(".tamanho36.cinzaProduto").css("display", "flex");
				}
				if (laranja.checked == true) {
					$(".tamanho36.laranjaProduto").css("display", "flex");
				}
				if (verde.checked == true) {
					$(".tamanho36.verdeProduto").css("display", "flex");
				}
				if (vermelho.checked == true) {
					$(".tamanho36.vermelhoProduto").css("display", "flex");
				}
				if (preto.checked == true) {
					$(".tamanho36.pretoProduto").css("display", "flex");
				}
				if (rosa.checked == true) {
					$(".tamanho36.rosaProduto").css("display", "flex");
				}
				if (vinho.checked == true) {
					$(".tamanho36.vinhoProduto").css("display", "flex");
				}
			}
			if (tamanho38.checked == true) {
				$(".tamanhoP").hide();
				$(".tamanhoM").hide();
				$(".tamanhoG").hide();
				$(".tamanhoGG").hide();
				$(".tamanhoU").hide();
				$(".tamanho36").hide();
				$(".tamanho40").hide();
				$(".tamanho42").hide();
				$(".tamanho44").hide();
				$(".tamanho46").hide();
				if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanho38").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanho38.faixaPreco1").css("display", "flex");
							if (faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa2.checked == true) {
							$(".tamanho38.faixaPreco2").css("display", "flex");
							if (faixa1.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa3.checked == true) {
							$(".tamanho38.faixaPreco3").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa4.checked == true) {
							$(".tamanho38.faixaPreco4").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa5.checked == true) {
							$(".tamanho38.faixaPreco5").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
							}
						}
					}
				}
				if (amarelo.checked == true) {
					$(".tamanho38.amareloProduto").css("display", "flex");
				}
				if (azul.checked == true) {
					$(".tamanho38.azulProduto").css("display", "flex");
				}
				if (branco.checked == true) {
					$(".tamanho38.brancoProduto").css("display", "flex");
				}
				if (cinza.checked == true) {
					$(".tamanho38.cinzaProduto").css("display", "flex");
				}
				if (laranja.checked == true) {
					$(".tamanho38.laranjaProduto").css("display", "flex");
				}
				if (verde.checked == true) {
					$(".tamanho38.verdeProduto").css("display", "flex");
				}
				if (vermelho.checked == true) {
					$(".tamanho38.vermelhoProduto").css("display", "flex");
				}
				if (preto.checked == true) {
					$(".tamanho38.pretoProduto").css("display", "flex");
				}
				if (rosa.checked == true) {
					$(".tamanho38.rosaProduto").css("display", "flex");
				}
				if (vinho.checked == true) {
					$(".tamanho38.vinhoProduto").css("display", "flex");
				}
			}
			if (tamanho40.checked == true) {
				$(".tamanhoP").hide();
				$(".tamanhoM").hide();
				$(".tamanhoG").hide();
				$(".tamanhoGG").hide();
				$(".tamanhoU").hide();
				$(".tamanho36").hide();
				$(".tamanho38").hide();
				$(".tamanho42").hide();
				$(".tamanho44").hide();
				$(".tamanho46").hide();
				if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanho40").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanho40.faixaPreco1").css("display", "flex");
							if (faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa2.checked == true) {
							$(".tamanho40.faixaPreco2").css("display", "flex");
							if (faixa1.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa3.checked == true) {
							$(".tamanho40.faixaPreco3").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa4.checked == true) {
							$(".tamanho40.faixaPreco4").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa5.checked == true) {
							$(".tamanho40.faixaPreco5").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
							}
						}
					}
				}
				if (amarelo.checked == true) {
					$(".tamanho40.amareloProduto").css("display", "flex");
				}
				if (azul.checked == true) {
					$(".tamanho40.azulProduto").css("display", "flex");
				}
				if (branco.checked == true) {
					$(".tamanho40.brancoProduto").css("display", "flex");
				}
				if (cinza.checked == true) {
					$(".tamanho40.cinzaProduto").css("display", "flex");
				}
				if (laranja.checked == true) {
					$(".tamanho40.laranjaProduto").css("display", "flex");
				}
				if (verde.checked == true) {
					$(".tamanho40.verdeProduto").css("display", "flex");
				}
				if (vermelho.checked == true) {
					$(".tamanho40.vermelhoProduto").css("display", "flex");
				}
				if (preto.checked == true) {
					$(".tamanho40.pretoProduto").css("display", "flex");
				}
				if (rosa.checked == true) {
					$(".tamanho40.rosaProduto").css("display", "flex");
				}
				if (vinho.checked == true) {
					$(".tamanho40.vinhoProduto").css("display", "flex");
				}
			}
			if (tamanho42.checked == true) {
				$(".tamanhoP").hide();
				$(".tamanhoM").hide();
				$(".tamanhoG").hide();
				$(".tamanhoGG").hide();
				$(".tamanhoU").hide();
				$(".tamanho36").hide();
				$(".tamanho38").hide();
				$(".tamanho40").hide();
				$(".tamanho44").hide();
				$(".tamanho46").hide();
				if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanho42").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanho42.faixaPreco1").css("display", "flex");
							if (faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa2.checked == true) {
							$(".tamanho42.faixaPreco2").css("display", "flex");
							if (faixa1.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa3.checked == true) {
							$(".tamanho42.faixaPreco3").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa4.checked == true) {
							$(".tamanho42.faixaPreco4").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa5.checked == true) {
							$(".tamanho42.faixaPreco5").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
							}
						}
					}
				}
				if (amarelo.checked == true) {
					$(".tamanho42.amareloProduto").css("display", "flex");
				}
				if (azul.checked == true) {
					$(".tamanho42.azulProduto").css("display", "flex");
				}
				if (branco.checked == true) {
					$(".tamanho42.brancoProduto").css("display", "flex");
				}
				if (cinza.checked == true) {
					$(".tamanho42.cinzaProduto").css("display", "flex");
				}
				if (laranja.checked == true) {
					$(".tamanho42.laranjaProduto").css("display", "flex");
				}
				if (verde.checked == true) {
					$(".tamanho42.verdeProduto").css("display", "flex");
				}
				if (vermelho.checked == true) {
					$(".tamanho42.vermelhoProduto").css("display", "flex");
				}
				if (preto.checked == true) {
					$(".tamanho42.pretoProduto").css("display", "flex");
				}
				if (rosa.checked == true) {
					$(".tamanho42.rosaProduto").css("display", "flex");
				}
				if (vinho.checked == true) {
					$(".tamanho42.vinhoProduto").css("display", "flex");
				}
			}
			if (tamanho44.checked == true) {
				$(".tamanhoP").hide();
				$(".tamanhoM").hide();
				$(".tamanhoG").hide();
				$(".tamanhoGG").hide();
				$(".tamanhoU").hide();
				$(".tamanho36").hide();
				$(".tamanho38").hide();
				$(".tamanho40").hide();
				$(".tamanho42").hide();
				$(".tamanho46").hide();
				if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanho44").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanho44.faixaPreco1").css("display", "flex");
							if (faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa2.checked == true) {
							$(".tamanho44.faixaPreco2").css("display", "flex");
							if (faixa1.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa3.checked == true) {
							$(".tamanho44.faixaPreco3").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa4.checked == true) {
							$(".tamanho44.faixaPreco4").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa5.checked == true) {
							$(".tamanho44.faixaPreco5").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
							}
						}
					}
				}
				if (amarelo.checked == true) {
					$(".tamanho44.amareloProduto").css("display", "flex");
				}
				if (azul.checked == true) {
					$(".tamanho44.azulProduto").css("display", "flex");
				}
				if (branco.checked == true) {
					$(".tamanho44.brancoProduto").css("display", "flex");
				}
				if (cinza.checked == true) {
					$(".tamanho44.cinzaProduto").css("display", "flex");
				}
				if (laranja.checked == true) {
					$(".tamanho44.laranjaProduto").css("display", "flex");
				}
				if (verde.checked == true) {
					$(".tamanho44.verdeProduto").css("display", "flex");
				}
				if (vermelho.checked == true) {
					$(".tamanho44.vermelhoProduto").css("display", "flex");
				}
				if (preto.checked == true) {
					$(".tamanho44.pretoProduto").css("display", "flex");
				}
				if (rosa.checked == true) {
					$(".tamanho44.rosaProduto").css("display", "flex");
				}
				if (vinho.checked == true) {
					$(".tamanho44.vinhoProduto").css("display", "flex");
				}
			}
			if (tamanho46.checked == true) {
				$(".tamanhoP").hide();
				$(".tamanhoM").hide();
				$(".tamanhoG").hide();
				$(".tamanhoGG").hide();
				$(".tamanhoU").hide();
				$(".tamanho36").hide();
				$(".tamanho38").hide();
				$(".tamanho40").hide();
				$(".tamanho42").hide();
				$(".tamanho44").hide();
				if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanho46").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanho46.faixaPreco1").css("display", "flex");
							if (faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa2.checked == true) {
							$(".tamanho46.faixaPreco2").css("display", "flex");
							if (faixa1.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa3.checked == true) {
							$(".tamanho46.faixaPreco3").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa4.checked == true) {
							$(".tamanho46.faixaPreco4").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa5.checked == true) {
							$(".tamanho46.faixaPreco5").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
							}
						}
					}
				}
				if (amarelo.checked == true) {
					$(".tamanho46.amareloProduto").css("display", "flex");
				}
				if (azul.checked == true) {
					$(".tamanho46.azulProduto").css("display", "flex");
				}
				if (branco.checked == true) {
					$(".tamanho46.brancoProduto").css("display", "flex");
				}
				if (cinza.checked == true) {
					$(".tamanho46.cinzaProduto").css("display", "flex");
				}
				if (laranja.checked == true) {
					$(".tamanho46.laranjaProduto").css("display", "flex");
				}
				if (verde.checked == true) {
					$(".tamanho46.verdeProduto").css("display", "flex");
				}
				if (vermelho.checked == true) {
					$(".tamanho46.vermelhoProduto").css("display", "flex");
				}
				if (preto.checked == true) {
					$(".tamanho46.pretoProduto").css("display", "flex");
				}
				if (rosa.checked == true) {
					$(".tamanho46.rosaProduto").css("display", "flex");
				}
				if (vinho.checked == true) {
					$(".tamanho46.vinhoProduto").css("display", "flex");
				}
			}
		}
	})

	// Filtro tamanho
	$("#tamanho_1").click(function () {
		if (tamanhoP.checked == true) {
			$(".tamanhoM").hide();
			$(".tamanhoG").hide();
			$(".tamanhoGG").hide();
			$(".tamanhoU").hide();
			$(".tamanho36").hide();
			$(".tamanho38").hide();
			$(".tamanho40").hide();
			$(".tamanho42").hide();
			$(".tamanho44").hide();
			$(".tamanho46").hide();
			if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
				if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
					$(".tamanhoP").css("display", "flex");
				} else {
					if (faixa1.checked == true) {
						$(".tamanhoP.faixaPreco1").css("display", "flex");
					}
					if (faixa2.checked == true) {
						$(".tamanhoP.faixaPreco2").css("display", "flex");
					}
					if (faixa3.checked == true) {
						$(".tamanhoP.faixaPreco3").css("display", "flex");
					}
					if (faixa4.checked == true) {
						$(".tamanhoP.faixaPreco4").css("display", "flex");
					}
					if (faixa5.checked == true) {
						$(".tamanhoP.faixaPreco5").css("display", "flex");
					}
				}
			}
			if (amarelo.checked == true) {
				$(".tamanhoP.amareloProduto").css("display", "flex");
			}
			if (azul.checked == true) {
				$(".tamanhoP.azulProduto").css("display", "flex");
			}
			if (branco.checked == true) {
				$(".tamanhoP.brancoProduto").css("display", "flex");
			}
			if (cinza.checked == true) {
				$(".tamanhoP.cinzaProduto").css("display", "flex");
			}
			if (laranja.checked == true) {
				$(".tamanhoP.laranjaProduto").css("display", "flex");
			}
			if (verde.checked == true) {
				$(".tamanhoP.verdeProduto").css("display", "flex");
			}
			if (vermelho.checked == true) {
				$(".tamanhoP.vermelhoProduto").css("display", "flex");
			}
			if (preto.checked == true) {
				$(".tamanhoP.pretoProduto").css("display", "flex");
			}
			if (rosa.checked == true) {
				$(".tamanhoP.rosaProduto").css("display", "flex");
			}
			if (vinho.checked == true) {
				$(".tamanhoP.vinhoProduto").css("display", "flex");
			}
		}
	})

	$("#tamanho_2").click(function () {
		if (tamanhoM.checked == true) {
			$(".tamanhoP").hide();
			$(".tamanhoG").hide();
			$(".tamanhoGG").hide();
			$(".tamanhoU").hide();
			$(".tamanho36").hide();
			$(".tamanho38").hide();
			$(".tamanho40").hide();
			$(".tamanho42").hide();
			$(".tamanho44").hide();
			$(".tamanho46").hide();
			if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
				if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
					$(".tamanhoM").css("display", "flex");
				} else {
					if (faixa1.checked == true) {
						$(".tamanhoM.faixaPreco1").css("display", "flex");
					}
					if (faixa2.checked == true) {
						$(".tamanhoM.faixaPreco2").css("display", "flex");
					}
					if (faixa3.checked == true) {
						$(".tamanhoM.faixaPreco3").css("display", "flex");
					}
					if (faixa4.checked == true) {
						$(".tamanhoM.faixaPreco4").css("display", "flex");
					}
					if (faixa5.checked == true) {
						$(".tamanhoM.faixaPreco5").css("display", "flex");
					}
				}
			}
			if (amarelo.checked == true) {
				$(".tamanhoM.amareloProduto").css("display", "flex");
			}
			if (azul.checked == true) {
				$(".tamanhoM.azulProduto").css("display", "flex");
			}
			if (branco.checked == true) {
				$(".tamanhoM.brancoProduto").css("display", "flex");
			}
			if (cinza.checked == true) {
				$(".tamanhoM.cinzaProduto").css("display", "flex");
			}
			if (laranja.checked == true) {
				$(".tamanhoM.laranjaProduto").css("display", "flex");
			}
			if (verde.checked == true) {
				$(".tamanhoM.verdeProduto").css("display", "flex");
			}
			if (vermelho.checked == true) {
				$(".tamanhoM.vermelhoProduto").css("display", "flex");
			}
			if (preto.checked == true) {
				$(".tamanhoM.pretoProduto").css("display", "flex");
			}
			if (rosa.checked == true) {
				$(".tamanhoM.rosaProduto").css("display", "flex");
			}
			if (vinho.checked == true) {
				$(".tamanhoM.vinhoProduto").css("display", "flex");
			}
		}
	})

	$("#tamanho_3").click(function () {
		if (tamanhoG.checked == true) {
			$(".tamanhoP").hide();
			$(".tamanhoM").hide();
			$(".tamanhoGG").hide();
			$(".tamanhoU").hide();
			$(".tamanho36").hide();
			$(".tamanho38").hide();
			$(".tamanho40").hide();
			$(".tamanho42").hide();
			$(".tamanho44").hide();
			$(".tamanho46").hide();
			if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
				if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
					$(".tamanhoG").css("display", "flex");
				} else {
					if (faixa1.checked == true) {
						$(".tamanhoG.faixaPreco1").css("display", "flex");
					}
					if (faixa2.checked == true) {
						$(".tamanhoG.faixaPreco2").css("display", "flex");
					}
					if (faixa3.checked == true) {
						$(".tamanhoG.faixaPreco3").css("display", "flex");
					}
					if (faixa4.checked == true) {
						$(".tamanhoG.faixaPreco4").css("display", "flex");
					}
					if (faixa5.checked == true) {
						$(".tamanhoG.faixaPreco5").css("display", "flex");
					}
				}
			}
			if (amarelo.checked == true) {
				$(".tamanhoG.amareloProduto").css("display", "flex");
			}
			if (azul.checked == true) {
				$(".tamanhoG.azulProduto").css("display", "flex");
			}
			if (branco.checked == true) {
				$(".tamanhoG.brancoProduto").css("display", "flex");
			}
			if (cinza.checked == true) {
				$(".tamanhoG.cinzaProduto").css("display", "flex");
			}
			if (laranja.checked == true) {
				$(".tamanhoG.laranjaProduto").css("display", "flex");
			}
			if (verde.checked == true) {
				$(".tamanhoG.verdeProduto").css("display", "flex");
			}
			if (vermelho.checked == true) {
				$(".tamanhoG.vermelhoProduto").css("display", "flex");
			}
			if (preto.checked == true) {
				$(".tamanhoG.pretoProduto").css("display", "flex");
			}
			if (rosa.checked == true) {
				$(".tamanhoG.rosaProduto").css("display", "flex");
			}
			if (vinho.checked == true) {
				$(".tamanhoG.vinhoProduto").css("display", "flex");
			}
		}
	})

	$("#tamanho_4").click(function () {
		if (tamanhoGG.checked == true) {
			$(".tamanhoP").hide();
			$(".tamanhoM").hide();
			$(".tamanhoG").hide();
			$(".tamanhoU").hide();
			$(".tamanho36").hide();
			$(".tamanho38").hide();
			$(".tamanho40").hide();
			$(".tamanho42").hide();
			$(".tamanho44").hide();
			$(".tamanho46").hide();
			if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
				if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
					$(".tamanhoGG").css("display", "flex");
				} else {
					if (faixa1.checked == true) {
						$(".tamanhoGG.faixaPreco1").css("display", "flex");
					}
					if (faixa2.checked == true) {
						$(".tamanhoGG.faixaPreco2").css("display", "flex");
					}
					if (faixa3.checked == true) {
						$(".tamanhoGG.faixaPreco3").css("display", "flex");
					}
					if (faixa4.checked == true) {
						$(".tamanhoGG.faixaPreco4").css("display", "flex");
					}
					if (faixa5.checked == true) {
						$(".tamanhoGG.faixaPreco5").css("display", "flex");
					}
				}
			}
			if (amarelo.checked == true) {
				$(".tamanhoGG.amareloProduto").css("display", "flex");
			}
			if (azul.checked == true) {
				$(".tamanhoGG.azulProduto").css("display", "flex");
			}
			if (branco.checked == true) {
				$(".tamanhoGG.brancoProduto").css("display", "flex");
			}
			if (cinza.checked == true) {
				$(".tamanhoGG.cinzaProduto").css("display", "flex");
			}
			if (laranja.checked == true) {
				$(".tamanhoGG.laranjaProduto").css("display", "flex");
			}
			if (verde.checked == true) {
				$(".tamanhoGG.verdeProduto").css("display", "flex");
			}
			if (vermelho.checked == true) {
				$(".tamanhoGG.vermelhoProduto").css("display", "flex");
			}
			if (preto.checked == true) {
				$(".tamanhoGG.pretoProduto").css("display", "flex");
			}
			if (rosa.checked == true) {
				$(".tamanhoGG.rosaProduto").css("display", "flex");
			}
			if (vinho.checked == true) {
				$(".tamanhoGG.vinhoProduto").css("display", "flex");
			}
		}
	})

	$("#tamanho_5").click(function () {
		if (tamanhoU.checked == true) {
			$(".tamanhoP").hide();
			$(".tamanhoM").hide();
			$(".tamanhoG").hide();
			$(".tamanhoGG").hide();
			$(".tamanho36").hide();
			$(".tamanho38").hide();
			$(".tamanho40").hide();
			$(".tamanho42").hide();
			$(".tamanho44").hide();
			$(".tamanho46").hide();
			if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
				if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
					$(".tamanhoU").css("display", "flex");
				} else {
					if (faixa1.checked == true) {
						$(".tamanhoU.faixaPreco1").css("display", "flex");
					}
					if (faixa2.checked == true) {
						$(".tamanhoU.faixaPreco2").css("display", "flex");
					}
					if (faixa3.checked == true) {
						$(".tamanhoU.faixaPreco3").css("display", "flex");
					}
					if (faixa4.checked == true) {
						$(".tamanhoU.faixaPreco4").css("display", "flex");
					}
					if (faixa5.checked == true) {
						$(".tamanhoU.faixaPreco5").css("display", "flex");
					}
				}
			}
			if (amarelo.checked == true) {
				$(".tamanhoU.amareloProduto").css("display", "flex");
			}
			if (azul.checked == true) {
				$(".tamanhoU.azulProduto").css("display", "flex");
			}
			if (branco.checked == true) {
				$(".tamanhoU.brancoProduto").css("display", "flex");
			}
			if (cinza.checked == true) {
				$(".tamanhoU.cinzaProduto").css("display", "flex");
			}
			if (laranja.checked == true) {
				$(".tamanhoU.laranjaProduto").css("display", "flex");
			}
			if (verde.checked == true) {
				$(".tamanhoU.verdeProduto").css("display", "flex");
			}
			if (vermelho.checked == true) {
				$(".tamanhoU.vermelhoProduto").css("display", "flex");
			}
			if (preto.checked == true) {
				$(".tamanhoU.pretoProduto").css("display", "flex");
			}
			if (rosa.checked == true) {
				$(".tamanhoU.rosaProduto").css("display", "flex");
			}
			if (vinho.checked == true) {
				$(".tamanhoU.vinhoProduto").css("display", "flex");
			}
		}
	})

	$("#tamanho_6").click(function () {
		if (tamanho36.checked == true) {
			$(".tamanhoP").hide();
			$(".tamanhoM").hide();
			$(".tamanhoG").hide();
			$(".tamanhoGG").hide();
			$(".tamanhoU").hide();
			$(".tamanho38").hide();
			$(".tamanho40").hide();
			$(".tamanho42").hide();
			$(".tamanho44").hide();
			$(".tamanho46").hide();
			if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
				if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
					$(".tamanho36").css("display", "flex");
				} else {
					if (faixa1.checked == true) {
						$(".tamanho36.faixaPreco1").css("display", "flex");
					}
					if (faixa2.checked == true) {
						$(".tamanho36.faixaPreco2").css("display", "flex");
					}
					if (faixa3.checked == true) {
						$(".tamanho36.faixaPreco3").css("display", "flex");
					}
					if (faixa4.checked == true) {
						$(".tamanho36.faixaPreco4").css("display", "flex");
					}
					if (faixa5.checked == true) {
						$(".tamanho36.faixaPreco5").css("display", "flex");
					}
				}
			}
			if (amarelo.checked == true) {
				$(".tamanho36.amareloProduto").css("display", "flex");
			}
			if (azul.checked == true) {
				$(".tamanho36.azulProduto").css("display", "flex");
			}
			if (branco.checked == true) {
				$(".tamanho36.brancoProduto").css("display", "flex");
			}
			if (cinza.checked == true) {
				$(".tamanho36.cinzaProduto").css("display", "flex");
			}
			if (laranja.checked == true) {
				$(".tamanho36.laranjaProduto").css("display", "flex");
			}
			if (verde.checked == true) {
				$(".tamanho36.verdeProduto").css("display", "flex");
			}
			if (vermelho.checked == true) {
				$(".tamanho36.vermelhoProduto").css("display", "flex");
			}
			if (preto.checked == true) {
				$(".tamanho36.pretoProduto").css("display", "flex");
			}
			if (rosa.checked == true) {
				$(".tamanho36.rosaProduto").css("display", "flex");
			}
			if (vinho.checked == true) {
				$(".tamanho36.vinhoProduto").css("display", "flex");
			}
		}
	})

	$("#tamanho_7").click(function () {
		if (tamanho38.checked == true) {
			$(".tamanhoP").hide();
			$(".tamanhoM").hide();
			$(".tamanhoG").hide();
			$(".tamanhoGG").hide();
			$(".tamanhoU").hide();
			$(".tamanho36").hide();
			$(".tamanho40").hide();
			$(".tamanho42").hide();
			$(".tamanho44").hide();
			$(".tamanho46").hide();
			if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
				if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
					$(".tamanho38").css("display", "flex");
				} else {
					if (faixa1.checked == true) {
						$(".tamanho38.faixaPreco1").css("display", "flex");
					}
					if (faixa2.checked == true) {
						$(".tamanho38.faixaPreco2").css("display", "flex");
					}
					if (faixa3.checked == true) {
						$(".tamanho38.faixaPreco3").css("display", "flex");
					}
					if (faixa4.checked == true) {
						$(".tamanho38.faixaPreco4").css("display", "flex");
					}
					if (faixa5.checked == true) {
						$(".tamanho38.faixaPreco5").css("display", "flex");
					}
				}
			}
			if (amarelo.checked == true) {
				$(".tamanho38.amareloProduto").css("display", "flex");
			}
			if (azul.checked == true) {
				$(".tamanho38.azulProduto").css("display", "flex");
			}
			if (branco.checked == true) {
				$(".tamanho38.brancoProduto").css("display", "flex");
			}
			if (cinza.checked == true) {
				$(".tamanho38.cinzaProduto").css("display", "flex");
			}
			if (laranja.checked == true) {
				$(".tamanho38.laranjaProduto").css("display", "flex");
			}
			if (verde.checked == true) {
				$(".tamanho38.verdeProduto").css("display", "flex");
			}
			if (vermelho.checked == true) {
				$(".tamanho38.vermelhoProduto").css("display", "flex");
			}
			if (preto.checked == true) {
				$(".tamanho38.pretoProduto").css("display", "flex");
			}
			if (rosa.checked == true) {
				$(".tamanho38.rosaProduto").css("display", "flex");
			}
			if (vinho.checked == true) {
				$(".tamanho38.vinhoProduto").css("display", "flex");
			}
		}
	})

	$("#tamanho_8").click(function () {
		if (tamanho40.checked == true) {
			$(".tamanhoP").hide();
			$(".tamanhoM").hide();
			$(".tamanhoG").hide();
			$(".tamanhoGG").hide();
			$(".tamanhoU").hide();
			$(".tamanho36").hide();
			$(".tamanho38").hide();
			$(".tamanho42").hide();
			$(".tamanho44").hide();
			$(".tamanho46").hide();
			if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
				if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
					$(".tamanho40").css("display", "flex");
				} else {
					if (faixa1.checked == true) {
						$(".tamanho40.faixaPreco1").css("display", "flex");
					}
					if (faixa2.checked == true) {
						$(".tamanho40.faixaPreco2").css("display", "flex");
					}
					if (faixa3.checked == true) {
						$(".tamanho40.faixaPreco3").css("display", "flex");
					}
					if (faixa4.checked == true) {
						$(".tamanho40.faixaPreco4").css("display", "flex");
					}
					if (faixa5.checked == true) {
						$(".tamanho40.faixaPreco5").css("display", "flex");
					}
				}
			}
			if (amarelo.checked == true) {
				$(".tamanho40.amareloProduto").css("display", "flex");
			}
			if (azul.checked == true) {
				$(".tamanho40.azulProduto").css("display", "flex");
			}
			if (branco.checked == true) {
				$(".tamanho40.brancoProduto").css("display", "flex");
			}
			if (cinza.checked == true) {
				$(".tamanho40.cinzaProduto").css("display", "flex");
			}
			if (laranja.checked == true) {
				$(".tamanho40.laranjaProduto").css("display", "flex");
			}
			if (verde.checked == true) {
				$(".tamanho40.verdeProduto").css("display", "flex");
			}
			if (vermelho.checked == true) {
				$(".tamanho40.vermelhoProduto").css("display", "flex");
			}
			if (preto.checked == true) {
				$(".tamanho40.pretoProduto").css("display", "flex");
			}
			if (rosa.checked == true) {
				$(".tamanho40.rosaProduto").css("display", "flex");
			}
			if (vinho.checked == true) {
				$(".tamanho40.vinhoProduto").css("display", "flex");
			}
		}
	})

	$("#tamanho_9").click(function () {
		if (tamanho42.checked == true) {
			$(".tamanhoP").hide();
			$(".tamanhoM").hide();
			$(".tamanhoG").hide();
			$(".tamanhoGG").hide();
			$(".tamanhoU").hide();
			$(".tamanho36").hide();
			$(".tamanho38").hide();
			$(".tamanho40").hide();
			$(".tamanho44").hide();
			$(".tamanho46").hide();
			if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
				if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
					$(".tamanho42").css("display", "flex");
				} else {
					if (faixa1.checked == true) {
						$(".tamanho42.faixaPreco1").css("display", "flex");
					}
					if (faixa2.checked == true) {
						$(".tamanho42.faixaPreco2").css("display", "flex");
					}
					if (faixa3.checked == true) {
						$(".tamanho42.faixaPreco3").css("display", "flex");
					}
					if (faixa4.checked == true) {
						$(".tamanho42.faixaPreco4").css("display", "flex");
					}
					if (faixa5.checked == true) {
						$(".tamanho42.faixaPreco5").css("display", "flex");
					}
				}
			}
			if (amarelo.checked == true) {
				$(".tamanho42.amareloProduto").css("display", "flex");
			}
			if (azul.checked == true) {
				$(".tamanho42.azulProduto").css("display", "flex");
			}
			if (branco.checked == true) {
				$(".tamanho42.brancoProduto").css("display", "flex");
			}
			if (cinza.checked == true) {
				$(".tamanho42.cinzaProduto").css("display", "flex");
			}
			if (laranja.checked == true) {
				$(".tamanho42.laranjaProduto").css("display", "flex");
			}
			if (verde.checked == true) {
				$(".tamanho42.verdeProduto").css("display", "flex");
			}
			if (vermelho.checked == true) {
				$(".tamanho42.vermelhoProduto").css("display", "flex");
			}
			if (preto.checked == true) {
				$(".tamanho42.pretoProduto").css("display", "flex");
			}
			if (rosa.checked == true) {
				$(".tamanho42.rosaProduto").css("display", "flex");
			}
			if (vinho.checked == true) {
				$(".tamanho42.vinhoProduto").css("display", "flex");
			}
		}
	})

	$("#tamanho_10").click(function () {
		if (tamanho44.checked == true) {
			$(".tamanhoP").hide();
			$(".tamanhoM").hide();
			$(".tamanhoG").hide();
			$(".tamanhoGG").hide();
			$(".tamanhoU").hide();
			$(".tamanho36").hide();
			$(".tamanho38").hide();
			$(".tamanho40").hide();
			$(".tamanho42").hide();
			$(".tamanho46").hide();
			if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
				if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
					$(".tamanho44").css("display", "flex");
				} else {
					if (faixa1.checked == true) {
						$(".tamanho44.faixaPreco1").css("display", "flex");
					}
					if (faixa2.checked == true) {
						$(".tamanho44.faixaPreco2").css("display", "flex");
					}
					if (faixa3.checked == true) {
						$(".tamanho44.faixaPreco3").css("display", "flex");
					}
					if (faixa4.checked == true) {
						$(".tamanho44.faixaPreco4").css("display", "flex");
					}
					if (faixa5.checked == true) {
						$(".tamanho44.faixaPreco5").css("display", "flex");
					}
				}
			}
			if (amarelo.checked == true) {
				$(".tamanho44.amareloProduto").css("display", "flex");
			}
			if (azul.checked == true) {
				$(".tamanho44.azulProduto").css("display", "flex");
			}
			if (branco.checked == true) {
				$(".tamanho44.brancoProduto").css("display", "flex");
			}
			if (cinza.checked == true) {
				$(".tamanho44.cinzaProduto").css("display", "flex");
			}
			if (laranja.checked == true) {
				$(".tamanho44.laranjaProduto").css("display", "flex");
			}
			if (verde.checked == true) {
				$(".tamanho44.verdeProduto").css("display", "flex");
			}
			if (vermelho.checked == true) {
				$(".tamanho44.vermelhoProduto").css("display", "flex");
			}
			if (preto.checked == true) {
				$(".tamanho44.pretoProduto").css("display", "flex");
			}
			if (rosa.checked == true) {
				$(".tamanho44.rosaProduto").css("display", "flex");
			}
			if (vinho.checked == true) {
				$(".tamanho44.vinhoProduto").css("display", "flex");
			}
		}
	})

	$("#tamanho_11").click(function () {
		if (tamanho46.checked == true) {
			$(".tamanhoP").hide();
			$(".tamanhoM").hide();
			$(".tamanhoG").hide();
			$(".tamanhoGG").hide();
			$(".tamanhoU").hide();
			$(".tamanho36").hide();
			$(".tamanho38").hide();
			$(".tamanho40").hide();
			$(".tamanho42").hide();
			$(".tamanho44").hide();
			if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
				if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
					$(".tamanho46").css("display", "flex");
				} else {
					if (faixa1.checked == true) {
						$(".tamanho46.faixaPreco1").css("display", "flex");
					}
					if (faixa2.checked == true) {
						$(".tamanho46.faixaPreco2").css("display", "flex");
					}
					if (faixa3.checked == true) {
						$(".tamanho46.faixaPreco3").css("display", "flex");
					}
					if (faixa4.checked == true) {
						$(".tamanho46.faixaPreco4").css("display", "flex");
					}
					if (faixa5.checked == true) {
						$(".tamanho46.faixaPreco5").css("display", "flex");
					}
				}
			}
			if (amarelo.checked == true) {
				$(".tamanho46.amareloProduto").css("display", "flex");
			}
			if (azul.checked == true) {
				$(".tamanho46.azulProduto").css("display", "flex");
			}
			if (branco.checked == true) {
				$(".tamanho46.brancoProduto").css("display", "flex");
			}
			if (cinza.checked == true) {
				$(".tamanho46.cinzaProduto").css("display", "flex");
			}
			if (laranja.checked == true) {
				$(".tamanho46.laranjaProduto").css("display", "flex");
			}
			if (verde.checked == true) {
				$(".tamanho46.verdeProduto").css("display", "flex");
			}
			if (vermelho.checked == true) {
				$(".tamanho46.vermelhoProduto").css("display", "flex");
			}
			if (preto.checked == true) {
				$(".tamanho46.pretoProduto").css("display", "flex");
			}
			if (rosa.checked == true) {
				$(".tamanho46.rosaProduto").css("display", "flex");
			}
			if (vinho.checked == true) {
				$(".tamanho46.vinhoProduto").css("display", "flex");
			}
		}
	})

	// Filtro preço
	$("#faixa_1").click(function () {
		if (faixa1.checked == true) {
			if (tamanhoP.checked == false && tamanhoM.checked == false && tamanhoG.checked == false && tamanhoGG.checked == false && tamanhoU.checked == false && tamanho36.checked == false && tamanho38.checked == false && tamanho40.checked == false && tamanho42.checked == false && tamanho44.checked == false && tamanho46.checked == false) {
				if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
					$(".faixaPreco1").css("display", "flex");
				}
				if (amarelo.checked == true) {
					$(".amareloProduto.faixaPreco1").css("display", "flex");
				}
				if (azul.checked == true) {
					$(".azulProduto.faixaPreco1").css("display", "flex");
				}
				if (branco.checked == true) {
					$(".brancoProduto.faixaPreco1").css("display", "flex");
				}
				if (cinza.checked == true) {
					$(".cinzaProduto.faixaPreco1").css("display", "flex");
				}
				if (laranja.checked == true) {
					$(".laranjaProduto.faixaPreco1").css("display", "flex");
				}
				if (verde.checked == true) {
					$(".verdeProduto.faixaPreco1").css("display", "flex");
				}
				if (vermelho.checked == true) {
					$(".vermelhoProduto.faixaPreco1").css("display", "flex");
				}
				if (preto.checked == true) {
					$(".pretoProduto.faixaPreco1").css("display", "flex");
				}
				if (rosa.checked == true) {
					$(".rosaProduto.faixaPreco1").css("display", "flex");
				}
				if (vinho.checked == true) {
					$(".vinhoProduto.faixaPreco1").css("display", "flex");
				}
			} else {
				if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
					if (tamanhoP.checked == true) {
						$(".tamanhoP.faixaPreco1").css("display", "flex");
					}
					if (tamanhoM.checked == true) {
						$(".tamanhoM.faixaPreco1").css("display", "flex");
					}
					if (tamanhoG.checked == true) {
						$(".tamanhoG.faixaPreco1").css("display", "flex");
					}
					if (tamanhoGG.checked == true) {
						$(".tamanhoGG.faixaPreco1").css("display", "flex");
					}
					if (tamanhoU.checked == true) {
						$(".tamanhoU.faixaPreco1").css("display", "flex");
					}
					if (tamanho36.checked == true) {
						$(".tamanho36.faixaPreco1").css("display", "flex");
					}
					if (tamanho38.checked == true) {
						$(".tamanho38.faixaPreco1").css("display", "flex");
					}
					if (tamanho40.checked == true) {
						$(".tamanho40.faixaPreco1").css("display", "flex");
					}
					if (tamanho42.checked == true) {
						$(".tamanho42.faixaPreco1").css("display", "flex");
					}
					if (tamanho44.checked == true) {
						$(".tamanho44.faixaPreco1").css("display", "flex");
					}
					if (tamanho46.checked == true) {
						$(".tamanho46.faixaPreco1").css("display", "flex");
					}
				} else {
					if (amarelo.checked == true) {
						if (tamanhoP.checked == true) {
							$(".amareloProduto.tamanhoP.faixaPreco1").css("display", "flex");
						}
						if (tamanhoM.checked == true) {
							$(".amareloProduto.tamanhoM.faixaPreco1").css("display", "flex");
						}
						if (tamanhoG.checked == true) {
							$(".amareloProduto.tamanhoG.faixaPreco1").css("display", "flex");
						}
						if (tamanhoGG.checked == true) {
							$(".amareloProduto.tamanhoGG.faixaPreco1").css("display", "flex");
						}
						if (tamanhoU.checked == true) {
							$(".amareloProduto.tamanhoU.faixaPreco1").css("display", "flex");
						}
						if (tamanho36.checked == true) {
							$(".amareloProduto.tamanho36.faixaPreco1").css("display", "flex");
						}
						if (tamanho38.checked == true) {
							$(".amareloProduto.tamanho38.faixaPreco1").css("display", "flex");
						}
						if (tamanho40.checked == true) {
							$(".amareloProduto.tamanho40.faixaPreco1").css("display", "flex");
						}
						if (tamanho42.checked == true) {
							$(".amareloProduto.tamanho42.faixaPreco1").css("display", "flex");
						}
						if (tamanho44.checked == true) {
							$(".amareloProduto.tamanho44.faixaPreco1").css("display", "flex");
						}
						if (tamanho46.checked == true) {
							$(".amareloProduto.tamanho46.faixaPreco1").css("display", "flex");
						}
					}
					if (azul.checked == true) {
						if (tamanhoP.checked == true) {
							$(".azulProduto.tamanhoP.faixaPreco1").css("display", "flex");
						}
						if (tamanhoM.checked == true) {
							$(".azulProduto.tamanhoM.faixaPreco1").css("display", "flex");
						}
						if (tamanhoG.checked == true) {
							$(".azulProduto.tamanhoG.faixaPreco1").css("display", "flex");
						}
						if (tamanhoGG.checked == true) {
							$(".azulProduto.tamanhoGG.faixaPreco1").css("display", "flex");
						}
						if (tamanhoU.checked == true) {
							$(".azulProduto.tamanhoU.faixaPreco1").css("display", "flex");
						}
						if (tamanho36.checked == true) {
							$(".azulProduto.tamanho36.faixaPreco1").css("display", "flex");
						}
						if (tamanho38.checked == true) {
							$(".azulProduto.tamanho38.faixaPreco1").css("display", "flex");
						}
						if (tamanho40.checked == true) {
							$(".azulProduto.tamanho40.faixaPreco1").css("display", "flex");
						}
						if (tamanho42.checked == true) {
							$(".azulProduto.tamanho42.faixaPreco1").css("display", "flex");
						}
						if (tamanho44.checked == true) {
							$(".azulProduto.tamanho44.faixaPreco1").css("display", "flex");
						}
						if (tamanho46.checked == true) {
							$(".azulProduto.tamanho46.faixaPreco1").css("display", "flex");
						}
					}
					if (branco.checked == true) {
						if (tamanhoP.checked == true) {
							$(".brancoProduto.tamanhoP.faixaPreco1").css("display", "flex");
						}
						if (tamanhoM.checked == true) {
							$(".brancoProduto.tamanhoM.faixaPreco1").css("display", "flex");
						}
						if (tamanhoG.checked == true) {
							$(".brancoProduto.tamanhoG.faixaPreco1").css("display", "flex");
						}
						if (tamanhoGG.checked == true) {
							$(".brancoProduto.tamanhoGG.faixaPreco1").css("display", "flex");
						}
						if (tamanhoU.checked == true) {
							$(".brancoProduto.tamanhoU.faixaPreco1").css("display", "flex");
						}
						if (tamanho36.checked == true) {
							$(".brancoProduto.tamanho36.faixaPreco1").css("display", "flex");
						}
						if (tamanho38.checked == true) {
							$(".brancoProduto.tamanho38.faixaPreco1").css("display", "flex");
						}
						if (tamanho40.checked == true) {
							$(".brancoProduto.tamanho40.faixaPreco1").css("display", "flex");
						}
						if (tamanho42.checked == true) {
							$(".brancoProduto.tamanho42.faixaPreco1").css("display", "flex");
						}
						if (tamanho44.checked == true) {
							$(".brancoProduto.tamanho44.faixaPreco1").css("display", "flex");
						}
						if (tamanho46.checked == true) {
							$(".brancoProduto.tamanho46.faixaPreco1").css("display", "flex");
						}
					}
					if (cinza.checked == true) {
						if (tamanhoP.checked == true) {
							$(".cinzaProduto.tamanhoP.faixaPreco1").css("display", "flex");
						}
						if (tamanhoM.checked == true) {
							$(".cinzaProduto.tamanhoM.faixaPreco1").css("display", "flex");
						}
						if (tamanhoG.checked == true) {
							$(".cinzaProduto.tamanhoG.faixaPreco1").css("display", "flex");
						}
						if (tamanhoGG.checked == true) {
							$(".cinzaProduto.tamanhoGG.faixaPreco1").css("display", "flex");
						}
						if (tamanhoU.checked == true) {
							$(".cinzaProduto.tamanhoU.faixaPreco1").css("display", "flex");
						}
						if (tamanho36.checked == true) {
							$(".cinzaProduto.tamanho36.faixaPreco1").css("display", "flex");
						}
						if (tamanho38.checked == true) {
							$(".cinzaProduto.tamanho38.faixaPreco1").css("display", "flex");
						}
						if (tamanho40.checked == true) {
							$(".cinzaProduto.tamanho40.faixaPreco1").css("display", "flex");
						}
						if (tamanho42.checked == true) {
							$(".cinzaProduto.tamanho42.faixaPreco1").css("display", "flex");
						}
						if (tamanho44.checked == true) {
							$(".cinzaProduto.tamanho44.faixaPreco1").css("display", "flex");
						}
						if (tamanho46.checked == true) {
							$(".cinzaProduto.tamanho46.faixaPreco1").css("display", "flex");
						}
					}
					if (laranja.checked == true) {
						if (tamanhoP.checked == true) {
							$(".laranjaProduto.tamanhoP.faixaPreco1").css("display", "flex");
						}
						if (tamanhoM.checked == true) {
							$(".laranjaProduto.tamanhoM.faixaPreco1").css("display", "flex");
						}
						if (tamanhoG.checked == true) {
							$(".laranjaProduto.tamanhoG.faixaPreco1").css("display", "flex");
						}
						if (tamanhoGG.checked == true) {
							$(".laranjaProduto.tamanhoGG.faixaPreco1").css("display", "flex");
						}
						if (tamanhoU.checked == true) {
							$(".laranjaProduto.tamanhoU.faixaPreco1").css("display", "flex");
						}
						if (tamanho36.checked == true) {
							$(".laranjaProduto.tamanho36.faixaPreco1").css("display", "flex");
						}
						if (tamanho38.checked == true) {
							$(".laranjaProduto.tamanho38.faixaPreco1").css("display", "flex");
						}
						if (tamanho40.checked == true) {
							$(".laranjaProduto.tamanho40.faixaPreco1").css("display", "flex");
						}
						if (tamanho42.checked == true) {
							$(".laranjaProduto.tamanho42.faixaPreco1").css("display", "flex");
						}
						if (tamanho44.checked == true) {
							$(".laranjaProduto.tamanho44.faixaPreco1").css("display", "flex");
						}
						if (tamanho46.checked == true) {
							$(".laranjaProduto.tamanho46.faixaPreco1").css("display", "flex");
						}
					}
					if (verde.checked == true) {
						if (tamanhoP.checked == true) {
							$(".verdeProduto.tamanhoP.faixaPreco1").css("display", "flex");
						}
						if (tamanhoM.checked == true) {
							$(".verdeProduto.tamanhoM.faixaPreco1").css("display", "flex");
						}
						if (tamanhoG.checked == true) {
							$(".verdeProduto.tamanhoG.faixaPreco1").css("display", "flex");
						}
						if (tamanhoGG.checked == true) {
							$(".verdeProduto.tamanhoGG.faixaPreco1").css("display", "flex");
						}
						if (tamanhoU.checked == true) {
							$(".verdeProduto.tamanhoU.faixaPreco1").css("display", "flex");
						}
						if (tamanho36.checked == true) {
							$(".verdeProduto.tamanho36.faixaPreco1").css("display", "flex");
						}
						if (tamanho38.checked == true) {
							$(".verdeProduto.tamanho38.faixaPreco1").css("display", "flex");
						}
						if (tamanho40.checked == true) {
							$(".verdeProduto.tamanho40.faixaPreco1").css("display", "flex");
						}
						if (tamanho42.checked == true) {
							$(".verdeProduto.tamanho42.faixaPreco1").css("display", "flex");
						}
						if (tamanho44.checked == true) {
							$(".verdeProduto.tamanho44.faixaPreco1").css("display", "flex");
						}
						if (tamanho46.checked == true) {
							$(".verdeProduto.tamanho46.faixaPreco1").css("display", "flex");
						}
					}
					if (vermelho.checked == true) {
						if (tamanhoP.checked == true) {
							$(".vermelhoProduto.tamanhoP.faixaPreco1").css("display", "flex");
						}
						if (tamanhoM.checked == true) {
							$(".vermelhoProduto.tamanhoM.faixaPreco1").css("display", "flex");
						}
						if (tamanhoG.checked == true) {
							$(".vermelhoProduto.tamanhoG.faixaPreco1").css("display", "flex");
						}
						if (tamanhoGG.checked == true) {
							$(".vermelhoProduto.tamanhoGG.faixaPreco1").css("display", "flex");
						}
						if (tamanhoU.checked == true) {
							$(".vermelhoProduto.tamanhoU.faixaPreco1").css("display", "flex");
						}
						if (tamanho36.checked == true) {
							$(".vermelhoProduto.tamanho36.faixaPreco1").css("display", "flex");
						}
						if (tamanho38.checked == true) {
							$(".vermelhoProduto.tamanho38.faixaPreco1").css("display", "flex");
						}
						if (tamanho40.checked == true) {
							$(".vermelhoProduto.tamanho40.faixaPreco1").css("display", "flex");
						}
						if (tamanho42.checked == true) {
							$(".vermelhoProduto.tamanho42.faixaPreco1").css("display", "flex");
						}
						if (tamanho44.checked == true) {
							$(".vermelhoProduto.tamanho44.faixaPreco1").css("display", "flex");
						}
						if (tamanho46.checked == true) {
							$(".vermelhoProduto.tamanho46.faixaPreco1").css("display", "flex");
						}
					}
					if (preto.checked == true) {
						if (tamanhoP.checked == true) {
							$(".pretoProduto.tamanhoP.faixaPreco1").css("display", "flex");
						}
						if (tamanhoM.checked == true) {
							$(".pretoProduto.tamanhoM.faixaPreco1").css("display", "flex");
						}
						if (tamanhoG.checked == true) {
							$(".pretoProduto.tamanhoG.faixaPreco1").css("display", "flex");
						}
						if (tamanhoGG.checked == true) {
							$(".pretoProduto.tamanhoGG.faixaPreco1").css("display", "flex");
						}
						if (tamanhoU.checked == true) {
							$(".pretoProduto.tamanhoU.faixaPreco1").css("display", "flex");
						}
						if (tamanho36.checked == true) {
							$(".pretoProduto.tamanho36.faixaPreco1").css("display", "flex");
						}
						if (tamanho38.checked == true) {
							$(".pretoProduto.tamanho38.faixaPreco1").css("display", "flex");
						}
						if (tamanho40.checked == true) {
							$(".pretoProduto.tamanho40.faixaPreco1").css("display", "flex");
						}
						if (tamanho42.checked == true) {
							$(".pretoProduto.tamanho42.faixaPreco1").css("display", "flex");
						}
						if (tamanho44.checked == true) {
							$(".pretoProduto.tamanho44.faixaPreco1").css("display", "flex");
						}
						if (tamanho46.checked == true) {
							$(".pretoProduto.tamanho46.faixaPreco1").css("display", "flex");
						}
					}
					if (rosa.checked == true) {
						if (tamanhoP.checked == true) {
							$(".rosaProduto.tamanhoP.faixaPreco1").css("display", "flex");
						}
						if (tamanhoM.checked == true) {
							$(".rosaProduto.tamanhoM.faixaPreco1").css("display", "flex");
						}
						if (tamanhoG.checked == true) {
							$(".rosaProduto.tamanhoG.faixaPreco1").css("display", "flex");
						}
						if (tamanhoGG.checked == true) {
							$(".rosaProduto.tamanhoGG.faixaPreco1").css("display", "flex");
						}
						if (tamanhoU.checked == true) {
							$(".rosaProduto.tamanhoU.faixaPreco1").css("display", "flex");
						}
						if (tamanho36.checked == true) {
							$(".rosaProduto.tamanho36.faixaPreco1").css("display", "flex");
						}
						if (tamanho38.checked == true) {
							$(".rosaProduto.tamanho38.faixaPreco1").css("display", "flex");
						}
						if (tamanho40.checked == true) {
							$(".rosaProduto.tamanho40.faixaPreco1").css("display", "flex");
						}
						if (tamanho42.checked == true) {
							$(".rosaProduto.tamanho42.faixaPreco1").css("display", "flex");
						}
						if (tamanho44.checked == true) {
							$(".rosaProduto.tamanho44.faixaPreco1").css("display", "flex");
						}
						if (tamanho46.checked == true) {
							$(".rosaProduto.tamanho46.faixaPreco1").css("display", "flex");
						}
					}
					if (vinho.checked == true) {
						if (tamanhoP.checked == true) {
							$(".vinhoProduto.tamanhoP.faixaPreco1").css("display", "flex");
						}
						if (tamanhoM.checked == true) {
							$(".vinhoProduto.tamanhoM.faixaPreco1").css("display", "flex");
						}
						if (tamanhoG.checked == true) {
							$(".vinhoProduto.tamanhoG.faixaPreco1").css("display", "flex");
						}
						if (tamanhoGG.checked == true) {
							$(".vinhoProduto.tamanhoGG.faixaPreco1").css("display", "flex");
						}
						if (tamanhoU.checked == true) {
							$(".vinhoProduto.tamanhoU.faixaPreco1").css("display", "flex");
						}
						if (tamanho36.checked == true) {
							$(".vinhoProduto.tamanho36.faixaPreco1").css("display", "flex");
						}
						if (tamanho38.checked == true) {
							$(".vinhoProduto.tamanho38.faixaPreco1").css("display", "flex");
						}
						if (tamanho40.checked == true) {
							$(".vinhoProduto.tamanho40.faixaPreco1").css("display", "flex");
						}
						if (tamanho42.checked == true) {
							$(".vinhoProduto.tamanho42.faixaPreco1").css("display", "flex");
						}
						if (tamanho44.checked == true) {
							$(".vinhoProduto.tamanho44.faixaPreco1").css("display", "flex");
						}
						if (tamanho46.checked == true) {
							$(".vinhoProduto.tamanho46.faixaPreco1").css("display", "flex");
						}
					}
				}
			}
			if (faixa2.checked == false) {
				$(".faixaPreco2").hide();
			}
			if (faixa3.checked == false) {
				$(".faixaPreco3").hide();
			}
			if (faixa4.checked == false) {
				$(".faixaPreco4").hide();
			}
			if (faixa5.checked == false) {
				$(".faixaPreco5").hide();
			}

		} else {
			$(".faixaPreco1").hide();

			if (tamanhoP.checked == false && tamanhoM.checked == false && tamanhoG.checked == false && tamanhoGG.checked == false && tamanhoU.checked == false && tamanho36.checked == false && tamanho38.checked == false && tamanho40.checked == false && tamanho42.checked == false && tamanho44.checked == false && tamanho46.checked == false) {
				if (faixa1.checked == true) {
					if (faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".faixaPreco2").hide();
						$(".faixaPreco3").hide();
						$(".faixaPreco4").hide();
						$(".faixaPreco5").hide();
					}
					if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
						$(".faixaPreco1").css("display", "flex");
					}
					if (amarelo.checked == true) {
						$(".faixaPreco1.amareloProduto").css("display", "flex");
					}
					if (azul.checked == true) {
						$(".faixaPreco1.azulProduto").css("display", "flex");
					}
					if (branco.checked == true) {
						$(".faixaPreco1.brancoProduto").css("display", "flex");
					}
					if (cinza.checked == true) {
						$(".faixaPreco1.cinzaProduto").css("display", "flex");
					}
					if (laranja.checked == true) {
						$(".faixaPreco1.laranjaProduto").css("display", "flex");
					}
					if (verde.checked == true) {
						$(".faixaPreco1.verdeProduto").css("display", "flex");
					}
					if (vermelho.checked == true) {
						$(".faixaPreco1.vermelhoProduto").css("display", "flex");
					}
					if (preto.checked == true) {
						$(".faixaPreco1.pretoProduto").css("display", "flex");
					}
					if (rosa.checked == true) {
						$(".faixaPreco1.rosaProduto").css("display", "flex");
					}
					if (vinho.checked == true) {
						$(".faixaPreco1.vinhoProduto").css("display", "flex");
					}
				}
				if (faixa2.checked == true) {
					if (faixa1.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".faixaPreco1").hide();
						$(".faixaPreco3").hide();
						$(".faixaPreco4").hide();
						$(".faixaPreco5").hide();
					}
					if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
						$(".faixaPreco2").css("display", "flex");
					}
					if (amarelo.checked == true) {
						$(".faixaPreco2.amareloProduto").css("display", "flex");
					}
					if (azul.checked == true) {
						$(".faixaPreco2.azulProduto").css("display", "flex");
					}
					if (branco.checked == true) {
						$(".faixaPreco2.brancoProduto").css("display", "flex");
					}
					if (cinza.checked == true) {
						$(".faixaPreco2.cinzaProduto").css("display", "flex");
					}
					if (laranja.checked == true) {
						$(".faixaPreco2.laranjaProduto").css("display", "flex");
					}
					if (verde.checked == true) {
						$(".faixaPreco2.verdeProduto").css("display", "flex");
					}
					if (vermelho.checked == true) {
						$(".faixaPreco2.vermelhoProduto").css("display", "flex");
					}
					if (preto.checked == true) {
						$(".faixaPreco2.pretoProduto").css("display", "flex");
					}
					if (rosa.checked == true) {
						$(".faixaPreco2.rosaProduto").css("display", "flex");
					}
					if (vinho.checked == true) {
						$(".faixaPreco2.vinhoProduto").css("display", "flex");
					}
				}
				if (faixa3.checked == true) {
					if (faixa1.checked == false && faixa2.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".faixaPreco1").hide();
						$(".faixaPreco2").hide();
						$(".faixaPreco4").hide();
						$(".faixaPreco5").hide();
					}
					if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
						$(".faixaPreco3").css("display", "flex");
					}
					if (amarelo.checked == true) {
						$(".faixaPreco3.amareloProduto").css("display", "flex");
					}
					if (azul.checked == true) {
						$(".faixaPreco3.azulProduto").css("display", "flex");
					}
					if (branco.checked == true) {
						$(".faixaPreco3.brancoProduto").css("display", "flex");
					}
					if (cinza.checked == true) {
						$(".faixaPreco3.cinzaProduto").css("display", "flex");
					}
					if (laranja.checked == true) {
						$(".faixaPreco3.laranjaProduto").css("display", "flex");
					}
					if (verde.checked == true) {
						$(".faixaPreco3.verdeProduto").css("display", "flex");
					}
					if (vermelho.checked == true) {
						$(".faixaPreco3.vermelhoProduto").css("display", "flex");
					}
					if (preto.checked == true) {
						$(".faixaPreco3.pretoProduto").css("display", "flex");
					}
					if (rosa.checked == true) {
						$(".faixaPreco3.rosaProduto").css("display", "flex");
					}
					if (vinho.checked == true) {
						$(".faixaPreco3.vinhoProduto").css("display", "flex");
					}
				}
				if (faixa4.checked == true) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa5.checked == false) {
						$(".faixaPreco1").hide();
						$(".faixaPreco2").hide();
						$(".faixaPreco3").hide();
						$(".faixaPreco5").hide();
					}
					if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
						$(".faixaPreco4").css("display", "flex");
					}
					if (amarelo.checked == true) {
						$(".faixaPreco4.amareloProduto").css("display", "flex");
					}
					if (azul.checked == true) {
						$(".faixaPreco4.azulProduto").css("display", "flex");
					}
					if (branco.checked == true) {
						$(".faixaPreco4.brancoProduto").css("display", "flex");
					}
					if (cinza.checked == true) {
						$(".faixaPreco4.cinzaProduto").css("display", "flex");
					}
					if (laranja.checked == true) {
						$(".faixaPreco4.laranjaProduto").css("display", "flex");
					}
					if (verde.checked == true) {
						$(".faixaPreco4.verdeProduto").css("display", "flex");
					}
					if (vermelho.checked == true) {
						$(".faixaPreco4.vermelhoProduto").css("display", "flex");
					}
					if (preto.checked == true) {
						$(".faixaPreco4.pretoProduto").css("display", "flex");
					}
					if (rosa.checked == true) {
						$(".faixaPreco4.rosaProduto").css("display", "flex");
					}
					if (vinho.checked == true) {
						$(".faixaPreco4.vinhoProduto").css("display", "flex");
					}
				}
				if (faixa5.checked == true) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false) {
						$(".faixaPreco1").hide();
						$(".faixaPreco2").hide();
						$(".faixaPreco3").hide();
						$(".faixaPreco4").hide();
					}
					if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
						$(".faixaPreco5").css("display", "flex");
					}
					if (amarelo.checked == true) {
						$(".faixaPreco5.amareloProduto").css("display", "flex");
					}
					if (azul.checked == true) {
						$(".faixaPreco5.azulProduto").css("display", "flex");
					}
					if (branco.checked == true) {
						$(".faixaPreco5.brancoProduto").css("display", "flex");
					}
					if (cinza.checked == true) {
						$(".faixaPreco5.cinzaProduto").css("display", "flex");
					}
					if (laranja.checked == true) {
						$(".faixaPreco5.laranjaProduto").css("display", "flex");
					}
					if (verde.checked == true) {
						$(".faixaPreco5.verdeProduto").css("display", "flex");
					}
					if (vermelho.checked == true) {
						$(".faixaPreco5.vermelhoProduto").css("display", "flex");
					}
					if (preto.checked == true) {
						$(".faixaPreco5.pretoProduto").css("display", "flex");
					}
					if (rosa.checked == true) {
						$(".faixaPreco5.rosaProduto").css("display", "flex");
					}
					if (vinho.checked == true) {
						$(".faixaPreco5.vinhoProduto").css("display", "flex");
					}
				}
			}
			if (tamanhoP.checked == true) {
				$(".tamanhoM").hide();
				$(".tamanhoG").hide();
				$(".tamanhoGG").hide();
				$(".tamanhoU").hide();
				$(".tamanho36").hide();
				$(".tamanho38").hide();
				$(".tamanho40").hide();
				$(".tamanho42").hide();
				$(".tamanho44").hide();
				$(".tamanho46").hide();
				if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanhoP").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanhoP.faixaPreco1").css("display", "flex");
							if (faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa2.checked == true) {
							$(".tamanhoP.faixaPreco2").css("display", "flex");
							if (faixa1.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa3.checked == true) {
							$(".tamanhoP.faixaPreco3").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa4.checked == true) {
							$(".tamanhoP.faixaPreco4").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa5.checked == true) {
							$(".tamanhoP.faixaPreco5").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
							}
						}
					}
				}
				if (amarelo.checked == true) {
					$(".tamanhoP.amareloProduto").css("display", "flex");
				}
				if (azul.checked == true) {
					$(".tamanhoP.azulProduto").css("display", "flex");
				}
				if (branco.checked == true) {
					$(".tamanhoP.brancoProduto").css("display", "flex");
				}
				if (cinza.checked == true) {
					$(".tamanhoP.cinzaProduto").css("display", "flex");
				}
				if (laranja.checked == true) {
					$(".tamanhoP.laranjaProduto").css("display", "flex");
				}
				if (verde.checked == true) {
					$(".tamanhoP.verdeProduto").css("display", "flex");
				}
				if (vermelho.checked == true) {
					$(".tamanhoP.vermelhoProduto").css("display", "flex");
				}
				if (preto.checked == true) {
					$(".tamanhoP.pretoProduto").css("display", "flex");
				}
				if (rosa.checked == true) {
					$(".tamanhoP.rosaProduto").css("display", "flex");
				}
				if (vinho.checked == true) {
					$(".tamanhoP.vinhoProduto").css("display", "flex");
				}
			}
			if (tamanhoM.checked == true) {
				$(".tamanhoP").hide();
				$(".tamanhoG").hide();
				$(".tamanhoGG").hide();
				$(".tamanhoU").hide();
				$(".tamanho36").hide();
				$(".tamanho38").hide();
				$(".tamanho40").hide();
				$(".tamanho42").hide();
				$(".tamanho44").hide();
				$(".tamanho46").hide();
				if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanhoM").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanhoM.faixaPreco1").css("display", "flex");
							if (faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa2.checked == true) {
							$(".tamanhoM.faixaPreco2").css("display", "flex");
							if (faixa1.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa3.checked == true) {
							$(".tamanhoM.faixaPreco3").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa4.checked == true) {
							$(".tamanhoM.faixaPreco4").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa5.checked == true) {
							$(".tamanhoM.faixaPreco5").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
							}
						}
					}
				}
				if (amarelo.checked == true) {
					$(".tamanhoM.amareloProduto").css("display", "flex");
				}
				if (azul.checked == true) {
					$(".tamanhoM.azulProduto").css("display", "flex");
				}
				if (branco.checked == true) {
					$(".tamanhoM.brancoProduto").css("display", "flex");
				}
				if (cinza.checked == true) {
					$(".tamanhoM.cinzaProduto").css("display", "flex");
				}
				if (laranja.checked == true) {
					$(".tamanhoM.laranjaProduto").css("display", "flex");
				}
				if (verde.checked == true) {
					$(".tamanhoM.verdeProduto").css("display", "flex");
				}
				if (vermelho.checked == true) {
					$(".tamanhoM.vermelhoProduto").css("display", "flex");
				}
				if (preto.checked == true) {
					$(".tamanhoM.pretoProduto").css("display", "flex");
				}
				if (rosa.checked == true) {
					$(".tamanhoM.rosaProduto").css("display", "flex");
				}
				if (vinho.checked == true) {
					$(".tamanhoM.vinhoProduto").css("display", "flex");
				}
			}
			if (tamanhoG.checked == true) {
				$(".tamanhoP").hide();
				$(".tamanhoM").hide();
				$(".tamanhoGG").hide();
				$(".tamanhoU").hide();
				$(".tamanho36").hide();
				$(".tamanho38").hide();
				$(".tamanho40").hide();
				$(".tamanho42").hide();
				$(".tamanho44").hide();
				$(".tamanho46").hide();
				if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanhoG").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanhoG.faixaPreco1").css("display", "flex");
							if (faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa2.checked == true) {
							$(".tamanhoG.faixaPreco2").css("display", "flex");
							if (faixa1.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa3.checked == true) {
							$(".tamanhoG.faixaPreco3").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa4.checked == true) {
							$(".tamanhoG.faixaPreco4").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa5.checked == true) {
							$(".tamanhoG.faixaPreco5").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
							}
						}
					}
				}
				if (amarelo.checked == true) {
					$(".tamanhoG.amareloProduto").css("display", "flex");
				}
				if (azul.checked == true) {
					$(".tamanhoG.azulProduto").css("display", "flex");
				}
				if (branco.checked == true) {
					$(".tamanhoG.brancoProduto").css("display", "flex");
				}
				if (cinza.checked == true) {
					$(".tamanhoG.cinzaProduto").css("display", "flex");
				}
				if (laranja.checked == true) {
					$(".tamanhoG.laranjaProduto").css("display", "flex");
				}
				if (verde.checked == true) {
					$(".tamanhoG.verdeProduto").css("display", "flex");
				}
				if (vermelho.checked == true) {
					$(".tamanhoG.vermelhoProduto").css("display", "flex");
				}
				if (preto.checked == true) {
					$(".tamanhoG.pretoProduto").css("display", "flex");
				}
				if (rosa.checked == true) {
					$(".tamanhoG.rosaProduto").css("display", "flex");
				}
				if (vinho.checked == true) {
					$(".tamanhoG.vinhoProduto").css("display", "flex");
				}
			}
			if (tamanhoGG.checked == true) {
				$(".tamanhoP").hide();
				$(".tamanhoM").hide();
				$(".tamanhoG").hide();
				$(".tamanhoU").hide();
				$(".tamanho36").hide();
				$(".tamanho38").hide();
				$(".tamanho40").hide();
				$(".tamanho42").hide();
				$(".tamanho44").hide();
				$(".tamanho46").hide();
				if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanhoGG").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanhoGG.faixaPreco1").css("display", "flex");
							if (faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa2.checked == true) {
							$(".tamanhoGG.faixaPreco2").css("display", "flex");
							if (faixa1.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa3.checked == true) {
							$(".tamanhoGG.faixaPreco3").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa4.checked == true) {
							$(".tamanhoGG.faixaPreco4").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa5.checked == true) {
							$(".tamanhoGG.faixaPreco5").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
							}
						}
					}
				}
				if (amarelo.checked == true) {
					$(".tamanhoGG.amareloProduto").css("display", "flex");
				}
				if (azul.checked == true) {
					$(".tamanhoGG.azulProduto").css("display", "flex");
				}
				if (branco.checked == true) {
					$(".tamanhoGG.brancoProduto").css("display", "flex");
				}
				if (cinza.checked == true) {
					$(".tamanhoGG.cinzaProduto").css("display", "flex");
				}
				if (laranja.checked == true) {
					$(".tamanhoGG.laranjaProduto").css("display", "flex");
				}
				if (verde.checked == true) {
					$(".tamanhoGG.verdeProduto").css("display", "flex");
				}
				if (vermelho.checked == true) {
					$(".tamanhoGG.vermelhoProduto").css("display", "flex");
				}
				if (preto.checked == true) {
					$(".tamanhoGG.pretoProduto").css("display", "flex");
				}
				if (rosa.checked == true) {
					$(".tamanhoGG.rosaProduto").css("display", "flex");
				}
				if (vinho.checked == true) {
					$(".tamanhoGG.vinhoProduto").css("display", "flex");
				}
			}
			if (tamanhoU.checked == true) {
				$(".tamanhoP").hide();
				$(".tamanhoM").hide();
				$(".tamanhoG").hide();
				$(".tamanhoGG").hide();
				$(".tamanho36").hide();
				$(".tamanho38").hide();
				$(".tamanho40").hide();
				$(".tamanho42").hide();
				$(".tamanho44").hide();
				$(".tamanho46").hide();
				if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanhoU").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanhoU.faixaPreco1").css("display", "flex");
							if (faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa2.checked == true) {
							$(".tamanhoU.faixaPreco2").css("display", "flex");
							if (faixa1.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa3.checked == true) {
							$(".tamanhoU.faixaPreco3").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa4.checked == true) {
							$(".tamanhoU.faixaPreco4").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa5.checked == true) {
							$(".tamanhoU.faixaPreco5").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
							}
						}
					}
				}
				if (amarelo.checked == true) {
					$(".tamanhoU.amareloProduto").css("display", "flex");
				}
				if (azul.checked == true) {
					$(".tamanhoU.azulProduto").css("display", "flex");
				}
				if (branco.checked == true) {
					$(".tamanhoU.brancoProduto").css("display", "flex");
				}
				if (cinza.checked == true) {
					$(".tamanhoU.cinzaProduto").css("display", "flex");
				}
				if (laranja.checked == true) {
					$(".tamanhoU.laranjaProduto").css("display", "flex");
				}
				if (verde.checked == true) {
					$(".tamanhoU.verdeProduto").css("display", "flex");
				}
				if (vermelho.checked == true) {
					$(".tamanhoU.vermelhoProduto").css("display", "flex");
				}
				if (preto.checked == true) {
					$(".tamanhoU.pretoProduto").css("display", "flex");
				}
				if (rosa.checked == true) {
					$(".tamanhoU.rosaProduto").css("display", "flex");
				}
				if (vinho.checked == true) {
					$(".tamanhoU.vinhoProduto").css("display", "flex");
				}
			}
			if (tamanho36.checked == true) {
				$(".tamanhoP").hide();
				$(".tamanhoM").hide();
				$(".tamanhoG").hide();
				$(".tamanhoGG").hide();
				$(".tamanhoU").hide();
				$(".tamanho38").hide();
				$(".tamanho40").hide();
				$(".tamanho42").hide();
				$(".tamanho44").hide();
				$(".tamanho46").hide();
				if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanho36").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanho36.faixaPreco1").css("display", "flex");
							if (faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa2.checked == true) {
							$(".tamanho36.faixaPreco2").css("display", "flex");
							if (faixa1.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa3.checked == true) {
							$(".tamanho36.faixaPreco3").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa4.checked == true) {
							$(".tamanho36.faixaPreco4").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa5.checked == true) {
							$(".tamanho36.faixaPreco5").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
							}
						}
					}
				}
				if (amarelo.checked == true) {
					$(".tamanho36.amareloProduto").css("display", "flex");
				}
				if (azul.checked == true) {
					$(".tamanho36.azulProduto").css("display", "flex");
				}
				if (branco.checked == true) {
					$(".tamanho36.brancoProduto").css("display", "flex");
				}
				if (cinza.checked == true) {
					$(".tamanho36.cinzaProduto").css("display", "flex");
				}
				if (laranja.checked == true) {
					$(".tamanho36.laranjaProduto").css("display", "flex");
				}
				if (verde.checked == true) {
					$(".tamanho36.verdeProduto").css("display", "flex");
				}
				if (vermelho.checked == true) {
					$(".tamanho36.vermelhoProduto").css("display", "flex");
				}
				if (preto.checked == true) {
					$(".tamanho36.pretoProduto").css("display", "flex");
				}
				if (rosa.checked == true) {
					$(".tamanho36.rosaProduto").css("display", "flex");
				}
				if (vinho.checked == true) {
					$(".tamanho36.vinhoProduto").css("display", "flex");
				}
			}
			if (tamanho38.checked == true) {
				$(".tamanhoP").hide();
				$(".tamanhoM").hide();
				$(".tamanhoG").hide();
				$(".tamanhoGG").hide();
				$(".tamanhoU").hide();
				$(".tamanho36").hide();
				$(".tamanho40").hide();
				$(".tamanho42").hide();
				$(".tamanho44").hide();
				$(".tamanho46").hide();
				if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanho38").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanho38.faixaPreco1").css("display", "flex");
							if (faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa2.checked == true) {
							$(".tamanho38.faixaPreco2").css("display", "flex");
							if (faixa1.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa3.checked == true) {
							$(".tamanho38.faixaPreco3").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa4.checked == true) {
							$(".tamanho38.faixaPreco4").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa5.checked == true) {
							$(".tamanho38.faixaPreco5").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
							}
						}
					}
				}
				if (amarelo.checked == true) {
					$(".tamanho38.amareloProduto").css("display", "flex");
				}
				if (azul.checked == true) {
					$(".tamanho38.azulProduto").css("display", "flex");
				}
				if (branco.checked == true) {
					$(".tamanho38.brancoProduto").css("display", "flex");
				}
				if (cinza.checked == true) {
					$(".tamanho38.cinzaProduto").css("display", "flex");
				}
				if (laranja.checked == true) {
					$(".tamanho38.laranjaProduto").css("display", "flex");
				}
				if (verde.checked == true) {
					$(".tamanho38.verdeProduto").css("display", "flex");
				}
				if (vermelho.checked == true) {
					$(".tamanho38.vermelhoProduto").css("display", "flex");
				}
				if (preto.checked == true) {
					$(".tamanho38.pretoProduto").css("display", "flex");
				}
				if (rosa.checked == true) {
					$(".tamanho38.rosaProduto").css("display", "flex");
				}
				if (vinho.checked == true) {
					$(".tamanho38.vinhoProduto").css("display", "flex");
				}
			}
			if (tamanho40.checked == true) {
				$(".tamanhoP").hide();
				$(".tamanhoM").hide();
				$(".tamanhoG").hide();
				$(".tamanhoGG").hide();
				$(".tamanhoU").hide();
				$(".tamanho36").hide();
				$(".tamanho38").hide();
				$(".tamanho42").hide();
				$(".tamanho44").hide();
				$(".tamanho46").hide();
				if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanho40").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanho40.faixaPreco1").css("display", "flex");
							if (faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa2.checked == true) {
							$(".tamanho40.faixaPreco2").css("display", "flex");
							if (faixa1.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa3.checked == true) {
							$(".tamanho40.faixaPreco3").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa4.checked == true) {
							$(".tamanho40.faixaPreco4").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa5.checked == true) {
							$(".tamanho40.faixaPreco5").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
							}
						}
					}
				}
				if (amarelo.checked == true) {
					$(".tamanho40.amareloProduto").css("display", "flex");
				}
				if (azul.checked == true) {
					$(".tamanho40.azulProduto").css("display", "flex");
				}
				if (branco.checked == true) {
					$(".tamanho40.brancoProduto").css("display", "flex");
				}
				if (cinza.checked == true) {
					$(".tamanho40.cinzaProduto").css("display", "flex");
				}
				if (laranja.checked == true) {
					$(".tamanho40.laranjaProduto").css("display", "flex");
				}
				if (verde.checked == true) {
					$(".tamanho40.verdeProduto").css("display", "flex");
				}
				if (vermelho.checked == true) {
					$(".tamanho40.vermelhoProduto").css("display", "flex");
				}
				if (preto.checked == true) {
					$(".tamanho40.pretoProduto").css("display", "flex");
				}
				if (rosa.checked == true) {
					$(".tamanho40.rosaProduto").css("display", "flex");
				}
				if (vinho.checked == true) {
					$(".tamanho40.vinhoProduto").css("display", "flex");
				}
			}
			if (tamanho42.checked == true) {
				$(".tamanhoP").hide();
				$(".tamanhoM").hide();
				$(".tamanhoG").hide();
				$(".tamanhoGG").hide();
				$(".tamanhoU").hide();
				$(".tamanho36").hide();
				$(".tamanho38").hide();
				$(".tamanho40").hide();
				$(".tamanho44").hide();
				$(".tamanho46").hide();
				if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanho42").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanho42.faixaPreco1").css("display", "flex");
							if (faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa2.checked == true) {
							$(".tamanho42.faixaPreco2").css("display", "flex");
							if (faixa1.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa3.checked == true) {
							$(".tamanho42.faixaPreco3").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa4.checked == true) {
							$(".tamanho42.faixaPreco4").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa5.checked == true) {
							$(".tamanho42.faixaPreco5").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
							}
						}
					}
				}
				if (amarelo.checked == true) {
					$(".tamanho42.amareloProduto").css("display", "flex");
				}
				if (azul.checked == true) {
					$(".tamanho42.azulProduto").css("display", "flex");
				}
				if (branco.checked == true) {
					$(".tamanho42.brancoProduto").css("display", "flex");
				}
				if (cinza.checked == true) {
					$(".tamanho42.cinzaProduto").css("display", "flex");
				}
				if (laranja.checked == true) {
					$(".tamanho42.laranjaProduto").css("display", "flex");
				}
				if (verde.checked == true) {
					$(".tamanho42.verdeProduto").css("display", "flex");
				}
				if (vermelho.checked == true) {
					$(".tamanho42.vermelhoProduto").css("display", "flex");
				}
				if (preto.checked == true) {
					$(".tamanho42.pretoProduto").css("display", "flex");
				}
				if (rosa.checked == true) {
					$(".tamanho42.rosaProduto").css("display", "flex");
				}
				if (vinho.checked == true) {
					$(".tamanho42.vinhoProduto").css("display", "flex");
				}
			}
			if (tamanho44.checked == true) {
				$(".tamanhoP").hide();
				$(".tamanhoM").hide();
				$(".tamanhoG").hide();
				$(".tamanhoGG").hide();
				$(".tamanhoU").hide();
				$(".tamanho36").hide();
				$(".tamanho38").hide();
				$(".tamanho40").hide();
				$(".tamanho42").hide();
				$(".tamanho46").hide();
				if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanho44").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanho44.faixaPreco1").css("display", "flex");
							if (faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa2.checked == true) {
							$(".tamanho44.faixaPreco2").css("display", "flex");
							if (faixa1.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa3.checked == true) {
							$(".tamanho44.faixaPreco3").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa4.checked == true) {
							$(".tamanho44.faixaPreco4").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa5.checked == true) {
							$(".tamanho44.faixaPreco5").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
							}
						}
					}
				}
				if (amarelo.checked == true) {
					$(".tamanho44.amareloProduto").css("display", "flex");
				}
				if (azul.checked == true) {
					$(".tamanho44.azulProduto").css("display", "flex");
				}
				if (branco.checked == true) {
					$(".tamanho44.brancoProduto").css("display", "flex");
				}
				if (cinza.checked == true) {
					$(".tamanho44.cinzaProduto").css("display", "flex");
				}
				if (laranja.checked == true) {
					$(".tamanho44.laranjaProduto").css("display", "flex");
				}
				if (verde.checked == true) {
					$(".tamanho44.verdeProduto").css("display", "flex");
				}
				if (vermelho.checked == true) {
					$(".tamanho44.vermelhoProduto").css("display", "flex");
				}
				if (preto.checked == true) {
					$(".tamanho44.pretoProduto").css("display", "flex");
				}
				if (rosa.checked == true) {
					$(".tamanho44.rosaProduto").css("display", "flex");
				}
				if (vinho.checked == true) {
					$(".tamanho44.vinhoProduto").css("display", "flex");
				}
			}
			if (tamanho46.checked == true) {
				$(".tamanhoP").hide();
				$(".tamanhoM").hide();
				$(".tamanhoG").hide();
				$(".tamanhoGG").hide();
				$(".tamanhoU").hide();
				$(".tamanho36").hide();
				$(".tamanho38").hide();
				$(".tamanho40").hide();
				$(".tamanho42").hide();
				$(".tamanho44").hide();
				if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanho46").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanho46.faixaPreco1").css("display", "flex");
							if (faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa2.checked == true) {
							$(".tamanho46.faixaPreco2").css("display", "flex");
							if (faixa1.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa3.checked == true) {
							$(".tamanho46.faixaPreco3").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa4.checked == true) {
							$(".tamanho46.faixaPreco4").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa5.checked == true) {
							$(".tamanho46.faixaPreco5").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
							}
						}
					}
				}
				if (amarelo.checked == true) {
					$(".tamanho46.amareloProduto").css("display", "flex");
				}
				if (azul.checked == true) {
					$(".tamanho46.azulProduto").css("display", "flex");
				}
				if (branco.checked == true) {
					$(".tamanho46.brancoProduto").css("display", "flex");
				}
				if (cinza.checked == true) {
					$(".tamanho46.cinzaProduto").css("display", "flex");
				}
				if (laranja.checked == true) {
					$(".tamanho46.laranjaProduto").css("display", "flex");
				}
				if (verde.checked == true) {
					$(".tamanho46.verdeProduto").css("display", "flex");
				}
				if (vermelho.checked == true) {
					$(".tamanho46.vermelhoProduto").css("display", "flex");
				}
				if (preto.checked == true) {
					$(".tamanho46.pretoProduto").css("display", "flex");
				}
				if (rosa.checked == true) {
					$(".tamanho46.rosaProduto").css("display", "flex");
				}
				if (vinho.checked == true) {
					$(".tamanho46.vinhoProduto").css("display", "flex");
				}
			}
		}
	})

	$("#faixa_2").click(function () {
		if (faixa2.checked == true) {
			if (tamanhoP.checked == false && tamanhoM.checked == false && tamanhoG.checked == false && tamanhoGG.checked == false && tamanhoU.checked == false && tamanho36.checked == false && tamanho38.checked == false && tamanho40.checked == false && tamanho42.checked == false && tamanho44.checked == false && tamanho46.checked == false) {
				if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
					$(".faixaPreco2").css("display", "flex");
				}
				if (amarelo.checked == true) {
					$(".amareloProduto.faixaPreco2").css("display", "flex");
				}
				if (azul.checked == true) {
					$(".azulProduto.faixaPreco2").css("display", "flex");
				}
				if (branco.checked == true) {
					$(".brancoProduto.faixaPreco2").css("display", "flex");
				}
				if (cinza.checked == true) {
					$(".cinzaProduto.faixaPreco2").css("display", "flex");
				}
				if (laranja.checked == true) {
					$(".laranjaProduto.faixaPreco2").css("display", "flex");
				}
				if (verde.checked == true) {
					$(".verdeProduto.faixaPreco2").css("display", "flex");
				}
				if (vermelho.checked == true) {
					$(".vermelhoProduto.faixaPreco2").css("display", "flex");
				}
				if (preto.checked == true) {
					$(".pretoProduto.faixaPreco2").css("display", "flex");
				}
				if (rosa.checked == true) {
					$(".rosaProduto.faixaPreco2").css("display", "flex");
				}
				if (vinho.checked == true) {
					$(".vinhoProduto.faixaPreco2").css("display", "flex");
				}
			} else {
				if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
					if (tamanhoP.checked == true) {
						$(".tamanhoP.faixaPreco2").css("display", "flex");
					}
					if (tamanhoM.checked == true) {
						$(".tamanhoM.faixaPreco2").css("display", "flex");
					}
					if (tamanhoG.checked == true) {
						$(".tamanhoG.faixaPreco2").css("display", "flex");
					}
					if (tamanhoGG.checked == true) {
						$(".tamanhoGG.faixaPreco2").css("display", "flex");
					}
					if (tamanhoU.checked == true) {
						$(".tamanhoU.faixaPreco2").css("display", "flex");
					}
					if (tamanho36.checked == true) {
						$(".tamanho36.faixaPreco2").css("display", "flex");
					}
					if (tamanho38.checked == true) {
						$(".tamanho38.faixaPreco2").css("display", "flex");
					}
					if (tamanho40.checked == true) {
						$(".tamanho40.faixaPreco2").css("display", "flex");
					}
					if (tamanho42.checked == true) {
						$(".tamanho42.faixaPreco2").css("display", "flex");
					}
					if (tamanho44.checked == true) {
						$(".tamanho44.faixaPreco2").css("display", "flex");
					}
					if (tamanho46.checked == true) {
						$(".tamanho46.faixaPreco2").css("display", "flex");
					}
				} else {
					if (amarelo.checked == true) {
						if (tamanhoP.checked == true) {
							$(".amareloProduto.tamanhoP.faixaPreco2").css("display", "flex");
						}
						if (tamanhoM.checked == true) {
							$(".amareloProduto.tamanhoM.faixaPreco2").css("display", "flex");
						}
						if (tamanhoG.checked == true) {
							$(".amareloProduto.tamanhoG.faixaPreco2").css("display", "flex");
						}
						if (tamanhoGG.checked == true) {
							$(".amareloProduto.tamanhoGG.faixaPreco2").css("display", "flex");
						}
						if (tamanhoU.checked == true) {
							$(".amareloProduto.tamanhoU.faixaPreco2").css("display", "flex");
						}
						if (tamanho36.checked == true) {
							$(".amareloProduto.tamanho36.faixaPreco2").css("display", "flex");
						}
						if (tamanho38.checked == true) {
							$(".amareloProduto.tamanho38.faixaPreco2").css("display", "flex");
						}
						if (tamanho40.checked == true) {
							$(".amareloProduto.tamanho40.faixaPreco2").css("display", "flex");
						}
						if (tamanho42.checked == true) {
							$(".amareloProduto.tamanho42.faixaPreco2").css("display", "flex");
						}
						if (tamanho44.checked == true) {
							$(".amareloProduto.tamanho44.faixaPreco2").css("display", "flex");
						}
						if (tamanho46.checked == true) {
							$(".amareloProduto.tamanho46.faixaPreco2").css("display", "flex");
						}
					}
					if (azul.checked == true) {
						if (tamanhoP.checked == true) {
							$(".azulProduto.tamanhoP.faixaPreco2").css("display", "flex");
						}
						if (tamanhoM.checked == true) {
							$(".azulProduto.tamanhoM.faixaPreco2").css("display", "flex");
						}
						if (tamanhoG.checked == true) {
							$(".azulProduto.tamanhoG.faixaPreco2").css("display", "flex");
						}
						if (tamanhoGG.checked == true) {
							$(".azulProduto.tamanhoGG.faixaPreco2").css("display", "flex");
						}
						if (tamanhoU.checked == true) {
							$(".azulProduto.tamanhoU.faixaPreco2").css("display", "flex");
						}
						if (tamanho36.checked == true) {
							$(".azulProduto.tamanho36.faixaPreco2").css("display", "flex");
						}
						if (tamanho38.checked == true) {
							$(".azulProduto.tamanho38.faixaPreco2").css("display", "flex");
						}
						if (tamanho40.checked == true) {
							$(".azulProduto.tamanho40.faixaPreco2").css("display", "flex");
						}
						if (tamanho42.checked == true) {
							$(".azulProduto.tamanho42.faixaPreco2").css("display", "flex");
						}
						if (tamanho44.checked == true) {
							$(".azulProduto.tamanho44.faixaPreco2").css("display", "flex");
						}
						if (tamanho46.checked == true) {
							$(".azulProduto.tamanho46.faixaPreco1").css("display", "flex");
						}
					}
					if (branco.checked == true) {
						if (tamanhoP.checked == true) {
							$(".brancoProduto.tamanhoP.faixaPreco2").css("display", "flex");
						}
						if (tamanhoM.checked == true) {
							$(".brancoProduto.tamanhoM.faixaPreco2").css("display", "flex");
						}
						if (tamanhoG.checked == true) {
							$(".brancoProduto.tamanhoG.faixaPreco2").css("display", "flex");
						}
						if (tamanhoGG.checked == true) {
							$(".brancoProduto.tamanhoGG.faixaPreco2").css("display", "flex");
						}
						if (tamanhoU.checked == true) {
							$(".brancoProduto.tamanhoU.faixaPreco2").css("display", "flex");
						}
						if (tamanho36.checked == true) {
							$(".brancoProduto.tamanho36.faixaPreco2").css("display", "flex");
						}
						if (tamanho38.checked == true) {
							$(".brancoProduto.tamanho38.faixaPreco2").css("display", "flex");
						}
						if (tamanho40.checked == true) {
							$(".brancoProduto.tamanho40.faixaPreco2").css("display", "flex");
						}
						if (tamanho42.checked == true) {
							$(".brancoProduto.tamanho42.faixaPreco2").css("display", "flex");
						}
						if (tamanho44.checked == true) {
							$(".brancoProduto.tamanho44.faixaPreco2").css("display", "flex");
						}
						if (tamanho46.checked == true) {
							$(".brancoProduto.tamanho46.faixaPreco2").css("display", "flex");
						}
					}
					if (cinza.checked == true) {
						if (tamanhoP.checked == true) {
							$(".cinzaProduto.tamanhoP.faixaPreco2").css("display", "flex");
						}
						if (tamanhoM.checked == true) {
							$(".cinzaProduto.tamanhoM.faixaPreco2").css("display", "flex");
						}
						if (tamanhoG.checked == true) {
							$(".cinzaProduto.tamanhoG.faixaPreco2").css("display", "flex");
						}
						if (tamanhoGG.checked == true) {
							$(".cinzaProduto.tamanhoGG.faixaPreco2").css("display", "flex");
						}
						if (tamanhoU.checked == true) {
							$(".cinzaProduto.tamanhoU.faixaPreco2").css("display", "flex");
						}
						if (tamanho36.checked == true) {
							$(".cinzaProduto.tamanho36.faixaPreco2").css("display", "flex");
						}
						if (tamanho38.checked == true) {
							$(".cinzaProduto.tamanho38.faixaPreco2").css("display", "flex");
						}
						if (tamanho40.checked == true) {
							$(".cinzaProduto.tamanho40.faixaPreco2").css("display", "flex");
						}
						if (tamanho42.checked == true) {
							$(".cinzaProduto.tamanho42.faixaPreco2").css("display", "flex");
						}
						if (tamanho44.checked == true) {
							$(".cinzaProduto.tamanho44.faixaPreco2").css("display", "flex");
						}
						if (tamanho46.checked == true) {
							$(".cinzaProduto.tamanho46.faixaPreco2").css("display", "flex");
						}
					}
					if (laranja.checked == true) {
						if (tamanhoP.checked == true) {
							$(".laranjaProduto.tamanhoP.faixaPreco2").css("display", "flex");
						}
						if (tamanhoM.checked == true) {
							$(".laranjaProduto.tamanhoM.faixaPreco2").css("display", "flex");
						}
						if (tamanhoG.checked == true) {
							$(".laranjaProduto.tamanhoG.faixaPreco2").css("display", "flex");
						}
						if (tamanhoGG.checked == true) {
							$(".laranjaProduto.tamanhoGG.faixaPreco2").css("display", "flex");
						}
						if (tamanhoU.checked == true) {
							$(".laranjaProduto.tamanhoU.faixaPreco2").css("display", "flex");
						}
						if (tamanho36.checked == true) {
							$(".laranjaProduto.tamanho36.faixaPreco2").css("display", "flex");
						}
						if (tamanho38.checked == true) {
							$(".laranjaProduto.tamanho38.faixaPreco2").css("display", "flex");
						}
						if (tamanho40.checked == true) {
							$(".laranjaProduto.tamanho40.faixaPreco2").css("display", "flex");
						}
						if (tamanho42.checked == true) {
							$(".laranjaProduto.tamanho42.faixaPreco2").css("display", "flex");
						}
						if (tamanho44.checked == true) {
							$(".laranjaProduto.tamanho44.faixaPreco2").css("display", "flex");
						}
						if (tamanho46.checked == true) {
							$(".laranjaProduto.tamanho46.faixaPreco2").css("display", "flex");
						}
					}
					if (verde.checked == true) {
						if (tamanhoP.checked == true) {
							$(".verdeProduto.tamanhoP.faixaPreco2").css("display", "flex");
						}
						if (tamanhoM.checked == true) {
							$(".verdeProduto.tamanhoM.faixaPreco2").css("display", "flex");
						}
						if (tamanhoG.checked == true) {
							$(".verdeProduto.tamanhoG.faixaPreco2").css("display", "flex");
						}
						if (tamanhoGG.checked == true) {
							$(".verdeProduto.tamanhoGG.faixaPreco2").css("display", "flex");
						}
						if (tamanhoU.checked == true) {
							$(".verdeProduto.tamanhoU.faixaPreco2").css("display", "flex");
						}
						if (tamanho36.checked == true) {
							$(".verdeProduto.tamanho36.faixaPreco2").css("display", "flex");
						}
						if (tamanho38.checked == true) {
							$(".verdeProduto.tamanho38.faixaPreco2").css("display", "flex");
						}
						if (tamanho40.checked == true) {
							$(".verdeProduto.tamanho40.faixaPreco2").css("display", "flex");
						}
						if (tamanho42.checked == true) {
							$(".verdeProduto.tamanho42.faixaPreco2").css("display", "flex");
						}
						if (tamanho44.checked == true) {
							$(".verdeProduto.tamanho44.faixaPreco2").css("display", "flex");
						}
						if (tamanho46.checked == true) {
							$(".verdeProduto.tamanho46.faixaPreco2").css("display", "flex");
						}
					}
					if (vermelho.checked == true) {
						if (tamanhoP.checked == true) {
							$(".vermelhoProduto.tamanhoP.faixaPreco2").css("display", "flex");
						}
						if (tamanhoM.checked == true) {
							$(".vermelhoProduto.tamanhoM.faixaPreco2").css("display", "flex");
						}
						if (tamanhoG.checked == true) {
							$(".vermelhoProduto.tamanhoG.faixaPreco2").css("display", "flex");
						}
						if (tamanhoGG.checked == true) {
							$(".vermelhoProduto.tamanhoGG.faixaPreco2").css("display", "flex");
						}
						if (tamanhoU.checked == true) {
							$(".vermelhoProduto.tamanhoU.faixaPreco2").css("display", "flex");
						}
						if (tamanho36.checked == true) {
							$(".vermelhoProduto.tamanho36.faixaPreco2").css("display", "flex");
						}
						if (tamanho38.checked == true) {
							$(".vermelhoProduto.tamanho38.faixaPreco2").css("display", "flex");
						}
						if (tamanho40.checked == true) {
							$(".vermelhoProduto.tamanho40.faixaPreco2").css("display", "flex");
						}
						if (tamanho42.checked == true) {
							$(".vermelhoProduto.tamanho42.faixaPreco2").css("display", "flex");
						}
						if (tamanho44.checked == true) {
							$(".vermelhoProduto.tamanho44.faixaPreco2").css("display", "flex");
						}
						if (tamanho46.checked == true) {
							$(".vermelhoProduto.tamanho46.faixaPreco2").css("display", "flex");
						}
					}
					if (preto.checked == true) {
						if (tamanhoP.checked == true) {
							$(".pretoProduto.tamanhoP.faixaPreco2").css("display", "flex");
						}
						if (tamanhoM.checked == true) {
							$(".pretoProduto.tamanhoM.faixaPreco2").css("display", "flex");
						}
						if (tamanhoG.checked == true) {
							$(".pretoProduto.tamanhoG.faixaPreco2").css("display", "flex");
						}
						if (tamanhoGG.checked == true) {
							$(".pretoProduto.tamanhoGG.faixaPreco2").css("display", "flex");
						}
						if (tamanhoU.checked == true) {
							$(".pretoProduto.tamanhoU.faixaPreco2").css("display", "flex");
						}
						if (tamanho36.checked == true) {
							$(".pretoProduto.tamanho36.faixaPreco2").css("display", "flex");
						}
						if (tamanho38.checked == true) {
							$(".pretoProduto.tamanho38.faixaPreco2").css("display", "flex");
						}
						if (tamanho40.checked == true) {
							$(".pretoProduto.tamanho40.faixaPreco2").css("display", "flex");
						}
						if (tamanho42.checked == true) {
							$(".pretoProduto.tamanho42.faixaPreco2").css("display", "flex");
						}
						if (tamanho44.checked == true) {
							$(".pretoProduto.tamanho44.faixaPreco2").css("display", "flex");
						}
						if (tamanho46.checked == true) {
							$(".pretoProduto.tamanho46.faixaPreco2").css("display", "flex");
						}
					}
					if (rosa.checked == true) {
						if (tamanhoP.checked == true) {
							$(".rosaProduto.tamanhoP.faixaPreco2").css("display", "flex");
						}
						if (tamanhoM.checked == true) {
							$(".rosaProduto.tamanhoM.faixaPreco2").css("display", "flex");
						}
						if (tamanhoG.checked == true) {
							$(".rosaProduto.tamanhoG.faixaPreco2").css("display", "flex");
						}
						if (tamanhoGG.checked == true) {
							$(".rosaProduto.tamanhoGG.faixaPreco2").css("display", "flex");
						}
						if (tamanhoU.checked == true) {
							$(".rosaProduto.tamanhoU.faixaPreco2").css("display", "flex");
						}
						if (tamanho36.checked == true) {
							$(".rosaProduto.tamanho36.faixaPreco2").css("display", "flex");
						}
						if (tamanho38.checked == true) {
							$(".rosaProduto.tamanho38.faixaPreco2").css("display", "flex");
						}
						if (tamanho40.checked == true) {
							$(".rosaProduto.tamanho40.faixaPreco2").css("display", "flex");
						}
						if (tamanho42.checked == true) {
							$(".rosaProduto.tamanho42.faixaPreco2").css("display", "flex");
						}
						if (tamanho44.checked == true) {
							$(".rosaProduto.tamanho44.faixaPreco2").css("display", "flex");
						}
						if (tamanho46.checked == true) {
							$(".rosaProduto.tamanho46.faixaPreco2").css("display", "flex");
						}
					}
					if (vinho.checked == true) {
						if (tamanhoP.checked == true) {
							$(".vinhoProduto.tamanhoP.faixaPreco2").css("display", "flex");
						}
						if (tamanhoM.checked == true) {
							$(".vinhoProduto.tamanhoM.faixaPreco2").css("display", "flex");
						}
						if (tamanhoG.checked == true) {
							$(".vinhoProduto.tamanhoG.faixaPreco2").css("display", "flex");
						}
						if (tamanhoGG.checked == true) {
							$(".vinhoProduto.tamanhoGG.faixaPreco2").css("display", "flex");
						}
						if (tamanhoU.checked == true) {
							$(".vinhoProduto.tamanhoU.faixaPreco2").css("display", "flex");
						}
						if (tamanho36.checked == true) {
							$(".vinhoProduto.tamanho36.faixaPreco2").css("display", "flex");
						}
						if (tamanho38.checked == true) {
							$(".vinhoProduto.tamanho38.faixaPreco2").css("display", "flex");
						}
						if (tamanho40.checked == true) {
							$(".vinhoProduto.tamanho40.faixaPreco2").css("display", "flex");
						}
						if (tamanho42.checked == true) {
							$(".vinhoProduto.tamanho42.faixaPreco2").css("display", "flex");
						}
						if (tamanho44.checked == true) {
							$(".vinhoProduto.tamanho44.faixaPreco2").css("display", "flex");
						}
						if (tamanho46.checked == true) {
							$(".vinhoProduto.tamanho46.faixaPreco2").css("display", "flex");
						}
					}
				}
			}

			if (faixa1.checked == false) {
				$(".faixaPreco1").hide();
			}
			if (faixa3.checked == false) {
				$(".faixaPreco3").hide();
			}
			if (faixa4.checked == false) {
				$(".faixaPreco4").hide();
			}
			if (faixa5.checked == false) {
				$(".faixaPreco5").hide();
			}

		} else {
			$(".faixaPreco2").hide();

			if (tamanhoP.checked == false && tamanhoM.checked == false && tamanhoG.checked == false && tamanhoGG.checked == false && tamanhoU.checked == false && tamanho36.checked == false && tamanho38.checked == false && tamanho40.checked == false && tamanho42.checked == false && tamanho44.checked == false && tamanho46.checked == false) {
				if (faixa1.checked == true) {
					if (faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".faixaPreco2").hide();
						$(".faixaPreco3").hide();
						$(".faixaPreco4").hide();
						$(".faixaPreco5").hide();
					}
					if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
						$(".faixaPreco1").css("display", "flex");
					}
					if (amarelo.checked == true) {
						$(".faixaPreco1.amareloProduto").css("display", "flex");
					}
					if (azul.checked == true) {
						$(".faixaPreco1.azulProduto").css("display", "flex");
					}
					if (branco.checked == true) {
						$(".faixaPreco1.brancoProduto").css("display", "flex");
					}
					if (cinza.checked == true) {
						$(".faixaPreco1.cinzaProduto").css("display", "flex");
					}
					if (laranja.checked == true) {
						$(".faixaPreco1.laranjaProduto").css("display", "flex");
					}
					if (verde.checked == true) {
						$(".faixaPreco1.verdeProduto").css("display", "flex");
					}
					if (vermelho.checked == true) {
						$(".faixaPreco1.vermelhoProduto").css("display", "flex");
					}
					if (preto.checked == true) {
						$(".faixaPreco1.pretoProduto").css("display", "flex");
					}
					if (rosa.checked == true) {
						$(".faixaPreco1.rosaProduto").css("display", "flex");
					}
					if (vinho.checked == true) {
						$(".faixaPreco1.vinhoProduto").css("display", "flex");
					}
				}
				if (faixa2.checked == true) {
					if (faixa1.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".faixaPreco1").hide();
						$(".faixaPreco3").hide();
						$(".faixaPreco4").hide();
						$(".faixaPreco5").hide();
					}
					if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
						$(".faixaPreco2").css("display", "flex");
					}
					if (amarelo.checked == true) {
						$(".faixaPreco2.amareloProduto").css("display", "flex");
					}
					if (azul.checked == true) {
						$(".faixaPreco2.azulProduto").css("display", "flex");
					}
					if (branco.checked == true) {
						$(".faixaPreco2.brancoProduto").css("display", "flex");
					}
					if (cinza.checked == true) {
						$(".faixaPreco2.cinzaProduto").css("display", "flex");
					}
					if (laranja.checked == true) {
						$(".faixaPreco2.laranjaProduto").css("display", "flex");
					}
					if (verde.checked == true) {
						$(".faixaPreco2.verdeProduto").css("display", "flex");
					}
					if (vermelho.checked == true) {
						$(".faixaPreco2.vermelhoProduto").css("display", "flex");
					}
					if (preto.checked == true) {
						$(".faixaPreco2.pretoProduto").css("display", "flex");
					}
					if (rosa.checked == true) {
						$(".faixaPreco2.rosaProduto").css("display", "flex");
					}
					if (vinho.checked == true) {
						$(".faixaPreco2.vinhoProduto").css("display", "flex");
					}
				}
				if (faixa3.checked == true) {
					if (faixa1.checked == false && faixa2.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".faixaPreco1").hide();
						$(".faixaPreco2").hide();
						$(".faixaPreco4").hide();
						$(".faixaPreco5").hide();
					}
					if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
						$(".faixaPreco3").css("display", "flex");
					}
					if (amarelo.checked == true) {
						$(".faixaPreco3.amareloProduto").css("display", "flex");
					}
					if (azul.checked == true) {
						$(".faixaPreco3.azulProduto").css("display", "flex");
					}
					if (branco.checked == true) {
						$(".faixaPreco3.brancoProduto").css("display", "flex");
					}
					if (cinza.checked == true) {
						$(".faixaPreco3.cinzaProduto").css("display", "flex");
					}
					if (laranja.checked == true) {
						$(".faixaPreco3.laranjaProduto").css("display", "flex");
					}
					if (verde.checked == true) {
						$(".faixaPreco3.verdeProduto").css("display", "flex");
					}
					if (vermelho.checked == true) {
						$(".faixaPreco3.vermelhoProduto").css("display", "flex");
					}
					if (preto.checked == true) {
						$(".faixaPreco3.pretoProduto").css("display", "flex");
					}
					if (rosa.checked == true) {
						$(".faixaPreco3.rosaProduto").css("display", "flex");
					}
					if (vinho.checked == true) {
						$(".faixaPreco3.vinhoProduto").css("display", "flex");
					}
				}
				if (faixa4.checked == true) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa5.checked == false) {
						$(".faixaPreco1").hide();
						$(".faixaPreco2").hide();
						$(".faixaPreco3").hide();
						$(".faixaPreco5").hide();
					}
					if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
						$(".faixaPreco4").css("display", "flex");
					}
					if (amarelo.checked == true) {
						$(".faixaPreco4.amareloProduto").css("display", "flex");
					}
					if (azul.checked == true) {
						$(".faixaPreco4.azulProduto").css("display", "flex");
					}
					if (branco.checked == true) {
						$(".faixaPreco4.brancoProduto").css("display", "flex");
					}
					if (cinza.checked == true) {
						$(".faixaPreco4.cinzaProduto").css("display", "flex");
					}
					if (laranja.checked == true) {
						$(".faixaPreco4.laranjaProduto").css("display", "flex");
					}
					if (verde.checked == true) {
						$(".faixaPreco4.verdeProduto").css("display", "flex");
					}
					if (vermelho.checked == true) {
						$(".faixaPreco4.vermelhoProduto").css("display", "flex");
					}
					if (preto.checked == true) {
						$(".faixaPreco4.pretoProduto").css("display", "flex");
					}
					if (rosa.checked == true) {
						$(".faixaPreco4.rosaProduto").css("display", "flex");
					}
					if (vinho.checked == true) {
						$(".faixaPreco4.vinhoProduto").css("display", "flex");
					}
				}
				if (faixa5.checked == true) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false) {
						$(".faixaPreco1").hide();
						$(".faixaPreco2").hide();
						$(".faixaPreco3").hide();
						$(".faixaPreco4").hide();
					}
					if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
						$(".faixaPreco5").css("display", "flex");
					}
					if (amarelo.checked == true) {
						$(".faixaPreco5.amareloProduto").css("display", "flex");
					}
					if (azul.checked == true) {
						$(".faixaPreco5.azulProduto").css("display", "flex");
					}
					if (branco.checked == true) {
						$(".faixaPreco5.brancoProduto").css("display", "flex");
					}
					if (cinza.checked == true) {
						$(".faixaPreco5.cinzaProduto").css("display", "flex");
					}
					if (laranja.checked == true) {
						$(".faixaPreco5.laranjaProduto").css("display", "flex");
					}
					if (verde.checked == true) {
						$(".faixaPreco5.verdeProduto").css("display", "flex");
					}
					if (vermelho.checked == true) {
						$(".faixaPreco5.vermelhoProduto").css("display", "flex");
					}
					if (preto.checked == true) {
						$(".faixaPreco5.pretoProduto").css("display", "flex");
					}
					if (rosa.checked == true) {
						$(".faixaPreco5.rosaProduto").css("display", "flex");
					}
					if (vinho.checked == true) {
						$(".faixaPreco5.vinhoProduto").css("display", "flex");
					}
				}
			}
			if (tamanhoP.checked == true) {
				$(".tamanhoM").hide();
				$(".tamanhoG").hide();
				$(".tamanhoGG").hide();
				$(".tamanhoU").hide();
				$(".tamanho36").hide();
				$(".tamanho38").hide();
				$(".tamanho40").hide();
				$(".tamanho42").hide();
				$(".tamanho44").hide();
				$(".tamanho46").hide();
				if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanhoP").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanhoP.faixaPreco1").css("display", "flex");
							if (faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa2.checked == true) {
							$(".tamanhoP.faixaPreco2").css("display", "flex");
							if (faixa1.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa3.checked == true) {
							$(".tamanhoP.faixaPreco3").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa4.checked == true) {
							$(".tamanhoP.faixaPreco4").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa5.checked == true) {
							$(".tamanhoP.faixaPreco5").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
							}
						}
					}
				}
				if (amarelo.checked == true) {
					$(".tamanhoP.amareloProduto").css("display", "flex");
				}
				if (azul.checked == true) {
					$(".tamanhoP.azulProduto").css("display", "flex");
				}
				if (branco.checked == true) {
					$(".tamanhoP.brancoProduto").css("display", "flex");
				}
				if (cinza.checked == true) {
					$(".tamanhoP.cinzaProduto").css("display", "flex");
				}
				if (laranja.checked == true) {
					$(".tamanhoP.laranjaProduto").css("display", "flex");
				}
				if (verde.checked == true) {
					$(".tamanhoP.verdeProduto").css("display", "flex");
				}
				if (vermelho.checked == true) {
					$(".tamanhoP.vermelhoProduto").css("display", "flex");
				}
				if (preto.checked == true) {
					$(".tamanhoP.pretoProduto").css("display", "flex");
				}
				if (rosa.checked == true) {
					$(".tamanhoP.rosaProduto").css("display", "flex");
				}
				if (vinho.checked == true) {
					$(".tamanhoP.vinhoProduto").css("display", "flex");
				}
			}
			if (tamanhoM.checked == true) {
				$(".tamanhoP").hide();
				$(".tamanhoG").hide();
				$(".tamanhoGG").hide();
				$(".tamanhoU").hide();
				$(".tamanho36").hide();
				$(".tamanho38").hide();
				$(".tamanho40").hide();
				$(".tamanho42").hide();
				$(".tamanho44").hide();
				$(".tamanho46").hide();
				if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanhoM").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanhoM.faixaPreco1").css("display", "flex");
							if (faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa2.checked == true) {
							$(".tamanhoM.faixaPreco2").css("display", "flex");
							if (faixa1.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa3.checked == true) {
							$(".tamanhoM.faixaPreco3").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa4.checked == true) {
							$(".tamanhoM.faixaPreco4").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa5.checked == true) {
							$(".tamanhoM.faixaPreco5").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
							}
						}
					}
				}
				if (amarelo.checked == true) {
					$(".tamanhoM.amareloProduto").css("display", "flex");
				}
				if (azul.checked == true) {
					$(".tamanhoM.azulProduto").css("display", "flex");
				}
				if (branco.checked == true) {
					$(".tamanhoM.brancoProduto").css("display", "flex");
				}
				if (cinza.checked == true) {
					$(".tamanhoM.cinzaProduto").css("display", "flex");
				}
				if (laranja.checked == true) {
					$(".tamanhoM.laranjaProduto").css("display", "flex");
				}
				if (verde.checked == true) {
					$(".tamanhoM.verdeProduto").css("display", "flex");
				}
				if (vermelho.checked == true) {
					$(".tamanhoM.vermelhoProduto").css("display", "flex");
				}
				if (preto.checked == true) {
					$(".tamanhoM.pretoProduto").css("display", "flex");
				}
				if (rosa.checked == true) {
					$(".tamanhoM.rosaProduto").css("display", "flex");
				}
				if (vinho.checked == true) {
					$(".tamanhoM.vinhoProduto").css("display", "flex");
				}
			}
			if (tamanhoG.checked == true) {
				$(".tamanhoP").hide();
				$(".tamanhoM").hide();
				$(".tamanhoGG").hide();
				$(".tamanhoU").hide();
				$(".tamanho36").hide();
				$(".tamanho38").hide();
				$(".tamanho40").hide();
				$(".tamanho42").hide();
				$(".tamanho44").hide();
				$(".tamanho46").hide();
				if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanhoG").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanhoG.faixaPreco1").css("display", "flex");
							if (faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa2.checked == true) {
							$(".tamanhoG.faixaPreco2").css("display", "flex");
							if (faixa1.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa3.checked == true) {
							$(".tamanhoG.faixaPreco3").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa4.checked == true) {
							$(".tamanhoG.faixaPreco4").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa5.checked == true) {
							$(".tamanhoG.faixaPreco5").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
							}
						}
					}
				}
				if (amarelo.checked == true) {
					$(".tamanhoG.amareloProduto").css("display", "flex");
				}
				if (azul.checked == true) {
					$(".tamanhoG.azulProduto").css("display", "flex");
				}
				if (branco.checked == true) {
					$(".tamanhoG.brancoProduto").css("display", "flex");
				}
				if (cinza.checked == true) {
					$(".tamanhoG.cinzaProduto").css("display", "flex");
				}
				if (laranja.checked == true) {
					$(".tamanhoG.laranjaProduto").css("display", "flex");
				}
				if (verde.checked == true) {
					$(".tamanhoG.verdeProduto").css("display", "flex");
				}
				if (vermelho.checked == true) {
					$(".tamanhoG.vermelhoProduto").css("display", "flex");
				}
				if (preto.checked == true) {
					$(".tamanhoG.pretoProduto").css("display", "flex");
				}
				if (rosa.checked == true) {
					$(".tamanhoG.rosaProduto").css("display", "flex");
				}
				if (vinho.checked == true) {
					$(".tamanhoG.vinhoProduto").css("display", "flex");
				}
			}
			if (tamanhoGG.checked == true) {
				$(".tamanhoP").hide();
				$(".tamanhoM").hide();
				$(".tamanhoG").hide();
				$(".tamanhoU").hide();
				$(".tamanho36").hide();
				$(".tamanho38").hide();
				$(".tamanho40").hide();
				$(".tamanho42").hide();
				$(".tamanho44").hide();
				$(".tamanho46").hide();
				if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanhoGG").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanhoGG.faixaPreco1").css("display", "flex");
							if (faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa2.checked == true) {
							$(".tamanhoGG.faixaPreco2").css("display", "flex");
							if (faixa1.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa3.checked == true) {
							$(".tamanhoGG.faixaPreco3").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa4.checked == true) {
							$(".tamanhoGG.faixaPreco4").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa5.checked == true) {
							$(".tamanhoGG.faixaPreco5").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
							}
						}
					}
				}
				if (amarelo.checked == true) {
					$(".tamanhoGG.amareloProduto").css("display", "flex");
				}
				if (azul.checked == true) {
					$(".tamanhoGG.azulProduto").css("display", "flex");
				}
				if (branco.checked == true) {
					$(".tamanhoGG.brancoProduto").css("display", "flex");
				}
				if (cinza.checked == true) {
					$(".tamanhoGG.cinzaProduto").css("display", "flex");
				}
				if (laranja.checked == true) {
					$(".tamanhoGG.laranjaProduto").css("display", "flex");
				}
				if (verde.checked == true) {
					$(".tamanhoGG.verdeProduto").css("display", "flex");
				}
				if (vermelho.checked == true) {
					$(".tamanhoGG.vermelhoProduto").css("display", "flex");
				}
				if (preto.checked == true) {
					$(".tamanhoGG.pretoProduto").css("display", "flex");
				}
				if (rosa.checked == true) {
					$(".tamanhoGG.rosaProduto").css("display", "flex");
				}
				if (vinho.checked == true) {
					$(".tamanhoGG.vinhoProduto").css("display", "flex");
				}
			}
			if (tamanhoU.checked == true) {
				$(".tamanhoP").hide();
				$(".tamanhoM").hide();
				$(".tamanhoG").hide();
				$(".tamanhoGG").hide();
				$(".tamanho36").hide();
				$(".tamanho38").hide();
				$(".tamanho40").hide();
				$(".tamanho42").hide();
				$(".tamanho44").hide();
				$(".tamanho46").hide();
				if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanhoU").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanhoU.faixaPreco1").css("display", "flex");
							if (faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa2.checked == true) {
							$(".tamanhoU.faixaPreco2").css("display", "flex");
							if (faixa1.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa3.checked == true) {
							$(".tamanhoU.faixaPreco3").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa4.checked == true) {
							$(".tamanhoU.faixaPreco4").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa5.checked == true) {
							$(".tamanhoU.faixaPreco5").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
							}
						}
					}
				}
				if (amarelo.checked == true) {
					$(".tamanhoU.amareloProduto").css("display", "flex");
				}
				if (azul.checked == true) {
					$(".tamanhoU.azulProduto").css("display", "flex");
				}
				if (branco.checked == true) {
					$(".tamanhoU.brancoProduto").css("display", "flex");
				}
				if (cinza.checked == true) {
					$(".tamanhoU.cinzaProduto").css("display", "flex");
				}
				if (laranja.checked == true) {
					$(".tamanhoU.laranjaProduto").css("display", "flex");
				}
				if (verde.checked == true) {
					$(".tamanhoU.verdeProduto").css("display", "flex");
				}
				if (vermelho.checked == true) {
					$(".tamanhoU.vermelhoProduto").css("display", "flex");
				}
				if (preto.checked == true) {
					$(".tamanhoU.pretoProduto").css("display", "flex");
				}
				if (rosa.checked == true) {
					$(".tamanhoU.rosaProduto").css("display", "flex");
				}
				if (vinho.checked == true) {
					$(".tamanhoU.vinhoProduto").css("display", "flex");
				}
			}
			if (tamanho36.checked == true) {
				$(".tamanhoP").hide();
				$(".tamanhoM").hide();
				$(".tamanhoG").hide();
				$(".tamanhoGG").hide();
				$(".tamanhoU").hide();
				$(".tamanho38").hide();
				$(".tamanho40").hide();
				$(".tamanho42").hide();
				$(".tamanho44").hide();
				$(".tamanho46").hide();
				if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanho36").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanho36.faixaPreco1").css("display", "flex");
							if (faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa2.checked == true) {
							$(".tamanho36.faixaPreco2").css("display", "flex");
							if (faixa1.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa3.checked == true) {
							$(".tamanho36.faixaPreco3").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa4.checked == true) {
							$(".tamanho36.faixaPreco4").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa5.checked == true) {
							$(".tamanho36.faixaPreco5").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
							}
						}
					}
				}
				if (amarelo.checked == true) {
					$(".tamanho36.amareloProduto").css("display", "flex");
				}
				if (azul.checked == true) {
					$(".tamanho36.azulProduto").css("display", "flex");
				}
				if (branco.checked == true) {
					$(".tamanho36.brancoProduto").css("display", "flex");
				}
				if (cinza.checked == true) {
					$(".tamanho36.cinzaProduto").css("display", "flex");
				}
				if (laranja.checked == true) {
					$(".tamanho36.laranjaProduto").css("display", "flex");
				}
				if (verde.checked == true) {
					$(".tamanho36.verdeProduto").css("display", "flex");
				}
				if (vermelho.checked == true) {
					$(".tamanho36.vermelhoProduto").css("display", "flex");
				}
				if (preto.checked == true) {
					$(".tamanho36.pretoProduto").css("display", "flex");
				}
				if (rosa.checked == true) {
					$(".tamanho36.rosaProduto").css("display", "flex");
				}
				if (vinho.checked == true) {
					$(".tamanho36.vinhoProduto").css("display", "flex");
				}
			}
			if (tamanho38.checked == true) {
				$(".tamanhoP").hide();
				$(".tamanhoM").hide();
				$(".tamanhoG").hide();
				$(".tamanhoGG").hide();
				$(".tamanhoU").hide();
				$(".tamanho36").hide();
				$(".tamanho40").hide();
				$(".tamanho42").hide();
				$(".tamanho44").hide();
				$(".tamanho46").hide();
				if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanho38").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanho38.faixaPreco1").css("display", "flex");
							if (faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa2.checked == true) {
							$(".tamanho38.faixaPreco2").css("display", "flex");
							if (faixa1.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa3.checked == true) {
							$(".tamanho38.faixaPreco3").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa4.checked == true) {
							$(".tamanho38.faixaPreco4").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa5.checked == true) {
							$(".tamanho38.faixaPreco5").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
							}
						}
					}
				}
				if (amarelo.checked == true) {
					$(".tamanho38.amareloProduto").css("display", "flex");
				}
				if (azul.checked == true) {
					$(".tamanho38.azulProduto").css("display", "flex");
				}
				if (branco.checked == true) {
					$(".tamanho38.brancoProduto").css("display", "flex");
				}
				if (cinza.checked == true) {
					$(".tamanho38.cinzaProduto").css("display", "flex");
				}
				if (laranja.checked == true) {
					$(".tamanho38.laranjaProduto").css("display", "flex");
				}
				if (verde.checked == true) {
					$(".tamanho38.verdeProduto").css("display", "flex");
				}
				if (vermelho.checked == true) {
					$(".tamanho38.vermelhoProduto").css("display", "flex");
				}
				if (preto.checked == true) {
					$(".tamanho38.pretoProduto").css("display", "flex");
				}
				if (rosa.checked == true) {
					$(".tamanho38.rosaProduto").css("display", "flex");
				}
				if (vinho.checked == true) {
					$(".tamanho38.vinhoProduto").css("display", "flex");
				}
			}
			if (tamanho40.checked == true) {
				$(".tamanhoP").hide();
				$(".tamanhoM").hide();
				$(".tamanhoG").hide();
				$(".tamanhoGG").hide();
				$(".tamanhoU").hide();
				$(".tamanho36").hide();
				$(".tamanho38").hide();
				$(".tamanho42").hide();
				$(".tamanho44").hide();
				$(".tamanho46").hide();
				if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanho40").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanho40.faixaPreco1").css("display", "flex");
							if (faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa2.checked == true) {
							$(".tamanho40.faixaPreco2").css("display", "flex");
							if (faixa1.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa3.checked == true) {
							$(".tamanho40.faixaPreco3").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa4.checked == true) {
							$(".tamanho40.faixaPreco4").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa5.checked == true) {
							$(".tamanho40.faixaPreco5").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
							}
						}
					}
				}
				if (amarelo.checked == true) {
					$(".tamanho40.amareloProduto").css("display", "flex");
				}
				if (azul.checked == true) {
					$(".tamanho40.azulProduto").css("display", "flex");
				}
				if (branco.checked == true) {
					$(".tamanho40.brancoProduto").css("display", "flex");
				}
				if (cinza.checked == true) {
					$(".tamanho40.cinzaProduto").css("display", "flex");
				}
				if (laranja.checked == true) {
					$(".tamanho40.laranjaProduto").css("display", "flex");
				}
				if (verde.checked == true) {
					$(".tamanho40.verdeProduto").css("display", "flex");
				}
				if (vermelho.checked == true) {
					$(".tamanho40.vermelhoProduto").css("display", "flex");
				}
				if (preto.checked == true) {
					$(".tamanho40.pretoProduto").css("display", "flex");
				}
				if (rosa.checked == true) {
					$(".tamanho40.rosaProduto").css("display", "flex");
				}
				if (vinho.checked == true) {
					$(".tamanho40.vinhoProduto").css("display", "flex");
				}
			}
			if (tamanho42.checked == true) {
				$(".tamanhoP").hide();
				$(".tamanhoM").hide();
				$(".tamanhoG").hide();
				$(".tamanhoGG").hide();
				$(".tamanhoU").hide();
				$(".tamanho36").hide();
				$(".tamanho38").hide();
				$(".tamanho40").hide();
				$(".tamanho44").hide();
				$(".tamanho46").hide();
				if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanho42").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanho42.faixaPreco1").css("display", "flex");
							if (faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa2.checked == true) {
							$(".tamanho42.faixaPreco2").css("display", "flex");
							if (faixa1.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa3.checked == true) {
							$(".tamanho42.faixaPreco3").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa4.checked == true) {
							$(".tamanho42.faixaPreco4").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa5.checked == true) {
							$(".tamanho42.faixaPreco5").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
							}
						}
					}
				}
				if (amarelo.checked == true) {
					$(".tamanho42.amareloProduto").css("display", "flex");
				}
				if (azul.checked == true) {
					$(".tamanho42.azulProduto").css("display", "flex");
				}
				if (branco.checked == true) {
					$(".tamanho42.brancoProduto").css("display", "flex");
				}
				if (cinza.checked == true) {
					$(".tamanho42.cinzaProduto").css("display", "flex");
				}
				if (laranja.checked == true) {
					$(".tamanho42.laranjaProduto").css("display", "flex");
				}
				if (verde.checked == true) {
					$(".tamanho42.verdeProduto").css("display", "flex");
				}
				if (vermelho.checked == true) {
					$(".tamanho42.vermelhoProduto").css("display", "flex");
				}
				if (preto.checked == true) {
					$(".tamanho42.pretoProduto").css("display", "flex");
				}
				if (rosa.checked == true) {
					$(".tamanho42.rosaProduto").css("display", "flex");
				}
				if (vinho.checked == true) {
					$(".tamanho42.vinhoProduto").css("display", "flex");
				}
			}
			if (tamanho44.checked == true) {
				$(".tamanhoP").hide();
				$(".tamanhoM").hide();
				$(".tamanhoG").hide();
				$(".tamanhoGG").hide();
				$(".tamanhoU").hide();
				$(".tamanho36").hide();
				$(".tamanho38").hide();
				$(".tamanho40").hide();
				$(".tamanho42").hide();
				$(".tamanho46").hide();
				if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanho44").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanho44.faixaPreco1").css("display", "flex");
							if (faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa2.checked == true) {
							$(".tamanho44.faixaPreco2").css("display", "flex");
							if (faixa1.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa3.checked == true) {
							$(".tamanho44.faixaPreco3").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa4.checked == true) {
							$(".tamanho44.faixaPreco4").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa5.checked == true) {
							$(".tamanho44.faixaPreco5").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
							}
						}
					}
				}
				if (amarelo.checked == true) {
					$(".tamanho44.amareloProduto").css("display", "flex");
				}
				if (azul.checked == true) {
					$(".tamanho44.azulProduto").css("display", "flex");
				}
				if (branco.checked == true) {
					$(".tamanho44.brancoProduto").css("display", "flex");
				}
				if (cinza.checked == true) {
					$(".tamanho44.cinzaProduto").css("display", "flex");
				}
				if (laranja.checked == true) {
					$(".tamanho44.laranjaProduto").css("display", "flex");
				}
				if (verde.checked == true) {
					$(".tamanho44.verdeProduto").css("display", "flex");
				}
				if (vermelho.checked == true) {
					$(".tamanho44.vermelhoProduto").css("display", "flex");
				}
				if (preto.checked == true) {
					$(".tamanho44.pretoProduto").css("display", "flex");
				}
				if (rosa.checked == true) {
					$(".tamanho44.rosaProduto").css("display", "flex");
				}
				if (vinho.checked == true) {
					$(".tamanho44.vinhoProduto").css("display", "flex");
				}
			}
			if (tamanho46.checked == true) {
				$(".tamanhoP").hide();
				$(".tamanhoM").hide();
				$(".tamanhoG").hide();
				$(".tamanhoGG").hide();
				$(".tamanhoU").hide();
				$(".tamanho36").hide();
				$(".tamanho38").hide();
				$(".tamanho40").hide();
				$(".tamanho42").hide();
				$(".tamanho44").hide();
				if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanho46").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanho46.faixaPreco1").css("display", "flex");
							if (faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa2.checked == true) {
							$(".tamanho46.faixaPreco2").css("display", "flex");
							if (faixa1.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa3.checked == true) {
							$(".tamanho46.faixaPreco3").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa4.checked == true) {
							$(".tamanho46.faixaPreco4").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa5.checked == true) {
							$(".tamanho46.faixaPreco5").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
							}
						}
					}
				}
				if (amarelo.checked == true) {
					$(".tamanho46.amareloProduto").css("display", "flex");
				}
				if (azul.checked == true) {
					$(".tamanho46.azulProduto").css("display", "flex");
				}
				if (branco.checked == true) {
					$(".tamanho46.brancoProduto").css("display", "flex");
				}
				if (cinza.checked == true) {
					$(".tamanho46.cinzaProduto").css("display", "flex");
				}
				if (laranja.checked == true) {
					$(".tamanho46.laranjaProduto").css("display", "flex");
				}
				if (verde.checked == true) {
					$(".tamanho46.verdeProduto").css("display", "flex");
				}
				if (vermelho.checked == true) {
					$(".tamanho46.vermelhoProduto").css("display", "flex");
				}
				if (preto.checked == true) {
					$(".tamanho46.pretoProduto").css("display", "flex");
				}
				if (rosa.checked == true) {
					$(".tamanho46.rosaProduto").css("display", "flex");
				}
				if (vinho.checked == true) {
					$(".tamanho46.vinhoProduto").css("display", "flex");
				}
			}
		}
	})

	$("#faixa_3").click(function () {
		if (faixa3.checked == true) {
			if (tamanhoP.checked == false && tamanhoM.checked == false && tamanhoG.checked == false && tamanhoGG.checked == false && tamanhoU.checked == false && tamanho36.checked == false && tamanho38.checked == false && tamanho40.checked == false && tamanho42.checked == false && tamanho44.checked == false && tamanho46.checked == false) {
				if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
					$(".faixaPreco3").css("display", "flex");
				}
				if (amarelo.checked == true) {
					$(".amareloProduto.faixaPreco3").css("display", "flex");
				}
				if (azul.checked == true) {
					$(".azulProduto.faixaPreco3").css("display", "flex");
				}
				if (branco.checked == true) {
					$(".brancoProduto.faixaPreco3").css("display", "flex");
				}
				if (cinza.checked == true) {
					$(".cinzaProduto.faixaPreco3").css("display", "flex");
				}
				if (laranja.checked == true) {
					$(".laranjaProduto.faixaPreco3").css("display", "flex");
				}
				if (verde.checked == true) {
					$(".verdeProduto.faixaPreco3").css("display", "flex");
				}
				if (vermelho.checked == true) {
					$(".vermelhoProduto.faixaPreco3").css("display", "flex");
				}
				if (preto.checked == true) {
					$(".pretoProduto.faixaPreco3").css("display", "flex");
				}
				if (rosa.checked == true) {
					$(".rosaProduto.faixaPreco3").css("display", "flex");
				}
				if (vinho.checked == true) {
					$(".vinhoProduto.faixaPreco3").css("display", "flex");
				}
			} else {
				if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
					if (tamanhoP.checked == true) {
						$(".tamanhoP.faixaPreco3").css("display", "flex");
					}
					if (tamanhoM.checked == true) {
						$(".tamanhoM.faixaPreco3").css("display", "flex");
					}
					if (tamanhoG.checked == true) {
						$(".tamanhoG.faixaPreco3").css("display", "flex");
					}
					if (tamanhoGG.checked == true) {
						$(".tamanhoGG.faixaPreco3").css("display", "flex");
					}
					if (tamanhoU.checked == true) {
						$(".tamanhoU.faixaPreco3").css("display", "flex");
					}
					if (tamanho36.checked == true) {
						$(".tamanho36.faixaPreco3").css("display", "flex");
					}
					if (tamanho38.checked == true) {
						$(".tamanho38.faixaPreco3").css("display", "flex");
					}
					if (tamanho40.checked == true) {
						$(".tamanho40.faixaPreco3").css("display", "flex");
					}
					if (tamanho42.checked == true) {
						$(".tamanho42.faixaPreco3").css("display", "flex");
					}
					if (tamanho44.checked == true) {
						$(".tamanho44.faixaPreco3").css("display", "flex");
					}
					if (tamanho46.checked == true) {
						$(".tamanho46.faixaPreco3").css("display", "flex");
					}
				} else {
					if (amarelo.checked == true) {
						if (tamanhoP.checked == true) {
							$(".amareloProduto.tamanhoP.faixaPreco3").css("display", "flex");
						}
						if (tamanhoM.checked == true) {
							$(".amareloProduto.tamanhoM.faixaPreco3").css("display", "flex");
						}
						if (tamanhoG.checked == true) {
							$(".amareloProduto.tamanhoG.faixaPreco3").css("display", "flex");
						}
						if (tamanhoGG.checked == true) {
							$(".amareloProduto.tamanhoGG.faixaPreco3").css("display", "flex");
						}
						if (tamanhoU.checked == true) {
							$(".amareloProduto.tamanhoU.faixaPreco3").css("display", "flex");
						}
						if (tamanho36.checked == true) {
							$(".amareloProduto.tamanho36.faixaPreco3").css("display", "flex");
						}
						if (tamanho38.checked == true) {
							$(".amareloProduto.tamanho38.faixaPreco3").css("display", "flex");
						}
						if (tamanho40.checked == true) {
							$(".amareloProduto.tamanho40.faixaPreco3").css("display", "flex");
						}
						if (tamanho42.checked == true) {
							$(".amareloProduto.tamanho42.faixaPreco3").css("display", "flex");
						}
						if (tamanho44.checked == true) {
							$(".amareloProduto.tamanho44.faixaPreco3").css("display", "flex");
						}
						if (tamanho46.checked == true) {
							$(".amareloProduto.tamanho46.faixaPreco3").css("display", "flex");
						}
					}
					if (azul.checked == true) {
						if (tamanhoP.checked == true) {
							$(".azulProduto.tamanhoP.faixaPreco3").css("display", "flex");
						}
						if (tamanhoM.checked == true) {
							$(".azulProduto.tamanhoM.faixaPreco3").css("display", "flex");
						}
						if (tamanhoG.checked == true) {
							$(".azulProduto.tamanhoG.faixaPreco3").css("display", "flex");
						}
						if (tamanhoGG.checked == true) {
							$(".azulProduto.tamanhoGG.faixaPreco3").css("display", "flex");
						}
						if (tamanhoU.checked == true) {
							$(".azulProduto.tamanhoU.faixaPreco3").css("display", "flex");
						}
						if (tamanho36.checked == true) {
							$(".azulProduto.tamanho36.faixaPreco3").css("display", "flex");
						}
						if (tamanho38.checked == true) {
							$(".azulProduto.tamanho38.faixaPreco3").css("display", "flex");
						}
						if (tamanho40.checked == true) {
							$(".azulProduto.tamanho40.faixaPreco3").css("display", "flex");
						}
						if (tamanho42.checked == true) {
							$(".azulProduto.tamanho42.faixaPreco3").css("display", "flex");
						}
						if (tamanho44.checked == true) {
							$(".azulProduto.tamanho44.faixaPreco3").css("display", "flex");
						}
						if (tamanho46.checked == true) {
							$(".azulProduto.tamanho46.faixaPreco3").css("display", "flex");
						}
					}
					if (branco.checked == true) {
						if (tamanhoP.checked == true) {
							$(".brancoProduto.tamanhoP.faixaPreco3").css("display", "flex");
						}
						if (tamanhoM.checked == true) {
							$(".brancoProduto.tamanhoM.faixaPreco3").css("display", "flex");
						}
						if (tamanhoG.checked == true) {
							$(".brancoProduto.tamanhoG.faixaPreco3").css("display", "flex");
						}
						if (tamanhoGG.checked == true) {
							$(".brancoProduto.tamanhoGG.faixaPreco3").css("display", "flex");
						}
						if (tamanhoU.checked == true) {
							$(".brancoProduto.tamanhoU.faixaPreco3").css("display", "flex");
						}
						if (tamanho36.checked == true) {
							$(".brancoProduto.tamanho36.faixaPreco3").css("display", "flex");
						}
						if (tamanho38.checked == true) {
							$(".brancoProduto.tamanho38.faixaPreco3").css("display", "flex");
						}
						if (tamanho40.checked == true) {
							$(".brancoProduto.tamanho40.faixaPreco3").css("display", "flex");
						}
						if (tamanho42.checked == true) {
							$(".brancoProduto.tamanho42.faixaPreco3").css("display", "flex");
						}
						if (tamanho44.checked == true) {
							$(".brancoProduto.tamanho44.faixaPreco3").css("display", "flex");
						}
						if (tamanho46.checked == true) {
							$(".brancoProduto.tamanho46.faixaPreco3").css("display", "flex");
						}
					}
					if (cinza.checked == true) {
						if (tamanhoP.checked == true) {
							$(".cinzaProduto.tamanhoP.faixaPreco3").css("display", "flex");
						}
						if (tamanhoM.checked == true) {
							$(".cinzaProduto.tamanhoM.faixaPreco3").css("display", "flex");
						}
						if (tamanhoG.checked == true) {
							$(".cinzaProduto.tamanhoG.faixaPreco3").css("display", "flex");
						}
						if (tamanhoGG.checked == true) {
							$(".cinzaProduto.tamanhoGG.faixaPreco3").css("display", "flex");
						}
						if (tamanhoU.checked == true) {
							$(".cinzaProduto.tamanhoU.faixaPreco3").css("display", "flex");
						}
						if (tamanho36.checked == true) {
							$(".cinzaProduto.tamanho36.faixaPreco3").css("display", "flex");
						}
						if (tamanho38.checked == true) {
							$(".cinzaProduto.tamanho38.faixaPreco3").css("display", "flex");
						}
						if (tamanho40.checked == true) {
							$(".cinzaProduto.tamanho40.faixaPreco3").css("display", "flex");
						}
						if (tamanho42.checked == true) {
							$(".cinzaProduto.tamanho42.faixaPreco3").css("display", "flex");
						}
						if (tamanho44.checked == true) {
							$(".cinzaProduto.tamanho44.faixaPreco3").css("display", "flex");
						}
						if (tamanho46.checked == true) {
							$(".cinzaProduto.tamanho46.faixaPreco3").css("display", "flex");
						}
					}
					if (laranja.checked == true) {
						if (tamanhoP.checked == true) {
							$(".laranjaProduto.tamanhoP.faixaPreco3").css("display", "flex");
						}
						if (tamanhoM.checked == true) {
							$(".laranjaProduto.tamanhoM.faixaPreco3").css("display", "flex");
						}
						if (tamanhoG.checked == true) {
							$(".laranjaProduto.tamanhoG.faixaPreco3").css("display", "flex");
						}
						if (tamanhoGG.checked == true) {
							$(".laranjaProduto.tamanhoGG.faixaPreco3").css("display", "flex");
						}
						if (tamanhoU.checked == true) {
							$(".laranjaProduto.tamanhoU.faixaPreco3").css("display", "flex");
						}
						if (tamanho36.checked == true) {
							$(".laranjaProduto.tamanho36.faixaPreco3").css("display", "flex");
						}
						if (tamanho38.checked == true) {
							$(".laranjaProduto.tamanho38.faixaPreco3").css("display", "flex");
						}
						if (tamanho40.checked == true) {
							$(".laranjaProduto.tamanho40.faixaPreco3").css("display", "flex");
						}
						if (tamanho42.checked == true) {
							$(".laranjaProduto.tamanho42.faixaPreco3").css("display", "flex");
						}
						if (tamanho44.checked == true) {
							$(".laranjaProduto.tamanho44.faixaPreco3").css("display", "flex");
						}
						if (tamanho46.checked == true) {
							$(".laranjaProduto.tamanho46.faixaPreco3").css("display", "flex");
						}
					}
					if (verde.checked == true) {
						if (tamanhoP.checked == true) {
							$(".verdeProduto.tamanhoP.faixaPreco3").css("display", "flex");
						}
						if (tamanhoM.checked == true) {
							$(".verdeProduto.tamanhoM.faixaPreco3").css("display", "flex");
						}
						if (tamanhoG.checked == true) {
							$(".verdeProduto.tamanhoG.faixaPreco3").css("display", "flex");
						}
						if (tamanhoGG.checked == true) {
							$(".verdeProduto.tamanhoGG.faixaPreco3").css("display", "flex");
						}
						if (tamanhoU.checked == true) {
							$(".verdeProduto.tamanhoU.faixaPreco3").css("display", "flex");
						}
						if (tamanho36.checked == true) {
							$(".verdeProduto.tamanho36.faixaPreco3").css("display", "flex");
						}
						if (tamanho38.checked == true) {
							$(".verdeProduto.tamanho38.faixaPreco3").css("display", "flex");
						}
						if (tamanho40.checked == true) {
							$(".verdeProduto.tamanho40.faixaPreco3").css("display", "flex");
						}
						if (tamanho42.checked == true) {
							$(".verdeProduto.tamanho42.faixaPreco3").css("display", "flex");
						}
						if (tamanho44.checked == true) {
							$(".verdeProduto.tamanho44.faixaPreco3").css("display", "flex");
						}
						if (tamanho46.checked == true) {
							$(".verdeProduto.tamanho46.faixaPreco3").css("display", "flex");
						}
					}
					if (vermelho.checked == true) {
						if (tamanhoP.checked == true) {
							$(".vermelhoProduto.tamanhoP.faixaPreco3").css("display", "flex");
						}
						if (tamanhoM.checked == true) {
							$(".vermelhoProduto.tamanhoM.faixaPreco3").css("display", "flex");
						}
						if (tamanhoG.checked == true) {
							$(".vermelhoProduto.tamanhoG.faixaPreco3").css("display", "flex");
						}
						if (tamanhoGG.checked == true) {
							$(".vermelhoProduto.tamanhoGG.faixaPreco3").css("display", "flex");
						}
						if (tamanhoU.checked == true) {
							$(".vermelhoProduto.tamanhoU.faixaPreco3").css("display", "flex");
						}
						if (tamanho36.checked == true) {
							$(".vermelhoProduto.tamanho36.faixaPreco3").css("display", "flex");
						}
						if (tamanho38.checked == true) {
							$(".vermelhoProduto.tamanho38.faixaPreco3").css("display", "flex");
						}
						if (tamanho40.checked == true) {
							$(".vermelhoProduto.tamanho40.faixaPreco3").css("display", "flex");
						}
						if (tamanho42.checked == true) {
							$(".vermelhoProduto.tamanho42.faixaPreco3").css("display", "flex");
						}
						if (tamanho44.checked == true) {
							$(".vermelhoProduto.tamanho44.faixaPreco3").css("display", "flex");
						}
						if (tamanho46.checked == true) {
							$(".vermelhoProduto.tamanho46.faixaPreco3").css("display", "flex");
						}
					}
					if (preto.checked == true) {
						if (tamanhoP.checked == true) {
							$(".pretoProduto.tamanhoP.faixaPreco3").css("display", "flex");
						}
						if (tamanhoM.checked == true) {
							$(".pretoProduto.tamanhoM.faixaPreco3").css("display", "flex");
						}
						if (tamanhoG.checked == true) {
							$(".pretoProduto.tamanhoG.faixaPreco3").css("display", "flex");
						}
						if (tamanhoGG.checked == true) {
							$(".pretoProduto.tamanhoGG.faixaPreco3").css("display", "flex");
						}
						if (tamanhoU.checked == true) {
							$(".pretoProduto.tamanhoU.faixaPreco3").css("display", "flex");
						}
						if (tamanho36.checked == true) {
							$(".pretoProduto.tamanho36.faixaPreco3").css("display", "flex");
						}
						if (tamanho38.checked == true) {
							$(".pretoProduto.tamanho38.faixaPreco3").css("display", "flex");
						}
						if (tamanho40.checked == true) {
							$(".pretoProduto.tamanho40.faixaPreco3").css("display", "flex");
						}
						if (tamanho42.checked == true) {
							$(".pretoProduto.tamanho42.faixaPreco3").css("display", "flex");
						}
						if (tamanho44.checked == true) {
							$(".pretoProduto.tamanho44.faixaPreco3").css("display", "flex");
						}
						if (tamanho46.checked == true) {
							$(".pretoProduto.tamanho46.faixaPreco3").css("display", "flex");
						}
					}
					if (rosa.checked == true) {
						if (tamanhoP.checked == true) {
							$(".rosaProduto.tamanhoP.faixaPreco3").css("display", "flex");
						}
						if (tamanhoM.checked == true) {
							$(".rosaProduto.tamanhoM.faixaPreco3").css("display", "flex");
						}
						if (tamanhoG.checked == true) {
							$(".rosaProduto.tamanhoG.faixaPreco3").css("display", "flex");
						}
						if (tamanhoGG.checked == true) {
							$(".rosaProduto.tamanhoGG.faixaPreco3").css("display", "flex");
						}
						if (tamanhoU.checked == true) {
							$(".rosaProduto.tamanhoU.faixaPreco3").css("display", "flex");
						}
						if (tamanho36.checked == true) {
							$(".rosaProduto.tamanho36.faixaPreco3").css("display", "flex");
						}
						if (tamanho38.checked == true) {
							$(".rosaProduto.tamanho38.faixaPreco3").css("display", "flex");
						}
						if (tamanho40.checked == true) {
							$(".rosaProduto.tamanho40.faixaPreco3").css("display", "flex");
						}
						if (tamanho42.checked == true) {
							$(".rosaProduto.tamanho42.faixaPreco3").css("display", "flex");
						}
						if (tamanho44.checked == true) {
							$(".rosaProduto.tamanho44.faixaPreco3").css("display", "flex");
						}
						if (tamanho46.checked == true) {
							$(".rosaProduto.tamanho46.faixaPreco3").css("display", "flex");
						}
					}
					if (vinho.checked == true) {
						if (tamanhoP.checked == true) {
							$(".vinhoProduto.tamanhoP.faixaPreco3").css("display", "flex");
						}
						if (tamanhoM.checked == true) {
							$(".vinhoProduto.tamanhoM.faixaPreco3").css("display", "flex");
						}
						if (tamanhoG.checked == true) {
							$(".vinhoProduto.tamanhoG.faixaPreco3").css("display", "flex");
						}
						if (tamanhoGG.checked == true) {
							$(".vinhoProduto.tamanhoGG.faixaPreco3").css("display", "flex");
						}
						if (tamanhoU.checked == true) {
							$(".vinhoProduto.tamanhoU.faixaPreco3").css("display", "flex");
						}
						if (tamanho36.checked == true) {
							$(".vinhoProduto.tamanho36.faixaPreco3").css("display", "flex");
						}
						if (tamanho38.checked == true) {
							$(".vinhoProduto.tamanho38.faixaPreco3").css("display", "flex");
						}
						if (tamanho40.checked == true) {
							$(".vinhoProduto.tamanho40.faixaPreco3").css("display", "flex");
						}
						if (tamanho42.checked == true) {
							$(".vinhoProduto.tamanho42.faixaPreco3").css("display", "flex");
						}
						if (tamanho44.checked == true) {
							$(".vinhoProduto.tamanho44.faixaPreco3").css("display", "flex");
						}
						if (tamanho46.checked == true) {
							$(".vinhoProduto.tamanho46.faixaPreco3").css("display", "flex");
						}
					}
				}
			}
			if (faixa1.checked == false) {
				$(".faixaPreco1").hide();
			}
			if (faixa2.checked == false) {
				$(".faixaPreco2").hide();
			}
			if (faixa4.checked == false) {
				$(".faixaPreco4").hide();
			}
			if (faixa5.checked == false) {
				$(".faixaPreco5").hide();
			}

		} else {
			$(".faixaPreco3").hide();

			if (tamanhoP.checked == false && tamanhoM.checked == false && tamanhoG.checked == false && tamanhoGG.checked == false && tamanhoU.checked == false && tamanho36.checked == false && tamanho38.checked == false && tamanho40.checked == false && tamanho42.checked == false && tamanho44.checked == false && tamanho46.checked == false) {
				if (faixa1.checked == true) {
					if (faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".faixaPreco2").hide();
						$(".faixaPreco3").hide();
						$(".faixaPreco4").hide();
						$(".faixaPreco5").hide();
					}
					if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
						$(".faixaPreco1").css("display", "flex");
					}
					if (amarelo.checked == true) {
						$(".faixaPreco1.amareloProduto").css("display", "flex");
					}
					if (azul.checked == true) {
						$(".faixaPreco1.azulProduto").css("display", "flex");
					}
					if (branco.checked == true) {
						$(".faixaPreco1.brancoProduto").css("display", "flex");
					}
					if (cinza.checked == true) {
						$(".faixaPreco1.cinzaProduto").css("display", "flex");
					}
					if (laranja.checked == true) {
						$(".faixaPreco1.laranjaProduto").css("display", "flex");
					}
					if (verde.checked == true) {
						$(".faixaPreco1.verdeProduto").css("display", "flex");
					}
					if (vermelho.checked == true) {
						$(".faixaPreco1.vermelhoProduto").css("display", "flex");
					}
					if (preto.checked == true) {
						$(".faixaPreco1.pretoProduto").css("display", "flex");
					}
					if (rosa.checked == true) {
						$(".faixaPreco1.rosaProduto").css("display", "flex");
					}
					if (vinho.checked == true) {
						$(".faixaPreco1.vinhoProduto").css("display", "flex");
					}
				}
				if (faixa2.checked == true) {
					if (faixa1.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".faixaPreco1").hide();
						$(".faixaPreco3").hide();
						$(".faixaPreco4").hide();
						$(".faixaPreco5").hide();
					}
					if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
						$(".faixaPreco2").css("display", "flex");
					}
					if (amarelo.checked == true) {
						$(".faixaPreco2.amareloProduto").css("display", "flex");
					}
					if (azul.checked == true) {
						$(".faixaPreco2.azulProduto").css("display", "flex");
					}
					if (branco.checked == true) {
						$(".faixaPreco2.brancoProduto").css("display", "flex");
					}
					if (cinza.checked == true) {
						$(".faixaPreco2.cinzaProduto").css("display", "flex");
					}
					if (laranja.checked == true) {
						$(".faixaPreco2.laranjaProduto").css("display", "flex");
					}
					if (verde.checked == true) {
						$(".faixaPreco2.verdeProduto").css("display", "flex");
					}
					if (vermelho.checked == true) {
						$(".faixaPreco2.vermelhoProduto").css("display", "flex");
					}
					if (preto.checked == true) {
						$(".faixaPreco2.pretoProduto").css("display", "flex");
					}
					if (rosa.checked == true) {
						$(".faixaPreco2.rosaProduto").css("display", "flex");
					}
					if (vinho.checked == true) {
						$(".faixaPreco2.vinhoProduto").css("display", "flex");
					}
				}
				if (faixa3.checked == true) {
					if (faixa1.checked == false && faixa2.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".faixaPreco1").hide();
						$(".faixaPreco2").hide();
						$(".faixaPreco4").hide();
						$(".faixaPreco5").hide();
					}
					if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
						$(".faixaPreco3").css("display", "flex");
					}
					if (amarelo.checked == true) {
						$(".faixaPreco3.amareloProduto").css("display", "flex");
					}
					if (azul.checked == true) {
						$(".faixaPreco3.azulProduto").css("display", "flex");
					}
					if (branco.checked == true) {
						$(".faixaPreco3.brancoProduto").css("display", "flex");
					}
					if (cinza.checked == true) {
						$(".faixaPreco3.cinzaProduto").css("display", "flex");
					}
					if (laranja.checked == true) {
						$(".faixaPreco3.laranjaProduto").css("display", "flex");
					}
					if (verde.checked == true) {
						$(".faixaPreco3.verdeProduto").css("display", "flex");
					}
					if (vermelho.checked == true) {
						$(".faixaPreco3.vermelhoProduto").css("display", "flex");
					}
					if (preto.checked == true) {
						$(".faixaPreco3.pretoProduto").css("display", "flex");
					}
					if (rosa.checked == true) {
						$(".faixaPreco3.rosaProduto").css("display", "flex");
					}
					if (vinho.checked == true) {
						$(".faixaPreco3.vinhoProduto").css("display", "flex");
					}
				}
				if (faixa4.checked == true) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa5.checked == false) {
						$(".faixaPreco1").hide();
						$(".faixaPreco2").hide();
						$(".faixaPreco3").hide();
						$(".faixaPreco5").hide();
					}
					if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
						$(".faixaPreco4").css("display", "flex");
					}
					if (amarelo.checked == true) {
						$(".faixaPreco4.amareloProduto").css("display", "flex");
					}
					if (azul.checked == true) {
						$(".faixaPreco4.azulProduto").css("display", "flex");
					}
					if (branco.checked == true) {
						$(".faixaPreco4.brancoProduto").css("display", "flex");
					}
					if (cinza.checked == true) {
						$(".faixaPreco4.cinzaProduto").css("display", "flex");
					}
					if (laranja.checked == true) {
						$(".faixaPreco4.laranjaProduto").css("display", "flex");
					}
					if (verde.checked == true) {
						$(".faixaPreco4.verdeProduto").css("display", "flex");
					}
					if (vermelho.checked == true) {
						$(".faixaPreco4.vermelhoProduto").css("display", "flex");
					}
					if (preto.checked == true) {
						$(".faixaPreco4.pretoProduto").css("display", "flex");
					}
					if (rosa.checked == true) {
						$(".faixaPreco4.rosaProduto").css("display", "flex");
					}
					if (vinho.checked == true) {
						$(".faixaPreco4.vinhoProduto").css("display", "flex");
					}
				}
				if (faixa5.checked == true) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false) {
						$(".faixaPreco1").hide();
						$(".faixaPreco2").hide();
						$(".faixaPreco3").hide();
						$(".faixaPreco4").hide();
					}
					if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
						$(".faixaPreco5").css("display", "flex");
					}
					if (amarelo.checked == true) {
						$(".faixaPreco5.amareloProduto").css("display", "flex");
					}
					if (azul.checked == true) {
						$(".faixaPreco5.azulProduto").css("display", "flex");
					}
					if (branco.checked == true) {
						$(".faixaPreco5.brancoProduto").css("display", "flex");
					}
					if (cinza.checked == true) {
						$(".faixaPreco5.cinzaProduto").css("display", "flex");
					}
					if (laranja.checked == true) {
						$(".faixaPreco5.laranjaProduto").css("display", "flex");
					}
					if (verde.checked == true) {
						$(".faixaPreco5.verdeProduto").css("display", "flex");
					}
					if (vermelho.checked == true) {
						$(".faixaPreco5.vermelhoProduto").css("display", "flex");
					}
					if (preto.checked == true) {
						$(".faixaPreco5.pretoProduto").css("display", "flex");
					}
					if (rosa.checked == true) {
						$(".faixaPreco5.rosaProduto").css("display", "flex");
					}
					if (vinho.checked == true) {
						$(".faixaPreco5.vinhoProduto").css("display", "flex");
					}
				}
			}
			if (tamanhoP.checked == true) {
				$(".tamanhoM").hide();
				$(".tamanhoG").hide();
				$(".tamanhoGG").hide();
				$(".tamanhoU").hide();
				$(".tamanho36").hide();
				$(".tamanho38").hide();
				$(".tamanho40").hide();
				$(".tamanho42").hide();
				$(".tamanho44").hide();
				$(".tamanho46").hide();
				if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanhoP").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanhoP.faixaPreco1").css("display", "flex");
							if (faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa2.checked == true) {
							$(".tamanhoP.faixaPreco2").css("display", "flex");
							if (faixa1.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa3.checked == true) {
							$(".tamanhoP.faixaPreco3").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa4.checked == true) {
							$(".tamanhoP.faixaPreco4").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa5.checked == true) {
							$(".tamanhoP.faixaPreco5").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
							}
						}
					}
				}
				if (amarelo.checked == true) {
					$(".tamanhoP.amareloProduto").css("display", "flex");
				}
				if (azul.checked == true) {
					$(".tamanhoP.azulProduto").css("display", "flex");
				}
				if (branco.checked == true) {
					$(".tamanhoP.brancoProduto").css("display", "flex");
				}
				if (cinza.checked == true) {
					$(".tamanhoP.cinzaProduto").css("display", "flex");
				}
				if (laranja.checked == true) {
					$(".tamanhoP.laranjaProduto").css("display", "flex");
				}
				if (verde.checked == true) {
					$(".tamanhoP.verdeProduto").css("display", "flex");
				}
				if (vermelho.checked == true) {
					$(".tamanhoP.vermelhoProduto").css("display", "flex");
				}
				if (preto.checked == true) {
					$(".tamanhoP.pretoProduto").css("display", "flex");
				}
				if (rosa.checked == true) {
					$(".tamanhoP.rosaProduto").css("display", "flex");
				}
				if (vinho.checked == true) {
					$(".tamanhoP.vinhoProduto").css("display", "flex");
				}
			}
			if (tamanhoM.checked == true) {
				$(".tamanhoP").hide();
				$(".tamanhoG").hide();
				$(".tamanhoGG").hide();
				$(".tamanhoU").hide();
				$(".tamanho36").hide();
				$(".tamanho38").hide();
				$(".tamanho40").hide();
				$(".tamanho42").hide();
				$(".tamanho44").hide();
				$(".tamanho46").hide();
				if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanhoM").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanhoM.faixaPreco1").css("display", "flex");
							if (faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa2.checked == true) {
							$(".tamanhoM.faixaPreco2").css("display", "flex");
							if (faixa1.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa3.checked == true) {
							$(".tamanhoM.faixaPreco3").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa4.checked == true) {
							$(".tamanhoM.faixaPreco4").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa5.checked == true) {
							$(".tamanhoM.faixaPreco5").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
							}
						}
					}
				}
				if (amarelo.checked == true) {
					$(".tamanhoM.amareloProduto").css("display", "flex");
				}
				if (azul.checked == true) {
					$(".tamanhoM.azulProduto").css("display", "flex");
				}
				if (branco.checked == true) {
					$(".tamanhoM.brancoProduto").css("display", "flex");
				}
				if (cinza.checked == true) {
					$(".tamanhoM.cinzaProduto").css("display", "flex");
				}
				if (laranja.checked == true) {
					$(".tamanhoM.laranjaProduto").css("display", "flex");
				}
				if (verde.checked == true) {
					$(".tamanhoM.verdeProduto").css("display", "flex");
				}
				if (vermelho.checked == true) {
					$(".tamanhoM.vermelhoProduto").css("display", "flex");
				}
				if (preto.checked == true) {
					$(".tamanhoM.pretoProduto").css("display", "flex");
				}
				if (rosa.checked == true) {
					$(".tamanhoM.rosaProduto").css("display", "flex");
				}
				if (vinho.checked == true) {
					$(".tamanhoM.vinhoProduto").css("display", "flex");
				}
			}
			if (tamanhoG.checked == true) {
				$(".tamanhoP").hide();
				$(".tamanhoM").hide();
				$(".tamanhoGG").hide();
				$(".tamanhoU").hide();
				$(".tamanho36").hide();
				$(".tamanho38").hide();
				$(".tamanho40").hide();
				$(".tamanho42").hide();
				$(".tamanho44").hide();
				$(".tamanho46").hide();
				if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanhoG").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanhoG.faixaPreco1").css("display", "flex");
							if (faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa2.checked == true) {
							$(".tamanhoG.faixaPreco2").css("display", "flex");
							if (faixa1.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa3.checked == true) {
							$(".tamanhoG.faixaPreco3").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa4.checked == true) {
							$(".tamanhoG.faixaPreco4").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa5.checked == true) {
							$(".tamanhoG.faixaPreco5").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
							}
						}
					}
				}
				if (amarelo.checked == true) {
					$(".tamanhoG.amareloProduto").css("display", "flex");
				}
				if (azul.checked == true) {
					$(".tamanhoG.azulProduto").css("display", "flex");
				}
				if (branco.checked == true) {
					$(".tamanhoG.brancoProduto").css("display", "flex");
				}
				if (cinza.checked == true) {
					$(".tamanhoG.cinzaProduto").css("display", "flex");
				}
				if (laranja.checked == true) {
					$(".tamanhoG.laranjaProduto").css("display", "flex");
				}
				if (verde.checked == true) {
					$(".tamanhoG.verdeProduto").css("display", "flex");
				}
				if (vermelho.checked == true) {
					$(".tamanhoG.vermelhoProduto").css("display", "flex");
				}
				if (preto.checked == true) {
					$(".tamanhoG.pretoProduto").css("display", "flex");
				}
				if (rosa.checked == true) {
					$(".tamanhoG.rosaProduto").css("display", "flex");
				}
				if (vinho.checked == true) {
					$(".tamanhoG.vinhoProduto").css("display", "flex");
				}
			}
			if (tamanhoGG.checked == true) {
				$(".tamanhoP").hide();
				$(".tamanhoM").hide();
				$(".tamanhoG").hide();
				$(".tamanhoU").hide();
				$(".tamanho36").hide();
				$(".tamanho38").hide();
				$(".tamanho40").hide();
				$(".tamanho42").hide();
				$(".tamanho44").hide();
				$(".tamanho46").hide();
				if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanhoGG").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanhoGG.faixaPreco1").css("display", "flex");
							if (faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa2.checked == true) {
							$(".tamanhoGG.faixaPreco2").css("display", "flex");
							if (faixa1.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa3.checked == true) {
							$(".tamanhoGG.faixaPreco3").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa4.checked == true) {
							$(".tamanhoGG.faixaPreco4").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa5.checked == true) {
							$(".tamanhoGG.faixaPreco5").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
							}
						}
					}
				}
				if (amarelo.checked == true) {
					$(".tamanhoGG.amareloProduto").css("display", "flex");
				}
				if (azul.checked == true) {
					$(".tamanhoGG.azulProduto").css("display", "flex");
				}
				if (branco.checked == true) {
					$(".tamanhoGG.brancoProduto").css("display", "flex");
				}
				if (cinza.checked == true) {
					$(".tamanhoGG.cinzaProduto").css("display", "flex");
				}
				if (laranja.checked == true) {
					$(".tamanhoGG.laranjaProduto").css("display", "flex");
				}
				if (verde.checked == true) {
					$(".tamanhoGG.verdeProduto").css("display", "flex");
				}
				if (vermelho.checked == true) {
					$(".tamanhoGG.vermelhoProduto").css("display", "flex");
				}
				if (preto.checked == true) {
					$(".tamanhoGG.pretoProduto").css("display", "flex");
				}
				if (rosa.checked == true) {
					$(".tamanhoGG.rosaProduto").css("display", "flex");
				}
				if (vinho.checked == true) {
					$(".tamanhoGG.vinhoProduto").css("display", "flex");
				}
			}
			if (tamanhoU.checked == true) {
				$(".tamanhoP").hide();
				$(".tamanhoM").hide();
				$(".tamanhoG").hide();
				$(".tamanhoGG").hide();
				$(".tamanho36").hide();
				$(".tamanho38").hide();
				$(".tamanho40").hide();
				$(".tamanho42").hide();
				$(".tamanho44").hide();
				$(".tamanho46").hide();
				if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanhoU").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanhoU.faixaPreco1").css("display", "flex");
							if (faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa2.checked == true) {
							$(".tamanhoU.faixaPreco2").css("display", "flex");
							if (faixa1.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa3.checked == true) {
							$(".tamanhoU.faixaPreco3").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa4.checked == true) {
							$(".tamanhoU.faixaPreco4").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa5.checked == true) {
							$(".tamanhoU.faixaPreco5").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
							}
						}
					}
				}
				if (amarelo.checked == true) {
					$(".tamanhoU.amareloProduto").css("display", "flex");
				}
				if (azul.checked == true) {
					$(".tamanhoU.azulProduto").css("display", "flex");
				}
				if (branco.checked == true) {
					$(".tamanhoU.brancoProduto").css("display", "flex");
				}
				if (cinza.checked == true) {
					$(".tamanhoU.cinzaProduto").css("display", "flex");
				}
				if (laranja.checked == true) {
					$(".tamanhoU.laranjaProduto").css("display", "flex");
				}
				if (verde.checked == true) {
					$(".tamanhoU.verdeProduto").css("display", "flex");
				}
				if (vermelho.checked == true) {
					$(".tamanhoU.vermelhoProduto").css("display", "flex");
				}
				if (preto.checked == true) {
					$(".tamanhoU.pretoProduto").css("display", "flex");
				}
				if (rosa.checked == true) {
					$(".tamanhoU.rosaProduto").css("display", "flex");
				}
				if (vinho.checked == true) {
					$(".tamanhoU.vinhoProduto").css("display", "flex");
				}
			}
			if (tamanho36.checked == true) {
				$(".tamanhoP").hide();
				$(".tamanhoM").hide();
				$(".tamanhoG").hide();
				$(".tamanhoGG").hide();
				$(".tamanhoU").hide();
				$(".tamanho38").hide();
				$(".tamanho40").hide();
				$(".tamanho42").hide();
				$(".tamanho44").hide();
				$(".tamanho46").hide();
				if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanho36").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanho36.faixaPreco1").css("display", "flex");
							if (faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa2.checked == true) {
							$(".tamanho36.faixaPreco2").css("display", "flex");
							if (faixa1.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa3.checked == true) {
							$(".tamanho36.faixaPreco3").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa4.checked == true) {
							$(".tamanho36.faixaPreco4").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa5.checked == true) {
							$(".tamanho36.faixaPreco5").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
							}
						}
					}
				}
				if (amarelo.checked == true) {
					$(".tamanho36.amareloProduto").css("display", "flex");
				}
				if (azul.checked == true) {
					$(".tamanho36.azulProduto").css("display", "flex");
				}
				if (branco.checked == true) {
					$(".tamanho36.brancoProduto").css("display", "flex");
				}
				if (cinza.checked == true) {
					$(".tamanho36.cinzaProduto").css("display", "flex");
				}
				if (laranja.checked == true) {
					$(".tamanho36.laranjaProduto").css("display", "flex");
				}
				if (verde.checked == true) {
					$(".tamanho36.verdeProduto").css("display", "flex");
				}
				if (vermelho.checked == true) {
					$(".tamanho36.vermelhoProduto").css("display", "flex");
				}
				if (preto.checked == true) {
					$(".tamanho36.pretoProduto").css("display", "flex");
				}
				if (rosa.checked == true) {
					$(".tamanho36.rosaProduto").css("display", "flex");
				}
				if (vinho.checked == true) {
					$(".tamanho36.vinhoProduto").css("display", "flex");
				}
			}
			if (tamanho38.checked == true) {
				$(".tamanhoP").hide();
				$(".tamanhoM").hide();
				$(".tamanhoG").hide();
				$(".tamanhoGG").hide();
				$(".tamanhoU").hide();
				$(".tamanho36").hide();
				$(".tamanho40").hide();
				$(".tamanho42").hide();
				$(".tamanho44").hide();
				$(".tamanho46").hide();
				if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanho38").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanho38.faixaPreco1").css("display", "flex");
							if (faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa2.checked == true) {
							$(".tamanho38.faixaPreco2").css("display", "flex");
							if (faixa1.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa3.checked == true) {
							$(".tamanho38.faixaPreco3").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa4.checked == true) {
							$(".tamanho38.faixaPreco4").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa5.checked == true) {
							$(".tamanho38.faixaPreco5").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
							}
						}
					}
				}
				if (amarelo.checked == true) {
					$(".tamanho38.amareloProduto").css("display", "flex");
				}
				if (azul.checked == true) {
					$(".tamanho38.azulProduto").css("display", "flex");
				}
				if (branco.checked == true) {
					$(".tamanho38.brancoProduto").css("display", "flex");
				}
				if (cinza.checked == true) {
					$(".tamanho38.cinzaProduto").css("display", "flex");
				}
				if (laranja.checked == true) {
					$(".tamanho38.laranjaProduto").css("display", "flex");
				}
				if (verde.checked == true) {
					$(".tamanho38.verdeProduto").css("display", "flex");
				}
				if (vermelho.checked == true) {
					$(".tamanho38.vermelhoProduto").css("display", "flex");
				}
				if (preto.checked == true) {
					$(".tamanho38.pretoProduto").css("display", "flex");
				}
				if (rosa.checked == true) {
					$(".tamanho38.rosaProduto").css("display", "flex");
				}
				if (vinho.checked == true) {
					$(".tamanho38.vinhoProduto").css("display", "flex");
				}
			}
			if (tamanho40.checked == true) {
				$(".tamanhoP").hide();
				$(".tamanhoM").hide();
				$(".tamanhoG").hide();
				$(".tamanhoGG").hide();
				$(".tamanhoU").hide();
				$(".tamanho36").hide();
				$(".tamanho38").hide();
				$(".tamanho42").hide();
				$(".tamanho44").hide();
				$(".tamanho46").hide();
				if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanho40").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanho40.faixaPreco1").css("display", "flex");
							if (faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa2.checked == true) {
							$(".tamanho40.faixaPreco2").css("display", "flex");
							if (faixa1.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa3.checked == true) {
							$(".tamanho40.faixaPreco3").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa4.checked == true) {
							$(".tamanho40.faixaPreco4").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa5.checked == true) {
							$(".tamanho40.faixaPreco5").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
							}
						}
					}
				}
				if (amarelo.checked == true) {
					$(".tamanho40.amareloProduto").css("display", "flex");
				}
				if (azul.checked == true) {
					$(".tamanho40.azulProduto").css("display", "flex");
				}
				if (branco.checked == true) {
					$(".tamanho40.brancoProduto").css("display", "flex");
				}
				if (cinza.checked == true) {
					$(".tamanho40.cinzaProduto").css("display", "flex");
				}
				if (laranja.checked == true) {
					$(".tamanho40.laranjaProduto").css("display", "flex");
				}
				if (verde.checked == true) {
					$(".tamanho40.verdeProduto").css("display", "flex");
				}
				if (vermelho.checked == true) {
					$(".tamanho40.vermelhoProduto").css("display", "flex");
				}
				if (preto.checked == true) {
					$(".tamanho40.pretoProduto").css("display", "flex");
				}
				if (rosa.checked == true) {
					$(".tamanho40.rosaProduto").css("display", "flex");
				}
				if (vinho.checked == true) {
					$(".tamanho40.vinhoProduto").css("display", "flex");
				}
			}
			if (tamanho42.checked == true) {
				$(".tamanhoP").hide();
				$(".tamanhoM").hide();
				$(".tamanhoG").hide();
				$(".tamanhoGG").hide();
				$(".tamanhoU").hide();
				$(".tamanho36").hide();
				$(".tamanho38").hide();
				$(".tamanho40").hide();
				$(".tamanho44").hide();
				$(".tamanho46").hide();
				if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanho42").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanho42.faixaPreco1").css("display", "flex");
							if (faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa2.checked == true) {
							$(".tamanho42.faixaPreco2").css("display", "flex");
							if (faixa1.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa3.checked == true) {
							$(".tamanho42.faixaPreco3").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa4.checked == true) {
							$(".tamanho42.faixaPreco4").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa5.checked == true) {
							$(".tamanho42.faixaPreco5").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
							}
						}
					}
				}
				if (amarelo.checked == true) {
					$(".tamanho42.amareloProduto").css("display", "flex");
				}
				if (azul.checked == true) {
					$(".tamanho42.azulProduto").css("display", "flex");
				}
				if (branco.checked == true) {
					$(".tamanho42.brancoProduto").css("display", "flex");
				}
				if (cinza.checked == true) {
					$(".tamanho42.cinzaProduto").css("display", "flex");
				}
				if (laranja.checked == true) {
					$(".tamanho42.laranjaProduto").css("display", "flex");
				}
				if (verde.checked == true) {
					$(".tamanho42.verdeProduto").css("display", "flex");
				}
				if (vermelho.checked == true) {
					$(".tamanho42.vermelhoProduto").css("display", "flex");
				}
				if (preto.checked == true) {
					$(".tamanho42.pretoProduto").css("display", "flex");
				}
				if (rosa.checked == true) {
					$(".tamanho42.rosaProduto").css("display", "flex");
				}
				if (vinho.checked == true) {
					$(".tamanho42.vinhoProduto").css("display", "flex");
				}
			}
			if (tamanho44.checked == true) {
				$(".tamanhoP").hide();
				$(".tamanhoM").hide();
				$(".tamanhoG").hide();
				$(".tamanhoGG").hide();
				$(".tamanhoU").hide();
				$(".tamanho36").hide();
				$(".tamanho38").hide();
				$(".tamanho40").hide();
				$(".tamanho42").hide();
				$(".tamanho46").hide();
				if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanho44").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanho44.faixaPreco1").css("display", "flex");
							if (faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa2.checked == true) {
							$(".tamanho44.faixaPreco2").css("display", "flex");
							if (faixa1.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa3.checked == true) {
							$(".tamanho44.faixaPreco3").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa4.checked == true) {
							$(".tamanho44.faixaPreco4").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa5.checked == true) {
							$(".tamanho44.faixaPreco5").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
							}
						}
					}
				}
				if (amarelo.checked == true) {
					$(".tamanho44.amareloProduto").css("display", "flex");
				}
				if (azul.checked == true) {
					$(".tamanho44.azulProduto").css("display", "flex");
				}
				if (branco.checked == true) {
					$(".tamanho44.brancoProduto").css("display", "flex");
				}
				if (cinza.checked == true) {
					$(".tamanho44.cinzaProduto").css("display", "flex");
				}
				if (laranja.checked == true) {
					$(".tamanho44.laranjaProduto").css("display", "flex");
				}
				if (verde.checked == true) {
					$(".tamanho44.verdeProduto").css("display", "flex");
				}
				if (vermelho.checked == true) {
					$(".tamanho44.vermelhoProduto").css("display", "flex");
				}
				if (preto.checked == true) {
					$(".tamanho44.pretoProduto").css("display", "flex");
				}
				if (rosa.checked == true) {
					$(".tamanho44.rosaProduto").css("display", "flex");
				}
				if (vinho.checked == true) {
					$(".tamanho44.vinhoProduto").css("display", "flex");
				}
			}
			if (tamanho46.checked == true) {
				$(".tamanhoP").hide();
				$(".tamanhoM").hide();
				$(".tamanhoG").hide();
				$(".tamanhoGG").hide();
				$(".tamanhoU").hide();
				$(".tamanho36").hide();
				$(".tamanho38").hide();
				$(".tamanho40").hide();
				$(".tamanho42").hide();
				$(".tamanho44").hide();
				if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanho46").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanho46.faixaPreco1").css("display", "flex");
							if (faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa2.checked == true) {
							$(".tamanho46.faixaPreco2").css("display", "flex");
							if (faixa1.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa3.checked == true) {
							$(".tamanho46.faixaPreco3").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa4.checked == true) {
							$(".tamanho46.faixaPreco4").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa5.checked == true) {
							$(".tamanho46.faixaPreco5").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
							}
						}
					}
				}
				if (amarelo.checked == true) {
					$(".tamanho46.amareloProduto").css("display", "flex");
				}
				if (azul.checked == true) {
					$(".tamanho46.azulProduto").css("display", "flex");
				}
				if (branco.checked == true) {
					$(".tamanho46.brancoProduto").css("display", "flex");
				}
				if (cinza.checked == true) {
					$(".tamanho46.cinzaProduto").css("display", "flex");
				}
				if (laranja.checked == true) {
					$(".tamanho46.laranjaProduto").css("display", "flex");
				}
				if (verde.checked == true) {
					$(".tamanho46.verdeProduto").css("display", "flex");
				}
				if (vermelho.checked == true) {
					$(".tamanho46.vermelhoProduto").css("display", "flex");
				}
				if (preto.checked == true) {
					$(".tamanho46.pretoProduto").css("display", "flex");
				}
				if (rosa.checked == true) {
					$(".tamanho46.rosaProduto").css("display", "flex");
				}
				if (vinho.checked == true) {
					$(".tamanho46.vinhoProduto").css("display", "flex");
				}
			}
		}
	})

	$("#faixa_4").click(function () {
		if (faixa4.checked == true) {
			if (tamanhoP.checked == false && tamanhoM.checked == false && tamanhoG.checked == false && tamanhoGG.checked == false && tamanhoU.checked == false && tamanho36.checked == false && tamanho38.checked == false && tamanho40.checked == false && tamanho42.checked == false && tamanho44.checked == false && tamanho46.checked == false) {
				if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
					$(".faixaPreco4").css("display", "flex");
				}
				if (amarelo.checked == true) {
					$(".amareloProduto.faixaPreco4").css("display", "flex");
				}
				if (azul.checked == true) {
					$(".azulProduto.faixaPreco4").css("display", "flex");
				}
				if (branco.checked == true) {
					$(".brancoProduto.faixaPreco4").css("display", "flex");
				}
				if (cinza.checked == true) {
					$(".cinzaProduto.faixaPreco4").css("display", "flex");
				}
				if (laranja.checked == true) {
					$(".laranjaProduto.faixaPreco4").css("display", "flex");
				}
				if (verde.checked == true) {
					$(".verdeProduto.faixaPreco4").css("display", "flex");
				}
				if (vermelho.checked == true) {
					$(".vermelhoProduto.faixaPreco4").css("display", "flex");
				}
				if (preto.checked == true) {
					$(".pretoProduto.faixaPreco4").css("display", "flex");
				}
				if (rosa.checked == true) {
					$(".rosaProduto.faixaPreco4").css("display", "flex");
				}
				if (vinho.checked == true) {
					$(".vinhoProduto.faixaPreco4").css("display", "flex");
				}
			} else {
				if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
					if (tamanhoP.checked == true) {
						$(".tamanhoP.faixaPreco4").css("display", "flex");
					}
					if (tamanhoM.checked == true) {
						$(".tamanhoM.faixaPreco4").css("display", "flex");
					}
					if (tamanhoG.checked == true) {
						$(".tamanhoG.faixaPreco4").css("display", "flex");
					}
					if (tamanhoGG.checked == true) {
						$(".tamanhoGG.faixaPreco4").css("display", "flex");
					}
					if (tamanhoU.checked == true) {
						$(".tamanhoU.faixaPreco4").css("display", "flex");
					}
					if (tamanho36.checked == true) {
						$(".tamanho36.faixaPreco4").css("display", "flex");
					}
					if (tamanho38.checked == true) {
						$(".tamanho38.faixaPreco4").css("display", "flex");
					}
					if (tamanho40.checked == true) {
						$(".tamanho40.faixaPreco4").css("display", "flex");
					}
					if (tamanho42.checked == true) {
						$(".tamanho42.faixaPreco4").css("display", "flex");
					}
					if (tamanho44.checked == true) {
						$(".tamanho44.faixaPreco4").css("display", "flex");
					}
					if (tamanho46.checked == true) {
						$(".tamanho46.faixaPreco4").css("display", "flex");
					}
				} else {
					if (amarelo.checked == true) {
						if (tamanhoP.checked == true) {
							$(".amareloProduto.tamanhoP.faixaPreco4").css("display", "flex");
						}
						if (tamanhoM.checked == true) {
							$(".amareloProduto.tamanhoM.faixaPreco4").css("display", "flex");
						}
						if (tamanhoG.checked == true) {
							$(".amareloProduto.tamanhoG.faixaPreco4").css("display", "flex");
						}
						if (tamanhoGG.checked == true) {
							$(".amareloProduto.tamanhoGG.faixaPreco4").css("display", "flex");
						}
						if (tamanhoU.checked == true) {
							$(".amareloProduto.tamanhoU.faixaPreco4").css("display", "flex");
						}
						if (tamanho36.checked == true) {
							$(".amareloProduto.tamanho36.faixaPreco4").css("display", "flex");
						}
						if (tamanho38.checked == true) {
							$(".amareloProduto.tamanho38.faixaPreco4").css("display", "flex");
						}
						if (tamanho40.checked == true) {
							$(".amareloProduto.tamanho40.faixaPreco4").css("display", "flex");
						}
						if (tamanho42.checked == true) {
							$(".amareloProduto.tamanho42.faixaPreco4").css("display", "flex");
						}
						if (tamanho44.checked == true) {
							$(".amareloProduto.tamanho44.faixaPreco4").css("display", "flex");
						}
						if (tamanho46.checked == true) {
							$(".amareloProduto.tamanho46.faixaPreco4").css("display", "flex");
						}
					}
					if (azul.checked == true) {
						if (tamanhoP.checked == true) {
							$(".azulProduto.tamanhoP.faixaPreco4").css("display", "flex");
						}
						if (tamanhoM.checked == true) {
							$(".azulProduto.tamanhoM.faixaPreco4").css("display", "flex");
						}
						if (tamanhoG.checked == true) {
							$(".azulProduto.tamanhoG.faixaPreco4").css("display", "flex");
						}
						if (tamanhoGG.checked == true) {
							$(".azulProduto.tamanhoGG.faixaPreco4").css("display", "flex");
						}
						if (tamanhoU.checked == true) {
							$(".azulProduto.tamanhoU.faixaPreco4").css("display", "flex");
						}
						if (tamanho36.checked == true) {
							$(".azulProduto.tamanho36.faixaPreco4").css("display", "flex");
						}
						if (tamanho38.checked == true) {
							$(".azulProduto.tamanho38.faixaPreco4").css("display", "flex");
						}
						if (tamanho40.checked == true) {
							$(".azulProduto.tamanho40.faixaPreco4").css("display", "flex");
						}
						if (tamanho42.checked == true) {
							$(".azulProduto.tamanho42.faixaPreco4").css("display", "flex");
						}
						if (tamanho44.checked == true) {
							$(".azulProduto.tamanho44.faixaPreco4").css("display", "flex");
						}
						if (tamanho46.checked == true) {
							$(".azulProduto.tamanho46.faixaPreco4").css("display", "flex");
						}
					}
					if (branco.checked == true) {
						if (tamanhoP.checked == true) {
							$(".brancoProduto.tamanhoP.faixaPreco4").css("display", "flex");
						}
						if (tamanhoM.checked == true) {
							$(".brancoProduto.tamanhoM.faixaPreco4").css("display", "flex");
						}
						if (tamanhoG.checked == true) {
							$(".brancoProduto.tamanhoG.faixaPreco4").css("display", "flex");
						}
						if (tamanhoGG.checked == true) {
							$(".brancoProduto.tamanhoGG.faixaPreco4").css("display", "flex");
						}
						if (tamanhoU.checked == true) {
							$(".brancoProduto.tamanhoU.faixaPreco4").css("display", "flex");
						}
						if (tamanho36.checked == true) {
							$(".brancoProduto.tamanho36.faixaPreco4").css("display", "flex");
						}
						if (tamanho38.checked == true) {
							$(".brancoProduto.tamanho38.faixaPreco4").css("display", "flex");
						}
						if (tamanho40.checked == true) {
							$(".brancoProduto.tamanho40.faixaPreco4").css("display", "flex");
						}
						if (tamanho42.checked == true) {
							$(".brancoProduto.tamanho42.faixaPreco4").css("display", "flex");
						}
						if (tamanho44.checked == true) {
							$(".brancoProduto.tamanho44.faixaPreco4").css("display", "flex");
						}
						if (tamanho46.checked == true) {
							$(".brancoProduto.tamanho46.faixaPreco4").css("display", "flex");
						}
					}
					if (cinza.checked == true) {
						if (tamanhoP.checked == true) {
							$(".cinzaProduto.tamanhoP.faixaPreco4").css("display", "flex");
						}
						if (tamanhoM.checked == true) {
							$(".cinzaProduto.tamanhoM.faixaPreco4").css("display", "flex");
						}
						if (tamanhoG.checked == true) {
							$(".cinzaProduto.tamanhoG.faixaPreco4").css("display", "flex");
						}
						if (tamanhoGG.checked == true) {
							$(".cinzaProduto.tamanhoGG.faixaPreco4").css("display", "flex");
						}
						if (tamanhoU.checked == true) {
							$(".cinzaProduto.tamanhoU.faixaPreco4").css("display", "flex");
						}
						if (tamanho36.checked == true) {
							$(".cinzaProduto.tamanho36.faixaPreco4").css("display", "flex");
						}
						if (tamanho38.checked == true) {
							$(".cinzaProduto.tamanho38.faixaPreco4").css("display", "flex");
						}
						if (tamanho40.checked == true) {
							$(".cinzaProduto.tamanho40.faixaPreco4").css("display", "flex");
						}
						if (tamanho42.checked == true) {
							$(".cinzaProduto.tamanho42.faixaPreco4").css("display", "flex");
						}
						if (tamanho44.checked == true) {
							$(".cinzaProduto.tamanho44.faixaPreco4").css("display", "flex");
						}
						if (tamanho46.checked == true) {
							$(".cinzaProduto.tamanho46.faixaPreco4").css("display", "flex");
						}
					}
					if (laranja.checked == true) {
						if (tamanhoP.checked == true) {
							$(".laranjaProduto.tamanhoP.faixaPreco4").css("display", "flex");
						}
						if (tamanhoM.checked == true) {
							$(".laranjaProduto.tamanhoM.faixaPreco4").css("display", "flex");
						}
						if (tamanhoG.checked == true) {
							$(".laranjaProduto.tamanhoG.faixaPreco4").css("display", "flex");
						}
						if (tamanhoGG.checked == true) {
							$(".laranjaProduto.tamanhoGG.faixaPreco4").css("display", "flex");
						}
						if (tamanhoU.checked == true) {
							$(".laranjaProduto.tamanhoU.faixaPreco4").css("display", "flex");
						}
						if (tamanho36.checked == true) {
							$(".laranjaProduto.tamanho36.faixaPreco4").css("display", "flex");
						}
						if (tamanho38.checked == true) {
							$(".laranjaProduto.tamanho38.faixaPreco4").css("display", "flex");
						}
						if (tamanho40.checked == true) {
							$(".laranjaProduto.tamanho40.faixaPreco4").css("display", "flex");
						}
						if (tamanho42.checked == true) {
							$(".laranjaProduto.tamanho42.faixaPreco4").css("display", "flex");
						}
						if (tamanho44.checked == true) {
							$(".laranjaProduto.tamanho44.faixaPreco4").css("display", "flex");
						}
						if (tamanho46.checked == true) {
							$(".laranjaProduto.tamanho46.faixaPreco4").css("display", "flex");
						}
					}
					if (verde.checked == true) {
						if (tamanhoP.checked == true) {
							$(".verdeProduto.tamanhoP.faixaPreco4").css("display", "flex");
						}
						if (tamanhoM.checked == true) {
							$(".verdeProduto.tamanhoM.faixaPreco4").css("display", "flex");
						}
						if (tamanhoG.checked == true) {
							$(".verdeProduto.tamanhoG.faixaPreco4").css("display", "flex");
						}
						if (tamanhoGG.checked == true) {
							$(".verdeProduto.tamanhoGG.faixaPreco4").css("display", "flex");
						}
						if (tamanhoU.checked == true) {
							$(".verdeProduto.tamanhoU.faixaPreco4").css("display", "flex");
						}
						if (tamanho36.checked == true) {
							$(".verdeProduto.tamanho36.faixaPreco4").css("display", "flex");
						}
						if (tamanho38.checked == true) {
							$(".verdeProduto.tamanho38.faixaPreco4").css("display", "flex");
						}
						if (tamanho40.checked == true) {
							$(".verdeProduto.tamanho40.faixaPreco4").css("display", "flex");
						}
						if (tamanho42.checked == true) {
							$(".verdeProduto.tamanho42.faixaPreco4").css("display", "flex");
						}
						if (tamanho44.checked == true) {
							$(".verdeProduto.tamanho44.faixaPreco4").css("display", "flex");
						}
						if (tamanho46.checked == true) {
							$(".verdeProduto.tamanho46.faixaPreco4").css("display", "flex");
						}
					}
					if (vermelho.checked == true) {
						if (tamanhoP.checked == true) {
							$(".vermelhoProduto.tamanhoP.faixaPreco4").css("display", "flex");
						}
						if (tamanhoM.checked == true) {
							$(".vermelhoProduto.tamanhoM.faixaPreco4").css("display", "flex");
						}
						if (tamanhoG.checked == true) {
							$(".vermelhoProduto.tamanhoG.faixaPreco4").css("display", "flex");
						}
						if (tamanhoGG.checked == true) {
							$(".vermelhoProduto.tamanhoGG.faixaPreco4").css("display", "flex");
						}
						if (tamanhoU.checked == true) {
							$(".vermelhoProduto.tamanhoU.faixaPreco4").css("display", "flex");
						}
						if (tamanho36.checked == true) {
							$(".vermelhoProduto.tamanho36.faixaPreco4").css("display", "flex");
						}
						if (tamanho38.checked == true) {
							$(".vermelhoProduto.tamanho38.faixaPreco4").css("display", "flex");
						}
						if (tamanho40.checked == true) {
							$(".vermelhoProduto.tamanho40.faixaPreco4").css("display", "flex");
						}
						if (tamanho42.checked == true) {
							$(".vermelhoProduto.tamanho42.faixaPreco4").css("display", "flex");
						}
						if (tamanho44.checked == true) {
							$(".vermelhoProduto.tamanho44.faixaPreco4").css("display", "flex");
						}
						if (tamanho46.checked == true) {
							$(".vermelhoProduto.tamanho46.faixaPreco4").css("display", "flex");
						}
					}
					if (preto.checked == true) {
						if (tamanhoP.checked == true) {
							$(".pretoProduto.tamanhoP.faixaPreco4").css("display", "flex");
						}
						if (tamanhoM.checked == true) {
							$(".pretoProduto.tamanhoM.faixaPreco4").css("display", "flex");
						}
						if (tamanhoG.checked == true) {
							$(".pretoProduto.tamanhoG.faixaPreco4").css("display", "flex");
						}
						if (tamanhoGG.checked == true) {
							$(".pretoProduto.tamanhoGG.faixaPreco4").css("display", "flex");
						}
						if (tamanhoU.checked == true) {
							$(".pretoProduto.tamanhoU.faixaPreco4").css("display", "flex");
						}
						if (tamanho36.checked == true) {
							$(".pretoProduto.tamanho36.faixaPreco4").css("display", "flex");
						}
						if (tamanho38.checked == true) {
							$(".pretoProduto.tamanho38.faixaPreco4").css("display", "flex");
						}
						if (tamanho40.checked == true) {
							$(".pretoProduto.tamanho40.faixaPreco4").css("display", "flex");
						}
						if (tamanho42.checked == true) {
							$(".pretoProduto.tamanho42.faixaPreco4").css("display", "flex");
						}
						if (tamanho44.checked == true) {
							$(".pretoProduto.tamanho44.faixaPreco4").css("display", "flex");
						}
						if (tamanho46.checked == true) {
							$(".pretoProduto.tamanho46.faixaPreco4").css("display", "flex");
						}
					}
					if (rosa.checked == true) {
						if (tamanhoP.checked == true) {
							$(".rosaProduto.tamanhoP.faixaPreco4").css("display", "flex");
						}
						if (tamanhoM.checked == true) {
							$(".rosaProduto.tamanhoM.faixaPreco4").css("display", "flex");
						}
						if (tamanhoG.checked == true) {
							$(".rosaProduto.tamanhoG.faixaPreco4").css("display", "flex");
						}
						if (tamanhoGG.checked == true) {
							$(".rosaProduto.tamanhoGG.faixaPreco4").css("display", "flex");
						}
						if (tamanhoU.checked == true) {
							$(".rosaProduto.tamanhoU.faixaPreco4").css("display", "flex");
						}
						if (tamanho36.checked == true) {
							$(".rosaProduto.tamanho36.faixaPreco4").css("display", "flex");
						}
						if (tamanho38.checked == true) {
							$(".rosaProduto.tamanho38.faixaPreco4").css("display", "flex");
						}
						if (tamanho40.checked == true) {
							$(".rosaProduto.tamanho40.faixaPreco4").css("display", "flex");
						}
						if (tamanho42.checked == true) {
							$(".rosaProduto.tamanho42.faixaPreco4").css("display", "flex");
						}
						if (tamanho44.checked == true) {
							$(".rosaProduto.tamanho44.faixaPreco4").css("display", "flex");
						}
						if (tamanho46.checked == true) {
							$(".rosaProduto.tamanho46.faixaPreco4").css("display", "flex");
						}
					}
					if (vinho.checked == true) {
						if (tamanhoP.checked == true) {
							$(".vinhoProduto.tamanhoP.faixaPreco4").css("display", "flex");
						}
						if (tamanhoM.checked == true) {
							$(".vinhoProduto.tamanhoM.faixaPreco4").css("display", "flex");
						}
						if (tamanhoG.checked == true) {
							$(".vinhoProduto.tamanhoG.faixaPreco4").css("display", "flex");
						}
						if (tamanhoGG.checked == true) {
							$(".vinhoProduto.tamanhoGG.faixaPreco4").css("display", "flex");
						}
						if (tamanhoU.checked == true) {
							$(".vinhoProduto.tamanhoU.faixaPreco4").css("display", "flex");
						}
						if (tamanho36.checked == true) {
							$(".vinhoProduto.tamanho36.faixaPreco4").css("display", "flex");
						}
						if (tamanho38.checked == true) {
							$(".vinhoProduto.tamanho38.faixaPreco4").css("display", "flex");
						}
						if (tamanho40.checked == true) {
							$(".vinhoProduto.tamanho40.faixaPreco4").css("display", "flex");
						}
						if (tamanho42.checked == true) {
							$(".vinhoProduto.tamanho42.faixaPreco4").css("display", "flex");
						}
						if (tamanho44.checked == true) {
							$(".vinhoProduto.tamanho44.faixaPreco4").css("display", "flex");
						}
						if (tamanho46.checked == true) {
							$(".vinhoProduto.tamanho46.faixaPreco4").css("display", "flex");
						}
					}
				}
			}
			if (faixa1.checked == false) {
				$(".faixaPreco1").hide();
			}
			if (faixa2.checked == false) {
				$(".faixaPreco2").hide();
			}
			if (faixa3.checked == false) {
				$(".faixaPreco3").hide();
			}
			if (faixa5.checked == false) {
				$(".faixaPreco5").hide();
			}

		} else {
			$(".faixaPreco4").hide();

			if (tamanhoP.checked == false && tamanhoM.checked == false && tamanhoG.checked == false && tamanhoGG.checked == false && tamanhoU.checked == false && tamanho36.checked == false && tamanho38.checked == false && tamanho40.checked == false && tamanho42.checked == false && tamanho44.checked == false && tamanho46.checked == false) {
				if (faixa1.checked == true) {
					if (faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".faixaPreco2").hide();
						$(".faixaPreco3").hide();
						$(".faixaPreco4").hide();
						$(".faixaPreco5").hide();
					}
					if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
						$(".faixaPreco1").css("display", "flex");
					}
					if (amarelo.checked == true) {
						$(".faixaPreco1.amareloProduto").css("display", "flex");
					}
					if (azul.checked == true) {
						$(".faixaPreco1.azulProduto").css("display", "flex");
					}
					if (branco.checked == true) {
						$(".faixaPreco1.brancoProduto").css("display", "flex");
					}
					if (cinza.checked == true) {
						$(".faixaPreco1.cinzaProduto").css("display", "flex");
					}
					if (laranja.checked == true) {
						$(".faixaPreco1.laranjaProduto").css("display", "flex");
					}
					if (verde.checked == true) {
						$(".faixaPreco1.verdeProduto").css("display", "flex");
					}
					if (vermelho.checked == true) {
						$(".faixaPreco1.vermelhoProduto").css("display", "flex");
					}
					if (preto.checked == true) {
						$(".faixaPreco1.pretoProduto").css("display", "flex");
					}
					if (rosa.checked == true) {
						$(".faixaPreco1.rosaProduto").css("display", "flex");
					}
					if (vinho.checked == true) {
						$(".faixaPreco1.vinhoProduto").css("display", "flex");
					}
				}
				if (faixa2.checked == true) {
					if (faixa1.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".faixaPreco1").hide();
						$(".faixaPreco3").hide();
						$(".faixaPreco4").hide();
						$(".faixaPreco5").hide();
					}
					if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
						$(".faixaPreco2").css("display", "flex");
					}
					if (amarelo.checked == true) {
						$(".faixaPreco2.amareloProduto").css("display", "flex");
					}
					if (azul.checked == true) {
						$(".faixaPreco2.azulProduto").css("display", "flex");
					}
					if (branco.checked == true) {
						$(".faixaPreco2.brancoProduto").css("display", "flex");
					}
					if (cinza.checked == true) {
						$(".faixaPreco2.cinzaProduto").css("display", "flex");
					}
					if (laranja.checked == true) {
						$(".faixaPreco2.laranjaProduto").css("display", "flex");
					}
					if (verde.checked == true) {
						$(".faixaPreco2.verdeProduto").css("display", "flex");
					}
					if (vermelho.checked == true) {
						$(".faixaPreco2.vermelhoProduto").css("display", "flex");
					}
					if (preto.checked == true) {
						$(".faixaPreco2.pretoProduto").css("display", "flex");
					}
					if (rosa.checked == true) {
						$(".faixaPreco2.rosaProduto").css("display", "flex");
					}
					if (vinho.checked == true) {
						$(".faixaPreco2.vinhoProduto").css("display", "flex");
					}
				}
				if (faixa3.checked == true) {
					if (faixa1.checked == false && faixa2.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".faixaPreco1").hide();
						$(".faixaPreco2").hide();
						$(".faixaPreco4").hide();
						$(".faixaPreco5").hide();
					}
					if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
						$(".faixaPreco3").css("display", "flex");
					}
					if (amarelo.checked == true) {
						$(".faixaPreco3.amareloProduto").css("display", "flex");
					}
					if (azul.checked == true) {
						$(".faixaPreco3.azulProduto").css("display", "flex");
					}
					if (branco.checked == true) {
						$(".faixaPreco3.brancoProduto").css("display", "flex");
					}
					if (cinza.checked == true) {
						$(".faixaPreco3.cinzaProduto").css("display", "flex");
					}
					if (laranja.checked == true) {
						$(".faixaPreco3.laranjaProduto").css("display", "flex");
					}
					if (verde.checked == true) {
						$(".faixaPreco3.verdeProduto").css("display", "flex");
					}
					if (vermelho.checked == true) {
						$(".faixaPreco3.vermelhoProduto").css("display", "flex");
					}
					if (preto.checked == true) {
						$(".faixaPreco3.pretoProduto").css("display", "flex");
					}
					if (rosa.checked == true) {
						$(".faixaPreco3.rosaProduto").css("display", "flex");
					}
					if (vinho.checked == true) {
						$(".faixaPreco3.vinhoProduto").css("display", "flex");
					}
				}
				if (faixa4.checked == true) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa5.checked == false) {
						$(".faixaPreco1").hide();
						$(".faixaPreco2").hide();
						$(".faixaPreco3").hide();
						$(".faixaPreco5").hide();
					}
					if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
						$(".faixaPreco4").css("display", "flex");
					}
					if (amarelo.checked == true) {
						$(".faixaPreco4.amareloProduto").css("display", "flex");
					}
					if (azul.checked == true) {
						$(".faixaPreco4.azulProduto").css("display", "flex");
					}
					if (branco.checked == true) {
						$(".faixaPreco4.brancoProduto").css("display", "flex");
					}
					if (cinza.checked == true) {
						$(".faixaPreco4.cinzaProduto").css("display", "flex");
					}
					if (laranja.checked == true) {
						$(".faixaPreco4.laranjaProduto").css("display", "flex");
					}
					if (verde.checked == true) {
						$(".faixaPreco4.verdeProduto").css("display", "flex");
					}
					if (vermelho.checked == true) {
						$(".faixaPreco4.vermelhoProduto").css("display", "flex");
					}
					if (preto.checked == true) {
						$(".faixaPreco4.pretoProduto").css("display", "flex");
					}
					if (rosa.checked == true) {
						$(".faixaPreco4.rosaProduto").css("display", "flex");
					}
					if (vinho.checked == true) {
						$(".faixaPreco4.vinhoProduto").css("display", "flex");
					}
				}
				if (faixa5.checked == true) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false) {
						$(".faixaPreco1").hide();
						$(".faixaPreco2").hide();
						$(".faixaPreco3").hide();
						$(".faixaPreco4").hide();
					}
					if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
						$(".faixaPreco5").css("display", "flex");
					}
					if (amarelo.checked == true) {
						$(".faixaPreco5.amareloProduto").css("display", "flex");
					}
					if (azul.checked == true) {
						$(".faixaPreco5.azulProduto").css("display", "flex");
					}
					if (branco.checked == true) {
						$(".faixaPreco5.brancoProduto").css("display", "flex");
					}
					if (cinza.checked == true) {
						$(".faixaPreco5.cinzaProduto").css("display", "flex");
					}
					if (laranja.checked == true) {
						$(".faixaPreco5.laranjaProduto").css("display", "flex");
					}
					if (verde.checked == true) {
						$(".faixaPreco5.verdeProduto").css("display", "flex");
					}
					if (vermelho.checked == true) {
						$(".faixaPreco5.vermelhoProduto").css("display", "flex");
					}
					if (preto.checked == true) {
						$(".faixaPreco5.pretoProduto").css("display", "flex");
					}
					if (rosa.checked == true) {
						$(".faixaPreco5.rosaProduto").css("display", "flex");
					}
					if (vinho.checked == true) {
						$(".faixaPreco5.vinhoProduto").css("display", "flex");
					}
				}
			}
			if (tamanhoP.checked == true) {
				$(".tamanhoM").hide();
				$(".tamanhoG").hide();
				$(".tamanhoGG").hide();
				$(".tamanhoU").hide();
				$(".tamanho36").hide();
				$(".tamanho38").hide();
				$(".tamanho40").hide();
				$(".tamanho42").hide();
				$(".tamanho44").hide();
				$(".tamanho46").hide();
				if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanhoP").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanhoP.faixaPreco1").css("display", "flex");
							if (faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa2.checked == true) {
							$(".tamanhoP.faixaPreco2").css("display", "flex");
							if (faixa1.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa3.checked == true) {
							$(".tamanhoP.faixaPreco3").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa4.checked == true) {
							$(".tamanhoP.faixaPreco4").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa5.checked == true) {
							$(".tamanhoP.faixaPreco5").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
							}
						}
					}
				}
				if (amarelo.checked == true) {
					$(".tamanhoP.amareloProduto").css("display", "flex");
				}
				if (azul.checked == true) {
					$(".tamanhoP.azulProduto").css("display", "flex");
				}
				if (branco.checked == true) {
					$(".tamanhoP.brancoProduto").css("display", "flex");
				}
				if (cinza.checked == true) {
					$(".tamanhoP.cinzaProduto").css("display", "flex");
				}
				if (laranja.checked == true) {
					$(".tamanhoP.laranjaProduto").css("display", "flex");
				}
				if (verde.checked == true) {
					$(".tamanhoP.verdeProduto").css("display", "flex");
				}
				if (vermelho.checked == true) {
					$(".tamanhoP.vermelhoProduto").css("display", "flex");
				}
				if (preto.checked == true) {
					$(".tamanhoP.pretoProduto").css("display", "flex");
				}
				if (rosa.checked == true) {
					$(".tamanhoP.rosaProduto").css("display", "flex");
				}
				if (vinho.checked == true) {
					$(".tamanhoP.vinhoProduto").css("display", "flex");
				}
			}
			if (tamanhoM.checked == true) {
				$(".tamanhoP").hide();
				$(".tamanhoG").hide();
				$(".tamanhoGG").hide();
				$(".tamanhoU").hide();
				$(".tamanho36").hide();
				$(".tamanho38").hide();
				$(".tamanho40").hide();
				$(".tamanho42").hide();
				$(".tamanho44").hide();
				$(".tamanho46").hide();
				if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanhoM").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanhoM.faixaPreco1").css("display", "flex");
							if (faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa2.checked == true) {
							$(".tamanhoM.faixaPreco2").css("display", "flex");
							if (faixa1.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa3.checked == true) {
							$(".tamanhoM.faixaPreco3").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa4.checked == true) {
							$(".tamanhoM.faixaPreco4").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa5.checked == true) {
							$(".tamanhoM.faixaPreco5").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
							}
						}
					}
				}
				if (amarelo.checked == true) {
					$(".tamanhoM.amareloProduto").css("display", "flex");
				}
				if (azul.checked == true) {
					$(".tamanhoM.azulProduto").css("display", "flex");
				}
				if (branco.checked == true) {
					$(".tamanhoM.brancoProduto").css("display", "flex");
				}
				if (cinza.checked == true) {
					$(".tamanhoM.cinzaProduto").css("display", "flex");
				}
				if (laranja.checked == true) {
					$(".tamanhoM.laranjaProduto").css("display", "flex");
				}
				if (verde.checked == true) {
					$(".tamanhoM.verdeProduto").css("display", "flex");
				}
				if (vermelho.checked == true) {
					$(".tamanhoM.vermelhoProduto").css("display", "flex");
				}
				if (preto.checked == true) {
					$(".tamanhoM.pretoProduto").css("display", "flex");
				}
				if (rosa.checked == true) {
					$(".tamanhoM.rosaProduto").css("display", "flex");
				}
				if (vinho.checked == true) {
					$(".tamanhoM.vinhoProduto").css("display", "flex");
				}
			}
			if (tamanhoG.checked == true) {
				$(".tamanhoP").hide();
				$(".tamanhoM").hide();
				$(".tamanhoGG").hide();
				$(".tamanhoU").hide();
				$(".tamanho36").hide();
				$(".tamanho38").hide();
				$(".tamanho40").hide();
				$(".tamanho42").hide();
				$(".tamanho44").hide();
				$(".tamanho46").hide();
				if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanhoG").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanhoG.faixaPreco1").css("display", "flex");
							if (faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa2.checked == true) {
							$(".tamanhoG.faixaPreco2").css("display", "flex");
							if (faixa1.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa3.checked == true) {
							$(".tamanhoG.faixaPreco3").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa4.checked == true) {
							$(".tamanhoG.faixaPreco4").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa5.checked == true) {
							$(".tamanhoG.faixaPreco5").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
							}
						}
					}
				}
				if (amarelo.checked == true) {
					$(".tamanhoG.amareloProduto").css("display", "flex");
				}
				if (azul.checked == true) {
					$(".tamanhoG.azulProduto").css("display", "flex");
				}
				if (branco.checked == true) {
					$(".tamanhoG.brancoProduto").css("display", "flex");
				}
				if (cinza.checked == true) {
					$(".tamanhoG.cinzaProduto").css("display", "flex");
				}
				if (laranja.checked == true) {
					$(".tamanhoG.laranjaProduto").css("display", "flex");
				}
				if (verde.checked == true) {
					$(".tamanhoG.verdeProduto").css("display", "flex");
				}
				if (vermelho.checked == true) {
					$(".tamanhoG.vermelhoProduto").css("display", "flex");
				}
				if (preto.checked == true) {
					$(".tamanhoG.pretoProduto").css("display", "flex");
				}
				if (rosa.checked == true) {
					$(".tamanhoG.rosaProduto").css("display", "flex");
				}
				if (vinho.checked == true) {
					$(".tamanhoG.vinhoProduto").css("display", "flex");
				}
			}
			if (tamanhoGG.checked == true) {
				$(".tamanhoP").hide();
				$(".tamanhoM").hide();
				$(".tamanhoG").hide();
				$(".tamanhoU").hide();
				$(".tamanho36").hide();
				$(".tamanho38").hide();
				$(".tamanho40").hide();
				$(".tamanho42").hide();
				$(".tamanho44").hide();
				$(".tamanho46").hide();
				if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanhoGG").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanhoGG.faixaPreco1").css("display", "flex");
							if (faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa2.checked == true) {
							$(".tamanhoGG.faixaPreco2").css("display", "flex");
							if (faixa1.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa3.checked == true) {
							$(".tamanhoGG.faixaPreco3").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa4.checked == true) {
							$(".tamanhoGG.faixaPreco4").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa5.checked == true) {
							$(".tamanhoGG.faixaPreco5").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
							}
						}
					}
				}
				if (amarelo.checked == true) {
					$(".tamanhoGG.amareloProduto").css("display", "flex");
				}
				if (azul.checked == true) {
					$(".tamanhoGG.azulProduto").css("display", "flex");
				}
				if (branco.checked == true) {
					$(".tamanhoGG.brancoProduto").css("display", "flex");
				}
				if (cinza.checked == true) {
					$(".tamanhoGG.cinzaProduto").css("display", "flex");
				}
				if (laranja.checked == true) {
					$(".tamanhoGG.laranjaProduto").css("display", "flex");
				}
				if (verde.checked == true) {
					$(".tamanhoGG.verdeProduto").css("display", "flex");
				}
				if (vermelho.checked == true) {
					$(".tamanhoGG.vermelhoProduto").css("display", "flex");
				}
				if (preto.checked == true) {
					$(".tamanhoGG.pretoProduto").css("display", "flex");
				}
				if (rosa.checked == true) {
					$(".tamanhoGG.rosaProduto").css("display", "flex");
				}
				if (vinho.checked == true) {
					$(".tamanhoGG.vinhoProduto").css("display", "flex");
				}
			}
			if (tamanhoU.checked == true) {
				$(".tamanhoP").hide();
				$(".tamanhoM").hide();
				$(".tamanhoG").hide();
				$(".tamanhoGG").hide();
				$(".tamanho36").hide();
				$(".tamanho38").hide();
				$(".tamanho40").hide();
				$(".tamanho42").hide();
				$(".tamanho44").hide();
				$(".tamanho46").hide();
				if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanhoU").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanhoU.faixaPreco1").css("display", "flex");
							if (faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa2.checked == true) {
							$(".tamanhoU.faixaPreco2").css("display", "flex");
							if (faixa1.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa3.checked == true) {
							$(".tamanhoU.faixaPreco3").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa4.checked == true) {
							$(".tamanhoU.faixaPreco4").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa5.checked == true) {
							$(".tamanhoU.faixaPreco5").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
							}
						}
					}
				}
				if (amarelo.checked == true) {
					$(".tamanhoU.amareloProduto").css("display", "flex");
				}
				if (azul.checked == true) {
					$(".tamanhoU.azulProduto").css("display", "flex");
				}
				if (branco.checked == true) {
					$(".tamanhoU.brancoProduto").css("display", "flex");
				}
				if (cinza.checked == true) {
					$(".tamanhoU.cinzaProduto").css("display", "flex");
				}
				if (laranja.checked == true) {
					$(".tamanhoU.laranjaProduto").css("display", "flex");
				}
				if (verde.checked == true) {
					$(".tamanhoU.verdeProduto").css("display", "flex");
				}
				if (vermelho.checked == true) {
					$(".tamanhoU.vermelhoProduto").css("display", "flex");
				}
				if (preto.checked == true) {
					$(".tamanhoU.pretoProduto").css("display", "flex");
				}
				if (rosa.checked == true) {
					$(".tamanhoU.rosaProduto").css("display", "flex");
				}
				if (vinho.checked == true) {
					$(".tamanhoU.vinhoProduto").css("display", "flex");
				}
			}
			if (tamanho36.checked == true) {
				$(".tamanhoP").hide();
				$(".tamanhoM").hide();
				$(".tamanhoG").hide();
				$(".tamanhoGG").hide();
				$(".tamanhoU").hide();
				$(".tamanho38").hide();
				$(".tamanho40").hide();
				$(".tamanho42").hide();
				$(".tamanho44").hide();
				$(".tamanho46").hide();
				if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanho36").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanho36.faixaPreco1").css("display", "flex");
							if (faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa2.checked == true) {
							$(".tamanho36.faixaPreco2").css("display", "flex");
							if (faixa1.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa3.checked == true) {
							$(".tamanho36.faixaPreco3").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa4.checked == true) {
							$(".tamanho36.faixaPreco4").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa5.checked == true) {
							$(".tamanho36.faixaPreco5").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
							}
						}
					}
				}
				if (amarelo.checked == true) {
					$(".tamanho36.amareloProduto").css("display", "flex");
				}
				if (azul.checked == true) {
					$(".tamanho36.azulProduto").css("display", "flex");
				}
				if (branco.checked == true) {
					$(".tamanho36.brancoProduto").css("display", "flex");
				}
				if (cinza.checked == true) {
					$(".tamanho36.cinzaProduto").css("display", "flex");
				}
				if (laranja.checked == true) {
					$(".tamanho36.laranjaProduto").css("display", "flex");
				}
				if (verde.checked == true) {
					$(".tamanho36.verdeProduto").css("display", "flex");
				}
				if (vermelho.checked == true) {
					$(".tamanho36.vermelhoProduto").css("display", "flex");
				}
				if (preto.checked == true) {
					$(".tamanho36.pretoProduto").css("display", "flex");
				}
				if (rosa.checked == true) {
					$(".tamanho36.rosaProduto").css("display", "flex");
				}
				if (vinho.checked == true) {
					$(".tamanho36.vinhoProduto").css("display", "flex");
				}
			}
			if (tamanho38.checked == true) {
				$(".tamanhoP").hide();
				$(".tamanhoM").hide();
				$(".tamanhoG").hide();
				$(".tamanhoGG").hide();
				$(".tamanhoU").hide();
				$(".tamanho36").hide();
				$(".tamanho40").hide();
				$(".tamanho42").hide();
				$(".tamanho44").hide();
				$(".tamanho46").hide();
				if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanho38").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanho38.faixaPreco1").css("display", "flex");
							if (faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa2.checked == true) {
							$(".tamanho38.faixaPreco2").css("display", "flex");
							if (faixa1.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa3.checked == true) {
							$(".tamanho38.faixaPreco3").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa4.checked == true) {
							$(".tamanho38.faixaPreco4").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa5.checked == true) {
							$(".tamanho38.faixaPreco5").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
							}
						}
					}
				}
				if (amarelo.checked == true) {
					$(".tamanho38.amareloProduto").css("display", "flex");
				}
				if (azul.checked == true) {
					$(".tamanho38.azulProduto").css("display", "flex");
				}
				if (branco.checked == true) {
					$(".tamanho38.brancoProduto").css("display", "flex");
				}
				if (cinza.checked == true) {
					$(".tamanho38.cinzaProduto").css("display", "flex");
				}
				if (laranja.checked == true) {
					$(".tamanho38.laranjaProduto").css("display", "flex");
				}
				if (verde.checked == true) {
					$(".tamanho38.verdeProduto").css("display", "flex");
				}
				if (vermelho.checked == true) {
					$(".tamanho38.vermelhoProduto").css("display", "flex");
				}
				if (preto.checked == true) {
					$(".tamanho38.pretoProduto").css("display", "flex");
				}
				if (rosa.checked == true) {
					$(".tamanho38.rosaProduto").css("display", "flex");
				}
				if (vinho.checked == true) {
					$(".tamanho38.vinhoProduto").css("display", "flex");
				}
			}
			if (tamanho40.checked == true) {
				$(".tamanhoP").hide();
				$(".tamanhoM").hide();
				$(".tamanhoG").hide();
				$(".tamanhoGG").hide();
				$(".tamanhoU").hide();
				$(".tamanho36").hide();
				$(".tamanho38").hide();
				$(".tamanho42").hide();
				$(".tamanho44").hide();
				$(".tamanho46").hide();
				if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanho40").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanho40.faixaPreco1").css("display", "flex");
							if (faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa2.checked == true) {
							$(".tamanho40.faixaPreco2").css("display", "flex");
							if (faixa1.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa3.checked == true) {
							$(".tamanho40.faixaPreco3").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa4.checked == true) {
							$(".tamanho40.faixaPreco4").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa5.checked == true) {
							$(".tamanho40.faixaPreco5").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
							}
						}
					}
				}
				if (amarelo.checked == true) {
					$(".tamanho40.amareloProduto").css("display", "flex");
				}
				if (azul.checked == true) {
					$(".tamanho40.azulProduto").css("display", "flex");
				}
				if (branco.checked == true) {
					$(".tamanho40.brancoProduto").css("display", "flex");
				}
				if (cinza.checked == true) {
					$(".tamanho40.cinzaProduto").css("display", "flex");
				}
				if (laranja.checked == true) {
					$(".tamanho40.laranjaProduto").css("display", "flex");
				}
				if (verde.checked == true) {
					$(".tamanho40.verdeProduto").css("display", "flex");
				}
				if (vermelho.checked == true) {
					$(".tamanho40.vermelhoProduto").css("display", "flex");
				}
				if (preto.checked == true) {
					$(".tamanho40.pretoProduto").css("display", "flex");
				}
				if (rosa.checked == true) {
					$(".tamanho40.rosaProduto").css("display", "flex");
				}
				if (vinho.checked == true) {
					$(".tamanho40.vinhoProduto").css("display", "flex");
				}
			}
			if (tamanho42.checked == true) {
				$(".tamanhoP").hide();
				$(".tamanhoM").hide();
				$(".tamanhoG").hide();
				$(".tamanhoGG").hide();
				$(".tamanhoU").hide();
				$(".tamanho36").hide();
				$(".tamanho38").hide();
				$(".tamanho40").hide();
				$(".tamanho44").hide();
				$(".tamanho46").hide();
				if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanho42").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanho42.faixaPreco1").css("display", "flex");
							if (faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa2.checked == true) {
							$(".tamanho42.faixaPreco2").css("display", "flex");
							if (faixa1.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa3.checked == true) {
							$(".tamanho42.faixaPreco3").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa4.checked == true) {
							$(".tamanho42.faixaPreco4").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa5.checked == true) {
							$(".tamanho42.faixaPreco5").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
							}
						}
					}
				}
				if (amarelo.checked == true) {
					$(".tamanho42.amareloProduto").css("display", "flex");
				}
				if (azul.checked == true) {
					$(".tamanho42.azulProduto").css("display", "flex");
				}
				if (branco.checked == true) {
					$(".tamanho42.brancoProduto").css("display", "flex");
				}
				if (cinza.checked == true) {
					$(".tamanho42.cinzaProduto").css("display", "flex");
				}
				if (laranja.checked == true) {
					$(".tamanho42.laranjaProduto").css("display", "flex");
				}
				if (verde.checked == true) {
					$(".tamanho42.verdeProduto").css("display", "flex");
				}
				if (vermelho.checked == true) {
					$(".tamanho42.vermelhoProduto").css("display", "flex");
				}
				if (preto.checked == true) {
					$(".tamanho42.pretoProduto").css("display", "flex");
				}
				if (rosa.checked == true) {
					$(".tamanho42.rosaProduto").css("display", "flex");
				}
				if (vinho.checked == true) {
					$(".tamanho42.vinhoProduto").css("display", "flex");
				}
			}
			if (tamanho44.checked == true) {
				$(".tamanhoP").hide();
				$(".tamanhoM").hide();
				$(".tamanhoG").hide();
				$(".tamanhoGG").hide();
				$(".tamanhoU").hide();
				$(".tamanho36").hide();
				$(".tamanho38").hide();
				$(".tamanho40").hide();
				$(".tamanho42").hide();
				$(".tamanho46").hide();
				if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanho44").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanho44.faixaPreco1").css("display", "flex");
							if (faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa2.checked == true) {
							$(".tamanho44.faixaPreco2").css("display", "flex");
							if (faixa1.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa3.checked == true) {
							$(".tamanho44.faixaPreco3").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa4.checked == true) {
							$(".tamanho44.faixaPreco4").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa5.checked == true) {
							$(".tamanho44.faixaPreco5").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
							}
						}
					}
				}
				if (amarelo.checked == true) {
					$(".tamanho44.amareloProduto").css("display", "flex");
				}
				if (azul.checked == true) {
					$(".tamanho44.azulProduto").css("display", "flex");
				}
				if (branco.checked == true) {
					$(".tamanho44.brancoProduto").css("display", "flex");
				}
				if (cinza.checked == true) {
					$(".tamanho44.cinzaProduto").css("display", "flex");
				}
				if (laranja.checked == true) {
					$(".tamanho44.laranjaProduto").css("display", "flex");
				}
				if (verde.checked == true) {
					$(".tamanho44.verdeProduto").css("display", "flex");
				}
				if (vermelho.checked == true) {
					$(".tamanho44.vermelhoProduto").css("display", "flex");
				}
				if (preto.checked == true) {
					$(".tamanho44.pretoProduto").css("display", "flex");
				}
				if (rosa.checked == true) {
					$(".tamanho44.rosaProduto").css("display", "flex");
				}
				if (vinho.checked == true) {
					$(".tamanho44.vinhoProduto").css("display", "flex");
				}
			}
			if (tamanho46.checked == true) {
				$(".tamanhoP").hide();
				$(".tamanhoM").hide();
				$(".tamanhoG").hide();
				$(".tamanhoGG").hide();
				$(".tamanhoU").hide();
				$(".tamanho36").hide();
				$(".tamanho38").hide();
				$(".tamanho40").hide();
				$(".tamanho42").hide();
				$(".tamanho44").hide();
				if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanho46").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanho46.faixaPreco1").css("display", "flex");
							if (faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa2.checked == true) {
							$(".tamanho46.faixaPreco2").css("display", "flex");
							if (faixa1.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa3.checked == true) {
							$(".tamanho46.faixaPreco3").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa4.checked == true) {
							$(".tamanho46.faixaPreco4").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa5.checked == true) {
							$(".tamanho46.faixaPreco5").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
							}
						}
					}
				}
				if (amarelo.checked == true) {
					$(".tamanho46.amareloProduto").css("display", "flex");
				}
				if (azul.checked == true) {
					$(".tamanho46.azulProduto").css("display", "flex");
				}
				if (branco.checked == true) {
					$(".tamanho46.brancoProduto").css("display", "flex");
				}
				if (cinza.checked == true) {
					$(".tamanho46.cinzaProduto").css("display", "flex");
				}
				if (laranja.checked == true) {
					$(".tamanho46.laranjaProduto").css("display", "flex");
				}
				if (verde.checked == true) {
					$(".tamanho46.verdeProduto").css("display", "flex");
				}
				if (vermelho.checked == true) {
					$(".tamanho46.vermelhoProduto").css("display", "flex");
				}
				if (preto.checked == true) {
					$(".tamanho46.pretoProduto").css("display", "flex");
				}
				if (rosa.checked == true) {
					$(".tamanho46.rosaProduto").css("display", "flex");
				}
				if (vinho.checked == true) {
					$(".tamanho46.vinhoProduto").css("display", "flex");
				}
			}
		}
	})

	$("#faixa_5").click(function () {
		if (faixa5.checked == true) {
			if (tamanhoP.checked == false && tamanhoM.checked == false && tamanhoG.checked == false && tamanhoGG.checked == false && tamanhoU.checked == false && tamanho36.checked == false && tamanho38.checked == false && tamanho40.checked == false && tamanho42.checked == false && tamanho44.checked == false && tamanho46.checked == false) {
				if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
					$(".faixaPreco5").css("display", "flex");
				}
				if (amarelo.checked == true) {
					$(".amareloProduto.faixaPreco5").css("display", "flex");
				}
				if (azul.checked == true) {
					$(".azulProduto.faixaPreco5").css("display", "flex");
				}
				if (branco.checked == true) {
					$(".brancoProduto.faixaPreco5").css("display", "flex");
				}
				if (cinza.checked == true) {
					$(".cinzaProduto.faixaPreco5").css("display", "flex");
				}
				if (laranja.checked == true) {
					$(".laranjaProduto.faixaPreco5").css("display", "flex");
				}
				if (verde.checked == true) {
					$(".verdeProduto.faixaPreco5").css("display", "flex");
				}
				if (vermelho.checked == true) {
					$(".vermelhoProduto.faixaPreco5").css("display", "flex");
				}
				if (preto.checked == true) {
					$(".pretoProduto.faixaPreco5").css("display", "flex");
				}
				if (rosa.checked == true) {
					$(".rosaProduto.faixaPreco5").css("display", "flex");
				}
				if (vinho.checked == true) {
					$(".vinhoProduto.faixaPreco5").css("display", "flex");
				}
			} else {
				if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
					if (tamanhoP.checked == true) {
						$(".tamanhoP.faixaPreco5").css("display", "flex");
					}
					if (tamanhoM.checked == true) {
						$(".tamanhoM.faixaPreco5").css("display", "flex");
					}
					if (tamanhoG.checked == true) {
						$(".tamanhoG.faixaPreco5").css("display", "flex");
					}
					if (tamanhoGG.checked == true) {
						$(".tamanhoGG.faixaPreco5").css("display", "flex");
					}
					if (tamanhoU.checked == true) {
						$(".tamanhoU.faixaPreco5").css("display", "flex");
					}
					if (tamanho36.checked == true) {
						$(".tamanho36.faixaPreco3").css("display", "flex");
					}
					if (tamanho38.checked == true) {
						$(".tamanho38.faixaPreco3").css("display", "flex");
					}
					if (tamanho40.checked == true) {
						$(".tamanho40.faixaPreco3").css("display", "flex");
					}
					if (tamanho42.checked == true) {
						$(".tamanho42.faixaPreco3").css("display", "flex");
					}
					if (tamanho44.checked == true) {
						$(".tamanho44.faixaPreco3").css("display", "flex");
					}
					if (tamanho46.checked == true) {
						$(".tamanho46.faixaPreco3").css("display", "flex");
					}
				} else {
					if (amarelo.checked == true) {
						if (tamanhoP.checked == true) {
							$(".amareloProduto.tamanhoP.faixaPreco5").css("display", "flex");
						}
						if (tamanhoM.checked == true) {
							$(".amareloProduto.tamanhoM.faixaPreco5").css("display", "flex");
						}
						if (tamanhoG.checked == true) {
							$(".amareloProduto.tamanhoG.faixaPreco5").css("display", "flex");
						}
						if (tamanhoGG.checked == true) {
							$(".amareloProduto.tamanhoGG.faixaPreco5").css("display", "flex");
						}
						if (tamanhoU.checked == true) {
							$(".amareloProduto.tamanhoU.faixaPreco5").css("display", "flex");
						}
						if (tamanho36.checked == true) {
							$(".amareloProduto.tamanho36.faixaPreco5").css("display", "flex");
						}
						if (tamanho38.checked == true) {
							$(".amareloProduto.tamanho38.faixaPreco5").css("display", "flex");
						}
						if (tamanho40.checked == true) {
							$(".amareloProduto.tamanho40.faixaPreco5").css("display", "flex");
						}
						if (tamanho42.checked == true) {
							$(".amareloProduto.tamanho42.faixaPreco5").css("display", "flex");
						}
						if (tamanho44.checked == true) {
							$(".amareloProduto.tamanho44.faixaPreco5").css("display", "flex");
						}
						if (tamanho46.checked == true) {
							$(".amareloProduto.tamanho46.faixaPreco5").css("display", "flex");
						}
					}
					if (azul.checked == true) {
						if (tamanhoP.checked == true) {
							$(".azulProduto.tamanhoP.faixaPreco5").css("display", "flex");
						}
						if (tamanhoM.checked == true) {
							$(".azulProduto.tamanhoM.faixaPreco5").css("display", "flex");
						}
						if (tamanhoG.checked == true) {
							$(".azulProduto.tamanhoG.faixaPreco5").css("display", "flex");
						}
						if (tamanhoGG.checked == true) {
							$(".azulProduto.tamanhoGG.faixaPreco5").css("display", "flex");
						}
						if (tamanhoU.checked == true) {
							$(".azulProduto.tamanhoU.faixaPreco5").css("display", "flex");
						}
						if (tamanho36.checked == true) {
							$(".azulProduto.tamanho36.faixaPreco5").css("display", "flex");
						}
						if (tamanho38.checked == true) {
							$(".azulProduto.tamanho38.faixaPreco5").css("display", "flex");
						}
						if (tamanho40.checked == true) {
							$(".azulProduto.tamanho40.faixaPreco5").css("display", "flex");
						}
						if (tamanho42.checked == true) {
							$(".azulProduto.tamanho42.faixaPreco5").css("display", "flex");
						}
						if (tamanho44.checked == true) {
							$(".azulProduto.tamanho44.faixaPreco5").css("display", "flex");
						}
						if (tamanho46.checked == true) {
							$(".azulProduto.tamanho46.faixaPreco5").css("display", "flex");
						}
					}
					if (branco.checked == true) {
						if (tamanhoP.checked == true) {
							$(".brancoProduto.tamanhoP.faixaPreco5").css("display", "flex");
						}
						if (tamanhoM.checked == true) {
							$(".brancoProduto.tamanhoM.faixaPreco5").css("display", "flex");
						}
						if (tamanhoG.checked == true) {
							$(".brancoProduto.tamanhoG.faixaPreco5").css("display", "flex");
						}
						if (tamanhoGG.checked == true) {
							$(".brancoProduto.tamanhoGG.faixaPreco5").css("display", "flex");
						}
						if (tamanhoU.checked == true) {
							$(".brancoProduto.tamanhoU.faixaPreco5").css("display", "flex");
						}
						if (tamanho36.checked == true) {
							$(".brancoProduto.tamanho36.faixaPreco5").css("display", "flex");
						}
						if (tamanho38.checked == true) {
							$(".brancoProduto.tamanho38.faixaPreco5").css("display", "flex");
						}
						if (tamanho40.checked == true) {
							$(".brancoProduto.tamanho40.faixaPreco5").css("display", "flex");
						}
						if (tamanho42.checked == true) {
							$(".brancoProduto.tamanho42.faixaPreco5").css("display", "flex");
						}
						if (tamanho44.checked == true) {
							$(".brancoProduto.tamanho44.faixaPreco5").css("display", "flex");
						}
						if (tamanho46.checked == true) {
							$(".brancoProduto.tamanho46.faixaPreco5").css("display", "flex");
						}
					}
					if (cinza.checked == true) {
						if (tamanhoP.checked == true) {
							$(".cinzaProduto.tamanhoP.faixaPreco5").css("display", "flex");
						}
						if (tamanhoM.checked == true) {
							$(".cinzaProduto.tamanhoM.faixaPreco5").css("display", "flex");
						}
						if (tamanhoG.checked == true) {
							$(".cinzaProduto.tamanhoG.faixaPreco5").css("display", "flex");
						}
						if (tamanhoGG.checked == true) {
							$(".cinzaProduto.tamanhoGG.faixaPreco5").css("display", "flex");
						}
						if (tamanhoU.checked == true) {
							$(".cinzaProduto.tamanhoU.faixaPreco5").css("display", "flex");
						}
						if (tamanho36.checked == true) {
							$(".cinzaProduto.tamanho36.faixaPreco5").css("display", "flex");
						}
						if (tamanho38.checked == true) {
							$(".cinzaProduto.tamanho38.faixaPreco5").css("display", "flex");
						}
						if (tamanho40.checked == true) {
							$(".cinzaProduto.tamanho40.faixaPreco5").css("display", "flex");
						}
						if (tamanho42.checked == true) {
							$(".cinzaProduto.tamanho42.faixaPreco5").css("display", "flex");
						}
						if (tamanho44.checked == true) {
							$(".cinzaProduto.tamanho44.faixaPreco5").css("display", "flex");
						}
						if (tamanho46.checked == true) {
							$(".cinzaProduto.tamanho46.faixaPreco5").css("display", "flex");
						}
					}
					if (laranja.checked == true) {
						if (tamanhoP.checked == true) {
							$(".laranjaProduto.tamanhoP.faixaPreco5").css("display", "flex");
						}
						if (tamanhoM.checked == true) {
							$(".laranjaProduto.tamanhoM.faixaPreco5").css("display", "flex");
						}
						if (tamanhoG.checked == true) {
							$(".laranjaProduto.tamanhoG.faixaPreco5").css("display", "flex");
						}
						if (tamanhoGG.checked == true) {
							$(".laranjaProduto.tamanhoGG.faixaPreco5").css("display", "flex");
						}
						if (tamanhoU.checked == true) {
							$(".laranjaProduto.tamanhoU.faixaPreco5").css("display", "flex");
						}
						if (tamanho36.checked == true) {
							$(".laranjaProduto.tamanho36.faixaPreco5").css("display", "flex");
						}
						if (tamanho38.checked == true) {
							$(".laranjaProduto.tamanho38.faixaPreco5").css("display", "flex");
						}
						if (tamanho40.checked == true) {
							$(".laranjaProduto.tamanho40.faixaPreco5").css("display", "flex");
						}
						if (tamanho42.checked == true) {
							$(".laranjaProduto.tamanho42.faixaPreco5").css("display", "flex");
						}
						if (tamanho44.checked == true) {
							$(".laranjaProduto.tamanho44.faixaPreco5").css("display", "flex");
						}
						if (tamanho46.checked == true) {
							$(".laranjaProduto.tamanho46.faixaPreco5").css("display", "flex");
						}
					}
					if (verde.checked == true) {
						if (tamanhoP.checked == true) {
							$(".verdeProduto.tamanhoP.faixaPreco5").css("display", "flex");
						}
						if (tamanhoM.checked == true) {
							$(".verdeProduto.tamanhoM.faixaPreco5").css("display", "flex");
						}
						if (tamanhoG.checked == true) {
							$(".verdeProduto.tamanhoG.faixaPreco5").css("display", "flex");
						}
						if (tamanhoGG.checked == true) {
							$(".verdeProduto.tamanhoGG.faixaPreco5").css("display", "flex");
						}
						if (tamanhoU.checked == true) {
							$(".verdeProduto.tamanhoU.faixaPreco5").css("display", "flex");
						}
						if (tamanho36.checked == true) {
							$(".verdeProduto.tamanho36.faixaPreco5").css("display", "flex");
						}
						if (tamanho38.checked == true) {
							$(".verdeProduto.tamanho38.faixaPreco5").css("display", "flex");
						}
						if (tamanho40.checked == true) {
							$(".verdeProduto.tamanho40.faixaPreco5").css("display", "flex");
						}
						if (tamanho42.checked == true) {
							$(".verdeProduto.tamanho42.faixaPreco5").css("display", "flex");
						}
						if (tamanho44.checked == true) {
							$(".verdeProduto.tamanho44.faixaPreco5").css("display", "flex");
						}
						if (tamanho46.checked == true) {
							$(".verdeProduto.tamanho46.faixaPreco5").css("display", "flex");
						}
					}
					if (vermelho.checked == true) {
						if (tamanhoP.checked == true) {
							$(".vermelhoProduto.tamanhoP.faixaPreco5").css("display", "flex");
						}
						if (tamanhoM.checked == true) {
							$(".vermelhoProduto.tamanhoM.faixaPreco5").css("display", "flex");
						}
						if (tamanhoG.checked == true) {
							$(".vermelhoProduto.tamanhoG.faixaPreco5").css("display", "flex");
						}
						if (tamanhoGG.checked == true) {
							$(".vermelhoProduto.tamanhoGG.faixaPreco5").css("display", "flex");
						}
						if (tamanhoU.checked == true) {
							$(".vermelhoProduto.tamanhoU.faixaPreco5").css("display", "flex");
						}
						if (tamanho36.checked == true) {
							$(".vermelhoProduto.tamanho36.faixaPreco5").css("display", "flex");
						}
						if (tamanho38.checked == true) {
							$(".vermelhoProduto.tamanho38.faixaPreco5").css("display", "flex");
						}
						if (tamanho40.checked == true) {
							$(".vermelhoProduto.tamanho40.faixaPreco5").css("display", "flex");
						}
						if (tamanho42.checked == true) {
							$(".vermelhoProduto.tamanho42.faixaPreco5").css("display", "flex");
						}
						if (tamanho44.checked == true) {
							$(".vermelhoProduto.tamanho44.faixaPreco5").css("display", "flex");
						}
						if (tamanho46.checked == true) {
							$(".vermelhoProduto.tamanho46.faixaPreco5").css("display", "flex");
						}
					}
					if (preto.checked == true) {
						if (tamanhoP.checked == true) {
							$(".pretoProduto.tamanhoP.faixaPreco5").css("display", "flex");
						}
						if (tamanhoM.checked == true) {
							$(".pretoProduto.tamanhoM.faixaPreco5").css("display", "flex");
						}
						if (tamanhoG.checked == true) {
							$(".pretoProduto.tamanhoG.faixaPreco5").css("display", "flex");
						}
						if (tamanhoGG.checked == true) {
							$(".pretoProduto.tamanhoGG.faixaPreco5").css("display", "flex");
						}
						if (tamanhoU.checked == true) {
							$(".pretoProduto.tamanhoU.faixaPreco5").css("display", "flex");
						}
						if (tamanho36.checked == true) {
							$(".pretoProduto.tamanho36.faixaPreco5").css("display", "flex");
						}
						if (tamanho38.checked == true) {
							$(".pretoProduto.tamanho38.faixaPreco5").css("display", "flex");
						}
						if (tamanho40.checked == true) {
							$(".pretoProduto.tamanho40.faixaPreco5").css("display", "flex");
						}
						if (tamanho42.checked == true) {
							$(".pretoProduto.tamanho42.faixaPreco5").css("display", "flex");
						}
						if (tamanho44.checked == true) {
							$(".pretoProduto.tamanho44.faixaPreco5").css("display", "flex");
						}
						if (tamanho46.checked == true) {
							$(".pretoProduto.tamanho46.faixaPreco5").css("display", "flex");
						}
					}
					if (rosa.checked == true) {
						if (tamanhoP.checked == true) {
							$(".rosaProduto.tamanhoP.faixaPreco5").css("display", "flex");
						}
						if (tamanhoM.checked == true) {
							$(".rosaProduto.tamanhoM.faixaPreco5").css("display", "flex");
						}
						if (tamanhoG.checked == true) {
							$(".rosaProduto.tamanhoG.faixaPreco5").css("display", "flex");
						}
						if (tamanhoGG.checked == true) {
							$(".rosaProduto.tamanhoGG.faixaPreco5").css("display", "flex");
						}
						if (tamanhoU.checked == true) {
							$(".rosaProduto.tamanhoU.faixaPreco5").css("display", "flex");
						}
						if (tamanho36.checked == true) {
							$(".rosaProduto.tamanho36.faixaPreco5").css("display", "flex");
						}
						if (tamanho38.checked == true) {
							$(".rosaProduto.tamanho38.faixaPreco5").css("display", "flex");
						}
						if (tamanho40.checked == true) {
							$(".rosaProduto.tamanho40.faixaPreco5").css("display", "flex");
						}
						if (tamanho42.checked == true) {
							$(".rosaProduto.tamanho42.faixaPreco5").css("display", "flex");
						}
						if (tamanho44.checked == true) {
							$(".rosaProduto.tamanho44.faixaPreco5").css("display", "flex");
						}
						if (tamanho46.checked == true) {
							$(".rosaProduto.tamanho46.faixaPreco5").css("display", "flex");
						}
					}
					if (vinho.checked == true) {
						if (tamanhoP.checked == true) {
							$(".vinhoProduto.tamanhoP.faixaPreco5").css("display", "flex");
						}
						if (tamanhoM.checked == true) {
							$(".vinhoProduto.tamanhoM.faixaPreco5").css("display", "flex");
						}
						if (tamanhoG.checked == true) {
							$(".vinhoProduto.tamanhoG.faixaPreco5").css("display", "flex");
						}
						if (tamanhoGG.checked == true) {
							$(".vinhoProduto.tamanhoGG.faixaPreco5").css("display", "flex");
						}
						if (tamanhoU.checked == true) {
							$(".vinhoProduto.tamanhoU.faixaPreco5").css("display", "flex");
						}
						if (tamanho36.checked == true) {
							$(".vinhoProduto.tamanho36.faixaPreco5").css("display", "flex");
						}
						if (tamanho38.checked == true) {
							$(".vinhoProduto.tamanho38.faixaPreco5").css("display", "flex");
						}
						if (tamanho40.checked == true) {
							$(".vinhoProduto.tamanho40.faixaPreco5").css("display", "flex");
						}
						if (tamanho42.checked == true) {
							$(".vinhoProduto.tamanho42.faixaPreco5").css("display", "flex");
						}
						if (tamanho44.checked == true) {
							$(".vinhoProduto.tamanho44.faixaPreco5").css("display", "flex");
						}
						if (tamanho46.checked == true) {
							$(".vinhoProduto.tamanho46.faixaPreco5").css("display", "flex");
						}
					}
				}
			}
			if (faixa1.checked == false) {
				$(".faixaPreco1").hide();
			}
			if (faixa2.checked == false) {
				$(".faixaPreco2").hide();
			}
			if (faixa3.checked == false) {
				$(".faixaPreco3").hide();
			}
			if (faixa4.checked == false) {
				$(".faixaPreco4").hide();
			}

		} else {
			$(".faixaPreco5").hide();

			if (tamanhoP.checked == false && tamanhoM.checked == false && tamanhoG.checked == false && tamanhoGG.checked == false && tamanhoU.checked == false && tamanho36.checked == false && tamanho38.checked == false && tamanho40.checked == false && tamanho42.checked == false && tamanho44.checked == false && tamanho46.checked == false) {
				if (faixa1.checked == true) {
					if (faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".faixaPreco2").hide();
						$(".faixaPreco3").hide();
						$(".faixaPreco4").hide();
						$(".faixaPreco5").hide();
					}
					if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
						$(".faixaPreco1").css("display", "flex");
					}
					if (amarelo.checked == true) {
						$(".faixaPreco1.amareloProduto").css("display", "flex");
					}
					if (azul.checked == true) {
						$(".faixaPreco1.azulProduto").css("display", "flex");
					}
					if (branco.checked == true) {
						$(".faixaPreco1.brancoProduto").css("display", "flex");
					}
					if (cinza.checked == true) {
						$(".faixaPreco1.cinzaProduto").css("display", "flex");
					}
					if (laranja.checked == true) {
						$(".faixaPreco1.laranjaProduto").css("display", "flex");
					}
					if (verde.checked == true) {
						$(".faixaPreco1.verdeProduto").css("display", "flex");
					}
					if (vermelho.checked == true) {
						$(".faixaPreco1.vermelhoProduto").css("display", "flex");
					}
					if (preto.checked == true) {
						$(".faixaPreco1.pretoProduto").css("display", "flex");
					}
					if (rosa.checked == true) {
						$(".faixaPreco1.rosaProduto").css("display", "flex");
					}
					if (vinho.checked == true) {
						$(".faixaPreco1.vinhoProduto").css("display", "flex");
					}
				}
				if (faixa2.checked == true) {
					if (faixa1.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".faixaPreco1").hide();
						$(".faixaPreco3").hide();
						$(".faixaPreco4").hide();
						$(".faixaPreco5").hide();
					}
					if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
						$(".faixaPreco2").css("display", "flex");
					}
					if (amarelo.checked == true) {
						$(".faixaPreco2.amareloProduto").css("display", "flex");
					}
					if (azul.checked == true) {
						$(".faixaPreco2.azulProduto").css("display", "flex");
					}
					if (branco.checked == true) {
						$(".faixaPreco2.brancoProduto").css("display", "flex");
					}
					if (cinza.checked == true) {
						$(".faixaPreco2.cinzaProduto").css("display", "flex");
					}
					if (laranja.checked == true) {
						$(".faixaPreco2.laranjaProduto").css("display", "flex");
					}
					if (verde.checked == true) {
						$(".faixaPreco2.verdeProduto").css("display", "flex");
					}
					if (vermelho.checked == true) {
						$(".faixaPreco2.vermelhoProduto").css("display", "flex");
					}
					if (preto.checked == true) {
						$(".faixaPreco2.pretoProduto").css("display", "flex");
					}
					if (rosa.checked == true) {
						$(".faixaPreco2.rosaProduto").css("display", "flex");
					}
					if (vinho.checked == true) {
						$(".faixaPreco2.vinhoProduto").css("display", "flex");
					}
				}
				if (faixa3.checked == true) {
					if (faixa1.checked == false && faixa2.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".faixaPreco1").hide();
						$(".faixaPreco2").hide();
						$(".faixaPreco4").hide();
						$(".faixaPreco5").hide();
					}
					if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
						$(".faixaPreco3").css("display", "flex");
					}
					if (amarelo.checked == true) {
						$(".faixaPreco3.amareloProduto").css("display", "flex");
					}
					if (azul.checked == true) {
						$(".faixaPreco3.azulProduto").css("display", "flex");
					}
					if (branco.checked == true) {
						$(".faixaPreco3.brancoProduto").css("display", "flex");
					}
					if (cinza.checked == true) {
						$(".faixaPreco3.cinzaProduto").css("display", "flex");
					}
					if (laranja.checked == true) {
						$(".faixaPreco3.laranjaProduto").css("display", "flex");
					}
					if (verde.checked == true) {
						$(".faixaPreco3.verdeProduto").css("display", "flex");
					}
					if (vermelho.checked == true) {
						$(".faixaPreco3.vermelhoProduto").css("display", "flex");
					}
					if (preto.checked == true) {
						$(".faixaPreco3.pretoProduto").css("display", "flex");
					}
					if (rosa.checked == true) {
						$(".faixaPreco3.rosaProduto").css("display", "flex");
					}
					if (vinho.checked == true) {
						$(".faixaPreco3.vinhoProduto").css("display", "flex");
					}
				}
				if (faixa4.checked == true) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa5.checked == false) {
						$(".faixaPreco1").hide();
						$(".faixaPreco2").hide();
						$(".faixaPreco3").hide();
						$(".faixaPreco5").hide();
					}
					if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
						$(".faixaPreco4").css("display", "flex");
					}
					if (amarelo.checked == true) {
						$(".faixaPreco4.amareloProduto").css("display", "flex");
					}
					if (azul.checked == true) {
						$(".faixaPreco4.azulProduto").css("display", "flex");
					}
					if (branco.checked == true) {
						$(".faixaPreco4.brancoProduto").css("display", "flex");
					}
					if (cinza.checked == true) {
						$(".faixaPreco4.cinzaProduto").css("display", "flex");
					}
					if (laranja.checked == true) {
						$(".faixaPreco4.laranjaProduto").css("display", "flex");
					}
					if (verde.checked == true) {
						$(".faixaPreco4.verdeProduto").css("display", "flex");
					}
					if (vermelho.checked == true) {
						$(".faixaPreco4.vermelhoProduto").css("display", "flex");
					}
					if (preto.checked == true) {
						$(".faixaPreco4.pretoProduto").css("display", "flex");
					}
					if (rosa.checked == true) {
						$(".faixaPreco4.rosaProduto").css("display", "flex");
					}
					if (vinho.checked == true) {
						$(".faixaPreco4.vinhoProduto").css("display", "flex");
					}
				}
				if (faixa5.checked == true) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false) {
						$(".faixaPreco1").hide();
						$(".faixaPreco2").hide();
						$(".faixaPreco3").hide();
						$(".faixaPreco4").hide();
					}
					if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
						$(".faixaPreco5").css("display", "flex");
					}
					if (amarelo.checked == true) {
						$(".faixaPreco5.amareloProduto").css("display", "flex");
					}
					if (azul.checked == true) {
						$(".faixaPreco5.azulProduto").css("display", "flex");
					}
					if (branco.checked == true) {
						$(".faixaPreco5.brancoProduto").css("display", "flex");
					}
					if (cinza.checked == true) {
						$(".faixaPreco5.cinzaProduto").css("display", "flex");
					}
					if (laranja.checked == true) {
						$(".faixaPreco5.laranjaProduto").css("display", "flex");
					}
					if (verde.checked == true) {
						$(".faixaPreco5.verdeProduto").css("display", "flex");
					}
					if (vermelho.checked == true) {
						$(".faixaPreco5.vermelhoProduto").css("display", "flex");
					}
					if (preto.checked == true) {
						$(".faixaPreco5.pretoProduto").css("display", "flex");
					}
					if (rosa.checked == true) {
						$(".faixaPreco5.rosaProduto").css("display", "flex");
					}
					if (vinho.checked == true) {
						$(".faixaPreco5.vinhoProduto").css("display", "flex");
					}
				}
			}
			if (tamanhoP.checked == true) {
				$(".tamanhoM").hide();
				$(".tamanhoG").hide();
				$(".tamanhoGG").hide();
				$(".tamanhoU").hide();
				$(".tamanho36").hide();
				$(".tamanho38").hide();
				$(".tamanho40").hide();
				$(".tamanho42").hide();
				$(".tamanho44").hide();
				$(".tamanho46").hide();
				if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanhoP").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanhoP.faixaPreco1").css("display", "flex");
							if (faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa2.checked == true) {
							$(".tamanhoP.faixaPreco2").css("display", "flex");
							if (faixa1.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa3.checked == true) {
							$(".tamanhoP.faixaPreco3").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa4.checked == true) {
							$(".tamanhoP.faixaPreco4").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa5.checked == true) {
							$(".tamanhoP.faixaPreco5").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
							}
						}
					}
				}
				if (amarelo.checked == true) {
					$(".tamanhoP.amareloProduto").css("display", "flex");
				}
				if (azul.checked == true) {
					$(".tamanhoP.azulProduto").css("display", "flex");
				}
				if (branco.checked == true) {
					$(".tamanhoP.brancoProduto").css("display", "flex");
				}
				if (cinza.checked == true) {
					$(".tamanhoP.cinzaProduto").css("display", "flex");
				}
				if (laranja.checked == true) {
					$(".tamanhoP.laranjaProduto").css("display", "flex");
				}
				if (verde.checked == true) {
					$(".tamanhoP.verdeProduto").css("display", "flex");
				}
				if (vermelho.checked == true) {
					$(".tamanhoP.vermelhoProduto").css("display", "flex");
				}
				if (preto.checked == true) {
					$(".tamanhoP.pretoProduto").css("display", "flex");
				}
				if (rosa.checked == true) {
					$(".tamanhoP.rosaProduto").css("display", "flex");
				}
				if (vinho.checked == true) {
					$(".tamanhoP.vinhoProduto").css("display", "flex");
				}
			}
			if (tamanhoM.checked == true) {
				$(".tamanhoP").hide();
				$(".tamanhoG").hide();
				$(".tamanhoGG").hide();
				$(".tamanhoU").hide();
				$(".tamanho36").hide();
				$(".tamanho38").hide();
				$(".tamanho40").hide();
				$(".tamanho42").hide();
				$(".tamanho44").hide();
				$(".tamanho46").hide();
				if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanhoM").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanhoM.faixaPreco1").css("display", "flex");
							if (faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa2.checked == true) {
							$(".tamanhoM.faixaPreco2").css("display", "flex");
							if (faixa1.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa3.checked == true) {
							$(".tamanhoM.faixaPreco3").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa4.checked == true) {
							$(".tamanhoM.faixaPreco4").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa5.checked == true) {
							$(".tamanhoM.faixaPreco5").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
							}
						}
					}
				}
				if (amarelo.checked == true) {
					$(".tamanhoM.amareloProduto").css("display", "flex");
				}
				if (azul.checked == true) {
					$(".tamanhoM.azulProduto").css("display", "flex");
				}
				if (branco.checked == true) {
					$(".tamanhoM.brancoProduto").css("display", "flex");
				}
				if (cinza.checked == true) {
					$(".tamanhoM.cinzaProduto").css("display", "flex");
				}
				if (laranja.checked == true) {
					$(".tamanhoM.laranjaProduto").css("display", "flex");
				}
				if (verde.checked == true) {
					$(".tamanhoM.verdeProduto").css("display", "flex");
				}
				if (vermelho.checked == true) {
					$(".tamanhoM.vermelhoProduto").css("display", "flex");
				}
				if (preto.checked == true) {
					$(".tamanhoM.pretoProduto").css("display", "flex");
				}
				if (rosa.checked == true) {
					$(".tamanhoM.rosaProduto").css("display", "flex");
				}
				if (vinho.checked == true) {
					$(".tamanhoM.vinhoProduto").css("display", "flex");
				}
			}
			if (tamanhoG.checked == true) {
				$(".tamanhoP").hide();
				$(".tamanhoM").hide();
				$(".tamanhoGG").hide();
				$(".tamanhoU").hide();
				$(".tamanho36").hide();
				$(".tamanho38").hide();
				$(".tamanho40").hide();
				$(".tamanho42").hide();
				$(".tamanho44").hide();
				$(".tamanho46").hide();
				if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanhoG").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanhoG.faixaPreco1").css("display", "flex");
							if (faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa2.checked == true) {
							$(".tamanhoG.faixaPreco2").css("display", "flex");
							if (faixa1.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa3.checked == true) {
							$(".tamanhoG.faixaPreco3").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa4.checked == true) {
							$(".tamanhoG.faixaPreco4").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa5.checked == true) {
							$(".tamanhoG.faixaPreco5").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
							}
						}
					}
				}
				if (amarelo.checked == true) {
					$(".tamanhoG.amareloProduto").css("display", "flex");
				}
				if (azul.checked == true) {
					$(".tamanhoG.azulProduto").css("display", "flex");
				}
				if (branco.checked == true) {
					$(".tamanhoG.brancoProduto").css("display", "flex");
				}
				if (cinza.checked == true) {
					$(".tamanhoG.cinzaProduto").css("display", "flex");
				}
				if (laranja.checked == true) {
					$(".tamanhoG.laranjaProduto").css("display", "flex");
				}
				if (verde.checked == true) {
					$(".tamanhoG.verdeProduto").css("display", "flex");
				}
				if (vermelho.checked == true) {
					$(".tamanhoG.vermelhoProduto").css("display", "flex");
				}
				if (preto.checked == true) {
					$(".tamanhoG.pretoProduto").css("display", "flex");
				}
				if (rosa.checked == true) {
					$(".tamanhoG.rosaProduto").css("display", "flex");
				}
				if (vinho.checked == true) {
					$(".tamanhoG.vinhoProduto").css("display", "flex");
				}
			}
			if (tamanhoGG.checked == true) {
				$(".tamanhoP").hide();
				$(".tamanhoM").hide();
				$(".tamanhoG").hide();
				$(".tamanhoU").hide();
				$(".tamanho36").hide();
				$(".tamanho38").hide();
				$(".tamanho40").hide();
				$(".tamanho42").hide();
				$(".tamanho44").hide();
				$(".tamanho46").hide();
				if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanhoGG").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanhoGG.faixaPreco1").css("display", "flex");
							if (faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa2.checked == true) {
							$(".tamanhoGG.faixaPreco2").css("display", "flex");
							if (faixa1.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa3.checked == true) {
							$(".tamanhoGG.faixaPreco3").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa4.checked == true) {
							$(".tamanhoGG.faixaPreco4").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa5.checked == true) {
							$(".tamanhoGG.faixaPreco5").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
							}
						}
					}
				}
				if (amarelo.checked == true) {
					$(".tamanhoGG.amareloProduto").css("display", "flex");
				}
				if (azul.checked == true) {
					$(".tamanhoGG.azulProduto").css("display", "flex");
				}
				if (branco.checked == true) {
					$(".tamanhoGG.brancoProduto").css("display", "flex");
				}
				if (cinza.checked == true) {
					$(".tamanhoGG.cinzaProduto").css("display", "flex");
				}
				if (laranja.checked == true) {
					$(".tamanhoGG.laranjaProduto").css("display", "flex");
				}
				if (verde.checked == true) {
					$(".tamanhoGG.verdeProduto").css("display", "flex");
				}
				if (vermelho.checked == true) {
					$(".tamanhoGG.vermelhoProduto").css("display", "flex");
				}
				if (preto.checked == true) {
					$(".tamanhoGG.pretoProduto").css("display", "flex");
				}
				if (rosa.checked == true) {
					$(".tamanhoGG.rosaProduto").css("display", "flex");
				}
				if (vinho.checked == true) {
					$(".tamanhoGG.vinhoProduto").css("display", "flex");
				}
			}
			if (tamanhoU.checked == true) {
				$(".tamanhoP").hide();
				$(".tamanhoM").hide();
				$(".tamanhoG").hide();
				$(".tamanhoGG").hide();
				$(".tamanho36").hide();
				$(".tamanho38").hide();
				$(".tamanho40").hide();
				$(".tamanho42").hide();
				$(".tamanho44").hide();
				$(".tamanho46").hide();
				if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanhoU").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanhoU.faixaPreco1").css("display", "flex");
							if (faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa2.checked == true) {
							$(".tamanhoU.faixaPreco2").css("display", "flex");
							if (faixa1.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa3.checked == true) {
							$(".tamanhoU.faixaPreco3").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa4.checked == true) {
							$(".tamanhoU.faixaPreco4").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa5.checked == true) {
							$(".tamanhoU.faixaPreco5").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
							}
						}
					}
				}
				if (amarelo.checked == true) {
					$(".tamanhoU.amareloProduto").css("display", "flex");
				}
				if (azul.checked == true) {
					$(".tamanhoU.azulProduto").css("display", "flex");
				}
				if (branco.checked == true) {
					$(".tamanhoU.brancoProduto").css("display", "flex");
				}
				if (cinza.checked == true) {
					$(".tamanhoU.cinzaProduto").css("display", "flex");
				}
				if (laranja.checked == true) {
					$(".tamanhoU.laranjaProduto").css("display", "flex");
				}
				if (verde.checked == true) {
					$(".tamanhoU.verdeProduto").css("display", "flex");
				}
				if (vermelho.checked == true) {
					$(".tamanhoU.vermelhoProduto").css("display", "flex");
				}
				if (preto.checked == true) {
					$(".tamanhoU.pretoProduto").css("display", "flex");
				}
				if (rosa.checked == true) {
					$(".tamanhoU.rosaProduto").css("display", "flex");
				}
				if (vinho.checked == true) {
					$(".tamanhoU.vinhoProduto").css("display", "flex");
				}
			}
			if (tamanho36.checked == true) {
				$(".tamanhoP").hide();
				$(".tamanhoM").hide();
				$(".tamanhoG").hide();
				$(".tamanhoGG").hide();
				$(".tamanhoU").hide();
				$(".tamanho38").hide();
				$(".tamanho40").hide();
				$(".tamanho42").hide();
				$(".tamanho44").hide();
				$(".tamanho46").hide();
				if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanho36").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanho36.faixaPreco1").css("display", "flex");
							if (faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa2.checked == true) {
							$(".tamanho36.faixaPreco2").css("display", "flex");
							if (faixa1.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa3.checked == true) {
							$(".tamanho36.faixaPreco3").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa4.checked == true) {
							$(".tamanho36.faixaPreco4").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa5.checked == true) {
							$(".tamanho36.faixaPreco5").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
							}
						}
					}
				}
				if (amarelo.checked == true) {
					$(".tamanho36.amareloProduto").css("display", "flex");
				}
				if (azul.checked == true) {
					$(".tamanho36.azulProduto").css("display", "flex");
				}
				if (branco.checked == true) {
					$(".tamanho36.brancoProduto").css("display", "flex");
				}
				if (cinza.checked == true) {
					$(".tamanho36.cinzaProduto").css("display", "flex");
				}
				if (laranja.checked == true) {
					$(".tamanho36.laranjaProduto").css("display", "flex");
				}
				if (verde.checked == true) {
					$(".tamanho36.verdeProduto").css("display", "flex");
				}
				if (vermelho.checked == true) {
					$(".tamanho36.vermelhoProduto").css("display", "flex");
				}
				if (preto.checked == true) {
					$(".tamanho36.pretoProduto").css("display", "flex");
				}
				if (rosa.checked == true) {
					$(".tamanho36.rosaProduto").css("display", "flex");
				}
				if (vinho.checked == true) {
					$(".tamanho36.vinhoProduto").css("display", "flex");
				}
			}
			if (tamanho38.checked == true) {
				$(".tamanhoP").hide();
				$(".tamanhoM").hide();
				$(".tamanhoG").hide();
				$(".tamanhoGG").hide();
				$(".tamanhoU").hide();
				$(".tamanho36").hide();
				$(".tamanho40").hide();
				$(".tamanho42").hide();
				$(".tamanho44").hide();
				$(".tamanho46").hide();
				if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanho38").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanho38.faixaPreco1").css("display", "flex");
							if (faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa2.checked == true) {
							$(".tamanho38.faixaPreco2").css("display", "flex");
							if (faixa1.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa3.checked == true) {
							$(".tamanho38.faixaPreco3").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa4.checked == true) {
							$(".tamanho38.faixaPreco4").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa5.checked == true) {
							$(".tamanho38.faixaPreco5").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
							}
						}
					}
				}
				if (amarelo.checked == true) {
					$(".tamanho38.amareloProduto").css("display", "flex");
				}
				if (azul.checked == true) {
					$(".tamanho38.azulProduto").css("display", "flex");
				}
				if (branco.checked == true) {
					$(".tamanho38.brancoProduto").css("display", "flex");
				}
				if (cinza.checked == true) {
					$(".tamanho38.cinzaProduto").css("display", "flex");
				}
				if (laranja.checked == true) {
					$(".tamanho38.laranjaProduto").css("display", "flex");
				}
				if (verde.checked == true) {
					$(".tamanho38.verdeProduto").css("display", "flex");
				}
				if (vermelho.checked == true) {
					$(".tamanho38.vermelhoProduto").css("display", "flex");
				}
				if (preto.checked == true) {
					$(".tamanho38.pretoProduto").css("display", "flex");
				}
				if (rosa.checked == true) {
					$(".tamanho38.rosaProduto").css("display", "flex");
				}
				if (vinho.checked == true) {
					$(".tamanho38.vinhoProduto").css("display", "flex");
				}
			}
			if (tamanho40.checked == true) {
				$(".tamanhoP").hide();
				$(".tamanhoM").hide();
				$(".tamanhoG").hide();
				$(".tamanhoGG").hide();
				$(".tamanhoU").hide();
				$(".tamanho36").hide();
				$(".tamanho38").hide();
				$(".tamanho42").hide();
				$(".tamanho44").hide();
				$(".tamanho46").hide();
				if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanho40").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanho40.faixaPreco1").css("display", "flex");
							if (faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa2.checked == true) {
							$(".tamanho40.faixaPreco2").css("display", "flex");
							if (faixa1.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa3.checked == true) {
							$(".tamanho40.faixaPreco3").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa4.checked == true) {
							$(".tamanho40.faixaPreco4").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa5.checked == true) {
							$(".tamanho40.faixaPreco5").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
							}
						}
					}
				}
				if (amarelo.checked == true) {
					$(".tamanho40.amareloProduto").css("display", "flex");
				}
				if (azul.checked == true) {
					$(".tamanho40.azulProduto").css("display", "flex");
				}
				if (branco.checked == true) {
					$(".tamanho40.brancoProduto").css("display", "flex");
				}
				if (cinza.checked == true) {
					$(".tamanho40.cinzaProduto").css("display", "flex");
				}
				if (laranja.checked == true) {
					$(".tamanho40.laranjaProduto").css("display", "flex");
				}
				if (verde.checked == true) {
					$(".tamanho40.verdeProduto").css("display", "flex");
				}
				if (vermelho.checked == true) {
					$(".tamanho40.vermelhoProduto").css("display", "flex");
				}
				if (preto.checked == true) {
					$(".tamanho40.pretoProduto").css("display", "flex");
				}
				if (rosa.checked == true) {
					$(".tamanho40.rosaProduto").css("display", "flex");
				}
				if (vinho.checked == true) {
					$(".tamanho40.vinhoProduto").css("display", "flex");
				}
			}
			if (tamanho42.checked == true) {
				$(".tamanhoP").hide();
				$(".tamanhoM").hide();
				$(".tamanhoG").hide();
				$(".tamanhoGG").hide();
				$(".tamanhoU").hide();
				$(".tamanho36").hide();
				$(".tamanho38").hide();
				$(".tamanho40").hide();
				$(".tamanho44").hide();
				$(".tamanho46").hide();
				if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanho42").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanho42.faixaPreco1").css("display", "flex");
							if (faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa2.checked == true) {
							$(".tamanho42.faixaPreco2").css("display", "flex");
							if (faixa1.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa3.checked == true) {
							$(".tamanho42.faixaPreco3").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa4.checked == true) {
							$(".tamanho42.faixaPreco4").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa5.checked == true) {
							$(".tamanho42.faixaPreco5").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
							}
						}
					}
				}
				if (amarelo.checked == true) {
					$(".tamanho42.amareloProduto").css("display", "flex");
				}
				if (azul.checked == true) {
					$(".tamanho42.azulProduto").css("display", "flex");
				}
				if (branco.checked == true) {
					$(".tamanho42.brancoProduto").css("display", "flex");
				}
				if (cinza.checked == true) {
					$(".tamanho42.cinzaProduto").css("display", "flex");
				}
				if (laranja.checked == true) {
					$(".tamanho42.laranjaProduto").css("display", "flex");
				}
				if (verde.checked == true) {
					$(".tamanho42.verdeProduto").css("display", "flex");
				}
				if (vermelho.checked == true) {
					$(".tamanho42.vermelhoProduto").css("display", "flex");
				}
				if (preto.checked == true) {
					$(".tamanho42.pretoProduto").css("display", "flex");
				}
				if (rosa.checked == true) {
					$(".tamanho42.rosaProduto").css("display", "flex");
				}
				if (vinho.checked == true) {
					$(".tamanho42.vinhoProduto").css("display", "flex");
				}
			}
			if (tamanho44.checked == true) {
				$(".tamanhoP").hide();
				$(".tamanhoM").hide();
				$(".tamanhoG").hide();
				$(".tamanhoGG").hide();
				$(".tamanhoU").hide();
				$(".tamanho36").hide();
				$(".tamanho38").hide();
				$(".tamanho40").hide();
				$(".tamanho42").hide();
				$(".tamanho46").hide();
				if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanho44").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanho44.faixaPreco1").css("display", "flex");
							if (faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa2.checked == true) {
							$(".tamanho44.faixaPreco2").css("display", "flex");
							if (faixa1.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa3.checked == true) {
							$(".tamanho44.faixaPreco3").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa4.checked == true) {
							$(".tamanho44.faixaPreco4").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa5.checked == true) {
							$(".tamanho44.faixaPreco5").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
							}
						}
					}
				}
				if (amarelo.checked == true) {
					$(".tamanho44.amareloProduto").css("display", "flex");
				}
				if (azul.checked == true) {
					$(".tamanho44.azulProduto").css("display", "flex");
				}
				if (branco.checked == true) {
					$(".tamanho44.brancoProduto").css("display", "flex");
				}
				if (cinza.checked == true) {
					$(".tamanho44.cinzaProduto").css("display", "flex");
				}
				if (laranja.checked == true) {
					$(".tamanho44.laranjaProduto").css("display", "flex");
				}
				if (verde.checked == true) {
					$(".tamanho44.verdeProduto").css("display", "flex");
				}
				if (vermelho.checked == true) {
					$(".tamanho44.vermelhoProduto").css("display", "flex");
				}
				if (preto.checked == true) {
					$(".tamanho44.pretoProduto").css("display", "flex");
				}
				if (rosa.checked == true) {
					$(".tamanho44.rosaProduto").css("display", "flex");
				}
				if (vinho.checked == true) {
					$(".tamanho44.vinhoProduto").css("display", "flex");
				}
			}
			if (tamanho46.checked == true) {
				$(".tamanhoP").hide();
				$(".tamanhoM").hide();
				$(".tamanhoG").hide();
				$(".tamanhoGG").hide();
				$(".tamanhoU").hide();
				$(".tamanho36").hide();
				$(".tamanho38").hide();
				$(".tamanho40").hide();
				$(".tamanho42").hide();
				$(".tamanho44").hide();
				if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false) {
					if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
						$(".tamanho46").css("display", "flex");
					} else {
						if (faixa1.checked == true) {
							$(".tamanho46.faixaPreco1").css("display", "flex");
							if (faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa2.checked == true) {
							$(".tamanho46.faixaPreco2").css("display", "flex");
							if (faixa1.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa3.checked == true) {
							$(".tamanho46.faixaPreco3").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa4.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco4").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa4.checked == true) {
							$(".tamanho46.faixaPreco4").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa5.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco5").hide();
							}
						}
						if (faixa5.checked == true) {
							$(".tamanho46.faixaPreco5").css("display", "flex");
							if (faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false) {
								$(".faixaPreco1").hide();
								$(".faixaPreco2").hide();
								$(".faixaPreco3").hide();
								$(".faixaPreco4").hide();
							}
						}
					}
				}
				if (amarelo.checked == true) {
					$(".tamanho46.amareloProduto").css("display", "flex");
				}
				if (azul.checked == true) {
					$(".tamanho46.azulProduto").css("display", "flex");
				}
				if (branco.checked == true) {
					$(".tamanho46.brancoProduto").css("display", "flex");
				}
				if (cinza.checked == true) {
					$(".tamanho46.cinzaProduto").css("display", "flex");
				}
				if (laranja.checked == true) {
					$(".tamanho46.laranjaProduto").css("display", "flex");
				}
				if (verde.checked == true) {
					$(".tamanho46.verdeProduto").css("display", "flex");
				}
				if (vermelho.checked == true) {
					$(".tamanho46.vermelhoProduto").css("display", "flex");
				}
				if (preto.checked == true) {
					$(".tamanho46.pretoProduto").css("display", "flex");
				}
				if (rosa.checked == true) {
					$(".tamanho46.rosaProduto").css("display", "flex");
				}
				if (vinho.checked == true) {
					$(".tamanho46.vinhoProduto").css("display", "flex");
				}
			}
		}
	})
	
	// Mostra todos os produtos caso não exista um filtro checado
	$(".filtrar-checkbox input").click(function () {
		if ($(":checkbox:checked").length > 0) {
			$(".produtos-carregar").prop('disabled', true);
		} else {
			$(".produtos-carregar").prop('disabled', false);
		}

		if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false && tamanhoP.checked == false && tamanhoM.checked == false && tamanhoG.checked == false && tamanhoGG.checked == false && tamanhoU.checked == false && tamanho36.checked == false && tamanho38.checked == false && tamanho40.checked == false && tamanho42.checked == false && tamanho44.checked == false && tamanho46.checked == false && faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
			$(".amareloProduto").css("display", "none");
			$(".azulProduto").css("display", "none");
			$(".brancoProduto").css("display", "none");
			$(".cinzaProduto").css("display", "none");
			$(".laranjaProduto").css("display", "none");
			$(".verdeProduto").css("display", "none");
			$(".vermelhoProduto").css("display", "none");
			$(".pretoProduto").css("display", "none");
			$(".rosaProduto").css("display", "none");
			$(".vinhoProduto").css("display", "none");
			$(".produto").slice(0, 6).css("display", "flex");
		}
	})
	
	// Limpa o filtro (apenas versão mobile)
	$("#botao-limpar").click(function () {
		$(".filtrar-checkbox input").prop('checked', false);
		$(".menu-filtrar-radio input").prop('checked', false);
		if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false && tamanhoP.checked == false && tamanhoM.checked == false && tamanhoG.checked == false && tamanhoGG.checked == false && tamanhoU.checked == false && faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
			$(".amareloProduto").css("display", "none");
			$(".azulProduto").css("display", "none");
			$(".brancoProduto").css("display", "none");
			$(".cinzaProduto").css("display", "none");
			$(".laranjaProduto").css("display", "none");
			$(".verdeProduto").css("display", "none");
			$(".vermelhoProduto").css("display", "none");
			$(".pretoProduto").css("display", "none");
			$(".rosaProduto").css("display", "none");
			$(".vinhoProduto").css("display", "none");
			$(".produto").slice(0, 6).css("display", "flex");
		}
	})

	// Carregar mais
	$(".produto").slice(0, 6).css("display", "flex");
	$(".produtos-carregar").click(function () {
		if (amarelo.checked == false && azul.checked == false && branco.checked == false && cinza.checked == false && laranja.checked == false && verde.checked == false && vermelho.checked == false && preto.checked == false && rosa.checked == false && vinho.checked == false && tamanhoP.checked == false && tamanhoM.checked == false && tamanhoG.checked == false && tamanhoGG.checked == false && tamanhoU.checked == false && tamanho36.checked == false && tamanho38.checked == false && tamanho40.checked == false && tamanho42.checked == false && tamanho44.checked == false && tamanho46.checked == false && faixa1.checked == false && faixa2.checked == false && faixa3.checked == false && faixa4.checked == false && faixa5.checked == false) {
			$(".produto:hidden").slice(0, 3).css("display", "flex").slideDown();
			if ($(".produto:hidden").length == 0) {
				$(".produtos-carregar").prop('disabled', true);
			}
		}
	})

	// Ordenar produtos

	$('#maior-preco').data("sortKey", "p.produto-preco");
	$('#mobile-maior-preco').data("sortKey", "p.produto-preco");
	$('#menor-preco').data("sortKey", "p.produto-preco");
	$('#mobile-menor-preco').data("sortKey", "p.produto-preco");

	$("#mais-recente, #mobile-mais-recente").click(function () {
		//chama função que ordena os produtos pelo mais recente
		$("#produtos-json").ordenaProdutoRecente();
	})

	$("#maior-preco, #mobile-maior-preco").click(function () {
		//chama função que ordena os produtos pelo menor preço
		ordenaProdutoDec($("#produtos-json"), ".produto", $(this).data("sortKey"));
	})

	$("#menor-preco, #mobile-menor-preco").click(function () {
		//chama função que ordena os produtos pelo maior preço
		ordenaProdutoAsc($("#produtos-json"), ".produto", $(this).data("sortKey"));
	})
});
